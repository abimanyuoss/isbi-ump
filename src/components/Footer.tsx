import React from 'react';
import { Mail, Phone, MapPin, Globe, Award, Sparkles, Building, BookOpen } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-900 text-slate-400 text-sm border-t border-slate-800 font-sans" id="main-footer">
      {/* Top Footer Sections */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        
        {/* Column 1: About */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-700 p-2 rounded-lg text-white font-bold w-9 h-9 flex items-center justify-center">
              I
            </div>
            <span className="font-display font-bold text-lg text-white tracking-tight">ISBI UMP</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Islamic Student Business Incubator (ISBI) adalah unit inkubasi kewirausahaan mahasiswa di bawah naungan Biro Kemahasiswaan dan Alumni (BKA), Universitas Muhammadiyah Purwokerto. Kami berkomitmen melahirkan pengusaha muda Muslim yang inovatif, mandiri, dan berakhlak mulia.
          </p>
          <div className="flex items-center gap-2.5 mt-2">
            <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 uppercase tracking-wider">
              Unggul & Islami
            </span>
            <span className="text-[11px] text-emerald-400/90 font-semibold bg-white/5 px-2 py-1 rounded border border-white/10 uppercase tracking-wider">
              Muda Berdaya
            </span>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-white tracking-wider uppercase text-xs">Navigasi Cepat</h4>
          <ul className="flex flex-col gap-2.5 text-xs">
            <li>
              <button onClick={() => handleNavClick('beranda')} className="hover:text-emerald-400 transition-colors cursor-pointer text-left">
                Beranda Utama
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('profil')} className="hover:text-emerald-400 transition-colors cursor-pointer text-left">
                Profil & Struktur ISBI
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('program')} className="hover:text-emerald-400 transition-colors cursor-pointer text-left">
                Program Kewirausahaan
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('berita')} className="hover:text-emerald-400 transition-colors cursor-pointer text-left">
                Berita Kegiatan & Prestasi
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('prestasi')} className="hover:text-emerald-400 transition-colors cursor-pointer text-left">
                Prestasi Mahasiswa
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('galeri')} className="hover:text-emerald-400 transition-colors cursor-pointer text-left">
                Galeri Foto Album
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('umkm')} className="hover:text-emerald-400 transition-colors cursor-pointer text-left">
                Direktori UMKM Mahasiswa
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-white tracking-wider uppercase text-xs">Sekretariat ISBI</h4>
          <div className="flex flex-col gap-3 text-xs text-slate-400">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Gedung Serbaguna Lt. 2, Kampus I Ahmad Dahlan, Jl. K.H. Ahmad Dahlan, PO Box 202, Purwokerto 53182, Jawa Tengah
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>(0281) 636751, 630463 ext 234</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
              <a href="mailto:isbi@ump.ac.id" className="hover:text-emerald-400 transition-colors">
                isbi@ump.ac.id
              </a>
            </div>
          </div>
        </div>

        {/* Column 4: Links & Social */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-white tracking-wider uppercase text-xs">Situs Terkait</h4>
          <ul className="flex flex-col gap-2.5 text-xs mb-3">
            <li>
              <a 
                href="https://ump.ac.id" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-emerald-400 transition-colors flex items-center gap-2"
              >
                <Building className="w-3.5 h-3.5 text-emerald-500" />
                <span>Universitas Muhammadiyah Purwokerto</span>
              </a>
            </li>
            <li>
              <a 
                href="https://kemahasiswaan.ump.ac.id" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-emerald-400 transition-colors flex items-center gap-2"
              >
                <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                <span>Biro Kemahasiswaan dan Alumni</span>
              </a>
            </li>
          </ul>

          <h4 className="font-semibold text-white tracking-wider uppercase text-xs">Media Sosial</h4>
          <div className="flex items-center gap-2.5">
            <a 
              href="https://www.instagram.com/isbiump?igsh=aTl2eTF6NDV2ODBp" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-300 p-2 rounded-lg transition-all duration-300 flex items-center justify-center"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-300 p-2 rounded-lg transition-all duration-300 flex items-center justify-center"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Copyright & Credits */}
      <div className="w-full bg-slate-950 border-t border-slate-800/80 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} ISBI UMP • Islamic Student Business Incubator. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1">
            <span>Dikembangkan oleh</span>
            <span className="font-semibold text-emerald-500 hover:text-emerald-400 cursor-pointer">BKA UMP IT Unit</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
