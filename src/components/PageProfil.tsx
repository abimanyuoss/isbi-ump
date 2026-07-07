import React from 'react';
import { Eye, Target, MapPin, Mail, Phone, Map } from 'lucide-react';
import { ProfilData } from '../types';

interface PageProfilProps {
  profilData: ProfilData;
}

export default function PageProfil({ profilData }: PageProfilProps) {
  const isVideoUrl = (url: string) => {
    if (!url) return false;
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.mkv'];
    return videoExtensions.some(ext => url.toLowerCase().endsWith(ext) || url.toLowerCase().includes(ext + '?') || url.toLowerCase().includes(ext + '#'));
  };

  return (
    <div className="w-full bg-[#f8fafc] py-16 px-6 md:px-12 text-[#1e293b] text-left font-sans" id="page-profil-container">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        
        {/* Title Page */}
        <div className="text-left mb-2" id="profil-header">
          <h1 className="font-sans font-black text-3xl sm:text-4xl text-[#032050] tracking-tight leading-none mb-3" id="profil-title">
            Profil ISBI UMP
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl leading-relaxed" id="profil-subtitle">
            Mengenal lebih dekat Pusat Inovasi dan Inkubator Bisnis Universitas Muhammadiyah Purwokerto.
          </p>
        </div>

        {/* Sejarah Singkat Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="sejarah-section">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-left">
            <h2 className="font-sans font-extrabold text-xl sm:text-2xl text-[#032050]" id="sejarah-title">
              {profilData.sejarah_judul || "Sejarah Singkat"}
            </h2>
            <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-sans text-justify" id="sejarah-p1">
              {profilData.sejarah_p1}
            </p>
            {profilData.sejarah_p2 && (
              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-sans text-justify" id="sejarah-p2">
                {profilData.sejarah_p2}
              </p>
            )}
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 w-full" id="sejarah-image-container">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-100">
              {isVideoUrl(profilData.sejarah_foto) ? (
                <video 
                  src={profilData.sejarah_foto} 
                  className="w-full h-full object-cover" 
                  controls 
                  autoPlay 
                  muted 
                  loop
                  playsInline
                  id="sejarah-video"
                />
              ) : (
                <img 
                  src={profilData.sejarah_foto || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"} 
                  alt="ISBI UMP Collaboration Workspace" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  id="sejarah-img"
                />
              )}
            </div>
          </div>
        </div>

        {/* Visi & Misi Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4" id="visimisi-section">
          {/* Visi Card */}
          <div className="bg-white border border-slate-150 p-6 sm:p-8 rounded-2xl shadow-xs flex flex-col items-start text-left gap-4" id="visi-card">
            <div className="w-10 h-10 rounded-full bg-[#032050] flex items-center justify-center text-white shrink-0 shadow-xs" id="visi-badge">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-sans font-black text-lg text-[#032050]" id="visi-title">
              Visi
            </h3>
            <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-sans text-justify animate-fade-in" id="visi-text">
              {profilData.visi_konten}
            </p>
          </div>

          {/* Misi Card */}
          <div className="bg-white border border-slate-150 p-6 sm:p-8 rounded-2xl shadow-xs flex flex-col items-start text-left gap-4" id="misi-card">
            <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-[#032050] shrink-0 shadow-xs" id="misi-badge">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-sans font-black text-lg text-[#032050]" id="misi-title">
              Misi
            </h3>
            <ul className="text-slate-600 text-xs sm:text-[13px] flex flex-col gap-3 font-sans list-disc pl-4 leading-relaxed text-justify" id="misi-list">
              {profilData.misi_list && profilData.misi_list.map((misi, index) => (
                <li key={index} className="animate-fade-in">{misi}</li>
              ))}
              {(!profilData.misi_list || profilData.misi_list.length === 0) && (
                <li>Belum ada misi terdaftar.</li>
              )}
            </ul>
          </div>
        </div>

        {/* Struktur Organisasi Section */}
        <div className="bg-white border border-slate-150 rounded-2xl p-6 sm:p-10 shadow-xs flex flex-col items-center mt-4" id="struktur-section">
          <div className="text-center mb-10" id="struktur-header">
            <h2 className="font-sans font-black text-xl sm:text-2xl text-[#032050] tracking-tight" id="struktur-title">
              Struktur Organisasi
            </h2>
            <p className="text-slate-400 text-xs mt-1" id="struktur-subtitle">
              Hierarki kepengurusan ISBI UMP
            </p>
          </div>

          {/* Org Chart Layout Tree */}
          <div className="flex flex-col items-center w-full" id="org-chart-tree">
            {/* Box 1 - WR III */}
            <div className="bg-[#032050] text-white px-8 py-3.5 rounded-lg text-center w-64 shadow-md flex flex-col gap-0.5" id="node-pimpinan">
              <span className="text-[9px] font-bold text-blue-200 uppercase tracking-widest">Wakil Rektor III</span>
              <span className="text-sm font-black tracking-wide">{profilData.organisasi_pimpinan}</span>
            </div>

            {/* Vertical Line 1 */}
            <div className="w-0.5 h-8 bg-slate-200" id="line-1"></div>

            {/* Box 2 - Kepala BKA */}
            <div className="bg-[#133c70] text-white px-8 py-3.5 rounded-lg text-center w-64 shadow-md flex flex-col gap-0.5" id="node-pengarah">
              <span className="text-[9px] font-bold text-blue-100 uppercase tracking-widest">Kepala BKA</span>
              <span className="text-sm font-black tracking-wide">{profilData.organisasi_pengarah}</span>
            </div>

            {/* Vertical Line 2 */}
            <div className="w-0.5 h-8 bg-slate-200" id="line-2"></div>

            {/* Box 3 - Penanggung Jawab */}
            <div className="bg-[#3b5998] text-white px-8 py-3.5 rounded-lg text-center w-64 shadow-md flex flex-col gap-0.5" id="node-ketua">
              <span className="text-[9px] font-bold text-blue-55 uppercase tracking-widest">Penanggung Jawab</span>
              <span className="text-sm font-black tracking-wide">{profilData.organisasi_ketua}</span>
            </div>

            {/* Vertical Drop Line 3 */}
            <div className="w-0.5 h-8 bg-slate-200" id="line-3"></div>

            {/* Horizontal Branch Line Container with no overhang */}
            <div className="grid grid-cols-3 w-full max-w-2xl relative mt-0" id="branches-container">
              
              {/* Branch 1 - Koord. Inkubasi */}
              <div className="flex flex-col items-center relative" id="branch-inkubasi">
                <div className="absolute right-0 top-0 w-1/2 h-0.5 bg-slate-200"></div>
                <div className="w-0.5 h-6 bg-slate-200"></div>
                <div className="bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg text-center w-full max-w-[170px] shadow-xs hover:border-emerald-500 transition-colors">
                  <span className="text-[11px] font-bold text-slate-700 block">{profilData.organisasi_koord_inkubasi}</span>
                </div>
              </div>

              {/* Branch 2 - Koord. Inovasi */}
              <div className="flex flex-col items-center relative" id="branch-inovasi">
                <div className="absolute left-0 right-0 top-0 h-0.5 bg-slate-200"></div>
                <div className="w-0.5 h-6 bg-slate-200"></div>
                <div className="bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg text-center w-full max-w-[170px] shadow-xs hover:border-emerald-500 transition-colors">
                  <span className="text-[11px] font-bold text-slate-700 block">{profilData.organisasi_koord_inovasi}</span>
                </div>
              </div>

              {/* Branch 3 - Koord. Kemitraan */}
              <div className="flex flex-col items-center relative" id="branch-kemitraan">
                <div className="absolute left-0 top-0 w-1/2 h-0.5 bg-slate-200"></div>
                <div className="w-0.5 h-6 bg-slate-200"></div>
                <div className="bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg text-center w-full max-w-[170px] shadow-xs hover:border-emerald-500 transition-colors">
                  <span className="text-[11px] font-bold text-slate-700 block">{profilData.organisasi_koord_kemitraan}</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Lokasi Kami Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4" id="lokasi-section">
          {/* Left Column Contact details */}
          <div className="flex flex-col gap-6 text-left" id="kontak-info-left">
            <h2 className="font-sans font-black text-xl text-[#032050]" id="lokasi-title">
              Lokasi Kami
            </h2>
            <div className="flex flex-col gap-5" id="lokasi-list">
              {/* Address Row */}
              <div className="flex items-start gap-4" id="address-row">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-800 text-[13px] sm:text-sm">Gedung Inkubator Bisnis UMP</h4>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                    {profilData.kontak_alamat}
                  </p>
                </div>
              </div>

              {/* Email Row */}
              <div className="flex items-center gap-4" id="email-row">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <a href={`mailto:${profilData.kontak_email}`} className="text-slate-600 text-xs sm:text-[13px] font-medium hover:text-emerald-700 transition-colors">
                    {profilData.kontak_email}
                  </a>
                </div>
              </div>

              {/* Phone Row */}
              <div className="flex items-center gap-4" id="phone-row">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <a href={`tel:${profilData.kontak_phone}`} className="text-slate-600 text-xs sm:text-[13px] font-medium hover:text-emerald-700 transition-colors">
                    {profilData.kontak_phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Map Frame */}
          <div className="relative w-full h-64 md:h-full min-h-[240px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-200 shadow-sm" id="map-iframe-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.41829676644!2d109.27151047586523!3d-7.418856692591461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6575cb70d6efbb%3A0xf6a7e0ecde2d854e!2sUniversitas%20Muhammadiyah%20Purwokerto!5e0!3m2!1sid!2sid!4v1719741000000!5m2!1sid!2sid" 
              className="absolute top-0 left-0 w-full h-full border-0" 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps UMP Kampus Ahmad Dahlan"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}
