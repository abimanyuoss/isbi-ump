# ISBI UMP - Islamic Student Business Incubator

Sistem Informasi Portal Resmi Islamic Student Business Incubator (ISBI) Universitas Muhammadiyah Purwokerto di bawah naungan Biro Kemahasiswaan & Alumni (BKA). Platform ini dirancang untuk memfasilitasi publikasi program inkubasi, profil wirausaha mahasiswa (UMKM), berita kegiatan, galeri dokumentasi, pendaftaran tenant baru, serta dashboard admin untuk pengelolaan data secara terpusat.

## 🚀 Fitur Utama

- **Beranda & Quick Access**: Ringkasan statistik, akses cepat menu utama, dan tampilan visual program & prestasi terbaru.
- **Profil Inkubator**: Halaman sejarah pendirian, visi, misi, dan target strategis ISBI UMP.
- **Program & Kelas**: Daftar kelas pembinaan wirausaha mahasiswa, profil mentor, dan info detail program (seperti Boot Camp Inkubasi Bisnis).
- **Galeri Dokumentasi**: Album kegiatan wirausaha mahasiswa dan expo kewirausahaan.
- **Portal UMKM Mahasiswa**: Direktori profil produk dan cerita sukses bisnis yang dirintis mahasiswa UMP (misal: Batik Modern, Kedai Kopi, Kerajinan Anyaman).
- **Prestasi & Pendanaan**: Dokumentasi capaian kompetisi nasional (seperti P2MW Ditbelmawa Kemendikbudristek dan KMI Expo).
- **Kontak & Hubungi Kami**: Form pesan langsung ke admin serta peta lokasi kampus UMP.
- **Console Dashboard Admin**: Halaman khusus admin terautentikasi untuk mengelola secara CRUD (Create, Read, Update, Delete) data berita, program, UMKM, pendaftaran, dan pesan masuk.

## 🛠️ Teknologi & Pustaka

Aplikasi ini dibangun menggunakan arsitektur modern berbasis Client-Side:
- **Framework**: [React 19](https://react.dev/) dengan [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Motion (Framer Motion v12)](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Struktur Proyek

```text
isbi-ump/
├── assets/             # Aset gambar dan statis
├── src/
│   ├── components/     # Komponen React (Header, Footer, PageViews, Dashboard)
│   ├── data.ts         # Data awal/seed data sistem
│   ├── types.ts        # Definisi antarmuka TypeScript (Interface)
│   ├── main.tsx        # Entry point aplikasi
│   ├── index.css       # File stylesheet global & Tailwind import
│   └── App.tsx         # Manajemen state dan router halaman utama
├── package.json        # Dependensi dan script build
└── tsconfig.json       # Konfigurasi TypeScript compiler
```

## ⚙️ Cara Menjalankan Project

### Prasyarat
Pastikan Anda sudah menginstal **Node.js** (Versi 18 ke atas disarankan) di komputer Anda.

### Langkah-langkah
1. **Klon atau unduh repositori ini** ke direktori lokal Anda.
2. **Instal seluruh dependensi proyek**:
   ```bash
   npm install
   ```
3. **Jalankan server pengembangan (development mode)**:
   ```bash
   npm run dev
   ```
4. **Buka browser** dan akses halaman local di:
   [http://localhost:3000](http://localhost:3000)

## 🏗️ Build untuk Produksi

Untuk melakukan kompilasi proyek dan menjadikannya siap di-deploy ke hosting statis (seperti Netlify, Vercel, atau cPanel):
```bash
npm run build
```
Hasil build akan tersimpan di dalam folder `/dist`.
