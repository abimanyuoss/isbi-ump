import React from 'react';
import { motion } from 'motion/react';
import { Award, Store, Newspaper, Image, ClipboardList, Trophy } from 'lucide-react';

interface QuickAccessProps {
  onItemClick: (tabId: string) => void;
}

export default function QuickAccess({ onItemClick }: QuickAccessProps) {
  const items = [
    {
      id: 'program',
      label: 'Program',
      sub: 'Inkubasi & Kelas Bisnis',
      color: 'from-emerald-600 to-emerald-800',
      icon: Award,
    },
    {
      id: 'umkm',
      label: 'UMKM',
      sub: 'Direktori Usaha Mahasiswa',
      color: 'from-emerald-700 to-emerald-950',
      icon: Store,
    },
    {
      id: 'berita',
      label: 'Berita',
      sub: 'Kegiatan Inkubasi BKA',
      color: 'from-slate-700 to-slate-800',
      icon: Newspaper,
    },
    {
      id: 'prestasi',
      label: 'Prestasi',
      sub: 'Penghargaan & Juara',
      color: 'from-amber-500 to-amber-700',
      icon: Trophy,
    },
    {
      id: 'galeri',
      label: 'Galeri',
      sub: 'Dokumentasi & Event',
      color: 'from-teal-600 to-teal-800',
      icon: Image,
    },
    {
      id: 'kontak',
      label: 'Daftar Program',
      sub: 'Formulir Registrasi Usaha',
      color: 'from-emerald-700 to-teal-700',
      icon: ClipboardList,
    },
  ];

  const handleNav = (id: string) => {
    onItemClick(id);
  };

  return (
    <div className="w-full bg-slate-50 border-y border-slate-200 py-10 px-6 md:px-12" id="quick-access-section">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Title */}
        <p className="text-[10px] text-emerald-700 uppercase tracking-widest font-extrabold mb-2 text-center">Akses Layanan Cepat</p>
        <h2 className="font-display font-bold text-2xl text-slate-800 tracking-tight text-center mb-8">Layanan Inkubasi Kewirausahaan Mahasiswa</h2>
        
        {/* Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 w-full">
          {items.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="group relative flex flex-col items-center text-center bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer w-full"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                {/* Colored Icon Circle */}
                <div className={`p-3.5 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-sm group-hover:scale-110 transition-transform duration-300 mb-4`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                
                {/* Labels */}
                <h3 className="font-bold text-slate-800 text-sm group-hover:text-emerald-700 transition-colors">
                  {item.label}
                </h3>
                <p className="text-[10px] text-slate-400 font-medium leading-relaxed mt-1">
                  {item.sub}
                </p>

                {/* Micro accent dot */}
                <span className="absolute bottom-3 w-1.5 h-1.5 bg-emerald-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
