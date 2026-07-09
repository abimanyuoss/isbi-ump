export interface Admin {
  id: string;
  username: string;
  nama_lengkap: string;
  role: 'admin' | 'superadmin';
}

export type ProgramStatus = 'Pendaftaran Dibuka' | 'Berjalan Rutin' | 'Segera Dibuka';

export interface Program {
  id: string;
  nama_program: string;
  deskripsi: string;
  syarat: string; // Separated by newlines or list items
  jadwal_mulai: string;
  jadwal_selesai: string;
  status: ProgramStatus;
}

export type PendaftaranStatus = 'Masuk' | 'Diproses' | 'Diterima' | 'Ditolak';

export interface Pendaftaran {
  id: string;
  program_id: string; // "umum" or specific program id
  nama: string;
  email: string;
  no_hp: string;
  pesan: string;
  file_proposal?: string; // URL to uploaded proposal file (PDF/image)
  status: PendaftaranStatus;
  tanggal_masuk: string;
}

export interface KategoriBerita {
  id: string;
  nama_kategori: 'Kegiatan' | 'Prestasi' | 'Pengumuman' | string;
}

export interface Berita {
  id: string;
  admin_id: string;
  kategori_id: string;
  judul: string;
  slug: string;
  konten: string;
  foto_sampul: string;
  status: 'Draft' | 'Terbit';
  tanggal_terbit: string;
}

export interface GaleriAlbum {
  id: string;
  judul_album: string;
  tanggal_kegiatan: string;
  deskripsi_singkat?: string;
}

export interface GaleriFoto {
  id: string;
  album_id: string;
  url_foto: string;
  keterangan: string;
}

export interface KategoriUMKM {
  id: string;
  nama_kategori: 'Kuliner' | 'Fashion' | 'Kerajinan' | 'Jasa' | string;
}

export interface UMKM {
  id: string;
  admin_id: string;
  kategori_id: string; // references KategoriUMKM.id
  nama_usaha: string;
  nama_mahasiswa: string;
  program_studi: string;
  deskripsi: string;
  histori_usaha: string;
  foto_produk: string;
  kontak: string; // WhatsApp number
  status: 'Aktif' | 'Alumni' | string;
}

export interface Prestasi {
  id: string;
  judul: string;
  tim_usaha: string;
  nama_mahasiswa: string;
  tingkat: 'Nasional' | 'Regional' | 'Internasional' | 'Lokal';
  tahun: string;
  peringkat: string;
  penyelenggara: string;
  deskripsi: string;
  foto_prestasi: string;
}

export interface ProfilData {
  sejarah_judul: string;
  sejarah_p1: string;
  sejarah_p2: string;
  sejarah_foto: string;
  visi_konten: string;
  misi_list: string[];
  organisasi_pimpinan: string;
  organisasi_pengarah: string;
  organisasi_ketua: string;
  organisasi_koord_inkubasi: string;
  organisasi_koord_inovasi: string;
  organisasi_koord_kemitraan: string;
  kontak_alamat: string;
  kontak_email: string;
  kontak_phone: string;
}

export interface Organisasi {
  id: string;
  nama: string;
  jabatan: string;
  foto: string;
  urutan: number;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaTab: string;
  secondaryText: string;
  secondaryTab: string;
  image: string;
  badge: string;
  gradient: string;
  urutan: number;
}
