import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Send, ShieldCheck, Sparkles, CheckCircle2, ExternalLink, MessageSquare, Mail, Calendar, Upload, FileText, X } from 'lucide-react';
import { Program, Pendaftaran } from '../types';
import ContactMap from './ContactMap';

interface PageKontakProps {
  programs: Program[];
  prefilledProgramId: string;
  setPrefilledProgramId: (id: string) => void;
  pendaftaranList: Pendaftaran[];
  setPendaftaranList: React.Dispatch<React.SetStateAction<Pendaftaran[]>>;
}

export default function PageKontak({
  programs,
  prefilledProgramId,
  setPrefilledProgramId,
  pendaftaranList,
  setPendaftaranList
}: PageKontakProps) {
  // Form state fields
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [noHp, setNoHp] = useState('');
  const [programId, setProgramId] = useState('umum');
  const [pesan, setPesan] = useState('');
  const [fileProposal, setFileProposal] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Interaction success state
  const [showSuccess, setShowSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Sync pre-filled program if set by clicking "Daftar" on another page
  useEffect(() => {
    if (prefilledProgramId) {
      setProgramId(prefilledProgramId);
    }
  }, [prefilledProgramId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');
    
    if (!nama.trim() || !email.trim() || !noHp.trim() || !pesan.trim()) {
      setValidationError('Mohon lengkapi seluruh kolom formulir yang wajib diisi!');
      return;
    }

    // Validate Indonesian mobile phone format (08xxx or 62xxx)
    const cleanedPhone = noHp.trim().replace(/[\s-]/g, '');
    if (!/^(08|62|\+62)\d{8,11}$/.test(cleanedPhone)) {
      setValidationError('Format nomor HP/WhatsApp tidak valid. Harus diawali 08 atau 62 (minimal 10 digit angka).');
      return;
    }

    // Upload file proposal first (if selected)
    let fileProposalUrl: string | undefined = undefined;
    if (fileProposal) {
      setIsUploading(true);
      try {
        const reader = new FileReader();
        const fileData: string = await new Promise((resolve, reject) => {
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(fileProposal);
        });

        const uploadRes = await fetch('/api/upload-public', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fileName: fileProposal.name, fileData })
        });
        const uploadData = await uploadRes.json();
        if (uploadRes.ok && uploadData.success) {
          fileProposalUrl = uploadData.url;
        } else {
          setIsUploading(false);
          setValidationError(uploadData.error || 'Gagal mengunggah berkas proposal.');
          return;
        }
      } catch (err) {
        setIsUploading(false);
        setValidationError('Terjadi kesalahan saat mengunggah berkas proposal.');
        return;
      }
      setIsUploading(false);
    }

    // Prepare new registration
    const newReg: Pendaftaran = {
      id: 'reg-' + Date.now(),
      program_id: programId,
      nama: nama.trim(),
      email: email.trim(),
      no_hp: noHp.trim(),
      pesan: pesan.trim(),
      file_proposal: fileProposalUrl,
      status: 'Masuk',
      tanggal_masuk: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };

    try {
      const response = await fetch('/api/pendaftaran', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReg)
      });
      const data = await response.json();
      if (response.ok && data.success) {
        // Save to global list
        setPendaftaranList(prev => [newReg, ...prev]);

        // Reset fields & trigger success state
        setNama('');
        setEmail('');
        setNoHp('');
        setProgramId('umum');
        setPrefilledProgramId('');
        setPesan('');
        setFileProposal(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
        setValidationError('');
        setShowSuccess(true);
        
        setTimeout(() => {
          setShowSuccess(false);
        }, 8000);
      } else {
        setValidationError(data.error || 'Gagal mengirim pendaftaran ke server.');
      }
    } catch (err) {
      console.error(err);
      setValidationError('Terjadi kesalahan jaringan saat mengirim pendaftaran.');
    }
  };

  return (
    <div className="w-full bg-slate-50 text-slate-800 text-left font-sans" id="contact-and-registration-page">
      
      {/* 1. Form Section */}
      <section className="py-12 px-6 md:px-12" id="contact-form-container">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          
          {/* Header titles */}
          <div className="text-center">
            <span className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-widest block mb-2">Formulir Terpadu</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-800 tracking-tight leading-none mb-4">
              Pendaftaran & Hubungi Kami
            </h1>
            <p className="text-slate-650 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-sans">
              Ajukan pendaftaran kelompok usaha Anda untuk program inkubasi/hibah, atau ajukan pertanyaan konsultasi seputar wirausaha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Description helper cards */}
            <div className="md:col-span-5 flex flex-col gap-4 text-left">
              <div className="bg-slate-900 text-white p-6 rounded-xl shadow-md border border-slate-800 flex flex-col justify-between h-48">
                <div>
                  <Sparkles className="w-6 h-6 text-emerald-400 mb-3" />
                  <h3 className="font-bold text-sm tracking-tight">Kualifikasi Proposal</h3>
                  <p className="text-[11px] text-slate-300 leading-relaxed font-sans mt-1">
                    Seluruh proposal P2MW atau berkas Kelas Dasar yang masuk akan direview langsung oleh Komite Inkubator ISBI BKA UMP.
                  </p>
                </div>
                <span className="text-[9px] text-emerald-400 font-mono tracking-wide mt-2">BKA_UMP_REGISTRATION_GATEWAY</span>
              </div>

              <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
                <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block">Jam Layanan Kantor</span>
                <span className="font-bold text-slate-800 text-sm mt-1 block">08:00 — 15:30 WIB</span>
                <p className="text-[11px] text-slate-650 mt-1.5 leading-relaxed font-sans">
                  Pelayanan konsultasi fisik, pengumpulan berkas fisik proposal, serta wawancara kelayakan tenant inkubasi di kantor UMP Kampus I.
                </p>
              </div>

              {/* Unduh Panduan & Proposal resmi */}
              <div className="bg-emerald-50/70 border border-emerald-200 p-5 rounded-xl shadow-sm">
                <span className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-wider block">Unduh Panduan</span>
                <span className="font-bold text-slate-800 text-sm mt-1 block">Template Proposal Resmi P2MW</span>
                <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed font-sans">
                  Unduh formulir format proposal wirausaha dan panduan administrasi Inkubator ISBI UMP.
                </p>
                <a 
                  href="https://drive.google.com/drive/folders/1U6DyReOacHe9Zbl-dcPnupZuMiEORSAX" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-3.5 w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-center py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 text-[10px] uppercase cursor-pointer shadow-sm hover:shadow-md"
                >
                  <span>Buka GDrive Panduan</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Form column */}
            <div className="md:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
              
              {showSuccess ? (
                <div className="py-12 px-4 flex flex-col items-center justify-center text-center gap-4 animate-in zoom-in-95 duration-300">
                  <div className="bg-emerald-50 text-emerald-700 p-4 rounded-full border border-emerald-100 shadow-md">
                    <CheckCircle2 className="w-10 h-10 text-emerald-700" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-base sm:text-lg tracking-tight">Registrasi Berhasil Terkirim!</h3>
                  <p className="text-slate-650 text-xs leading-relaxed font-sans max-w-sm">
                    Syukurlah! Proposal / pesan Anda telah masuk ke sistem antrian admin ISBI BKA UMP. Kami akan meninjau dan menghubungi Anda kembali melalui WhatsApp/Email.
                  </p>
                  <button 
                    onClick={() => setShowSuccess(false)}
                    className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-sm transition-all animate-pulse"
                  >
                    Kirim Formulir Baru
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs text-left">
                  
                  {validationError && (
                    <div className="p-3 bg-rose-50 border border-rose-200 text-rose-850 rounded-lg font-medium leading-relaxed">
                      {validationError}
                    </div>
                  )}

                  {/* Select Program */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-slate-700">Tujuan Formulir / Pilih Program *</label>
                    <select 
                      value={programId}
                      onChange={(e) => setProgramId(e.target.value)}
                      className="w-full p-3 border border-slate-200 rounded-xl bg-white text-xs text-slate-700 focus:outline-none focus:border-emerald-700"
                    >
                      <option value="umum">Pertanyaan Umum (Konsultasi Layanan)</option>
                      {programs.map((p) => (
                        <option key={p.id} value={p.id}>Pendaftaran: {p.nama_program}</option>
                      ))}
                    </select>
                  </div>

                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-slate-700">Nama Lengkap Mahasiswa *</label>
                    <input 
                      type="text"
                      required
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="Ketik nama lengkap Anda..."
                      className="w-full p-3 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-700"
                    />
                  </div>

                  {/* Grid Email and HP */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-bold text-slate-700">Alamat Email Aktif *</label>
                      <input 
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="contoh@webmail.com"
                        className="w-full p-3 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-700"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-bold text-slate-700">No. HP / WhatsApp (Aktif) *</label>
                      <input 
                        type="tel"
                        required
                        value={noHp}
                        onChange={(e) => setNoHp(e.target.value)}
                        placeholder="08123456789"
                        className="w-full p-3 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-700 font-mono"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-slate-700">
                      {programId === 'umum' ? 'Pesan / Pertanyaan Konsultasi *' : 'Deskripsi Usaha & Rencana Proposal Anda *'}
                    </label>
                    <textarea 
                      rows={5}
                      required
                      value={pesan}
                      onChange={(e) => setPesan(e.target.value)}
                      placeholder={programId === 'umum' 
                        ? 'Tulis pesan pertanyaan konsultasi Anda di sini...' 
                        : 'Ceritakan deskripsi singkat tentang rencana bisnis Anda, nama tim, kategori usaha, dan ringkasan proposal...'
                      }
                      className="w-full p-3 border border-slate-200 rounded-xl text-xs font-sans focus:outline-none focus:border-emerald-700 resize-y leading-relaxed"
                    ></textarea>
                  </div>

                  {/* File Proposal Upload (opsional) */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-slate-700 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-emerald-700" />
                      Unggah Berkas Proposal / Dokumen Pendukung
                      <span className="text-[9px] text-slate-400 font-normal">(Opsional, maks 5MB)</span>
                    </label>
                    <div className="relative">
                      <input 
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null;
                          if (file && file.size > 5 * 1024 * 1024) {
                            setValidationError('Ukuran berkas melebihi batas maksimum 5MB!');
                            e.target.value = '';
                            return;
                          }
                          setFileProposal(file);
                          setValidationError('');
                        }}
                        className="hidden"
                        id="file-proposal-input"
                      />
                      <label
                        htmlFor="file-proposal-input"
                        className="w-full p-3 border-2 border-dashed border-slate-200 rounded-xl text-xs cursor-pointer hover:border-emerald-500 hover:bg-emerald-50/30 transition-all flex items-center gap-2"
                      >
                        <Upload className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-500">
                          {fileProposal ? '' : 'Klik untuk memilih berkas (PDF, Word, atau Gambar)...'}
                        </span>
                      </label>
                      {fileProposal && (
                        <div className="mt-2 flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
                          <FileText className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                          <span className="text-xs text-emerald-800 font-medium truncate flex-1">{fileProposal.name}</span>
                          <span className="text-[9px] text-emerald-600 flex-shrink-0">{(fileProposal.size / 1024).toFixed(0)} KB</span>
                          <button
                            type="button"
                            onClick={() => {
                              setFileProposal(null);
                              if (fileInputRef.current) fileInputRef.current.value = '';
                            }}
                            className="p-0.5 hover:bg-emerald-200 rounded text-emerald-700 cursor-pointer"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isUploading}
                    className={`w-full ${isUploading ? 'bg-slate-400 cursor-wait' : 'bg-emerald-700 hover:bg-emerald-600 cursor-pointer'} text-white font-bold py-3.5 rounded-xl shadow-md shadow-emerald-500/10 hover:shadow-emerald-400/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-1.5 mt-2 uppercase text-[10px]`}
                  >
                    {isUploading ? (
                      <>
                        <svg className="animate-spin w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                          <path d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor" className="opacity-75" />
                        </svg>
                        <span>Mengunggah berkas...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Kirim Formulir Sekarang</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-2 justify-center mt-3 text-slate-400 text-[10px]">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>Keamanan data Anda terjamin oleh BKA UMP Privacy Standard.</span>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* 2. Contact Map & WhatsApp Hotlines Component */}
      <ContactMap />

    </div>
  );
}
