import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Types
import { Program, Berita, UMKM, GaleriAlbum, GaleriFoto, Pendaftaran, Prestasi, ProfilData, Organisasi, HeroSlide } from './types';

// Seed Data
import { 
  PROGRAM_SEED, 
  BERITA_SEED, 
  UMKM_SEED, 
  ALBUM_SEED, 
  FOTO_SEED, 
  PENDAFTARAN_SEED,
  KATEGORI_BERITA_SEED,
  KATEGORI_UMKM_SEED,
  PRESTASI_SEED,
  PROFIL_SEED,
  ORGANISASI_SEED,
  HERO_SEED
} from './data';

// Custom Components
import Header from './components/Header';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import AdminDashboard from './components/AdminDashboard';

// Page Views
import PageBeranda from './components/PageBeranda';
import PageProfil from './components/PageProfil';
import PageProgram from './components/PageProgram';
import PageBerita from './components/PageBerita';
import PageGaleri from './components/PageGaleri';
import PageUMKM from './components/PageUMKM';
import PageKontak from './components/PageKontak';
import PagePrestasi from './components/PagePrestasi';

// Safe helper to read from local storage and prevent JSON parsing errors
function getSafeLocalStorage<T>(key: string, defaultValue: T): T {
  try {
    const CURRENT_DATA_VERSION = 'isbi_v2026_07_22_v6';
    if (localStorage.getItem('isbi_app_data_version') !== CURRENT_DATA_VERSION) {
      try {
        localStorage.removeItem('isbi_umkm');
        localStorage.removeItem('isbi_programs');
        localStorage.removeItem('isbi_berita');
        localStorage.removeItem('isbi_albums');
        localStorage.removeItem('isbi_photos');
        localStorage.setItem('isbi_app_data_version', CURRENT_DATA_VERSION);
      } catch (_) {}
      return defaultValue;
    }

    const saved = localStorage.getItem(key);
    if (!saved) {
      return defaultValue;
    }
    const trimmed = saved.trim();
    if (
      !trimmed ||
      trimmed === 'undefined' || 
      trimmed === 'null' || 
      trimmed === '""' || 
      trimmed === '"undefined"' || 
      trimmed === '"null"' ||
      trimmed === 'null\n' ||
      trimmed === 'undefined\n'
    ) {
      // Clear any bad key to prevent future issues
      try {
        localStorage.removeItem(key);
      } catch (_) {}
      return defaultValue;
    }
    const parsed = JSON.parse(trimmed);
    
    // Safety check: ensure the type of parsed is matching the expected pattern
    if (parsed === null || parsed === undefined) {
      return defaultValue;
    }
    if (typeof parsed !== typeof defaultValue) {
      return defaultValue;
    }
    if (Array.isArray(defaultValue) !== Array.isArray(parsed)) {
      return defaultValue;
    }
    return parsed as T;
  } catch (e) {
    console.warn(`Failed to parse local storage key "${key}", clearing key:`, e);
    try {
      localStorage.removeItem(key);
    } catch (_) {}
    return defaultValue;
  }
}

// Safe helper to write to local storage and prevent saving invalid values like undefined/null
function safeSetLocalStorage<T>(key: string, value: T) {
  if (value === undefined || value === null) {
    try {
      localStorage.removeItem(key);
    } catch (_) {}
    return;
  }
  try {
    const serialized = JSON.stringify(value);
    if (serialized === undefined || serialized === 'undefined' || serialized === 'null' || serialized === '') {
      try {
        localStorage.removeItem(key);
      } catch (_) {}
      return;
    }
    localStorage.setItem(key, serialized);
  } catch (e) {
    console.warn(`Failed to set local storage key "${key}":`, e);
  }
}

export default function App() {
  // --- STATE INITIALIZED WITH SEED DATA (WILL OVERWRITE FROM API ON MOUNT) ---
  const [programs, setPrograms] = useState<Program[]>(PROGRAM_SEED);
  const [beritaList, setBeritaList] = useState<Berita[]>(BERITA_SEED);
  const [umkmList, setUmkmList] = useState<UMKM[]>(UMKM_SEED);
  const [albums, setAlbums] = useState<GaleriAlbum[]>(ALBUM_SEED);
  const [photos, setPhotos] = useState<GaleriFoto[]>(FOTO_SEED);
  const [pendaftaranList, setPendaftaranList] = useState<Pendaftaran[]>(PENDAFTARAN_SEED);
  const [prestasiList, setPrestasiList] = useState<Prestasi[]>(PRESTASI_SEED);
  const [profilData, setProfilData] = useState<ProfilData>(PROFIL_SEED);
  const [organisasiList, setOrganisasiList] = useState<Organisasi[]>(ORGANISASI_SEED);
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>(HERO_SEED);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Active navigation tab
  const [activeTab, setActiveTab] = useState<string>('beranda');
  
  // News detail link target
  const [selectedBerita, setSelectedBerita] = useState<Berita | null>(null);

  // UMKM detail link target
  const [selectedUmkm, setSelectedUmkm] = useState<UMKM | null>(null);

  // Form enrollment target
  const [prefilledProgramId, setPrefilledProgramId] = useState<string>('');

  // Admin authentication session
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return sessionStorage.getItem('isbi_admin_session') === 'true';
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  // --- FETCH ALL DATA FROM API ON MOUNT & CHECK HIDDEN LOGIN TRIGGER ---
  useEffect(() => {
    // 1. Check if hidden login URL parameter is set
    const params = new URLSearchParams(window.location.search);
    if (params.get('portal') === 'isbiadmin') {
      setIsLoginModalOpen(true);
      // Clean up URL parameters so it doesn't show in address bar
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    // 2. Load public database data
    const loadAllData = async () => {
      try {
        const response = await fetch('/api/all-data');
        const res = await response.json();
        if (res.success && res.data) {
          const { programs, berita, umkm, albums, photos, pendaftaran, prestasi, profil, organisasi, heroSlides } = res.data;
          if (programs) setPrograms(programs);
          if (berita) setBeritaList(berita);
          
          if (umkm && Array.isArray(umkm) && umkm.length > 0) {
            // Seed is the source of truth for team names, descriptions, photos
            // Database only provides values for dynamically-added fields or admin edits
            const merged = UMKM_SEED.map(seed => {
              const match = umkm.find((u: UMKM) => u.id === seed.id);
              if (match) {
                return {
                  ...match,    // database first (base layer)
                  ...seed,     // seed overwrites (source of truth for Drive data)
                };
              }
              return seed;
            });
            // Include any UMKM added by admin that aren't in seed
            const extras = umkm.filter((u: UMKM) => !UMKM_SEED.some(s => s.id === u.id));
            setUmkmList([...merged, ...extras]);
          } else {
            setUmkmList(UMKM_SEED);
          }

          if (albums) setAlbums(albums);
          if (photos) setPhotos(photos);
          if (pendaftaran) setPendaftaranList(pendaftaran);
          if (prestasi) setPrestasiList(prestasi);
          if (profil) setProfilData(profil);
          if (organisasi) setOrganisasiList(organisasi);
          if (heroSlides) setHeroSlides(heroSlides);
        }
      } catch (err) {
        console.warn('Gagal mengambil data dari API, menggunakan cadangan LocalStorage/Seed:', err);
        // Fallback ke LocalStorage/Seed
        setPrograms(getSafeLocalStorage('isbi_programs', PROGRAM_SEED));
        setBeritaList(getSafeLocalStorage('isbi_berita', BERITA_SEED));
        setUmkmList(getSafeLocalStorage('isbi_umkm', UMKM_SEED));
        setAlbums(getSafeLocalStorage('isbi_albums', ALBUM_SEED));
        setPhotos(getSafeLocalStorage('isbi_photos', FOTO_SEED));
        setPendaftaranList(getSafeLocalStorage('isbi_pendaftaran', PENDAFTARAN_SEED));
        setPrestasiList(getSafeLocalStorage('isbi_prestasi', PRESTASI_SEED));
        setProfilData(getSafeLocalStorage('isbi_profil', PROFIL_SEED));
        setOrganisasiList(getSafeLocalStorage('isbi_organisasi', ORGANISASI_SEED));
        setHeroSlides(getSafeLocalStorage('isbi_hero_slides', HERO_SEED));
      } finally {
        setIsLoading(false);
      }
    };
    loadAllData();
  }, []);

  // Clear selected views when activeTab changes (e.g. clicking menu item)
  useEffect(() => {
    setSelectedBerita(null);
    setSelectedUmkm(null);
  }, [activeTab]);

  // --- VERIFY SESSION AND FETCH PROTECTED REGISTRATIONS ---
  useEffect(() => {
    const verifyAndLoadAdminData = async () => {
      const token = sessionStorage.getItem('isbi_admin_token');
      if (token) {
        try {
          const verifyRes = await fetch('/api/auth/verify', {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          const verifyData = await verifyRes.json();
          if (verifyRes.ok && verifyData.success) {
            // Load pendaftaran data
            const pendaftaranRes = await fetch('/api/pendaftaran', {
              headers: { 'Authorization': `Bearer ${token}` }
            });
            const pendaftaranData = await pendaftaranRes.json();
            if (pendaftaranRes.ok && pendaftaranData.success && pendaftaranData.data) {
              setPendaftaranList(pendaftaranData.data);
            }
          } else {
            // Sesi kedaluwarsa atau tidak valid, bersihkan
            setIsAdminLoggedIn(false);
            sessionStorage.removeItem('isbi_admin_session');
            sessionStorage.removeItem('isbi_admin_token');
          }
        } catch (err) {
          console.error('Gagal memverifikasi sesi admin:', err);
        }
      }
    };

    if (isAdminLoggedIn) {
      verifyAndLoadAdminData();
    }
  }, [isAdminLoggedIn]);

  // --- WRAPPED SETTERS FOR API SYNCHRONIZATION ---
  const syncToApi = async (table: string, data: any) => {
    try {
      const token = sessionStorage.getItem('isbi_admin_token');
      const response = await fetch(`/api/sync/${table}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        console.error(`Gagal sinkronisasi tabel ${table} ke backend.`);
      }
    } catch (err) {
      console.error(`Gagal melakukan koneksi sinkronisasi ${table}:`, err);
    }
  };

  const setProgramsWithSync: React.Dispatch<React.SetStateAction<Program[]>> = (value) => {
    setPrograms(prev => {
      const next = typeof value === 'function' ? (value as Function)(prev) : value;
      safeSetLocalStorage('isbi_programs', next);
      setTimeout(() => syncToApi('programs', next), 0);
      return next;
    });
  };

  const setBeritaListWithSync: React.Dispatch<React.SetStateAction<Berita[]>> = (value) => {
    setBeritaList(prev => {
      const next = typeof value === 'function' ? (value as Function)(prev) : value;
      safeSetLocalStorage('isbi_berita', next);
      setTimeout(() => syncToApi('berita', next), 0);
      return next;
    });
  };

  const setUmkmListWithSync: React.Dispatch<React.SetStateAction<UMKM[]>> = (value) => {
    setUmkmList(prev => {
      const next = typeof value === 'function' ? (value as Function)(prev) : value;
      safeSetLocalStorage('isbi_umkm', next);
      setTimeout(() => syncToApi('umkm', next), 0);
      return next;
    });
  };

  const setAlbumsWithSync: React.Dispatch<React.SetStateAction<GaleriAlbum[]>> = (value) => {
    setAlbums(prev => {
      const next = typeof value === 'function' ? (value as Function)(prev) : value;
      safeSetLocalStorage('isbi_albums', next);
      setTimeout(() => syncToApi('albums', next), 0);
      return next;
    });
  };

  const setPhotosWithSync: React.Dispatch<React.SetStateAction<GaleriFoto[]>> = (value) => {
    setPhotos(prev => {
      const next = typeof value === 'function' ? (value as Function)(prev) : value;
      safeSetLocalStorage('isbi_photos', next);
      setTimeout(() => syncToApi('photos', next), 0);
      return next;
    });
  };

  const setPendaftaranListWithSync: React.Dispatch<React.SetStateAction<Pendaftaran[]>> = (value) => {
    setPendaftaranList(prev => {
      const next = typeof value === 'function' ? (value as Function)(prev) : value;
      safeSetLocalStorage('isbi_pendaftaran', next);
      setTimeout(() => syncToApi('pendaftaran', next), 0);
      return next;
    });
  };

  const setPrestasiListWithSync: React.Dispatch<React.SetStateAction<Prestasi[]>> = (value) => {
    setPrestasiList(prev => {
      const next = typeof value === 'function' ? (value as Function)(prev) : value;
      safeSetLocalStorage('isbi_prestasi', next);
      setTimeout(() => syncToApi('prestasi', next), 0);
      return next;
    });
  };

  const setProfilDataWithSync: React.Dispatch<React.SetStateAction<ProfilData>> = (value) => {
    setProfilData(prev => {
      const next = typeof value === 'function' ? (value as Function)(prev) : value;
      safeSetLocalStorage('isbi_profil', next);
      setTimeout(() => syncToApi('profil', next), 0);
      return next;
    });
  };

  const setOrganisasiListWithSync: React.Dispatch<React.SetStateAction<Organisasi[]>> = (value) => {
    setOrganisasiList(prev => {
      const next = typeof value === 'function' ? (value as Function)(prev) : value;
      safeSetLocalStorage('isbi_organisasi', next);
      setTimeout(() => syncToApi('organisasi', next), 0);
      return next;
    });
  };

  const setHeroSlidesWithSync: React.Dispatch<React.SetStateAction<HeroSlide[]>> = (value) => {
    setHeroSlides(prev => {
      const next = typeof value === 'function' ? (value as Function)(prev) : value;
      safeSetLocalStorage('isbi_hero_slides', next);
      setTimeout(() => syncToApi('hero', next), 0);
      return next;
    });
  };

  // --- ACTIONS ---
  const handleLoginSuccess = (token: string) => {
    setIsAdminLoggedIn(true);
    sessionStorage.setItem('isbi_admin_session', 'true');
    sessionStorage.setItem('isbi_admin_token', token);
    setActiveTab('admin');
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.removeItem('isbi_admin_session');
    sessionStorage.removeItem('isbi_admin_token');
    if (activeTab === 'admin') {
      setActiveTab('beranda');
    }
  };

  const handleResetData = async () => {
    setPrograms(PROGRAM_SEED);
    setBeritaList(BERITA_SEED);
    setUmkmList(UMKM_SEED);
    setAlbums(ALBUM_SEED);
    setPhotos(FOTO_SEED);
    setPendaftaranList(PENDAFTARAN_SEED);
    setPrestasiList(PRESTASI_SEED);
    setProfilData(PROFIL_SEED);
    setOrganisasiList(ORGANISASI_SEED);
    setHeroSlides(HERO_SEED);
    setSelectedBerita(null);

    // Sync ke API database
    await syncToApi('programs', PROGRAM_SEED);
    await syncToApi('berita', BERITA_SEED);
    await syncToApi('umkm', UMKM_SEED);
    await syncToApi('albums', ALBUM_SEED);
    await syncToApi('photos', FOTO_SEED);
    await syncToApi('pendaftaran', PENDAFTARAN_SEED);
    await syncToApi('prestasi', PRESTASI_SEED);
    await syncToApi('profil', PROFIL_SEED);
    await syncToApi('organisasi', ORGANISASI_SEED);
    await syncToApi('hero', HERO_SEED);

    // Bersihkan LocalStorage
    localStorage.removeItem('isbi_programs');
    localStorage.removeItem('isbi_berita');
    localStorage.removeItem('isbi_umkm');
    localStorage.removeItem('isbi_albums');
    localStorage.removeItem('isbi_photos');
    localStorage.removeItem('isbi_pendaftaran');
    localStorage.removeItem('isbi_prestasi');
    localStorage.removeItem('isbi_profil');
    localStorage.removeItem('isbi_organisasi');
    localStorage.removeItem('isbi_hero_slides');
  };

  // --- DYNAMIC VIEW ROUTER ---
  const renderActiveView = () => {
    switch (activeTab) {
      case 'beranda':
        return (
          <PageBeranda 
            programs={programs}
            beritaList={beritaList}
            umkmList={umkmList}
            photos={photos}
            heroSlides={heroSlides}
            setActiveTab={setActiveTab}
            setSelectedBerita={setSelectedBerita}
          />
        );
      case 'profil':
        return <PageProfil profilData={profilData} organisasiList={organisasiList} />;
      case 'program':
        return (
          <PageProgram 
            programs={programs}
            setActiveTab={setActiveTab}
            setPrefilledProgramId={setPrefilledProgramId}
          />
        );
      case 'berita':
        return (
          <PageBerita 
            beritaList={beritaList}
            kategoriBerita={KATEGORI_BERITA_SEED}
            selectedBerita={selectedBerita}
            setSelectedBerita={setSelectedBerita}
          />
        );
      case 'prestasi':
        return (
          <PagePrestasi 
            prestasiList={prestasiList}
          />
        );
      case 'galeri':
        return (
          <PageGaleri 
            albums={albums}
            photos={photos}
          />
        );
      case 'umkm':
        return (
          <PageUMKM 
            umkmList={umkmList}
            kategoriUMKM={KATEGORI_UMKM_SEED}
            selectedUmkm={selectedUmkm}
            setSelectedUmkm={setSelectedUmkm}
          />
        );
      case 'kontak':
        return (
          <PageKontak 
            programs={programs}
            prefilledProgramId={prefilledProgramId}
            setPrefilledProgramId={setPrefilledProgramId}
            pendaftaranList={pendaftaranList}
            setPendaftaranList={setPendaftaranList}
          />
        );
      case 'admin':
        if (!isAdminLoggedIn) {
          // Camouflage page as a clean 404 error if forced URL access
          return (
            <div className="py-24 px-6 text-center max-w-md mx-auto flex flex-col items-center justify-center min-h-[50vh]">
              <h3 className="font-display font-black text-4xl text-slate-300">404</h3>
              <p className="font-bold text-slate-750 text-sm mt-2">Halaman Tidak Ditemukan</p>
              <p className="text-slate-550 text-[11px] mt-1 max-w-xs leading-relaxed">Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.</p>
              <button 
                onClick={() => setActiveTab('beranda')}
                className="mt-6 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
              >
                Kembali ke Beranda
              </button>
            </div>
          );
        }
        return (
          <AdminDashboard 
            programs={programs}
            setPrograms={setProgramsWithSync}
            beritaList={beritaList}
            setBeritaList={setBeritaListWithSync}
            umkmList={umkmList}
            setUmkmList={setUmkmListWithSync}
            albums={albums}
            setAlbums={setAlbumsWithSync}
            photos={photos}
            setPhotos={setPhotosWithSync}
            pendaftaranList={pendaftaranList}
            setPendaftaranList={setPendaftaranListWithSync}
            prestasiList={prestasiList}
            setPrestasiList={setPrestasiListWithSync}
            profilData={profilData}
            setProfilData={setProfilDataWithSync}
            organisasiList={organisasiList}
            setOrganisasiList={setOrganisasiListWithSync}
            heroSlides={heroSlides}
            setHeroSlides={setHeroSlidesWithSync}
            kategoriBerita={KATEGORI_BERITA_SEED}
            kategoriUMKM={KATEGORI_UMKM_SEED}
            onResetData={handleResetData}
          />
        );
      default:
        return (
          <PageBeranda 
            programs={programs} 
            beritaList={beritaList} 
            umkmList={umkmList} 
            photos={photos} 
            heroSlides={heroSlides}
            setActiveTab={setActiveTab} 
            setSelectedBerita={setSelectedBerita} 
          />
        );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 font-sans">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute w-full h-full border-4 border-emerald-100 rounded-full"></div>
          <div className="absolute w-full h-full border-4 border-emerald-700 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-[10px] text-slate-500 mt-5 font-bold tracking-wider animate-pulse uppercase">Memuat Direktori Kewirausahaan ISBI UMP...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-emerald-500 selection:text-white" id="isbi-ump-app">
      {/* Global Navigation Header */}
      <Header 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isAdminLoggedIn={isAdminLoggedIn}
        onLogout={handleLogout}
        onOpenLogin={() => setIsLoginModalOpen(true)}
      />

      {/* Main Page Stage with elegant enter-fade-in transition */}
      <main className="flex-1 w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + (selectedBerita ? `-${selectedBerita.id}` : '') + (selectedUmkm ? `-${selectedUmkm.id}` : '')}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full h-full"
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Multi-Column Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Admin Login Portal Overlay Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}
