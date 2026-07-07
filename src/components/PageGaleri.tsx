import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Folder, Image as ImageIcon, Calendar, Eye, X, Compass } from 'lucide-react';
import { GaleriAlbum, GaleriFoto } from '../types';

interface PageGaleriProps {
  albums: GaleriAlbum[];
  photos: GaleriFoto[];
}

export default function PageGaleri({ albums, photos }: PageGaleriProps) {
  const [selectedAlbumId, setSelectedAlbumId] = useState<string>('all');
  const [activeLightboxPhoto, setActiveLightboxPhoto] = useState<GaleriFoto | null>(null);

  const isVideoUrl = (url: string) => {
    if (!url) return false;
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.mkv'];
    return videoExtensions.some(ext => url.toLowerCase().endsWith(ext) || url.toLowerCase().includes(ext + '?') || url.toLowerCase().includes(ext + '#'));
  };

  const filteredPhotos = selectedAlbumId === 'all'
    ? photos
    : photos.filter(p => p.album_id === selectedAlbumId);

  return (
    <div className="w-full bg-slate-50 py-12 px-6 md:px-12 text-slate-800 text-left font-sans" id="gallery-page">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* Page Title */}
        <div className="text-center">
          <span className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-widest block mb-2">Dokumentasi Event</span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-800 tracking-tight leading-none mb-4">
            Galeri Kegiatan ISBI UMP
          </h1>
          <p className="text-slate-550 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Melihat kilas dokumentasi kemeriahan expo, kelas pelatihan, booth camp, dan penganugerahan wirausaha mahasiswa binaan Biro Kemahasiswaan dan Alumni UMP.
          </p>
        </div>

        {/* Album Selector Panel */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">Pilih Album Kegiatan</span>
          
          <div className="flex flex-wrap items-center gap-2.5">
            <button 
              onClick={() => setSelectedAlbumId('all')}
              className={`px-4.5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                selectedAlbumId === 'all'
                  ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-500/10'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Compass className="w-4 h-4 shrink-0" />
              <span>Semua Dokumentasi</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${selectedAlbumId === 'all' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                {photos.length}
              </span>
            </button>

            {albums.map((al) => {
              const albumPhotoCount = photos.filter(p => p.album_id === al.id).length;
              return (
                <button 
                  key={al.id}
                  onClick={() => setSelectedAlbumId(al.id)}
                  className={`px-4.5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    selectedAlbumId === al.id
                      ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-500/10'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Folder className="w-4 h-4 shrink-0 text-amber-500" />
                  <span>{al.judul_album}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${selectedAlbumId === al.id ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {albumPhotoCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Album Details Description */}
        {selectedAlbumId !== 'all' && (
          <div className="p-4 sm:p-5 bg-slate-100 border border-slate-200 rounded-xl flex flex-col sm:flex-row justify-between sm:items-center gap-3 text-left">
            <div>
              <span className="text-[9px] font-extrabold text-emerald-700 uppercase tracking-wide">Album Deskripsi:</span>
              <h3 className="font-bold text-slate-800 text-sm mt-0.5">
                {albums.find(a => a.id === selectedAlbumId)?.judul_album}
              </h3>
              <p className="text-[11px] text-slate-500 leading-normal font-sans mt-1">
                {albums.find(a => a.id === selectedAlbumId)?.deskripsi_singkat || 'Dokumentasi resmi unit ISBI di bawah BKA UMP.'}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[10px] shrink-0 self-start sm:self-auto">
              <Calendar className="w-3.5 h-3.5" />
              <span>Tanggal: {albums.find(a => a.id === selectedAlbumId)?.tanggal_kegiatan}</span>
            </div>
          </div>
        )}

        {/* Photos grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              className="relative h-48 rounded-xl overflow-hidden border border-slate-200 shadow-sm group bg-slate-100 cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setActiveLightboxPhoto(photo)}
            >
              {isVideoUrl(photo.url_foto) ? (
                <video 
                  src={photo.url_foto} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 animate-fade-in" 
                  muted 
                  loop 
                  playsInline 
                  autoPlay
                />
              ) : (
                <img 
                  src={photo.url_foto} 
                  alt={photo.keterangan} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              )}
              
              {/* Permanent Bottom Info Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 pt-6 flex flex-col justify-end text-left pointer-events-none z-10">
                <span className="text-[9px] text-emerald-400 font-extrabold uppercase tracking-wide">
                  {albums.find(a => a.id === photo.album_id)?.judul_album || 'Dokumentasi'}
                </span>
                <p className="text-[10px] text-slate-100 leading-snug mt-0.5 font-sans font-medium line-clamp-2">
                  {photo.keterangan}
                </p>
              </div>

              {/* Hover Trigger - Darkens and shows eye expand icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-25">
                <span className="bg-emerald-700/90 text-white p-2.5 rounded-full backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-md">
                  <Eye className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}

          {filteredPhotos.length === 0 && (
            <div className="col-span-2 md:col-span-4 py-16 text-center text-slate-400">
              <ImageIcon className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="text-xs font-sans">Belum ada foto yang diunggah untuk album ini.</p>
            </div>
          )}
        </div>

      </div>

      {/* LIGHTBOX MODAL OVERLAY */}
      {activeLightboxPhoto && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex flex-col justify-center items-center p-4 animate-in fade-in duration-200">
          {/* Close button top right */}
          <button 
            onClick={() => setActiveLightboxPhoto(null)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Full Resolution Image container */}
          <div className="relative max-w-4xl max-h-[75vh] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900 flex justify-center items-center">
            {isVideoUrl(activeLightboxPhoto.url_foto) ? (
              <video 
                src={activeLightboxPhoto.url_foto} 
                className="max-w-full max-h-[75vh] object-contain shadow-2xl rounded-lg" 
                controls 
                autoPlay 
                playsInline
              />
            ) : (
              <img 
                src={activeLightboxPhoto.url_foto} 
                alt={activeLightboxPhoto.keterangan} 
                className="max-w-full max-h-[75vh] object-contain"
                referrerPolicy="no-referrer"
              />
            )}
          </div>

          {/* Caption footer overlay */}
          <div className="max-w-xl text-center mt-6 text-white px-4">
            <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md mb-2 inline-block">
              {albums.find(a => a.id === activeLightboxPhoto.album_id)?.judul_album}
            </span>
            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-medium mt-1">
              {activeLightboxPhoto.keterangan}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
