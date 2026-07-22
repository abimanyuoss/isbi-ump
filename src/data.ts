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
    kategori_id: 'cat-news-2',
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
    kategori_id: 'cat-news-1',
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
    kategori_id: 'cat-news-3',
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
    "nama_usaha": "Ambara (2024)",
    "nama_mahasiswa": "M Sidiq Alfatoni, Avit Tri Laksono",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "AMBARA : Angkutan Masyarakat Banyumas Raya ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 M Sidiq Alfatoni 2102010076 Ekonomi dan Bisnis 2 Ghefira Hanifah 2102010236 3 Avit Tri Laksono 2102010126 PROFIL TIM Tim AMBARA merupakan tim mahasiswa yang mengembangkan inovasi di bidang transportasi digital dengan tujuan meningkatkan kualitas layanan angkutan kota (angkot) melalui pemanfaatan teknologi. Berangkat dari rendahnya minat masyarakat terhadap angkot akibat faktor keamanan, kenyamanan, dan keterbatasan informasi layanan, tim menghadirkan solusi berupa platform yang memudahkan pengguna dalam mencari, memesan, dan mengakses layanan angkot secara lebih praktis, aman, dan efisien. Inovasi ini diharapkan mampu meningkatkan daya saing angkot sekaligus mendukung transportasi umum yang ramah lingkungan dan berkelanjutan. Tim AMBARA bekerja secara kolaboratif dengan pembagian tugas sesuai kompetensi masing-masing, meliputi pengembangan sistem dan aplikasi, operasional, pemasaran, serta kemitraan dengan pengemudi dan pemangku kepentingan. Dengan mengedepankan semangat inovasi, pelayanan, dan keberlanjutan, tim berkomitmen menghadirkan solusi transportasi yang memberikan manfaat bagi masyarakat, meningkatkan kesejahteraan pengemudi angkot, serta mendukung terciptanya sistem transportasi perkotaan yang lebih modern, aman, nyaman, dan mudah diakses. PRODUK",
    "histori_usaha": "AMBARA : Angkutan Masyarakat Banyumas Raya ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 M Sidiq Alfatoni 2102010076 Ekonomi dan Bisnis 2 Ghefira Hanifah 2102010236 3 Avit Tri Laksono 2102010126 PROFIL TIM Tim AMBARA merupakan tim mahasiswa yang mengembangkan inovasi di bidang transportasi digital dengan tujuan meningkatkan kualitas layanan angkutan kota (angkot) melalui pemanfaatan teknologi. Berangkat dari rendahnya minat masyarakat terhadap angkot akibat faktor keamanan, kenyamanan, dan keterbatasan informasi layanan, tim menghadirkan solusi berupa platform yang memudahkan pengguna dalam mencari, memesan, dan mengakses layanan angkot secara lebih praktis, aman, dan efisien. Inovasi ini diharapkan mampu meningkatkan daya saing angkot sekaligus mendukung transportasi umum yang ramah lingkungan dan berkelanjutan. Tim AMBARA bekerja secara kolaboratif dengan pembagian tugas sesuai kompetensi masing-masing, meliputi pengembangan sistem dan aplikasi, operasional, pemasaran, serta kemitraan dengan pengemudi dan pemangku kepentingan. Dengan mengedepankan semangat inovasi, pelayanan, dan keberlanjutan, tim berkomitmen menghadirkan solusi transportasi yang memberikan manfaat bagi masyarakat, meningkatkan kesejahteraan pengemudi angkot, serta mendukung terciptanya sistem transportasi perkotaan yang lebih modern, aman, nyaman, dan mudah diakses. PRODUK",
    "foto_produk": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200011761",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-2",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-3",
    "nama_usaha": "CIGBULB ECOSHIELD (2024)",
    "nama_mahasiswa": "Muhammad Farhan Auladi, Cemerlang Prita Syabina, Lisa Cahya Zaharani, Daniels Marshall Aththarsyach, Alvin Yusuf Arya Dwi Putra",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "CIGBULB ECOSHIELD : Alternatif Bio-Pestisida dari Puntung Rokok Dan Kulit Bawang Merah Sebagai Pestisida Alami dalam Memberantas Hama ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Muhammad Farhan Auladi 2202010165 Ekonomi dan Bisnis 2 Cemerlang Prita Syabina 2102010383 3 Lisa Cahya Zaharani 2102010362 4 Daniels Marshall Aththarsyach 2202010138 5 Alvin Yusuf Arya Dwi Putra 2202010179 PROFIL TIM Tim CIGBULB ECOSHIELD merupakan tim wirausaha mahasiswa yang berfokus pada pengembangan pestisida organik berbasis limbah puntung rokok dan kulit bawang merah sebagai solusi inovatif untuk mengurangi limbah sekaligus mendukung pertanian ramah lingkungan. Tim memiliki komitmen dalam menerapkan prinsip ekonomi sirkular dengan mengubah limbah yang selama ini belum termanfaatkan menjadi produk bernilai guna tinggi. Melalui kolaborasi dengan rumah makan, kafe, pedagang bawang goreng, dan pelaku UMKM sebagai mitra penyedia bahan baku, tim berupaya membangun usaha yang berkelanjutan serta memberikan manfaat ekonomi dan lingkungan bagi masyarakat. Struktur organisasi Tim CIGBULB ECOSHIELD terdiri atas seorang Ketua Tim yang bertanggung jawab atas koordinasi dan pengembangan strategi usaha, seorang Koordinator Produksi yang mengelola proses pengolahan bahan baku hingga menjadi pestisida siap pakai, seorang Koordinator Keuangan yang menangani administrasi dan pengelolaan keuangan usaha, serta dua anggota Divisi Promosi dan Pemasaran yang bertugas melaksanakan sosialisasi produk, pemasaran, dan distribusi kepada konsumen. Dengan pembagian tugas yang jelas dan kolaborasi yang solid, Tim CIGBULB ECOSHIELD berkomitmen menghadirkan pestisida organik yang efektif, terjangkau, dan ramah lingkungan sekaligus meningkatkan kesadaran masyarakat terhadap pemanfaatan limbah sebagai produk yang bernilai ekonomi. PRODUK",
    "histori_usaha": "CIGBULB ECOSHIELD : Alternatif Bio-Pestisida dari Puntung Rokok Dan Kulit Bawang Merah Sebagai Pestisida Alami dalam Memberantas Hama ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Muhammad Farhan Auladi 2202010165 Ekonomi dan Bisnis 2 Cemerlang Prita Syabina 2102010383 3 Lisa Cahya Zaharani 2102010362 4 Daniels Marshall Aththarsyach 2202010138 5 Alvin Yusuf Arya Dwi Putra 2202010179 PROFIL TIM Tim CIGBULB ECOSHIELD merupakan tim wirausaha mahasiswa yang berfokus pada pengembangan pestisida organik berbasis limbah puntung rokok dan kulit bawang merah sebagai solusi inovatif untuk mengurangi limbah sekaligus mendukung pertanian ramah lingkungan. Tim memiliki komitmen dalam menerapkan prinsip ekonomi sirkular dengan mengubah limbah yang selama ini belum termanfaatkan menjadi produk bernilai guna tinggi. Melalui kolaborasi dengan rumah makan, kafe, pedagang bawang goreng, dan pelaku UMKM sebagai mitra penyedia bahan baku, tim berupaya membangun usaha yang berkelanjutan serta memberikan manfaat ekonomi dan lingkungan bagi masyarakat. Struktur organisasi Tim CIGBULB ECOSHIELD terdiri atas seorang Ketua Tim yang bertanggung jawab atas koordinasi dan pengembangan strategi usaha, seorang Koordinator Produksi yang mengelola proses pengolahan bahan baku hingga menjadi pestisida siap pakai, seorang Koordinator Keuangan yang menangani administrasi dan pengelolaan keuangan usaha, serta dua anggota Divisi Promosi dan Pemasaran yang bertugas melaksanakan sosialisasi produk, pemasaran, dan distribusi kepada konsumen. Dengan pembagian tugas yang jelas dan kolaborasi yang solid, Tim CIGBULB ECOSHIELD berkomitmen menghadirkan pestisida organik yang efektif, terjangkau, dan ramah lingkungan sekaligus meningkatkan kesadaran masyarakat terhadap pemanfaatan limbah sebagai produk yang bernilai ekonomi. PRODUK",
    "foto_produk": "https://images.unsplash.com/photo-1535157833138-d3c19af30059?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200025069",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-3",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Coba Upgrade Diri (2024)",
    "nama_mahasiswa": "Kesy Apriansyah, Bima Yusuf Dharmahita",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "Meningkatkan Soft Skill dan Hard Skill Generasi Muda Indonesia Melalui Platform “Coba Upgrade Diri” ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Kesy Apriansyah 2103040037 Teknik dan Sains 2 Tegar Putra Diansyah 2103040022 3 Bima Yusuf Dharmahita 2103040001 PROFIL TIM Tim Coba Upgrade Diri merupakan tim wirausaha yang berkomitmen menghadirkan solusi pembelajaran digital untuk meningkatkan kompetensi masyarakat melalui pengembangan soft skill dan hard skill. Bernaung di bawah CV. Bangkit Edukasi Indonesia, tim mengembangkan platform pembelajaran daring yang mengintegrasikan kursus online, akses belajar seumur hidup, serta pendampingan mentor profesional guna membantu masyarakat mempersiapkan diri menghadapi tantangan dunia kerja di era kecerdasan buatan (Artificial Intelligence). Dengan mengusung visi memperluas akses pendidikan yang berkualitas, tim berupaya menciptakan ekosistem belajar yang fleksibel, mudah diakses, dan relevan dengan kebutuhan industri. Struktur organisasi Tim Coba Upgrade Diri terdiri atas Chief Executive Officer (CEO) yang bertanggung jawab atas arah strategis dan pengembangan bisnis, Chief Technology Officer (CTO) yang mengelola pengembangan serta pemeliharaan platform digital, Chief Operating Officer (COO) yang mengoordinasikan operasional dan pelaksanaan program, Chief Marketing Officer (CMO) yang bertanggung jawab terhadap pemasaran, kemitraan, dan pengembangan komunitas, serta Chief Financial Officer (CFO) yang mengelola perencanaan dan pengendalian keuangan usaha. Melalui kolaborasi yang solid dan pembagian peran yang jelas, Tim Coba Upgrade Diri terus berinovasi dalam menghadirkan layanan pembelajaran digital yang adaptif, inklusif, dan mampu mendukung peningkatan kualitas sumber daya manusia Indonesia di era transformasi digital. PRODUK",
    "histori_usaha": "Meningkatkan Soft Skill dan Hard Skill Generasi Muda Indonesia Melalui Platform “Coba Upgrade Diri” ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Kesy Apriansyah 2103040037 Teknik dan Sains 2 Tegar Putra Diansyah 2103040022 3 Bima Yusuf Dharmahita 2103040001 PROFIL TIM Tim Coba Upgrade Diri merupakan tim wirausaha yang berkomitmen menghadirkan solusi pembelajaran digital untuk meningkatkan kompetensi masyarakat melalui pengembangan soft skill dan hard skill. Bernaung di bawah CV. Bangkit Edukasi Indonesia, tim mengembangkan platform pembelajaran daring yang mengintegrasikan kursus online, akses belajar seumur hidup, serta pendampingan mentor profesional guna membantu masyarakat mempersiapkan diri menghadapi tantangan dunia kerja di era kecerdasan buatan (Artificial Intelligence). Dengan mengusung visi memperluas akses pendidikan yang berkualitas, tim berupaya menciptakan ekosistem belajar yang fleksibel, mudah diakses, dan relevan dengan kebutuhan industri. Struktur organisasi Tim Coba Upgrade Diri terdiri atas Chief Executive Officer (CEO) yang bertanggung jawab atas arah strategis dan pengembangan bisnis, Chief Technology Officer (CTO) yang mengelola pengembangan serta pemeliharaan platform digital, Chief Operating Officer (COO) yang mengoordinasikan operasional dan pelaksanaan program, Chief Marketing Officer (CMO) yang bertanggung jawab terhadap pemasaran, kemitraan, dan pengembangan komunitas, serta Chief Financial Officer (CFO) yang mengelola perencanaan dan pengendalian keuangan usaha. Melalui kolaborasi yang solid dan pembagian peran yang jelas, Tim Coba Upgrade Diri terus berinovasi dalam menghadirkan layanan pembelajaran digital yang adaptif, inklusif, dan mampu mendukung peningkatan kualitas sumber daya manusia Indonesia di era transformasi digital. PRODUK",
    "foto_produk": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200038493",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-4",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Coffipa (2024)",
    "nama_mahasiswa": "Ratna Dwi Puspita, Atria Azizatustsani Siswiyanti, Libna Aththohiroh, Hartati Ristia Cahyani",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "Menyajikan Kenikmatan Sehat: Coffipa Sebagai Solusi Inovatif Bagi Pasien Diabetes Mellitus ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Ratna Dwi Puspita 2113010097 Kedokteran 2 Atria Azizatustsani Siswiyanti 2113010095 3 Libna Aththohiroh 2113010087 4 Hartati Ristia Cahyani 2113010001 PROFIL TIM Tim Coffipa terdiri atas mahasiswa yang memiliki kepedulian terhadap meningkatnya kasus Diabetes Mellitus serta semangat untuk menghadirkan inovasi di bidang pangan fungsional. Dengan memadukan potensi kopi lokal dan ekstrak pare sebagai bahan alami yang bermanfaat bagi kesehatan, tim berkomitmen mengembangkan produk minuman yang tidak hanya memiliki cita rasa khas, tetapi juga memberikan nilai tambah bagi masyarakat, khususnya penderita diabetes yang tetap ingin menikmati kopi. Melalui pembagian tugas yang terstruktur pada bidang riset produk, produksi, keuangan, administrasi, dan pemasaran, setiap anggota berkontribusi sesuai kompetensinya untuk memastikan kualitas dan keberlanjutan usaha. Kolaborasi yang solid menjadi kekuatan utama tim dalam mengembangkan Coffipa sebagai minuman inovatif yang mengedepankan kesehatan, kualitas, dan potensi bisnis, sehingga mampu memberikan manfaat ekonomi sekaligus mendukung gaya hidup sehat masyarakat. PRODUK",
    "histori_usaha": "Menyajikan Kenikmatan Sehat: Coffipa Sebagai Solusi Inovatif Bagi Pasien Diabetes Mellitus ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Ratna Dwi Puspita 2113010097 Kedokteran 2 Atria Azizatustsani Siswiyanti 2113010095 3 Libna Aththohiroh 2113010087 4 Hartati Ristia Cahyani 2113010001 PROFIL TIM Tim Coffipa terdiri atas mahasiswa yang memiliki kepedulian terhadap meningkatnya kasus Diabetes Mellitus serta semangat untuk menghadirkan inovasi di bidang pangan fungsional. Dengan memadukan potensi kopi lokal dan ekstrak pare sebagai bahan alami yang bermanfaat bagi kesehatan, tim berkomitmen mengembangkan produk minuman yang tidak hanya memiliki cita rasa khas, tetapi juga memberikan nilai tambah bagi masyarakat, khususnya penderita diabetes yang tetap ingin menikmati kopi. Melalui pembagian tugas yang terstruktur pada bidang riset produk, produksi, keuangan, administrasi, dan pemasaran, setiap anggota berkontribusi sesuai kompetensinya untuk memastikan kualitas dan keberlanjutan usaha. Kolaborasi yang solid menjadi kekuatan utama tim dalam mengembangkan Coffipa sebagai minuman inovatif yang mengedepankan kesehatan, kualitas, dan potensi bisnis, sehingga mampu memberikan manfaat ekonomi sekaligus mendukung gaya hidup sehat masyarakat. PRODUK",
    "foto_produk": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200049846",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-5",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Diptera (2024)",
    "nama_mahasiswa": "Ahmad Nashrullah, Bintang Jaya Kusuma, Nikko Hafidz Nugroho, Yasyfa Fikri Setya Haroshta, Gading Prawira Yudha",
    "program_studi": "Program Studi Pendidikan Dokter yang memiliki",
    "deskripsi": "Integrated Farming: Pengolahan Sampah Organik Modern menggunakan Konsep Ekonomi Sirkuler ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Ahmad Nashrullah 2113010003 Kedokteran 2 Bintang Jaya Kusuma 2113010024 3 Nikko Hafidz Nugroho 2113010054 4 Yasyfa Fikri Setya Haroshta 2113010064 5 Gading Prawira Yudha 2213010049 PROFIL TIM Tim ini merupakan kelompok mahasiswa yang mengembangkan usaha budidaya Black Soldier Fly (BSF) berbasis ekonomi sirkular sebagai solusi atas permasalahan sampah organik di Kabupaten Banyumas. Berangkat dari tingginya volume sampah organik yang belum dimanfaatkan secara optimal, tim berinovasi mengolah limbah sisa dapur menjadi pakan maggot BSF yang selanjutnya menghasilkan maggot berprotein tinggi serta pupuk organik cair dan padat. Melalui usaha ini, tim berkomitmen mendukung pengelolaan sampah yang berkelanjutan sekaligus menciptakan nilai ekonomi dari limbah organik. Tim terdiri atas lima mahasiswa Program Studi Pendidikan Dokter yang memiliki pembagian tugas sesuai kompetensi masing-masing. Ahmad Nashrullah bertindak sebagai Koordinator, Bintang Jaya K dan Gading Prawira Y menangani bidang pemasaran dan desain, Nikko Hafidz N bertanggung jawab pada pengembangan kemitraan dan operasional lapangan, sedangkan Yasfa Fikri SH mengelola administrasi serta keuangan usaha. Dengan menggabungkan kemampuan organisasi, pemasaran, operasional, dan manajemen, tim berupaya mengembangkan usaha budidaya maggot yang inovatif, berkelanjutan, serta memberikan dampak positif bagi lingkungan dan masyarakat.",
    "histori_usaha": "Integrated Farming: Pengolahan Sampah Organik Modern menggunakan Konsep Ekonomi Sirkuler ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Ahmad Nashrullah 2113010003 Kedokteran 2 Bintang Jaya Kusuma 2113010024 3 Nikko Hafidz Nugroho 2113010054 4 Yasyfa Fikri Setya Haroshta 2113010064 5 Gading Prawira Yudha 2213010049 PROFIL TIM Tim ini merupakan kelompok mahasiswa yang mengembangkan usaha budidaya Black Soldier Fly (BSF) berbasis ekonomi sirkular sebagai solusi atas permasalahan sampah organik di Kabupaten Banyumas. Berangkat dari tingginya volume sampah organik yang belum dimanfaatkan secara optimal, tim berinovasi mengolah limbah sisa dapur menjadi pakan maggot BSF yang selanjutnya menghasilkan maggot berprotein tinggi serta pupuk organik cair dan padat. Melalui usaha ini, tim berkomitmen mendukung pengelolaan sampah yang berkelanjutan sekaligus menciptakan nilai ekonomi dari limbah organik. Tim terdiri atas lima mahasiswa Program Studi Pendidikan Dokter yang memiliki pembagian tugas sesuai kompetensi masing-masing. Ahmad Nashrullah bertindak sebagai Koordinator, Bintang Jaya K dan Gading Prawira Y menangani bidang pemasaran dan desain, Nikko Hafidz N bertanggung jawab pada pengembangan kemitraan dan operasional lapangan, sedangkan Yasfa Fikri SH mengelola administrasi serta keuangan usaha. Dengan menggabungkan kemampuan organisasi, pemasaran, operasional, dan manajemen, tim berupaya mengembangkan usaha budidaya maggot yang inovatif, berkelanjutan, serta memberikan dampak positif bagi lingkungan dan masyarakat.",
    "foto_produk": "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200058633",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-6",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Dissa (2024)",
    "nama_mahasiswa": "Izudin Hamid, Brenda Dara Sekar, Hindun Asvi Khaerotul Khisan, Khoirunnisa, Khofifatuzzuhriyah",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "DISSA : Pupuk Organik Cair Dari Kulit Bawang Merah, Bawang Putih Dan Yogurt ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Izudin Hamid 2101020024 Keguruan dan Ilmu Pendidikan 2 Brenda Dara Sekar Ayuningtyas 2101040053 3 Hindun Asvi Khaerotul Khisan 2201060031 4 Khoirunnisa 2101070009 5 Khofifatuzzuhriyah 2201040023 PROFIL TIM Tim usaha ini terdiri atas mahasiswa yang memiliki semangat kewirausahaan dan kepedulian terhadap isu lingkungan, khususnya dalam pemanfaatan limbah kulit bawang merah dan bawang putih menjadi pupuk organik cair sekaligus pestisida nabati. Dengan menggabungkan kemampuan di bidang produksi, manajemen, keuangan, administrasi, dan pemasaran, tim berkomitmen menghadirkan produk yang inovatif, ramah lingkungan, serta mampu membantu petani mengurangi ketergantungan pada pupuk dan pestisida kimia. Melalui pembagian tugas yang jelas dan kolaborasi yang solid, tim berfokus pada pengembangan produk, pengendalian kualitas, pemasaran, serta perluasan kemitraan dengan masyarakat dan pelaku pertanian. Dengan semangat inovasi dan keberlanjutan, tim optimis mampu menghasilkan produk yang bernilai ekonomis sekaligus memberikan dampak positif bagi lingkungan dan mendukung terwujudnya pertanian yang lebih berkelanjutan. PRODUK",
    "histori_usaha": "DISSA : Pupuk Organik Cair Dari Kulit Bawang Merah, Bawang Putih Dan Yogurt ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Izudin Hamid 2101020024 Keguruan dan Ilmu Pendidikan 2 Brenda Dara Sekar Ayuningtyas 2101040053 3 Hindun Asvi Khaerotul Khisan 2201060031 4 Khoirunnisa 2101070009 5 Khofifatuzzuhriyah 2201040023 PROFIL TIM Tim usaha ini terdiri atas mahasiswa yang memiliki semangat kewirausahaan dan kepedulian terhadap isu lingkungan, khususnya dalam pemanfaatan limbah kulit bawang merah dan bawang putih menjadi pupuk organik cair sekaligus pestisida nabati. Dengan menggabungkan kemampuan di bidang produksi, manajemen, keuangan, administrasi, dan pemasaran, tim berkomitmen menghadirkan produk yang inovatif, ramah lingkungan, serta mampu membantu petani mengurangi ketergantungan pada pupuk dan pestisida kimia. Melalui pembagian tugas yang jelas dan kolaborasi yang solid, tim berfokus pada pengembangan produk, pengendalian kualitas, pemasaran, serta perluasan kemitraan dengan masyarakat dan pelaku pertanian. Dengan semangat inovasi dan keberlanjutan, tim optimis mampu menghasilkan produk yang bernilai ekonomis sekaligus memberikan dampak positif bagi lingkungan dan mendukung terwujudnya pertanian yang lebih berkelanjutan. PRODUK",
    "foto_produk": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200065540",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-7",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "FastDokter (2024)",
    "nama_mahasiswa": "Yoga Zain Zakaria, Agri Bayu Satria, Rara Mutiara Viridis, Ariq Majid Muzakki",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "FastDokter : Kemudahan Dalam Melakukan Reservasi Dengan Dokter Berbasis Aplikasi ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Yoga Zain Zakaria 2102010404 Ekonomi dan Bisnis 2 Daisak Hidayat Baihaqi 2102010351 3 Agri Bayu Satria 2102010391 4 Rara Mutiara Viridis 2106010044 Agama Islam 5 Ariq Majid Muzakki 2106010021 PROFIL TIM Tim usaha ini terdiri atas mahasiswa yang memiliki kepedulian terhadap peningkatan akses dan kualitas layanan kesehatan melalui pemanfaatan teknologi digital. Dengan mengembangkan platform yang menghubungkan dokter dan pasien dalam satu aplikasi, tim berkomitmen menghadirkan solusi yang memudahkan masyarakat dalam memperoleh informasi jadwal praktik dokter, melakukan reservasi, serta mengakses layanan kesehatan secara lebih cepat, aman, dan efisien. Setiap anggota tim berkontribusi sesuai dengan bidang keahliannya, mulai dari pengembangan aplikasi, pengelolaan operasional, administrasi, keuangan, hingga pemasaran. Melalui kolaborasi yang solid dan semangat inovasi, tim optimis dapat mengembangkan platform kesehatan yang mampu meningkatkan kualitas pelayanan medis, memperkuat komunikasi antara dokter dan pasien, serta mendukung transformasi layanan kesehatan digital di Indonesia.",
    "histori_usaha": "FastDokter : Kemudahan Dalam Melakukan Reservasi Dengan Dokter Berbasis Aplikasi ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Yoga Zain Zakaria 2102010404 Ekonomi dan Bisnis 2 Daisak Hidayat Baihaqi 2102010351 3 Agri Bayu Satria 2102010391 4 Rara Mutiara Viridis 2106010044 Agama Islam 5 Ariq Majid Muzakki 2106010021 PROFIL TIM Tim usaha ini terdiri atas mahasiswa yang memiliki kepedulian terhadap peningkatan akses dan kualitas layanan kesehatan melalui pemanfaatan teknologi digital. Dengan mengembangkan platform yang menghubungkan dokter dan pasien dalam satu aplikasi, tim berkomitmen menghadirkan solusi yang memudahkan masyarakat dalam memperoleh informasi jadwal praktik dokter, melakukan reservasi, serta mengakses layanan kesehatan secara lebih cepat, aman, dan efisien. Setiap anggota tim berkontribusi sesuai dengan bidang keahliannya, mulai dari pengembangan aplikasi, pengelolaan operasional, administrasi, keuangan, hingga pemasaran. Melalui kolaborasi yang solid dan semangat inovasi, tim optimis dapat mengembangkan platform kesehatan yang mampu meningkatkan kualitas pelayanan medis, memperkuat komunikasi antara dokter dan pasien, serta mendukung transformasi layanan kesehatan digital di Indonesia.",
    "foto_produk": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200077903",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-8",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Golet Kost (2024)",
    "nama_mahasiswa": "Alvito Herindra Pratama, Iqyan Aziz Syamaidzar, Wulan Setiyowati, Rizkia Febri Purbaningrum",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "GoletKost : Jasa Informasi Kost Berbasis Online Sebagai Solusi Jitu Mempromosikan dan Menjembatani Bisnis Kost-Kostan Bagi Mahasiswa di Sekitar Kampus Purwokerto ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Alvito Herindra Pratama 2203030021 Teknik dan Sains 2 Helmi Surya Abimanyu 2203030039 3 Iqyan Aziz Syamaidzar 2203040066 4 Wulan Setiyowati 2102030071 Ekonomi dan Bisnis 5 Rizkia Febri Purbaningrum 2102010247 PROFIL TIM Tim Info Kost Purwokerto merupakan tim wirausaha mahasiswa yang berfokus pada penyediaan layanan informasi rumah kost berbasis digital untuk memudahkan mahasiswa dan masyarakat dalam menemukan tempat tinggal yang sesuai dengan kebutuhan. Berangkat dari tingginya jumlah mahasiswa pendatang di Purwokerto serta masih terbatasnya akses terhadap informasi kost yang lengkap dan akurat, tim menghadirkan platform yang menyediakan informasi kost secara praktis, terpercaya, dan mudah diakses melalui website maupun media sosial. Seluruh anggota tim bekerja secara kolaboratif dalam mengembangkan layanan, mulai dari pengumpulan dan verifikasi data kost, pengelolaan sistem informasi, pengembangan konten digital, pelayanan kepada pengguna, hingga menjalin kerja sama dengan pemilik kost. Dengan mengedepankan inovasi, pelayanan yang responsif, dan pemanfaatan teknologi informasi, Tim Info Kost Purwokerto berkomitmen menjadi jembatan antara pemilik kost dan pencari kost serta mendukung terciptanya layanan informasi hunian yang lebih efektif, efisien, dan terpercaya di Kota Purwokerto. PRODUK MARKETING TOOLS Instagram : infokost_purwokerto.id",
    "histori_usaha": "GoletKost : Jasa Informasi Kost Berbasis Online Sebagai Solusi Jitu Mempromosikan dan Menjembatani Bisnis Kost-Kostan Bagi Mahasiswa di Sekitar Kampus Purwokerto ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Alvito Herindra Pratama 2203030021 Teknik dan Sains 2 Helmi Surya Abimanyu 2203030039 3 Iqyan Aziz Syamaidzar 2203040066 4 Wulan Setiyowati 2102030071 Ekonomi dan Bisnis 5 Rizkia Febri Purbaningrum 2102010247 PROFIL TIM Tim Info Kost Purwokerto merupakan tim wirausaha mahasiswa yang berfokus pada penyediaan layanan informasi rumah kost berbasis digital untuk memudahkan mahasiswa dan masyarakat dalam menemukan tempat tinggal yang sesuai dengan kebutuhan. Berangkat dari tingginya jumlah mahasiswa pendatang di Purwokerto serta masih terbatasnya akses terhadap informasi kost yang lengkap dan akurat, tim menghadirkan platform yang menyediakan informasi kost secara praktis, terpercaya, dan mudah diakses melalui website maupun media sosial. Seluruh anggota tim bekerja secara kolaboratif dalam mengembangkan layanan, mulai dari pengumpulan dan verifikasi data kost, pengelolaan sistem informasi, pengembangan konten digital, pelayanan kepada pengguna, hingga menjalin kerja sama dengan pemilik kost. Dengan mengedepankan inovasi, pelayanan yang responsif, dan pemanfaatan teknologi informasi, Tim Info Kost Purwokerto berkomitmen menjadi jembatan antara pemilik kost dan pencari kost serta mendukung terciptanya layanan informasi hunian yang lebih efektif, efisien, dan terpercaya di Kota Purwokerto. PRODUK MARKETING TOOLS Instagram : infokost_purwokerto.id",
    "foto_produk": "https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200089844",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-9",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-2",
    "nama_usaha": "HARS Dye (2024)",
    "nama_mahasiswa": "Aldena Selavi, Hesti Dianawati, Sansy Hana Widya Sims, Umi Raudhatul Fuadah, Jihan Fadlilah Maharani",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "Perpaduan Seni Batik Tradisional dan Sustainable Fashion “HARS Dye” ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Aldena Selavi 2202030105 Ekonomi dan Bisnis 2 Hesti Dianawati 2102030068 3 Sansy Hana Widya Sims 2102030097 4 Umi Raudhatul Fuadah 2202030046 5 Jihan Fadlilah Maharani 2302030134 PROFIL TIM Tim HARS DYE merupakan tim wirausaha mahasiswa yang bergerak di bidang industri kreatif dan fesyen berkelanjutan melalui pengembangan produk tie dye yang dipadukan dengan teknik ecoprint. Tim ini dibentuk atas kepedulian terhadap pelestarian lingkungan serta komitmen untuk menghadirkan produk fesyen yang inovatif, bernilai seni, dan memiliki daya saing tinggi. Dengan memanfaatkan bahan-bahan alami sebagai pewarna, HARS DYE menghasilkan produk yang ramah lingkungan sekaligus mendukung pelestarian budaya dan pengembangan industri kreatif berbasis kearifan lokal. Dalam menjalankan usaha, setiap anggota Tim HARS DYE memiliki peran sesuai bidangnya, mulai dari pengembangan desain, proses produksi, pengendalian kualitas, pemasaran, hingga pengelolaan administrasi dan keuangan. Melalui kolaborasi, kreativitas, dan semangat inovasi, tim berkomitmen menghadirkan produk fesyen yang tidak hanya mengikuti tren, tetapi juga memberikan nilai tambah bagi masyarakat serta mendorong penerapan konsep sustainable fashion di Indonesia. PRODUK",
    "histori_usaha": "Perpaduan Seni Batik Tradisional dan Sustainable Fashion “HARS Dye” ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Aldena Selavi 2202030105 Ekonomi dan Bisnis 2 Hesti Dianawati 2102030068 3 Sansy Hana Widya Sims 2102030097 4 Umi Raudhatul Fuadah 2202030046 5 Jihan Fadlilah Maharani 2302030134 PROFIL TIM Tim HARS DYE merupakan tim wirausaha mahasiswa yang bergerak di bidang industri kreatif dan fesyen berkelanjutan melalui pengembangan produk tie dye yang dipadukan dengan teknik ecoprint. Tim ini dibentuk atas kepedulian terhadap pelestarian lingkungan serta komitmen untuk menghadirkan produk fesyen yang inovatif, bernilai seni, dan memiliki daya saing tinggi. Dengan memanfaatkan bahan-bahan alami sebagai pewarna, HARS DYE menghasilkan produk yang ramah lingkungan sekaligus mendukung pelestarian budaya dan pengembangan industri kreatif berbasis kearifan lokal. Dalam menjalankan usaha, setiap anggota Tim HARS DYE memiliki peran sesuai bidangnya, mulai dari pengembangan desain, proses produksi, pengendalian kualitas, pemasaran, hingga pengelolaan administrasi dan keuangan. Melalui kolaborasi, kreativitas, dan semangat inovasi, tim berkomitmen menghadirkan produk fesyen yang tidak hanya mengikuti tren, tetapi juga memberikan nilai tambah bagi masyarakat serta mendorong penerapan konsep sustainable fashion di Indonesia. PRODUK",
    "foto_produk": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200093228",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-10",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-2",
    "nama_usaha": "Kojan Apparel (2024)",
    "nama_mahasiswa": "Muhammad Nur Riyadi Al Fais, Ghina Nur Azizah",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "Kojan Apparel : Membangkitkan Semangat Kreativitas dan Kemandirian Mahasiswa dalam Industri Fashion ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Muhammad Nur Riyadi Al Fais 2207010034 Psikologi 2 Farhan Ainur Rizal 2307010249 3 Ghina Nur Azizah 2207010251 PROFIL TIM Tim Kojan Apparel merupakan tim wirausaha mahasiswa yang memiliki semangat kolaborasi dalam mengembangkan usaha di bidang fashion. Tim ini dibentuk dengan tujuan menghadirkan produk pakaian yang berkualitas, modern, dan sesuai dengan tren anak muda, sekaligus menjadi sarana bagi mahasiswa untuk mengembangkan keterampilan kewirausahaan. Setiap anggota tim berkontribusi secara aktif mulai dari proses perancangan produk, pengadaan bahan, produksi, pemasaran digital, hingga pengelolaan administrasi usaha sehingga seluruh proses bisnis dapat berjalan secara efektif dan terintegrasi. Melalui kerja sama yang solid, komunikasi yang baik, dan komitmen terhadap inovasi, Tim Kojan Apparel terus berupaya mengembangkan produk yang memiliki daya saing di pasar fashion. Selain berorientasi pada pertumbuhan usaha, tim juga berkomitmen memberikan pengalaman belajar bagi seluruh anggotanya dalam mengelola bisnis secara profesional, sehingga mampu menciptakan wirausaha muda yang kreatif, adaptif, dan siap menghadapi perkembangan industri fashion di era digital. PRODUK MARKETING TOOLS Instagram : Kojan.id",
    "histori_usaha": "Kojan Apparel : Membangkitkan Semangat Kreativitas dan Kemandirian Mahasiswa dalam Industri Fashion ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Muhammad Nur Riyadi Al Fais 2207010034 Psikologi 2 Farhan Ainur Rizal 2307010249 3 Ghina Nur Azizah 2207010251 PROFIL TIM Tim Kojan Apparel merupakan tim wirausaha mahasiswa yang memiliki semangat kolaborasi dalam mengembangkan usaha di bidang fashion. Tim ini dibentuk dengan tujuan menghadirkan produk pakaian yang berkualitas, modern, dan sesuai dengan tren anak muda, sekaligus menjadi sarana bagi mahasiswa untuk mengembangkan keterampilan kewirausahaan. Setiap anggota tim berkontribusi secara aktif mulai dari proses perancangan produk, pengadaan bahan, produksi, pemasaran digital, hingga pengelolaan administrasi usaha sehingga seluruh proses bisnis dapat berjalan secara efektif dan terintegrasi. Melalui kerja sama yang solid, komunikasi yang baik, dan komitmen terhadap inovasi, Tim Kojan Apparel terus berupaya mengembangkan produk yang memiliki daya saing di pasar fashion. Selain berorientasi pada pertumbuhan usaha, tim juga berkomitmen memberikan pengalaman belajar bagi seluruh anggotanya dalam mengelola bisnis secara profesional, sehingga mampu menciptakan wirausaha muda yang kreatif, adaptif, dan siap menghadapi perkembangan industri fashion di era digital. PRODUK MARKETING TOOLS Instagram : Kojan.id",
    "foto_produk": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200104256",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-11",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Moocofera (2024)",
    "nama_mahasiswa": "Mellysa Dwi Rahayu, Diana Lestari",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "MOCOFERA : Brightening Body Scrub Pencegah Penuaan Dini Menggunakan Potensi Bahan Baku Limbah Sampah Dapur untuk Kecantikan ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Mellysa Dwi Rahayu 2102010097 Ekonomi dan Bisnis 2 Nabila Shafa Putri Prayoga 2102010331 3 Diana Lestari 2102010241 PROFIL TIM Tim Mocofera merupakan tim mahasiswa yang mengembangkan usaha di bidang beauty and personal care melalui inovasi produk body scrub berbahan alami berbasis kopi dan kelapa. Usaha ini hadir sebagai respons terhadap meningkatnya kebutuhan masyarakat akan produk perawatan tubuh yang aman, ramah lingkungan, dan mendukung gaya hidup sehat. Dengan mengusung slogan “Fall in love with your skin all over again. Mocofera’s body scrub is the love letter your skin deserves.”, tim berkomitmen menghadirkan produk berkualitas yang tidak hanya bermanfaat bagi kesehatan kulit, tetapi juga memanfaatkan kekayaan bahan baku lokal Indonesia. Tim Mocofera terdiri dari tiga anggota yang bekerja secara kolaboratif dengan pembagian tugas sesuai kompetensi masing-masing, meliputi pengelolaan operasional, produksi, pemasaran, dan administrasi usaha. Setiap anggota memiliki tanggung jawab yang jelas dalam mendukung keberlangsungan bisnis, mulai dari menjaga kualitas produk, mengembangkan strategi pemasaran digital, hingga mengelola hubungan dengan pelanggan. Dengan semangat inovasi, kerja sama, dan komitmen terhadap keberlanjutan, Tim Mocofera terus berupaya mengembangkan usaha yang kompetitif serta memberikan dampak positif bagi masyarakat dan lingkungan. PRODUK",
    "histori_usaha": "MARKETING TOOLS Instagram : moocofera_p2mw_ump TikTok : moocofera_p2mw_ump YouTube : MOOCOFERA P2MW Shopee : moocofera_official",
    "foto_produk": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200117816",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-12",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Mumtaz Laundry (2024)",
    "nama_mahasiswa": "Yunus Kesuma, Billie Adhyatma Susanto, Abhista Farrel Devara, Gugi Rukmadihardja, Dani Indra Wijaya",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "Kualitas Pelayanan dan Keunggulan Laundry “Mumtaz’ terhadap Persaingan dengan Jasa Laundry di Sekitar Universitas Muhammadiyah Purwokerto ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Yunus Kesuma 2113010080 Kedokteran 2 Billie Adhyatma Susanto 2113010006 3 Abhista Farrel Devara Adelaide 2113010012 4 Gugi Rukmadihardja 2113010045 5 Dani Indra Wijaya 2113010099 PROFIL TIM Tim Mumtaz Laundry merupakan tim wirausaha yang bergerak di bidang jasa laundry dengan komitmen menghadirkan layanan pencucian yang bersih, higienis, dan berkualitas. Usaha ini tidak hanya berfokus pada kebersihan pakaian, tetapi juga mengedepankan aspek kesehatan melalui penggunaan bahan pencuci yang efektif dalam membantu mengurangi bakteri dan jamur pada pakaian. Dengan mengutamakan kualitas pelayanan, ketepatan waktu, serta kepuasan pelanggan, tim berupaya membangun kepercayaan konsumen di tengah persaingan usaha laundry yang semakin kompetitif di Kabupaten Banyumas. Seluruh anggota Tim Mumtaz Laundry bekerja secara kolaboratif dalam menjalankan kegiatan operasional usaha, mulai dari penerimaan dan pencatatan pesanan, proses pencucian, pengeringan, penyetrikaan, pengemasan, hingga pelayanan kepada pelanggan. Tim juga berperan dalam menjaga standar kebersihan, melakukan pengendalian kualitas hasil laundry, serta mengembangkan strategi pemasaran untuk memperluas jangkauan pasar. Dengan semangat profesionalisme, inovasi, dan pelayanan prima, Tim Mumtaz Laundry berkomitmen memberikan layanan laundry yang aman, terpercaya, dan berorientasi pada kesehatan serta kepuasan pelanggan. PRODUK",
    "histori_usaha": "Kualitas Pelayanan dan Keunggulan Laundry “Mumtaz’ terhadap Persaingan dengan Jasa Laundry di Sekitar Universitas Muhammadiyah Purwokerto ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Yunus Kesuma 2113010080 Kedokteran 2 Billie Adhyatma Susanto 2113010006 3 Abhista Farrel Devara Adelaide 2113010012 4 Gugi Rukmadihardja 2113010045 5 Dani Indra Wijaya 2113010099 PROFIL TIM Tim Mumtaz Laundry merupakan tim wirausaha yang bergerak di bidang jasa laundry dengan komitmen menghadirkan layanan pencucian yang bersih, higienis, dan berkualitas. Usaha ini tidak hanya berfokus pada kebersihan pakaian, tetapi juga mengedepankan aspek kesehatan melalui penggunaan bahan pencuci yang efektif dalam membantu mengurangi bakteri dan jamur pada pakaian. Dengan mengutamakan kualitas pelayanan, ketepatan waktu, serta kepuasan pelanggan, tim berupaya membangun kepercayaan konsumen di tengah persaingan usaha laundry yang semakin kompetitif di Kabupaten Banyumas. Seluruh anggota Tim Mumtaz Laundry bekerja secara kolaboratif dalam menjalankan kegiatan operasional usaha, mulai dari penerimaan dan pencatatan pesanan, proses pencucian, pengeringan, penyetrikaan, pengemasan, hingga pelayanan kepada pelanggan. Tim juga berperan dalam menjaga standar kebersihan, melakukan pengendalian kualitas hasil laundry, serta mengembangkan strategi pemasaran untuk memperluas jangkauan pasar. Dengan semangat profesionalisme, inovasi, dan pelayanan prima, Tim Mumtaz Laundry berkomitmen memberikan layanan laundry yang aman, terpercaya, dan berorientasi pada kesehatan serta kepuasan pelanggan. PRODUK",
    "foto_produk": "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200128928",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-13",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Rembox (2024)",
    "nama_mahasiswa": "Dita Januariska, Risa Dhea Puspita",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "Rembox (Reminder Medicine Box) KOTAK PENGINGAT MINUM OBAT ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Dita Januariska 2211020148 Ilmu Kesehatan 2 Karina Adelia Putri 2211020316 3 Risa Dhea Puspita 2211020111 PROFIL TIM Tim REMBOX merupakan tim wirausaha mahasiswa yang bergerak di bidang teknologi kesehatan dengan mengembangkan inovasi Reminder Medicine Box (REMBOX) sebagai alat bantu untuk meningkatkan kepatuhan minum obat pada pasien tuberkulosis (TB), khususnya pasien anak. Produk ini berupa kotak obat yang dilengkapi dengan sistem pengingat (alarm) sehingga membantu pasien mengonsumsi Obat Anti Tuberkulosis (OAT) secara tepat waktu selama masa pengobatan. Dalam menjalankan usaha, setiap anggota Tim REMBOX berkolaborasi dalam riset dan pengembangan produk, produksi, pemasaran, serta pengelolaan usaha. Dengan mengusung semangat inovasi dan kepedulian terhadap kesehatan masyarakat, tim berkomitmen menghadirkan solusi yang mendukung keberhasilan terapi TB, meningkatkan kepatuhan pasien terhadap pengobatan, serta berkontribusi dalam upaya menekan angka putus obat dan kasus tuberkulosis resisten obat (TB-RO). PRODUK",
    "histori_usaha": "Rembox (Reminder Medicine Box) KOTAK PENGINGAT MINUM OBAT ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Dita Januariska 2211020148 Ilmu Kesehatan 2 Karina Adelia Putri 2211020316 3 Risa Dhea Puspita 2211020111 PROFIL TIM Tim REMBOX merupakan tim wirausaha mahasiswa yang bergerak di bidang teknologi kesehatan dengan mengembangkan inovasi Reminder Medicine Box (REMBOX) sebagai alat bantu untuk meningkatkan kepatuhan minum obat pada pasien tuberkulosis (TB), khususnya pasien anak. Produk ini berupa kotak obat yang dilengkapi dengan sistem pengingat (alarm) sehingga membantu pasien mengonsumsi Obat Anti Tuberkulosis (OAT) secara tepat waktu selama masa pengobatan. Dalam menjalankan usaha, setiap anggota Tim REMBOX berkolaborasi dalam riset dan pengembangan produk, produksi, pemasaran, serta pengelolaan usaha. Dengan mengusung semangat inovasi dan kepedulian terhadap kesehatan masyarakat, tim berkomitmen menghadirkan solusi yang mendukung keberhasilan terapi TB, meningkatkan kepatuhan pasien terhadap pengobatan, serta berkontribusi dalam upaya menekan angka putus obat dan kasus tuberkulosis resisten obat (TB-RO). PRODUK",
    "foto_produk": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200136859",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-14",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Second Book (2024)",
    "nama_mahasiswa": "Zaenal Arifin, Amelia Nabila Afra, Hasna Gusni Nabila, Ana Dwi Setyaning, Felix Dwi Arwensa",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "SECOND BOOK, APLIKASI PENYEDIA DAN PENGELOLAAN PENJUALAN BUKU BEKAS FIKSI NON-FIKSI UNTUK DIJADIKAN DANA KEMBALI ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Zaenal Arifin 2102010077 Ekonomi dan Bisnis 2 Amelia Nabila Afra 2202030108 3 Hasna Gusni Nabila 2202030109 4 Ana Dwi Setyaning 2202010263 5 Felix Dwi Arwensa 2102010130 PROFIL TIM Tim SECOND-BOOK merupakan tim mahasiswa yang mengembangkan inovasi di bidang teknologi digital (Edutech) melalui platform jual beli buku bekas berbasis aplikasi. Berangkat dari permasalahan banyaknya buku bekas yang tidak lagi dimanfaatkan setelah digunakan serta sulitnya masyarakat memperoleh buku berkualitas dengan harga terjangkau, tim menghadirkan SECOND-BOOK sebagai wadah yang mempertemukan penjual dan pembeli buku bekas secara mudah, aman, dan efisien. Inovasi ini tidak hanya mendukung peningkatan literasi, tetapi juga mendorong penerapan ekonomi sirkular melalui pemanfaatan kembali buku yang masih layak digunakan. Tim SECOND-BOOK bekerja secara kolaboratif dengan pembagian tugas sesuai kompetensi masing-masing, meliputi pengembangan aplikasi, operasional, pemasaran, dan layanan pengguna. Dengan mengedepankan semangat inovasi, keberlanjutan, dan kepedulian terhadap dunia pendidikan, tim berkomitmen menghadirkan platform yang memudahkan pelajar, mahasiswa, maupun masyarakat umum dalam memperoleh referensi bacaan dengan harga terjangkau, sekaligus membantu mengurangi limbah buku dan memperluas akses terhadap sumber belajar.",
    "histori_usaha": "SECOND BOOK, APLIKASI PENYEDIA DAN PENGELOLAAN PENJUALAN BUKU BEKAS FIKSI NON-FIKSI UNTUK DIJADIKAN DANA KEMBALI ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Zaenal Arifin 2102010077 Ekonomi dan Bisnis 2 Amelia Nabila Afra 2202030108 3 Hasna Gusni Nabila 2202030109 4 Ana Dwi Setyaning 2202010263 5 Felix Dwi Arwensa 2102010130 PROFIL TIM Tim SECOND-BOOK merupakan tim mahasiswa yang mengembangkan inovasi di bidang teknologi digital (Edutech) melalui platform jual beli buku bekas berbasis aplikasi. Berangkat dari permasalahan banyaknya buku bekas yang tidak lagi dimanfaatkan setelah digunakan serta sulitnya masyarakat memperoleh buku berkualitas dengan harga terjangkau, tim menghadirkan SECOND-BOOK sebagai wadah yang mempertemukan penjual dan pembeli buku bekas secara mudah, aman, dan efisien. Inovasi ini tidak hanya mendukung peningkatan literasi, tetapi juga mendorong penerapan ekonomi sirkular melalui pemanfaatan kembali buku yang masih layak digunakan. Tim SECOND-BOOK bekerja secara kolaboratif dengan pembagian tugas sesuai kompetensi masing-masing, meliputi pengembangan aplikasi, operasional, pemasaran, dan layanan pengguna. Dengan mengedepankan semangat inovasi, keberlanjutan, dan kepedulian terhadap dunia pendidikan, tim berkomitmen menghadirkan platform yang memudahkan pelajar, mahasiswa, maupun masyarakat umum dalam memperoleh referensi bacaan dengan harga terjangkau, sekaligus membantu mengurangi limbah buku dan memperluas akses terhadap sumber belajar.",
    "foto_produk": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200148384",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-15",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Sejanga Dawet (2024)",
    "nama_mahasiswa": "Gina Rahmayani, Nandana Pratama Zikro, Muhammad Nur Yahya, Amelia Lydiawati, Lisa Elistiana",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "Sejanga Dawet “Citarasa Baru Dalam Menikmati Es Dawet” ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Gina Rahmayani 2104010027 Pertanian dan Perikanan 2 Nandana Pratama Zikro 2104010016 3 Muhammad Nur Yahya Akhyari 2104010019 4 Amelia Lydiawati 2104010021 5 Lisa Elistiana 2104010026 PROFIL TIM Tim Sejanga Dawet merupakan tim wirausaha mahasiswa yang bergerak di bidang Food and Beverage (F&B) dengan mengembangkan inovasi minuman tradisional berbasis dawet menjadi produk yang lebih modern, sehat, dan sesuai dengan selera generasi masa kini. Tim ini menghadirkan Sejanga Dawet, yaitu minuman dawet dengan inovasi penggunaan susu UHT sebagai pengganti santan serta pilihan varian rasa kekinian seperti matcha, green tea, taro, dan vanila. Inovasi tersebut dilakukan untuk meningkatkan daya tarik minuman tradisional tanpa menghilangkan cita rasa khas dawet. Dalam menjalankan usaha, setiap anggota Tim Sejanga Dawet memiliki peran yang saling melengkapi, mulai dari pengembangan produk, pengadaan bahan baku, proses produksi, pengendalian kualitas, pemasaran, hingga pengelolaan administrasi dan keuangan. Dengan semangat kolaborasi, kreativitas, dan inovasi, tim berkomitmen mengangkat kembali minuman tradisional Indonesia menjadi produk yang bernilai tambah, memiliki daya saing, serta mampu memperkenalkan dawet sebagai minuman sehat dan kekinian yang diminati oleh berbagai kalangan, khususnya pelajar dan mahasiswa. PRODUK MARKETING TOOLS Instagram : sejangadawet21",
    "histori_usaha": "Sejanga Dawet “Citarasa Baru Dalam Menikmati Es Dawet” ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Gina Rahmayani 2104010027 Pertanian dan Perikanan 2 Nandana Pratama Zikro 2104010016 3 Muhammad Nur Yahya Akhyari 2104010019 4 Amelia Lydiawati 2104010021 5 Lisa Elistiana 2104010026 PROFIL TIM Tim Sejanga Dawet merupakan tim wirausaha mahasiswa yang bergerak di bidang Food and Beverage (F&B) dengan mengembangkan inovasi minuman tradisional berbasis dawet menjadi produk yang lebih modern, sehat, dan sesuai dengan selera generasi masa kini. Tim ini menghadirkan Sejanga Dawet, yaitu minuman dawet dengan inovasi penggunaan susu UHT sebagai pengganti santan serta pilihan varian rasa kekinian seperti matcha, green tea, taro, dan vanila. Inovasi tersebut dilakukan untuk meningkatkan daya tarik minuman tradisional tanpa menghilangkan cita rasa khas dawet. Dalam menjalankan usaha, setiap anggota Tim Sejanga Dawet memiliki peran yang saling melengkapi, mulai dari pengembangan produk, pengadaan bahan baku, proses produksi, pengendalian kualitas, pemasaran, hingga pengelolaan administrasi dan keuangan. Dengan semangat kolaborasi, kreativitas, dan inovasi, tim berkomitmen mengangkat kembali minuman tradisional Indonesia menjadi produk yang bernilai tambah, memiliki daya saing, serta mampu memperkenalkan dawet sebagai minuman sehat dan kekinian yang diminati oleh berbagai kalangan, khususnya pelajar dan mahasiswa. PRODUK MARKETING TOOLS Instagram : sejangadawet21",
    "foto_produk": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200159866",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-16",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Temutawa (2024)",
    "nama_mahasiswa": "Silva Dwi Ningtias, Maulina Nur Zakiyah, Vera Renta Agustina, Ratna Mauliyanawati",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "“TEMUTAWA” Menciptakan Inovasi Jamu Tradisional menjadi Jamu Modern di Era Milenial ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Silva Dwi Ningtias 2108010023 Farmasi 2 Maulina Nur Zakiyah 2008010049 3 Vera Renta Agustina 2108010032 4 Ratna Mauliyanawati 2108010035 PROFIL TIM Tim TemuTawa merupakan tim mahasiswa yang mengembangkan usaha di bidang food and beverage (F&B) melalui inovasi minuman jamu modern dengan konsep yang lebih menarik dan sesuai dengan selera generasi masa kini. Berangkat dari keprihatinan terhadap semakin menurunnya minat masyarakat, khususnya generasi muda, dalam mengonsumsi jamu tradisional, tim menghadirkan produk jamu dengan tambahan popping boba sebagai inovasi rasa dan tekstur tanpa menghilangkan manfaat kesehatan dari jamu. Melalui konsep ini, TemuTawa berupaya melestarikan warisan budaya Indonesia sekaligus menghadirkan pengalaman baru dalam menikmati minuman herbal. Tim TemuTawa terdiri dari empat anggota dengan pembagian tugas yang jelas sesuai bidang masing-masing. Silva bertindak sebagai ketua yang mengoordinasikan dan memastikan keberlangsungan usaha, Maulina bertanggung jawab mengelola keuangan dan arus kas usaha, Vera menangani administrasi dan operasional, sedangkan Ratna bertanggung jawab pada bidang promosi, pemasaran, dan desain produk. Dengan mengedepankan kolaborasi, kreativitas, dan inovasi, Tim TemuTawa berkomitmen menghadirkan produk jamu yang sehat, modern, serta mampu menjangkau berbagai kalangan masyarakat. PRODUK",
    "histori_usaha": "“TEMUTAWA” Menciptakan Inovasi Jamu Tradisional menjadi Jamu Modern di Era Milenial ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Silva Dwi Ningtias 2108010023 Farmasi 2 Maulina Nur Zakiyah 2008010049 3 Vera Renta Agustina 2108010032 4 Ratna Mauliyanawati 2108010035 PROFIL TIM Tim TemuTawa merupakan tim mahasiswa yang mengembangkan usaha di bidang food and beverage (F&B) melalui inovasi minuman jamu modern dengan konsep yang lebih menarik dan sesuai dengan selera generasi masa kini. Berangkat dari keprihatinan terhadap semakin menurunnya minat masyarakat, khususnya generasi muda, dalam mengonsumsi jamu tradisional, tim menghadirkan produk jamu dengan tambahan popping boba sebagai inovasi rasa dan tekstur tanpa menghilangkan manfaat kesehatan dari jamu. Melalui konsep ini, TemuTawa berupaya melestarikan warisan budaya Indonesia sekaligus menghadirkan pengalaman baru dalam menikmati minuman herbal. Tim TemuTawa terdiri dari empat anggota dengan pembagian tugas yang jelas sesuai bidang masing-masing. Silva bertindak sebagai ketua yang mengoordinasikan dan memastikan keberlangsungan usaha, Maulina bertanggung jawab mengelola keuangan dan arus kas usaha, Vera menangani administrasi dan operasional, sedangkan Ratna bertanggung jawab pada bidang promosi, pemasaran, dan desain produk. Dengan mengedepankan kolaborasi, kreativitas, dan inovasi, Tim TemuTawa berkomitmen menghadirkan produk jamu yang sehat, modern, serta mampu menjangkau berbagai kalangan masyarakat. PRODUK",
    "foto_produk": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200162152",
    "status": "Alumni"
  },
  {
    "id": "umkm-2024-17",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Videolution (2024)",
    "nama_mahasiswa": "Rida Rahmah Danis, Rediarta Nisa Adlina, Muchammad Agung Setyo, Nadhira Safa Ainunnisa",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "Videolution : Website Pelatihan Videografi dan Jasa Pembuatan Video untuk Tenaga Pengajar ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Rida Rahmah Danis 2202050018 Ekonomi dan Bisnis 2 Rediarta Nisa Adlina 2202050011 3 Muchammad Agung Setyo Widodo 2202050004 4 Nadhira Safa Ainunnisa 2202050001 PROFIL TIM Tim Videolution merupakan tim wirausaha mahasiswa yang bergerak di bidang industri kreatif, khususnya jasa produksi video dan konten digital. Berangkat dari pesatnya perkembangan media digital serta meningkatnya kebutuhan akan konten visual yang berkualitas untuk promosi, edukasi, dan branding, Videolution hadir sebagai penyedia layanan kreatif yang mengutamakan kualitas, inovasi, dan kepuasan pelanggan. Didukung oleh anggota tim yang memiliki kompetensi di bidang videografi, editing, desain kreatif, dan pemasaran digital, Videolution berkomitmen menghasilkan karya visual yang profesional, menarik, dan sesuai dengan kebutuhan klien. Melalui semangat kolaborasi, kreativitas, dan pemanfaatan teknologi digital, Tim Videolution tidak hanya mengembangkan usaha yang berdaya saing, tetapi juga berkontribusi dalam mendukung transformasi digital bagi pelaku usaha, institusi, maupun masyarakat. PRODUK",
    "histori_usaha": "Videolution : Website Pelatihan Videografi dan Jasa Pembuatan Video untuk Tenaga Pengajar ANGGOTA TIM No Nama Lengkap NIM Fakultas 1 Rida Rahmah Danis 2202050018 Ekonomi dan Bisnis 2 Rediarta Nisa Adlina 2202050011 3 Muchammad Agung Setyo Widodo 2202050004 4 Nadhira Safa Ainunnisa 2202050001 PROFIL TIM Tim Videolution merupakan tim wirausaha mahasiswa yang bergerak di bidang industri kreatif, khususnya jasa produksi video dan konten digital. Berangkat dari pesatnya perkembangan media digital serta meningkatnya kebutuhan akan konten visual yang berkualitas untuk promosi, edukasi, dan branding, Videolution hadir sebagai penyedia layanan kreatif yang mengutamakan kualitas, inovasi, dan kepuasan pelanggan. Didukung oleh anggota tim yang memiliki kompetensi di bidang videografi, editing, desain kreatif, dan pemasaran digital, Videolution berkomitmen menghasilkan karya visual yang profesional, menarik, dan sesuai dengan kebutuhan klien. Melalui semangat kolaborasi, kreativitas, dan pemanfaatan teknologi digital, Tim Videolution tidak hanya mengembangkan usaha yang berdaya saing, tetapi juga berkontribusi dalam mendukung transformasi digital bagi pelaku usaha, institusi, maupun masyarakat. PRODUK",
    "foto_produk": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200175960",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-18",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Aquabiz IMTA (2025)",
    "nama_mahasiswa": "Muhammad Aziz, Dyah Ruri, Andira Maulana, Gendhis Shella Nur",
    "program_studi": "Prodi Fakultas, Fakultas Pertanian dan, Fakultas Ekonomi dan",
    "deskripsi": "Aquabiz IMTA: Usaha Budidaya Terpadu Ikan Gabus dan Udang yang Bernilai Tinggi ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Muhammad Aziz Marzuqi 2304030004 Akuakultur Fakultas Pertanian dan Perikanan 2. Dyah Ruri Rahmawati 2302010245 Manajemen Fakultas Ekonomi dan Bisnis 3. Andira Maulana Muhamad 2304030010 Akuakultur Fakultas Pertanian dan Perikanan 4. Ana Kurnia Illahi 2404030002 Akuakultur Fakultas Pertanian dan Perikanan 5. Gendhis Shella Nur ‘aini 2404010050 Agribisnis Fakultas Ekonomi dan Bisnis PROFIL Aquabiz merupakan usaha di bidang budidaya perikanan yang berfokus pada pengembangan ikan gabus dan udang vaname sebagai komoditas unggulan bernilai ekonomi tinggi. Usaha ini hadir dengan melihat besarnya potensi kedua komoditas tersebut yang memiliki permintaan pasar stabil, harga jual kompetitif, serta manfaat kesehatan yang tinggi, khususnya ikan gabus yang kaya protein albumin untuk membantu proses penyembuhan luka dan meningkatkan imunitas tubuh. Di sisi lain, udang vaname memiliki keunggulan berupa pertumbuhan yang cepat, tingkat kelangsungan hidup tinggi, serta fleksibilitas budidaya pada berbagai sistem. Potensi tersebut didukung oleh meningkatnya kebutuhan pangan dan peluang pasar domestik maupun ekspor, sehingga budidaya ikan gabus dan udang menjadi sektor yang menjanjikan untuk dikembangkan secara berkelanjutan. Berlokasi di Desa Karangsari, Kecamatan Kembaran, Kabupaten Banyumas, Aquabiz mengembangkan sistem budidaya yang ramah lingkungan sebagai upaya menghasilkan produk perikanan berkualitas sekaligus mendukung penguatan sektor perikanan lokal. Aquabiz menjalankan tahapan usaha mulai dari perencanaan budidaya terpadu, persiapan kolam, pemeliharaan, hingga proses panen dan pascapanen dengan menerapkan teknologi budidaya yang efisien dan berkelanjutan. Usaha ini juga mendukung program ketahanan pangan nasional serta konsep ekonomi biru melalui pemanfaatan sumber daya perairan secara bertanggung jawab, sejalan dengan upaya pemerintah dalam mewujudkan swasembada pangan. Selain berorientasi pada keuntungan, Aquabiz berkomitmen menghasilkan produk perikanan yang berkualitas, memperluas peluang usaha di wilayah Banyumas yang masih memiliki kompetitor budidaya udang terbatas, serta memberikan kontribusi terhadap peningkatan kesejahteraan masyarakat melalui pengembangan usaha perikanan yang produktif, ramah lingkungan, dan berdaya saing.",
    "histori_usaha": "Aquabiz IMTA: Usaha Budidaya Terpadu Ikan Gabus dan Udang yang Bernilai Tinggi ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Muhammad Aziz Marzuqi 2304030004 Akuakultur Fakultas Pertanian dan Perikanan 2. Dyah Ruri Rahmawati 2302010245 Manajemen Fakultas Ekonomi dan Bisnis 3. Andira Maulana Muhamad 2304030010 Akuakultur Fakultas Pertanian dan Perikanan 4. Ana Kurnia Illahi 2404030002 Akuakultur Fakultas Pertanian dan Perikanan 5. Gendhis Shella Nur ‘aini 2404010050 Agribisnis Fakultas Ekonomi dan Bisnis PROFIL Aquabiz merupakan usaha di bidang budidaya perikanan yang berfokus pada pengembangan ikan gabus dan udang vaname sebagai komoditas unggulan bernilai ekonomi tinggi. Usaha ini hadir dengan melihat besarnya potensi kedua komoditas tersebut yang memiliki permintaan pasar stabil, harga jual kompetitif, serta manfaat kesehatan yang tinggi, khususnya ikan gabus yang kaya protein albumin untuk membantu proses penyembuhan luka dan meningkatkan imunitas tubuh. Di sisi lain, udang vaname memiliki keunggulan berupa pertumbuhan yang cepat, tingkat kelangsungan hidup tinggi, serta fleksibilitas budidaya pada berbagai sistem. Potensi tersebut didukung oleh meningkatnya kebutuhan pangan dan peluang pasar domestik maupun ekspor, sehingga budidaya ikan gabus dan udang menjadi sektor yang menjanjikan untuk dikembangkan secara berkelanjutan. Berlokasi di Desa Karangsari, Kecamatan Kembaran, Kabupaten Banyumas, Aquabiz mengembangkan sistem budidaya yang ramah lingkungan sebagai upaya menghasilkan produk perikanan berkualitas sekaligus mendukung penguatan sektor perikanan lokal. Aquabiz menjalankan tahapan usaha mulai dari perencanaan budidaya terpadu, persiapan kolam, pemeliharaan, hingga proses panen dan pascapanen dengan menerapkan teknologi budidaya yang efisien dan berkelanjutan. Usaha ini juga mendukung program ketahanan pangan nasional serta konsep ekonomi biru melalui pemanfaatan sumber daya perairan secara bertanggung jawab, sejalan dengan upaya pemerintah dalam mewujudkan swasembada pangan. Selain berorientasi pada keuntungan, Aquabiz berkomitmen menghasilkan produk perikanan yang berkualitas, memperluas peluang usaha di wilayah Banyumas yang masih memiliki kompetitor budidaya udang terbatas, serta memberikan kontribusi terhadap peningkatan kesejahteraan masyarakat melalui pengembangan usaha perikanan yang produktif, ramah lingkungan, dan berdaya saing.",
    "foto_produk": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200187625",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-19",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "AQUADEWA FARM (2025)",
    "nama_mahasiswa": "Rey Defta Arma, Oktaviana Putri, Bagas Barlian",
    "program_studi": "Prodi Fakultas, Fakultas Pertanian dan",
    "deskripsi": "AQUADEWA FARM (D’PONIK) ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Rey Defta Arma Putra 2304030011 Akuakultur Fakultas Pertanian dan Perikanan 2. Hamid Rama Dani 2304030008 Akuakultur Fakultas Pertanian dan Perikanan 3. Oktaviana Putri Harjono 2304030009 Akuakultur Fakultas Pertanian dan Perikanan 4. Bagas Barlian Nugraha 2404030001 Akuakultur Fakultas Pertanian dan Perikanan Rendy Ahmad Fahrezi 2204020040 Agroteknologi Fakultas Pertanian dan Perikanan PROFIL Tim AQUADEWA FARM dibentuk atas kepedulian terhadap masih terbatasnya pengembangan budidaya ikan dewa (Tor soro) sebagai salah satu ikan endemik Indonesia yang memiliki nilai ekonomi, gizi, dan konservasi tinggi. Di sisi lain, kebutuhan masyarakat terhadap sistem produksi pangan yang berkelanjutan semakin meningkat, sehingga diperlukan inovasi yang tidak hanya berorientasi pada hasil produksi, tetapi juga memperhatikan efisiensi penggunaan sumber daya dan kelestarian lingkungan. Berangkat dari kondisi tersebut, tim menghadirkan AQUADEWA FARM, sebuah usaha agribisnis yang mengintegrasikan budidaya ikan dewa dengan sistem akuaponik untuk menghasilkan dua komoditas sekaligus, yaitu ikan dewa berkualitas tinggi dan sayuran organik. Sistem ini memanfaatkan sirkulasi air secara berkelanjutan sehingga mampu mengurangi limbah, meningkatkan efisiensi produksi, serta menciptakan ekosistem budidaya yang lebih ramah lingkungan. Didukung oleh fasilitas greenhouse, kolam budidaya, sistem aerasi, serta kemitraan penyedia benih ikan dewa di Desa Karangsari, usaha ini memiliki potensi besar untuk dikembangkan sebagai pusat produksi, penelitian, edukasi, dan pelatihan budidaya perikanan modern berbasis konservasi. Tim AQUADEWA FARM terdiri atas mahasiswa dengan pembagian tugas yang meliputi manajemen usaha, operasional budidaya, riset dan pengembangan sistem akuaponik, pengendalian kualitas, keuangan, serta pemasaran. Saat ini usaha berada pada tahap pengembangan dengan fokus pada optimalisasi sistem budidaya, peningkatan kapasitas produksi, serta perluasan pemasaran melalui kolaborasi dengan UMKM dan platform digital. Melalui kolaborasi lintas bidang, tim berkomitmen menghadirkan produk pangan yang sehat, berkualitas, dan berkelanjutan, sekaligus memberikan dampak positif bagi masyarakat melalui pemberdayaan komunitas, penciptaan lapangan kerja, serta peningkatan literasi mengenai",
    "histori_usaha": "pertanian dan perikanan modern. AQUADEWA FARM juga mendukung tercapainya Tujuan Pembangunan Berkelanjutan (SDGs), khususnya dalam mewujudkan ketahanan pangan, produksi yang bertanggung jawab, inovasi teknologi ramah lingkungan, dan efisiensi pemanfaatan sumber daya, serta sejalan dengan program Asta Cita dalam memperkuat swasembada pangan, produktivitas usaha, dan pengembangan kewirausahaan hijau yang berorientasi pada keberlanjutan ekonomi, sosial, dan lingkungan. PRODUK MARKETING TOOLS",
    "foto_produk": "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200196082",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-20",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "BAKSO BAKAR BHINEKA (2025)",
    "nama_mahasiswa": "Tim Pelaksana BAKSO BAKAR BHINEKA",
    "program_studi": "Universitas Muhammadiyah Purwokerto",
    "deskripsi": "Peningkatan Nilai Jual Produk Bakso Melalui Usaha “BAKSO BAKAR BHINEKA” PROFIL TIM Tim Bakso Bakar Bhineka merupakan sekelompok individu yang memiliki semangat berwirausaha dan kepedulian terhadap pelestarian kekayaan kuliner Indonesia melalui inovasi produk. Indonesia dikenal sebagai negara yang memiliki keberagaman suku, budaya, adat istiadat, hingga kuliner, salah satunya adalah bakso yang telah menjadi makanan favorit masyarakat. Seiring berkembangnya industri kuliner, bakso mengalami berbagai inovasi penyajian, termasuk bakso bakar. Namun, banyaknya produk bakso bakar di pasaran belum diimbangi dengan inovasi yang mampu memberikan pengalaman baru bagi konsumen, sehingga menimbulkan kejenuhan terhadap produk yang ada. Berangkat dari kondisi tersebut, tim kami menghadirkan Bakso Bakar Bhineka, sebuah inovasi bakso bakar dengan berbagai varian sambal khas Nusantara yang menawarkan cita rasa unik sekaligus memperkenalkan kekayaan kuliner dari berbagai daerah di Indonesia. Nama \"Bhineka\" dipilih sebagai representasi keberagaman yang menjadi identitas utama produk, sehingga mampu membangun rasa ingin tahu konsumen terhadap keunikan yang ditawarkan. Melalui Bakso Bakar Bhineka, tim berkomitmen untuk menghadirkan produk kuliner yang tidak hanya lezat, berkualitas, dan inovatif, tetapi juga memiliki nilai budaya dan sosial. Kami menggunakan bahan baku berkualitas untuk menghasilkan produk yang aman, praktis, dan bernilai gizi, khususnya bagi kalangan anak muda sebagai target pasar utama. Selain berorientasi pada keuntungan, usaha ini didirikan dengan tujuan membangun hubungan yang baik dengan pelanggan, memperkenalkan keberagaman kuliner Nusantara, serta memberikan dampak positif bagi masyarakat melalui penerapan prinsip keberlanjutan dan penciptaan peluang kerja. Dengan mengedepankan inovasi, kualitas, dan nilai kebhinekaan, tim kami berharap Bakso Bakar Bhineka dapat menjadi produk kuliner yang mampu bersaing di pasar sekaligus menjadi media untuk mengenalkan kekayaan cita rasa Indonesia kepada masyarakat luas.",
    "histori_usaha": "Peningkatan Nilai Jual Produk Bakso Melalui Usaha “BAKSO BAKAR BHINEKA” PROFIL TIM Tim Bakso Bakar Bhineka merupakan sekelompok individu yang memiliki semangat berwirausaha dan kepedulian terhadap pelestarian kekayaan kuliner Indonesia melalui inovasi produk. Indonesia dikenal sebagai negara yang memiliki keberagaman suku, budaya, adat istiadat, hingga kuliner, salah satunya adalah bakso yang telah menjadi makanan favorit masyarakat. Seiring berkembangnya industri kuliner, bakso mengalami berbagai inovasi penyajian, termasuk bakso bakar. Namun, banyaknya produk bakso bakar di pasaran belum diimbangi dengan inovasi yang mampu memberikan pengalaman baru bagi konsumen, sehingga menimbulkan kejenuhan terhadap produk yang ada. Berangkat dari kondisi tersebut, tim kami menghadirkan Bakso Bakar Bhineka, sebuah inovasi bakso bakar dengan berbagai varian sambal khas Nusantara yang menawarkan cita rasa unik sekaligus memperkenalkan kekayaan kuliner dari berbagai daerah di Indonesia. Nama \"Bhineka\" dipilih sebagai representasi keberagaman yang menjadi identitas utama produk, sehingga mampu membangun rasa ingin tahu konsumen terhadap keunikan yang ditawarkan. Melalui Bakso Bakar Bhineka, tim berkomitmen untuk menghadirkan produk kuliner yang tidak hanya lezat, berkualitas, dan inovatif, tetapi juga memiliki nilai budaya dan sosial. Kami menggunakan bahan baku berkualitas untuk menghasilkan produk yang aman, praktis, dan bernilai gizi, khususnya bagi kalangan anak muda sebagai target pasar utama. Selain berorientasi pada keuntungan, usaha ini didirikan dengan tujuan membangun hubungan yang baik dengan pelanggan, memperkenalkan keberagaman kuliner Nusantara, serta memberikan dampak positif bagi masyarakat melalui penerapan prinsip keberlanjutan dan penciptaan peluang kerja. Dengan mengedepankan inovasi, kualitas, dan nilai kebhinekaan, tim kami berharap Bakso Bakar Bhineka dapat menjadi produk kuliner yang mampu bersaing di pasar sekaligus menjadi media untuk mengenalkan kekayaan cita rasa Indonesia kepada masyarakat luas.",
    "foto_produk": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200209183",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-21",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-2",
    "nama_usaha": "E-Wash (2025)",
    "nama_mahasiswa": "Briliani Kusuma Tungga Dewi, Lathifatul Azka Nurul Aini",
    "program_studi": "Program Studi Fakultas, Fakultas Ilmu, Fakultas Ekonomi, Program Studi Teknologi Laboratorium Medik",
    "deskripsi": "E-WASH : SABUN CUCI PIRING RAMAH LINGKUNGAN DARI ECO-ENZYME ANGGOTA TIM No Nama Lengkap NIM Program Studi Fakultas 1. Briliani Kusuma Tungga Dewi 2211050106 Teknik Laboratorium Medik Fakultas Ilmu Kesehatan 2. Lathifatul Azka Nurul Aini 2211050104 Teknik Laboratorium Medik Fakultas Ilmu Kesehatan 3. Nur Aisyah 2302010199 Manajemen Fakultas Ekonomi dan Bisnis 4. Nazilah Annisa Majid 2302010210 Manajemen Fakultas Ekonomi dan Bisnis 5. Dwi Anissa Purbaningrum 2302010088 Manajemen Fakultas Ekonomi dan Bisnis PROFIL TIM Tim E-Wash dibentuk atas kepedulian terhadap tingginya volume sampah organik rumah tangga dan pasar yang belum dimanfaatkan secara optimal, khususnya di Desa Rempoah, Kecamatan Baturraden, Kabupaten Banyumas. Kondisi tersebut mendorong tim untuk menghadirkan E-wash, inovasi sabun cuci piring ramah lingkungan berbahan dasar eco- enzyme yang dihasilkan melalui proses fermentasi limbah organik buah dan sayur. Inovasi ini mengusung konsep ekonomi sirkular dengan mengubah limbah organik menjadi produk yang bernilai guna dan bernilai ekonomi, sehingga tidak hanya berkontribusi dalam mengurangi pencemaran lingkungan, tetapi juga meningkatkan kesadaran masyarakat akan pentingnya pengelolaan sampah secara berkelanjutan. Tim E-wash terdiri atas mahasiswa dari Program Studi Teknologi Laboratorium Medik dan Manajemen dengan pembagian tugas yang mencakup manajemen usaha, riset dan pengembangan produk, produksi, pengendalian mutu, keuangan, serta pemasaran. Melalui kolaborasi lintas disiplin, tim berkomitmen menghadirkan produk yang aman, berkualitas, inovatif, dan memiliki daya saing di pasar. Selain menyediakan alternatif sabun cuci piring yang lebih ramah lingkungan, tim juga berupaya mendukung pemberdayaan masyarakat melalui pemanfaatan limbah organik menjadi produk bernilai jual, membuka peluang peningkatan pendapatan masyarakat, serta mendorong terwujudnya lingkungan yang lebih bersih, sehat, dan berkelanjutan.",
    "histori_usaha": "E-WASH : SABUN CUCI PIRING RAMAH LINGKUNGAN DARI ECO-ENZYME ANGGOTA TIM No Nama Lengkap NIM Program Studi Fakultas 1. Briliani Kusuma Tungga Dewi 2211050106 Teknik Laboratorium Medik Fakultas Ilmu Kesehatan 2. Lathifatul Azka Nurul Aini 2211050104 Teknik Laboratorium Medik Fakultas Ilmu Kesehatan 3. Nur Aisyah 2302010199 Manajemen Fakultas Ekonomi dan Bisnis 4. Nazilah Annisa Majid 2302010210 Manajemen Fakultas Ekonomi dan Bisnis 5. Dwi Anissa Purbaningrum 2302010088 Manajemen Fakultas Ekonomi dan Bisnis PROFIL TIM Tim E-Wash dibentuk atas kepedulian terhadap tingginya volume sampah organik rumah tangga dan pasar yang belum dimanfaatkan secara optimal, khususnya di Desa Rempoah, Kecamatan Baturraden, Kabupaten Banyumas. Kondisi tersebut mendorong tim untuk menghadirkan E-wash, inovasi sabun cuci piring ramah lingkungan berbahan dasar eco- enzyme yang dihasilkan melalui proses fermentasi limbah organik buah dan sayur. Inovasi ini mengusung konsep ekonomi sirkular dengan mengubah limbah organik menjadi produk yang bernilai guna dan bernilai ekonomi, sehingga tidak hanya berkontribusi dalam mengurangi pencemaran lingkungan, tetapi juga meningkatkan kesadaran masyarakat akan pentingnya pengelolaan sampah secara berkelanjutan. Tim E-wash terdiri atas mahasiswa dari Program Studi Teknologi Laboratorium Medik dan Manajemen dengan pembagian tugas yang mencakup manajemen usaha, riset dan pengembangan produk, produksi, pengendalian mutu, keuangan, serta pemasaran. Melalui kolaborasi lintas disiplin, tim berkomitmen menghadirkan produk yang aman, berkualitas, inovatif, dan memiliki daya saing di pasar. Selain menyediakan alternatif sabun cuci piring yang lebih ramah lingkungan, tim juga berupaya mendukung pemberdayaan masyarakat melalui pemanfaatan limbah organik menjadi produk bernilai jual, membuka peluang peningkatan pendapatan masyarakat, serta mendorong terwujudnya lingkungan yang lebih bersih, sehat, dan berkelanjutan.",
    "foto_produk": "https://images.unsplash.com/photo-1520342868574-5fa3804e551c?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200211023",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-22",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "EXPLONUSA (2025)",
    "nama_mahasiswa": "Bagus Narendra Rizqi A",
    "program_studi": "Program Studi Fakultas, Fakultas Ekonomi, Fakultas Teknik dan",
    "deskripsi": "EXPLONUSA : EXPORTER AND MEDIATOR EXPERT ANGGOTA TIM No Nama Lengkap NIM Program Studi Fakultas 1. Faisal Fadhillah S M 2302030004 Akuntansi Fakultas Ekonomi dan Bisnis 2. Naufal Rasyid 2302030041 Akuntansi Fakultas Ekonomi dan Bisnis 3. Fachri Adhia Putra 2302030096 Akuntansi Fakultas Ekonomi dan Bisnis 4. Restu Dias Prayogi 2302030135 Akuntansi Fakultas Ekonomi dan Bisnis 5. Bagus Narendra Rizqi A 2303040095 Teknik Informatika Fakultas Teknik dan Sains PROFIL TIM Explonusa didirikan pada tahun 2025 sebagai startup yang bergerak di bidang ekspor produk plywood dan penyedia jasa mediator expert untuk mendukung pelaku usaha Indonesia menembus pasar internasional. Pendirian perusahaan dilandasi oleh semangat untuk menciptakan dampak ekonomi, sosial, dan lingkungan yang berkelanjutan melalui pemberdayaan usaha lokal. Indonesia memiliki potensi besar di sektor kehutanan, khususnya industri plywood yang menjadi salah satu komoditas ekspor unggulan. Namun, rendahnya kontribusi UMKM terhadap ekspor nasional menunjukkan masih adanya kendala dalam akses pasar, pemahaman prosedur ekspor, serta keterbatasan pendampingan dan jaringan bisnis internasional. Melihat kondisi tersebut, Explonusa hadir sebagai mitra strategis yang membantu pelaku usaha meningkatkan daya saing produk sekaligus memperluas akses ke pasar global. Dalam menjalankan usahanya, Explonusa mengembangkan model bisnis yang mengintegrasikan kegiatan ekspor produk plywood dengan layanan pendampingan ekspor secara menyeluruh. Sebagai eksportir, perusahaan bekerja sama dengan pemasok yang memiliki sertifikasi legalitas dan keberlanjutan, seperti Sistem Verifikasi Legalitas Kayu (SVLK), sehingga kualitas produk dan praktik bisnis tetap memenuhi standar internasional. Di sisi lain, Explonusa menyediakan layanan pelatihan (in-house training), konsultasi ekspor (advisory expert), sistem peer-to-peer (P2P) selling, hingga layanan full handling export untuk membantu pelaku usaha memahami proses ekspor, memenuhi standar pasar global, serta membangun jaringan dengan buyer internasional. Melalui pendekatan tersebut, Explonusa tidak hanya berorientasi pada peningkatan nilai ekspor, tetapi juga berkontribusi dalam menciptakan lapangan kerja, memperkuat perekonomian daerah, mengurangi kesenjangan akses perdagangan internasional bagi UMKM, serta mendukung pencapaian Tujuan Pembangunan Berkelanjutan (SDGs), khususnya SDG 8 (Pekerjaan Layak dan Pertumbuhan Ekonomi), SDG 9 (Industri, Inovasi, dan Infrastruktur), SDG 12 (Konsumsi dan Produksi yang",
    "histori_usaha": "Bertanggung Jawab), dan SDG 17 (Kemitraan untuk Mencapai Tujuan). Dengan demikian, Explonusa hadir sebagai perusahaan yang tidak hanya berfokus pada aktivitas perdagangan internasional, tetapi juga menjadi katalis dalam mendorong transformasi UMKM Indonesia menjadi pelaku bisnis yang berdaya saing global. PRODUK - MARKETING TOOLS Instagram : @explonusa LinkedIn : ExplonusaOfficial Website : explonusa.com",
    "foto_produk": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200228682",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-23",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-2",
    "nama_usaha": "FRESHOESS (2025)",
    "nama_mahasiswa": "Faradila Aisya, Satria Bintang",
    "program_studi": "Prodi Fakultas, Fakultas Ekonomi dan",
    "deskripsi": "Suguhan Perawatan Sepatu Tanpa Menguras Waktu Fershoesss Purwokerto ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Faradila Aisya Hanifah 2302010049 Manajemen S1 Fakultas Ekonomi dan Bisnis 2. Syifa Emilia 2302010348 Manajemen S1 Fakultas Ekonomi dan Bisnis 3. Nadia Triana Safitri 2202030045 Manajemen S1 Fakultas Ekonomi dan Bisnis 4. Evi Hikmahwati 2302010248 Manajemen S1 Fakultas Ekonomi dan Bisnis 5. Satria Bintang Ramadhan 2302010359 Manajemen S1 Fakultas Ekonomi dan Bisnis PROFIL Tim Fershoesss Purwokerto dibentuk atas kepedulian terhadap meningkatnya kebutuhan masyarakat akan layanan perawatan sepatu yang profesional di tengah gaya hidup modern yang serba cepat. Saat ini, sepatu tidak hanya berfungsi sebagai alas kaki, tetapi juga menjadi bagian dari gaya hidup, penunjang penampilan, bahkan memiliki nilai investasi, khususnya pada jenis sneakers dan sepatu premium yang banyak diminati kalangan pelajar, mahasiswa, hingga pekerja. Namun, tidak semua orang memiliki waktu, pengetahuan, maupun peralatan yang memadai untuk merawat sepatu sesuai dengan karakteristik bahannya. Kesalahan dalam proses pencucian sering kali menyebabkan kerusakan pada warna, tekstur, maupun bentuk sepatu. Berangkat dari kondisi tersebut, tim menghadirkan Fershoesss Purwokerto, sebuah usaha jasa laundry dan perawatan sepatu profesional yang memberikan solusi praktis, aman, dan berkualitas bagi masyarakat. Berawal dari usaha rumahan yang melayani pelanggan di lingkungan sekitar, Fershoesss terus berkembang melalui komitmen dalam memberikan pelayanan terbaik, hasil pencucian yang optimal, serta harga yang terjangkau sehingga mampu menjangkau berbagai kalangan. Tim Fershoesss Purwokerto terdiri atas mahasiswa dengan pembagian tugas yang meliputi manajemen usaha, operasional dan quality control, pelayanan pelanggan, keuangan, serta pemasaran digital. Saat ini usaha telah memasuki tahap bertumbuh dengan fokus pada peningkatan kapasitas layanan, penambahan peralatan, perluasan jangkauan pasar, serta penguatan promosi melalui media digital dan partisipasi pada berbagai kegiatan publik. Selain menyediakan layanan pencucian sepatu yang higienis dan berkualitas, Fershoesss juga berkomitmen mengedukasi masyarakat mengenai pentingnya menjaga kebersihan dan merawat sepatu agar lebih awet, nyaman digunakan, serta mengurangi konsumsi sepatu baru",
    "histori_usaha": "yang berlebihan. Dengan menerapkan metode pencucian yang sesuai dengan jenis bahan serta penggunaan produk pembersih yang lebih ramah lingkungan, Fershoesss berupaya memberikan manfaat tidak hanya bagi pelanggan, tetapi juga bagi lingkungan. Seiring dengan perkembangan usaha, Fershoesss diharapkan mampu menciptakan peluang kerja baru melalui pengembangan layanan, seperti deep cleaning, penghilangan bau, layanan antar- jemput, hingga pemesanan berbasis digital, sehingga dapat memberikan dampak ekonomi, sosial, dan lingkungan yang berkelanjutan. PRODUK",
    "foto_produk": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200239099",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-24",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "GOURAMI COOKIES (2025)",
    "nama_mahasiswa": "Shofiyah Hasanatun, Yusha Amira Zalfania, Harrel Atha Kalyana, Muhammad Naufal",
    "program_studi": "Prodi Fakultas",
    "deskripsi": "“GOURAMI COOKIES” ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Shofiyah Hasanatun Nida 2208010007 Farmasi Farmasi 2 Yusha Amira Zalfania 2208010009 Farmasi Farmasi 3 Pratika Azzahra Farmasi Farmasi 4 Harrel Atha Kalyana 2208010047 Farmasi Farmasi 5 Muhammad Naufal Zaidaan 2408010003 Farmasi Farmasi PROFIL TIM Tim Gourami Cookies dibentuk atas kepedulian terhadap masih rendahnya pemanfaatan limbah organik di Indonesia, khususnya limbah sisik ikan gurame yang selama ini umumnya hanya dibuang dan berpotensi menimbulkan pencemaran lingkungan. Padahal, Indonesia merupakan salah satu negara dengan produksi ikan gurame yang tinggi, termasuk Kabupaten Banyumas dan sekitarnya sebagai salah satu sentra budidayanya, sehingga menghasilkan limbah sisik dalam jumlah yang besar. Di sisi lain, berbagai penelitian menunjukkan bahwa sisik ikan gurame memiliki kandungan protein yang tinggi serta mengandung mineral seperti kalsium yang berpotensi dimanfaatkan sebagai bahan baku pangan bernilai gizi. Berangkat dari permasalahan tersebut, tim menghadirkan inovasi Gourami Cookies, yaitu produk cookies berbahan dasar tepung sisik ikan gurame yang mengusung konsep zero waste dengan mengubah limbah perikanan menjadi produk pangan yang bernilai tambah. Pemilihan cookies sebagai produk utama didasarkan pada daya simpan yang relatif lama, praktis dikonsumsi, serta digemari oleh berbagai kalangan, mulai dari anak- anak hingga orang dewasa, sehingga diharapkan mampu menjadi alternatif camilan bergizi sekaligus meningkatkan pemanfaatan limbah hasil perikanan. Dalam menjalankan usaha, Tim Gourami Cookies terdiri atas mahasiswa dengan pembagian tugas yang meliputi ketua tim, administrasi, produksi, pemasaran, dan media untuk memastikan setiap aspek usaha berjalan secara efektif. Saat ini usaha masih berada pada tahap perintisan dengan fokus pada pengujian kandungan gizi, penyempurnaan formulasi produk, peningkatan kualitas, serta pengembangan strategi pemasaran agar mampu bersaing di pasar. Melalui kolaborasi dan semangat inovasi, tim berkomitmen menghadirkan produk yang tidak hanya memiliki cita rasa yang baik dan kandungan protein yang tinggi, tetapi juga memberikan manfaat ekonomi, sosial, dan lingkungan. Kehadiran Gourami Cookies diharapkan dapat mendukung pengurangan limbah perikanan, meningkatkan nilai tambah hasil samping ikan gurame, membuka peluang usaha dan lapangan kerja bagi masyarakat, serta menyediakan pilihan makanan ringan bergizi yang dapat membantu memenuhi kebutuhan protein masyarakat secara berkelanjutan.",
    "histori_usaha": "PRODUK MARKETING TOOLS Instagram : @gouramicookies_p2mw_ump TikTok : @ gouramicookies_p2mw_ump Shopee : gourami_official Tokopedia : gourami_official",
    "foto_produk": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200249767",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-25",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "GROWY (2025)",
    "nama_mahasiswa": "Adnin Moza, Muhammad Fadhiel, Sarifudin Nur, Fasya Salsabila Aria",
    "program_studi": "Prodi Fakultas, Fakultas Ekonomi dan, Fakultas Teknik dan",
    "deskripsi": "GROWY : Digital Parenting Cerdas dan Berkualitas ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Adnin Moza Luthfiansyah 2302010180 Manajemen Fakultas Ekonomi dan Bisnis 2. Muhammad Fadhiel Miqdad 2303040055 Teknik Informatika Fakultas Teknik dan Sains 3. Indah Lestari 2302030022 Manajemen Fakultas Ekonomi dan Bisnis 4. Sarifudin Nur Hidayat 2402050017 Manajemen Fakultas Ekonomi dan Bisnis 5. Fasya Salsabila Aria Putri 2307010285 Psikologi Psikologi PROFIL GROWY merupakan usaha rintisan di bidang bisnis digital yang berfokus pada layanan edukasi parenting dan pemantauan tumbuh kembang anak melalui platform berbasis website. Usaha ini hadir sebagai respons terhadap meningkatnya berbagai tantangan dalam pengasuhan anak di era digital, seperti stres parenting, baby blues syndrome, toxic parenting, serta tingginya penggunaan media digital pada anak yang berpotensi memengaruhi perkembangan emosional, sosial, dan psikologis mereka. Di sisi lain, masih banyak orang tua, khususnya pasangan muda, yang mengalami kesulitan memperoleh informasi parenting yang kredibel, mudah dipahami, serta sesuai dengan tahapan perkembangan anak. Berangkat dari kondisi tersebut, GROWY menghadirkan platform yang menyediakan artikel edukatif, video pembelajaran, pencatatan tumbuh kembang anak, forum diskusi, serta layanan konsultasi bersama psikolog profesional sebagai solusi yang praktis, mudah diakses, dan relevan dengan kebutuhan keluarga modern. Tim GROWY terdiri atas mahasiswa dengan pembagian tugas yang meliputi manajemen usaha, pengembangan platform digital, pengembangan konten edukasi, operasional, keuangan, serta pemasaran. Saat ini usaha berada pada tahap awal pengembangan dengan fokus pada penyempurnaan desain website dan UI/UX, pengembangan fitur utama, pembangunan identitas merek, penyelesaian legalitas usaha, serta penguatan kerja sama dengan psikolog profesional dan lembaga konseling. Melalui kolaborasi lintas bidang, GROWY berkomitmen menghadirkan layanan edukasi parenting yang terpercaya, mudah diakses, dan berbasis kebutuhan masyarakat. Kehadiran GROWY diharapkan mampu meningkatkan literasi parenting, membantu orang tua menerapkan pola asuh yang tepat, mendukung tumbuh kembang anak secara optimal, serta membangun ekosistem pembelajaran keluarga yang berkelanjutan melalui pemanfaatan teknologi digital.",
    "histori_usaha": "GROWY : Digital Parenting Cerdas dan Berkualitas ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Adnin Moza Luthfiansyah 2302010180 Manajemen Fakultas Ekonomi dan Bisnis 2. Muhammad Fadhiel Miqdad 2303040055 Teknik Informatika Fakultas Teknik dan Sains 3. Indah Lestari 2302030022 Manajemen Fakultas Ekonomi dan Bisnis 4. Sarifudin Nur Hidayat 2402050017 Manajemen Fakultas Ekonomi dan Bisnis 5. Fasya Salsabila Aria Putri 2307010285 Psikologi Psikologi PROFIL GROWY merupakan usaha rintisan di bidang bisnis digital yang berfokus pada layanan edukasi parenting dan pemantauan tumbuh kembang anak melalui platform berbasis website. Usaha ini hadir sebagai respons terhadap meningkatnya berbagai tantangan dalam pengasuhan anak di era digital, seperti stres parenting, baby blues syndrome, toxic parenting, serta tingginya penggunaan media digital pada anak yang berpotensi memengaruhi perkembangan emosional, sosial, dan psikologis mereka. Di sisi lain, masih banyak orang tua, khususnya pasangan muda, yang mengalami kesulitan memperoleh informasi parenting yang kredibel, mudah dipahami, serta sesuai dengan tahapan perkembangan anak. Berangkat dari kondisi tersebut, GROWY menghadirkan platform yang menyediakan artikel edukatif, video pembelajaran, pencatatan tumbuh kembang anak, forum diskusi, serta layanan konsultasi bersama psikolog profesional sebagai solusi yang praktis, mudah diakses, dan relevan dengan kebutuhan keluarga modern. Tim GROWY terdiri atas mahasiswa dengan pembagian tugas yang meliputi manajemen usaha, pengembangan platform digital, pengembangan konten edukasi, operasional, keuangan, serta pemasaran. Saat ini usaha berada pada tahap awal pengembangan dengan fokus pada penyempurnaan desain website dan UI/UX, pengembangan fitur utama, pembangunan identitas merek, penyelesaian legalitas usaha, serta penguatan kerja sama dengan psikolog profesional dan lembaga konseling. Melalui kolaborasi lintas bidang, GROWY berkomitmen menghadirkan layanan edukasi parenting yang terpercaya, mudah diakses, dan berbasis kebutuhan masyarakat. Kehadiran GROWY diharapkan mampu meningkatkan literasi parenting, membantu orang tua menerapkan pola asuh yang tepat, mendukung tumbuh kembang anak secara optimal, serta membangun ekosistem pembelajaran keluarga yang berkelanjutan melalui pemanfaatan teknologi digital.",
    "foto_produk": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200251684",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-26",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "IBU DIGITAL BERDAYA (2025)",
    "nama_mahasiswa": "Laeli Rosdiana, Jingga Shafna Ajni, Mely Yulia Agustina, Qonita Nur Salamah",
    "program_studi": "Prodi Fakultas",
    "deskripsi": "IBU DIGITAL BERDAYA TIM ANGGOTA No Nama Lengkap NIM Prodi Fakultas 1. Laeli Rosdiana 2302010046 Manajemen Ekonomi dan Bisnis 2. Jingga Shafna Ajni Prifeska 2302010258 Manajemen Ekonomi dan Bisnis 3. Mely Yulia Agustina 2402030008 Akuntansi Ekonomi dan Bisnis 4. Qonita Nur Salamah 2302010275 Manajemen Ekonomi dan Bisnis PROFIL Tim Ibu Digital Berdaya dibentuk atas kepedulian terhadap masih rendahnya pemberdayaan ekonomi ibu rumah tangga, khususnya di Desa Rakit, Kabupaten Banjarnegara, yang sebagian besar memiliki waktu luang dan aktif menggunakan media sosial, namun belum memanfaatkannya sebagai sarana untuk memperoleh penghasilan. Berdasarkan data Pemerintah Desa Rakit, terdapat 689 ibu rumah tangga atau sekitar 15,14% dari total penduduk desa yang berpotensi menjadi sumber daya produktif apabila dibekali keterampilan digital yang tepat. Di sisi lain, Kabupaten Banjarnegara masih memiliki Upah Minimum Kabupaten (UMK) yang relatif rendah sehingga banyak keluarga bergantung pada satu sumber penghasilan. Berangkat dari kondisi tersebut, tim menghadirkan Ibu Digital Berdaya, sebuah usaha jasa pelatihan affiliator yang dirancang khusus bagi ibu rumah tangga agar mampu memanfaatkan platform digital seperti TikTok Shop dan Shopee Affiliate sebagai sumber penghasilan tambahan. Program ini dikembangkan dengan pendekatan yang sederhana, praktis, dan berbasis komunitas sehingga mudah dipahami oleh peserta yang belum memiliki pengalaman di bidang pemasaran digital. Tim Ibu Digital Berdaya terdiri atas mahasiswa dengan pembagian tugas yang meliputi manajemen usaha, penyusunan kurikulum pelatihan, pengembangan materi, operasional pelatihan, keuangan, serta pemasaran dan pendampingan peserta. Saat ini usaha masih berada pada tahap awal yang mencakup identifikasi kebutuhan peserta, penyusunan modul pelatihan, pelaksanaan uji coba, hingga evaluasi berkelanjutan untuk memastikan efektivitas program. Hasil pelatihan awal menunjukkan bahwa sebagian besar peserta telah berhasil memperoleh komisi pertama melalui program affiliate, sehingga membuktikan bahwa model pelatihan ini memiliki potensi untuk meningkatkan pendapatan keluarga. Melalui kolaborasi dan inovasi yang berkelanjutan, tim berkomitmen menghadirkan ekosistem pembelajaran digital yang inklusif dan mudah diakses dari rumah, sekaligus mendukung peningkatan literasi digital, memperluas peluang pemasaran bagi UMKM lokal melalui jaringan affiliator, mengurangi pengangguran terselubung di kalangan ibu rumah tangga, serta mendorong terwujudnya kemandirian ekonomi masyarakat berbasis teknologi digital.",
    "histori_usaha": "IBU DIGITAL BERDAYA TIM ANGGOTA No Nama Lengkap NIM Prodi Fakultas 1. Laeli Rosdiana 2302010046 Manajemen Ekonomi dan Bisnis 2. Jingga Shafna Ajni Prifeska 2302010258 Manajemen Ekonomi dan Bisnis 3. Mely Yulia Agustina 2402030008 Akuntansi Ekonomi dan Bisnis 4. Qonita Nur Salamah 2302010275 Manajemen Ekonomi dan Bisnis PROFIL Tim Ibu Digital Berdaya dibentuk atas kepedulian terhadap masih rendahnya pemberdayaan ekonomi ibu rumah tangga, khususnya di Desa Rakit, Kabupaten Banjarnegara, yang sebagian besar memiliki waktu luang dan aktif menggunakan media sosial, namun belum memanfaatkannya sebagai sarana untuk memperoleh penghasilan. Berdasarkan data Pemerintah Desa Rakit, terdapat 689 ibu rumah tangga atau sekitar 15,14% dari total penduduk desa yang berpotensi menjadi sumber daya produktif apabila dibekali keterampilan digital yang tepat. Di sisi lain, Kabupaten Banjarnegara masih memiliki Upah Minimum Kabupaten (UMK) yang relatif rendah sehingga banyak keluarga bergantung pada satu sumber penghasilan. Berangkat dari kondisi tersebut, tim menghadirkan Ibu Digital Berdaya, sebuah usaha jasa pelatihan affiliator yang dirancang khusus bagi ibu rumah tangga agar mampu memanfaatkan platform digital seperti TikTok Shop dan Shopee Affiliate sebagai sumber penghasilan tambahan. Program ini dikembangkan dengan pendekatan yang sederhana, praktis, dan berbasis komunitas sehingga mudah dipahami oleh peserta yang belum memiliki pengalaman di bidang pemasaran digital. Tim Ibu Digital Berdaya terdiri atas mahasiswa dengan pembagian tugas yang meliputi manajemen usaha, penyusunan kurikulum pelatihan, pengembangan materi, operasional pelatihan, keuangan, serta pemasaran dan pendampingan peserta. Saat ini usaha masih berada pada tahap awal yang mencakup identifikasi kebutuhan peserta, penyusunan modul pelatihan, pelaksanaan uji coba, hingga evaluasi berkelanjutan untuk memastikan efektivitas program. Hasil pelatihan awal menunjukkan bahwa sebagian besar peserta telah berhasil memperoleh komisi pertama melalui program affiliate, sehingga membuktikan bahwa model pelatihan ini memiliki potensi untuk meningkatkan pendapatan keluarga. Melalui kolaborasi dan inovasi yang berkelanjutan, tim berkomitmen menghadirkan ekosistem pembelajaran digital yang inklusif dan mudah diakses dari rumah, sekaligus mendukung peningkatan literasi digital, memperluas peluang pemasaran bagi UMKM lokal melalui jaringan affiliator, mengurangi pengangguran terselubung di kalangan ibu rumah tangga, serta mendorong terwujudnya kemandirian ekonomi masyarakat berbasis teknologi digital.",
    "foto_produk": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200269107",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-27",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-3",
    "nama_usaha": "LILIN KU (2025)",
    "nama_mahasiswa": "Tim Pelaksana LILIN KU",
    "program_studi": "Program Studi Fakultas, Fakultas Ekonomi",
    "deskripsi": "LILIN KU ANGGOTA TIM No Nama Lengkap NIM Program Studi Fakultas 1. Natasha Putri 2302010272 Manajemen Fakultas Ekonomi dan Bisnis 2. Aulia Octafiani 2302010244 Manajemen Fakultas Ekonomi dan Bisnis 3. Zainab Nur’Aini Puspita Dewi 2302010345 Manajemen Fakultas Ekonomi dan Bisnis 4. Alvian Yuda Prasetya 2302030087 Akuntansi Fakultas Ekonomi dan Bisnis 5. Tri Anggun Pramudya 2302010176 Manajemen Fakultas Ekonomi dan Bisnis PROFIL TIM Candle Bouquet merupakan usaha di bidang industri kreatif yang mengembangkan rangkaian buket berbentuk bunga berbahan dasar lilin (soy wax) sebagai alternatif hadiah yang lebih estetis, fungsional, dan tahan lama. Usaha ini lahir dari meningkatnya kebutuhan masyarakat akan hadiah untuk berbagai momen spesial, seperti wisuda, ulang tahun, dan hari valentine, sekaligus melihat keterbatasan buket bunga segar yang mudah layu dan menjadi limbah organik. Dengan menggabungkan seni kerajinan tangan, aromaterapi, dan fungsi dekoratif dalam satu produk, Candle Bouquet menghadirkan inovasi hadiah yang dapat disesuaikan dengan preferensi konsumen, mulai dari pilihan warna, aroma, hingga bentuk bunga. Proses usaha dimulai dari perancangan desain, produksi secara handmade, hingga pemasaran melalui sistem pre-order dan media digital, sehingga mampu menghasilkan produk yang eksklusif dengan kualitas yang terjaga. Selain berorientasi pada pengembangan bisnis kreatif, Candle Bouquet memiliki komitmen untuk menghadirkan produk yang lebih ramah lingkungan melalui penggunaan soy wax sebagai bahan utama serta mengurangi ketergantungan pada buket bunga segar yang memiliki masa pakai singkat. Tim usaha bertanggung jawab atas seluruh proses, mulai dari pengembangan produk, produksi, pengemasan, hingga pemasaran, dengan target utama konsumen usia 17–35 tahun yang menyukai produk estetis dan personal. Dengan konsep yang belum banyak dikembangkan di Purwokerto, Candle Bouquet diharapkan mampu menjadi produk unggulan yang memberikan nilai tambah bagi industri kreatif lokal, membuka peluang usaha berbasis keterampilan tangan, serta menghadirkan pilihan hadiah yang lebih berkelanjutan, bernilai seni, dan memiliki daya saing tinggi di pasar.",
    "histori_usaha": "LILIN KU ANGGOTA TIM No Nama Lengkap NIM Program Studi Fakultas 1. Natasha Putri 2302010272 Manajemen Fakultas Ekonomi dan Bisnis 2. Aulia Octafiani 2302010244 Manajemen Fakultas Ekonomi dan Bisnis 3. Zainab Nur’Aini Puspita Dewi 2302010345 Manajemen Fakultas Ekonomi dan Bisnis 4. Alvian Yuda Prasetya 2302030087 Akuntansi Fakultas Ekonomi dan Bisnis 5. Tri Anggun Pramudya 2302010176 Manajemen Fakultas Ekonomi dan Bisnis PROFIL TIM Candle Bouquet merupakan usaha di bidang industri kreatif yang mengembangkan rangkaian buket berbentuk bunga berbahan dasar lilin (soy wax) sebagai alternatif hadiah yang lebih estetis, fungsional, dan tahan lama. Usaha ini lahir dari meningkatnya kebutuhan masyarakat akan hadiah untuk berbagai momen spesial, seperti wisuda, ulang tahun, dan hari valentine, sekaligus melihat keterbatasan buket bunga segar yang mudah layu dan menjadi limbah organik. Dengan menggabungkan seni kerajinan tangan, aromaterapi, dan fungsi dekoratif dalam satu produk, Candle Bouquet menghadirkan inovasi hadiah yang dapat disesuaikan dengan preferensi konsumen, mulai dari pilihan warna, aroma, hingga bentuk bunga. Proses usaha dimulai dari perancangan desain, produksi secara handmade, hingga pemasaran melalui sistem pre-order dan media digital, sehingga mampu menghasilkan produk yang eksklusif dengan kualitas yang terjaga. Selain berorientasi pada pengembangan bisnis kreatif, Candle Bouquet memiliki komitmen untuk menghadirkan produk yang lebih ramah lingkungan melalui penggunaan soy wax sebagai bahan utama serta mengurangi ketergantungan pada buket bunga segar yang memiliki masa pakai singkat. Tim usaha bertanggung jawab atas seluruh proses, mulai dari pengembangan produk, produksi, pengemasan, hingga pemasaran, dengan target utama konsumen usia 17–35 tahun yang menyukai produk estetis dan personal. Dengan konsep yang belum banyak dikembangkan di Purwokerto, Candle Bouquet diharapkan mampu menjadi produk unggulan yang memberikan nilai tambah bagi industri kreatif lokal, membuka peluang usaha berbasis keterampilan tangan, serta menghadirkan pilihan hadiah yang lebih berkelanjutan, bernilai seni, dan memiliki daya saing tinggi di pasar.",
    "foto_produk": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200277479",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-28",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-2",
    "nama_usaha": "MODVEST (2025)",
    "nama_mahasiswa": "Amanda Shafa Diani",
    "program_studi": "Prodi Fakultas, Fakultas Ekonomi dan, Fakultas Hukum",
    "deskripsi": "MODVEST ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Kaeva Salsabila 2302010330 Manajemen Fakultas Ekonomi dan Bisnis 2. Amanda Shafa Diani Putri 2302010343 Manajemen Fakultas Ekonomi dan Bisnis 3. Desty Lestari 2402040025 Akuntansi Fakultas Ekonomi dan Bisnis 4. Elsa Syarif 2310010136 Ilmu Hukum Fakultas Hukum 5. Durrotul Yekti Palupi 2402030138 Akuntansi Fakultas Ekonomi dan Bisnis PROFIL Modvest merupakan usaha di bidang industri kreatif yang berfokus pada pengembangan produk fashion multifungsi berupa vest 2in1 yang dapat diubah menjadi tas. Inovasi ini hadir sebagai solusi bagi masyarakat yang memiliki mobilitas tinggi, seperti pelajar, mahasiswa, pekerja, pengendara motor, hingga traveler, yang sering membutuhkan tas tambahan namun menginginkan produk yang tetap praktis dan bergaya. Berangkat dari kebutuhan tersebut, Modvest menggabungkan fungsi vest dan tas dalam satu produk sehingga pengguna dapat beraktivitas lebih efisien tanpa perlu membawa perlengkapan tambahan. Usaha ini memulai pengembangannya melalui tahap perancangan desain, pembuatan prototipe, produksi skala kecil, serta uji pasar menggunakan sistem pre-order melalui media sosial dan marketplace. Masukan dari konsumen akan menjadi dasar penyempurnaan desain sebelum memasuki tahap pengembangan branding, peningkatan kapasitas produksi, dan perluasan pasar. Modvest tidak hanya berorientasi pada inovasi produk, tetapi juga berkomitmen menghadirkan dampak sosial dan lingkungan yang berkelanjutan. Produk vest multifungsi ini dirancang untuk mendukung gaya hidup yang lebih ramah lingkungan dengan mengurangi kebutuhan penggunaan produk fashion dan perlengkapan tambahan secara terpisah. Selain itu, proses produksi melibatkan penjahit serta pelaku usaha lokal sehingga turut mendukung pemberdayaan masyarakat dan penguatan ekonomi lokal. Tim Modvest memiliki pembagian tugas yang mencakup pengembangan produk, produksi, pemasaran digital, dan manajemen usaha untuk memastikan pengembangan bisnis berjalan secara optimal. Melalui perpaduan inovasi, keberlanjutan, dan kolaborasi dengan masyarakat, Modvest diharapkan mampu menjadi produk fashion lokal yang unggul, menghadirkan solusi praktis bagi gaya hidup modern, sekaligus menciptakan tren baru di industri fashion Indonesia.",
    "histori_usaha": "MODVEST ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Kaeva Salsabila 2302010330 Manajemen Fakultas Ekonomi dan Bisnis 2. Amanda Shafa Diani Putri 2302010343 Manajemen Fakultas Ekonomi dan Bisnis 3. Desty Lestari 2402040025 Akuntansi Fakultas Ekonomi dan Bisnis 4. Elsa Syarif 2310010136 Ilmu Hukum Fakultas Hukum 5. Durrotul Yekti Palupi 2402030138 Akuntansi Fakultas Ekonomi dan Bisnis PROFIL Modvest merupakan usaha di bidang industri kreatif yang berfokus pada pengembangan produk fashion multifungsi berupa vest 2in1 yang dapat diubah menjadi tas. Inovasi ini hadir sebagai solusi bagi masyarakat yang memiliki mobilitas tinggi, seperti pelajar, mahasiswa, pekerja, pengendara motor, hingga traveler, yang sering membutuhkan tas tambahan namun menginginkan produk yang tetap praktis dan bergaya. Berangkat dari kebutuhan tersebut, Modvest menggabungkan fungsi vest dan tas dalam satu produk sehingga pengguna dapat beraktivitas lebih efisien tanpa perlu membawa perlengkapan tambahan. Usaha ini memulai pengembangannya melalui tahap perancangan desain, pembuatan prototipe, produksi skala kecil, serta uji pasar menggunakan sistem pre-order melalui media sosial dan marketplace. Masukan dari konsumen akan menjadi dasar penyempurnaan desain sebelum memasuki tahap pengembangan branding, peningkatan kapasitas produksi, dan perluasan pasar. Modvest tidak hanya berorientasi pada inovasi produk, tetapi juga berkomitmen menghadirkan dampak sosial dan lingkungan yang berkelanjutan. Produk vest multifungsi ini dirancang untuk mendukung gaya hidup yang lebih ramah lingkungan dengan mengurangi kebutuhan penggunaan produk fashion dan perlengkapan tambahan secara terpisah. Selain itu, proses produksi melibatkan penjahit serta pelaku usaha lokal sehingga turut mendukung pemberdayaan masyarakat dan penguatan ekonomi lokal. Tim Modvest memiliki pembagian tugas yang mencakup pengembangan produk, produksi, pemasaran digital, dan manajemen usaha untuk memastikan pengembangan bisnis berjalan secara optimal. Melalui perpaduan inovasi, keberlanjutan, dan kolaborasi dengan masyarakat, Modvest diharapkan mampu menjadi produk fashion lokal yang unggul, menghadirkan solusi praktis bagi gaya hidup modern, sekaligus menciptakan tren baru di industri fashion Indonesia.",
    "foto_produk": "https://images.unsplash.com/photo-1528458909336-e7a0adfac1d5?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200281684",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-29",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "PHRescue (2025)",
    "nama_mahasiswa": "Sadewa Bagus, Nunung Wahyu, Yanuar Arif",
    "program_studi": "Prodi Fakultas, Fakultas Ilmu Kesehatan",
    "deskripsi": "PHRescue ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Sadewa Bagus Yudhayana 2211020114 Ilmu Keperawatan Fakultas Ilmu Kesehatan 2. Nunung Wahyu Utami 2211020105 Ilmu Keperawatan Fakultas Ilmu Kesehatan 3. Yanuar Arif Suryandanu 2211020176 Ilmu Keperawatan Fakultas Ilmu Kesehatan PROFIL PHRescue merupakan usaha di bidang alat peraga kesehatan dan edukasi yang berfokus pada pengembangan Phantom Heimlich Maneuver, yaitu manekin simulasi untuk pelatihan penanganan kasus tersedak. Usaha ini hadir sebagai solusi atas tingginya angka kejadian tersedak yang masih menjadi salah satu penyebab kematian akibat kecelakaan, sementara pengetahuan masyarakat mengenai teknik pertolongan pertama, khususnya Heimlich Maneuver, masih sangat rendah. Keterbatasan akses terhadap pelatihan, mahalnya alat simulasi, serta belum tersedianya media pembelajaran yang mampu memberikan umpan balik secara realistis menjadi alasan utama dikembangkannya PHRescue. Melalui inovasi ini, masyarakat umum, pelajar, tenaga kesehatan, hingga institusi pendidikan dapat mempelajari teknik penanganan tersedak secara lebih mudah, praktis, dan sesuai standar, sehingga diharapkan mampu meningkatkan kesiapsiagaan masyarakat dalam menghadapi kondisi kegawatdaruratan. PHRescue dikembangkan oleh tim mahasiswa Universitas Muhammadiyah Purwokerto dengan pembagian tugas yang meliputi pengembangan produk, operasional, pemasaran, serta pengelolaan keuangan dan administrasi. Proses usaha dilakukan mulai dari riset, pengembangan, hingga produksi di wilayah Purwokerto dengan fokus awal memenuhi kebutuhan pelatihan di Kabupaten Banyumas. Selain berorientasi pada pengembangan produk inovatif, PHRescue memiliki tujuan untuk meningkatkan literasi dan keterampilan pertolongan pertama pada kasus tersedak sehingga lebih banyak masyarakat mampu menjadi first responder yang siap bertindak pada masa kritis sebelum korban mendapatkan penanganan medis. Melalui media pembelajaran yang realistis, mudah digunakan, dan terjangkau, PHRescue diharapkan dapat mendukung terciptanya masyarakat yang lebih tanggap darurat serta berkontribusi dalam menurunkan angka kematian akibat tersedak di Indonesia. MARKETING TOOLS Instagram : @phrescue_official TikTok : @phrescue_official",
    "histori_usaha": "Shopee : PHRescue_official Tokopedia : PHRescue_official YouTube : PHRescue_HealthTips Facebook : PHRescue Life Solutions",
    "foto_produk": "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200292097",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-30",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "PROFIL SIKOMJARU (2025)",
    "nama_mahasiswa": "Tim Pelaksana PROFIL SIKOMJARU",
    "program_studi": "Prodi Fakultas, Fakultas Ilmu, Fakultas Teknik dan",
    "deskripsi": "SIKOMJARU ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Vieki Diva Ksatria 2211020205 Keperawatan Fakultas Ilmu Kesehatan 2. Diva Bagus Kurniawan 2211020166 Keperawatan Fakultas Ilmu Kesehatan 3. Ruliyanti 2211020055 Keperawatan Fakultas Ilmu Kesehatan 4. Ilham Saifullah Yusup 2203010068 Teknik Sipil Fakultas Teknik dan Sains PROFIL Tim SIKOMJARU dibentuk atas kepedulian terhadap masih tingginya angka kematian akibat henti jantung serta rendahnya pengetahuan dan keterampilan masyarakat dalam memberikan Bantuan Hidup Dasar (BHD), khususnya Resusitasi Jantung Paru (RJP). Padahal, tindakan RJP yang dilakukan secara cepat dan tepat oleh first responder dapat meningkatkan peluang hidup korban secara signifikan. Namun, keterbatasan akses terhadap media pembelajaran yang memadai menjadi salah satu hambatan utama dalam meningkatkan kompetensi masyarakat. Berdasarkan hasil survei, sebagian besar responden menilai bahwa alat phantom RJP yang tersedia di pasaran memiliki harga yang relatif mahal sehingga sulit dijangkau oleh institusi pendidikan maupun komunitas kesehatan. Selain itu, alat yang ada umumnya belum dilengkapi dengan fitur umpan balik yang membantu pengguna mengetahui ketepatan teknik kompresi. Berangkat dari permasalahan tersebut, tim mengembangkan SIKOMJARU, sebuah alat edukasi kompresi jantung paru yang inovatif, interaktif, dan terjangkau. SIKOMJARU dilengkapi dengan indikator lampu, panduan suara, serta layar LCD yang menampilkan jumlah kompresi dan visualisasi ritme secara real-time, sehingga mampu membantu masyarakat mempelajari teknik RJP sesuai standar operasional prosedur secara lebih mudah, akurat, dan efektif. Tim SIKOMJARU terdiri atas mahasiswa dengan pembagian tugas yang mencakup manajemen usaha, riset dan pengembangan produk, produksi, pengendalian mutu, keuangan, serta pemasaran untuk memastikan seluruh proses pengembangan dan komersialisasi produk berjalan secara optimal. Berbeda dengan usaha yang masih berada pada tahap perintisan, SIKOMJARU telah berhasil diproduksi dan dipasarkan dengan penjualan sebanyak tujuh unit kepada berbagai institusi pendidikan dan komunitas kesehatan, serta telah dimanfaatkan sebagai media pembelajaran di sejumlah SMK kesehatan dan perguruan tinggi di wilayah Banyumas. Melalui kolaborasi lintas bidang, tim berkomitmen untuk terus mengembangkan SIKOMJARU sebagai media edukasi yang terjangkau,",
    "histori_usaha": "berkualitas, dan mudah diakses guna meningkatkan kompetensi masyarakat, tenaga kesehatan, serta peserta didik dalam melakukan Bantuan Hidup Dasar. Kehadiran SIKOMJARU diharapkan mampu memperluas akses pelatihan RJP, meningkatkan kesiapsiagaan masyarakat dalam menghadapi kondisi kegawatdaruratan jantung, mendukung peningkatan mutu pendidikan kesehatan, serta berkontribusi dalam menurunkan angka kematian akibat henti jantung melalui peningkatan kualitas penolong pertama di masyarakat. PRODUK MARKETING TOOLS Website Resmi : sikomjaru.official.com Shopee : sikomjaru.official.store Tokopedia : sikomjaru.official.store Lazada : sikomjaru.official.store Instragram : sikomjaru.official TikTok : sikomjaru.official Facebook : SIKOMJARU - Edukasi Kompresi Jantung Paru Youtube : SIKOMJARU - Phantom Edukasi RJP",
    "foto_produk": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200306543",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-31",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-2",
    "nama_usaha": "SERANTA OUTDOOR (2025)",
    "nama_mahasiswa": "Tim Pelaksana SERANTA OUTDOOR",
    "program_studi": "Prodi Fakultas, Fakultas Pertanian dan",
    "deskripsi": "SERANTA OUTDOOR ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Shindid Nabil arif 2104030006 Akuakultur Fakultas Pertanian dan Perikanan 2. Aden Nuzuli Gita A 2104010058 Agribisnis Fakultas Pertanian dan Perikanan 3. Adhia Rafif Muafa 2204030005 Akuakultur Fakultas Pertanian dan Perikanan 4. Wishnu Anggraeni 2104010047 Agribisnis Fakultas Pertanian dan Perikanan PROFIL Tim Seranta Outdoor dibentuk atas kepedulian terhadap meningkatnya minat masyarakat, khususnya mahasiswa dan generasi muda, dalam melakukan aktivitas pendakian gunung dan kegiatan alam bebas, yang belum diimbangi dengan kepemilikan peralatan pendakian yang memadai serta pemahaman mengenai keselamatan di alam terbuka. Harga perlengkapan outdoor yang relatif mahal membuat banyak pendaki pemula memilih menggunakan peralatan yang kurang sesuai atau bahkan tidak melengkapinya, sehingga berpotensi meningkatkan risiko kecelakaan saat pendakian. Selain itu, letak geografis Purwokerto yang berada di kawasan kaki Gunung Slamet dan dikelilingi berbagai destinasi wisata alam menunjukkan tingginya potensi kebutuhan terhadap layanan penyewaan perlengkapan outdoor yang berkualitas dan terjangkau. Berangkat dari kondisi tersebut, tim menghadirkan Seranta Outdoor, sebuah usaha penyewaan perlengkapan outdoor yang menyediakan berbagai kebutuhan pendakian dan berkemah, mulai dari carrier, tenda, sleeping bag, sepatu, hingga peralatan memasak, dengan tujuan memberikan kemudahan bagi masyarakat untuk menikmati aktivitas alam bebas secara aman, nyaman, dan ekonomis tanpa harus membeli perlengkapan sendiri. Tim Seranta Outdoor terdiri atas mahasiswa dengan pembagian tugas yang mencakup manajemen usaha, operasional penyewaan, pemeliharaan dan pengendalian kualitas peralatan, keuangan, serta pemasaran digital. Selain menyediakan layanan penyewaan, tim juga berkomitmen menjadi media edukasi bagi masyarakat melalui konten di media sosial mengenai penggunaan perlengkapan outdoor, keselamatan pendakian, etika berkegiatan di alam bebas, serta pentingnya menjaga kelestarian lingkungan. Seranta Outdoor mengusung konsep penggunaan peralatan secara berulang sebagai bentuk dukungan terhadap gaya hidup berkelanjutan dan upaya mengurangi limbah dari perlengkapan outdoor yang jarang digunakan. Seiring berkembangnya usaha, tim berharap Seranta Outdoor dapat memperluas akses masyarakat terhadap perlengkapan pendakian yang layak, meningkatkan keselamatan para pendaki, mendukung perkembangan ekowisata di Indonesia, membuka lapangan",
    "histori_usaha": "pekerjaan baru, serta memberikan dampak ekonomi dan lingkungan yang berkelanjutan bagi masyarakat sekitar. PRODUK MARKETING TOOLS Instagram : @seranta_outdoor Tiktok : @seranta_outdoor Youtube : Seranta Outdoor",
    "foto_produk": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200313844",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-32",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "SOULUTION (2025)",
    "nama_mahasiswa": "Regina Indi Dwi, Icha Hertansyah, Kartika Puspita Dewi, Putri Aulia Maharani, Gita Prajna Paramita",
    "program_studi": "Prodi Fakultas",
    "deskripsi": "SOULUTION : Platform Kesehatan Mental & piritualitas Mahasiswa ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Regina Indi Dwi Caesarani 2302010233 Manajemen Ekonomi dan Bisnis 2. Icha Hertansyah Cahya Putri 2302010043 Manajemen Ekonomi dan Bisnis 3. Kartika Puspita Dewi 2307010308 Manajemen Ekonomi dan Bisnis 4. Putri Aulia Maharani 2402030141 Akuntansi Ekonomi dan Bisnis 5. Gita Prajna Paramita 2402050020 Bisnis Digital Ekonomi dan Bisnis PROFIL Tim Soulution dibentuk atas kepedulian terhadap meningkatnya permasalahan kesehatan mental di Indonesia, khususnya di kalangan mahasiswa dan remaja, yang dihadapkan pada berbagai tekanan akademik, sosial, dan emosional. Di sisi lain, akses terhadap layanan psikolog masih terbatas, sementara stigma terhadap konsultasi kesehatan mental masih cukup tinggi. Meskipun berbagai penelitian menunjukkan bahwa religiusitas memiliki peran penting dalam meningkatkan kesehatan mental dan menurunkan tingkat kecemasan maupun depresi, sebagian besar platform kesehatan mental digital di Indonesia masih berfokus pada pendekatan psikologi konvensional tanpa mengintegrasikan aspek spiritual yang menjadi kebutuhan masyarakat Indonesia. Berangkat dari kondisi tersebut, tim menghadirkan Soulution, sebuah platform konsultasi kesehatan mental berbasis digital yang mengintegrasikan layanan psikologi profesional dengan nilai-nilai religius melalui pendampingan psikolog dan pembimbing rohani. Melalui pendekatan yang holistik, Soulution diharapkan mampu memberikan layanan yang lebih personal, mudah diakses, serta sesuai dengan nilai dan keyakinan pengguna dalam menghadapi berbagai permasalahan psikologis. Tim Soulution terdiri atas mahasiswa dengan pembagian tugas yang mencakup manajemen usaha, pengembangan platform digital, pengembangan layanan, operasional, keuangan, serta pemasaran. Saat ini usaha berada pada tahap awal pengembangan dengan fokus pada pembangunan identitas merek, pengembangan website dan media sosial, penyusunan sistem layanan konsultasi, pengurusan legalitas usaha, serta pelaksanaan webinar dan kelas daring sebagai langkah awal memperkenalkan layanan kepada masyarakat. Melalui kolaborasi lintas bidang, tim berkomitmen menghadirkan layanan kesehatan mental yang profesional, mudah diakses, dan relevan dengan kebutuhan masyarakat Indonesia, khususnya mahasiswa dan remaja di Purwokerto. Selain membantu pengguna memperoleh pendampingan psikologis yang komprehensif, Soulution juga diharapkan dapat meningkatkan literasi kesehatan mental, mengurangi stigma terhadap layanan psikologis, membangun",
    "histori_usaha": "komunitas yang saling mendukung, serta menjadi inovasi layanan kesehatan mental berbasis digital yang mengintegrasikan ilmu psikologi dan nilai-nilai spiritual secara berkelanjutan. PRODUK MARKETING TOOLS Instagram : @soulution.id",
    "foto_produk": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200324377",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-33",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "STEVAH (2025)",
    "nama_mahasiswa": "M.H. Arif Mubarok",
    "program_studi": "Prodi Fakultas, Fakultas Ekonomi dan, Fakultas Pertanian dan",
    "deskripsi": "STEVAH ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Umar Abdul Aziz 2402010237 Manajemen Fakultas Ekonomi dan Bisnis 2. Virgi David Riyadi 2402030033 Akuntansi Fakultas Ekonomi dan Bisnis 3. Deni Indrastata 2402050034 Bisnis Digital Fakultas Ekonomi dan Bisnis 4. M.H. Arif Mubarok 2409030002 Desain Komunikasi Visual Ilmu Budaya dan Komunikasi 5. Dimas Ramdani 2304010020 Agribisnis Fakultas Pertanian dan Peternakan PROFIL TIM Azivelife merupakan usaha di bidang pangan dan minuman kesehatan yang berfokus pada pengembangan Stevah, minuman rempah khas Indonesia yang dipadukan dengan pemanis alami stevia dalam bentuk teh celup. Usaha ini hadir sebagai respons terhadap meningkatnya prevalensi diabetes dan penyakit kronis akibat tingginya konsumsi gula di Indonesia, khususnya dari minuman manis yang banyak dikonsumsi oleh anak-anak, remaja, hingga orang dewasa. Di sisi lain, minuman rempah yang kaya manfaat kesehatan mulai ditinggalkan karena dianggap kurang praktis dan kurang sesuai dengan gaya hidup modern. Melihat kondisi tersebut, Azivelife menghadirkan inovasi minuman rempah dengan cita rasa yang lebih diterima masyarakat, rendah gula, praktis disajikan, serta tetap mempertahankan manfaat alami dari rempah-rempah Indonesia. Melalui inovasi ini, Azivelife berupaya mendukung gaya hidup sehat sekaligus melestarikan kekayaan kuliner tradisional Indonesia dalam kemasan yang lebih modern. Azivelife mengembangkan usahanya melalui Program Pembinaan Mahasiswa Wirausaha (P2MW) sebagai sarana mengimplementasikan ilmu kewirausahaan sekaligus menciptakan produk yang memberikan nilai ekonomi dan manfaat kesehatan bagi masyarakat. Selain berorientasi pada profit, Azivelife memiliki komitmen untuk meningkatkan kesadaran masyarakat terhadap pentingnya mengurangi konsumsi gula, menyediakan alternatif minuman yang lebih sehat, serta mendukung program pemerintah dalam pencegahan penyakit tidak menular. Filosofi Azivelife mencerminkan semangat menghadirkan kesehatan, vitalitas, dan kesejahteraan melalui produk yang berkualitas dan bertanggung jawab. Ke depan, usaha ini diharapkan tidak hanya mampu memenuhi kebutuhan pasar akan minuman sehat, tetapi juga membuka lapangan pekerjaan, meningkatkan nilai ekonomi rempah lokal, serta berkontribusi dalam menciptakan masyarakat Indonesia yang lebih sehat menuju visi Indonesia Emas 2045.",
    "histori_usaha": "STEVAH ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1. Umar Abdul Aziz 2402010237 Manajemen Fakultas Ekonomi dan Bisnis 2. Virgi David Riyadi 2402030033 Akuntansi Fakultas Ekonomi dan Bisnis 3. Deni Indrastata 2402050034 Bisnis Digital Fakultas Ekonomi dan Bisnis 4. M.H. Arif Mubarok 2409030002 Desain Komunikasi Visual Ilmu Budaya dan Komunikasi 5. Dimas Ramdani 2304010020 Agribisnis Fakultas Pertanian dan Peternakan PROFIL TIM Azivelife merupakan usaha di bidang pangan dan minuman kesehatan yang berfokus pada pengembangan Stevah, minuman rempah khas Indonesia yang dipadukan dengan pemanis alami stevia dalam bentuk teh celup. Usaha ini hadir sebagai respons terhadap meningkatnya prevalensi diabetes dan penyakit kronis akibat tingginya konsumsi gula di Indonesia, khususnya dari minuman manis yang banyak dikonsumsi oleh anak-anak, remaja, hingga orang dewasa. Di sisi lain, minuman rempah yang kaya manfaat kesehatan mulai ditinggalkan karena dianggap kurang praktis dan kurang sesuai dengan gaya hidup modern. Melihat kondisi tersebut, Azivelife menghadirkan inovasi minuman rempah dengan cita rasa yang lebih diterima masyarakat, rendah gula, praktis disajikan, serta tetap mempertahankan manfaat alami dari rempah-rempah Indonesia. Melalui inovasi ini, Azivelife berupaya mendukung gaya hidup sehat sekaligus melestarikan kekayaan kuliner tradisional Indonesia dalam kemasan yang lebih modern. Azivelife mengembangkan usahanya melalui Program Pembinaan Mahasiswa Wirausaha (P2MW) sebagai sarana mengimplementasikan ilmu kewirausahaan sekaligus menciptakan produk yang memberikan nilai ekonomi dan manfaat kesehatan bagi masyarakat. Selain berorientasi pada profit, Azivelife memiliki komitmen untuk meningkatkan kesadaran masyarakat terhadap pentingnya mengurangi konsumsi gula, menyediakan alternatif minuman yang lebih sehat, serta mendukung program pemerintah dalam pencegahan penyakit tidak menular. Filosofi Azivelife mencerminkan semangat menghadirkan kesehatan, vitalitas, dan kesejahteraan melalui produk yang berkualitas dan bertanggung jawab. Ke depan, usaha ini diharapkan tidak hanya mampu memenuhi kebutuhan pasar akan minuman sehat, tetapi juga membuka lapangan pekerjaan, meningkatkan nilai ekonomi rempah lokal, serta berkontribusi dalam menciptakan masyarakat Indonesia yang lebih sehat menuju visi Indonesia Emas 2045.",
    "foto_produk": "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200339435",
    "status": "Alumni"
  },
  {
    "id": "umkm-2025-34",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "HUMI GROW (2025)",
    "nama_mahasiswa": "Tim Pelaksana HUMI GROW",
    "program_studi": "Program Studi Fakultas, Fakultas Pertanian",
    "deskripsi": "HUMI GROW ANGGOTA TIM No Nama Lengkap NIM Program Studi Fakultas 1. Tiara Halima Sandi 2204010068 Agribisnis Fakultas Pertanian dan Peternakan 2. Naswa Allivia Hanum 2204010077 Agribisnis Fakultas Pertanian dan Peternakan 3. Devani Farrah Meisyanti 2204010104 Agribisnis Fakultas Pertanian dan Peternakan 4. Nida Latifatul Azizah 2304020061 Agroteknologi Fakultas Pertanian dan Peternakan PROFIL TIM Humi Grow merupakan usaha rintisan di bidang agribisnis yang berfokus pada pengembangan teknologi budidaya jamur melalui alat pengatur kelembapan otomatis berbasis sensor. Inovasi ini hadir sebagai solusi atas permasalahan yang sering dihadapi petani jamur, yaitu sulitnya menjaga kelembapan ruang budidaya secara konsisten akibat perubahan cuaca dan masih diterapkannya metode penyemprotan manual. Kondisi kelembapan yang tidak stabil dapat menghambat pertumbuhan jamur, menurunkan kualitas hasil panen, bahkan menyebabkan kegagalan produksi. Melihat kondisi tersebut, Humi Grow mengembangkan alat yang mampu memantau kelembapan secara real-time dan secara otomatis mengaktifkan sistem penyemprotan maupun pengurangan uap air sehingga lingkungan budidaya tetap berada pada kondisi yang optimal. Inovasi ini dirancang agar mudah digunakan, terjangkau, dan dapat diterapkan oleh petani jamur skala rumah tangga maupun pelaku urban farming. Saat ini Humi Grow masih berada pada tahap pengembangan ide yang meliputi riset pasar, penelitian dan pengembangan teknologi, pembuatan prototipe, uji coba lapangan, serta penyusunan program edukasi bagi calon pengguna. Tim Humi Grow memiliki pembagian tugas yang mencakup pengembangan produk dan riset (research and development), pemasaran, keuangan, operasional, serta pengelolaan strategi usaha agar setiap tahapan pengembangan berjalan secara optimal. Selain berorientasi pada inovasi teknologi, Humi Grow memiliki komitmen untuk membantu petani meningkatkan produktivitas dan kualitas hasil panen melalui sistem budidaya yang lebih modern, efisien, dan adaptif terhadap perubahan iklim. Dengan memanfaatkan teknologi otomatisasi, Humi Grow diharapkan mampu mendukung transformasi budidaya jamur yang lebih berkelanjutan sekaligus meningkatkan daya saing petani di sektor agribisnis.",
    "histori_usaha": "HUMI GROW ANGGOTA TIM No Nama Lengkap NIM Program Studi Fakultas 1. Tiara Halima Sandi 2204010068 Agribisnis Fakultas Pertanian dan Peternakan 2. Naswa Allivia Hanum 2204010077 Agribisnis Fakultas Pertanian dan Peternakan 3. Devani Farrah Meisyanti 2204010104 Agribisnis Fakultas Pertanian dan Peternakan 4. Nida Latifatul Azizah 2304020061 Agroteknologi Fakultas Pertanian dan Peternakan PROFIL TIM Humi Grow merupakan usaha rintisan di bidang agribisnis yang berfokus pada pengembangan teknologi budidaya jamur melalui alat pengatur kelembapan otomatis berbasis sensor. Inovasi ini hadir sebagai solusi atas permasalahan yang sering dihadapi petani jamur, yaitu sulitnya menjaga kelembapan ruang budidaya secara konsisten akibat perubahan cuaca dan masih diterapkannya metode penyemprotan manual. Kondisi kelembapan yang tidak stabil dapat menghambat pertumbuhan jamur, menurunkan kualitas hasil panen, bahkan menyebabkan kegagalan produksi. Melihat kondisi tersebut, Humi Grow mengembangkan alat yang mampu memantau kelembapan secara real-time dan secara otomatis mengaktifkan sistem penyemprotan maupun pengurangan uap air sehingga lingkungan budidaya tetap berada pada kondisi yang optimal. Inovasi ini dirancang agar mudah digunakan, terjangkau, dan dapat diterapkan oleh petani jamur skala rumah tangga maupun pelaku urban farming. Saat ini Humi Grow masih berada pada tahap pengembangan ide yang meliputi riset pasar, penelitian dan pengembangan teknologi, pembuatan prototipe, uji coba lapangan, serta penyusunan program edukasi bagi calon pengguna. Tim Humi Grow memiliki pembagian tugas yang mencakup pengembangan produk dan riset (research and development), pemasaran, keuangan, operasional, serta pengelolaan strategi usaha agar setiap tahapan pengembangan berjalan secara optimal. Selain berorientasi pada inovasi teknologi, Humi Grow memiliki komitmen untuk membantu petani meningkatkan produktivitas dan kualitas hasil panen melalui sistem budidaya yang lebih modern, efisien, dan adaptif terhadap perubahan iklim. Dengan memanfaatkan teknologi otomatisasi, Humi Grow diharapkan mampu mendukung transformasi budidaya jamur yang lebih berkelanjutan sekaligus meningkatkan daya saing petani di sektor agribisnis.",
    "foto_produk": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200342316",
    "status": "Alumni"
  },
  {
    "id": "umkm-2026-35",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-3",
    "nama_usaha": "Cermin Kerang Shella (2026)",
    "nama_mahasiswa": "Tim Pelaksana Cermin Kerang Shella",
    "program_studi": "Prodi Fakultas, Fakultas Ekonomi dan, Fakultas Keguruan dan",
    "deskripsi": "CERMIN KERANG SHELLA ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Anisa Wulandari 2402030103 Akuntansi S1 Fakultas Ekonomi dan Bisnis 2 Aisya Bilbina 2402030104 Akuntansi S1 Fakultas Ekonomi dan Bisnis 3 Nadiva Cahya Utami 2401100128 PGSD Fakultas Keguruan dan Ilmu Pendidikan PROFIL TIM Tim Cermin Kerang Shella dibentuk atas kepedulian terhadap masih rendahnya pemanfaatan limbah kerang dan biota laut yang selama ini belum memiliki nilai ekonomi optimal serta berpotensi mencemari lingkungan. Berangkat dari kondisi tersebut, tim mengembangkan Cermin Kerang Shella, sebuah produk dekorasi berbasis kerajinan yang mengombinasikan cangkang kerang, biota laut, dan cermin menjadi karya bernilai estetika tinggi dengan konsep natural dan ramah lingkungan. Inovasi ini bertujuan mengubah limbah menjadi produk kreatif yang memiliki nilai jual sekaligus mendukung pelestarian lingkungan melalui penerapan prinsip ekonomi sirkular. Tim Cermin Kerang Shella terdiri atas anggota yang memiliki pembagian tugas pada bidang pengembangan produk, produksi, pengendalian kualitas, pemasaran digital, serta manajemen usaha. Melalui kolaborasi yang terstruktur, tim terus melakukan inovasi desain, meningkatkan kualitas produk, dan memperkuat strategi pemasaran agar mampu menjangkau pasar yang lebih luas. Dengan mengedepankan kreativitas, keberlanjutan, dan pemanfaatan potensi lokal, tim berkomitmen menghadirkan produk dekorasi yang tidak hanya memiliki nilai estetika dan fungsi, tetapi juga memberikan dampak positif bagi lingkungan, mendukung perkembangan industri kreatif, serta meningkatkan nilai tambah limbah kerang sebagai sumber daya yang bernilai ekonomi. PRODUK",
    "histori_usaha": "MARKETING TOOLS Instagram : cerminkerang_shella_shop",
    "foto_produk": "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200351956",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-36",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "CrunchUbi (2026)",
    "nama_mahasiswa": "Haniyah Shaffina, Afifah Nurwahidah, Yogi Farda Nugroho, Firda Mayasari",
    "program_studi": "Prodi Fakultas, Fakultas Keguruan dan",
    "deskripsi": "CRUNCHUBI : Camilan Zero Waste Berbasis Pemanfaatan Limbah Kulit Ubi ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Haniyah Shaffina Alfath 2301060019 Pend. Matematika Fakultas Keguruan dan Ilmu Pendidikan 2 Afifah Nurwahidah 2301060006 Pend. Matematika 3 Yogi Farda Nugroho 2401060032 Pend. Matematika 4 Firda Mayasari 2401040009 PBSI PROFIL TIM Tim CrunchUbi merupakan tim wirausaha yang berkomitmen mengembangkan produk pangan inovatif berbasis pemanfaatan limbah pertanian menjadi camilan bernilai tambah. Dengan mengusung konsep keberlanjutan (sustainability), tim mengolah kulit ubi yang selama ini kurang dimanfaatkan menjadi keripik yang renyah, higienis, dan memiliki nilai ekonomi, sehingga mampu mengurangi limbah sekaligus meningkatkan pemanfaatan sumber daya lokal. Dalam menjalankan usaha, Tim CrunchUbi menerapkan pembagian tugas yang terstruktur agar setiap aspek bisnis dapat berjalan secara optimal. Ketua tim bertanggung jawab mengoordinasikan seluruh kegiatan usaha dan pengambilan keputusan strategis, divisi produksi dan quality control mengelola proses produksi serta menjaga kualitas produk, divisi keuangan dan administrasi mengatur pencatatan keuangan dan administrasi usaha, sedangkan divisi pemasaran dan branding bertanggung jawab menyusun strategi promosi, mengelola media sosial, serta memperluas jaringan pemasaran. Melalui kolaborasi yang solid, Tim CrunchUbi berkomitmen mengembangkan usaha secara berkelanjutan dan menghadirkan produk pangan lokal yang inovatif, ramah lingkungan, serta memiliki daya saing di pasar. LOGO TIM",
    "histori_usaha": "CRUNCHUBI : Camilan Zero Waste Berbasis Pemanfaatan Limbah Kulit Ubi ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Haniyah Shaffina Alfath 2301060019 Pend. Matematika Fakultas Keguruan dan Ilmu Pendidikan 2 Afifah Nurwahidah 2301060006 Pend. Matematika 3 Yogi Farda Nugroho 2401060032 Pend. Matematika 4 Firda Mayasari 2401040009 PBSI PROFIL TIM Tim CrunchUbi merupakan tim wirausaha yang berkomitmen mengembangkan produk pangan inovatif berbasis pemanfaatan limbah pertanian menjadi camilan bernilai tambah. Dengan mengusung konsep keberlanjutan (sustainability), tim mengolah kulit ubi yang selama ini kurang dimanfaatkan menjadi keripik yang renyah, higienis, dan memiliki nilai ekonomi, sehingga mampu mengurangi limbah sekaligus meningkatkan pemanfaatan sumber daya lokal. Dalam menjalankan usaha, Tim CrunchUbi menerapkan pembagian tugas yang terstruktur agar setiap aspek bisnis dapat berjalan secara optimal. Ketua tim bertanggung jawab mengoordinasikan seluruh kegiatan usaha dan pengambilan keputusan strategis, divisi produksi dan quality control mengelola proses produksi serta menjaga kualitas produk, divisi keuangan dan administrasi mengatur pencatatan keuangan dan administrasi usaha, sedangkan divisi pemasaran dan branding bertanggung jawab menyusun strategi promosi, mengelola media sosial, serta memperluas jaringan pemasaran. Melalui kolaborasi yang solid, Tim CrunchUbi berkomitmen mengembangkan usaha secara berkelanjutan dan menghadirkan produk pangan lokal yang inovatif, ramah lingkungan, serta memiliki daya saing di pasar. LOGO TIM",
    "foto_produk": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200367077",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-37",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Crunchy Mix (2026)",
    "nama_mahasiswa": "Aristawidya Zahra, Khaerun Nisa, Fania Sofiyanti, Syafitri Herawati, Naicha Dwi Indah",
    "program_studi": "Prodi Fakultas, Fakultas Ilmu",
    "deskripsi": "CRUNCHY MIX ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Aristawidya Zahra 2311060108 Kebidanan S1 Fakultas Ilmu Kesehatan 2 Khaerun Nisa Amalliyah 2311060164 Kebidanan S1 3 Fania Sofiyanti 2311060046 Kebidanan S1 4 Syafitri Herawati 2311060166 Kebidanan S1 5 Naicha Dwi Indah Nur Afifah 2311060033 Kebidanan S1 PROFIL TIM Tim CRUNCHY MIX merupakan tim wirausaha mahasiswa yang berkomitmen mengembangkan usaha makanan ringan inovatif dengan menghadirkan camilan berkualitas, praktis, dan terjangkau bagi berbagai kalangan. Produk yang dikembangkan berupa Crunchy Mix, yaitu camilan dengan perpaduan berbagai jenis snack dalam satu kemasan yang memiliki cita rasa gurih, pedas, serta varian bumbu kekinian. Keunikan produk terletak pada kombinasi aneka camilan dan topping yang memberikan sensasi rasa dan tekstur yang beragam, didukung dengan tampilan kemasan yang menarik sehingga memiliki daya tarik visual dan sesuai dengan tren berbagi konten di media sosial. Dalam menjalankan usaha, Tim CRUNCHY MIX menerapkan pembagian tugas yang terstruktur untuk mendukung efektivitas operasional. Ketua tim bertanggung jawab mengoordinasikan seluruh kegiatan usaha dan pengambilan keputusan strategis, divisi produksi dan quality control memastikan proses produksi berjalan sesuai standar mutu, divisi keuangan dan administrasi mengelola pencatatan keuangan serta administrasi usaha, sedangkan divisi pemasaran dan branding bertugas menyusun strategi promosi, mengelola media sosial, dan memperluas jangkauan pasar. Melalui kolaborasi yang solid, Tim CRUNCHY MIX berupaya mengembangkan usaha secara berkelanjutan sekaligus meningkatkan jiwa kewirausahaan mahasiswa melalui pengalaman bisnis yang nyata.",
    "histori_usaha": "CRUNCHY MIX ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Aristawidya Zahra 2311060108 Kebidanan S1 Fakultas Ilmu Kesehatan 2 Khaerun Nisa Amalliyah 2311060164 Kebidanan S1 3 Fania Sofiyanti 2311060046 Kebidanan S1 4 Syafitri Herawati 2311060166 Kebidanan S1 5 Naicha Dwi Indah Nur Afifah 2311060033 Kebidanan S1 PROFIL TIM Tim CRUNCHY MIX merupakan tim wirausaha mahasiswa yang berkomitmen mengembangkan usaha makanan ringan inovatif dengan menghadirkan camilan berkualitas, praktis, dan terjangkau bagi berbagai kalangan. Produk yang dikembangkan berupa Crunchy Mix, yaitu camilan dengan perpaduan berbagai jenis snack dalam satu kemasan yang memiliki cita rasa gurih, pedas, serta varian bumbu kekinian. Keunikan produk terletak pada kombinasi aneka camilan dan topping yang memberikan sensasi rasa dan tekstur yang beragam, didukung dengan tampilan kemasan yang menarik sehingga memiliki daya tarik visual dan sesuai dengan tren berbagi konten di media sosial. Dalam menjalankan usaha, Tim CRUNCHY MIX menerapkan pembagian tugas yang terstruktur untuk mendukung efektivitas operasional. Ketua tim bertanggung jawab mengoordinasikan seluruh kegiatan usaha dan pengambilan keputusan strategis, divisi produksi dan quality control memastikan proses produksi berjalan sesuai standar mutu, divisi keuangan dan administrasi mengelola pencatatan keuangan serta administrasi usaha, sedangkan divisi pemasaran dan branding bertugas menyusun strategi promosi, mengelola media sosial, dan memperluas jangkauan pasar. Melalui kolaborasi yang solid, Tim CRUNCHY MIX berupaya mengembangkan usaha secara berkelanjutan sekaligus meningkatkan jiwa kewirausahaan mahasiswa melalui pengalaman bisnis yang nyata.",
    "foto_produk": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200379666",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-38",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-3",
    "nama_usaha": "Edurescue Mannequin (2026)",
    "nama_mahasiswa": "Fata Nur Almaidah, Cindy Febriani, Dwi Apriliana, Rendra Aji Syaputra",
    "program_studi": "Prodi Fakultas",
    "deskripsi": "EDURESCUE MANNEQUIN: Jasa Model Pembuatan dan Pelatihan Pertolongan Pertama Henti Jantung untuk Masyarakat Awam ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Fata Nur Almaidah 2311020133 Keperawatan S1 Ilmu Kesehatan 2 Cindy Febriani 2411020107 Keperawatan S1 Ilmu Kesehatan 3 Dwi Apriliana 2411020103 Keperawatan S1 Ilmu Kesehatan 4 Rendra Aji Syaputra 2303040194 Teknik Informatika Teknik dan Sains PROFIL TIM Tim Edurescue Mannequin berawal dari kepedulian terhadap tingginya angka kematian akibat henti jantung serta masih terbatasnya akses masyarakat terhadap media pelatihan Resusitasi Jantung Paru (RJP). Berdasarkan hasil survei, phantom RJP yang tersedia di pasaran memiliki harga yang relatif mahal dan belum dilengkapi fitur pendukung yang memudahkan proses pembelajaran. Melihat kondisi tersebut, tim mengembangkan Edurescue Mannequin, sebuah layanan jasa pembuatan phantom edukasi RJP yang inovatif, terjangkau, dan dilengkapi fitur indikator lampu, panduan suara, serta layar LCD untuk membantu proses pelatihan secara lebih efektif. Selain memproduksi phantom, tim juga menyelenggarakan pelatihan Bantuan Hidup Dasar (BHD) bagi masyarakat, institusi pendidikan, dan komunitas kesehatan. Hingga saat ini, produk Edurescue Mannequin telah berhasil dipasarkan ke beberapa institusi dan terus dikembangkan untuk memperluas jangkauan edukasi pertolongan pertama pada kasus henti jantung. Melalui inovasi ini, tim berkomitmen meningkatkan pengetahuan dan keterampilan masyarakat dalam melakukan RJP sesuai standar, sehingga dapat berkontribusi dalam meningkatkan peluang keselamatan korban henti jantung. PRODUK MARKETING TOOLS Website : eduresquemannequin.vercel.app Instagram : edurescue.mannequin",
    "histori_usaha": "EDURESCUE MANNEQUIN: Jasa Model Pembuatan dan Pelatihan Pertolongan Pertama Henti Jantung untuk Masyarakat Awam ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Fata Nur Almaidah 2311020133 Keperawatan S1 Ilmu Kesehatan 2 Cindy Febriani 2411020107 Keperawatan S1 Ilmu Kesehatan 3 Dwi Apriliana 2411020103 Keperawatan S1 Ilmu Kesehatan 4 Rendra Aji Syaputra 2303040194 Teknik Informatika Teknik dan Sains PROFIL TIM Tim Edurescue Mannequin berawal dari kepedulian terhadap tingginya angka kematian akibat henti jantung serta masih terbatasnya akses masyarakat terhadap media pelatihan Resusitasi Jantung Paru (RJP). Berdasarkan hasil survei, phantom RJP yang tersedia di pasaran memiliki harga yang relatif mahal dan belum dilengkapi fitur pendukung yang memudahkan proses pembelajaran. Melihat kondisi tersebut, tim mengembangkan Edurescue Mannequin, sebuah layanan jasa pembuatan phantom edukasi RJP yang inovatif, terjangkau, dan dilengkapi fitur indikator lampu, panduan suara, serta layar LCD untuk membantu proses pelatihan secara lebih efektif. Selain memproduksi phantom, tim juga menyelenggarakan pelatihan Bantuan Hidup Dasar (BHD) bagi masyarakat, institusi pendidikan, dan komunitas kesehatan. Hingga saat ini, produk Edurescue Mannequin telah berhasil dipasarkan ke beberapa institusi dan terus dikembangkan untuk memperluas jangkauan edukasi pertolongan pertama pada kasus henti jantung. Melalui inovasi ini, tim berkomitmen meningkatkan pengetahuan dan keterampilan masyarakat dalam melakukan RJP sesuai standar, sehingga dapat berkontribusi dalam meningkatkan peluang keselamatan korban henti jantung. PRODUK MARKETING TOOLS Website : eduresquemannequin.vercel.app Instagram : edurescue.mannequin",
    "foto_produk": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200388263",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-39",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Fitbab (2026)",
    "nama_mahasiswa": "Muhammad Himamul Haq",
    "program_studi": "Prodi Fakultas, Fakultas Ekonomi , Fakultas Pertanian , Fakultas Teknik ",
    "deskripsi": "FITBAB: Inovasi Kebab Sehat Rendah Kalori Berbasis Tortilla Ubi Untuk Meningkatkan Minat Konsumsi Fast Food Sehat ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Tria Satria Umbara 2402050041 Bisnis Digital Fakultas Ekonomi & Bisnis 2 Dea Yasin Saputra 2404010010 Agribisnis Fakultas Pertanian & Perikanan 3 Asep Sulton Syaripudin 2402050013 Bisnis Digital Fakultas Ekonomi & Bisnis 4 Muhammad Himamul Haq 2503040022 Teknik Informatika Fakultas Teknik & Sains PROFIL TIM Tim FITBAB merupakan tim wirausaha mahasiswa yang berkomitmen menghadirkan inovasi pangan sehat melalui pengembangan Fitness Kebab (FITBAB), yaitu kebab rendah kalori berbasis tortilla ubi sebagai alternatif fast food yang lebih bergizi. Dengan memanfaatkan bahan pangan lokal yang kaya serat dan bernilai gizi tinggi, tim berupaya mengubah persepsi bahwa makanan sehat dapat tetap praktis, lezat, dan terjangkau, sehingga sesuai dengan gaya hidup masyarakat modern. Dalam menjalankan usaha, Tim FITBAB menerapkan pembagian tugas yang terstruktur untuk mendukung efektivitas operasional. Ketua tim bertanggung jawab mengoordinasikan seluruh kegiatan usaha dan menyusun strategi pengembangan bisnis, divisi produksi dan quality control memastikan kualitas serta keamanan produk, divisi keuangan dan administrasi mengelola pencatatan keuangan dan administrasi usaha, sedangkan divisi pemasaran dan branding bertugas mengembangkan strategi promosi, mengelola media sosial, serta memperluas jangkauan pasar. Melalui kolaborasi yang solid, Tim FITBAB berkomitmen mengembangkan produk fast food sehat yang inovatif, mendukung pemanfaatan pangan lokal, serta mendorong pola konsumsi masyarakat yang lebih sehat dan berkelanjutan. PRODUK",
    "histori_usaha": "MARKETING TOOLS Instagram : @fitbab_official Tiktok : @fitbab_official Shopee : fitbab_official food",
    "foto_produk": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200393179",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-40",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Grobakonlen (2026)",
    "nama_mahasiswa": "Nazril Jaya Supriatman, Leli Mei Setiowati, Ahmad Mudzakir Hamzah, Anggi Dinia Putri",
    "program_studi": "Prodi Fakultas",
    "deskripsi": "Grobakonlen: Platform Digital All-in-One untuk Transformasi UMKM Go Digital melalui Website dan Manajemen UMKM disertai AI Assistant ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Nazril Jaya Supriatman 2403040168 Teknik Informatika FTS 2 Leli Mei Setiowati 2403040137 Teknik Informatika FTS 3 Ahmad Mudzakir Hamzah 2401120014 Pendidikan Bahasa Arab FKIP 4 Anggi Dinia Putri 2502040017 Akuntasi S1 FEB PROFIL TIM Tim Grobakonlen merupakan tim wirausaha mahasiswa yang berkomitmen membantu UMKM bertransformasi ke era digital melalui platform all-in-one yang mengintegrasikan website profesional, sistem manajemen usaha, dan AI Assistant dalam satu layanan. Inovasi ini dikembangkan untuk mengatasi rendahnya adopsi digital UMKM akibat keterbatasan biaya, kemampuan teknis, dan akses terhadap teknologi. Dalam menjalankan usaha, Tim Grobakonlen menerapkan pembagian tugas yang terstruktur, meliputi ketua tim yang mengoordinasikan pengembangan usaha, divisi teknologi yang mengembangkan dan memelihara platform, divisi operasional dan keuangan yang mengelola administrasi serta layanan pelanggan, dan divisi pemasaran yang bertanggung jawab terhadap promosi, branding, serta pengembangan kemitraan. Melalui kolaborasi yang solid, tim berkomitmen mendukung percepatan digitalisasi UMKM dan menciptakan solusi yang mudah diakses, terjangkau, serta berkelanjutan. PRODUK",
    "histori_usaha": "Grobakonlen: Platform Digital All-in-One untuk Transformasi UMKM Go Digital melalui Website dan Manajemen UMKM disertai AI Assistant ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Nazril Jaya Supriatman 2403040168 Teknik Informatika FTS 2 Leli Mei Setiowati 2403040137 Teknik Informatika FTS 3 Ahmad Mudzakir Hamzah 2401120014 Pendidikan Bahasa Arab FKIP 4 Anggi Dinia Putri 2502040017 Akuntasi S1 FEB PROFIL TIM Tim Grobakonlen merupakan tim wirausaha mahasiswa yang berkomitmen membantu UMKM bertransformasi ke era digital melalui platform all-in-one yang mengintegrasikan website profesional, sistem manajemen usaha, dan AI Assistant dalam satu layanan. Inovasi ini dikembangkan untuk mengatasi rendahnya adopsi digital UMKM akibat keterbatasan biaya, kemampuan teknis, dan akses terhadap teknologi. Dalam menjalankan usaha, Tim Grobakonlen menerapkan pembagian tugas yang terstruktur, meliputi ketua tim yang mengoordinasikan pengembangan usaha, divisi teknologi yang mengembangkan dan memelihara platform, divisi operasional dan keuangan yang mengelola administrasi serta layanan pelanggan, dan divisi pemasaran yang bertanggung jawab terhadap promosi, branding, serta pengembangan kemitraan. Melalui kolaborasi yang solid, tim berkomitmen mendukung percepatan digitalisasi UMKM dan menciptakan solusi yang mudah diakses, terjangkau, serta berkelanjutan. PRODUK",
    "foto_produk": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200407279",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-41",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-2",
    "nama_usaha": "Heatik (2026)",
    "nama_mahasiswa": "Afifa Aulia Ekhsan, Jihan Fadlilah, Raditya Fauzan",
    "program_studi": "Prodi Fakultas, Fakultas Ekonomi dan",
    "deskripsi": "HEATIK : Inovasi Mug Batik Heat-reactive Berbasis Ecoprint ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Rofiqoh 2402030004 Akuntansi S1 Fakultas Ekonomi dan Bisnis 2 Afifa Aulia Ekhsan Elda 2302030050 Akuntansi S1 Fakultas Ekonomi dan Bisnis 3 Jihan Fadlilah Maharani 2302030134 Akuntansi S1 Fakultas Ekonomi dan Bisnis 4 Ariel Rafif Prayogo 2402030084 Akuntansi S1 Fakultas Ekonomi dan Bisnis 5 Raditya Fauzan Satyaghani 2502030113 Akuntansi S1 Fakultas Ekonomi dan Bisnis PROFIL TIM Tim HEATIK dibentuk sebagai bentuk kepedulian terhadap masih minimnya produk sehari-hari yang mampu menggabungkan fungsi, nilai budaya, dan kepedulian terhadap lingkungan. Berangkat dari kondisi tersebut, tim mengembangkan HEATIK (Heat Reactive Batik Ecoprint Mug), sebuah mug keramik inovatif dengan teknologi heat-reactive yang menampilkan motif batik ecoprint ketika terkena air panas. Produk ini dirancang untuk menghadirkan pengalaman visual yang unik sekaligus menjadi media sederhana dalam memperkenalkan budaya Indonesia melalui aktivitas sehari-hari. HEATIK memadukan unsur kreativitas, teknologi, dan keberlanjutan dengan memanfaatkan teknik ecoprint berbahan alami sehingga menghasilkan produk yang memiliki nilai estetika, identitas budaya, serta lebih ramah lingkungan. Melalui riset kebutuhan pasar, tim menemukan bahwa masyarakat, khususnya generasi muda, memiliki ketertarikan tinggi terhadap produk fungsional yang inovatif dan berciri khas lokal. Oleh karena itu, tim berkomitmen menghadirkan HEATIK sebagai produk kreatif yang tidak hanya memenuhi kebutuhan pasar, tetapi juga mendukung pelestarian budaya, meningkatkan kesadaran terhadap gaya hidup berkelanjutan, serta berkontribusi dalam pengembangan ekonomi kreatif lokal. PRODUK",
    "histori_usaha": "HEATIK : Inovasi Mug Batik Heat-reactive Berbasis Ecoprint ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Rofiqoh 2402030004 Akuntansi S1 Fakultas Ekonomi dan Bisnis 2 Afifa Aulia Ekhsan Elda 2302030050 Akuntansi S1 Fakultas Ekonomi dan Bisnis 3 Jihan Fadlilah Maharani 2302030134 Akuntansi S1 Fakultas Ekonomi dan Bisnis 4 Ariel Rafif Prayogo 2402030084 Akuntansi S1 Fakultas Ekonomi dan Bisnis 5 Raditya Fauzan Satyaghani 2502030113 Akuntansi S1 Fakultas Ekonomi dan Bisnis PROFIL TIM Tim HEATIK dibentuk sebagai bentuk kepedulian terhadap masih minimnya produk sehari-hari yang mampu menggabungkan fungsi, nilai budaya, dan kepedulian terhadap lingkungan. Berangkat dari kondisi tersebut, tim mengembangkan HEATIK (Heat Reactive Batik Ecoprint Mug), sebuah mug keramik inovatif dengan teknologi heat-reactive yang menampilkan motif batik ecoprint ketika terkena air panas. Produk ini dirancang untuk menghadirkan pengalaman visual yang unik sekaligus menjadi media sederhana dalam memperkenalkan budaya Indonesia melalui aktivitas sehari-hari. HEATIK memadukan unsur kreativitas, teknologi, dan keberlanjutan dengan memanfaatkan teknik ecoprint berbahan alami sehingga menghasilkan produk yang memiliki nilai estetika, identitas budaya, serta lebih ramah lingkungan. Melalui riset kebutuhan pasar, tim menemukan bahwa masyarakat, khususnya generasi muda, memiliki ketertarikan tinggi terhadap produk fungsional yang inovatif dan berciri khas lokal. Oleh karena itu, tim berkomitmen menghadirkan HEATIK sebagai produk kreatif yang tidak hanya memenuhi kebutuhan pasar, tetapi juga mendukung pelestarian budaya, meningkatkan kesadaran terhadap gaya hidup berkelanjutan, serta berkontribusi dalam pengembangan ekonomi kreatif lokal. PRODUK",
    "foto_produk": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200415142",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-42",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Jagara (2026)",
    "nama_mahasiswa": "Arvin Nalingga, Fausta Setyo, Dias AdaM, Muhammad Faaza",
    "program_studi": "Prodi Fakultas, Fakultas Ekonomi , Fakultas Ilmu Kesehatan",
    "deskripsi": "JAGARA : Inovasi Briket Bonggol Jagung sebagai Solusi Energi Biomassa Berkelanjutan ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Arvin Nalingga Fitrianto 2302010087 Manajemen S1 Fakultas Ekonomi & Bisnis 2 Fausta Setyo Pratama 2302010086 Manajemen S1 Fakultas Ekonomi & Bisnis 3 Dias AdaM Fathussabil 2302010080 Manajemen S1 Fakultas Ekonomi & Bisnis 4 Muhammad Faaza Budi Hartono 2302010047 Manajemen S1 Fakultas Ekonomi & Bisnis 5 Nabila Alya Tsabita 2311050051 Fakultas Ilmu Kesehatan PROFIL TIM Tim JAGARA dibentuk atas kepedulian terhadap meningkatnya kebutuhan energi, tingginya ketergantungan masyarakat pada bahan bakar fosil, serta belum optimalnya pemanfaatan limbah pertanian di Indonesia. Berangkat dari kondisi tersebut, tim mengembangkan JAGARA, inovasi briket biomassa berbahan dasar limbah bonggol dan akar jagung yang dirancang sebagai sumber energi alternatif yang ramah lingkungan, ekonomis, dan berkelanjutan. Inovasi ini memanfaatkan potensi limbah pertanian lokal menjadi produk bernilai tambah yang mampu mendukung ketahanan energi sekaligus mengurangi pencemaran lingkungan. Tim JAGARA terdiri atas anggota yang memiliki pembagian tugas pada bidang riset dan pengembangan produk, produksi, pengendalian mutu, manajemen usaha, keuangan, serta pemasaran. Melalui kolaborasi yang terstruktur, tim berkomitmen menghasilkan produk biomassa yang berkualitas, efisien, dan memiliki daya saing di pasar. Selain menghadirkan solusi energi terbarukan, tim juga berupaya mendorong pemanfaatan sumber daya lokal, meningkatkan nilai ekonomi limbah pertanian, serta mendukung pemberdayaan masyarakat melalui pengembangan usaha yang berorientasi pada inovasi, keberlanjutan, dan ekonomi sirkular.",
    "histori_usaha": "PRODUK MARKETING TOOLS Instagram : jagaraofficial.id",
    "foto_produk": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200427413",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-43",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Jamuin (2026)",
    "nama_mahasiswa": "Fahrie Inamuddin, Muhammad Pasha Hari, Zalfa Nida Tiara Ikhsan, Eni Anggita",
    "program_studi": "Prodi Fakultas",
    "deskripsi": "JAMUIN: Inovasi Produk Jamu Tradisional Modern sebagai Minuman ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Fahrie Inamuddin 2401120003 Pendidikan Bahsa Arab FKIP 2 Muhammad Pasha Hari Pratama 2401120008 Pendidikan Bahsa Arab FKIP 3 Zalfa Nida Tiara Ikhsan 2401120012 Pendidikan Bahsa Arab FKIP 4 Eni Anggita 2401120013 Pendidikan Bahsa Arab FKIP PROFIL TIM Tim JAMUIN merupakan tim wirausaha mahasiswa yang berkomitmen mengembangkan inovasi jamu kekinian sebagai minuman sehat berbasis kearifan lokal yang lebih dekat dengan generasi muda. Melalui perpaduan resep jamu tradisional, cita rasa yang lebih ramah di lidah, serta kemasan modern dan praktis, tim berupaya meningkatkan minat masyarakat terhadap konsumsi jamu sekaligus melestarikan warisan budaya Indonesia. Dalam menjalankan usaha, Tim JAMUIN menerapkan pembagian tugas yang terstruktur, meliputi ketua tim yang mengoordinasikan pengembangan usaha, divisi produksi dan quality control yang memastikan kualitas produk, divisi keuangan dan administrasi yang mengelola operasional usaha, serta divisi pemasaran dan branding yang bertanggung jawab terhadap promosi, pengelolaan media sosial, dan pengembangan pasar. Melalui kolaborasi yang solid, Tim JAMUIN berkomitmen menghadirkan produk minuman herbal yang inovatif, sehat, dan berdaya saing sekaligus mendukung pelestarian kearifan lokal melalui kewirausahaan. PRODUK MARKETING TOOLS Instagram : @namausaha_jamukekinian",
    "histori_usaha": "TikTok : @namausaha_jamukekinian Shopee dan Tokopedia: Official Store Jamu Kekinian",
    "foto_produk": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200432765",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-44",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "KasKos (2026)",
    "nama_mahasiswa": "Samsul Anam, Syuja Array, Evana Syarifah, Sopia Dwi, Muhammad Rizqi",
    "program_studi": "Prodi Fakultas, Fakultas Teknik , Fakultas Eknomoni ",
    "deskripsi": "KasKos : Solusi Inovatif Aplikasi Pencatatan Keuangan Dilengkapi Fitur Chatbot, Otomatisasi Debt Collection & Savings Allocation, Financial Report, serta Financial Insight Berbasis AI guna Meningkatkan Literasi Finansial Gen Z ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Samsul Anam 2303040081 Teknik Informatika S1 Fakultas Teknik & Sains 2 Syuja Array Abimanyu 2402050010 Bisnis Digital S1 Fakultas Eknomoni & Bisnis 3 Evana Syarifah Husna 2402040003 Akuntansi D3 Fakultas Eknomoni & Bisnis 4 Sopia Dwi Rahmawati 2302010009 Manajemen S1 Fakultas Eknomoni & Bisnis 5 Muhammad Rizqi Alfianur 2302010077 Manajemen S1 Fakultas Eknomoni & Bisnis PROFIL TIM Tim KasKos dibentuk sebagai respons terhadap rendahnya literasi keuangan di kalangan Generasi Z serta masih tingginya perilaku konsumtif yang dipengaruhi oleh budaya Fear of Missing Out (FOMO) dan kemudahan transaksi digital. Berangkat dari permasalahan tersebut, tim mengembangkan KasKos, sebuah aplikasi pencatatan keuangan berbasis chatbot yang memungkinkan pengguna mencatat transaksi secara cepat, sederhana, dan intuitif layaknya mengirim pesan. Inovasi ini dirancang untuk membantu pengguna membangun kebiasaan mengelola keuangan, meningkatkan kesadaran finansial, serta menyajikan laporan keuangan yang mudah dipahami. Tim KasKos terdiri atas anggota dengan kompetensi yang saling melengkapi pada bidang teknologi, desain produk, manajemen bisnis, keuangan, operasional, dan pemasaran. Pengembangan usaha diawali melalui proses riset, pembuatan Minimum Viable Product (MVP), validasi pasar, serta penyempurnaan fitur berdasarkan umpan balik pengguna. Dengan kolaborasi yang terstruktur dan berorientasi pada kebutuhan pengguna, tim berkomitmen menghadirkan solusi digital yang inovatif, mudah digunakan, dan berkelanjutan dalam mendukung peningkatan literasi keuangan serta mendorong terbentuknya kebiasaan finansial yang sehat di kalangan masyarakat, khususnya Generasi Z.",
    "histori_usaha": "PRODUK MARKETING TOOLS Instagram : kaskos.app",
    "foto_produk": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200447194",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-45",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Logicland (2026)",
    "nama_mahasiswa": "Alya Nur Nazhifah, Atqiya Permata, Sri Mulyani, Adzra Hanifatun, Relita Anindya",
    "program_studi": "Prodi Fakultas",
    "deskripsi": "LOGICLAND: Transformasi Coding Computational Thinking Anak melalui Smart Popup Book berbasis Deep Learning ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Alya Nur Nazhifah 2301100005 PGSD Keguruan dan Ilmu Pendidikan 2 Atqiya Permata Muawanah 2301100020 PGSD Keguruan dan Ilmu Pendidikan 3 Sri Mulyani 2301100025 PGSD Keguruan dan Ilmu Pendidikan 4 Adzra Hanifatun Nurkholis 2301100027 PGSD Keguruan dan Ilmu Pendidikan 5 Relita Anindya Maulida 2302040119 Teknik Informatika Teknik dan Sains PROFIL TIM Tim LOGICLAND Smart Pop-Up Book dibentuk sebagai respons terhadap tantangan implementasi pembelajaran Computational Thinking (CT) di sekolah dasar yang masih menghadapi keterbatasan media pembelajaran, rendahnya kepercayaan diri guru, serta belum meratanya akses terhadap perangkat teknologi. Berangkat dari kondisi tersebut, tim mengembangkan LOGICLAND Smart Pop-Up Book, sebuah media pembelajaran inovatif berbasis unplugged coding yang dirancang untuk membantu peserta didik mengembangkan kemampuan berpikir komputasional, berpikir kritis, dan pemecahan masalah tanpa bergantung pada perangkat digital. LOGICLAND Smart Pop-Up Book menghadirkan pengalaman belajar yang interaktif, menarik, dan mudah dipahami melalui konsep pop-up book yang dipadukan dengan aktivitas Computational Thinking. Produk ini ditujukan bagi peserta didik sekolah dasar, guru, serta orang tua sebagai media pendukung pembelajaran yang selaras dengan implementasi Kurikulum Merdeka. Dengan mengedepankan inovasi, kreativitas, dan kebermanfaatan, tim berkomitmen menghadirkan solusi edukasi yang mampu meningkatkan kualitas pembelajaran CT sekaligus mendukung penguatan keterampilan abad ke-21 pada peserta didik Indonesia. PRODUK",
    "histori_usaha": "MARKETING TOOLS Instagram : @popupbook.logicland Tiktok : logicland",
    "foto_produk": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200453003",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-46",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "NootraGum (2026)",
    "nama_mahasiswa": "Umar Abdul Aziz, Arini Fitra Annisa, Zahra Salsabila, Adinda Putri Amalia, Muhammad Hilman Arif",
    "program_studi": "Prodi Fakultas",
    "deskripsi": "NootraGum – Gummy Herbal Pemberi Efek Fokus dan Menenangkan Berbasis Bunga Telang ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Umar Abdul Aziz 2402010237 Manajemen S1 FEB 2 Arini Fitra Annisa 2411020032 Keperawatan S1 FIKES 3 Zahra Salsabila 2402010304 Manajemen S1 FEB 4 Adinda Putri Amalia 2408010123 Farmasi S1 FARMASI 5 Muhammad Hilman Arif Mubarok 2409030002 DKV FIBK PROFIL TIM Tim NootraGum merupakan tim wirausaha mahasiswa yang berkomitmen mengembangkan inovasi produk herbal berbasis bunga telang menjadi permen kenyal (gummy) yang praktis, sehat, dan mendukung fokus serta ketenangan di tengah aktivitas masyarakat modern. Tim menggabungkan kompetensi di bidang manajemen, operasional, pemasaran, keuangan, dan pengembangan produk untuk menghasilkan produk yang inovatif, berkualitas, dan memiliki nilai ekonomi sekaligus sosial melalui pemberdayaan bahan baku lokal. Struktur organisasi tim terdiri atas Chief Executive Officer (CEO) yang bertanggung jawab dalam menyusun strategi dan mengoordinasikan pengembangan usaha, Chief Financial Officer (CFO) yang mengelola perencanaan serta pengendalian keuangan, Chief Marketing Officer (CMO) yang menangani riset pasar, branding, dan pemasaran digital, Chief Operating Officer (COO) yang mengawasi proses produksi dan operasional usaha, serta Chief Creative Officer (CCO) yang bertanggung jawab terhadap pengembangan identitas visual, desain kemasan, dan kreativitas produk. Dengan kolaborasi yang solid, Tim NootraGum berupaya menghadirkan produk herbal inovatif yang aman, berdaya saing, dan mampu memberikan manfaat bagi masyarakat sekaligus mendukung keberlanjutan petani bunga telang lokal. PRODUK",
    "histori_usaha": "MARKETING TOOLS Instagram : @nootragummy TikTok : @nootragummy Shopee : @NootraGummy",
    "foto_produk": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200465820",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-47",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "NutriSpoon (2026)",
    "nama_mahasiswa": "Akbar Dzaqi",
    "program_studi": "Prodi Fakultas, Fakultas Ekonomi ",
    "deskripsi": "NutriSpoon : Nutrisi Terfortifikasi pada Spoon untuk Stunting Prevention, Optimal Nutrition, and Plastic Waste Reduction ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Fernanda 2402030038 Akuntansi S1 Fakultas Ekonomi & Bisnis 2 Yunika Nasyith Aulia 2302030014 Akuntansi S1 Fakultas Ekonomi & Bisnis 3 Rengga Saputra 2302030121 Akuntansi S1 Fakultas Ekonomi & Bisnis 4 Akbar Dzaqi Maulana S 2402030051 Akuntansi S1 Fakultas Ekonomi & Bisnis 5 Elen Hendra Winata 2502030007 Akuntansi S1 Fakultas Ekonomi & Bisnis PROFIL TIM Tim NutriSpoon dibentuk sebagai bentuk kepedulian terhadap masih tingginya angka stunting, rendahnya perkembangan motorik halus anak usia dini, serta meningkatnya penggunaan plastik sekali pakai sebagai alat makan. Berangkat dari permasalahan tersebut, tim mengembangkan NutriSpoon, sebuah inovasi edible spoon yang tidak hanya berfungsi sebagai alat makan, tetapi juga dapat dikonsumsi sebagai sumber nutrisi tambahan bagi anak. Produk ini dirancang untuk mendukung pencegahan stunting, membantu stimulasi motorik halus, sekaligus mengurangi penggunaan sendok plastik sekali pakai yang berdampak terhadap lingkungan. Tim NutriSpoon terdiri atas lima mahasiswa yang memiliki pembagian tugas sesuai bidang keahlian, meliputi manajemen usaha, keuangan dan administrasi, produksi, pengendalian mutu serta inovasi produk, hingga pemasaran dan pengembangan merek. Melalui kolaborasi tersebut, tim berkomitmen menghasilkan produk yang aman, bergizi, inovatif, dan ramah lingkungan. Saat ini, NutriSpoon berada pada tahap pengembangan prototipe dan penyempurnaan produk sebagai langkah awal untuk menghadirkan solusi yang bermanfaat bagi kesehatan anak sekaligus mendukung pengembangan kewirausahaan berbasis inovasi dan keberlanjutan.",
    "histori_usaha": "NutriSpoon : Nutrisi Terfortifikasi pada Spoon untuk Stunting Prevention, Optimal Nutrition, and Plastic Waste Reduction ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Fernanda 2402030038 Akuntansi S1 Fakultas Ekonomi & Bisnis 2 Yunika Nasyith Aulia 2302030014 Akuntansi S1 Fakultas Ekonomi & Bisnis 3 Rengga Saputra 2302030121 Akuntansi S1 Fakultas Ekonomi & Bisnis 4 Akbar Dzaqi Maulana S 2402030051 Akuntansi S1 Fakultas Ekonomi & Bisnis 5 Elen Hendra Winata 2502030007 Akuntansi S1 Fakultas Ekonomi & Bisnis PROFIL TIM Tim NutriSpoon dibentuk sebagai bentuk kepedulian terhadap masih tingginya angka stunting, rendahnya perkembangan motorik halus anak usia dini, serta meningkatnya penggunaan plastik sekali pakai sebagai alat makan. Berangkat dari permasalahan tersebut, tim mengembangkan NutriSpoon, sebuah inovasi edible spoon yang tidak hanya berfungsi sebagai alat makan, tetapi juga dapat dikonsumsi sebagai sumber nutrisi tambahan bagi anak. Produk ini dirancang untuk mendukung pencegahan stunting, membantu stimulasi motorik halus, sekaligus mengurangi penggunaan sendok plastik sekali pakai yang berdampak terhadap lingkungan. Tim NutriSpoon terdiri atas lima mahasiswa yang memiliki pembagian tugas sesuai bidang keahlian, meliputi manajemen usaha, keuangan dan administrasi, produksi, pengendalian mutu serta inovasi produk, hingga pemasaran dan pengembangan merek. Melalui kolaborasi tersebut, tim berkomitmen menghasilkan produk yang aman, bergizi, inovatif, dan ramah lingkungan. Saat ini, NutriSpoon berada pada tahap pengembangan prototipe dan penyempurnaan produk sebagai langkah awal untuk menghadirkan solusi yang bermanfaat bagi kesehatan anak sekaligus mendukung pengembangan kewirausahaan berbasis inovasi dan keberlanjutan.",
    "foto_produk": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200479925",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-48",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "Romtera (2026)",
    "nama_mahasiswa": "Maura Novita Zachra, Febi Rahma Auliya, Khefit Yulistio, Ibnu Muhamad Nurohim",
    "program_studi": "Prodi Fakultas",
    "deskripsi": "ROMTERA: Rompi Simulasi Penanganan Tersedak ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Maura Novita Zachra 2311020255 Keperawatan S1 Ilmu Kesehatan 2 Febi Rahma Auliya 2311020333 Keperawatan S1 Ilmu Kesehatan 3 Khefit Yulistio 2311020173 Keperawatan S1 Ilmu Kesehatan 4 Ibnu Muhamad Nurohim 2411020321 Keperawatan S1 Ilmu Kesehatan PROFIL TIM Tim ROMTERA dibentuk atas kepedulian terhadap masih tingginya kasus tersedak yang dapat menyebabkan henti napas hingga kematian apabila tidak segera ditangani dengan pertolongan pertama yang tepat. Di sisi lain, media pelatihan Heimlich maneuver yang tersedia masih terbatas, berharga relatif mahal, dan umumnya belum dilengkapi dengan sistem pembelajaran interaktif. Berangkat dari permasalahan tersebut, tim mengembangkan ROMTERA (Rompi Simulasi Penanganan Tersedak) sebagai inovasi alat pelatihan pertolongan pertama yang praktis, interaktif, dan terjangkau. ROMTERA dilengkapi dengan layar LCD yang menampilkan SOP penanganan tersedak, panduan suara melalui speaker, serta sensor tekanan dengan lampu indikator untuk membantu pengguna mempraktikkan teknik Heimlich maneuver secara benar. Produk ini ditujukan bagi institusi pendidikan, sekolah, organisasi kerelawanan, dan komunitas masyarakat sebagai media edukasi dalam meningkatkan keterampilan penanganan kasus tersedak. Tim ROMTERA terdiri atas CEO, Finance, Procurement, dan Publication yang bekerja sama dalam pengelolaan usaha dan pengembangan produk dengan pendampingan dari dosen pembimbing, sehingga diharapkan mampu menghadirkan solusi edukasi pertolongan pertama yang inovatif dan bermanfaat bagi masyarakat. PRODUK MARKETING TOOLS Website Resmi : romtera.team Instagram : romtera.team",
    "histori_usaha": "TikTok : romtera.team Shopee : romtera.team Tokopedia : romtera.team Lazada : romtera.team",
    "foto_produk": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200489591",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-49",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Scrufee Be-Glow (2026)",
    "nama_mahasiswa": "Pramudya Permana, Adinda Atlan Prima, Sholeh Nurhan",
    "program_studi": "Prodi Fakultas, Fakultas Farmasi, Fakultas Ekonomi ",
    "deskripsi": "SCRUFEE BE-GLOW: Inovasi Body Scrub Berbasis Antioksidan Ampas Kopi dan Bekatul Beras Merah (Oryza Sativa L.) sebagai Sumber Vitamin E dan y-Oryzanol untuk Perawatan Kulit ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Novi Liana Putri 2408010173 Farmasi S1 Fakultas Farmasi 2 Pramudya Permana Jati 2402010046 Manajemen S1 Fakultas Ekonomi & Bisnis 3 Adinda Atlan Prima Syavira 2402010157 Manajemen S1 Fakultas Ekonomi & Bisnis 4 Sholeh Nurhan Muafi 2402010375 Manajemen S1 Fakultas Ekonomi & Bisnis 5 Maheza Pastika Budi 2402010379 Manajemen S1 Fakultas Ekonomi & Bisnis PROFIL TIM Tim SCRUFEE BE-GLOW dibentuk atas kepedulian terhadap tingginya limbah ampas kopi yang belum dimanfaatkan secara optimal serta meningkatnya kebutuhan masyarakat, khususnya mahasiswa, akan produk perawatan kulit berbahan alami yang aman, efektif, dan ramah lingkungan. Berangkat dari permasalahan tersebut, tim mengembangkan SCRUFEE BE- GLOW, inovasi body scrub berbasis antioksidan yang memadukan ampas kopi dan bekatul beras merah sebagai bahan utama untuk menghasilkan produk eksfoliasi yang bernilai tambah, berkelanjutan, dan berbasis sains. Melalui kolaborasi lintas keahlian, tim menjalankan pengelolaan usaha secara terstruktur yang mencakup pengembangan formulasi produk, pengendalian mutu, produksi, manajemen keuangan, serta pemasaran digital. Sejak dikembangkan, usaha telah melalui tahap riset, formulasi, uji coba produk, validasi pasar, hingga komersialisasi awal dengan memperoleh respons positif dari konsumen. Dengan mengedepankan prinsip inovasi, keberlanjutan, dan pemanfaatan sumber daya lokal, tim berkomitmen mengembangkan SCRUFEE BE-GLOW menjadi produk kosmetik alami yang berdaya saing, mendukung pengurangan limbah organik, serta berkontribusi terhadap pengembangan ekonomi kreatif dan industri kosmetik berbahan alam di Indonesia.",
    "histori_usaha": "PRODUK MARKETING TOOLS Instagram : @scrufeebeglow_p2mw_ump Shopee : scrufeebeglow_official TikTok : @scrufeebeglow_p2mw_ump",
    "foto_produk": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200498560",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-50",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Singreh Flame (2026)",
    "nama_mahasiswa": "Tegar Arif",
    "program_studi": "Prodi Fakultas, Fakultas Ekonomi , Fakultas Farmasi, Fakultas Teknik ",
    "deskripsi": "Obat Nyamuk Bakar “SINGREH FLAME” Memanfaatkan Kandungan Nabati dari Limbah Batang Singkong dan Tanaman Herbal Sereh ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Elok Hana Hapsari 2402010399 Manajemen S1 Fakultas Ekonomi & Bisnis 2 Tegar Arif Nurrohman 2302010362 Manajemen S1 Fakultas Ekonomi & Bisnis 3 Shinta Aulia Putri 2402010363 Manajemen S1 Fakultas Ekonomi & Bisnis 4 Nabila Aenurofiqoh 2408010156 Farmasi S1 Fakultas Farmasi 5 Caya Nurdiawati 2503020011 Teknik Kimia Fakultas Teknik & Sains PROFIL TIM Tim SINGREH FLAME dibentuk atas kepedulian terhadap tingginya limbah batang singkong yang belum dimanfaatkan secara optimal serta masih tingginya kasus penyakit yang ditularkan oleh nyamuk, khususnya Demam Berdarah Dengue (DBD). Berangkat dari kondisi tersebut, tim mengembangkan SINGREH FLAME, inovasi obat nyamuk bakar berbahan dasar limbah batang singkong yang dipadukan dengan ekstrak sereh sebagai bahan aktif alami. Inovasi ini mengusung konsep ramah lingkungan dengan mengubah limbah pertanian menjadi produk bernilai tambah yang lebih aman bagi kesehatan dan berpotensi mengurangi ketergantungan pada bahan kimia sintetis. Tim SINGREH FLAME terdiri atas mahasiswa dengan pembagian tugas yang mencakup manajemen usaha, riset dan pengembangan produk, produksi, pengendalian mutu, keuangan, serta pemasaran. Melalui kolaborasi lintas bidang, tim berkomitmen menghadirkan produk yang berkualitas, inovatif, dan memiliki daya saing di pasar. Selain menghasilkan solusi pengendalian nyamuk yang efektif dan berkelanjutan, tim juga berupaya mendukung pemberdayaan masyarakat melalui pemanfaatan limbah pertanian, peningkatan nilai tambah komoditas lokal, serta pengembangan kewirausahaan berbasis potensi daerah yang memberikan manfaat ekonomi, sosial, dan lingkungan.",
    "histori_usaha": "PRODUK MARKETING TOOLS Instagram : @singrehflameorganic TikTok : @singrehflameorganic YouTube : SINGREH FLAME ORGANIC",
    "foto_produk": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200504460",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-51",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-4",
    "nama_usaha": "SolidVa.id (2026)",
    "nama_mahasiswa": "Fauzan Surya, Muhamad Farhan, Aiman Fahrul",
    "program_studi": "Prodi Fakultas, Fakultas Teknik dan",
    "deskripsi": "Virtual Assistant Solidva.Id ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Haikal Fais 2403050066 Teknik Mesin Fakultas Teknik dan Sains 2 Fauzan Surya Primaditya 2403050071 Teknik Mesin Fakultas Teknik dan Sains 3 Muhamad Farhan Khoirudin 2403050025 Teknik Mesin Fakultas Teknik dan Sains 4 Aiman Fahrul Khurofi 2403050075 Teknik Mesin Fakultas Teknik dan Sains 5 Rikat Algha Hidayat 2403050079 Teknik Mesin Fakultas Teknik dan Sains PROFIL TIM Tim SolidVA.id dibentuk sebagai respons terhadap kesenjangan antara kebutuhan industri manufaktur akan tenaga kerja yang menguasai desain teknik digital dengan masih terbatasnya kompetensi penggunaan perangkat lunak Computer-Aided Design (CAD), khususnya SolidWorks, di kalangan pelajar, mahasiswa, dan pelaku UMKM. Berangkat dari kondisi tersebut, tim mengembangkan SolidVA.id, sebuah layanan Virtual Assistant (VA) desain teknik berbasis SolidWorks yang mengintegrasikan jasa desain dengan pendampingan edukasi berjenjang, sehingga pengguna tidak hanya memperoleh hasil desain, tetapi juga meningkatkan keterampilan secara mandiri. Tim SolidVA.id terdiri atas anggota yang memiliki kompetensi di bidang desain teknik, pengembangan layanan digital, manajemen usaha, dan pemasaran. Melalui pembagian tugas yang terstruktur, tim mengelola proses pengembangan modul pembelajaran, layanan konsultasi desain, produksi konten edukasi, serta pengembangan strategi bisnis dan kemitraan. Dengan mengedepankan inovasi, transfer pengetahuan, dan pemanfaatan teknologi digital, tim berkomitmen menghadirkan solusi yang mudah diakses, terjangkau, dan berkelanjutan guna mendukung peningkatan kompetensi sumber daya manusia serta memperkuat daya saing pelajar, mahasiswa, dan UMKM manufaktur di era transformasi industri.",
    "histori_usaha": "Virtual Assistant Solidva.Id ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Haikal Fais 2403050066 Teknik Mesin Fakultas Teknik dan Sains 2 Fauzan Surya Primaditya 2403050071 Teknik Mesin Fakultas Teknik dan Sains 3 Muhamad Farhan Khoirudin 2403050025 Teknik Mesin Fakultas Teknik dan Sains 4 Aiman Fahrul Khurofi 2403050075 Teknik Mesin Fakultas Teknik dan Sains 5 Rikat Algha Hidayat 2403050079 Teknik Mesin Fakultas Teknik dan Sains PROFIL TIM Tim SolidVA.id dibentuk sebagai respons terhadap kesenjangan antara kebutuhan industri manufaktur akan tenaga kerja yang menguasai desain teknik digital dengan masih terbatasnya kompetensi penggunaan perangkat lunak Computer-Aided Design (CAD), khususnya SolidWorks, di kalangan pelajar, mahasiswa, dan pelaku UMKM. Berangkat dari kondisi tersebut, tim mengembangkan SolidVA.id, sebuah layanan Virtual Assistant (VA) desain teknik berbasis SolidWorks yang mengintegrasikan jasa desain dengan pendampingan edukasi berjenjang, sehingga pengguna tidak hanya memperoleh hasil desain, tetapi juga meningkatkan keterampilan secara mandiri. Tim SolidVA.id terdiri atas anggota yang memiliki kompetensi di bidang desain teknik, pengembangan layanan digital, manajemen usaha, dan pemasaran. Melalui pembagian tugas yang terstruktur, tim mengelola proses pengembangan modul pembelajaran, layanan konsultasi desain, produksi konten edukasi, serta pengembangan strategi bisnis dan kemitraan. Dengan mengedepankan inovasi, transfer pengetahuan, dan pemanfaatan teknologi digital, tim berkomitmen menghadirkan solusi yang mudah diakses, terjangkau, dan berkelanjutan guna mendukung peningkatan kompetensi sumber daya manusia serta memperkuat daya saing pelajar, mahasiswa, dan UMKM manufaktur di era transformasi industri.",
    "foto_produk": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200513349",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-52",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Tropiken (2026)",
    "nama_mahasiswa": "Shafa Rodlotun, Chintya Niessahroji",
    "program_studi": "Prodi Fakultas, Fakultas Ekonomi , Fakultas Teknik , Fakultas Farmasi",
    "deskripsi": "TROPIKEN : Beras Kencur Nanas dengan Topping Jely ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Naena Zulfia Yudafa 2302030095 Akuntansi S1 Fakultas Ekonomi & Bisnis 2 Shafa Rodlotun Istiqomah 2303040077 Teknik Informatika Fakultas Teknik & Sains 3 Chintya Niessahroji Putri 2308010081 Farmasi Fakultas Farmasi PROFIL TIM Tim Tropiken merupakan tim wirausaha mahasiswa yang berkomitmen mengembangkan inovasi minuman kesehatan tradisional agar lebih diminati oleh masyarakat, khususnya generasi muda. Melalui produk Beras Kencur Nanas dengan Topping Jelly, tim menghadirkan inovasi yang memadukan manfaat jamu tradisional dengan cita rasa segar dan konsep minuman kekinian, sehingga mampu memberikan nilai tambah pada produk herbal lokal. Dalam menjalankan usaha, Tim Tropiken menerapkan pembagian tugas yang terstruktur, meliputi ketua tim yang mengoordinasikan seluruh kegiatan usaha, divisi produksi dan quality control yang memastikan kualitas produk, divisi keuangan dan administrasi yang mengelola pengelolaan usaha, serta divisi pemasaran dan branding yang bertanggung jawab terhadap promosi dan pengembangan pasar. Melalui kolaborasi yang solid, tim berupaya mengembangkan usaha secara berkelanjutan sekaligus memperkenalkan jamu sebagai minuman sehat yang relevan dengan gaya hidup modern. PRODUK",
    "histori_usaha": "TROPIKEN : Beras Kencur Nanas dengan Topping Jely ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Naena Zulfia Yudafa 2302030095 Akuntansi S1 Fakultas Ekonomi & Bisnis 2 Shafa Rodlotun Istiqomah 2303040077 Teknik Informatika Fakultas Teknik & Sains 3 Chintya Niessahroji Putri 2308010081 Farmasi Fakultas Farmasi PROFIL TIM Tim Tropiken merupakan tim wirausaha mahasiswa yang berkomitmen mengembangkan inovasi minuman kesehatan tradisional agar lebih diminati oleh masyarakat, khususnya generasi muda. Melalui produk Beras Kencur Nanas dengan Topping Jelly, tim menghadirkan inovasi yang memadukan manfaat jamu tradisional dengan cita rasa segar dan konsep minuman kekinian, sehingga mampu memberikan nilai tambah pada produk herbal lokal. Dalam menjalankan usaha, Tim Tropiken menerapkan pembagian tugas yang terstruktur, meliputi ketua tim yang mengoordinasikan seluruh kegiatan usaha, divisi produksi dan quality control yang memastikan kualitas produk, divisi keuangan dan administrasi yang mengelola pengelolaan usaha, serta divisi pemasaran dan branding yang bertanggung jawab terhadap promosi dan pengembangan pasar. Melalui kolaborasi yang solid, tim berupaya mengembangkan usaha secara berkelanjutan sekaligus memperkenalkan jamu sebagai minuman sehat yang relevan dengan gaya hidup modern. PRODUK",
    "foto_produk": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200525386",
    "status": "Aktif"
  },
  {
    "id": "umkm-2026-53",
    "admin_id": "admin-1",
    "kategori_id": "cat-umkm-1",
    "nama_usaha": "Yomato (2026)",
    "nama_mahasiswa": "Fawaz Yovi",
    "program_studi": "Prodi Fakultas, Fakultas Ilmu Kesehatan, Fakultas Teknik dan, Fakultas Ekonomi ",
    "deskripsi": "YOMATO: Yogurt Tomato ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Suci Wulandari 2411010020 Keperawatan D3 Fakultas Ilmu Kesehatan 2 Yeyi Nur Sa’adah 2411060107 Kebidanan Fakultas Ilmu Kesehatan 3 Fikri Akbar 2403050032 Teknik Mesin Fakultas Teknik dan Sains 4 Siti Nurhasanah 2511050048 TLM Fakultas Ilmu Kesehatan 5 Fawaz Yovi Mulyatama 2502030055 Akuntansi S1 Fakultas Ekonomi & Bisnis PROFIL TIM Tim YOMATO dibentuk atas kepedulian terhadap tingginya kasus hipotensi yang banyak dialami oleh remaja dan mahasiswa akibat padatnya aktivitas, pola makan yang kurang seimbang, serta gaya hidup yang tidak teratur. Berangkat dari latar belakang tersebut, tim mengembangkan YOMATO, minuman fungsional berbahan dasar tomat dan yogurt yang memadukan manfaat kesehatan dengan cita rasa yang menarik serta sesuai dengan gaya hidup generasi muda. Inovasi ini tidak hanya bertujuan membantu menjaga stabilitas tekanan darah secara alami, tetapi juga meningkatkan kesehatan pencernaan melalui produk yang praktis dan mudah dikonsumsi. Selain memberikan solusi kesehatan, YOMATO juga memanfaatkan komoditas tomat lokal sebagai bahan baku utama sehingga mampu meningkatkan nilai tambah hasil pertanian dan mengurangi potensi kerugian pascapanen. Tim terdiri atas anggota yang memiliki pembagian tugas pada bidang manajemen usaha, pengadaan bahan baku, pengembangan produk, pengendalian mutu, keuangan, dan pemasaran sehingga seluruh proses bisnis dapat berjalan secara efektif. Dengan mengedepankan inovasi, kualitas produk, dan strategi pemasaran yang berkelanjutan, tim berkomitmen menjadikan YOMATO sebagai minuman kesehatan fungsional yang bermanfaat bagi masyarakat sekaligus berkontribusi terhadap pengembangan kewirausahaan dan pemanfaatan potensi lokal. PRODUK",
    "histori_usaha": "YOMATO: Yogurt Tomato ANGGOTA TIM No Nama Lengkap NIM Prodi Fakultas 1 Suci Wulandari 2411010020 Keperawatan D3 Fakultas Ilmu Kesehatan 2 Yeyi Nur Sa’adah 2411060107 Kebidanan Fakultas Ilmu Kesehatan 3 Fikri Akbar 2403050032 Teknik Mesin Fakultas Teknik dan Sains 4 Siti Nurhasanah 2511050048 TLM Fakultas Ilmu Kesehatan 5 Fawaz Yovi Mulyatama 2502030055 Akuntansi S1 Fakultas Ekonomi & Bisnis PROFIL TIM Tim YOMATO dibentuk atas kepedulian terhadap tingginya kasus hipotensi yang banyak dialami oleh remaja dan mahasiswa akibat padatnya aktivitas, pola makan yang kurang seimbang, serta gaya hidup yang tidak teratur. Berangkat dari latar belakang tersebut, tim mengembangkan YOMATO, minuman fungsional berbahan dasar tomat dan yogurt yang memadukan manfaat kesehatan dengan cita rasa yang menarik serta sesuai dengan gaya hidup generasi muda. Inovasi ini tidak hanya bertujuan membantu menjaga stabilitas tekanan darah secara alami, tetapi juga meningkatkan kesehatan pencernaan melalui produk yang praktis dan mudah dikonsumsi. Selain memberikan solusi kesehatan, YOMATO juga memanfaatkan komoditas tomat lokal sebagai bahan baku utama sehingga mampu meningkatkan nilai tambah hasil pertanian dan mengurangi potensi kerugian pascapanen. Tim terdiri atas anggota yang memiliki pembagian tugas pada bidang manajemen usaha, pengadaan bahan baku, pengembangan produk, pengendalian mutu, keuangan, dan pemasaran sehingga seluruh proses bisnis dapat berjalan secara efektif. Dengan mengedepankan inovasi, kualitas produk, dan strategi pemasaran yang berkelanjutan, tim berkomitmen menjadikan YOMATO sebagai minuman kesehatan fungsional yang bermanfaat bagi masyarakat sekaligus berkontribusi terhadap pengembangan kewirausahaan dan pemanfaatan potensi lokal. PRODUK",
    "foto_produk": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    "foto_pendukung": [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    ],
    "kontak": "6281200537709",
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
