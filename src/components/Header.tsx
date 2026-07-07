import React from 'react';
import { Mail, Phone, MapPin, Briefcase, Award, Compass, LayoutDashboard, Menu, X, Users, Globe } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isAdminLoggedIn: boolean;
  onLogout: () => void;
  onOpenLogin: () => void;
}

export default function Header({ activeTab, setActiveTab, isAdminLoggedIn, onLogout, onOpenLogin }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'profil', label: 'Profil' },
    { id: 'program', label: 'Program' },
    { id: 'berita', label: 'Berita' },
    { id: 'prestasi', label: 'Prestasi' },
    { id: 'galeri', label: 'Galeri' },
    { id: 'umkm', label: 'UMKM Mahasiswa' },
    ...(!isAdminLoggedIn ? [{ id: 'kontak', label: 'Kontak & Daftar' }] : []),
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full flex flex-col z-50 relative font-sans" id="main-header">
      {/* Thin Top Info Bar matching Natural Tones theme */}
      <div className="w-full bg-slate-800 text-white text-[10px] sm:text-[11px] py-1.5 px-4 md:px-8 flex justify-between items-center tracking-wide">
        <div className="flex gap-2 sm:gap-4">
          <span className="flex items-center gap-1">Email: isbi@ump.ac.id</span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="hidden sm:flex items-center gap-1">Telp: (0281) 636751</span>
        </div>
        <div className="flex gap-4 uppercase tracking-wider font-semibold text-[10px] items-center">
          <span className="hidden md:inline text-slate-300">Biro Kemahasiswaan & Alumni (BKA)</span>
          {isAdminLoggedIn && (
            <div className="flex items-center gap-3">
              <button 
                onClick={() => handleNavClick('admin')}
                className={`hover:text-emerald-300 transition-colors uppercase ${activeTab === 'admin' ? 'text-emerald-300 font-bold' : ''}`}
              >
                Dashboard
              </button>
              <span className="text-slate-500">|</span>
              <button 
                onClick={onLogout}
                className="text-rose-300 hover:text-rose-200 uppercase transition-colors"
              >
                Keluar
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Navigation Bar matching Natural Tones height & design */}
      <nav className="w-full bg-white border-b border-slate-200 h-20 px-4 md:px-8 flex justify-between items-center sticky top-0 shadow-sm z-40">
        {/* Brand Logo - Islamic & Entrepreneurship style */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('beranda')}>
          <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center shadow-md shrink-0 border border-slate-100 bg-emerald-50">
            <img 
              src="/isbi-logo.jpg" 
              alt="ISBI UMP Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <h1 className="text-base sm:text-lg font-bold text-slate-800 leading-none tracking-tight">ISBI UMP</h1>
            <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-tighter font-semibold mt-0.5">
              Islamic Student Business Incubator
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-semibold py-1 transition-colors ${
                activeTab === item.id
                  ? 'text-emerald-700 border-b-2 border-emerald-700'
                  : 'text-slate-600 hover:text-emerald-700'
              }`}
              id={`nav-link-${item.id}`}
            >
              {item.label === 'UMKM Mahasiswa' ? 'UMKM' : item.label === 'Kontak & Daftar' ? 'Kontak' : item.label}
            </button>
          ))}
          {isAdminLoggedIn && (
            <button
              onClick={() => handleNavClick('admin')}
              className={`text-sm font-semibold py-1 transition-colors ${
                activeTab === 'admin'
                  ? 'text-emerald-700 border-b-2 border-emerald-700 font-bold'
                  : 'text-emerald-600 hover:text-emerald-700'
              }`}
            >
              Admin Panel
            </button>
          )}
        </div>

        {/* Action Button: admin console trigger */}
        {isAdminLoggedIn && (
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('admin')}
              className="bg-emerald-700 text-white px-4 py-2 rounded-full text-xs font-bold shadow-sm hover:bg-emerald-600 transition-all uppercase"
            >
              Console Admin
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Dropdown Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full bg-white border-b border-slate-200 py-3 px-4 shadow-md flex flex-col gap-1 z-40 absolute top-[100%] left-0 animate-in fade-in slide-in-from-top-2 duration-200">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === item.id
                  ? 'text-emerald-700 bg-emerald-50'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-700'
              }`}
            >
              {item.label}
            </button>
          ))}
          {isAdminLoggedIn && (
            <div className="border-t border-slate-250 pt-2 mt-2 flex flex-col gap-1">
              <button
                onClick={() => handleNavClick('admin')}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 ${
                  activeTab === 'admin'
                    ? 'text-white bg-emerald-700'
                    : 'text-emerald-700 bg-emerald-50'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard Admin</span>
              </button>
              <button
                onClick={onLogout}
                className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold text-rose-600 hover:bg-rose-50 flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                <span>Keluar</span>
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
