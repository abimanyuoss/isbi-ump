import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import { 
  PROGRAM_SEED, 
  BERITA_SEED, 
  UMKM_SEED, 
  ALBUM_SEED, 
  FOTO_SEED, 
  PENDAFTARAN_SEED,
  KATEGORI_BERITA_SEED,
  KATEGORI_UMKM_SEED,
  PRESTASI_SEED,
  PROFIL_SEED
} from './src/data';

dotenv.config();

async function initDb() {
  console.log('Menginisialisasi database TiDB Cloud...');
  
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 4000,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: {
      minVersion: 'TLSv1.2',
      rejectUnauthorized: true,
    },
  });

  try {
    // 1. Buat Tabel-Tabel
    console.log('Membuat tabel admins...');
    await connection.query(`
      CREATE TABLE IF NOT EXISTS admins (
        id VARCHAR(50) PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        nama_lengkap VARCHAR(100) NOT NULL,
        role VARCHAR(20) NOT NULL
      )
    `);

    console.log('Membuat tabel programs...');
    await connection.query(`
      CREATE TABLE IF NOT EXISTS programs (
        id VARCHAR(50) PRIMARY KEY,
        nama_program VARCHAR(255) NOT NULL,
        deskripsi TEXT,
        syarat TEXT,
        jadwal_mulai VARCHAR(50),
        jadwal_selesai VARCHAR(50),
        status VARCHAR(50)
      )
    `);

    console.log('Membuat tabel kategori_berita...');
    await connection.query(`
      CREATE TABLE IF NOT EXISTS kategori_berita (
        id VARCHAR(50) PRIMARY KEY,
        nama_kategori VARCHAR(100) NOT NULL
      )
    `);

    console.log('Membuat tabel berita...');
    await connection.query(`
      CREATE TABLE IF NOT EXISTS berita (
        id VARCHAR(50) PRIMARY KEY,
        admin_id VARCHAR(50),
        kategori_id VARCHAR(50),
        judul VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL,
        konten TEXT,
        foto_sampul VARCHAR(500),
        status VARCHAR(50),
        tanggal_terbit VARCHAR(50)
      )
    `);

    console.log('Membuat tabel kategori_umkm...');
    await connection.query(`
      CREATE TABLE IF NOT EXISTS kategori_umkm (
        id VARCHAR(50) PRIMARY KEY,
        nama_kategori VARCHAR(100) NOT NULL
      )
    `);

    console.log('Membuat tabel umkm...');
    await connection.query(`
      CREATE TABLE IF NOT EXISTS umkm (
        id VARCHAR(50) PRIMARY KEY,
        admin_id VARCHAR(50),
        kategori_id VARCHAR(50),
        nama_usaha VARCHAR(255) NOT NULL,
        nama_mahasiswa VARCHAR(255) NOT NULL,
        program_studi VARCHAR(255),
        deskripsi TEXT,
        histori_usaha TEXT,
        foto_produk VARCHAR(500),
        kontak VARCHAR(50),
        status VARCHAR(50)
      )
    `);

    console.log('Membuat tabel albums...');
    await connection.query(`
      CREATE TABLE IF NOT EXISTS albums (
        id VARCHAR(50) PRIMARY KEY,
        judul_album VARCHAR(255) NOT NULL,
        tanggal_kegiatan VARCHAR(50),
        deskripsi_singkat TEXT
      )
    `);

    console.log('Membuat tabel photos...');
    await connection.query(`
      CREATE TABLE IF NOT EXISTS photos (
        id VARCHAR(50) PRIMARY KEY,
        album_id VARCHAR(50) NOT NULL,
        url_foto VARCHAR(500) NOT NULL,
        keterangan TEXT
      )
    `);

    console.log('Membuat tabel pendaftaran...');
    await connection.query(`
      CREATE TABLE IF NOT EXISTS pendaftaran (
        id VARCHAR(50) PRIMARY KEY,
        program_id VARCHAR(50) NOT NULL,
        nama VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        no_hp VARCHAR(50) NOT NULL,
        pesan TEXT,
        file_proposal VARCHAR(500),
        status VARCHAR(50),
        tanggal_masuk VARCHAR(50)
      )
    `);

    console.log('Membuat tabel prestasi...');
    await connection.query(`
      CREATE TABLE IF NOT EXISTS prestasi (
        id VARCHAR(50) PRIMARY KEY,
        judul VARCHAR(255) NOT NULL,
        tim_usaha VARCHAR(255),
        nama_mahasiswa VARCHAR(255),
        tingkat VARCHAR(50),
        tahun VARCHAR(10),
        peringkat VARCHAR(50),
        penyelenggara VARCHAR(255),
        deskripsi TEXT,
        foto_prestasi VARCHAR(500)
      )
    `);

    console.log('Membuat tabel profil...');
    await connection.query(`
      CREATE TABLE IF NOT EXISTS profil (
        id VARCHAR(50) PRIMARY KEY,
        sejarah_judul VARCHAR(255),
        sejarah_p1 TEXT,
        sejarah_p2 TEXT,
        sejarah_foto VARCHAR(500),
        visi_konten TEXT,
        misi_list JSON,
        organisasi_pimpinan VARCHAR(255),
        organisasi_pengarah VARCHAR(255),
        organisasi_ketua VARCHAR(255),
        organisasi_koord_inkubasi VARCHAR(255),
        organisasi_koord_inovasi VARCHAR(255),
        organisasi_koord_kemitraan VARCHAR(255),
        kontak_alamat TEXT,
        kontak_email VARCHAR(255),
        kontak_phone VARCHAR(50)
      )
    `);

    console.log('Semua tabel berhasil diverifikasi/dibuat.');

    // 2. Seed Data Awal jika kosong
    
    // Seed Admin
    // Seed Admin (Selalu lakukan upsert untuk memastikan password ter-hash)
    console.log('Seeding data admin...');
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await connection.query(
      `INSERT INTO admins (id, username, password, nama_lengkap, role)
       VALUES (?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
       password = VALUES(password),
       nama_lengkap = VALUES(nama_lengkap),
       role = VALUES(role)`,
      ['admin-1', 'admin', hashedPassword, 'Administrator ISBI UMP', 'superadmin']
    );

    // Seed Kategori Berita
    const [catNewsRows] = await connection.query<any[]>('SELECT COUNT(*) as count FROM kategori_berita');
    if (catNewsRows[0].count === 0) {
      console.log('Seeding data kategori berita...');
      for (const cat of KATEGORI_BERITA_SEED) {
        await connection.query('INSERT INTO kategori_berita (id, nama_kategori) VALUES (?, ?)', [cat.id, cat.nama_kategori]);
      }
    }

    // Seed Kategori UMKM
    const [catUmkmRows] = await connection.query<any[]>('SELECT COUNT(*) as count FROM kategori_umkm');
    if (catUmkmRows[0].count === 0) {
      console.log('Seeding data kategori UMKM...');
      for (const cat of KATEGORI_UMKM_SEED) {
        await connection.query('INSERT INTO kategori_umkm (id, nama_kategori) VALUES (?, ?)', [cat.id, cat.nama_kategori]);
      }
    }

    // Seed Programs
    const [progRows] = await connection.query<any[]>('SELECT COUNT(*) as count FROM programs');
    if (progRows[0].count === 0) {
      console.log('Seeding data programs...');
      for (const p of PROGRAM_SEED) {
        await connection.query(
          'INSERT INTO programs (id, nama_program, deskripsi, syarat, jadwal_mulai, jadwal_selesai, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [p.id, p.nama_program, p.deskripsi, p.syarat, p.jadwal_mulai, p.jadwal_selesai, p.status]
        );
      }
    }

    // Seed Berita
    const [newsRows] = await connection.query<any[]>('SELECT COUNT(*) as count FROM berita');
    if (newsRows[0].count === 0) {
      console.log('Seeding data berita...');
      for (const b of BERITA_SEED) {
        await connection.query(
          'INSERT INTO berita (id, admin_id, kategori_id, judul, slug, konten, foto_sampul, status, tanggal_terbit) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [b.id, b.admin_id, b.kategori_id, b.judul, b.slug, b.konten, b.foto_sampul, b.status, b.tanggal_terbit]
        );
      }
    }

    // Seed UMKM
    const [umkmRows] = await connection.query<any[]>('SELECT COUNT(*) as count FROM umkm');
    if (umkmRows[0].count === 0) {
      console.log('Seeding data UMKM...');
      for (const u of UMKM_SEED) {
        await connection.query(
          'INSERT INTO umkm (id, admin_id, kategori_id, nama_usaha, nama_mahasiswa, program_studi, deskripsi, histori_usaha, foto_produk, kontak, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [u.id, u.admin_id, u.kategori_id, u.nama_usaha, u.nama_mahasiswa, u.program_studi, u.deskripsi, u.histori_usaha, u.foto_produk, u.kontak, u.status]
        );
      }
    }

    // Seed Albums
    const [albumRows] = await connection.query<any[]>('SELECT COUNT(*) as count FROM albums');
    if (albumRows[0].count === 0) {
      console.log('Seeding data albums...');
      for (const a of ALBUM_SEED) {
        await connection.query(
          'INSERT INTO albums (id, judul_album, tanggal_kegiatan, deskripsi_singkat) VALUES (?, ?, ?, ?)',
          [a.id, a.judul_album, a.tanggal_kegiatan, a.deskripsi_singkat]
        );
      }
    }

    // Seed Photos
    const [photoRows] = await connection.query<any[]>('SELECT COUNT(*) as count FROM photos');
    if (photoRows[0].count === 0) {
      console.log('Seeding data photos...');
      for (const ph of FOTO_SEED) {
        await connection.query(
          'INSERT INTO photos (id, album_id, url_foto, keterangan) VALUES (?, ?, ?, ?)',
          [ph.id, ph.album_id, ph.url_foto, ph.keterangan]
        );
      }
    }

    // Seed Pendaftaran
    const [regRows] = await connection.query<any[]>('SELECT COUNT(*) as count FROM pendaftaran');
    if (regRows[0].count === 0) {
      console.log('Seeding data pendaftaran...');
      for (const r of PENDAFTARAN_SEED) {
        await connection.query(
          'INSERT INTO pendaftaran (id, program_id, nama, email, no_hp, pesan, status, tanggal_masuk) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
          [r.id, r.program_id, r.nama, r.email, r.no_hp, r.pesan, r.status, r.tanggal_masuk]
        );
      }
    }

    // Seed Prestasi
    const [prestRows] = await connection.query<any[]>('SELECT COUNT(*) as count FROM prestasi');
    if (prestRows[0].count === 0) {
      console.log('Seeding data prestasi...');
      for (const pr of PRESTASI_SEED) {
        await connection.query(
          'INSERT INTO prestasi (id, judul, tim_usaha, nama_mahasiswa, tingkat, tahun, peringkat, penyelenggara, deskripsi, foto_prestasi) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [pr.id, pr.judul, pr.tim_usaha, pr.nama_mahasiswa, pr.tingkat, pr.tahun, pr.peringkat, pr.penyelenggara, pr.deskripsi, pr.foto_prestasi]
        );
      }
    }

    // Seed Profil
    const [profRows] = await connection.query<any[]>('SELECT COUNT(*) as count FROM profil');
    if (profRows[0].count === 0) {
      console.log('Seeding data profil...');
      await connection.query(
        'INSERT INTO profil (id, sejarah_judul, sejarah_p1, sejarah_p2, sejarah_foto, visi_konten, misi_list, organisasi_pimpinan, organisasi_pengarah, organisasi_ketua, organisasi_koord_inkubasi, organisasi_koord_inovasi, organisasi_koord_kemitraan, kontak_alamat, kontak_email, kontak_phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          'main_profil',
          PROFIL_SEED.sejarah_judul,
          PROFIL_SEED.sejarah_p1,
          PROFIL_SEED.sejarah_p2,
          PROFIL_SEED.sejarah_foto,
          PROFIL_SEED.visi_konten,
          JSON.stringify(PROFIL_SEED.misi_list),
          PROFIL_SEED.organisasi_pimpinan,
          PROFIL_SEED.organisasi_pengarah,
          PROFIL_SEED.organisasi_ketua,
          PROFIL_SEED.organisasi_koord_inkubasi,
          PROFIL_SEED.organisasi_koord_inovasi,
          PROFIL_SEED.organisasi_koord_kemitraan,
          PROFIL_SEED.kontak_alamat,
          PROFIL_SEED.kontak_email,
          PROFIL_SEED.kontak_phone
        ]
      );
    }

    console.log('=== INISIALISASI DATABASE BERHASIL ===');
  } catch (err) {
    console.error('=== INISIALISASI DATABASE GAGAL ===');
    console.error(err);
  } finally {
    await connection.end();
  }
}

// Hanya jalankan jika dipanggil langsung
if (process.argv.includes('--run')) {
  initDb();
}

export { initDb };
