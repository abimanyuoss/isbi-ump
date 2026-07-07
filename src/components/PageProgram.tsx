import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle, Calendar, Users, Clipboard, HelpCircle, ArrowRight } from 'lucide-react';
import { Program } from '../types';

interface PageProgramProps {
  programs: Program[];
  setActiveTab: (tab: string) => void;
  setPrefilledProgramId: (id: string) => void;
}

export default function PageProgram({ programs, setActiveTab, setPrefilledProgramId }: PageProgramProps) {

  const handleApply = (progId: string) => {
    setPrefilledProgramId(progId);
    setActiveTab('kontak');
    setTimeout(() => {
      const formEl = document.getElementById('contact-form-container');
      if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  return (
    <div className="w-full bg-slate-50 py-12 px-6 md:px-12 text-slate-800 text-left font-sans">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        
        {/* Page Title */}
        <div className="text-center">
          <span className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-widest block mb-2">Kurikulum Pembinaan</span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-800 tracking-tight leading-none mb-4">
            Program Inkubasi Kewirausahaan
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Pilihlah jalur program kewirausahaan yang sesuai dengan tahapan usaha rintisan Anda — mulai dari penyusunan ide hingga pendanaan kompetisi nasional.
          </p>
        </div>

        {/* Programs Listing Container */}
        <div className="flex flex-col gap-8">
          {programs.map((prog, index) => {
            const requirements = prog.syarat.split('\n').filter(line => line.trim().length > 0);

            return (
              <motion.div 
                key={prog.id}
                className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Left Side: Program Details */}
                <div className="lg:col-span-8 flex flex-col justify-between text-left">
                  <div>
                    {/* Header line & status */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-4">
                      <span className={`text-[10px] font-black px-3 py-1 rounded-full border uppercase tracking-wider ${
                        prog.status === 'Pendaftaran Dibuka' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                        prog.status === 'Berjalan Rutin' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                        'bg-slate-100 text-slate-500 border-slate-200'
                      }`}>
                        {prog.status}
                      </span>
                      <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[10px]">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>Batas: {prog.jadwal_selesai}</span>
                      </div>
                    </div>

                    <h2 className="font-bold text-slate-800 text-base sm:text-lg tracking-tight leading-snug mb-3">
                      {prog.nama_program}
                    </h2>

                    <p className="text-slate-500 text-xs leading-relaxed mb-6 font-sans">
                      {prog.deskripsi}
                    </p>

                    {/* Requirements block */}
                    <div className="flex flex-col gap-2.5">
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                        <Clipboard className="w-3.5 h-3.5 text-slate-400" />
                        <span>Syarat & Kualifikasi Peserta</span>
                      </span>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                        {requirements.map((req, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50/60 p-2.5 rounded-lg border border-slate-200">
                            <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                            <span className="leading-tight font-sans text-[11px]">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: CTA Panel Card */}
                <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between items-stretch text-left">
                  <div>
                    <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest block">Akses Layanan</span>
                    <h4 className="font-bold text-slate-800 text-xs sm:text-sm mt-1">Registrasi & Bimbingan</h4>
                    <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                      Layanan pendaftaran dilakukan secara kolektif. Setiap proposal yang masuk akan ditinjau langsung oleh juri inkubasi BKA UMP.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-2.5">
                    {prog.status === 'Pendaftaran Dibuka' ? (
                      <button 
                        onClick={() => handleApply(prog.id)}
                        className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs py-3.5 rounded-xl shadow-md shadow-emerald-500/10 hover:shadow-emerald-450/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-1.5 cursor-pointer uppercase"
                      >
                        <span>Daftar Sekarang</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button 
                        disabled
                        className="w-full bg-slate-200 text-slate-400 font-bold text-xs py-3.5 rounded-xl flex items-center justify-center gap-1.5 cursor-not-allowed"
                      >
                        <span>{prog.status}</span>
                      </button>
                    )}
                    <a 
                      href="https://wa.me/6281235276164?text=Assalamualaikum%20ISBI%20UMP%2C%20saya%20ingin%20bertanya%20seputar%20pendaftaran..."
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs py-3 rounded-xl border border-slate-200 transition-all flex items-center justify-center gap-1 uppercase"
                    >
                      <span>Tanya Narahubung</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Help Banner FAQs */}
        <section className="bg-slate-100 border border-slate-200 p-6 rounded-xl flex flex-col md:flex-row items-center gap-4 text-slate-700">
          <HelpCircle className="w-10 h-10 text-emerald-700 shrink-0" />
          <div className="flex-1 text-left">
            <h4 className="font-bold text-slate-800 text-xs sm:text-sm">Butuh Konsultasi Sebelum Mendaftar?</h4>
            <p className="text-[11px] text-slate-550 mt-1 leading-relaxed font-sans">
              Tim ISBI UMP membuka jam konsultasi tatap muka gratis bagi mahasiswa yang kebingungan merumuskan Business Model Canvas (BMC) di kantor sekretariat Gedung Serbaguna lantai 2.
            </p>
          </div>
          <button 
            onClick={() => setActiveTab('kontak')}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-850 text-white text-xs font-bold rounded-xl shrink-0 transition-colors cursor-pointer uppercase"
          >
            Hubungi Kantor
          </button>
        </section>

      </div>
    </div>
  );
}
