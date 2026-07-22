import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Quote, Sparkles, Star, Trophy, Users } from 'lucide-react';
import Hero from './Hero';
import QuickAccess from './QuickAccess';
import { Program, Berita, UMKM, GaleriFoto, HeroSlide } from '../types';

interface PageBerandaProps {
  programs: Program[];
  beritaList: Berita[];
  umkmList: UMKM[];
  photos: GaleriFoto[];
  heroSlides: HeroSlide[];
  setActiveTab: (tab: string) => void;
  setSelectedBerita: (berita: Berita | null) => void;
}

export default function PageBeranda({
  programs,
  beritaList,
  umkmList,
  photos,
  heroSlides,
  setActiveTab,
  setSelectedBerita
}: PageBerandaProps) {

  const isVideoUrl = (url: string) => {
    if (!url) return false;
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.mkv'];
    return videoExtensions.some(ext => url.toLowerCase().endsWith(ext) || url.toLowerCase().includes(ext + '?') || url.toLowerCase().includes(ext + '#'));
  };

  // Get active published news
  const activeBerita = beritaList.filter(b => b.status === 'Terbit').slice(0, 3);
  
  // Custom date parsing helper for the requested berita date badge style: (angka besar + bulan)
  const parseNewsDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      const day = d.getDate();
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
      const month = monthNames[d.getMonth()];
      return { day, month };
    } catch {
      return { day: 25, month: "Jun" };
    }
  };

  const handleBeritaClick = (news: Berita) => {
    setSelectedBerita(news);
    setActiveTab('berita');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Testimonial list (Menggunakan tim usaha asli dari Drive)
  const testimonials = [
    {
      id: 1,
      name: 'M Sidiq Alfatoni',
      prodi: 'Fakultas Ekonomi dan Bisnis',
      brand: 'Tim Ambara (2024)',
      quote: 'ISBI UMP memberi kami bekal nyata pengembangan inovasi transportasi digital angkutan kota (Ambara) Banyumas Raya dari tahap rintisan hingga komersialisasi.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      rating: 5
    },
    {
      id: 2,
      name: 'Muhammad Farhan Auladi',
      prodi: 'Fakultas Pertanian & Sains',
      brand: 'Tim CIGBULB ECOSHIELD (2024)',
      quote: 'Melalui pembinaan ISBI UMP, inovasi pestisida organik berbasis limbah puntung rokok dan kulit bawang merah kami mendapatkan pendampingan NIB dan jaringan kemitraan UMKM.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      rating: 5
    }
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      {/* 1. Hero Banner Component */}
      <Hero slides={heroSlides} onCtaClick={setActiveTab} />

      {/* 2. Quick Access Grid Component */}
      <QuickAccess onItemClick={setActiveTab} />

      {/* 3. Highlight Program Section */}
      <section className="w-full py-16 px-6 md:px-12 bg-white text-slate-800 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
            <div>
              <span className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-widest block mb-1">
                Akselerasi Kompetensi
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-800 tracking-tight leading-none">
                Program Kewirausahaan Mahasiswa
              </h2>
              <p className="text-slate-500 text-xs mt-2 max-w-lg">
                Ikuti berbagai wadah pembinaan, pendanaan, dan inkubasi mendalam yang dirancang oleh Biro Kemahasiswaan dan Alumni UMP.
              </p>
            </div>
            <button 
              onClick={() => { setActiveTab('program'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 hover:underline cursor-pointer"
            >
              <span>Lihat Syarat & Ketentuan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((prog, idx) => (
              <motion.div 
                key={prog.id}
                className="bg-slate-50 border border-slate-200 hover:border-emerald-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div>
                  {/* Status Badge */}
                  <span className={`inline-block text-[9px] font-black px-2.5 py-0.5 rounded-full border mb-4 uppercase tracking-wider ${
                    prog.status === 'Pendaftaran Dibuka' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                    prog.status === 'Berjalan Rutin' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                    'bg-slate-150 text-slate-500 border-slate-200'
                  }`}>
                    {prog.status}
                  </span>

                  <h3 className="font-bold text-slate-800 text-sm leading-snug hover:text-emerald-700 transition-colors mb-3">
                    {prog.nama_program}
                  </h3>

                  <p className="text-slate-500 text-xs leading-relaxed font-sans line-clamp-3">
                    {prog.deskripsi}
                  </p>
                </div>

                <div className="border-t border-slate-200/50 pt-4 mt-6 flex justify-between items-center text-xs">
                  <span className="text-[10px] font-mono text-slate-400">Pendaftaran s/d {prog.jadwal_selesai}</span>
                  <button 
                    onClick={() => {
                      if (prog.status === 'Pendaftaran Dibuka') {
                        setActiveTab('kontak');
                        setTimeout(() => {
                          const formEl = document.getElementById('contact-form-container');
                          if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                        }, 200);
                      } else {
                        setActiveTab('program');
                      }
                    }}
                    className={`font-extrabold text-[11px] uppercase tracking-wide cursor-pointer ${
                      prog.status === 'Pendaftaran Dibuka' ? 'text-emerald-700 hover:underline' : 'text-slate-400 hover:text-slate-500'
                    }`}
                  >
                    {prog.status === 'Pendaftaran Dibuka' ? 'Daftar Sekarang' : 'Detail Info'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Berita Terbaru Section */}
      <section className="w-full py-16 px-6 md:px-12 bg-slate-50 border-t border-slate-200 text-slate-800 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
            <div>
              <span className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-widest block mb-1">
                Kabar Inkubator
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-800 tracking-tight leading-none">
                Berita Kegiatan & Prestasi UMP
              </h2>
              <p className="text-slate-500 text-xs mt-2 max-w-lg">
                Pantau perkembangan aktivitas kewirausahaan, kabar kompetisi nasional, serta dokumentasi workshop dari ISBI UMP.
              </p>
            </div>
            <button 
              onClick={() => { setActiveTab('berita'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-850 flex items-center gap-1 hover:underline cursor-pointer"
            >
              <span>Semua Artikel Berita</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* News Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeBerita.map((berita, idx) => {
              const { day, month } = parseNewsDate(berita.tanggal_terbit);
              return (
                <motion.div
                  key={berita.id}
                  onClick={() => handleBeritaClick(berita)}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col justify-between text-left h-full"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <div className="relative aspect-[4/5] w-full bg-slate-100 overflow-hidden shrink-0">
                    {isVideoUrl(berita.foto_sampul) ? (
                      <video 
                        src={berita.foto_sampul} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        muted 
                        loop 
                        playsInline 
                        autoPlay
                      />
                    ) : (
                      <img 
                        src={berita.foto_sampul} 
                        alt={berita.judul} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    
                    {/* Floating Date Badge: (angka besar + bulan) di pojok foto */}
                    <div className="absolute top-4 left-4 bg-emerald-700 text-white p-2.5 rounded-xl shadow-lg flex flex-col items-center justify-center leading-none min-w-[50px] border border-emerald-600/30">
                      <span className="font-display font-black text-lg">{day}</span>
                      <span className="text-[9px] uppercase tracking-wider font-extrabold mt-1">{month}</span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-wider block mb-2">
                        {berita.kategori_id === 'cat-news-2' ? 'PRESTASI' : berita.kategori_id === 'cat-news-3' ? 'PENGUMUMAN' : 'KEGIATAN'}
                      </span>
                      <h3 className="font-bold text-slate-800 text-sm leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
                        {berita.judul}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed font-sans mt-2.5 line-clamp-3">
                        {berita.konten}
                      </p>
                    </div>

                    <div className="border-t border-slate-150 pt-3.5 mt-5 flex items-center justify-between text-slate-400 text-xs">
                      <span className="text-[10px] font-semibold flex items-center gap-1.5 text-slate-400">
                        <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                        <span>ISBI Admin</span>
                      </span>
                      <span className="font-bold text-[10px] text-emerald-700 group-hover:underline uppercase tracking-wide">
                        BACA SELENGKAPNYA
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Testimonial / Success Quotes Section */}
      <section className="w-full py-16 px-6 md:px-12 bg-white text-slate-800 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-12">
            <div className="bg-amber-50 text-amber-700 p-2 rounded-xl mb-4 border border-amber-200">
              <Trophy className="w-5 h-5" />
            </div>
            <span className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-widest">Inspirasi Mahasiswa</span>
            <h2 className="font-display font-bold text-2xl text-slate-800 mt-2 tracking-tight">Kisah Sukses Mahasiswa Pengusaha</h2>
            <p className="text-slate-500 text-xs mt-2 leading-relaxed">
              Dengar langsung bagaimana modal pembinaan dan kelas mentoring melipatgandakan dampak wirausaha mahasiswa binaan kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test) => (
              <div 
                key={test.id}
                className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl relative flex flex-col justify-between text-left"
              >
                {/* Quote symbol */}
                <Quote className="w-10 h-10 text-emerald-100 absolute top-6 right-6 shrink-0" />
                
                <div>
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed font-sans italic relative z-10 mb-6">
                    "{test.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200">
                  <img src={test.avatar} alt={test.name} className="w-11 h-11 object-cover rounded-full border border-slate-200" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-xs">{test.name}</h4>
                    <p className="text-[10px] text-slate-400 font-medium">{test.prodi}</p>
                    <span className="text-[9px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 mt-1 inline-block">
                      {test.brand}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Galeri Singkat Section */}
      <section className="w-full py-16 px-6 md:px-12 bg-slate-50 border-t border-slate-200 text-slate-800 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
            <div>
              <span className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-widest block mb-1">
                Lensa Kegiatan
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-800 tracking-tight leading-none">
                Galeri Foto Terbaru
              </h2>
              <p className="text-slate-500 text-xs mt-2 max-w-lg">
                Dokumentasi kemeriahan stan pameran, awarding, dan panggung pameran produk kewirausahaan mahasiswa UMP.
              </p>
            </div>
            <button 
              onClick={() => { setActiveTab('galeri'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 hover:underline cursor-pointer"
            >
              <span>Lihat Seluruh Album</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Simple Gallery Grid requested: "Galeri berupa grid foto sederhana" */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.slice(0, 4).map((p, idx) => (
              <motion.div 
                key={p.id}
                className="relative h-44 rounded-xl overflow-hidden border border-slate-200 shadow-sm group bg-slate-100 cursor-pointer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => { setActiveTab('galeri'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                {isVideoUrl(p.url_foto) ? (
                  <video 
                    src={p.url_foto} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    muted 
                    loop 
                    playsInline 
                    autoPlay
                  />
                ) : (
                  <img 
                    src={p.url_foto} 
                    alt={p.keterangan} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                  <p className="text-[10px] text-white font-medium leading-relaxed text-left">{p.keterangan}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
