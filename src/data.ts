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
    judul: '5 Tim Mahasiswa UMP Raih Pendanaan P2MW 2026',
    slug: '5-tim-mahasiswa-ump-raih-pendanaan-p2mw-2026',
    konten: `Universitas Muhammadiyah Purwokerto (UMP) kembali mengukir prestasi membanggakan di kancah nasional. Melalui pendampingan intensif dari Islamic Student Business Incubator (ISBI) di bawah Biro Kemahasiswaan dan Alumni (BKA), sebanyak 5 tim wirausaha mahasiswa UMP sukses lolos seleksi dan meraih dana bantuan Program Pembinaan Mahasiswa Wirausaha (P2MW) tahun 2026 dari Ditbelmawa Kemendikbudristek.\n\nKelima tim yang lolos mewakili berbagai kategori usaha mulai dari kuliner inovatif, jasa kreatif, hingga teknologi terapan. Kepala Biro Kemahasiswaan dan Alumni UMP menyatakan rasa bangganya terhadap kegigihan para mahasiswa.\n\n"Ini merupakan buah dari kerja keras tim, para dosen pendamping, serta komitmen ISBI UMP yang konsisten menyelenggarakan inkubasi bisnis sejak tahap ide hingga siap berkompetisi di tingkat nasional. Dana ini akan digunakan sepenuhnya untuk scale-up produk dan pemasaran," ujarnya.\n\nSelamat kepada para tim pelaksana! ISBI UMP akan terus mendampingi hingga tahap monitoring, evaluasi, hingga keikutsertaan di ajang KMI Expo mendatang.`,
    foto_sampul: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    status: 'Terbit',
    tanggal_terbit: '2026-06-25'
  },
  {
    id: 'news-2',
    admin_id: 'admin-1',
    kategori_id: 'cat-news-1', // Kegiatan
    judul: 'Seminar Kewirausahaan bersama Sevenpreneur',
    slug: 'seminar-kewirausahaan-bersama-sevenpreneur',
    konten: `ISBI UMP sukses menyelenggarakan Seminar & Talkshow Kewirausahaan berskala besar dengan tajuk "Membangun Mentalitas Sociopreneur Milenial di Era Digital" yang berkolaborasi dengan Sevenpreneur, salah satu platform inkubator startup terkemuka di Indonesia.\n\nAcara yang bertempat di Gedung Ukhuwah Islamiyah UMP ini dihadiri oleh lebih dari 400 mahasiswa dari berbagai fakultas. Sebagai pembicara utama, mentor bisnis dari Sevenpreneur membagikan rahasia validasi ide bisnis secara cepat sebelum meluncurkan produk ke pasar (Lean Startup).\n\n"Mahasiswa sering kali membuat produk yang mereka inginkan, bukan produk yang pasar butuhkan. Melalui kolaborasi ini, kami berharap pola pikir mahasiswa bergeser untuk memecahkan masalah nyata masyarakat lewat produk wirausaha mereka," ungkap Koordinator Program ISBI.\n\nDi akhir acara, diadakan sesi pitching kilat di mana beberapa wirausaha mahasiswa binaan ISBI mendapatkan masukan langsung (live feedback) untuk meningkatkan nilai jual bisnis mereka.`,
    foto_sampul: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800',
    status: 'Terbit',
    tanggal_terbit: '2026-05-18'
  },
  {
    id: 'news-3',
    admin_id: 'admin-1',
    kategori_id: 'cat-news-3', // Pengumuman
    judul: 'Pembukaan Booth Camp Inkubasi Bisnis Mahasiswa Angkatan IV',
    slug: 'pembukaan-booth-camp-inkubasi-bisnis-mahasiswa-angkatan-iv',
    konten: `Biro Kemahasiswaan dan Alumni (BKA) UMP melalui Islamic Student Business Incubator (ISBI) resmi membuka pendaftaran Booth Camp Inkubasi Bisnis Mahasiswa Angkatan IV. Kegiatan ini dirancang khusus untuk menggodok bisnis rintisan mahasiswa agar memiliki fundamental legalitas, keuangan, dan marketing yang kokoh.\n\nSelama 3 hari penuh, peserta terpilih akan mengikuti karantina pelatihan bisnis intensif, simulasi pasar, pembuatan prototype, hingga bimbingan legalitas usaha mikro.\n\nPendaftaran dibuka hingga akhir bulan ini. Seluruh biaya kegiatan ditanggung penuh oleh universitas sebagai bentuk dukungan nyata dalam menciptakan lulusan UMP yang mandiri, berkarakter mulia, dan siap menciptakan lapangan pekerjaan baru.`,
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
    judul_album: 'Expo UMKM Binaan ISBI UMP',
    tanggal_kegiatan: '2026-03-10',
    deskripsi_singkat: 'Pameran produk kreativitas mahasiswa yang diselenggarakan dalam rangka Milad Universitas Muhammadiyah Purwokerto.'
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
    id: 'umkm-1',
    admin_id: 'admin-1',
    kategori_id: 'cat-umkm-1', // Kuliner
    nama_usaha: 'Kedai Kopi Kandang (Tim Coffipa)',
    nama_mahasiswa: 'Zidan Al-Ghifari & Tim',
    program_studi: 'Agribisnis, Fakultas Pertanian',
    deskripsi: 'Kedai kopi berkonsep industrial pedesaan yang menyajikan kopi lokal Banyumas berkualitas tinggi yang diperoleh langsung dari petani lokal dengan prinsip fair trade.',
    histori_usaha: 'Kopi Kandang dirintis oleh tim mahasiswa sejak semester 3 berawal dari tugas kuliah kewirausahaan. Mengalami kesulitan modal awal, tim mengajukan pendanaan ISBI UMP dan berhasil lolos mendapatkan modal pembinaan P2MW. Modal tersebut digunakan untuk menyewa lahan kecil di dekat kampus, mendesain ulang kedai dengan nuansa kandang estetis yang disenangi mahasiswa, dan kini sudah memiliki karyawan dan melayani puluhan cangkir kopi setiap hari.',
    foto_produk: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800',
    foto_pendukung: [
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800', // Foto Dokumen NIB / Legalitas
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800', // Foto Kegiatan Barista
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'  // Foto Suasana Kedai
    ],
    kontak: '6281234567890',
    status: 'Aktif'
  },
  {
    id: 'umkm-2',
    admin_id: 'admin-1',
    kategori_id: 'cat-umkm-2', // Fashion
    nama_usaha: 'Kojan Apparel (Tim Kojan)',
    nama_mahasiswa: 'Aisyah Putri Rahayu & Tim',
    program_studi: 'Manajemen, Fakultas Ekonomi dan Bisnis',
    deskripsi: 'Jenama apparel dan busana batik modern ready-to-wear dengan sentuhan potongan kekinian yang ramah untuk selera anak muda tanpa menghilangkan nilai luhur filosofi motif khas Banyumasan.',
    histori_usaha: 'Tim Kojan Apparel memulai usaha ini dari kamar kos dengan modal awal tabungan pribadi. Setelah bergabung dalam kelas pembinaan ISBI UMP, usahanya dibimbing untuk melakukan riset pasar digital dan pendaftaran NIB serta merek dagang. Kini Kojan Apparel aktif memproduksi kemeja, outer, dan busana yang terjual ratusan pcs setiap bulannya secara online di seluruh Indonesia.',
    foto_produk: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
    foto_pendukung: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800', // NIB / Sertifikat Merek
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800'  // Foto Proses Produksi
    ],
    kontak: '6282345678901',
    status: 'Aktif'
  },
  {
    id: 'umkm-3',
    admin_id: 'admin-1',
    kategori_id: 'cat-umkm-3', // Kerajinan
    nama_usaha: 'CIGBULB ECOSHIELD (Tim Ecoshield)',
    nama_mahasiswa: 'Bambang Triyono & Tim',
    program_studi: 'Teknik Industri, Fakultas Teknik & Sains',
    deskripsi: 'Inovasi produk kerajinan dan solusi ramah lingkungan berbasis serat alam dan bahan daur ulang kreatif yang memberdayakan masyarakat lokal.',
    histori_usaha: 'Melihat potensi bahan baku lokal dan limbah yang melimpah, tim berinovasi mendesain produk kerajinan modis bernilai jual tinggi. Melalui program inkubasi ISBI UMP, tim dibantu menyusun standarisasi kualitas produk (Quality Control) dan pendaftaran legalitas NIB serta strategi pemasaran B2B.',
    foto_produk: 'https://images.unsplash.com/photo-1535157833138-d3c19af30059?auto=format&fit=crop&q=80&w=800',
    foto_pendukung: [
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800', // NIB Izin Usaha
      'https://images.unsplash.com/photo-1528458909336-e7a0adfac1d5?auto=format&fit=crop&q=80&w=800'  // Foto Pengrajin Menganyam
    ],
    kontak: '6283456789012',
    status: 'Aktif'
  },
  {
    id: 'umkm-4',
    admin_id: 'admin-1',
    kategori_id: 'cat-umkm-4', // Jasa
    nama_usaha: 'Golet Kost & FastDokter (Tim Inovasi Digital)',
    nama_mahasiswa: 'Rian Hidayat & Tim',
    program_studi: 'Informatika, Fakultas Teknik & Sains',
    deskripsi: 'Platform layanan digital pencarian hunian kos mahasiswa (Golet Kost) serta integrasi layanan konsultasi kesehatan mahasiswa terpadu (FastDokter).',
    histori_usaha: 'Tim mahasiswa Informatika UMP membangun platform ini untuk menyelesaikan permasalahan nyata pencarian kost dan akses medis cepat bagi mahasiswa rantau di Purwokerto. Mendapatkan pembinaan dari ISBI UMP dan berhasil mendaftarkan izin usaha NIB serta kemitraan pemilik kost lokal.',
    foto_produk: 'https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&q=80&w=800',
    foto_pendukung: [
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800', // NIB / Sertifikat Legalitas
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'  // Foto Sesi Diskusi Tim Digital
    ],
    kontak: '6284567890123',
    status: 'Aktif'
  },
  {
    id: 'umkm-5',
    admin_id: 'admin-1',
    kategori_id: 'cat-umkm-1', // Kuliner
    nama_usaha: 'Sejanga Dawet (Tim Sejanga)',
    nama_mahasiswa: 'Farhan Maulana & Tim',
    program_studi: 'Teknik Kimia, Fakultas Teknik & Sains',
    deskripsi: 'Inovasi minuman tradisional dawet ireng khas Banyumas dalam kemasan botol siap minum dengan teknologi pengawetan alami bebas bahan kimia berbahaya.',
    histori_usaha: 'Dikembangkan oleh kelompok mahasiswa P2MW UMP yang mengangkat kuliner kearifan lokal dawet ayu menjadi produk kemasan modern. Lolos pendanaan hibah dan aktif dipasarkan di kantin kampus serta minimarket mitra.',
    foto_produk: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
    foto_pendukung: [
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800', // Dokumen NIB & Izin Edar
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'  // Foto Sesi Produksi Dawet
    ],
    kontak: '6285678901234',
    status: 'Aktif'
  },
  {
    id: 'umkm-6',
    admin_id: 'admin-1',
    kategori_id: 'cat-umkm-4', // Jasa
    nama_usaha: 'Videolution Creative (Tim Videolution)',
    nama_mahasiswa: 'Prasetyo Utomo & Tim',
    program_studi: 'Desain Komunikasi Visual, FTIK',
    deskripsi: 'Agensi jasa videografi, komersial produk UMKM, animasi 2D/3D, dan pengusahaan konten kreatif branding bisnis mahasiswa.',
    histori_usaha: 'Berawal dari proyek tugas akhir studio multimedia, Videolution berkembang menjadi agensi kreatif berizin NIB resmi yang telah melayani belasan produk UMKM Banyumas dalam pembuatan video promosi sosial media.',
    foto_produk: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800',
    foto_pendukung: [
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800', // Dokumen NIB Legalitas
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'  // Foto Syuting Lapangan
    ],
    kontak: '6286789012345',
    status: 'Aktif'
  },
  {
    id: 'umkm-7',
    admin_id: 'admin-1',
    kategori_id: 'cat-umkm-2', // Fashion
    nama_usaha: 'HARS Dye Natural Fashion (Tim HARS Dye)',
    nama_mahasiswa: 'Anisa Nur & Tim',
    program_studi: 'Farmasi, Fakultas Farmasi',
    deskripsi: 'Produk pakaian dan kain motif ecoprint serta tie-dye menggunakan ekstrak pewarna alami dari limbah tanaman lokal Banyumas.',
    histori_usaha: 'Inovasi gabungan riset ekstrak bahan alam mahasiswa Farmasi UMP dengan industri fashion ramah lingkungan. Meraih apresiasi di ajang pameran wirausaha mahasiswa nasional.',
    foto_produk: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800',
    foto_pendukung: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800', // NIB Izin Usaha
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800'  // Foto Proses Pewarnaan Alami
    ],
    kontak: '6287890123456',
    status: 'Aktif'
  },
  {
    id: 'umkm-8',
    admin_id: 'admin-1',
    kategori_id: 'cat-umkm-4', // Jasa
    nama_usaha: 'Mumtaz Laundry Services (Tim Mumtaz)',
    nama_mahasiswa: 'Syafiq Rabbani & Tim',
    program_studi: 'Ekonomi Syariah, FAI',
    deskripsi: 'Layanan jasa laundry kilat ramah lingkungan berkonsep higienis syariah dengan sistem penjemputan antar-jemput gratis di sekitar area kampus UMP.',
    histori_usaha: 'Didirikan oleh tim mahasiswa FAI yang menggabungkan prinsip kebersihan Islam dengan kenyamanan layanan digital laundry mahasiswa.',
    foto_produk: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800',
    foto_pendukung: [
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800', // NIB Izin Usaha
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'  // Foto Outlet Laundry
    ],
    kontak: '6288901234567',
    status: 'Aktif'
  },
  {
    id: 'umkm-9',
    admin_id: 'admin-1',
    kategori_id: 'cat-umkm-1', // Kuliner
    nama_usaha: 'Ambara Gourmet (Tim Ambara)',
    nama_mahasiswa: 'Fitri Handayani & Tim',
    program_studi: 'Teknologi Pangan, Fakultas Pertanian',
    deskripsi: 'Produk camilan dan olahan pangan sehat kekinian berbahan dasar rempah dan umbi lokal unggulan Banyumas.',
    histori_usaha: 'Inovasi produk kuliner dari tim Ambara yang berhasil meraih hibah wirausaha mahasiswa dan pendaftaran izin legalitas NIB serta sertifikasi halal.',
    foto_produk: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=800',
    foto_pendukung: [
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800', // Dokumen NIB
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800'  // Foto Kemasan Produk
    ],
    kontak: '6289012345678',
    status: 'Aktif'
  },
  {
    id: 'umkm-10',
    admin_id: 'admin-1',
    kategori_id: 'cat-umkm-4', // Jasa
    nama_usaha: 'Coba Upgrade Diri (Tim Coba Upgrade Diri)',
    nama_mahasiswa: 'Dewi Lestari & Tim',
    program_studi: 'Psikologi, Fakultas Psikologi',
    deskripsi: 'Platform pelatihan dan mentoring pengembangan diri, soft skills, dan kesiapan karir yang dirancang khusus untuk mahasiswa rintisan.',
    histori_usaha: 'Digagas oleh tim Psikologi UMP untuk memfasilitasi mahasiswa dalam meningkatkan potensi diri dan kesiapan memasuki dunia profesional.',
    foto_produk: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    foto_pendukung: [
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800', // NIB Legalitas
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800'  // Sesi Workshop Webinar
    ],
    kontak: '6289123456789',
    status: 'Aktif'
  },
  {
    id: 'umkm-11',
    admin_id: 'admin-1',
    kategori_id: 'cat-umkm-3', // Kerajinan
    nama_usaha: 'Diptera Agro Innovation (Tim Diptera)',
    nama_mahasiswa: 'Bagus Setyawan & Tim',
    program_studi: 'Biologi, Fakultas Keguruan dan Ilmu Pendidikan',
    deskripsi: 'Produk bioteknologi terapan dan solusi pembenihan organik terpadu ramah lingkungan bagi petani milenial.',
    histori_usaha: 'Hasil riset mahasiswa biologi UMP yang ditransformasikan menjadi produk wirausaha bernilai komersial di bawah naungan ISBI UMP.',
    foto_produk: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800',
    foto_pendukung: [
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800', // NIB Izin Usaha
      'https://images.unsplash.com/photo-1528458909336-e7a0adfac1d5?auto=format&fit=crop&q=80&w=800'  // Foto Riset Laboratorium
    ],
    kontak: '6289234567890',
    status: 'Aktif'
  },
  {
    id: 'umkm-12',
    admin_id: 'admin-1',
    kategori_id: 'cat-umkm-2', // Fashion
    nama_usaha: 'Dissa Hijab & Style (Tim Dissa)',
    nama_mahasiswa: 'Annisa Rahma & Tim',
    program_studi: 'Pendidikan Bahasa Inggris, FKIP',
    deskripsi: 'Brand busana muslimah dan hijab instan premium dengan bahan adem serta desain minimalis elegan untuk aktivitas sehari-hari mahasiswi.',
    histori_usaha: 'Memulai rintisan usaha fashion muslimah sejak bangku perkuliahan awal, aktif dipasarkan melalui media sosial dan pameran wirausaha UMP.',
    foto_produk: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800',
    foto_pendukung: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800', // Sertifikat NIB
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800'  // Photoshoot Produk
    ],
    kontak: '6289345678901',
    status: 'Aktif'
  },
  {
    id: 'umkm-13',
    admin_id: 'admin-1',
    kategori_id: 'cat-umkm-1', // Kuliner
    nama_usaha: 'Moocofera Artisan Drink (Tim Moocofera)',
    nama_mahasiswa: 'Rendi Kurniawan & Tim',
    program_studi: 'Agroteknologi, Fakultas Pertanian',
    deskripsi: 'Minuman kombinasi unik kakao dan kopi pilihan dengan varian rasa buah tropis lokal Banyumas.',
    histori_usaha: 'Tim Moocofera mengembangkan formulasi minuman unik yang disukai mahasiswa dan berhasil lolos pendanaan P2MW.',
    foto_produk: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800',
    foto_pendukung: [
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800', // NIB Izin Usaha
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'  // Sesi Booth Pameran
    ],
    kontak: '6289456789012',
    status: 'Aktif'
  },
  {
    id: 'umkm-14',
    admin_id: 'admin-1',
    kategori_id: 'cat-umkm-4', // Jasa
    nama_usaha: 'Rembox Eco Packaging (Tim Rembox)',
    nama_mahasiswa: 'Aditya Pratama & Tim',
    program_studi: 'Teknik Sipil, Fakultas Teknik & Sains',
    deskripsi: 'Penyedia kardus dan kemasan ramah lingkungan custom untuk membantu pengemasan aman produk UMKM lokal.',
    histori_usaha: 'Membantu puluhan mitra UMKM binaan ISBI UMP dalam mendapatkan kemasan kokoh, estetis, dan terjangkau.',
    foto_produk: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    foto_pendukung: [
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800', // NIB Legalitas
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'  // Produksi Box
    ],
    kontak: '6289567890123',
    status: 'Aktif'
  },
  {
    id: 'umkm-15',
    admin_id: 'admin-1',
    kategori_id: 'cat-umkm-4', // Jasa
    nama_usaha: 'Second Book Hub (Tim Second Book)',
    nama_mahasiswa: 'Nadia Safitri & Tim',
    program_studi: 'Pendidikan Bahasa dan Sastra Indonesia, FKIP',
    deskripsi: 'Platform jual beli dan sewa buku kuliah bekas berkualitas dengan harga terjangkau sesama mahasiswa UMP.',
    histori_usaha: 'Solusi sirkulasi buku literasi kuliah hemat modal bagi mahasiswa yang diinisiasi oleh tim FKIP UMP.',
    foto_produk: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
    foto_pendukung: [
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800', // NIB Izin Usaha
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800'  // Perpustakaan & Booth
    ],
    kontak: '6289678901234',
    status: 'Aktif'
  },
  {
    id: 'umkm-16',
    admin_id: 'admin-1',
    kategori_id: 'cat-umkm-1', // Kuliner
    nama_usaha: 'Temutawa Herbal Brew (Tim Temutawa)',
    nama_mahasiswa: 'Hendra Gunawan & Tim',
    program_studi: 'Farmasi, Fakultas Farmasi',
    deskripsi: 'Minuman kebugaran herbal temulawak dan jahe merah instan kaya antioksidan dalam bentuk serbuk praktis.',
    histori_usaha: 'Formulasi racikan herbal berstandar khasiat dari mahasiswa Farmasi UMP yang dikemas secara higienis modern.',
    foto_produk: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800',
    foto_pendukung: [
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800', // NIB & Sertifikat Halal
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800'  // Foto Kemasan Herbal
    ],
    kontak: '6289789012345',
    status: 'Aktif'
  },
  {
    id: 'umkm-17',
    admin_id: 'admin-1',
    kategori_id: 'cat-umkm-4', // Jasa
    nama_usaha: 'Inkubasi Inovasi UMP (Tim Startup Hub)',
    nama_mahasiswa: 'Tim Inkubator Mahasiswa UMP',
    program_studi: 'Lintas Fakultas UMP',
    deskripsi: 'Pusat inkubasi bisnis, akselerator wirausaha muda, dan pendampingan legalitas NIB serta sertifikasi produk bagi tenant mahasiswa.',
    histori_usaha: 'Wadah kolaborasi terpadu di bawah naungan Biro Kemahasiswaan dan Alumni UMP untuk melahirkan pengusaha muda tangguh.',
    foto_produk: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    foto_pendukung: [
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800', // Sertifikat Inkubator Resmi
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800'  // Sesi Pendampingan Mentor
    ],
    kontak: '6281235276164',
    status: 'Aktif'
  }
];

export const PENDAFTARAN_SEED: Pendaftaran[] = [
  {
    id: 'reg-1',
    program_id: 'prog-1',
    nama: 'Farhan Maulana',
    email: 'farhan.m@gmail.com',
    no_hp: '081299998888',
    pesan: 'Saya ingin mendaftarkan kelompok usaha saya "Geprek Kampus" untuk pendanaan P2MW 2026. Proposal sudah kami selesaikan.',
    status: 'Masuk',
    tanggal_masuk: '2026-06-28 09:15'
  },
  {
    id: 'reg-2',
    program_id: 'prog-2',
    nama: 'Salma Salsabila',
    email: 'salmasalsa@gmail.com',
    no_hp: '085712345678',
    pesan: 'Tertarik mengikuti kelas dasar kewirausahaan untuk belajar cara membuat analisis target market digital.',
    status: 'Diproses',
    tanggal_masuk: '2026-06-29 14:30'
  }
];

export const PRESTASI_SEED: Prestasi[] = [
  {
    id: 'pres-1',
    judul: 'Juara 1 Nasional Kategori Makanan & Minuman KMI Expo 2025',
    tim_usaha: 'Kedai Kopi Kandang',
    nama_mahasiswa: 'Zidan Al-Ghifari, Hanif Prasetyo, Rian Ardiansyah',
    tingkat: 'Nasional',
    tahun: '2025',
    peringkat: 'Juara 1 Terbaik',
    penyelenggara: 'Direktorat Belmawa Kemendikbudristek',
    deskripsi: 'Kedai Kopi Kandang berhasil menyabet peringkat pertama dalam Kewirausahaan Mahasiswa Indonesia (KMI) Expo 2025 yang digelar di Universitas Pattimura. Tim dinilai unggul dalam inovasi produk kopi berbasis fair trade kemitraan lokal Banyumas dan model operasional berkelanjutan.',
    foto_prestasi: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pres-2',
    judul: 'Kelompok Mahasiswa Penerima Pendanaan Terbanyak Program P2MW 2026',
    tim_usaha: 'Delegasi Wirausaha UMP (5 Kelompok Terpilih)',
    nama_mahasiswa: 'Aisyah Putri Rahayu, Bambang Triyono, & Tim Kolektif',
    tingkat: 'Nasional',
    tahun: '2026',
    peringkat: 'Penerima Hibah',
    penyelenggara: 'Ditbelmawa Kemendikbudristek RI',
    deskripsi: 'Lima kelompok startup binaan ISBI UMP sukses mendapatkan total dana hibah pembinaan hingga Rp 65 juta rupiah setelah bersaing mengalahkan ribuan proposal rencana bisnis perguruan tinggi se-Indonesia dalam ajang P2MW 2026.',
    foto_prestasi: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pres-3',
    judul: 'Penghargaan Wirausaha Muda Berprestasi Jawa Tengah 2025',
    tim_usaha: 'Batik Modern Banyumas',
    nama_mahasiswa: 'Aisyah Putri Rahayu',
    tingkat: 'Regional',
    tahun: '2025',
    peringkat: 'Top 3 Wirausaha Terbaik',
    penyelenggara: 'Dinas Pemuda dan Olahraga (Dispora) Jawa Tengah',
    deskripsi: 'Aisyah Putri Rahayu selaku owner Batik Modern Banyumas dinobatkan sebagai salah satu wirausaha muda pelopor pelestarian budaya lokal bermotif Banyumasan yang mengkombinasikan teknologi e-commerce pemasaran modern.',
    foto_prestasi: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pres-4',
    judul: 'Juara Harapan 1 Lomba Inovasi Bisnis Berkelanjutan (KRENOVA)',
    tim_usaha: 'Anyam Pandan Kembaran',
    nama_mahasiswa: 'Bambang Triyono, Slamet Riyadi',
    tingkat: 'Regional',
    tahun: '2025',
    peringkat: 'Juara Harapan 1',
    penyelenggara: 'BAPPEDA Kabupaten Banyumas',
    deskripsi: 'Inovasi produk tas dan anyaman serat alam dari daun pandan duri kering yang memberdayakan pengrajin lansia non-produktif mendapat apresiasi tinggi dari dewan juri KRENOVA atas kontribusinya dalam pengentasan kemiskinan desa.',
    foto_prestasi: 'https://images.unsplash.com/photo-1535157833138-d3c19af30059?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pres-5',
    judul: 'Gold Medal Award di Muhammadiyah Entrepreneurship Summit 2026',
    tim_usaha: 'Tech-Inkubator Mahasiswa UMP',
    nama_mahasiswa: 'Farhan Maulana, Rian Hidayat',
    tingkat: 'Nasional',
    tahun: '2026',
    peringkat: 'Medali Emas',
    penyelenggara: 'Majelis Ekonomi dan Kewirausahaan PP Muhammadiyah',
    deskripsi: 'Menampilkan integrasi sistem kasir pintar UMKM yang dikembangkan oleh tim mahasiswa Informatika UMP, dinilai paling solutif dalam mendigitalisasi operasional keuangan pedagang kaki lima dan warung kelontong mitra binaan.',
    foto_prestasi: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800'
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
    subtitle: "Inkubator Sentra Bisnis dan Inovasi Universitas Muhammadiyah Purwokerto. Kembangkan ide bisnismu menjadi nyata bersama kami.",
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
    title: "Prestasi Wirausaha Tingkat Nasional",
    subtitle: "ISBI UMP bangga mengantarkan Kedai Kopi Kandang menyabet Juara 1 Nasional Kategori Makanan & Minuman di KMI Expo Kemendikbudristek.",
    ctaText: "Lihat Cerita Sukses",
    ctaTab: "prestasi",
    secondaryText: "Direktori UMKM",
    secondaryTab: "umkm",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
    badge: "Delegasi UMP Menang",
    gradient: "from-[#042f2e] via-[#042f2e]/85 to-transparent",
    urutan: 3
  }
];


