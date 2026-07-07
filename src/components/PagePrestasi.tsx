import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Award, Search, Calendar, Users, Star, Medal, ArrowLeft, Share2, Check, ArrowRight, Sparkles } from 'lucide-react';
import { Prestasi } from '../types';

interface PagePrestasiProps {
  prestasiList: Prestasi[];
}

export default function PagePrestasi({ prestasiList }: PagePrestasiProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTingkat, setSelectedTingkat] = useState<string>('Semua');
  const [selectedPrestasi, setSelectedPrestasi] = useState<Prestasi | null>(null);
  const [copied, setCopied] = useState(false);

  const isVideoUrl = (url: string) => {
    if (!url) return false;
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.mkv'];
    return videoExtensions.some(ext => url.toLowerCase().endsWith(ext) || url.toLowerCase().includes(ext + '?') || url.toLowerCase().includes(ext + '#'));
  };

  // Filter logic
  const filteredPrestasi = prestasiList.filter((item) => {
    const matchesSearch = 
      item.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tim_usaha.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nama_mahasiswa.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.penyelenggara.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTingkat = selectedTingkat === 'Semua' || item.tingkat === selectedTingkat;

    return matchesSearch && matchesTingkat;
  });

  // Calculate stats
  const totalPrestasi = prestasiList.length;
  const nasionalCount = prestasiList.filter(p => p.tingkat === 'Nasional').length;
  const regionalCount = prestasiList.filter(p => p.tingkat === 'Regional').length;

  const handleShare = () => {
    try {
      navigator.clipboard.writeText(`${window.location.href}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.warn("Clipboard access failed", e);
    }
  };

  // Render detail screen
  if (selectedPrestasi) {
    const otherPrestasi = prestasiList
      .filter((p) => p.id !== selectedPrestasi.id)
      .slice(0, 3);

    return (
      <div className="w-full bg-slate-50 py-12 px-6 md:px-12 text-slate-800 text-left font-sans" id="page-prestasi-detail">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          
          {/* Action Bar */}
          <div className="flex justify-between items-center bg-white border border-slate-200 px-5 py-3.5 rounded-2xl shadow-sm">
            <button 
              onClick={() => { setSelectedPrestasi(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-xs font-bold text-slate-600 hover:text-emerald-700 flex items-center gap-2 cursor-pointer transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>Kembali ke Daftar Prestasi</span>
            </button>
            <div className="flex items-center gap-3">
              {copied && (
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 animate-pulse">
                  Link Tersalin!
                </span>
              )}
              <button 
                onClick={handleShare}
                className="text-slate-400 hover:text-emerald-700 p-2 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200"
                title="Salin Tautan"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-700" /> : <Share2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Main Layout Card */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            {/* Banner/Image */}
            <div className="relative h-64 sm:h-[350px] w-full bg-slate-100">
              {isVideoUrl(selectedPrestasi.foto_prestasi) ? (
                <video 
                  src={selectedPrestasi.foto_prestasi} 
                  className="w-full h-full object-cover" 
                  controls 
                  autoPlay 
                  muted 
                  loop
                  playsInline
                />
              ) : (
                <img 
                  src={selectedPrestasi.foto_prestasi} 
                  alt={selectedPrestasi.judul} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
              
              {/* Floating level badge */}
              <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 items-center">
                <span className={`px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm border ${
                  selectedPrestasi.tingkat === 'Nasional'
                    ? 'bg-amber-500 text-white border-amber-400'
                    : selectedPrestasi.tingkat === 'Regional'
                    ? 'bg-sky-500 text-white border-sky-400'
                    : 'bg-slate-700 text-white border-slate-600'
                }`}>
                  Tingkat {selectedPrestasi.tingkat}
                </span>
                <span className="bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-xs">
                  Tahun {selectedPrestasi.tahun}
                </span>
              </div>
            </div>

            {/* Achievement Info Body */}
            <div className="p-6 sm:p-10 flex flex-col gap-8">
              
              {/* Header Info */}
              <div className="border-b border-slate-100 pb-6">
                <div className="flex items-center gap-1.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-full px-3 py-1 text-xs font-bold w-fit mb-4">
                  <Trophy className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>{selectedPrestasi.peringkat}</span>
                </div>

                <h1 className="font-display font-black text-xl sm:text-2xl text-slate-800 tracking-tight leading-snug">
                  {selectedPrestasi.judul}
                </h1>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-400 text-xs font-medium mt-3">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-700" />
                    <span>Penyelenggara: {selectedPrestasi.penyelenggara}</span>
                  </span>
                </div>
              </div>

              {/* Two Column details description & team profile */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Side: Long description */}
                <div className="md:col-span-2 flex flex-col gap-4 text-left">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Tentang Prestasi & Kompetisi</h3>
                  <div className="text-slate-650 text-sm leading-relaxed whitespace-pre-wrap text-justify flex flex-col gap-4">
                    {selectedPrestasi.deskripsi}
                  </div>
                  
                  {/* Additional Quotes / Highlight panel */}
                  <div className="mt-4 p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100/70 flex gap-3.5 text-left">
                    <Sparkles className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-emerald-950 text-xs">Inkubasi Bisnis ISBI UMP</span>
                      <p className="text-slate-600 text-[11px] leading-relaxed">
                        Prestasi ini merupakan buah dari program inkubasi terstruktur, bimbingan intensif dari praktisi wirausaha, dan hibah stimulus pembinaan modal usaha dari Biro Kemahasiswaan dan Alumni (BKA) UMP.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Startup & Innovator Profile Card */}
                <div className="flex flex-col gap-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-5 text-left">
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Profil Inovator</h3>
                    
                    {/* Tim Usaha */}
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 block">Startup / Kelompok Usaha</span>
                      <p className="font-bold text-slate-800 text-sm mt-1">{selectedPrestasi.tim_usaha}</p>
                    </div>

                    {/* Anggota Kelompok */}
                    <div>
                      <div className="flex items-center gap-1 text-slate-400">
                        <Users className="w-3.5 h-3.5" />
                        <span className="text-[10px] uppercase tracking-wider font-extrabold">Inovator Utama</span>
                      </div>
                      <p className="font-medium text-slate-600 text-xs mt-1.5 leading-relaxed">
                        {selectedPrestasi.nama_mahasiswa}
                      </p>
                    </div>

                    {/* Pembimbing/Kampus note */}
                    <div className="pt-4 border-t border-slate-200/60 text-[10px] text-slate-400 leading-relaxed">
                      Komitmen inkubasi kewirausahaan Universitas Muhammadiyah Purwokerto dalam mencetak wirausaha muda mandiri yang unggul, modern, dan islami.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Related Achievements (Carousel / Recommendation) */}
          {otherPrestasi.length > 0 && (
            <div className="flex flex-col gap-4 mt-4">
              <h2 className="font-display font-bold text-lg text-slate-800 tracking-tight text-left">
                Prestasi Wirausaha Lainnya
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {otherPrestasi.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => { setSelectedPrestasi(item); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="bg-white border border-slate-200 rounded-xl overflow-hidden p-4 hover:border-emerald-500 shadow-xs hover:shadow-sm cursor-pointer transition-all flex flex-col justify-between text-left h-full gap-3 group"
                  >
                    <div className="relative h-28 w-full rounded-lg overflow-hidden bg-slate-100 shrink-0">
                      {isVideoUrl(item.foto_prestasi) ? (
                        <video 
                          src={item.foto_prestasi} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          muted 
                          loop 
                          playsInline 
                          autoPlay
                        />
                      ) : (
                        <img 
                          src={item.foto_prestasi} 
                          alt={item.judul} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      )}
                      <div className="absolute top-2 left-2">
                        <span className="bg-emerald-700 text-white text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                          {item.tingkat}
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-[9px] text-emerald-700 font-extrabold uppercase tracking-wider block">
                        Tahun {item.tahun}
                      </span>
                      <h4 className="font-bold text-slate-850 text-xs leading-snug mt-1 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                        {item.judul}
                      </h4>
                    </div>
                    <div className="border-t border-slate-100 pt-2.5 mt-1 flex items-center justify-between text-[10px] text-slate-400">
                      <span className="font-bold text-slate-600">{item.tim_usaha}</span>
                      <span className="font-extrabold text-emerald-700 flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                        Detail <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    );
  }

  // Render list screen
  return (
    <div className="w-full bg-slate-50 py-12 px-6 md:px-12 text-slate-800 text-left font-sans" id="page-prestasi">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        
        {/* Header Section */}
        <div className="text-center">
          <span className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-widest block mb-2">Panggung Apresiasi</span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-800 tracking-tight leading-none mb-4">
            Prestasi Wirausaha Mahasiswa
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Kumpulan penghargaan, juara kompetisi bisnis, dan pencapaian hibah pendanaan tingkat nasional & regional oleh startup binaan ISBI UMP.
          </p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-black text-slate-800 leading-none">{totalPrestasi}</p>
              <p className="text-xs text-slate-500 font-medium mt-1">Total Prestasi Terekam</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-black text-slate-800 leading-none">{nasionalCount}</p>
              <p className="text-xs text-slate-500 font-medium mt-1">Skala Nasional</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
              <Medal className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-black text-slate-800 leading-none">{regionalCount}</p>
              <p className="text-xs text-slate-500 font-medium mt-1">Skala Regional & Lokal</p>
            </div>
          </div>
        </div>

        {/* Filters and Search controls */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Quick Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {['Semua', 'Nasional', 'Regional', 'Lokal'].map((tingkat) => (
              <button
                key={tingkat}
                onClick={() => setSelectedTingkat(tingkat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedTingkat === tingkat
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tingkat === 'Semua' ? 'Semua Tingkat' : tingkat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Cari prestasi, tim, nama..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
            />
          </div>
        </div>

        {/* Card List Rendering */}
        <div className="grid grid-cols-1 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPrestasi.length > 0 ? (
              filteredPrestasi.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: 'easeInOut', delay: index * 0.05 }}
                  onClick={() => { setSelectedPrestasi(item); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex flex-col md:flex-row gap-6 items-stretch cursor-pointer group"
                >
                  {/* Left Side: Illustration / Image of achievement */}
                  <div className="w-full md:w-1/3 min-h-[180px] md:min-h-full relative overflow-hidden bg-slate-100 shrink-0">
                    {isVideoUrl(item.foto_prestasi) ? (
                      <video 
                        src={item.foto_prestasi} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0 animate-fade-in" 
                        muted 
                        loop 
                        playsInline 
                        autoPlay
                      />
                    ) : (
                      <img
                        src={item.foto_prestasi}
                        alt={item.judul}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent md:bg-gradient-to-r" />
                    
                    {/* Floating Tingkat Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm border ${
                        item.tingkat === 'Nasional'
                          ? 'bg-amber-500 text-white border-amber-400'
                          : item.tingkat === 'Regional'
                          ? 'bg-sky-500 text-white border-sky-400'
                          : 'bg-slate-700 text-white border-slate-600'
                      }`}>
                        {item.tingkat}
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Content and Details */}
                  <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between text-left gap-4">
                    <div>
                      {/* Sub-header & Year */}
                      <div className="flex items-center gap-2 text-emerald-700 font-extrabold text-[10px] uppercase tracking-wider mb-2">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Tahun {item.tahun}</span>
                        <span>•</span>
                        <span>{item.penyelenggara}</span>
                      </div>

                      {/* Main Title */}
                      <h3 className="font-display font-bold text-lg sm:text-xl text-slate-800 tracking-tight leading-snug group-hover:text-emerald-700 transition-colors">
                        {item.judul}
                      </h3>

                      {/* Peringkat Subtext */}
                      <div className="mt-2.5 inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-full px-3 py-0.5 text-[11px] font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        <span>Pencapaian: {item.peringkat}</span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-4 line-clamp-3">
                        {item.deskripsi}
                      </p>
                    </div>

                    {/* Metadata Footer: Tim & Students */}
                    <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">Startup / Kelompok Usaha</p>
                        <p className="font-bold text-slate-800 mt-0.5">{item.tim_usaha}</p>
                      </div>
                      <div className="sm:text-right shrink-0 flex flex-col sm:items-end gap-1">
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <Users className="w-3.5 h-3.5" />
                          <p className="text-[10px] uppercase tracking-wider font-extrabold">Inovator Utama</p>
                        </div>
                        <p className="font-medium text-slate-600 mt-0.5">{item.nama_mahasiswa}</p>
                        <span className="text-[10px] text-emerald-700 font-bold uppercase mt-1 group-hover:underline inline-flex items-center gap-0.5">
                          Lihat Detail <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white border border-slate-200 rounded-2xl p-12 text-center"
              >
                <Trophy className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h4 className="font-bold text-slate-700 text-sm">Tidak ada prestasi ditemukan</h4>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto mb-3">
                  Cobalah menyesuaikan kata kunci pencarian Anda atau beralih ke filter tingkat yang lain.
                </p>
                {(searchQuery || selectedTingkat !== 'Semua') && (
                  <button
                    onClick={() => { setSearchQuery(''); setSelectedTingkat('Semua'); }}
                    className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-lg transition-all cursor-pointer"
                  >
                    Atur Ulang Pencarian & Filter
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

