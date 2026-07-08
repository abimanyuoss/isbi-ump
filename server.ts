import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { put } from '@vercel/blob';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const JWT_SECRET = process.env.JWT_SECRET || 'isbi-ump-super-secret-key-2026';

// Middleware to verify JWT token
const authenticateAdmin = (req: any, res: any, next: any) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ success: false, error: 'Akses ditolak. Sesi admin tidak ditemukan.' });
  }

  jwt.verify(token, JWT_SECRET, (err: any, decoded: any) => {
    if (err) {
      return res.status(403).json({ success: false, error: 'Sesi admin telah kedaluwarsa. Silakan login kembali.' });
    }
    req.admin = decoded;
    next();
  });
};

// Create uploads directory if it doesn't exist (handle read-only serverless environment like Vercel)
const uploadsDir = process.env.VERCEL
  ? path.join('/tmp', 'uploads')
  : path.join(__dirname, 'public', 'uploads');

try {
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }
} catch (err) {
  console.warn('Warning: Failed to create uploads directory:', err);
}

// Serve static uploads
app.use('/uploads', express.static(uploadsDir));

// Logger middleware
app.use((req, res, next) => {
  console.log(`[API] ${req.method} ${req.url}`);
  next();
});

// Konfigurasi Connection Pool untuk TiDB Cloud (MySQL)
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 4000,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true,
  },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// 0. UPLOAD MEDIA (Mendukung upload gambar dan video, dengan validasi dan Vercel Blob fallback)
app.post('/api/upload', authenticateAdmin, async (req: any, res: any) => {
  const { fileName, fileData } = req.body;
  if (!fileName || !fileData) {
    return res.status(400).json({ success: false, error: 'Nama berkas dan data berkas (base64) wajib diisi!' });
  }

  // 1. Validasi Ekstensi File (Hanya gambar dan video)
  const fileExt = path.extname(fileName).toLowerCase();
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.mp4', '.mov', '.avi'];
  if (!allowedExtensions.includes(fileExt)) {
    return res.status(400).json({ success: false, error: 'Format berkas tidak diizinkan! Hanya diperbolehkan gambar atau video.' });
  }

  try {
    // Decode base64 data
    const base64Data = fileData.replace(/^data:.*;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    // 2. Validasi Ukuran File (Maksimal 10MB)
    const MAX_SIZE = 10 * 1024 * 1024;
    if (buffer.length > MAX_SIZE) {
      return res.status(400).json({ success: false, error: 'Ukuran berkas melebihi batas maksimum 10MB!' });
    }

    // Generate unique filename
    const baseName = path.basename(fileName, fileExt).replace(/[^a-zA-Z0-9]/g, '_');
    const uniqueFileName = `${baseName}_${Date.now()}${fileExt}`;

    // 3. Cek Vercel Blob Token
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const blob = await put(`uploads/${uniqueFileName}`, buffer, {
        access: 'public',
      });
      res.json({ success: true, url: blob.url });
    } else {
      // Fallback ke penyimpanan lokal/tmp (untuk development)
      const filePath = path.join(uploadsDir, uniqueFileName);
      fs.writeFileSync(filePath, buffer);
      const relativeUrl = `/uploads/${uniqueFileName}`;
      res.json({ success: true, url: relativeUrl });
    }
  } catch (err: any) {
    console.error('Error uploading file:', err);
    res.status(500).json({ success: false, error: 'Gagal mengunggah berkas.' });
  }
});

// 1. GET ALL DATA (Untuk inisialisasi aplikasi sekali panggil)
app.get('/api/all-data', async (req, res) => {
  try {
    const [programs] = await pool.query('SELECT * FROM programs');
    const [berita] = await pool.query('SELECT * FROM berita');
    const [umkm] = await pool.query('SELECT * FROM umkm');
    const [albums] = await pool.query('SELECT * FROM albums');
    const [photos] = await pool.query('SELECT * FROM photos');
    const [prestasi] = await pool.query('SELECT * FROM prestasi');
    const [profilRows] = await pool.query<any[]>('SELECT * FROM profil WHERE id = "main_profil"');
    const [organisasi] = await pool.query('SELECT * FROM organisasi ORDER BY urutan ASC');

    let profil = null;
    if (profilRows.length > 0) {
      profil = profilRows[0];
      // Parse JSON string dari kolom misi_list kembali menjadi array string
      if (profil.misi_list) {
        try {
          profil.misi_list = typeof profil.misi_list === 'string' ? JSON.parse(profil.misi_list) : profil.misi_list;
        } catch (_) {
          profil.misi_list = [];
        }
      }
    }

    res.json({
      success: true,
      data: {
        programs,
        berita,
        umkm,
        albums,
        photos,
        pendaftaran: [], // Dikosongkan demi alasan privasi data pendaftar (hanya diakses via /api/pendaftaran oleh admin)
        prestasi,
        profil,
        organisasi
      }
    });
  } catch (err: any) {
    console.error('Gagal mengambil semua data:', err);
    res.status(500).json({ success: false, error: 'Gagal mengambil data aplikasi.' });
  }
});

// 2. SYNC ENDPOINTS (Dilindungi oleh authenticateAdmin)

// Sync Programs
app.post('/api/sync/programs', authenticateAdmin, async (req, res) => {
  const items = req.body as any[];
  if (!Array.isArray(items)) {
    return res.status(400).json({ success: false, error: 'Request body must be an array' });
  }

  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    // Hapus data yang tidak ada di list input
    if (items.length > 0) {
      const ids = items.map(item => item.id);
      await connection.query('DELETE FROM programs WHERE id NOT IN (?)', [ids]);
    } else {
      await connection.query('DELETE FROM programs');
    }

    // Upsert items yang masuk
    for (const p of items) {
      await connection.query(
        `INSERT INTO programs (id, nama_program, deskripsi, syarat, jadwal_mulai, jadwal_selesai, status)
         VALUES (?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
         nama_program = VALUES(nama_program),
         deskripsi = VALUES(deskripsi),
         syarat = VALUES(syarat),
         jadwal_mulai = VALUES(jadwal_mulai),
         jadwal_selesai = VALUES(jadwal_selesai),
         status = VALUES(status)`,
        [p.id, p.nama_program, p.deskripsi, p.syarat, p.jadwal_mulai, p.jadwal_selesai, p.status]
      );
    }

    await connection.commit();
    res.json({ success: true, message: 'Programs synced successfully' });
  } catch (err: any) {
    await connection.rollback();
    console.error('Error syncing programs:', err);
    res.status(500).json({ success: false, error: 'Gagal sinkronisasi data program.' });
  } finally {
    connection.release();
  }
});

// Sync Berita
app.post('/api/sync/berita', authenticateAdmin, async (req, res) => {
  const items = req.body as any[];
  if (!Array.isArray(items)) {
    return res.status(400).json({ success: false, error: 'Request body must be an array' });
  }

  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    if (items.length > 0) {
      const ids = items.map(item => item.id);
      await connection.query('DELETE FROM berita WHERE id NOT IN (?)', [ids]);
    } else {
      await connection.query('DELETE FROM berita');
    }

    for (const b of items) {
      await connection.query(
        `INSERT INTO berita (id, admin_id, kategori_id, judul, slug, konten, foto_sampul, status, tanggal_terbit)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
         admin_id = VALUES(admin_id),
         kategori_id = VALUES(kategori_id),
         judul = VALUES(judul),
         slug = VALUES(slug),
         konten = VALUES(konten),
         foto_sampul = VALUES(foto_sampul),
         status = VALUES(status),
         tanggal_terbit = VALUES(tanggal_terbit)`,
        [b.id, b.admin_id, b.kategori_id, b.judul, b.slug, b.konten, b.foto_sampul, b.status, b.tanggal_terbit]
      );
    }

    await connection.commit();
    res.json({ success: true, message: 'Berita synced successfully' });
  } catch (err: any) {
    await connection.rollback();
    console.error('Error syncing berita:', err);
    res.status(500).json({ success: false, error: 'Gagal sinkronisasi data berita.' });
  } finally {
    connection.release();
  }
});

// Sync UMKM
app.post('/api/sync/umkm', authenticateAdmin, async (req, res) => {
  const items = req.body as any[];
  if (!Array.isArray(items)) {
    return res.status(400).json({ success: false, error: 'Request body must be an array' });
  }

  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    if (items.length > 0) {
      const ids = items.map(item => item.id);
      await connection.query('DELETE FROM umkm WHERE id NOT IN (?)', [ids]);
    } else {
      await connection.query('DELETE FROM umkm');
    }

    for (const u of items) {
      await connection.query(
        `INSERT INTO umkm (id, admin_id, kategori_id, nama_usaha, nama_mahasiswa, program_studi, deskripsi, histori_usaha, foto_produk, kontak, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
         admin_id = VALUES(admin_id),
         kategori_id = VALUES(kategori_id),
         nama_usaha = VALUES(nama_usaha),
         nama_mahasiswa = VALUES(nama_mahasiswa),
         program_studi = VALUES(program_studi),
         deskripsi = VALUES(deskripsi),
         histori_usaha = VALUES(histori_usaha),
         foto_produk = VALUES(foto_produk),
         kontak = VALUES(kontak),
         status = VALUES(status)`,
        [u.id, u.admin_id, u.kategori_id, u.nama_usaha, u.nama_mahasiswa, u.program_studi, u.deskripsi, u.histori_usaha, u.foto_produk, u.kontak, u.status]
      );
    }

    await connection.commit();
    res.json({ success: true, message: 'UMKM synced successfully' });
  } catch (err: any) {
    await connection.rollback();
    console.error('Error syncing umkm:', err);
    res.status(500).json({ success: false, error: 'Gagal sinkronisasi data UMKM.' });
  } finally {
    connection.release();
  }
});

// Sync Albums
app.post('/api/sync/albums', authenticateAdmin, async (req, res) => {
  const items = req.body as any[];
  if (!Array.isArray(items)) {
    return res.status(400).json({ success: false, error: 'Request body must be an array' });
  }

  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    if (items.length > 0) {
      const ids = items.map(item => item.id);
      await connection.query('DELETE FROM albums WHERE id NOT IN (?)', [ids]);
    } else {
      await connection.query('DELETE FROM albums');
    }

    for (const a of items) {
      await connection.query(
        `INSERT INTO albums (id, judul_album, tanggal_kegiatan, deskripsi_singkat)
         VALUES (?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
         judul_album = VALUES(judul_album),
         tanggal_kegiatan = VALUES(tanggal_kegiatan),
         deskripsi_singkat = VALUES(deskripsi_singkat)`,
        [a.id, a.judul_album, a.tanggal_kegiatan, a.deskripsi_singkat]
      );
    }

    await connection.commit();
    res.json({ success: true, message: 'Albums synced successfully' });
  } catch (err: any) {
    await connection.rollback();
    console.error('Error syncing albums:', err);
    res.status(500).json({ success: false, error: 'Gagal sinkronisasi data album.' });
  } finally {
    connection.release();
  }
});

// Sync Photos
app.post('/api/sync/photos', authenticateAdmin, async (req, res) => {
  const items = req.body as any[];
  if (!Array.isArray(items)) {
    return res.status(400).json({ success: false, error: 'Request body must be an array' });
  }

  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    if (items.length > 0) {
      const ids = items.map(item => item.id);
      await connection.query('DELETE FROM photos WHERE id NOT IN (?)', [ids]);
    } else {
      await connection.query('DELETE FROM photos');
    }

    for (const ph of items) {
      await connection.query(
        `INSERT INTO photos (id, album_id, url_foto, keterangan)
         VALUES (?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
         album_id = VALUES(album_id),
         url_foto = VALUES(url_foto),
         keterangan = VALUES(keterangan)`,
        [ph.id, ph.album_id, ph.url_foto, ph.keterangan]
      );
    }

    await connection.commit();
    res.json({ success: true, message: 'Photos synced successfully' });
  } catch (err: any) {
    await connection.rollback();
    console.error('Error syncing photos:', err);
    res.status(500).json({ success: false, error: 'Gagal sinkronisasi data galeri foto.' });
  } finally {
    connection.release();
  }
});

// Sync Pendaftaran (Admin Only)
app.post('/api/sync/pendaftaran', authenticateAdmin, async (req, res) => {
  const items = req.body as any[];
  if (!Array.isArray(items)) {
    return res.status(400).json({ success: false, error: 'Request body must be an array' });
  }

  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    if (items.length > 0) {
      const ids = items.map(item => item.id);
      await connection.query('DELETE FROM pendaftaran WHERE id NOT IN (?)', [ids]);
    } else {
      await connection.query('DELETE FROM pendaftaran');
    }

    for (const r of items) {
      await connection.query(
        `INSERT INTO pendaftaran (id, program_id, nama, email, no_hp, pesan, file_proposal, status, tanggal_masuk)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
         program_id = VALUES(program_id),
         nama = VALUES(nama),
         email = VALUES(email),
         no_hp = VALUES(no_hp),
         pesan = VALUES(pesan),
         file_proposal = VALUES(file_proposal),
         status = VALUES(status),
         tanggal_masuk = VALUES(tanggal_masuk)`,
        [r.id, r.program_id, r.nama, r.email, r.no_hp, r.pesan, r.file_proposal || null, r.status, r.tanggal_masuk]
      );
    }

    await connection.commit();
    res.json({ success: true, message: 'Pendaftaran synced successfully' });
  } catch (err: any) {
    await connection.rollback();
    console.error('Error syncing pendaftaran:', err);
    res.status(500).json({ success: false, error: 'Gagal sinkronisasi data pendaftaran.' });
  } finally {
    connection.release();
  }
});

// Sync Prestasi
app.post('/api/sync/prestasi', authenticateAdmin, async (req, res) => {
  const items = req.body as any[];
  if (!Array.isArray(items)) {
    return res.status(400).json({ success: false, error: 'Request body must be an array' });
  }

  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    if (items.length > 0) {
      const ids = items.map(item => item.id);
      await connection.query('DELETE FROM prestasi WHERE id NOT IN (?)', [ids]);
    } else {
      await connection.query('DELETE FROM prestasi');
    }

    for (const pr of items) {
      await connection.query(
        `INSERT INTO prestasi (id, judul, tim_usaha, nama_mahasiswa, tingkat, tahun, peringkat, penyelenggara, deskripsi, foto_prestasi)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
         judul = VALUES(judul),
         tim_usaha = VALUES(tim_usaha),
         nama_mahasiswa = VALUES(nama_mahasiswa),
         tingkat = VALUES(tingkat),
         tahun = VALUES(tahun),
         peringkat = VALUES(peringkat),
         penyelenggara = VALUES(penyelenggara),
         deskripsi = VALUES(deskripsi),
         foto_prestasi = VALUES(foto_prestasi)`,
        [pr.id, pr.judul, pr.tim_usaha, pr.nama_mahasiswa, pr.tingkat, pr.tahun, pr.peringkat, pr.penyelenggara, pr.deskripsi, pr.foto_prestasi]
      );
    }

    await connection.commit();
    res.json({ success: true, message: 'Prestasi synced successfully' });
  } catch (err: any) {
    await connection.rollback();
    console.error('Error syncing prestasi:', err);
    res.status(500).json({ success: false, error: 'Gagal sinkronisasi data prestasi.' });
  } finally {
    connection.release();
  }
});

// Sync/Update Profil (Single row update)
app.post('/api/sync/profil', authenticateAdmin, async (req, res) => {
  const p = req.body;
  if (!p || typeof p !== 'object') {
    return res.status(400).json({ success: false, error: 'Request body must be an object representing ProfilData' });
  }

  try {
    await pool.query(
      `UPDATE profil SET
       sejarah_judul = ?, sejarah_p1 = ?, sejarah_p2 = ?, sejarah_foto = ?,
       visi_konten = ?, misi_list = ?, organisasi_pimpinan = ?, organisasi_pengarah = ?,
       organisasi_ketua = ?, organisasi_koord_inkubasi = ?, organisasi_koord_inovasi = ?,
       organisasi_koord_kemitraan = ?, kontak_alamat = ?, kontak_email = ?, kontak_phone = ?
       WHERE id = "main_profil"`,
      [
        p.sejarah_judul,
        p.sejarah_p1,
        p.sejarah_p2,
        p.sejarah_foto,
        p.visi_konten,
        JSON.stringify(p.misi_list || []),
        p.organisasi_pimpinan,
        p.organisasi_pengarah,
        p.organisasi_ketua,
        p.organisasi_koord_inkubasi,
        p.organisasi_koord_inovasi,
        p.organisasi_koord_kemitraan,
        p.kontak_alamat,
        p.kontak_email,
        p.kontak_phone
      ]
    );

    res.json({ success: true, message: 'Profil updated successfully' });
  } catch (err: any) {
    console.error('Error updating profil:', err);
    res.status(500).json({ success: false, error: 'Gagal memperbarui profil.' });
  }
});

// Sync Organisasi
app.post('/api/sync/organisasi', authenticateAdmin, async (req, res) => {
  const items = req.body as any[];
  if (!Array.isArray(items)) {
    return res.status(400).json({ success: false, error: 'Request body must be an array' });
  }

  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    if (items.length > 0) {
      const ids = items.map(item => item.id);
      await connection.query('DELETE FROM organisasi WHERE id NOT IN (?)', [ids]);
    } else {
      await connection.query('DELETE FROM organisasi');
    }

    for (const member of items) {
      await connection.query(
        `INSERT INTO organisasi (id, nama, jabatan, foto, urutan)
         VALUES (?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
         nama = VALUES(nama),
         jabatan = VALUES(jabatan),
         foto = VALUES(foto),
         urutan = VALUES(urutan)`,
        [member.id, member.nama, member.jabatan, member.foto, member.urutan]
      );
    }

    await connection.commit();
    res.json({ success: true, message: 'Organisasi synced successfully' });
  } catch (err: any) {
    await connection.rollback();
    console.error('Error syncing organisasi:', err);
    res.status(500).json({ success: false, error: 'Gagal sinkronisasi data organisasi.' });
  } finally {
    connection.release();
  }
});

// PUBLIC FILE UPLOAD (untuk mahasiswa mengunggah proposal tanpa login admin)
app.post('/api/upload-public', async (req, res) => {
  const { fileName, fileData } = req.body;
  if (!fileName || !fileData) {
    return res.status(400).json({ success: false, error: 'Nama berkas dan data berkas wajib diisi!' });
  }

  const fileExt = path.extname(fileName).toLowerCase();
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.pdf', '.doc', '.docx'];
  if (!allowedExtensions.includes(fileExt)) {
    return res.status(400).json({ success: false, error: 'Format berkas tidak diizinkan! Hanya diperbolehkan gambar, PDF, atau dokumen Word.' });
  }

  try {
    const base64Data = fileData.replace(/^data:.*;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    const MAX_SIZE = 5 * 1024 * 1024; // 5MB for public uploads
    if (buffer.length > MAX_SIZE) {
      return res.status(400).json({ success: false, error: 'Ukuran berkas melebihi batas maksimum 5MB!' });
    }

    const baseName = path.basename(fileName, fileExt).replace(/[^a-zA-Z0-9]/g, '_');
    const uniqueFileName = `proposal_${baseName}_${Date.now()}${fileExt}`;

    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const blob = await put(`proposals/${uniqueFileName}`, buffer, { access: 'public' });
      res.json({ success: true, url: blob.url });
    } else {
      const filePath = path.join(uploadsDir, uniqueFileName);
      fs.writeFileSync(filePath, buffer);
      res.json({ success: true, url: `/uploads/${uniqueFileName}` });
    }
  } catch (err: any) {
    console.error('Error uploading public file:', err);
    res.status(500).json({ success: false, error: 'Gagal mengunggah berkas.' });
  }
});

// 3. ADMIN AUTHENTICATION & SECURE ENDPOINTS

// Admin Login
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username dan password wajib diisi!' });
  }

  try {
    const [rows] = await pool.query<any[]>(
      'SELECT id, username, password, nama_lengkap, role FROM admins WHERE username = ?',
      [username]
    );

    if (rows.length > 0) {
      const admin = rows[0];
      const match = await bcrypt.compare(password, admin.password);
      if (match) {
        // Hapus password dari payload respon
        const { password: _, ...userWithoutPassword } = admin;
        const token = jwt.sign(
          { id: admin.id, username: admin.username, role: admin.role },
          JWT_SECRET,
          { expiresIn: '24h' }
        );
        return res.json({
          success: true,
          user: userWithoutPassword,
          token
        });
      }
    }
    
    return res.status(401).json({
      success: false,
      message: 'Username atau Password salah!'
    });
  } catch (err: any) {
    console.error('Error during admin login query:', err);
    res.status(500).json({ success: false, error: 'Terjadi kesalahan sistem saat proses login.' });
  }
});

// Verifikasi token JWT admin
app.get('/api/auth/verify', authenticateAdmin, (req: any, res: any) => {
  res.json({ success: true, user: req.admin });
});

// Get Pendaftaran (Hanya admin terautentikasi)
app.get('/api/pendaftaran', authenticateAdmin, async (req: any, res: any) => {
  try {
    const [rows] = await pool.query('SELECT * FROM pendaftaran ORDER BY tanggal_masuk DESC');
    res.json({ success: true, data: rows });
  } catch (err: any) {
    console.error('Error fetching registrations:', err);
    res.status(550).json({ success: false, error: 'Gagal mengambil data pendaftaran.' });
  }
});

// Post Pendaftaran baru (Publik - tanpa token)
app.post('/api/pendaftaran', async (req, res) => {
  const { id, program_id, nama, email, no_hp, pesan, file_proposal, status, tanggal_masuk } = req.body;
  if (!program_id || !nama || !email || !no_hp || !pesan) {
    return res.status(400).json({ success: false, error: 'Data pendaftaran tidak lengkap!' });
  }

  try {
    await pool.query(
      `INSERT INTO pendaftaran (id, program_id, nama, email, no_hp, pesan, file_proposal, status, tanggal_masuk)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id || `reg-${Date.now()}`,
        program_id,
        nama,
        email,
        no_hp,
        pesan,
        file_proposal || null,
        status || 'Masuk',
        tanggal_masuk || new Date().toISOString().replace('T', ' ').substring(0, 16)
      ]
    );
    res.json({ success: true, message: 'Pendaftaran Anda berhasil dikirim!' });
  } catch (err: any) {
    console.error('Error creating registration:', err);
    res.status(500).json({ success: false, error: 'Terjadi kesalahan internal. Gagal mengirim pendaftaran.' });
  }
});

// Production: serve built static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve('dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

export default app;
