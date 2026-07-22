import { Program, Berita, KategoriBerita, KategoriUMKM, UMKM, GaleriAlbum, GaleriFoto, Pendaftaran, Prestasi, ProfilData, Organisasi, HeroSlide } from './types';

export const KATEGORI_BERITA_SEED: KategoriBerita[] = [
  { id: 'cat-news-1', nama_kategori: 'Kegiatan' },
  { id: 'cat-news-2', nama_kategori: 'Prestasi' },
  { id: 'cat-news-3', nama_kategori: 'Pengumuman' },
];

export const KATEGORI_UMKM_SEED: KategoriUMKM[] = [
  { id: 'cat-umkm-1', nama_kategori: 'Kuliner' },
  { id: 'cat-umkm-2', nama_kategori: 'Fashion' },
  { id: 'cat-umkm-3', nama_kategori: 'Kerajinan' },
  { id: 'cat-umkm-4', nama_kategori: 'Jasa' },
];

export const PROGRAM_SEED: Program[] = [
  {
    id: 'prog-1',
    nama_program: 'P2MW — Program Pembinaan Mahasiswa Wirausaha',
    deskripsi: 'Program pengembangan usaha mahasiswa dari Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi yang difasilitasi oleh ISBI UMP. Mahasiswa mendapatkan bantuan dana pembinaan hingga belasan juta rupiah, pendampingan intensif dari praktisi, dan kesempatan mengikuti pameran KMI Expo tingkat nasional.',
    syarat: 'Mahasiswa aktif Universitas Muhammadiyah Purwokerto (maksimal semester 6)\nMemiliki kelompok wirausaha yang terdiri dari 3-5 anggota\nMemiliki proposal rencana bisnis yang siap dikembangkan\nUsaha belum pernah menerima pendanaan P2MW tahun sebelumnya',
    jadwal_mulai: '2026-07-01',
    jadwal_selesai: '2026-07-20',
    status: 'Pendaftaran Dibuka'
  },
  {
    id: 'prog-2',
    nama_program: 'Kelas Dasar Kewirausahaan',
    deskripsi: 'Program pelatihan rutin non-SKS bagi mahasiswa UMP yang ingin mempelajari dasar-dasar memulai bisnis dari nol. Materi mencakup pencarian ide bisnis, analisis pasar, perancangan model bisnis (Business Model Canvas), digital marketing, hingga penyusunan laporan keuangan sederhana.',
    syarat: 'Mahasiswa aktif UMP dari seluruh program studi\nMemiliki ketertarikan tinggi di dunia bisnis\nBerkomitmen mengikuti seluruh rangkaian kelas (6 sesi pertemuan)',
    jadwal_mulai: '2026-08-10',
    jadwal_selesai: '2026-09-15',
    status: 'Berjalan Rutin'
  },
  {
    id: 'prog-3',
    nama_program: 'Mentoring Bisnis Berkelanjutan',
    deskripsi: 'Inkubasi mendalam (coaching & mentoring) yang mempertemukan startup mahasiswa binaan ISBI dengan mentor ahli dan investor eksternal untuk melipatgandakan omset usaha dan scale-up operasional.',
    syarat: 'UMKM Mahasiswa terdaftar di database ISBI UMP\nUsaha sudah berjalan minimal 6 bulan dengan bukti penjualan\nOwner berkomitmen menghadiri mentoring tatap muka berkala',
    jadwal_mulai: '2026-10-01',
    jadwal_selesai: '2026-12-15',
    status: 'Segera Dibuka'
  }
];

export const BERITA_SEED: Berita[] = [
  {
    id: 'news-1',
    admin_id: 'admin-1',
    kategori_id: 'cat-news-2', // Prestasi
    judul: '53 Tim Mahasiswa UMP Terdaftar & Dibina ISBI UMP (2024 - 2026)',
    slug: '53-tim-mahasiswa-ump-terdaftar-dibina-isbi-ump',
    konten: `Universitas Muhammadiyah Purwokerto (UMP) melalui Islamic Student Business Incubator (ISBI) secara konsisten mendampingi dan membina 53 tim wirausaha mahasiswa dari tahun 2024 hingga 2026.\n\nSeluruh data profil usaha mahasiswa telah terverifikasi secara resmi, mencakup berbagai bidang usaha strategis mulai dari Kuliner Inovatif, Fashion & Apparel, Kerajinan Kreatif, hingga Layanan Jasa & Teknologi Digital.\n\nISBI UMP berkomitmen terus memberikan fasilitasi pendanaan P2MW, bimbingan legalitas usaha NIB, sertifikasi halal, serta akses pameran produk tingkat nasional.`,
    foto_sampul: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    status: 'Terbit',
    tanggal_terbit: '2026-06-25'
  },
  {
    id: 'news-2',
    admin_id: 'admin-1',
    kategori_id: 'cat-news-1', // Kegiatan
    judul: 'Seminar Kewirausahaan & Expo Tenant Binaan ISBI UMP',
    slug: 'seminar-kewirausahaan-expo-tenant-binaan-isbi-ump',
    konten: `ISBI UMP sukses menyelenggarakan Seminar & Talkshow Kewirausahaan berskala besar dengan tajuk "Membangun Mentalitas Sociopreneur Milenial di Era Digital". Acara ini sekaligus memamerkan puluhan produk inovatif dari tim wirausaha mahasiswa angkatan 2024, 2025, dan 2026.\n\nAcara dihadiri ratusan mahasiswa dan memberikan ruang apresiasi bagi tenant yang berhasil scale-up usaha secara berkelanjutan.`,
    foto_sampul: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800',
    status: 'Terbit',
    tanggal_terbit: '2026-05-18'
  },
  {
    id: 'news-3',
    admin_id: 'admin-1',
    kategori_id: 'cat-news-3', // Pengumuman
    judul: 'Pembukaan Pendaftaran Inkubasi Bisnis Mahasiswa Angkatan Terbaru',
    slug: 'pembukaan-pendaftaran-inkubasi-bisnis-mahasiswa-angkatan-terbaru',
    konten: `Biro Kemahasiswaan dan Alumni (BKA) UMP melalui ISBI kembali membuka kesempatan bagi kelompok mahasiswa yang memiliki ide atau rintisan bisnis untuk bergabung dalam program inkubasi intensif.\n\nFasilitas mencakup karantina bisnis, mentoring praktisi, legalitas NIB, dan kesempatan hibah P2MW.`,
    foto_sampul: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800',
    status: 'Terbit',
    tanggal_terbit: '2026-06-29'
  }
];

export const ALBUM_SEED: GaleriAlbum[] = [
  {
    id: 'album-1',
    judul_album: 'KMI Expo & Gelar Produk Nasional',
    tanggal_kegiatan: '2025-11-15',
    deskripsi_singkat: 'Keikutsertaan delegasi wirausaha mahasiswa UMP di ajang Kewirausahaan Mahasiswa Indonesia (KMI) Expo Tingkat Nasional.'
  },
  {
    id: 'album-2',
    judul_album: 'Expo UMKM Binaan ISBI UMP (2024 - 2026)',
    tanggal_kegiatan: '2026-03-10',
    deskripsi_singkat: 'Pameran produk kreativitas 53 tim wirausaha mahasiswa binaan ISBI UMP.'
  }
];

export const FOTO_SEED: GaleriFoto[] = [
  {
    id: 'foto-1',
    album_id: 'album-1',
    url_foto: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
    keterangan: 'Pemberian penghargaan tim wirausaha di panggung utama KMI Expo.'
  },
  {
    id: 'foto-2',
    album_id: 'album-1',
    url_foto: 'https://images.unsplash.com/photo-1531058020387-3be344559be6?auto=format&fit=crop&q=80&w=800',
    keterangan: 'Stan pameran ISBI UMP yang ramai dikunjungi oleh delegasi universitas lain.'
  },
  {
    id: 'foto-3',
    album_id: 'album-2',
    url_foto: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
    keterangan: 'Rektor UMP meninjau langsung produk kuliner mahasiswa di Expo Milad.'
  },
  {
    id: 'foto-4',
    album_id: 'album-2',
    url_foto: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    keterangan: 'Transaksi digital menggunakan QRIS pada tenant fashion mahasiswa.'
  }
];

export const UMKM_SEED: UMKM[] = [
  {
    "id": "umkm-2024-1",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Ambara",
    "nama_mahasiswa": "M Sidiq Alfatoni & Tim (2 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "AMBARA : Angkutan Masyarakat Banyumas Raya ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 M Sidiq Alfatoni 2102010076 Ekonomi dan Bisnis 2 Ghefira Hanifah 2102010236 3 Avit Tri Laksono 2102010126 PROFIL TIM Tim AMBARA merupakan tim mahasiswa yang mengembangkan inovasi di bidang transportasi digital dengan tujuan meningkatkan kualitas layanan angkutan k...",
    "histori_usaha": "AMBARA : Angkutan Masyarakat Banyumas Raya ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 M Sidiq Alfatoni 2102010076 Ekonomi dan Bisnis 2 Ghefira Hanifah 2102010236 3 Avit Tri Laksono 2102010126 PROFIL TIM Tim AMBARA merupakan tim mahasiswa yang mengembangkan inovasi di bidang transportasi digital dengan tujuan meningkatkan kualitas layanan angkutan kota (angkot) melalui pemanfaatan teknologi. Berangkat dari rendahnya minat masyarakat terhadap angkot akibat faktor keamanan, kenyamanan, dan keterbatasan informasi layanan, tim menghadirkan solusi be...",
    "foto_produk": "https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200018172",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-2",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-3",
    "nama_usaha": "CIGBULB ECOSHIELD",
    "nama_mahasiswa": "Muhammad Farhan Auladi & Tim (5 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "CIGBULB ECOSHIELD : Alternatif Bio-Pestisida dari Puntung Rokok Dan Kulit Bawang Merah Sebagai Pestisida Alami dalam Memberantas Hama ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Muhammad Farhan Auladi 2202010165 Ekonomi dan Bisnis 2 Cemerlang Prita Syabina 2102010383 3 Lisa Cahya Zaharani 2102010362 4 Daniels Marshall Aththarsyach 2202010138 5 Alvin...",
    "histori_usaha": "CIGBULB ECOSHIELD : Alternatif Bio-Pestisida dari Puntung Rokok Dan Kulit Bawang Merah Sebagai Pestisida Alami dalam Memberantas Hama ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Muhammad Farhan Auladi 2202010165 Ekonomi dan Bisnis 2 Cemerlang Prita Syabina 2102010383 3 Lisa Cahya Zaharani 2102010362 4 Daniels Marshall Aththarsyach 2202010138 5 Alvin Yusuf Arya Dwi Putra 2202010179 PROFIL TIM Tim CIGBULB ECOSHIELD merupakan tim wirausaha mahasiswa yang berfokus pada pengembangan pestisida organik berbasis limbah puntung rokok dan kulit bawang mer...",
    "foto_produk": "https://images.unsplash.com/photo-1528458909336-e7a0adfac1d5?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200027706",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-3",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Coba Upgrade Diri",
    "nama_mahasiswa": "Kesy Apriansyah & Tim (2 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "Meningkatkan Soft Skill dan Hard Skill Generasi Muda Indonesia Melalui Platform “Coba Upgrade Diri” ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Kesy Apriansyah 2103040037 Teknik dan Sains 2 Tegar Putra Diansyah 2103040022 3 Bima Yusuf Dharmahita 2103040001 PROFIL TIM Tim Coba Upgrade Diri merupakan tim wirausaha yang berkomitmen menghadirkan solusi ...",
    "histori_usaha": "Meningkatkan Soft Skill dan Hard Skill Generasi Muda Indonesia Melalui Platform “Coba Upgrade Diri” ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Kesy Apriansyah 2103040037 Teknik dan Sains 2 Tegar Putra Diansyah 2103040022 3 Bima Yusuf Dharmahita 2103040001 PROFIL TIM Tim Coba Upgrade Diri merupakan tim wirausaha yang berkomitmen menghadirkan solusi pembelajaran digital untuk meningkatkan kompetensi masyarakat melalui pengembangan soft skill dan hard skill. Bernaung di bawah CV. Bangkit Edukasi Indonesia, tim mengembangkan platform pembelajaran d...",
    "foto_produk": "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200037075",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-4",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Coffipa",
    "nama_mahasiswa": "Ratna Dwi Puspita & Tim (4 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "Menyajikan Kenikmatan Sehat: Coffipa Sebagai Solusi Inovatif Bagi Pasien Diabetes Mellitus ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Ratna Dwi Puspita 2113010097 Kedokteran 2 Atria Azizatustsani Siswiyanti 2113010095 3 Libna Aththohiroh 2113010087 4 Hartati Ristia Cahyani 2113010001 PROFIL TIM Tim Coffipa terdiri atas mahasiswa yang memiliki keped...",
    "histori_usaha": "Menyajikan Kenikmatan Sehat: Coffipa Sebagai Solusi Inovatif Bagi Pasien Diabetes Mellitus ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Ratna Dwi Puspita 2113010097 Kedokteran 2 Atria Azizatustsani Siswiyanti 2113010095 3 Libna Aththohiroh 2113010087 4 Hartati Ristia Cahyani 2113010001 PROFIL TIM Tim Coffipa terdiri atas mahasiswa yang memiliki kepedulian terhadap meningkatnya kasus Diabetes Mellitus serta semangat untuk menghadirkan inovasi di bidang pangan fungsional. Dengan memadukan potensi kopi lokal dan ekstrak pare sebagai bahan alami yang...",
    "foto_produk": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200049259",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-5",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Diptera",
    "nama_mahasiswa": "Ahmad Nashrullah & Tim (5 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "Integrated Farming: Pengolahan Sampah Organik Modern menggunakan Konsep Ekonomi Sirkuler ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Ahmad Nashrullah 2113010003 Kedokteran 2 Bintang Jaya Kusuma 2113010024 3 Nikko Hafidz Nugroho 2113010054 4 Yasyfa Fikri Setya Haroshta 2113010064 5 Gading Prawira Yudha 2213010049 PROFIL TIM Tim ini merupakan kelompok...",
    "histori_usaha": "Integrated Farming: Pengolahan Sampah Organik Modern menggunakan Konsep Ekonomi Sirkuler ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Ahmad Nashrullah 2113010003 Kedokteran 2 Bintang Jaya Kusuma 2113010024 3 Nikko Hafidz Nugroho 2113010054 4 Yasyfa Fikri Setya Haroshta 2113010064 5 Gading Prawira Yudha 2213010049 PROFIL TIM Tim ini merupakan kelompok mahasiswa yang mengembangkan usaha budidaya Black Soldier Fly (BSF) berbasis ekonomi sirkular sebagai solusi atas permasalahan sampah organik di Kabupaten Banyumas. Berangkat dari tingginya volume sa...",
    "foto_produk": "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200057005",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-6",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Dissa",
    "nama_mahasiswa": "Izudin Hamid & Tim (4 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "DISSA : Pupuk Organik Cair Dari Kulit Bawang Merah, Bawang Putih Dan Yogurt ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Izudin Hamid 2101020024 Keguruan dan Ilmu Pendidikan 2 Brenda Dara Sekar Ayuningtyas 2101040053 3 Hindun Asvi Khaerotul Khisan 2201060031 4 Khoirunnisa 2101070009 5 Khofifatuzzuhriyah 2201040023 PROFIL TIM Tim usaha ini terdiri ata...",
    "histori_usaha": "DISSA : Pupuk Organik Cair Dari Kulit Bawang Merah, Bawang Putih Dan Yogurt ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Izudin Hamid 2101020024 Keguruan dan Ilmu Pendidikan 2 Brenda Dara Sekar Ayuningtyas 2101040053 3 Hindun Asvi Khaerotul Khisan 2201060031 4 Khoirunnisa 2101070009 5 Khofifatuzzuhriyah 2201040023 PROFIL TIM Tim usaha ini terdiri atas mahasiswa yang memiliki semangat kewirausahaan dan kepedulian terhadap isu lingkungan, khususnya dalam pemanfaatan limbah kulit bawang merah dan bawang putih menjadi pupuk organik cair sekaligus pes...",
    "foto_produk": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200066322",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-7",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "FastDokter",
    "nama_mahasiswa": "Yoga Zain Zakaria & Tim (4 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "FastDokter : Kemudahan Dalam Melakukan Reservasi Dengan Dokter Berbasis Aplikasi ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Yoga Zain Zakaria 2102010404 Ekonomi dan Bisnis 2 Daisak Hidayat Baihaqi 2102010351 3 Agri Bayu Satria 2102010391 4 Rara Mutiara Viridis 2106010044 Agama Islam 5 Ariq Majid Muzakki 2106010021 PROFIL TIM Tim usaha ini terdiri a...",
    "histori_usaha": "FastDokter : Kemudahan Dalam Melakukan Reservasi Dengan Dokter Berbasis Aplikasi ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Yoga Zain Zakaria 2102010404 Ekonomi dan Bisnis 2 Daisak Hidayat Baihaqi 2102010351 3 Agri Bayu Satria 2102010391 4 Rara Mutiara Viridis 2106010044 Agama Islam 5 Ariq Majid Muzakki 2106010021 PROFIL TIM Tim usaha ini terdiri atas mahasiswa yang memiliki kepedulian terhadap peningkatan akses dan kualitas layanan kesehatan melalui pemanfaatan teknologi digital. Dengan mengembangkan platform yang menghubungkan dokter dan pasi...",
    "foto_produk": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200076347",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-8",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Golet Kost",
    "nama_mahasiswa": "Alvito Herindra Pratama & Tim (4 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "GoletKost : Jasa Informasi Kost Berbasis Online Sebagai Solusi Jitu Mempromosikan dan Menjembatani Bisnis Kost-Kostan Bagi Mahasiswa di Sekitar Kampus Purwokerto ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Alvito Herindra Pratama 2203030021 Teknik dan Sains 2 Helmi Surya Abimanyu 2203030039 3 Iqyan Aziz Syamaidzar 2203040066 4 Wulan Setiyowati 21020...",
    "histori_usaha": "GoletKost : Jasa Informasi Kost Berbasis Online Sebagai Solusi Jitu Mempromosikan dan Menjembatani Bisnis Kost-Kostan Bagi Mahasiswa di Sekitar Kampus Purwokerto ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Alvito Herindra Pratama 2203030021 Teknik dan Sains 2 Helmi Surya Abimanyu 2203030039 3 Iqyan Aziz Syamaidzar 2203040066 4 Wulan Setiyowati 2102030071 Ekonomi dan Bisnis 5 Rizkia Febri Purbaningrum 2102010247 PROFIL TIM Tim Info Kost Purwokerto merupakan tim wirausaha mahasiswa yang berfokus pada penyediaan layanan informasi rumah kost berbasi...",
    "foto_produk": "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200089430",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-9",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-2",
    "nama_usaha": "HARS Dye",
    "nama_mahasiswa": "Aldena Selavi & Tim (5 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "Perpaduan Seni Batik Tradisional dan Sustainable Fashion “HARS Dye” ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Aldena Selavi 2202030105 Ekonomi dan Bisnis 2 Hesti Dianawati 2102030068 3 Sansy Hana Widya Sims 2102030097 4 Umi Raudhatul Fuadah 2202030046 5 Jihan Fadlilah Maharani 2302030134 PROFIL TIM Tim HARS DYE merupakan tim wirausaha mahasiswa ya...",
    "histori_usaha": "Perpaduan Seni Batik Tradisional dan Sustainable Fashion “HARS Dye” ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Aldena Selavi 2202030105 Ekonomi dan Bisnis 2 Hesti Dianawati 2102030068 3 Sansy Hana Widya Sims 2102030097 4 Umi Raudhatul Fuadah 2202030046 5 Jihan Fadlilah Maharani 2302030134 PROFIL TIM Tim HARS DYE merupakan tim wirausaha mahasiswa yang bergerak di bidang industri kreatif dan fesyen berkelanjutan melalui pengembangan produk tie dye yang dipadukan dengan teknik ecoprint. Tim ini dibentuk atas kepedulian terhadap pelestarian lingkun...",
    "foto_produk": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200096909",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-10",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-2",
    "nama_usaha": "Kojan Apparel",
    "nama_mahasiswa": "Muhammad Nur Riyadi Al Fais & Tim (2 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "Kojan Apparel : Membangkitkan Semangat Kreativitas dan Kemandirian Mahasiswa dalam Industri Fashion ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Muhammad Nur Riyadi Al Fais 2207010034 Psikologi 2 Farhan Ainur Rizal 2307010249 3 Ghina Nur Azizah 2207010251 PROFIL TIM Tim Kojan Apparel merupakan tim wirausaha mahasiswa yang memiliki semangat kolaborasi...",
    "histori_usaha": "Kojan Apparel : Membangkitkan Semangat Kreativitas dan Kemandirian Mahasiswa dalam Industri Fashion ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Muhammad Nur Riyadi Al Fais 2207010034 Psikologi 2 Farhan Ainur Rizal 2307010249 3 Ghina Nur Azizah 2207010251 PROFIL TIM Tim Kojan Apparel merupakan tim wirausaha mahasiswa yang memiliki semangat kolaborasi dalam mengembangkan usaha di bidang fashion. Tim ini dibentuk dengan tujuan menghadirkan produk pakaian yang berkualitas, modern, dan sesuai dengan tren anak muda, sekaligus menjadi sarana bagi mahas...",
    "foto_produk": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200102252",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-11",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Moocofera",
    "nama_mahasiswa": "Mellysa Dwi Rahayu & Tim (2 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "MOCOFERA : Brightening Body Scrub Pencegah Penuaan Dini Menggunakan Potensi Bahan Baku Limbah Sampah Dapur untuk Kecantikan ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Mellysa Dwi Rahayu 2102010097 Ekonomi dan Bisnis 2 Nabila Shafa Putri Prayoga 2102010331 3 Diana Lestari 2102010241 PROFIL TIM Tim Mocofera merupakan tim mahasiswa yang mengembangkan ...",
    "histori_usaha": "MARKETING TOOLS Instagram : moocofera_p2mw_ump TikTok : moocofera_p2mw_ump YouTube : MOOCOFERA P2MW Shopee : moocofera_official",
    "foto_produk": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200116794",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-12",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Mumtaz Laundry",
    "nama_mahasiswa": "Yunus Kesuma & Tim (4 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "Kualitas Pelayanan dan Keunggulan Laundry “Mumtaz’ terhadap Persaingan dengan Jasa Laundry di Sekitar Universitas Muhammadiyah Purwokerto ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Yunus Kesuma 2113010080 Kedokteran 2 Billie Adhyatma Susanto 2113010006 3 Abhista Farrel Devara Adelaide 2113010012 4 Gugi Rukmadihardja 2113010045 5 Dani Indra Wijaya 2...",
    "histori_usaha": "Kualitas Pelayanan dan Keunggulan Laundry “Mumtaz’ terhadap Persaingan dengan Jasa Laundry di Sekitar Universitas Muhammadiyah Purwokerto ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Yunus Kesuma 2113010080 Kedokteran 2 Billie Adhyatma Susanto 2113010006 3 Abhista Farrel Devara Adelaide 2113010012 4 Gugi Rukmadihardja 2113010045 5 Dani Indra Wijaya 2113010099 PROFIL TIM Tim Mumtaz Laundry merupakan tim wirausaha yang bergerak di bidang jasa laundry dengan komitmen menghadirkan layanan pencucian yang bersih, higienis, dan berkualitas. Usaha ini ti...",
    "foto_produk": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200121649",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-13",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Rembox",
    "nama_mahasiswa": "Dita Januariska & Tim (2 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "Rembox (Reminder Medicine Box) KOTAK PENGINGAT MINUM OBAT ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Dita Januariska 2211020148 Ilmu Kesehatan 2 Karina Adelia Putri 2211020316 3 Risa Dhea Puspita 2211020111 PROFIL TIM Tim REMBOX merupakan tim wirausaha mahasiswa yang bergerak di bidang teknologi kesehatan dengan mengembangkan inovasi Reminder Medic...",
    "histori_usaha": "Rembox (Reminder Medicine Box) KOTAK PENGINGAT MINUM OBAT ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Dita Januariska 2211020148 Ilmu Kesehatan 2 Karina Adelia Putri 2211020316 3 Risa Dhea Puspita 2211020111 PROFIL TIM Tim REMBOX merupakan tim wirausaha mahasiswa yang bergerak di bidang teknologi kesehatan dengan mengembangkan inovasi Reminder Medicine Box (REMBOX) sebagai alat bantu untuk meningkatkan kepatuhan minum obat pada pasien tuberkulosis (TB), khususnya pasien anak. Produk ini berupa kotak obat yang dilengkapi dengan sistem pengingat (...",
    "foto_produk": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200137214",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-14",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Second Book",
    "nama_mahasiswa": "Zaenal Arifin & Tim (5 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "SECOND BOOK, APLIKASI PENYEDIA DAN PENGELOLAAN PENJUALAN BUKU BEKAS FIKSI NON-FIKSI UNTUK DIJADIKAN DANA KEMBALI ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Zaenal Arifin 2102010077 Ekonomi dan Bisnis 2 Amelia Nabila Afra 2202030108 3 Hasna Gusni Nabila 2202030109 4 Ana Dwi Setyaning 2202010263 5 Felix Dwi Arwensa 2102010130 PROFIL TIM Tim SECOND-BO...",
    "histori_usaha": "SECOND BOOK, APLIKASI PENYEDIA DAN PENGELOLAAN PENJUALAN BUKU BEKAS FIKSI NON-FIKSI UNTUK DIJADIKAN DANA KEMBALI ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Zaenal Arifin 2102010077 Ekonomi dan Bisnis 2 Amelia Nabila Afra 2202030108 3 Hasna Gusni Nabila 2202030109 4 Ana Dwi Setyaning 2202010263 5 Felix Dwi Arwensa 2102010130 PROFIL TIM Tim SECOND-BOOK merupakan tim mahasiswa yang mengembangkan inovasi di bidang teknologi digital (Edutech) melalui platform jual beli buku bekas berbasis aplikasi. Berangkat dari permasalahan banyaknya buku bekas ya...",
    "foto_produk": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200146399",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-15",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Sejanga Dawet",
    "nama_mahasiswa": "Gina Rahmayani & Tim (4 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "Sejanga Dawet “Citarasa Baru Dalam Menikmati Es Dawet” ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Gina Rahmayani 2104010027 Pertanian dan Perikanan 2 Nandana Pratama Zikro 2104010016 3 Muhammad Nur Yahya Akhyari 2104010019 4 Amelia Lydiawati 2104010021 5 Lisa Elistiana 2104010026 PROFIL TIM Tim Sejanga Dawet merupakan tim wirausaha mahasiswa yang b...",
    "histori_usaha": "Sejanga Dawet “Citarasa Baru Dalam Menikmati Es Dawet” ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Gina Rahmayani 2104010027 Pertanian dan Perikanan 2 Nandana Pratama Zikro 2104010016 3 Muhammad Nur Yahya Akhyari 2104010019 4 Amelia Lydiawati 2104010021 5 Lisa Elistiana 2104010026 PROFIL TIM Tim Sejanga Dawet merupakan tim wirausaha mahasiswa yang bergerak di bidang Food and Beverage (F&B) dengan mengembangkan inovasi minuman tradisional berbasis dawet menjadi produk yang lebih modern, sehat, dan sesuai dengan selera generasi masa kini. Tim ini ...",
    "foto_produk": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200154261",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-16",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Temutawa",
    "nama_mahasiswa": "Silva Dwi Ningtias & Tim (4 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "“TEMUTAWA” Menciptakan Inovasi Jamu Tradisional menjadi Jamu Modern di Era Milenial ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Silva Dwi Ningtias 2108010023 Farmasi 2 Maulina Nur Zakiyah 2008010049 3 Vera Renta Agustina 2108010032 4 Ratna Mauliyanawati 2108010035 PROFIL TIM Tim TemuTawa merupakan tim mahasiswa yang mengembangkan usaha di bidang foo...",
    "histori_usaha": "“TEMUTAWA” Menciptakan Inovasi Jamu Tradisional menjadi Jamu Modern di Era Milenial ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Silva Dwi Ningtias 2108010023 Farmasi 2 Maulina Nur Zakiyah 2008010049 3 Vera Renta Agustina 2108010032 4 Ratna Mauliyanawati 2108010035 PROFIL TIM Tim TemuTawa merupakan tim mahasiswa yang mengembangkan usaha di bidang food and beverage (F&B) melalui inovasi minuman jamu modern dengan konsep yang lebih menarik dan sesuai dengan selera generasi masa kini. Berangkat dari keprihatinan terhadap semakin menurunnya minat mas...",
    "foto_produk": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200165245",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-17",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Videolution",
    "nama_mahasiswa": "Rida Rahmah Danis & Tim (3 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "Videolution : Website Pelatihan Videografi dan Jasa Pembuatan Video untuk Tenaga Pengajar ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Rida Rahmah Danis 2202050018 Ekonomi dan Bisnis 2 Rediarta Nisa Adlina 2202050011 3 Muchammad Agung Setyo Widodo 2202050004 4 Nadhira Safa Ainunnisa 2202050001 PROFIL TIM Tim Videolution merupakan tim wirausaha mahasi...",
    "histori_usaha": "Videolution : Website Pelatihan Videografi dan Jasa Pembuatan Video untuk Tenaga Pengajar ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Rida Rahmah Danis 2202050018 Ekonomi dan Bisnis 2 Rediarta Nisa Adlina 2202050011 3 Muchammad Agung Setyo Widodo 2202050004 4 Nadhira Safa Ainunnisa 2202050001 PROFIL TIM Tim Videolution merupakan tim wirausaha mahasiswa yang bergerak di bidang industri kreatif, khususnya jasa produksi video dan konten digital. Berangkat dari pesatnya perkembangan media digital serta meningkatnya kebutuhan akan konten visual yang ...",
    "foto_produk": "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200174642",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-18",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Aquabiz IMTA",
    "nama_mahasiswa": "Tim Aquabiz IMTA",
    "program_studi": "Fakultas Ekonomi dan",
    "deskripsi": "Aquabiz IMTA: Usaha Budidaya Terpadu Ikan Gabus dan Udang yang Bernilai Tinggi ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Muhammad Aziz Marzuqi 2304030004 Akuakultur Fakultas Pertanian dan Perikanan 2. Dyah Ruri Rahmawati 2302010245 Manajemen Fakultas Ekonomi dan Bisnis 3. Andira Maulana Muhamad 2304030010 Akuakultur Fakultas Pertanian dan P...",
    "histori_usaha": "Aquabiz IMTA: Usaha Budidaya Terpadu Ikan Gabus dan Udang yang Bernilai Tinggi ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Muhammad Aziz Marzuqi 2304030004 Akuakultur Fakultas Pertanian dan Perikanan 2. Dyah Ruri Rahmawati 2302010245 Manajemen Fakultas Ekonomi dan Bisnis 3. Andira Maulana Muhamad 2304030010 Akuakultur Fakultas Pertanian dan Perikanan 4. Ana Kurnia Illahi 2404030002 Akuakultur Fakultas Pertanian dan Perikanan 5. Gendhis Shella Nur ‘aini 2404010050 Agribisnis Fakultas Ekonomi dan Bisnis PROFIL Aquabiz merupakan usaha di bid...",
    "foto_produk": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200189121",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-19",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "AQUADEWA FARM",
    "nama_mahasiswa": "Tim AQUADEWA FARM",
    "program_studi": "Fakultas Pertanian dan",
    "deskripsi": "AQUADEWA FARM (D’PONIK) ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Rey Defta Arma Putra 2304030011 Akuakultur Fakultas Pertanian dan Perikanan 2. Hamid Rama Dani 2304030008 Akuakultur Fakultas Pertanian dan Perikanan 3. Oktaviana Putri Harjono 2304030009 Akuakultur Fakultas Pertanian dan Perikanan 4. Bagas Barlian Nugraha 2404030001 Akuakult...",
    "histori_usaha": "pertanian dan perikanan modern. AQUADEWA FARM juga mendukung tercapainya Tujuan Pembangunan Berkelanjutan (SDGs), khususnya dalam mewujudkan ketahanan pangan, produksi yang bertanggung jawab, inovasi teknologi ramah lingkungan, dan efisiensi pemanfaatan sumber daya, serta sejalan dengan program Asta Cita dalam memperkuat swasembada pangan, produktivitas usaha, dan pengembangan kewirausahaan hijau yang berorientasi pada keberlanjutan ekonomi, sosial, dan lingkungan. PRODUK MARKETING TOOLS",
    "foto_produk": "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200192909",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-20",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "BAKSO BAKAR BHINEKA",
    "nama_mahasiswa": "Tim BAKSO BAKAR BHINEKA",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "Peningkatan Nilai Jual Produk Bakso Melalui Usaha “BAKSO BAKAR BHINEKA” PROFIL TIM Tim Bakso Bakar Bhineka merupakan sekelompok individu yang memiliki semangat berwirausaha dan kepedulian terhadap pelestarian kekayaan kuliner Indonesia melalui inovasi produk. Indonesia dikenal sebagai negara yang memiliki keberagaman suku, budaya, adat istiadat, hi...",
    "histori_usaha": "Peningkatan Nilai Jual Produk Bakso Melalui Usaha “BAKSO BAKAR BHINEKA” PROFIL TIM Tim Bakso Bakar Bhineka merupakan sekelompok individu yang memiliki semangat berwirausaha dan kepedulian terhadap pelestarian kekayaan kuliner Indonesia melalui inovasi produk. Indonesia dikenal sebagai negara yang memiliki keberagaman suku, budaya, adat istiadat, hingga kuliner, salah satunya adalah bakso yang telah menjadi makanan favorit masyarakat. Seiring berkembangnya industri kuliner, bakso mengalami berbagai inovasi penyajian, termasuk bakso bakar. Namun,...",
    "foto_produk": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200206802",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-21",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-2",
    "nama_usaha": "E-Wash",
    "nama_mahasiswa": "Tim E-Wash",
    "program_studi": "Fakultas Ekonomi",
    "deskripsi": "E-WASH : SABUN CUCI PIRING RAMAH LINGKUNGAN DARI ECO-ENZYME ANGGOTA TIM No Nama Lengkap NIM Program Studi Fakultas 1. Briliani Kusuma Tungga Dewi 2211050106 Teknik Laboratorium Medik Fakultas Ilmu Kesehatan 2. Lathifatul Azka Nurul Aini 2211050104 Teknik Laboratorium Medik Fakultas Ilmu Kesehatan 3. Nur Aisyah 2302010199 Manajemen Fakultas Ekonomi ...",
    "histori_usaha": "E-WASH : SABUN CUCI PIRING RAMAH LINGKUNGAN DARI ECO-ENZYME ANGGOTA TIM No Nama Lengkap NIM Program Studi Fakultas 1. Briliani Kusuma Tungga Dewi 2211050106 Teknik Laboratorium Medik Fakultas Ilmu Kesehatan 2. Lathifatul Azka Nurul Aini 2211050104 Teknik Laboratorium Medik Fakultas Ilmu Kesehatan 3. Nur Aisyah 2302010199 Manajemen Fakultas Ekonomi dan Bisnis 4. Nazilah Annisa Majid 2302010210 Manajemen Fakultas Ekonomi dan Bisnis 5. Dwi Anissa Purbaningrum 2302010088 Manajemen Fakultas Ekonomi dan Bisnis PROFIL TIM Tim E-Wash dibentuk atas kepe...",
    "foto_produk": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200214323",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-22",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "EXPLONUSA",
    "nama_mahasiswa": "Tim EXPLONUSA",
    "program_studi": "Fakultas Teknik dan",
    "deskripsi": "EXPLONUSA : EXPORTER AND MEDIATOR EXPERT ANGGOTA TIM No Nama Lengkap NIM Program Studi Fakultas 1. Faisal Fadhillah S M 2302030004 Akuntansi Fakultas Ekonomi dan Bisnis 2. Naufal Rasyid 2302030041 Akuntansi Fakultas Ekonomi dan Bisnis 3. Fachri Adhia Putra 2302030096 Akuntansi Fakultas Ekonomi dan Bisnis 4. Restu Dias Prayogi 2302030135 Akuntansi F...",
    "histori_usaha": "Bertanggung Jawab), dan SDG 17 (Kemitraan untuk Mencapai Tujuan). Dengan demikian, Explonusa hadir sebagai perusahaan yang tidak hanya berfokus pada aktivitas perdagangan internasional, tetapi juga menjadi katalis dalam mendorong transformasi UMKM Indonesia menjadi pelaku bisnis yang berdaya saing global. PRODUK - MARKETING TOOLS Instagram : @explonusa LinkedIn : ExplonusaOfficial Website : explonusa.com",
    "foto_produk": "https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200224003",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-23",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-2",
    "nama_usaha": "FRESHOESS",
    "nama_mahasiswa": "Tim FRESHOESS",
    "program_studi": "Fakultas Ekonomi dan",
    "deskripsi": "Suguhan Perawatan Sepatu Tanpa Menguras Waktu Fershoesss Purwokerto ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Faradila Aisya Hanifah 2302010049 Manajemen S1 Fakultas Ekonomi dan Bisnis 2. Syifa Emilia 2302010348 Manajemen S1 Fakultas Ekonomi dan Bisnis 3. Nadia Triana Safitri 2202030045 Manajemen S1 Fakultas Ekonomi dan Bisnis 4. Evi Hikmah...",
    "histori_usaha": "yang berlebihan. Dengan menerapkan metode pencucian yang sesuai dengan jenis bahan serta penggunaan produk pembersih yang lebih ramah lingkungan, Fershoesss berupaya memberikan manfaat tidak hanya bagi pelanggan, tetapi juga bagi lingkungan. Seiring dengan perkembangan usaha, Fershoesss diharapkan mampu menciptakan peluang kerja baru melalui pengembangan layanan, seperti deep cleaning, penghilangan bau, layanan antar- jemput, hingga pemesanan berbasis digital, sehingga dapat memberikan dampak ekonomi, sosial, dan lingkungan yang berkelanjutan. ...",
    "foto_produk": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200232300",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-24",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "GOURAMI COOKIES",
    "nama_mahasiswa": "Yusha Amira Zalfania & Tim (2 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "“GOURAMI COOKIES” ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Shofiyah Hasanatun Nida 2208010007 Farmasi Farmasi 2 Yusha Amira Zalfania 2208010009 Farmasi Farmasi 3 Pratika Azzahra Farmasi Farmasi 4 Harrel Atha Kalyana 2208010047 Farmasi Farmasi 5 Muhammad Naufal Zaidaan 2408010003 Farmasi Farmasi PROFIL TIM Tim Gourami Cookies dibentuk atas k...",
    "histori_usaha": "PRODUK MARKETING TOOLS Instagram : @gouramicookies_p2mw_ump TikTok : @ gouramicookies_p2mw_ump Shopee : gourami_official Tokopedia : gourami_official",
    "foto_produk": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200245947",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-25",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "GROWY",
    "nama_mahasiswa": "Tim GROWY",
    "program_studi": "Fakultas Ekonomi dan",
    "deskripsi": "GROWY : Digital Parenting Cerdas dan Berkualitas ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Adnin Moza Luthfiansyah 2302010180 Manajemen Fakultas Ekonomi dan Bisnis 2. Muhammad Fadhiel Miqdad 2303040055 Teknik Informatika Fakultas Teknik dan Sains 3. Indah Lestari 2302030022 Manajemen Fakultas Ekonomi dan Bisnis 4. Sarifudin Nur Hidayat 2402...",
    "histori_usaha": "GROWY : Digital Parenting Cerdas dan Berkualitas ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Adnin Moza Luthfiansyah 2302010180 Manajemen Fakultas Ekonomi dan Bisnis 2. Muhammad Fadhiel Miqdad 2303040055 Teknik Informatika Fakultas Teknik dan Sains 3. Indah Lestari 2302030022 Manajemen Fakultas Ekonomi dan Bisnis 4. Sarifudin Nur Hidayat 2402050017 Manajemen Fakultas Ekonomi dan Bisnis 5. Fasya Salsabila Aria Putri 2307010285 Psikologi Psikologi PROFIL GROWY merupakan usaha rintisan di bidang bisnis digital yang berfokus pada layanan eduk...",
    "foto_produk": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200258075",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-26",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "IBU DIGITAL BERDAYA",
    "nama_mahasiswa": "Tim IBU DIGITAL BERDAYA",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "IBU DIGITAL BERDAYA TIM ANGGOTA No Nama Lengkap NIM Prodi Fakultas 1. Laeli Rosdiana 2302010046 Manajemen Ekonomi dan Bisnis 2. Jingga Shafna Ajni Prifeska 2302010258 Manajemen Ekonomi dan Bisnis 3. Mely Yulia Agustina 2402030008 Akuntansi Ekonomi dan Bisnis 4. Qonita Nur Salamah 2302010275 Manajemen Ekonomi dan Bisnis PROFIL Tim Ibu Digital Berday...",
    "histori_usaha": "IBU DIGITAL BERDAYA TIM ANGGOTA No Nama Lengkap NIM Prodi Fakultas 1. Laeli Rosdiana 2302010046 Manajemen Ekonomi dan Bisnis 2. Jingga Shafna Ajni Prifeska 2302010258 Manajemen Ekonomi dan Bisnis 3. Mely Yulia Agustina 2402030008 Akuntansi Ekonomi dan Bisnis 4. Qonita Nur Salamah 2302010275 Manajemen Ekonomi dan Bisnis PROFIL Tim Ibu Digital Berdaya dibentuk atas kepedulian terhadap masih rendahnya pemberdayaan ekonomi ibu rumah tangga, khususnya di Desa Rakit, Kabupaten Banjarnegara, yang sebagian besar memiliki waktu luang dan aktif menggunak...",
    "foto_produk": "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200267326",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-27",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-3",
    "nama_usaha": "LILIN KU",
    "nama_mahasiswa": "Tim LILIN KU",
    "program_studi": "Fakultas Ekonomi",
    "deskripsi": "LILIN KU ANGGOTA TIM No Nama Lengkap NIM Program Studi Fakultas 1. Natasha Putri 2302010272 Manajemen Fakultas Ekonomi dan Bisnis 2. Aulia Octafiani 2302010244 Manajemen Fakultas Ekonomi dan Bisnis 3. Zainab Nur’Aini Puspita Dewi 2302010345 Manajemen Fakultas Ekonomi dan Bisnis 4. Alvian Yuda Prasetya 2302030087 Akuntansi Fakultas Ekonomi dan Bisni...",
    "histori_usaha": "LILIN KU ANGGOTA TIM No Nama Lengkap NIM Program Studi Fakultas 1. Natasha Putri 2302010272 Manajemen Fakultas Ekonomi dan Bisnis 2. Aulia Octafiani 2302010244 Manajemen Fakultas Ekonomi dan Bisnis 3. Zainab Nur’Aini Puspita Dewi 2302010345 Manajemen Fakultas Ekonomi dan Bisnis 4. Alvian Yuda Prasetya 2302030087 Akuntansi Fakultas Ekonomi dan Bisnis 5. Tri Anggun Pramudya 2302010176 Manajemen Fakultas Ekonomi dan Bisnis PROFIL TIM Candle Bouquet merupakan usaha di bidang industri kreatif yang mengembangkan rangkaian buket berbentuk bunga berbah...",
    "foto_produk": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200278978",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-28",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-2",
    "nama_usaha": "MODVEST",
    "nama_mahasiswa": "Tim MODVEST",
    "program_studi": "Fakultas Ekonomi dan",
    "deskripsi": "MODVEST ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Kaeva Salsabila 2302010330 Manajemen Fakultas Ekonomi dan Bisnis 2. Amanda Shafa Diani Putri 2302010343 Manajemen Fakultas Ekonomi dan Bisnis 3. Desty Lestari 2402040025 Akuntansi Fakultas Ekonomi dan Bisnis 4. Elsa Syarif 2310010136 Ilmu Hukum Fakultas Hukum 5. Durrotul Yekti Palupi 2402030...",
    "histori_usaha": "MODVEST ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Kaeva Salsabila 2302010330 Manajemen Fakultas Ekonomi dan Bisnis 2. Amanda Shafa Diani Putri 2302010343 Manajemen Fakultas Ekonomi dan Bisnis 3. Desty Lestari 2402040025 Akuntansi Fakultas Ekonomi dan Bisnis 4. Elsa Syarif 2310010136 Ilmu Hukum Fakultas Hukum 5. Durrotul Yekti Palupi 2402030138 Akuntansi Fakultas Ekonomi dan Bisnis PROFIL Modvest merupakan usaha di bidang industri kreatif yang berfokus pada pengembangan produk fashion multifungsi berupa vest 2in1 yang dapat diubah menjad...",
    "foto_produk": "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200286995",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-29",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "PHRescue",
    "nama_mahasiswa": "Tim PHRescue",
    "program_studi": "Fakultas Ilmu Kesehatan",
    "deskripsi": "PHRescue ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Sadewa Bagus Yudhayana 2211020114 Ilmu Keperawatan Fakultas Ilmu Kesehatan 2. Nunung Wahyu Utami 2211020105 Ilmu Keperawatan Fakultas Ilmu Kesehatan 3. Yanuar Arif Suryandanu 2211020176 Ilmu Keperawatan Fakultas Ilmu Kesehatan PROFIL PHRescue merupakan usaha di bidang alat peraga kesehatan ...",
    "histori_usaha": "Shopee : PHRescue_official Tokopedia : PHRescue_official YouTube : PHRescue_HealthTips Facebook : PHRescue Life Solutions",
    "foto_produk": "https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200291627",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-30",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "PROFIL SIKOMJARU",
    "nama_mahasiswa": "Tim PROFIL SIKOMJARU",
    "program_studi": "Fakultas Teknik dan",
    "deskripsi": "SIKOMJARU ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Vieki Diva Ksatria 2211020205 Keperawatan Fakultas Ilmu Kesehatan 2. Diva Bagus Kurniawan 2211020166 Keperawatan Fakultas Ilmu Kesehatan 3. Ruliyanti 2211020055 Keperawatan Fakultas Ilmu Kesehatan 4. Ilham Saifullah Yusup 2203010068 Teknik Sipil Fakultas Teknik dan Sains PROFIL Tim SIKOMJA...",
    "histori_usaha": "berkualitas, dan mudah diakses guna meningkatkan kompetensi masyarakat, tenaga kesehatan, serta peserta didik dalam melakukan Bantuan Hidup Dasar. Kehadiran SIKOMJARU diharapkan mampu memperluas akses pelatihan RJP, meningkatkan kesiapsiagaan masyarakat dalam menghadapi kondisi kegawatdaruratan jantung, mendukung peningkatan mutu pendidikan kesehatan, serta berkontribusi dalam menurunkan angka kematian akibat henti jantung melalui peningkatan kualitas penolong pertama di masyarakat. PRODUK MARKETING TOOLS Website Resmi : sikomjaru.official.com ...",
    "foto_produk": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200304020",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-31",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-2",
    "nama_usaha": "SERANTA OUTDOOR",
    "nama_mahasiswa": "Tim SERANTA OUTDOOR",
    "program_studi": "Fakultas Pertanian dan",
    "deskripsi": "SERANTA OUTDOOR ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Shindid Nabil arif 2104030006 Akuakultur Fakultas Pertanian dan Perikanan 2. Aden Nuzuli Gita A 2104010058 Agribisnis Fakultas Pertanian dan Perikanan 3. Adhia Rafif Muafa 2204030005 Akuakultur Fakultas Pertanian dan Perikanan 4. Wishnu Anggraeni 2104010047 Agribisnis Fakultas Pertan...",
    "histori_usaha": "pekerjaan baru, serta memberikan dampak ekonomi dan lingkungan yang berkelanjutan bagi masyarakat sekitar. PRODUK MARKETING TOOLS Instagram : @seranta_outdoor Tiktok : @seranta_outdoor Youtube : Seranta Outdoor",
    "foto_produk": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200312951",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-32",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "SOULUTION",
    "nama_mahasiswa": "Tim SOULUTION",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "SOULUTION : Platform Kesehatan Mental & piritualitas Mahasiswa ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Regina Indi Dwi Caesarani 2302010233 Manajemen Ekonomi dan Bisnis 2. Icha Hertansyah Cahya Putri 2302010043 Manajemen Ekonomi dan Bisnis 3. Kartika Puspita Dewi 2307010308 Manajemen Ekonomi dan Bisnis 4. Putri Aulia Maharani 2402030141 A...",
    "histori_usaha": "komunitas yang saling mendukung, serta menjadi inovasi layanan kesehatan mental berbasis digital yang mengintegrasikan ilmu psikologi dan nilai-nilai spiritual secara berkelanjutan. PRODUK MARKETING TOOLS Instagram : @soulution.id",
    "foto_produk": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200329318",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-33",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "STEVAH",
    "nama_mahasiswa": "Tim STEVAH",
    "program_studi": "Fakultas Pertanian dan",
    "deskripsi": "STEVAH ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Umar Abdul Aziz 2402010237 Manajemen Fakultas Ekonomi dan Bisnis 2. Virgi David Riyadi 2402030033 Akuntansi Fakultas Ekonomi dan Bisnis 3. Deni Indrastata 2402050034 Bisnis Digital Fakultas Ekonomi dan Bisnis 4. M.H. Arif Mubarok 2409030002 Desain Komunikasi Visual Ilmu Budaya dan Komunikasi ...",
    "histori_usaha": "STEVAH ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Umar Abdul Aziz 2402010237 Manajemen Fakultas Ekonomi dan Bisnis 2. Virgi David Riyadi 2402030033 Akuntansi Fakultas Ekonomi dan Bisnis 3. Deni Indrastata 2402050034 Bisnis Digital Fakultas Ekonomi dan Bisnis 4. M.H. Arif Mubarok 2409030002 Desain Komunikasi Visual Ilmu Budaya dan Komunikasi 5. Dimas Ramdani 2304010020 Agribisnis Fakultas Pertanian dan Peternakan PROFIL TIM Azivelife merupakan usaha di bidang pangan dan minuman kesehatan yang berfokus pada pengembangan Stevah, minuman rem...",
    "foto_produk": "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200334326",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-34",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "HUMI GROW",
    "nama_mahasiswa": "Tim HUMI GROW",
    "program_studi": "Fakultas Pertanian",
    "deskripsi": "HUMI GROW ANGGOTA TIM No Nama Lengkap NIM Program Studi Fakultas 1. Tiara Halima Sandi 2204010068 Agribisnis Fakultas Pertanian dan Peternakan 2. Naswa Allivia Hanum 2204010077 Agribisnis Fakultas Pertanian dan Peternakan 3. Devani Farrah Meisyanti 2204010104 Agribisnis Fakultas Pertanian dan Peternakan 4. Nida Latifatul Azizah 2304020061 Agrotekno...",
    "histori_usaha": "HUMI GROW ANGGOTA TIM No Nama Lengkap NIM Program Studi Fakultas 1. Tiara Halima Sandi 2204010068 Agribisnis Fakultas Pertanian dan Peternakan 2. Naswa Allivia Hanum 2204010077 Agribisnis Fakultas Pertanian dan Peternakan 3. Devani Farrah Meisyanti 2204010104 Agribisnis Fakultas Pertanian dan Peternakan 4. Nida Latifatul Azizah 2304020061 Agroteknologi Fakultas Pertanian dan Peternakan PROFIL TIM Humi Grow merupakan usaha rintisan di bidang agribisnis yang berfokus pada pengembangan teknologi budidaya jamur melalui alat pengatur kelembapan otom...",
    "foto_produk": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200342702",
    "status": "Alumni"
  },
  {
    "id": "umkm-2026-35",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-3",
    "nama_usaha": "Cermin Kerang Shella",
    "nama_mahasiswa": "Tim Cermin Kerang Shella",
    "program_studi": "Fakultas Keguruan dan",
    "deskripsi": "CERMIN KERANG SHELLA ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Anisa Wulandari 2402030103 Akuntansi S1 Fakultas Ekonomi dan Bisnis 2 Aisya Bilbina 2402030104 Akuntansi S1 Fakultas Ekonomi dan Bisnis 3 Nadiva Cahya Utami 2401100128 PGSD Fakultas Keguruan dan Ilmu Pendidikan PROFIL TIM Tim Cermin Kerang Shella dibentuk atas kepedulian terhadap...",
    "histori_usaha": "MARKETING TOOLS Instagram : cerminkerang_shella_shop",
    "foto_produk": "https://images.unsplash.com/photo-1528458909336-e7a0adfac1d5?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200351651",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-36",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "CrunchUbi",
    "nama_mahasiswa": "Afifah Nurwahidah & Tim (3 Mahasiswa)",
    "program_studi": "Fakultas Keguruan dan",
    "deskripsi": "CRUNCHUBI : Camilan Zero Waste Berbasis Pemanfaatan Limbah Kulit Ubi ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Haniyah Shaffina Alfath 2301060019 Pend. Matematika Fakultas Keguruan dan Ilmu Pendidikan 2 Afifah Nurwahidah 2301060006 Pend. Matematika 3 Yogi Farda Nugroho 2401060032 Pend. Matematika 4 Firda Mayasari 2401040009 PBSI PROFIL TIM T...",
    "histori_usaha": "CRUNCHUBI : Camilan Zero Waste Berbasis Pemanfaatan Limbah Kulit Ubi ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Haniyah Shaffina Alfath 2301060019 Pend. Matematika Fakultas Keguruan dan Ilmu Pendidikan 2 Afifah Nurwahidah 2301060006 Pend. Matematika 3 Yogi Farda Nugroho 2401060032 Pend. Matematika 4 Firda Mayasari 2401040009 PBSI PROFIL TIM Tim CrunchUbi merupakan tim wirausaha yang berkomitmen mengembangkan produk pangan inovatif berbasis pemanfaatan limbah pertanian menjadi camilan bernilai tambah. Dengan mengusung konsep keberlanjutan ...",
    "foto_produk": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200366495",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-37",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Crunchy Mix",
    "nama_mahasiswa": "Aristawidya Zahra & Tim (3 Mahasiswa)",
    "program_studi": "Fakultas Ilmu",
    "deskripsi": "CRUNCHY MIX ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Aristawidya Zahra 2311060108 Kebidanan S1 Fakultas Ilmu Kesehatan 2 Khaerun Nisa Amalliyah 2311060164 Kebidanan S1 3 Fania Sofiyanti 2311060046 Kebidanan S1 4 Syafitri Herawati 2311060166 Kebidanan S1 5 Naicha Dwi Indah Nur Afifah 2311060033 Kebidanan S1 PROFIL TIM Tim CRUNCHY MIX merupak...",
    "histori_usaha": "CRUNCHY MIX ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Aristawidya Zahra 2311060108 Kebidanan S1 Fakultas Ilmu Kesehatan 2 Khaerun Nisa Amalliyah 2311060164 Kebidanan S1 3 Fania Sofiyanti 2311060046 Kebidanan S1 4 Syafitri Herawati 2311060166 Kebidanan S1 5 Naicha Dwi Indah Nur Afifah 2311060033 Kebidanan S1 PROFIL TIM Tim CRUNCHY MIX merupakan tim wirausaha mahasiswa yang berkomitmen mengembangkan usaha makanan ringan inovatif dengan menghadirkan camilan berkualitas, praktis, dan terjangkau bagi berbagai kalangan. Produk yang dikembangka...",
    "foto_produk": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200371523",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-38",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-3",
    "nama_usaha": "Edurescue Mannequin",
    "nama_mahasiswa": "Fata Nur Almaidah & Tim (4 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "EDURESCUE MANNEQUIN: Jasa Model Pembuatan dan Pelatihan Pertolongan Pertama Henti Jantung untuk Masyarakat Awam ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Fata Nur Almaidah 2311020133 Keperawatan S1 Ilmu Kesehatan 2 Cindy Febriani 2411020107 Keperawatan S1 Ilmu Kesehatan 3 Dwi Apriliana 2411020103 Keperawatan S1 Ilmu Kesehatan 4 Rendra Aji Sy...",
    "histori_usaha": "EDURESCUE MANNEQUIN: Jasa Model Pembuatan dan Pelatihan Pertolongan Pertama Henti Jantung untuk Masyarakat Awam ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Fata Nur Almaidah 2311020133 Keperawatan S1 Ilmu Kesehatan 2 Cindy Febriani 2411020107 Keperawatan S1 Ilmu Kesehatan 3 Dwi Apriliana 2411020103 Keperawatan S1 Ilmu Kesehatan 4 Rendra Aji Syaputra 2303040194 Teknik Informatika Teknik dan Sains PROFIL TIM Tim Edurescue Mannequin berawal dari kepedulian terhadap tingginya angka kematian akibat henti jantung serta masih terbatasnya akses ma...",
    "foto_produk": "https://images.unsplash.com/photo-1528458909336-e7a0adfac1d5?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200386727",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-39",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Fitbab",
    "nama_mahasiswa": "Muhammad Himamul Haq",
    "program_studi": "Fakultas Teknik ",
    "deskripsi": "FITBAB: Inovasi Kebab Sehat Rendah Kalori Berbasis Tortilla Ubi Untuk Meningkatkan Minat Konsumsi Fast Food Sehat ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Tria Satria Umbara 2402050041 Bisnis Digital Fakultas Ekonomi & Bisnis 2 Dea Yasin Saputra 2404010010 Agribisnis Fakultas Pertanian & Perikanan 3 Asep Sulton Syaripudin 2402050013 Bisnis ...",
    "histori_usaha": "MARKETING TOOLS Instagram : @fitbab_official Tiktok : @fitbab_official Shopee : fitbab_official food",
    "foto_produk": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200393693",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-40",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Grobakonlen",
    "nama_mahasiswa": "Nazril Jaya Supriatman & Tim (4 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "Grobakonlen: Platform Digital All-in-One untuk Transformasi UMKM Go Digital melalui Website dan Manajemen UMKM disertai AI Assistant ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Nazril Jaya Supriatman 2403040168 Teknik Informatika FTS 2 Leli Mei Setiowati 2403040137 Teknik Informatika FTS 3 Ahmad Mudzakir Hamzah 2401120014 Pendidikan Bahasa Ara...",
    "histori_usaha": "Grobakonlen: Platform Digital All-in-One untuk Transformasi UMKM Go Digital melalui Website dan Manajemen UMKM disertai AI Assistant ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Nazril Jaya Supriatman 2403040168 Teknik Informatika FTS 2 Leli Mei Setiowati 2403040137 Teknik Informatika FTS 3 Ahmad Mudzakir Hamzah 2401120014 Pendidikan Bahasa Arab FKIP 4 Anggi Dinia Putri 2502040017 Akuntasi S1 FEB PROFIL TIM Tim Grobakonlen merupakan tim wirausaha mahasiswa yang berkomitmen membantu UMKM bertransformasi ke era digital melalui platform all-in...",
    "foto_produk": "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200409273",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-41",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-2",
    "nama_usaha": "Heatik",
    "nama_mahasiswa": "Tim Heatik",
    "program_studi": "Fakultas Ekonomi dan",
    "deskripsi": "HEATIK : Inovasi Mug Batik Heat-reactive Berbasis Ecoprint ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Rofiqoh 2402030004 Akuntansi S1 Fakultas Ekonomi dan Bisnis 2 Afifa Aulia Ekhsan Elda 2302030050 Akuntansi S1 Fakultas Ekonomi dan Bisnis 3 Jihan Fadlilah Maharani 2302030134 Akuntansi S1 Fakultas Ekonomi dan Bisnis 4 Ariel Rafif Prayogo 2402...",
    "histori_usaha": "HEATIK : Inovasi Mug Batik Heat-reactive Berbasis Ecoprint ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Rofiqoh 2402030004 Akuntansi S1 Fakultas Ekonomi dan Bisnis 2 Afifa Aulia Ekhsan Elda 2302030050 Akuntansi S1 Fakultas Ekonomi dan Bisnis 3 Jihan Fadlilah Maharani 2302030134 Akuntansi S1 Fakultas Ekonomi dan Bisnis 4 Ariel Rafif Prayogo 2402030084 Akuntansi S1 Fakultas Ekonomi dan Bisnis 5 Raditya Fauzan Satyaghani 2502030113 Akuntansi S1 Fakultas Ekonomi dan Bisnis PROFIL TIM Tim HEATIK dibentuk sebagai bentuk kepedulian terhadap masih ...",
    "foto_produk": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200415511",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-42",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Jagara",
    "nama_mahasiswa": "Tim Jagara",
    "program_studi": "Fakultas Ilmu Kesehatan",
    "deskripsi": "JAGARA : Inovasi Briket Bonggol Jagung sebagai Solusi Energi Biomassa Berkelanjutan ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Arvin Nalingga Fitrianto 2302010087 Manajemen S1 Fakultas Ekonomi & Bisnis 2 Fausta Setyo Pratama 2302010086 Manajemen S1 Fakultas Ekonomi & Bisnis 3 Dias AdaM Fathussabil 2302010080 Manajemen S1 Fakultas Ekonomi & Bi...",
    "histori_usaha": "PRODUK MARKETING TOOLS Instagram : jagaraofficial.id",
    "foto_produk": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200424098",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-43",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Jamuin",
    "nama_mahasiswa": "Fahrie Inamuddin & Tim (3 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "JAMUIN: Inovasi Produk Jamu Tradisional Modern sebagai Minuman ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Fahrie Inamuddin 2401120003 Pendidikan Bahsa Arab FKIP 2 Muhammad Pasha Hari Pratama 2401120008 Pendidikan Bahsa Arab FKIP 3 Zalfa Nida Tiara Ikhsan 2401120012 Pendidikan Bahsa Arab FKIP 4 Eni Anggita 2401120013 Pendidikan Bahsa Arab FKIP...",
    "histori_usaha": "TikTok : @namausaha_jamukekinian Shopee dan Tokopedia: Official Store Jamu Kekinian",
    "foto_produk": "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200432394",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-44",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "KasKos",
    "nama_mahasiswa": "Samsul Anam",
    "program_studi": "Fakultas Eknomoni ",
    "deskripsi": "KasKos : Solusi Inovatif Aplikasi Pencatatan Keuangan Dilengkapi Fitur Chatbot, Otomatisasi Debt Collection & Savings Allocation, Financial Report, serta Financial Insight Berbasis AI guna Meningkatkan Literasi Finansial Gen Z ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Samsul Anam 2303040081 Teknik Informatika S1 Fakultas Teknik & Sains 2 Syu...",
    "histori_usaha": "KasKos : Solusi Inovatif Aplikasi Pencatatan Keuangan Dilengkapi Fitur Chatbot, Otomatisasi Debt Collection & Savings Allocation, Financial Report, serta Financial Insight Berbasis AI guna Meningkatkan Literasi Finansial Gen Z ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Samsul Anam 2303040081 Teknik Informatika S1 Fakultas Teknik & Sains 2 Syuja Array Abimanyu 2402050010 Bisnis Digital S1 Fakultas Eknomoni & Bisnis 3 Evana Syarifah Husna 2402040003 Akuntansi D3 Fakultas Eknomoni & Bisnis 4 Sopia Dwi Rahmawati 2302010009 Manajemen S1 Fakult...",
    "foto_produk": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200443149",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-45",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Logicland",
    "nama_mahasiswa": "Alya Nur Nazhifah & Tim (2 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "LOGICLAND: Transformasi Coding Computational Thinking Anak melalui Smart Popup Book berbasis Deep Learning ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Alya Nur Nazhifah 2301100005 PGSD Keguruan dan Ilmu Pendidikan 2 Atqiya Permata Muawanah 2301100020 PGSD Keguruan dan Ilmu Pendidikan 3 Sri Mulyani 2301100025 PGSD Keguruan dan Ilmu Pendidikan 4...",
    "histori_usaha": "MARKETING TOOLS Instagram : @popupbook.logicland Tiktok : logicland",
    "foto_produk": "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200454870",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-46",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "NootraGum",
    "nama_mahasiswa": "Umar Abdul Aziz & Tim (4 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "NootraGum – Gummy Herbal Pemberi Efek Fokus dan Menenangkan Berbasis Bunga Telang ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Umar Abdul Aziz 2402010237 Manajemen S1 FEB 2 Arini Fitra Annisa 2411020032 Keperawatan S1 FIKES 3 Zahra Salsabila 2402010304 Manajemen S1 FEB 4 Adinda Putri Amalia 2408010123 Farmasi S1 FARMASI 5 Muhammad Hilman Arif M...",
    "histori_usaha": "MARKETING TOOLS Instagram : @nootragummy TikTok : @nootragummy Shopee : @NootraGummy",
    "foto_produk": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200466473",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-47",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "NutriSpoon",
    "nama_mahasiswa": "Tim NutriSpoon",
    "program_studi": "Fakultas Ekonomi ",
    "deskripsi": "NutriSpoon : Nutrisi Terfortifikasi pada Spoon untuk Stunting Prevention, Optimal Nutrition, and Plastic Waste Reduction ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Fernanda 2402030038 Akuntansi S1 Fakultas Ekonomi & Bisnis 2 Yunika Nasyith Aulia 2302030014 Akuntansi S1 Fakultas Ekonomi & Bisnis 3 Rengga Saputra 2302030121 Akuntansi S1 Fakulta...",
    "histori_usaha": "NutriSpoon : Nutrisi Terfortifikasi pada Spoon untuk Stunting Prevention, Optimal Nutrition, and Plastic Waste Reduction ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Fernanda 2402030038 Akuntansi S1 Fakultas Ekonomi & Bisnis 2 Yunika Nasyith Aulia 2302030014 Akuntansi S1 Fakultas Ekonomi & Bisnis 3 Rengga Saputra 2302030121 Akuntansi S1 Fakultas Ekonomi & Bisnis 4 Akbar Dzaqi Maulana S 2402030051 Akuntansi S1 Fakultas Ekonomi & Bisnis 5 Elen Hendra Winata 2502030007 Akuntansi S1 Fakultas Ekonomi & Bisnis PROFIL TIM Tim NutriSpoon dibentuk s...",
    "foto_produk": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200471444",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-48",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Romtera",
    "nama_mahasiswa": "Maura Novita Zachra & Tim (4 Mahasiswa)",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "ROMTERA: Rompi Simulasi Penanganan Tersedak ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Maura Novita Zachra 2311020255 Keperawatan S1 Ilmu Kesehatan 2 Febi Rahma Auliya 2311020333 Keperawatan S1 Ilmu Kesehatan 3 Khefit Yulistio 2311020173 Keperawatan S1 Ilmu Kesehatan 4 Ibnu Muhamad Nurohim 2411020321 Keperawatan S1 Ilmu Kesehatan PROFIL TIM T...",
    "histori_usaha": "TikTok : romtera.team Shopee : romtera.team Tokopedia : romtera.team Lazada : romtera.team",
    "foto_produk": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200481190",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-49",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Scrufee Be-Glow",
    "nama_mahasiswa": "Tim Scrufee Be-Glow",
    "program_studi": "Fakultas Ekonomi ",
    "deskripsi": "SCRUFEE BE-GLOW: Inovasi Body Scrub Berbasis Antioksidan Ampas Kopi dan Bekatul Beras Merah (Oryza Sativa L.) sebagai Sumber Vitamin E dan y-Oryzanol untuk Perawatan Kulit ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Novi Liana Putri 2408010173 Farmasi S1 Fakultas Farmasi 2 Pramudya Permana Jati 2402010046 Manajemen S1 Fakultas Ekonomi & Bisnis...",
    "histori_usaha": "PRODUK MARKETING TOOLS Instagram : @scrufeebeglow_p2mw_ump Shopee : scrufeebeglow_official TikTok : @scrufeebeglow_p2mw_ump",
    "foto_produk": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200495532",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-50",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Singreh Flame",
    "nama_mahasiswa": "Tim Singreh Flame",
    "program_studi": "Fakultas Teknik ",
    "deskripsi": "Obat Nyamuk Bakar “SINGREH FLAME” Memanfaatkan Kandungan Nabati dari Limbah Batang Singkong dan Tanaman Herbal Sereh ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Elok Hana Hapsari 2402010399 Manajemen S1 Fakultas Ekonomi & Bisnis 2 Tegar Arif Nurrohman 2302010362 Manajemen S1 Fakultas Ekonomi & Bisnis 3 Shinta Aulia Putri 2402010363 Manajemen S...",
    "histori_usaha": "PRODUK MARKETING TOOLS Instagram : @singrehflameorganic TikTok : @singrehflameorganic YouTube : SINGREH FLAME ORGANIC",
    "foto_produk": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200508262",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-51",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "SolidVa.id",
    "nama_mahasiswa": "Tim SolidVa.id",
    "program_studi": "Fakultas Teknik dan",
    "deskripsi": "Virtual Assistant Solidva.Id ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Haikal Fais 2403050066 Teknik Mesin Fakultas Teknik dan Sains 2 Fauzan Surya Primaditya 2403050071 Teknik Mesin Fakultas Teknik dan Sains 3 Muhamad Farhan Khoirudin 2403050025 Teknik Mesin Fakultas Teknik dan Sains 4 Aiman Fahrul Khurofi 2403050075 Teknik Mesin Fakultas T...",
    "histori_usaha": "Virtual Assistant Solidva.Id ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Haikal Fais 2403050066 Teknik Mesin Fakultas Teknik dan Sains 2 Fauzan Surya Primaditya 2403050071 Teknik Mesin Fakultas Teknik dan Sains 3 Muhamad Farhan Khoirudin 2403050025 Teknik Mesin Fakultas Teknik dan Sains 4 Aiman Fahrul Khurofi 2403050075 Teknik Mesin Fakultas Teknik dan Sains 5 Rikat Algha Hidayat 2403050079 Teknik Mesin Fakultas Teknik dan Sains PROFIL TIM Tim SolidVA.id dibentuk sebagai respons terhadap kesenjangan antara kebutuhan industri manufaktur aka...",
    "foto_produk": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200511042",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-52",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Tropiken",
    "nama_mahasiswa": "Tim Tropiken",
    "program_studi": "Fakultas Farmasi",
    "deskripsi": "TROPIKEN : Beras Kencur Nanas dengan Topping Jely ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Naena Zulfia Yudafa 2302030095 Akuntansi S1 Fakultas Ekonomi & Bisnis 2 Shafa Rodlotun Istiqomah 2303040077 Teknik Informatika Fakultas Teknik & Sains 3 Chintya Niessahroji Putri 2308010081 Farmasi Fakultas Farmasi PROFIL TIM Tim Tropiken merupakan ti...",
    "histori_usaha": "TROPIKEN : Beras Kencur Nanas dengan Topping Jely ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Naena Zulfia Yudafa 2302030095 Akuntansi S1 Fakultas Ekonomi & Bisnis 2 Shafa Rodlotun Istiqomah 2303040077 Teknik Informatika Fakultas Teknik & Sains 3 Chintya Niessahroji Putri 2308010081 Farmasi Fakultas Farmasi PROFIL TIM Tim Tropiken merupakan tim wirausaha mahasiswa yang berkomitmen mengembangkan inovasi minuman kesehatan tradisional agar lebih diminati oleh masyarakat, khususnya generasi muda. Melalui produk Beras Kencur Nanas dengan Toppin...",
    "foto_produk": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200528752",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-53",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Yomato",
    "nama_mahasiswa": "Tim Yomato",
    "program_studi": "Fakultas Ekonomi ",
    "deskripsi": "YOMATO: Yogurt Tomato ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Suci Wulandari 2411010020 Keperawatan D3 Fakultas Ilmu Kesehatan 2 Yeyi Nur Sa’adah 2411060107 Kebidanan Fakultas Ilmu Kesehatan 3 Fikri Akbar 2403050032 Teknik Mesin Fakultas Teknik dan Sains 4 Siti Nurhasanah 2511050048 TLM Fakultas Ilmu Kesehatan 5 Fawaz Yovi Mulyatama 250203...",
    "histori_usaha": "YOMATO: Yogurt Tomato ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Suci Wulandari 2411010020 Keperawatan D3 Fakultas Ilmu Kesehatan 2 Yeyi Nur Sa’adah 2411060107 Kebidanan Fakultas Ilmu Kesehatan 3 Fikri Akbar 2403050032 Teknik Mesin Fakultas Teknik dan Sains 4 Siti Nurhasanah 2511050048 TLM Fakultas Ilmu Kesehatan 5 Fawaz Yovi Mulyatama 2502030055 Akuntansi S1 Fakultas Ekonomi & Bisnis PROFIL TIM Tim YOMATO dibentuk atas kepedulian terhadap tingginya kasus hipotensi yang banyak dialami oleh remaja dan mahasiswa akibat padatnya aktivitas, p...",
    "foto_produk": "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200537920",
    "status": "Aktif"
  }
];

export const PENDAFTARAN_SEED: Pendaftaran[] = [
  {
    id: 'reg-1',
    program_id: 'prog-1',
    nama: 'Farhan Maulana',
    email: 'farhan.m@gmail.com',
    no_hp: '081299998888',
    pesan: 'Saya ingin mendaftarkan kelompok usaha saya untuk pendanaan P2MW 2026.',
    status: 'Masuk',
    tanggal_masuk: '2026-06-28 09:15'
  },
  {
    id: 'reg-2',
    program_id: 'prog-2',
    nama: 'Salma Salsabila',
    email: 'salmasalsa@gmail.com',
    no_hp: '085712345678',
    pesan: 'Tertarik mengikuti kelas dasar kewirausahaan.',
    status: 'Diproses',
    tanggal_masuk: '2026-06-29 14:30'
  }
];

export const PRESTASI_SEED: Prestasi[] = [
  {
    id: 'pres-1',
    judul: 'Juara 1 Nasional Kategori Makanan & Minuman KMI Expo 2025',
    tim_usaha: 'Tim Wirausaha Mahasiswa UMP',
    nama_mahasiswa: 'Delegasi Mahasiswa UMP',
    tingkat: 'Nasional',
    tahun: '2025',
    peringkat: 'Juara 1 Terbaik',
    penyelenggara: 'Direktorat Belmawa Kemendikbudristek',
    deskripsi: 'Tim wirausaha binaan ISBI UMP berhasil menyabet peringkat pertama dalam Kewirausahaan Mahasiswa Indonesia (KMI) Expo 2025.',
    foto_prestasi: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pres-2',
    judul: 'Kelompok Mahasiswa Penerima Pendanaan Terbanyak Program P2MW 2026',
    tim_usaha: 'Delegasi Wirausaha UMP',
    nama_mahasiswa: 'Tim Kolektif UMP (53 Tenant Binaan)',
    tingkat: 'Nasional',
    tahun: '2026',
    peringkat: 'Penerima Hibah',
    penyelenggara: 'Ditbelmawa Kemendikbudristek RI',
    deskripsi: 'Puluhan kelompok startup binaan ISBI UMP sukses mendapatkan dana hibah pembinaan setelah bersaing di tingkat nasional.',
    foto_prestasi: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
  }
];

export const PROFIL_SEED: ProfilData = {
  sejarah_judul: "Sejarah Singkat",
  sejarah_p1: "Inkubator Sentra Bisnis dan Inovasi (ISBI) Universitas Muhammadiyah Purwokerto didirikan sebagai wujud komitmen universitas dalam menjembatani dunia akademik dengan ekosistem wirausaha profesional. Lahir dari kebutuhan akan wadah pembinaan bagi mahasiswa dan alumni yang memiliki visi bisnis, ISBI berkembang menjadi hub pusat untuk riset terapan, komersialisasi teknologi, dan pendampingan UMKM di wilayah Banyumas dan sekitarnya.",
  sejarah_p2: "Dengan fasilitas modern dan jaringan mentor dari kalangan akademisi serta praktisi bisnis, ISBI secara konsisten melahirkan tenant-tenant unggulan yang siap bersaing di era ekonomi digital.",
  sejarah_foto: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  visi_konten: "Menjadi pusat inkubasi bisnis dan inovasi terkemuka di tingkat nasional yang menghasilkan wirausahawan berkarakter Islami, kompetitif, dan berwawasan global.",
  misi_list: [
    "Menyelenggarakan program inkubasi bisnis yang komprehensif bagi civitas akademika dan masyarakat umum.",
    "Memfasilitasi hilirisasi hasil riset dan inovasi teknologi menjadi produk bernilai komersial.",
    "Membangun ekosistem kewirausahaan yang sinergis antara perguruan tinggi, industri, pemerintah, dan komunitas.",
    "Memberikan pendampingan manajemen, legalitas, dan akses permodalan bagi startup dan UMKM binaan."
  ],
  organisasi_pimpinan: "Wakil Rektor III",
  organisasi_pengarah: "Kepala BKA",
  organisasi_ketua: "Ketua ISBI",
  organisasi_koord_inkubasi: "Koord. Inkubasi",
  organisasi_koord_inovasi: "Koord. Inovasi",
  organisasi_koord_kemitraan: "Koord. Kemitraan",
  kontak_alamat: "Gd. Serbaguna Lt. 2, Kampus Ahmad Dahlan, Jl. K.H. Ahmad Dahlan, PO Box 202, Kembaran, Purwokerto, Kabupaten Banyumas, Jawa Tengah 53182",
  kontak_email: "isbi@ump.ac.id",
  kontak_phone: "081235276164"
};

export const ORGANISASI_SEED: Organisasi[] = [
  {
    id: 'org-1',
    nama: 'Efi Miftah Faridli, M. Pd.',
    jabatan: 'Kepala Biro Kemahasiswaan dan Alumni',
    foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300',
    urutan: 1
  },
  {
    id: 'org-2',
    nama: 'Imam Thohari, S.E.',
    jabatan: 'Kabag Administrasi Biro Kemahasiswaan dan Alumni',
    foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
    urutan: 2
  },
  {
    id: 'org-3',
    nama: 'Heri Purnomo, S.E.',
    jabatan: 'Kasubbag Minat Bakat Biro Kemahasiswaan dan Alumni',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    urutan: 3
  },
  {
    id: 'org-4',
    nama: 'Arif Mulyanto, S.Si., M.Si.',
    jabatan: 'Ketua Career Development Center (CDC)',
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    urutan: 4
  },
  {
    id: 'org-5',
    nama: 'Dr. Fatmah Bagis, M.Si.',
    jabatan: 'Ketua Student Advisory and Training Center (SATC)',
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    urutan: 5
  },
  {
    id: 'org-6',
    nama: 'Dini Nur Afifah, S.Si., M.Eng',
    jabatan: 'Ketua Student Scientific Center (SSC)',
    foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
    urutan: 6
  },
  {
    id: 'org-7',
    nama: 'Dr. dr. Prima Maharani Putri, M.H.',
    jabatan: 'Ketua Student Discipline Center (SDC)',
    foto: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=300',
    urutan: 7
  },
  {
    id: 'org-8',
    nama: 'Yudhistira Pradhipta Aryoko',
    jabatan: 'Ketua Islamic Student Business Incubator (ISBI)',
    foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
    urutan: 8
  }
];

export const HERO_SEED: HeroSlide[] = [
  {
    id: 'hero-1',
    title: "Mencetak Mahasiswa Pengusaha Berkemajuan",
    subtitle: "Inkubator Sentra Bisnis dan Inovasi Universitas Muhammadiyah Purwokerto. Mendampingi 53 Tim Usaha Mahasiswa (2024 - 2026).",
    ctaText: "Daftar Sekarang",
    ctaTab: "kontak",
    secondaryText: "Pelajari Lebih Lanjut",
    secondaryTab: "program",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200",
    badge: "Inkubasi Bisnis UMP",
    gradient: "from-[#032050] via-[#032050]/80 to-transparent",
    urutan: 1
  },
  {
    id: 'hero-2',
    title: "Dana Hibah & Mentoring Bisnis P2MW 2026",
    subtitle: "Kesempatan emas bagi kelompok usaha mahasiswa UMP untuk mendapatkan dana pembinaan, pameran produk, dan sertifikasi usaha gratis.",
    ctaText: "Panduan Pendaftaran",
    ctaTab: "kontak",
    secondaryText: "Daftar Tenant",
    secondaryTab: "program",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
    badge: "Program Hibah P2MW",
    gradient: "from-[#0a192f] via-[#0a192f]/85 to-transparent",
    urutan: 2
  },
  {
    id: 'hero-3',
    title: "53 Tenant Binaan ISBI UMP Terdaftar",
    subtitle: "ISBI UMP bangga mengantarkan puluhan tim wirausaha mahasiswa berkembang dari tahap rintisan hingga komersil.",
    ctaText: "Lihat Cerita Sukses",
    ctaTab: "prestasi",
    secondaryText: "Direktori UMKM",
    secondaryTab: "umkm",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
    badge: "Delegasi UMP",
    gradient: "from-[#042f2e] via-[#042f2e]/85 to-transparent",
    urutan: 3
  }
];
