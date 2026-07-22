import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Store, User, BookOpen, MessageSquare, Compass, Eye, X, Award, ShieldAlert, ArrowLeft, Share2, Check, FileText, Maximize2 } from 'lucide-react';
import { UMKM, KategoriUMKM } from '../types';

interface PageUMKMProps {
  umkmList: UMKM[];
  kategoriUMKM: KategoriUMKM[];
  selectedUmkm: UMKM | null;
  setSelectedUmkm: (umkm: UMKM | null) => void;
}

export default function PageUMKM({ umkmList, kategoriUMKM, selectedUmkm, setSelectedUmkm }: PageUMKMProps) {
  const [selectedCatId, setSelectedCatId] = useState<string>('all');
  const [copied, setCopied] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

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

  const handleShare = () => {
    try {
      navigator.clipboard.writeText(`${window.location.origin}/?tab=umkm&id=${selectedUmkm?.id}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.warn("Clipboard access failed", e);
    }
  };

  // 1. DETAIL VIEW SCREEN (FULL PAGE STYLE LIKE NEWS DETAIL)
  if (selectedUmkm) {
    return (
      <div className="w-full bg-slate-50 py-12 px-6 md:px-12 text-slate-800 text-left font-sans">
        <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          
          {/* Header Action bar */}
          <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
            <button 
              onClick={() => { setSelectedUmkm(null); window.scrollTo({ top: 0 }); }}
              className="text-xs font-bold text-slate-600 hover:text-emerald-700 flex items-center gap-1.5 cursor-pointer hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Direktori UMKM</span>
            </button>
            <div className="flex items-center gap-2">
              {copied && (
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100 animate-pulse">
                  Link Tersalin!
                </span>
              )}
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
            {isVideoUrl(selectedUmkm.foto_produk) ? (
              <video 
                src={selectedUmkm.foto_produk} 
                className="w-full h-full object-cover" 
                controls 
                autoPlay 
                muted 
                loop
                playsInline
              />
            ) : (
              <img 
                src={selectedUmkm.foto_produk} 
                alt={selectedUmkm.nama_usaha} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
            
            {/* Overlay Category Floating */}
            <span className="absolute bottom-6 left-6 bg-emerald-700 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md border border-emerald-500/30">
              {getCategoryName(selectedUmkm.kategori_id)}
            </span>
          </div>

          {/* Business Info */}
          <div className="p-6 sm:p-8 flex flex-col gap-6">
            
            <div className="flex flex-col gap-2.5 text-left border-b border-slate-200 pb-5">
              <h1 className="font-bold text-slate-800 text-xl sm:text-2xl leading-snug">
                {selectedUmkm.nama_usaha}
              </h1>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 bg-slate-50 border border-slate-200 p-4 rounded-2xl">
                <div className="flex flex-col text-left">
                  <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider">Pemilik (Mahasiswa):</span>
                  <span className="font-sans font-extrabold text-[#0e3b5e] text-sm mt-1">{selectedUmkm.nama_mahasiswa}</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider">Fakultas / Program Studi:</span>
                  <span className="text-xs text-slate-700 font-semibold mt-1">{selectedUmkm.program_studi}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2 text-left">
              <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Mengenai Produk & Usaha</span>
              <div className="text-slate-650 text-xs sm:text-sm leading-relaxed font-sans whitespace-pre-wrap text-justify bg-slate-50/40 p-4 rounded-xl border border-slate-200">
                {selectedUmkm.deskripsi}
              </div>
            </div>

            {/* Supporting Images Gallery (NIB Document & Activity Photos) */}
            {selectedUmkm.foto_pendukung && selectedUmkm.foto_pendukung.length > 0 && (
              <div className="flex flex-col gap-2.5 text-left border-t border-slate-200 pt-5">
                <div className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-emerald-700" />
                  <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">
                    Dokumen Legalitas (NIB) & Foto Kegiatan Usaha
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-1">
                  {selectedUmkm.foto_pendukung.map((imgUrl, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setPreviewImage(imgUrl)}
                      className="relative group h-28 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 cursor-pointer shadow-sm hover:shadow-md transition-all"
                    >
                      <img 
                        src={imgUrl} 
                        alt={`Pendukung ${idx + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 text-white text-[10px] font-bold">
                        <Maximize2 className="w-4 h-4" />
                        <span>Pratinjau</span>
                      </div>
                      <span className="absolute bottom-1.5 left-1.5 bg-slate-900/80 text-white text-[9px] font-semibold px-2 py-0.5 rounded backdrop-blur-sm">
                        {idx === 0 ? 'NIB / Legalitas' : `Dokumen / Kegiatan ${idx + 1}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Journey & Incubation Story */}
            <div className="flex flex-col gap-2 text-left">
              <span className="text-[10px] text-amber-600 font-extrabold uppercase tracking-wider flex items-center gap-1">
                <Award className="w-4 h-4 text-amber-500 fill-amber-500/20" />
                <span>Kisah Perjalanan & Inkubasi ISBI</span>
              </span>
              <div className="font-sans text-xs sm:text-sm leading-relaxed text-slate-700 text-justify bg-amber-50/20 p-5 rounded-2xl border border-amber-200/80">
                {selectedUmkm.histori_usaha}
              </div>
            </div>

            {/* Action Footer */}
            <div className="border-t border-slate-200 pt-6 mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
              <button 
                onClick={() => { setSelectedUmkm(null); window.scrollTo({ top: 0 }); }}
                className="w-full sm:w-auto px-5 py-2.5 border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-100 cursor-pointer text-xs uppercase"
              >
                Kembali
              </button>
              <a 
                href={`https://wa.me/${selectedUmkm.kontak}?text=Halo%20${encodeURIComponent(selectedUmkm.nama_usaha)}%20binaan%20ISBI%20UMP%2C%20saya%20tertarik%20dengan%20produk%20Anda...`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-6 py-2.5 sm:py-3 rounded-xl transition-all shadow-md shadow-emerald-500/10 flex items-center justify-center gap-1.5 text-xs cursor-pointer uppercase"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Hubungi WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

        {/* Lightbox Image Preview Modal */}
        {previewImage && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setPreviewImage(null)}>
            <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl p-2 overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
              <button 
                onClick={() => setPreviewImage(null)}
                className="absolute top-4 right-4 bg-slate-900/80 hover:bg-slate-900 text-white p-2 rounded-full z-10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <img 
                src={previewImage} 
                alt="Preview Dokumen" 
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        )}

      </div>
    );
  }

  // 2. DIRECTORY DIRECTORY LISTING
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
          {filteredUmkm.map((umkm, idx) => (
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
                    onClick={() => { setSelectedUmkm(umkm); window.scrollTo({ top: 0 }); }}
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
          ))}

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
    </div>
  );
}
