import { Program, Berita, KategoriBerita, KategoriUMKM, UMKM, GaleriAlbum, GaleriFoto, Pendaftaran, Prestasi, ProfilData } from './types';

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
    nama_usaha: 'Kedai Kopi Kandang',
    nama_mahasiswa: 'Zidan Al-Ghifari',
    program_studi: 'Agribisnis, Fakultas Pertanian',
    deskripsi: 'Kedai kopi berkonsep industrial pedesaan yang menyajikan kopi lokal Banyumas berkualitas tinggi yang diperoleh langsung dari petani lokal dengan prinsip fair trade.',
    histori_usaha: 'Kopi Kandang dirintis oleh Zidan sejak semester 3 berawal dari tugas kuliah kewirausahaan. Mengalami kesulitan modal awal, Zidan mengajukan pendanaan ISBI UMP dan berhasil lolos mendapatkan modal pembinaan P2MW sebesar Rp 12 Juta. Modal tersebut digunakan untuk menyewa lahan kecil di dekat kampus, mendesain ulang kedai dengan nuansa kandang estetis yang disenangi mahasiswa, dan kini sudah memiliki 3 orang karyawan dan melayani puluhan cangkir kopi setiap hari.',
    foto_produk: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800',
    kontak: '6281234567890',
    status: 'Aktif'
  },
  {
    id: 'umkm-2',
    admin_id: 'admin-1',
    kategori_id: 'cat-umkm-2', // Fashion
    nama_usaha: 'Batik Modern Banyumas',
    nama_mahasiswa: 'Aisyah Putri Rahayu',
    program_studi: 'Manajemen, Fakultas Ekonomi dan Bisnis',
    deskripsi: 'Jenama busana batik ready-to-wear dengan sentuhan potongan modern kekinian yang ramah untuk selera anak muda tanpa menghilangkan nilai luhur filosofi motif khas Banyumasan.',
    histori_usaha: 'Aisyah yang memiliki kecintaan mendalam pada budaya lokal memulai usaha ini dari kamar kosnya dengan modal awal tabungan pribadi Rp 500 Ribu. Setelah bergabung dalam kelas pembinaan ISBI UMP, usahanya dibimbing untuk melakukan riset pasar digital dan pendaftaran merek dagang. Kini Batik Modern Banyumas aktif memproduksi kemeja, outer, dan scarf yang terjual ratusan pcs setiap bulannya secara online di seluruh Indonesia.',
    foto_produk: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
    kontak: '6282345678901',
    status: 'Aktif'
  },
  {
    id: 'umkm-3',
    admin_id: 'admin-1',
    kategori_id: 'cat-umkm-3', // Kerajinan
    nama_usaha: 'Anyam Pandan Kembaran',
    nama_mahasiswa: 'Bambang Triyono',
    program_studi: 'Teknik Industri, Fakultas Teknik & Sains',
    deskripsi: 'Produk tas, keranjang, dan dekorasi rumah ramah lingkungan yang dianyam secara handmade dari serat daun pandan duri kering oleh pengrajin lansia di desa Kembaran.',
    histori_usaha: 'Melihat potensi bahan baku daun pandan yang melimpah dan banyaknya lansia non-produktif di desanya, Bambang berinovasi mendesain tas anyaman modis dengan sentuhan kulit sintetis. Melalui program inkubasi ISBI, Bambang dibantu menyusun standarisasi kualitas produk (Quality Control) dan strategi pemasaran B2B. Produk anyamannya kini sering dipesan oleh instansi pemerintahan untuk suvenir seminar (goodie bag) resmi.',
    foto_produk: 'https://images.unsplash.com/photo-1535157833138-d3c19af30059?auto=format&fit=crop&q=80&w=800',
    kontak: '6283456789012',
    status: 'Aktif'
  },
  {
    id: 'umkm-4',
    admin_id: 'admin-1',
    kategori_id: 'cat-umkm-4', // Jasa
    nama_usaha: 'Desain Cetak Mahasiswa',
    nama_mahasiswa: 'Rian Hidayat',
    program_studi: 'Informatika, Fakultas Teknik & Sains',
    deskripsi: 'Layanan jasa desain grafis, pembuatan media presentasi, pengerjaan UI/UX aplikasi, hingga jasa percetakan tugas akhir yang cepat, ramah kantong, dan berkualitas bagi mahasiswa.',
    histori_usaha: 'Rian memulai jasanya bermodalkan laptop spesifikasi standar di perpustakaan kampus. Melalui jaringan relasi inkubasi bisnis ISBI UMP, ia dipertemukan dengan rekanan percetakan besar yang bersedia memberikan harga reseller. Kini usahanya bertransformasi menjadi agensi kreatif kecil beranggotakan 4 mahasiswa desainer yang menangani kebutuhan promosi UMKM lokal maupun organisasi internal mahasiswa.',
    foto_produk: 'https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&q=80&w=800',
    kontak: '6284567890123',
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


