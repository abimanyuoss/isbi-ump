import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Tag, Share2, CornerDownRight, Newspaper, Check } from 'lucide-react';
import { Berita, KategoriBerita } from '../types';

interface PageBeritaProps {
  beritaList: Berita[];
  kategoriBerita: KategoriBerita[];
  selectedBerita: Berita | null;
  setSelectedBerita: (berita: Berita | null) => void;
}

export default function PageBerita({
  beritaList,
  kategoriBerita,
  selectedBerita,
  setSelectedBerita
}: PageBeritaProps) {
  const [selectedCatId, setSelectedCatId] = useState<string>('all');
  const [copied, setCopied] = useState<boolean>(false);

  const isVideoUrl = (url: string) => {
    if (!url) return false;
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.mkv'];
    return videoExtensions.some(ext => url.toLowerCase().endsWith(ext) || url.toLowerCase().includes(ext + '?') || url.toLowerCase().includes(ext + '#'));
  };

  // Filter out unpublished (draft) articles for visitors
  const publishedBerita = beritaList.filter(b => b.status === 'Terbit');

  const filteredBerita = selectedCatId === 'all' 
    ? publishedBerita
    : publishedBerita.filter(b => b.kategori_id === selectedCatId);

  const getCategoryName = (catId: string) => {
    return kategoriBerita.find(c => c.id === catId)?.nama_kategori || 'Kegiatan';
  };

  // Helper to parse date to (angka besar + bulan) di pojok foto
  const parseNewsDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      const day = d.getDate();
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
      const month = monthNames[d.getMonth()];
      const year = d.getFullYear();
      return { day, month, year, text: `${day} ${month} ${year}` };
    } catch {
      return { day: 25, month: "Jun", year: 2026, text: "25 Jun 2026" };
    }
  };

  const handleShare = () => {
    try {
      navigator.clipboard.writeText(`${window.location.href}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.warn("Clipboard access failed", e);
    }
  };

  // 1. DETAIL VIEW SCREEN
  if (selectedBerita) {
    const { text: dateText } = parseNewsDate(selectedBerita.tanggal_terbit);
    return (
      <div className="w-full bg-slate-50 py-12 px-6 md:px-12 text-slate-800 text-left font-sans">
        <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          
          {/* Header Action bar */}
          <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
            <button 
              onClick={() => { setSelectedBerita(null); window.scrollTo({ top: 0 }); }}
              className="text-xs font-bold text-slate-600 hover:text-emerald-700 flex items-center gap-1.5 cursor-pointer hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Daftar Berita</span>
            </button>
            <div className="flex items-center gap-2">
              {copied && <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100 animate-pulse">Link Tersalin!</span>}
              <button 
                onClick={handleShare}
                className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-200/50 transition-colors cursor-pointer"
                title="Salin Tautan"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-700" /> : <Share2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Cover image banner */}
          <div className="relative h-64 sm:h-80 w-full bg-slate-100">
            {isVideoUrl(selectedBerita.foto_sampul) ? (
              <video 
                src={selectedBerita.foto_sampul} 
                className="w-full h-full object-cover" 
                controls 
                autoPlay 
                muted 
                loop
                playsInline
              />
            ) : (
              <img 
                src={selectedBerita.foto_sampul} 
                alt={selectedBerita.judul} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
            
            {/* Overlay Category Floating */}
            <span className="absolute bottom-6 left-6 bg-emerald-700 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md border border-emerald-500/30">
              {getCategoryName(selectedBerita.kategori_id)}
            </span>
          </div>

          {/* Article Info */}
          <div className="p-6 sm:p-8 flex flex-col gap-6">
            
            <div className="flex flex-col gap-2.5 text-left border-b border-slate-200 pb-5">
              <h1 className="font-bold text-slate-800 text-xl sm:text-2xl leading-snug">
                {selectedBerita.judul}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-slate-400 text-[11px] font-mono mt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{dateText}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Ditulis: ISBI Admin (BKA UMP)</span>
                </span>
              </div>
            </div>

            {/* Paragraph Content */}
            <div className="text-slate-650 text-xs sm:text-sm leading-relaxed font-sans whitespace-pre-wrap flex flex-col gap-4 text-justify">
              {selectedBerita.konten}
            </div>

            {/* Bottom Signature */}
            <div className="border-t border-slate-200 pt-6 mt-4 flex items-center gap-3 text-left">
              <div className="bg-slate-900 p-2 rounded-xl text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-800 text-xs">Islamic Student Business Incubator</span>
                <span className="text-[10px] text-slate-400 font-medium">Biro Kemahasiswaan dan Alumni (BKA), Universitas Muhammadiyah Purwokerto</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // 2. LIST VIEW SCREEN
  return (
    <div className="w-full bg-slate-50 py-12 px-6 md:px-12 text-slate-800 text-left font-sans">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* Page Title */}
        <div className="text-center">
          <span className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-widest block mb-2">Kabar & Publikasi</span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-800 tracking-tight leading-none mb-4">
            Berita Kegiatan ISBI UMP
          </h1>
          <p className="text-slate-550 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Temukan berita seputar pameran wirausaha mahasiswa, seminar nasional kemahasiswaan, dan pengumuman pembukaan hibah program.
          </p>
        </div>

        {/* Filter categories tags row */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-250 pb-6">
          <button 
            onClick={() => setSelectedCatId('all')}
            className={`px-4.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedCatId === 'all' 
                ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-500/10' 
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            Semua Kategori
          </button>
          
          {kategoriBerita.map((cat) => (
            <button 
              key={cat.id}
              onClick={() => setSelectedCatId(cat.id)}
              className={`px-4.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCatId === cat.id 
                  ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-500/10' 
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat.nama_kategori}
            </button>
          ))}
        </div>

        {/* Catalog grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredBerita.map((berita, idx) => {
            const { day, month } = parseNewsDate(berita.tanggal_terbit);

            return (
              <motion.div
                key={berita.id}
                onClick={() => { setSelectedBerita(berita); window.scrollTo({ top: 0 }); }}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col justify-between text-left h-full"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden shrink-0">
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
                  
                  {/* Floating Date Badge requested: (angka besar + bulan) di pojok foto */}
                  <div className="absolute top-4 left-4 bg-emerald-700 text-white p-2.5 rounded-xl shadow-lg flex flex-col items-center justify-center leading-none min-w-[50px] border border-emerald-600/30">
                    <span className="font-display font-black text-lg">{day}</span>
                    <span className="text-[9px] uppercase tracking-wider font-extrabold mt-1">{month}</span>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-wider block mb-2">
                      {getCategoryName(berita.kategori_id)}
                    </span>
                    <h3 className="font-bold text-slate-800 text-sm leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
                      {berita.judul}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-sans mt-2.5 line-clamp-3">
                      {berita.konten}
                    </p>
                  </div>

                  <div className="border-t border-slate-200 pt-3.5 mt-5 flex items-center justify-between text-slate-400 text-xs">
                    <span className="text-[10px] font-semibold flex items-center gap-1.5 text-slate-400">
                      <Newspaper className="w-3.5 h-3.5 text-emerald-700" />
                      <span>ISBI Admin</span>
                    </span>
                    <span className="font-bold text-[10px] text-emerald-700 group-hover:underline uppercase tracking-wide">
                      Baca Selengkapnya
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {filteredBerita.length === 0 && (
            <div className="col-span-3 py-16 text-center bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
              <Newspaper className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h4 className="font-bold text-slate-700 text-sm">Tidak ada artikel berita ditemukan</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Belum ada artikel kabar kegiatan atau pengumuman yang dipublikasikan di kategori ini.
              </p>
              <button
                onClick={() => setSelectedCatId('all')}
                className="mt-4 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-lg transition-all cursor-pointer"
              >
                Lihat Semua Kategori
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
