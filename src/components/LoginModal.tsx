import React, { useState } from 'react';
import { X, Lock, User, AlertCircle, Sparkles } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (token: string) => void;
}

export default function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      if (response.ok && data.success && data.token) {
        onLoginSuccess(data.token);
        onClose();
      } else {
        setError(data.message || 'Username atau Password salah! Gunakan bantuan kredensial di bawah.');
      }
    } catch (err) {
      console.error(err);
      setError('Terjadi kesalahan jaringan saat menghubungi server.');
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200 font-sans text-left">
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xl w-full max-w-md overflow-hidden relative">
        {/* Banner header decoration */}
        <div className="bg-slate-900 p-6 text-white text-left relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-2">
            <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-[10px] text-emerald-400 font-extrabold uppercase tracking-widest">KONSOL ADMINISTRATOR</span>
          </div>
          <h3 className="font-bold text-xl tracking-tight">Login Portal ISBI UMP</h3>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">Masukkan sandi otentikasi BKA UMP untuk mengelola direktori kewirausahaan.</p>
        </div>

        {/* Login Form body */}
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4 text-xs text-left">
          {error && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-850 font-semibold flex items-start gap-2 animate-shake">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <label className="font-bold text-slate-700">Username</label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input 
                type="text"
                required
                value={username}
                onChange={(e) => { setUsername(e.target.value); setError(''); }}
                placeholder="Masukkan username admin..."
                className="w-full pl-9 pr-3.5 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-700"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-bold text-slate-700">Sandi Akses</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input 
                type="password"
                required
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                placeholder="Masukkan password admin..."
                className="w-full pl-9 pr-3.5 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-700"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl transition-all shadow-md shadow-emerald-500/10 hover:scale-[1.01] mt-2 cursor-pointer flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-wide"
          >
            <span>Masuk Konsol Admin</span>
          </button>

          {/* Testing help box (only visible in dev mode) */}
          {import.meta.env.DEV && (
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl mt-2 flex flex-col gap-1 text-[11px] text-slate-500 leading-normal">
              <div className="flex items-center gap-1 font-bold text-emerald-800 text-xs mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Kredensial Pengujian</span>
              </div>
              <p>Untuk memudahkan pengujian fungsionalitas panel admin:</p>
              <div className="grid grid-cols-2 bg-white border border-slate-200 p-2 rounded-lg font-mono mt-1 text-[10px] text-slate-600">
                <div>Username: <span className="font-bold text-slate-800">admin</span></div>
                <div>Password: <span className="font-bold text-slate-800">admin123</span></div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
