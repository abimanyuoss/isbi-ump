import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Store, User, BookOpen, MessageSquare, Compass, Eye, X, Award, ShieldAlert } from 'lucide-react';
import { UMKM, KategoriUMKM } from '../types';

interface PageUMKMProps {
  umkmList: UMKM[];
  kategoriUMKM: KategoriUMKM[];
}

export default function PageUMKM({ umkmList, kategoriUMKM }: PageUMKMProps) {
  const [selectedCatId, setSelectedCatId] = useState<string>('all');
  const [selectedUmkmForModal, setSelectedUmkmForModal] = useState<UMKM | null>(null);
  const [expandedHistories, setExpandedHistories] = useState<Record<string, boolean>>({});

  const isVideoUrl = (url: string) => {
    if (!url) return false;
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.mkv'];
    return videoExtensions.some(ext => url.toLowerCase().endsWith(ext) || url.toLowerCase().includes(ext + '?') || url.toLowerCase().includes(ext + '#'));
  };

  const filteredUmkm = selectedCatId === 'all'
    ? umkmList
    : umkmList.filter(u => u.kategori_id === selectedCatId);

  const getCategoryName = (catId: string) => {
    return kategoriUMKM.find(c => c.id === catId)?.nama_kategori || 'Kuliner';
  };

  const toggleHistory = (id: string) => {
    setExpandedHistories(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="w-full bg-slate-50 py-12 px-6 md:px-12 text-slate-800 text-left font-sans" id="umkm-directory-page">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* Page Title */}
        <div className="text-center">
          <span className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-widest block mb-2">Showcase Produk</span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-800 tracking-tight leading-none mb-4">
            Direktori UMKM Mahasiswa UMP
          </h1>
          <p className="text-slate-550 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Jelajahi etalase produk kreatif dan jasa inovatif karya mahasiswa aktif Universitas Muhammadiyah Purwokerto binaan Islamic Student Business Incubator.
          </p>
        </div>

        {/* Info Note: Admin controlled registration */}
        <div className="bg-amber-50/60 border border-amber-200 p-4 rounded-xl flex items-start gap-3 max-w-3xl mx-auto text-left">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 leading-normal font-sans">
            <span className="font-bold block">Pemberitahuan Sistem Direktori</span>
            Data direktori usaha mahasiswa ini dikelola secara terpusat. Profil usaha baru atau suntingan data hanya bisa ditambahkan oleh pengelola BKA melalui <span className="font-bold">Dashboard Admin</span> setelah usaha mahasiswa dinyatakan lolos seleksi pembinaan berkala.
          </div>
        </div>

        {/* Filter tags row */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-250 pb-6">
          <button 
            onClick={() => setSelectedCatId('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              selectedCatId === 'all' 
                ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-500/10' 
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Semua Sektor</span>
          </button>
          
          {kategoriUMKM.map((cat) => (
            <button 
              key={cat.id}
              onClick={() => setSelectedCatId(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCatId === cat.id 
                  ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-500/10' 
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat.nama_kategori}
            </button>
          ))}
        </div>

        {/* UMKM Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredUmkm.map((umkm, idx) => {
            const isHistoryExpanded = !!expandedHistories[umkm.id];
            
            return (
              <motion.div
                key={umkm.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left h-full"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                {/* Product Image Thumbnail */}
                <div className="relative h-44 w-full bg-slate-100 shrink-0">
                  {isVideoUrl(umkm.foto_produk) ? (
                    <video 
                      src={umkm.foto_produk} 
                      className="w-full h-full object-cover" 
                      muted 
                      loop 
                      playsInline 
                      autoPlay
                    />
                  ) : (
                    <img 
                      src={umkm.foto_produk} 
                      alt={umkm.nama_usaha} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <span className="absolute top-4 left-4 bg-[#0f172a]/95 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded border border-slate-700/50 backdrop-blur-md">
                    {getCategoryName(umkm.kategori_id)}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm tracking-tight mb-2">
                      {umkm.nama_usaha}
                    </h3>
                    
                    {/* Owner detail lines */}
                    <div className="flex flex-col gap-1 text-[11px] text-slate-500 font-sans border-b border-slate-200 pb-3 mb-3">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span className="font-bold text-slate-700 truncate">{umkm.nama_mahasiswa}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span className="truncate">{umkm.program_studi}</span>
                      </div>
                    </div>

                    <p className="text-slate-650 text-[11px] leading-relaxed font-sans line-clamp-3 mb-4">
                      {umkm.deskripsi}
                    </p>
                  </div>

                  {/* Actions & Read Journey */}
                  <div className="flex flex-col gap-2.5 border-t border-slate-200 pt-3.5 mt-auto">
                    <button 
                      onClick={() => setSelectedUmkmForModal(umkm)}
                      className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-[10px] py-2 rounded-lg border border-slate-200 transition-colors inline-flex items-center justify-center gap-1 cursor-pointer uppercase"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-400" />
                      <span>Baca Kisah & Detail</span>
                    </button>

                    <a 
                      href={`https://wa.me/${umkm.kontak}?text=Halo%20${encodeURIComponent(umkm.nama_usaha)}%20binaan%20ISBI%20UMP%2C%20saya%20tertarik%20dengan%20produk%20Anda...`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-[10px] py-2 rounded-lg transition-colors inline-flex items-center justify-center gap-1 cursor-pointer shadow-sm uppercase"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Hubungi WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {filteredUmkm.length === 0 && (
            <div className="col-span-1 md:col-span-4 py-16 text-center bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
              <Store className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h4 className="font-bold text-slate-700 text-sm">Tidak ada profil UMKM ditemukan</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Belum ada profil wirausaha mahasiswa binaan yang terdaftar pada sektor ini.
              </p>
              <button
                onClick={() => setSelectedCatId('all')}
                className="mt-4 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-lg transition-all cursor-pointer"
              >
                Lihat Semua Sektor
              </button>
            </div>
          )}
        </div>

      </div>

      {/* DETAIL MODAL WITH FULL HISTORI SINGKAT PERJALANAN USAHA */}
      {selectedUmkmForModal && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200 text-left">
          <div className="bg-white rounded-xl border border-slate-200 shadow-2xl w-full max-w-xl overflow-hidden relative flex flex-col max-h-[90vh]">
            
            {/* Header image banner */}
            <div className="relative h-56 w-full bg-slate-100 shrink-0">
              {isVideoUrl(selectedUmkmForModal.foto_produk) ? (
                <video 
                  src={selectedUmkmForModal.foto_produk} 
                  className="w-full h-full object-cover" 
                  controls 
                  autoPlay 
                  muted 
                  loop
                  playsInline
                />
              ) : (
                <img 
                  src={selectedUmkmForModal.foto_produk} 
                  alt={selectedUmkmForModal.nama_usaha} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
              
              <button 
                onClick={() => setSelectedUmkmForModal(null)}
                className="absolute top-4 right-4 bg-[#0f172a]/80 hover:bg-slate-900 text-white p-1.5 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="absolute bottom-4 left-4 bg-emerald-700 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded border border-emerald-500/30">
                {getCategoryName(selectedUmkmForModal.kategori_id)}
              </span>
            </div>

            {/* Scrollable contents */}
            <div className="p-6 overflow-y-auto flex flex-col gap-5 text-xs text-slate-600">
              
              <div className="border-b border-slate-200 pb-4">
                <h3 className="font-bold text-slate-800 text-base sm:text-lg leading-tight mb-2">
                  {selectedUmkmForModal.nama_usaha}
                </h3>
                
                <div className="grid grid-cols-2 gap-3 mt-3 bg-slate-50 border border-slate-200 p-3 rounded-xl">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-slate-400 font-bold uppercase">Pemilik (Mahasiswa):</span>
                    <span className="font-bold text-slate-800 mt-0.5">{selectedUmkmForModal.nama_mahasiswa}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-slate-400 font-bold uppercase">Fakultas / Prodi:</span>
                    <span className="font-bold text-slate-800 mt-0.5 truncate">{selectedUmkmForModal.program_studi}</span>
                  </div>
                </div>
              </div>

              {/* Deskripsi */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wide">Mengenai Produk / Usaha:</span>
                <p className="font-sans leading-relaxed text-slate-600 text-justify bg-slate-50/40 p-3 rounded-lg border border-slate-200">
                  {selectedUmkmForModal.deskripsi}
                </p>
              </div>

              {/* REQUIRED: Histori Perjalanan Usaha */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-wide flex items-center gap-1">
                  <Award className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Histori Perjalanan Usaha & Inkubasi ISBI:</span>
                </span>
                <div className="font-sans leading-relaxed text-slate-700 text-justify bg-emerald-50/20 p-4 rounded-xl border border-emerald-100/80">
                  {selectedUmkmForModal.histori_usaha}
                </div>
              </div>

            </div>

            {/* Action footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2.5 shrink-0">
              <button 
                onClick={() => setSelectedUmkmForModal(null)}
                className="px-4 py-2 border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-100 cursor-pointer text-xs"
              >
                Tutup Detail
              </button>
              <a 
                href={`https://wa.me/${selectedUmkmForModal.kontak}?text=Halo%20${encodeURIComponent(selectedUmkmForModal.nama_usaha)}...`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-5 py-2 rounded-xl transition-all shadow-md shadow-emerald-500/10 flex items-center gap-1 text-xs cursor-pointer uppercase"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Kirim Pesan WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
