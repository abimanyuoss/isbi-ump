import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Newspaper, 
  Award, 
  Store, 
  Image as ImageIcon, 
  Inbox, 
  Plus, 
  Edit2, 
  Trash2, 
  Save, 
  X, 
  Eye, 
  Search, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCw,
  FolderPlus,
  Compass,
  Upload,
  FileText,
  Download
} from 'lucide-react';
import { 
  Program, 
  Berita, 
  UMKM, 
  GaleriAlbum, 
  GaleriFoto, 
  Pendaftaran, 
  KategoriBerita, 
  KategoriUMKM,
  ProgramStatus,
  PendaftaranStatus,
  Prestasi,
  ProfilData,
  Organisasi,
  HeroSlide
} from '../types';

interface AdminDashboardProps {
  programs: Program[];
  setPrograms: React.Dispatch<React.SetStateAction<Program[]>>;
  beritaList: Berita[];
  setBeritaList: React.Dispatch<React.SetStateAction<Berita[]>>;
  umkmList: UMKM[];
  setUmkmList: React.Dispatch<React.SetStateAction<UMKM[]>>;
  albums: GaleriAlbum[];
  setAlbums: React.Dispatch<React.SetStateAction<GaleriAlbum[]>>;
  photos: GaleriFoto[];
  setPhotos: React.Dispatch<React.SetStateAction<GaleriFoto[]>>;
  pendaftaranList: Pendaftaran[];
  setPendaftaranList: React.Dispatch<React.SetStateAction<Pendaftaran[]>>;
  prestasiList: Prestasi[];
  setPrestasiList: React.Dispatch<React.SetStateAction<Prestasi[]>>;
  profilData: ProfilData;
  setProfilData: React.Dispatch<React.SetStateAction<ProfilData>>;
  organisasiList: Organisasi[];
  setOrganisasiList: React.Dispatch<React.SetStateAction<Organisasi[]>>;
  heroSlides: HeroSlide[];
  setHeroSlides: React.Dispatch<React.SetStateAction<HeroSlide[]>>;
  kategoriBerita: KategoriBerita[];
  kategoriUMKM: KategoriUMKM[];
  onResetData: () => void;
}

type SubTab = 'overview' | 'berita' | 'program' | 'umkm' | 'galeri' | 'pesan' | 'prestasi' | 'profil' | 'banner';

export default function AdminDashboard({
  programs, setPrograms,
  beritaList, setBeritaList,
  umkmList, setUmkmList,
  albums, setAlbums,
  photos, setPhotos,
  pendaftaranList, setPendaftaranList,
  prestasiList, setPrestasiList,
  profilData, setProfilData,
  organisasiList, setOrganisasiList,
  heroSlides, setHeroSlides,
  kategoriBerita,
  kategoriUMKM,
  onResetData
}: AdminDashboardProps) {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Notification states
  const [alertMsg, setAlertMsg] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const showAlert = (text: string, type: 'success' | 'error' = 'success') => {
    setAlertMsg({ type, text });
    setTimeout(() => setAlertMsg(null), 4000);
  };

  // Media Upload State & Helper
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleFileUpload = async (file: File): Promise<string | null> => {
    setIsUploading(true);
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = async () => {
        try {
          const response = await fetch('/api/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              fileName: file.name,
              fileData: reader.result
            })
          });
          const res = await response.json();
          if (res.success && res.url) {
            resolve(res.url);
          } else {
            showAlert(res.error || 'Gagal mengunggah file', 'error');
            resolve(null);
          }
        } catch (err) {
          console.error('Upload error:', err);
          showAlert('Koneksi upload terputus', 'error');
          resolve(null);
        } finally {
          setIsUploading(false);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  // --- FORM STATES ---
  // Berita Form
  const [isBeritaFormOpen, setIsBeritaFormOpen] = useState(false);
  const [editingBerita, setEditingBerita] = useState<Berita | null>(null);
  const [beritaFormData, setBeritaFormData] = useState({
    judul: '',
    kategori_id: kategoriBerita[0]?.id || '',
    konten: '',
    foto_sampul: '',
    status: 'Draft' as 'Draft' | 'Terbit',
  });

  // Program Form
  const [isProgramFormOpen, setIsProgramFormOpen] = useState(false);
  const [editingProgram, setEditingProgram] = useState<Program | null>(null);
  const [programFormData, setProgramFormData] = useState({
    nama_program: '',
    deskripsi: '',
    syarat: '',
    jadwal_mulai: '',
    jadwal_selesai: '',
    status: 'Pendaftaran Dibuka' as ProgramStatus,
  });

  // UMKM Form
  const [isUmkmFormOpen, setIsUmkmFormOpen] = useState(false);
  const [editingUmkm, setEditingUmkm] = useState<UMKM | null>(null);
  const [umkmFormData, setUmkmFormData] = useState({
    nama_usaha: '',
    nama_mahasiswa: '',
    program_studi: '',
    kategori_id: kategoriUMKM[0]?.id || '',
    deskripsi: '',
    histori_usaha: '',
    foto_produk: '',
    foto_pendukung: '',
    kontak: '',
    status: 'Aktif',
  });

  // Album & Photo Form
  const [isAlbumFormOpen, setIsAlbumFormOpen] = useState(false);
  const [editingAlbum, setEditingAlbum] = useState<GaleriAlbum | null>(null);
  const [albumFormData, setAlbumFormData] = useState({
    judul_album: '',
    tanggal_kegiatan: '',
    deskripsi_singkat: '',
  });

  // Custom Confirm Dialog State
  const [confirmDialog, setConfirmDialog] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    confirmText?: string;
    onConfirm: () => void;
  }>({
    isOpen: false,
    title: '',
    message: '',
    confirmText: 'Hapus Permanen',
    onConfirm: () => {}
  });

  const [selectedAlbumIdForPhotos, setSelectedAlbumIdForPhotos] = useState<string>('');
  const [newPhotoUrl, setNewPhotoUrl] = useState('');
  const [newPhotoKeterangan, setNewPhotoKeterangan] = useState('');

  // --- NEW: PRESTASI & PROFIL FORM STATES ---
  const [isPrestasiFormOpen, setIsPrestasiFormOpen] = useState(false);
  const [editingPrestasi, setEditingPrestasi] = useState<Prestasi | null>(null);
  const [prestasiFormData, setPrestasiFormData] = useState({
    judul: '',
    tim_usaha: '',
    nama_mahasiswa: '',
    tingkat: 'Nasional' as 'Nasional' | 'Regional' | 'Internasional' | 'Lokal',
    tahun: '',
    peringkat: '',
    penyelenggara: '',
    deskripsi: '',
    foto_prestasi: '',
  });

  const [profilFormData, setProfilFormData] = useState<ProfilData>({ ...profilData });

  React.useEffect(() => {
    setProfilFormData({ ...profilData });
  }, [profilData]);

  // Kelola Organisasi CRUD states
  const [isOrgFormOpen, setIsOrgFormOpen] = useState<boolean>(false);
  const [editingOrg, setEditingOrg] = useState<any | null>(null);
  const [orgFormData, setOrgFormData] = useState({
    id: '',
    nama: '',
    jabatan: '',
    foto: '',
    urutan: 1
  });

  const handleOpenOrgForm = (member?: any) => {
    if (member) {
      setEditingOrg(member);
      setOrgFormData({
        id: member.id,
        nama: member.nama,
        jabatan: member.jabatan,
        foto: member.foto,
        urutan: member.urutan
      });
    } else {
      setEditingOrg(null);
      setOrgFormData({
        id: 'org-' + Date.now(),
        nama: '',
        jabatan: '',
        foto: '',
        urutan: organisasiList.length + 1
      });
    }
    setIsOrgFormOpen(true);
  };

  const handleSaveOrg = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingOrg) {
      // Edit mode
      const updated = organisasiList.map(item => item.id === editingOrg.id ? { ...orgFormData } : item);
      setOrganisasiList(updated);
      showAlert('Anggota organisasi berhasil diperbarui!');
    } else {
      // Add mode
      const updated = [...organisasiList, { ...orgFormData }];
      setOrganisasiList(updated);
      showAlert('Anggota organisasi baru berhasil ditambahkan!');
    }
    setIsOrgFormOpen(false);
  };

  const handleDeleteOrg = (id: string) => {
    setConfirmDialog({
      isOpen: true,
      title: 'Hapus Anggota Organisasi',
      message: 'Apakah Anda yakin ingin menghapus anggota organisasi ini dari profil?',
      confirmText: 'Hapus Anggota',
      onConfirm: () => {
        const updated = organisasiList.filter(item => item.id !== id);
        setOrganisasiList(updated);
        showAlert('Anggota organisasi berhasil dihapus!');
      }
    });
  };

  // Kelola Banner CRUD states
  const [isBannerFormOpen, setIsBannerFormOpen] = useState<boolean>(false);
  const [editingBanner, setEditingBanner] = useState<HeroSlide | null>(null);
  const [bannerFormData, setBannerFormData] = useState<Omit<HeroSlide, 'urutan'>>({
    id: '',
    title: '',
    subtitle: '',
    ctaText: '',
    ctaTab: 'kontak',
    secondaryText: '',
    secondaryTab: 'program',
    image: '',
    badge: '',
    gradient: 'from-[#032050] via-[#032050]/80 to-transparent'
  });

  const handleOpenBannerForm = (slide?: HeroSlide) => {
    if (slide) {
      setEditingBanner(slide);
      setBannerFormData({
        id: slide.id,
        title: slide.title,
        subtitle: slide.subtitle,
        ctaText: slide.ctaText || '',
        ctaTab: slide.ctaTab || 'kontak',
        secondaryText: slide.secondaryText || '',
        secondaryTab: slide.secondaryTab || 'program',
        image: slide.image || '',
        badge: slide.badge || '',
        gradient: slide.gradient || 'from-[#032050] via-[#032050]/80 to-transparent'
      });
    } else {
      setEditingBanner(null);
      setBannerFormData({
        id: 'hero-' + Date.now(),
        title: '',
        subtitle: '',
        ctaText: '',
        ctaTab: 'kontak',
        secondaryText: '',
        secondaryTab: 'program',
        image: '',
        badge: '',
        gradient: 'from-[#032050] via-[#032050]/80 to-transparent'
      });
    }
    setIsBannerFormOpen(true);
  };

  const handleSaveBanner = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bannerFormData.title) {
      showAlert('Judul banner wajib diisi!', 'error');
      return;
    }
    
    if (editingBanner) {
      // Edit existing
      setHeroSlides(prev => {
        const updated = prev.map(s => s.id === editingBanner.id ? { ...s, ...bannerFormData } : s);
        return updated;
      });
      showAlert('Slide banner berhasil diperbarui!');
    } else {
      // Add new
      const newSlide: HeroSlide = {
        ...bannerFormData,
        urutan: heroSlides.length + 1
      };
      setHeroSlides(prev => [...prev, newSlide]);
      showAlert('Slide banner baru berhasil ditambahkan!');
    }
    setIsBannerFormOpen(false);
  };

  const handleDeleteBanner = (id: string) => {
    setConfirmDialog({
      isOpen: true,
      title: 'Hapus Slide Banner?',
      message: 'Apakah Anda yakin ingin menghapus slide banner ini secara permanen dari halaman beranda?',
      confirmText: 'Ya, Hapus',
      onConfirm: () => {
        setHeroSlides(prev => {
          const filtered = prev.filter(s => s.id !== id);
          // Re-index order
          return filtered.map((s, index) => ({ ...s, urutan: index + 1 }));
        });
        showAlert('Slide banner berhasil dihapus.');
      }
    });
  };

  const handleMoveBannerOrder = (index: number, direction: 'up' | 'down') => {
    const nextIndex = direction === 'up' ? index - 1 : index + 1;
    if (nextIndex < 0 || nextIndex >= heroSlides.length) return;

    const list = [...heroSlides];
    const temp = list[index];
    list[index] = list[nextIndex];
    list[nextIndex] = temp;

    // Re-index order
    const reordered = list.map((item, idx) => ({
      ...item,
      urutan: idx + 1
    }));
    setHeroSlides(reordered);
    showAlert('Urutan slide banner berhasil diperbarui.');
  };

  // --- BERITA CRUD ---
  const handleOpenBeritaForm = (berita?: Berita) => {
    if (berita) {
      setEditingBerita(berita);
      setBeritaFormData({
        judul: berita.judul,
        kategori_id: berita.kategori_id,
        konten: berita.konten,
        foto_sampul: berita.foto_sampul,
        status: berita.status,
      });
    } else {
      setEditingBerita(null);
      setBeritaFormData({
        judul: '',
        kategori_id: kategoriBerita[0]?.id || '',
        konten: '',
        foto_sampul: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
        status: 'Draft',
      });
    }
    setIsBeritaFormOpen(true);
  };

  const handleSaveBerita = (e: React.FormEvent) => {
    e.preventDefault();
    if (!beritaFormData.judul.trim() || !beritaFormData.konten.trim()) {
      showAlert('Judul dan Konten berita wajib diisi!', 'error');
      return;
    }

    if (editingBerita) {
      setBeritaList(prev => prev.map(b => b.id === editingBerita.id ? {
        ...b,
        judul: beritaFormData.judul,
        kategori_id: beritaFormData.kategori_id,
        konten: beritaFormData.konten,
        foto_sampul: beritaFormData.foto_sampul,
        status: beritaFormData.status,
        slug: beritaFormData.judul.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
      } : b));
      showAlert('Berita berhasil diperbarui');
    } else {
      const newBerita: Berita = {
        id: 'news-' + Date.now(),
        admin_id: 'admin-1',
        kategori_id: beritaFormData.kategori_id,
        judul: beritaFormData.judul,
        slug: beritaFormData.judul.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
        konten: beritaFormData.konten,
        foto_sampul: beritaFormData.foto_sampul || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
        status: beritaFormData.status,
        tanggal_terbit: new Date().toISOString().split('T')[0]
      };
      setBeritaList(prev => [newBerita, ...prev]);
      showAlert('Berita baru berhasil ditambahkan');
    }
    setIsBeritaFormOpen(false);
  };

  const handleDeleteBerita = (id: string) => {
    setConfirmDialog({
      isOpen: true,
      title: 'Hapus Artikel Berita',
      message: 'Apakah Anda yakin ingin menghapus artikel berita ini secara permanen dari database?',
      confirmText: 'Hapus Permanen',
      onConfirm: () => {
        setBeritaList(prev => prev.filter(b => b.id !== id));
        showAlert('Berita telah dihapus');
      }
    });
  };

  // --- PROGRAM CRUD ---
  const handleOpenProgramForm = (prog?: Program) => {
    if (prog) {
      setEditingProgram(prog);
      setProgramFormData({
        nama_program: prog.nama_program,
        deskripsi: prog.deskripsi,
        syarat: prog.syarat,
        jadwal_mulai: prog.jadwal_mulai,
        jadwal_selesai: prog.jadwal_selesai,
        status: prog.status,
      });
    } else {
      setEditingProgram(null);
      setProgramFormData({
        nama_program: '',
        deskripsi: '',
        syarat: '',
        jadwal_mulai: new Date().toISOString().split('T')[0],
        jadwal_selesai: new Date(Date.now() + 15*24*60*60*1000).toISOString().split('T')[0],
        status: 'Pendaftaran Dibuka',
      });
    }
    setIsProgramFormOpen(true);
  };

  const handleSaveProgram = (e: React.FormEvent) => {
    e.preventDefault();
    if (!programFormData.nama_program.trim() || !programFormData.deskripsi.trim()) {
      showAlert('Nama program dan deskripsi wajib diisi!', 'error');
      return;
    }

    if (editingProgram) {
      setPrograms(prev => prev.map(p => p.id === editingProgram.id ? {
        ...p,
        nama_program: programFormData.nama_program,
        deskripsi: programFormData.deskripsi,
        syarat: programFormData.syarat,
        jadwal_mulai: programFormData.jadwal_mulai,
        jadwal_selesai: programFormData.jadwal_selesai,
        status: programFormData.status,
      } : p));
      showAlert('Program berhasil diperbarui');
    } else {
      const newProg: Program = {
        id: 'prog-' + Date.now(),
        nama_program: programFormData.nama_program,
        deskripsi: programFormData.deskripsi,
        syarat: programFormData.syarat,
        jadwal_mulai: programFormData.jadwal_mulai,
        jadwal_selesai: programFormData.jadwal_selesai,
        status: programFormData.status,
      };
      setPrograms(prev => [...prev, newProg]);
      showAlert('Program baru berhasil ditambahkan');
    }
    setIsProgramFormOpen(false);
  };

  const handleDeleteProgram = (id: string) => {
    setConfirmDialog({
      isOpen: true,
      title: 'Hapus Program Inkubasi',
      message: 'Apakah Anda yakin ingin menghapus program ini? Menghapus program tidak akan menghapus berkas pendaftaran yang sudah masuk.',
      confirmText: 'Hapus Permanen',
      onConfirm: () => {
        setPrograms(prev => prev.filter(p => p.id !== id));
        showAlert('Program telah dihapus');
      }
    });
  };

  // --- UMKM CRUD ---
  const handleOpenUmkmForm = (umkm?: UMKM) => {
    if (umkm) {
      setEditingUmkm(umkm);
      setUmkmFormData({
        nama_usaha: umkm.nama_usaha,
        nama_mahasiswa: umkm.nama_mahasiswa,
        program_studi: umkm.program_studi,
        kategori_id: umkm.kategori_id,
        deskripsi: umkm.deskripsi,
        histori_usaha: umkm.histori_usaha,
        foto_produk: umkm.foto_produk,
        foto_pendukung: umkm.foto_pendukung ? umkm.foto_pendukung.join(', ') : '',
        kontak: umkm.kontak,
        status: umkm.status,
      });
    } else {
      setEditingUmkm(null);
      setUmkmFormData({
        nama_usaha: '',
        nama_mahasiswa: '',
        program_studi: '',
        kategori_id: kategoriUMKM[0]?.id || '',
        deskripsi: '',
        histori_usaha: '',
        foto_produk: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800',
        foto_pendukung: '',
        kontak: '6281234567890',
        status: 'Aktif',
      });
    }
    setIsUmkmFormOpen(true);
  };

  const handleSaveUmkm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!umkmFormData.nama_usaha.trim() || !umkmFormData.nama_mahasiswa.trim() || !umkmFormData.histori_usaha.trim()) {
      showAlert('Nama usaha, nama mahasiswa, dan histori usaha wajib diisi!', 'error');
      return;
    }

    // Clean WhatsApp phone number format
    let cleanedPhone = umkmFormData.kontak.replace(/[^0-9]/g, '');
    if (cleanedPhone.startsWith('0')) {
      cleanedPhone = '62' + cleanedPhone.slice(1);
    }
    if (!cleanedPhone.startsWith('62') && cleanedPhone.length > 0) {
      cleanedPhone = '62' + cleanedPhone;
    }

    const parsedFotoPendukung = umkmFormData.foto_pendukung
      ? umkmFormData.foto_pendukung.split(/[\n,]+/).map(s => s.trim()).filter(Boolean)
      : [];

    if (editingUmkm) {
      setUmkmList(prev => prev.map(u => u.id === editingUmkm.id ? {
        ...u,
        nama_usaha: umkmFormData.nama_usaha,
        nama_mahasiswa: umkmFormData.nama_mahasiswa,
        program_studi: umkmFormData.program_studi,
        kategori_id: umkmFormData.kategori_id,
        deskripsi: umkmFormData.deskripsi,
        histori_usaha: umkmFormData.histori_usaha,
        foto_produk: umkmFormData.foto_produk,
        foto_pendukung: parsedFotoPendukung,
        kontak: cleanedPhone,
        status: umkmFormData.status,
      } : u));
      showAlert('Profil UMKM Mahasiswa berhasil diperbarui');
    } else {
      const newUmkm: UMKM = {
        id: 'umkm-' + Date.now(),
        admin_id: 'admin-1',
        kategori_id: umkmFormData.kategori_id,
        nama_usaha: umkmFormData.nama_usaha,
        nama_mahasiswa: umkmFormData.nama_mahasiswa,
        program_studi: umkmFormData.program_studi,
        deskripsi: umkmFormData.deskripsi,
        histori_usaha: umkmFormData.histori_usaha,
        foto_produk: umkmFormData.foto_produk || 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800',
        foto_pendukung: parsedFotoPendukung,
        kontak: cleanedPhone || '6281234567890',
        status: umkmFormData.status,
      };
      setUmkmList(prev => [...prev, newUmkm]);
      showAlert('Profil UMKM Mahasiswa baru berhasil ditambahkan');
    }
    setIsUmkmFormOpen(false);
  };

  const handleDeleteUmkm = (id: string) => {
    setConfirmDialog({
      isOpen: true,
      title: 'Hapus Profil UMKM',
      message: 'Apakah Anda yakin ingin menghapus profil wirausaha mahasiswa ini dari direktori publik?',
      confirmText: 'Hapus Permanen',
      onConfirm: () => {
        setUmkmList(prev => prev.filter(u => u.id !== id));
        showAlert('UMKM telah dihapus');
      }
    });
  };

  // --- ALBUM & PHOTO CRUD ---
  const handleOpenAlbumForm = (album?: GaleriAlbum) => {
    if (album) {
      setEditingAlbum(album);
      setAlbumFormData({
        judul_album: album.judul_album,
        tanggal_kegiatan: album.tanggal_kegiatan,
        deskripsi_singkat: album.deskripsi_singkat || '',
      });
    } else {
      setEditingAlbum(null);
      setAlbumFormData({
        judul_album: '',
        tanggal_kegiatan: new Date().toISOString().split('T')[0],
        deskripsi_singkat: '',
      });
    }
    setIsAlbumFormOpen(true);
  };

  const handleSaveAlbum = (e: React.FormEvent) => {
    e.preventDefault();
    if (!albumFormData.judul_album.trim()) {
      showAlert('Judul album wajib diisi!', 'error');
      return;
    }

    if (editingAlbum) {
      setAlbums(prev => prev.map(a => a.id === editingAlbum.id ? {
        ...a,
        judul_album: albumFormData.judul_album,
        tanggal_kegiatan: albumFormData.tanggal_kegiatan || new Date().toISOString().split('T')[0],
        deskripsi_singkat: albumFormData.deskripsi_singkat,
      } : a));
      showAlert('Album galeri berhasil diperbarui');
    } else {
      const newAlbum: GaleriAlbum = {
        id: 'album-' + Date.now(),
        judul_album: albumFormData.judul_album,
        tanggal_kegiatan: albumFormData.tanggal_kegiatan || new Date().toISOString().split('T')[0],
        deskripsi_singkat: albumFormData.deskripsi_singkat,
      };
      setAlbums(prev => [...prev, newAlbum]);
      showAlert('Album galeri baru berhasil dibuat');
      setSelectedAlbumIdForPhotos(newAlbum.id);
    }
    setAlbumFormData({ judul_album: '', tanggal_kegiatan: '', deskripsi_singkat: '' });
    setEditingAlbum(null);
    setIsAlbumFormOpen(false);
  };

  const handleDeleteAlbum = (id: string) => {
    setConfirmDialog({
      isOpen: true,
      title: 'Hapus Album Galeri',
      message: 'Menghapus album ini juga akan menghapus seluruh foto dokumentasi di dalamnya secara permanen. Lanjutkan?',
      confirmText: 'Hapus Album',
      onConfirm: () => {
        setAlbums(prev => prev.filter(a => a.id !== id));
        setPhotos(prev => prev.filter(p => p.album_id !== id));
        if (selectedAlbumIdForPhotos === id) setSelectedAlbumIdForPhotos('');
        showAlert('Album dan isinya telah dihapus');
      }
    });
  };

  const handleAddPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhotoUrl.trim()) {
      showAlert('URL Foto wajib diisi!', 'error');
      return;
    }

    const newPhoto: GaleriFoto = {
      id: 'foto-' + Date.now(),
      album_id: selectedAlbumIdForPhotos,
      url_foto: newPhotoUrl,
      keterangan: newPhotoKeterangan || 'Dokumentasi Kegiatan ISBI UMP',
    };

    setPhotos(prev => [...prev, newPhoto]);
    showAlert('Foto berhasil ditambahkan ke album');
    setNewPhotoUrl('');
    setNewPhotoKeterangan('');
  };

  const handleDeletePhoto = (id: string) => {
    setPhotos(prev => prev.filter(p => p.id !== id));
    showAlert('Foto dihapus dari album');
  };

  // --- PENDAFTARAN CRUD ---
  const handleUpdatePendaftaranStatus = (id: string, newStatus: PendaftaranStatus) => {
    setPendaftaranList(prev => prev.map(p => p.id === id ? { ...p, status: newStatus } : p));
    showAlert(`Status pendaftaran diperbarui menjadi: ${newStatus}`);
  };

  const handleDeletePendaftaran = (id: string) => {
    setConfirmDialog({
      isOpen: true,
      title: 'Hapus Pesan Pendaftaran',
      message: 'Apakah Anda yakin ingin menghapus catatan pendaftaran mahasiswa ini dari antrean database?',
      confirmText: 'Hapus Permanen',
      onConfirm: () => {
        setPendaftaranList(prev => prev.filter(p => p.id !== id));
        showAlert('Pesan pendaftaran telah dihapus');
      }
    });
  };

  // --- PRESTASI CRUD ---
  const handleOpenPrestasiForm = (prestasi?: Prestasi) => {
    if (prestasi) {
      setEditingPrestasi(prestasi);
      setPrestasiFormData({
        judul: prestasi.judul,
        tim_usaha: prestasi.tim_usaha,
        nama_mahasiswa: prestasi.nama_mahasiswa,
        tingkat: prestasi.tingkat,
        tahun: prestasi.tahun,
        peringkat: prestasi.peringkat,
        penyelenggara: prestasi.penyelenggara,
        deskripsi: prestasi.deskripsi,
        foto_prestasi: prestasi.foto_prestasi,
      });
    } else {
      setEditingPrestasi(null);
      setPrestasiFormData({
        judul: '',
        tim_usaha: '',
        nama_mahasiswa: '',
        tingkat: 'Nasional',
        tahun: new Date().getFullYear().toString(),
        peringkat: '',
        penyelenggara: '',
        deskripsi: '',
        foto_prestasi: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
      });
    }
    setIsPrestasiFormOpen(true);
  };

  const handleSavePrestasi = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prestasiFormData.judul.trim() || !prestasiFormData.tim_usaha.trim() || !prestasiFormData.nama_mahasiswa.trim()) {
      showAlert('Judul, Tim Usaha, dan Nama Mahasiswa wajib diisi!', 'error');
      return;
    }

    if (editingPrestasi) {
      setPrestasiList(prev => prev.map(p => p.id === editingPrestasi.id ? {
        ...p,
        judul: prestasiFormData.judul,
        tim_usaha: prestasiFormData.tim_usaha,
        nama_mahasiswa: prestasiFormData.nama_mahasiswa,
        tingkat: prestasiFormData.tingkat,
        tahun: prestasiFormData.tahun,
        peringkat: prestasiFormData.peringkat,
        penyelenggara: prestasiFormData.penyelenggara,
        deskripsi: prestasiFormData.deskripsi,
        foto_prestasi: prestasiFormData.foto_prestasi,
      } : p));
      showAlert('Prestasi berhasil diperbarui');
    } else {
      const newPrestasi: Prestasi = {
        id: 'pres-' + Date.now(),
        judul: prestasiFormData.judul,
        tim_usaha: prestasiFormData.tim_usaha,
        nama_mahasiswa: prestasiFormData.nama_mahasiswa,
        tingkat: prestasiFormData.tingkat,
        tahun: prestasiFormData.tahun,
        peringkat: prestasiFormData.peringkat,
        penyelenggara: prestasiFormData.penyelenggara,
        deskripsi: prestasiFormData.deskripsi,
        foto_prestasi: prestasiFormData.foto_prestasi || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
      };
      setPrestasiList(prev => [...prev, newPrestasi]);
      showAlert('Prestasi baru berhasil ditambahkan');
    }
    setIsPrestasiFormOpen(false);
  };

  const handleDeletePrestasi = (id: string) => {
    setConfirmDialog({
      isOpen: true,
      title: 'Hapus Catatan Prestasi',
      message: 'Apakah Anda yakin ingin menghapus catatan prestasi mahasiswa ini secara permanen dari database?',
      confirmText: 'Hapus Permanen',
      onConfirm: () => {
        setPrestasiList(prev => prev.filter(p => p.id !== id));
        showAlert('Prestasi telah dihapus');
      }
    });
  };

  const handleSaveProfil = (e: React.FormEvent) => {
    e.preventDefault();
    setProfilData(profilFormData);
    showAlert('Profil ISBI UMP berhasil diperbarui');
  };


  // --- HELPERS ---
  const getKategoriBeritaName = (catId: string) => {
    return kategoriBerita.find(c => c.id === catId)?.nama_kategori || 'Kegiatan';
  };

  const getKategoriUmkmName = (catId: string) => {
    return kategoriUMKM.find(c => c.id === catId)?.nama_kategori || 'Kuliner';
  };

  const getProgramName = (progId: string) => {
    if (progId === 'umum') return 'Pertanyaan Umum (Bukan Pendaftaran)';
    return programs.find(p => p.id === progId)?.nama_program || 'Program Terhapus';
  };

  // Filter lists based on search
  const filteredBerita = beritaList.filter(b => 
    b.judul.toLowerCase().includes(searchQuery.toLowerCase()) || 
    b.konten.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPrograms = programs.filter(p => 
    p.nama_program.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.deskripsi.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredUmkm = umkmList.filter(u => 
    u.nama_usaha.toLowerCase().includes(searchQuery.toLowerCase()) || 
    u.nama_mahasiswa.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.program_studi.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPendaftaran = pendaftaranList.filter(p => 
    p.nama.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.email.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.pesan.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPrestasi = prestasiList.filter(p => 
    p.judul.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.tim_usaha.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.nama_mahasiswa.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.penyelenggara.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-slate-100 min-h-screen py-8 px-4 md:px-8" id="admin-dashboard-container">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* Alerts banner */}
        {alertMsg && (
          <div className={`p-4 rounded-xl flex items-center gap-3 shadow-md animate-in fade-in duration-200 text-sm ${
            alertMsg.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
          }`}>
            {alertMsg.type === 'success' ? <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /> : <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />}
            <span className="font-semibold text-left">{alertMsg.text}</span>
          </div>
        )}

        {/* Dashboard Header Banner */}
        <div className="w-full bg-slate-900 text-white p-6 md:p-8 rounded-3xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-xl">
          <div className="text-left">
            <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md border border-emerald-500/20 tracking-wider">
              BKA UMP Control Panel
            </span>
            <h2 className="font-display font-bold text-xl md:text-2xl mt-2 tracking-tight">Pusat Administrasi ISBI UMP</h2>
            <p className="text-xs text-slate-400 mt-1">Kelola berita, pendaftaran program, profil UMKM binaan, dan dokumentasi galeri resmi.</p>
          </div>
          <button 
            onClick={() => {
              setConfirmDialog({
                isOpen: true,
                title: 'Setel Ulang Data Website',
                message: 'Apakah Anda yakin ingin menyetel ulang seluruh data website kembali ke kondisi bawaan (seed data)? Seluruh perubahan baru Anda di database akan hilang permanen.',
                confirmText: 'Setel Ulang',
                onConfirm: () => {
                  onResetData();
                  showAlert('Seluruh konten website berhasil disetel ulang ke data bawaan!');
                }
              });
            }}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer self-stretch sm:self-auto justify-center"
          >
            <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
            <span>Setel Ulang Data</span>
          </button>
        </div>

        {/* Console layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Console Nav Rail */}
          <div className="lg:col-span-3 bg-white border border-slate-200/60 rounded-2xl p-3 shadow-sm flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 text-left shrink-0 scrollbar-none select-none">
            <span className="hidden lg:inline text-[9px] font-extrabold text-slate-400 uppercase tracking-wider px-3 mb-2 shrink-0">Menu Utama</span>
            
            <button 
              onClick={() => { setActiveSubTab('overview'); setSearchQuery(''); }}
              className={`w-auto lg:w-full px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 whitespace-nowrap ${
                activeSubTab === 'overview' ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-700/10' : 'text-slate-600 hover:bg-slate-50 bg-slate-50/50 lg:bg-transparent border border-slate-200/40 lg:border-transparent'
              }`}
            >
              <LayoutDashboard className={`w-3.5 h-3.5 shrink-0 ${activeSubTab === 'overview' ? 'text-white' : 'text-emerald-600'}`} />
              <span>Ringkasan Panel</span>
            </button>

            <button 
              onClick={() => { setActiveSubTab('berita'); setSearchQuery(''); }}
              className={`w-auto lg:w-full px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 whitespace-nowrap ${
                activeSubTab === 'berita' ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-700/10' : 'text-slate-600 hover:bg-slate-50 bg-slate-50/50 lg:bg-transparent border border-slate-200/40 lg:border-transparent'
              }`}
            >
              <Newspaper className={`w-3.5 h-3.5 shrink-0 ${activeSubTab === 'berita' ? 'text-white' : 'text-blue-500'}`} />
              <span>Kelola Berita</span>
              <span className={`ml-1.5 lg:ml-auto text-[9px] px-1.5 py-0.5 rounded font-extrabold ${activeSubTab === 'berita' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>{beritaList.length}</span>
            </button>

            <button 
              onClick={() => { setActiveSubTab('program'); setSearchQuery(''); }}
              className={`w-auto lg:w-full px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 whitespace-nowrap ${
                activeSubTab === 'program' ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-700/10' : 'text-slate-600 hover:bg-slate-50 bg-slate-50/50 lg:bg-transparent border border-slate-200/40 lg:border-transparent'
              }`}
            >
              <Award className={`w-3.5 h-3.5 shrink-0 ${activeSubTab === 'program' ? 'text-white' : 'text-purple-500'}`} />
              <span>Kelola Program</span>
              <span className={`ml-1.5 lg:ml-auto text-[9px] px-1.5 py-0.5 rounded font-extrabold ${activeSubTab === 'program' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>{programs.length}</span>
            </button>

            <button 
              onClick={() => { setActiveSubTab('umkm'); setSearchQuery(''); }}
              className={`w-auto lg:w-full px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 whitespace-nowrap ${
                activeSubTab === 'umkm' ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-700/10' : 'text-slate-600 hover:bg-slate-50 bg-slate-50/50 lg:bg-transparent border border-slate-200/40 lg:border-transparent'
              }`}
            >
              <Store className={`w-3.5 h-3.5 shrink-0 ${activeSubTab === 'umkm' ? 'text-white' : 'text-amber-500'}`} />
              <span>Kelola UMKM</span>
              <span className={`ml-1.5 lg:ml-auto text-[9px] px-1.5 py-0.5 rounded font-extrabold ${activeSubTab === 'umkm' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>{umkmList.length}</span>
            </button>

            <button 
              onClick={() => { setActiveSubTab('galeri'); setSearchQuery(''); }}
              className={`w-auto lg:w-full px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 whitespace-nowrap ${
                activeSubTab === 'galeri' ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-700/10' : 'text-slate-600 hover:bg-slate-50 bg-slate-50/50 lg:bg-transparent border border-slate-200/40 lg:border-transparent'
              }`}
            >
              <ImageIcon className={`w-3.5 h-3.5 shrink-0 ${activeSubTab === 'galeri' ? 'text-white' : 'text-pink-500'}`} />
              <span>Kelola Galeri</span>
              <span className={`ml-1.5 lg:ml-auto text-[9px] px-1.5 py-0.5 rounded font-extrabold ${activeSubTab === 'galeri' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>{albums.length}</span>
            </button>

            <button 
              onClick={() => { setActiveSubTab('pesan'); setSearchQuery(''); }}
              className={`w-auto lg:w-full px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 whitespace-nowrap ${
                activeSubTab === 'pesan' ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-700/10' : 'text-slate-600 hover:bg-slate-50 bg-slate-50/50 lg:bg-transparent border border-slate-200/40 lg:border-transparent'
              }`}
            >
              <Inbox className={`w-3.5 h-3.5 shrink-0 ${activeSubTab === 'pesan' ? 'text-white' : 'text-cyan-500'}`} />
              <span>Pesan Masuk</span>
              <span className={`ml-1.5 lg:ml-auto text-[9px] px-1.5 py-0.5 rounded font-extrabold ${activeSubTab === 'pesan' ? 'bg-red-600 text-white' : 'bg-red-100 text-red-600 font-extrabold'}`}>
                {pendaftaranList.filter(p => p.status === 'Masuk').length}
              </span>
            </button>

            <button 
              onClick={() => { setActiveSubTab('prestasi'); setSearchQuery(''); }}
              className={`w-auto lg:w-full px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 whitespace-nowrap ${
                activeSubTab === 'prestasi' ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-700/10' : 'text-slate-600 hover:bg-slate-50 bg-slate-50/50 lg:bg-transparent border border-slate-200/40 lg:border-transparent'
              }`}
            >
              <Award className={`w-3.5 h-3.5 shrink-0 ${activeSubTab === 'prestasi' ? 'text-white' : 'text-amber-500'}`} />
              <span>Kelola Prestasi</span>
              <span className={`ml-1.5 lg:ml-auto text-[9px] px-1.5 py-0.5 rounded font-extrabold ${activeSubTab === 'prestasi' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>{prestasiList.length}</span>
            </button>

            <button 
              onClick={() => { setActiveSubTab('profil'); setSearchQuery(''); }}
              className={`w-auto lg:w-full px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 whitespace-nowrap ${
                activeSubTab === 'profil' ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-700/10' : 'text-slate-600 hover:bg-slate-50 bg-slate-50/50 lg:bg-transparent border border-slate-200/40 lg:border-transparent'
              }`}
            >
              <Compass className={`w-3.5 h-3.5 shrink-0 ${activeSubTab === 'profil' ? 'text-white' : 'text-indigo-500'}`} />
              <span>Kelola Profil ISBI</span>
            </button>

            <button 
              onClick={() => { setActiveSubTab('banner'); setSearchQuery(''); }}
              className={`w-auto lg:w-full px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 whitespace-nowrap ${
                activeSubTab === 'banner' ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-700/10' : 'text-slate-600 hover:bg-slate-50 bg-slate-50/50 lg:bg-transparent border border-slate-200/40 lg:border-transparent'
              }`}
            >
              <LayoutDashboard className={`w-3.5 h-3.5 shrink-0 ${activeSubTab === 'banner' ? 'text-white' : 'text-emerald-700'}`} />
              <span>Kelola Banner Beranda</span>
              <span className={`ml-1.5 lg:ml-auto text-[9px] px-1.5 py-0.5 rounded font-extrabold ${activeSubTab === 'banner' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>{heroSlides.length}</span>
            </button>
          </div>

          {/* Right Content Screen */}
          <div className="lg:col-span-9 bg-white border border-slate-200/60 rounded-3xl p-4 sm:p-6 shadow-sm min-h-[500px]">
            
            {/* SEARCH BAR (except for overview, galeri, profil, and banner subtabs) */}
            {activeSubTab !== 'overview' && activeSubTab !== 'galeri' && activeSubTab !== 'profil' && activeSubTab !== 'banner' && (
              <div className="relative mb-6">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input 
                  type="text"
                  placeholder={
                    activeSubTab === 'berita' ? "Cari judul, kategori, konten..." :
                    activeSubTab === 'program' ? "Cari nama program, deskripsi..." :
                    activeSubTab === 'umkm' ? "Cari nama usaha, nama mahasiswa, prodi..." :
                    activeSubTab === 'prestasi' ? "Cari judul prestasi, tim, nama..." :
                    "Cari..."
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-3 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500"
                />
              </div>
            )}

            {/* ================= OVERVIEW PANEL ================= */}
            {activeSubTab === 'overview' && (
              <div className="flex flex-col gap-6 text-left">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="font-display font-bold text-slate-800 text-md">Ringkasan Operasional</h3>
                  <p className="text-slate-400 text-xs mt-0.5">Statistik keseluruhan data yang saat ini aktif di situs resmi ISBI UMP.</p>
                </div>

                {/* Micro Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-2xl flex flex-col items-start gap-1">
                    <span className="text-blue-600 p-1.5 bg-blue-100/60 rounded-lg"><Newspaper className="w-4 h-4" /></span>
                    <span className="font-display font-black text-2xl text-slate-800 mt-2">{beritaList.length}</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Artikel Berita</span>
                  </div>
                  
                  <div className="p-4 bg-purple-50/50 border border-purple-100 rounded-2xl flex flex-col items-start gap-1">
                    <span className="text-purple-600 p-1.5 bg-purple-100/60 rounded-lg"><Award className="w-4 h-4" /></span>
                    <span className="font-display font-black text-2xl text-slate-800 mt-2">{programs.length}</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Program Aktif</span>
                  </div>

                  <div className="p-4 bg-amber-50/50 border border-amber-100 rounded-2xl flex flex-col items-start gap-1">
                    <span className="text-amber-600 p-1.5 bg-amber-100/60 rounded-lg"><Store className="w-4 h-4" /></span>
                    <span className="font-display font-black text-2xl text-slate-800 mt-2">{umkmList.length}</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">UMKM Mahasiswa</span>
                  </div>

                  <div className="p-4 bg-rose-50/50 border border-rose-100 rounded-2xl flex flex-col items-start gap-1">
                    <span className="text-rose-600 p-1.5 bg-rose-100/60 rounded-lg"><Award className="w-4 h-4" /></span>
                    <span className="font-display font-black text-2xl text-slate-800 mt-2">{prestasiList.length}</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Prestasi Wirausaha</span>
                  </div>

                  <div className="p-4 bg-cyan-50/50 border border-cyan-100 rounded-2xl flex flex-col items-start gap-1">
                    <span className="text-cyan-600 p-1.5 bg-cyan-100/60 rounded-lg"><Inbox className="w-4 h-4" /></span>
                    <span className="font-display font-black text-2xl text-slate-800 mt-2">{pendaftaranList.length}</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Registrasi Masuk</span>
                  </div>
                </div>

                {/* Split list overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                  
                  {/* Left Box: Recent Message list */}
                  <div className="border border-slate-100 rounded-2xl p-4 flex flex-col gap-4">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                      <span className="text-xs font-bold text-slate-800">Pesan Registrasi Baru</span>
                      <button onClick={() => setActiveSubTab('pesan')} className="text-[10px] font-bold text-emerald-600 hover:underline">Semua Pesan</button>
                    </div>

                    <div className="flex flex-col gap-3">
                      {pendaftaranList.slice(0, 3).map((reg) => (
                        <div key={reg.id} className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-left flex flex-col gap-1.5">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-xs text-slate-800">{reg.nama}</span>
                            <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${
                              reg.status === 'Masuk' ? 'bg-red-50 text-red-700' : 'bg-blue-50 text-blue-700'
                            }`}>{reg.status}</span>
                          </div>
                          <span className="text-[10px] text-slate-500 line-clamp-1">{reg.pesan}</span>
                          <span className="text-[9px] text-slate-400 font-mono mt-1">{reg.tanggal_masuk}</span>
                        </div>
                      ))}
                      {pendaftaranList.length === 0 && <p className="text-xs text-slate-400 py-6 text-center">Belum ada pesan pendaftaran.</p>}
                    </div>
                  </div>

                  {/* Right Box: Recent UMKM List */}
                  <div className="border border-slate-100 rounded-2xl p-4 flex flex-col gap-4">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                      <span className="text-xs font-bold text-slate-800">UMKM Binaan Baru</span>
                      <button onClick={() => setActiveSubTab('umkm')} className="text-[10px] font-bold text-emerald-600 hover:underline">Kelola UMKM</button>
                    </div>

                    <div className="flex flex-col gap-3">
                      {umkmList.slice(-3).reverse().map((u) => (
                        <div key={u.id} className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-left flex items-center gap-3">
                          <img src={u.foto_produk} alt={u.nama_usaha} className="w-10 h-10 object-cover rounded-lg shrink-0" referrerPolicy="no-referrer" />
                          <div className="flex flex-col gap-0.5">
                            <span className="font-bold text-xs text-slate-800">{u.nama_usaha}</span>
                            <span className="text-[10px] text-slate-400 font-medium">Owner: {u.nama_mahasiswa}</span>
                            <span className="text-[9px] text-slate-400 font-mono">{u.program_studi}</span>
                          </div>
                        </div>
                      ))}
                      {umkmList.length === 0 && <p className="text-xs text-slate-400 py-6 text-center">Belum ada UMKM terdaftar.</p>}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* ================= KELOLA BERITA ================= */}
            {activeSubTab === 'berita' && (
              <div className="flex flex-col gap-6 text-left">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-display font-bold text-slate-800 text-sm">Daftar Artikel Berita</h3>
                    <p className="text-slate-400 text-[11px] mt-0.5">Kelola publikasi seputar prestasi, pengumuman, dan berita BKA.</p>
                  </div>
                  <button 
                    onClick={() => handleOpenBeritaForm()}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1.5 shadow-md shadow-emerald-500/10 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Tulis Berita Baru</span>
                  </button>
                </div>

                {/* Form Editor Modal overlay */}
                {isBeritaFormOpen && (
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-6 animate-in fade-in duration-300">
                    <div className="flex justify-between items-center border-b border-slate-200 pb-3 mb-4">
                      <span className="font-display font-bold text-xs text-slate-800">
                        {editingBerita ? 'Edit Artikel Berita' : 'Tulis Artikel Berita Baru'}
                      </span>
                      <button onClick={() => setIsBeritaFormOpen(false)} className="text-slate-400 hover:text-slate-600">
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <form onSubmit={handleSaveBerita} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="flex flex-col gap-1 md:col-span-2">
                        <label className="font-bold text-slate-700">Judul Artikel *</label>
                        <input 
                          type="text"
                          required
                          value={beritaFormData.judul}
                          onChange={(e) => setBeritaFormData({ ...beritaFormData, judul: e.target.value })}
                          placeholder="Masukkan judul berita utama..."
                          className="p-2.5 border border-slate-200 rounded-lg text-xs"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="font-bold text-slate-700">Kategori *</label>
                        <select 
                          value={beritaFormData.kategori_id}
                          onChange={(e) => setBeritaFormData({ ...beritaFormData, kategori_id: e.target.value })}
                          className="p-2.5 border border-slate-200 rounded-lg bg-white"
                        >
                          {kategoriBerita.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.nama_kategori}</option>
                          ))}
                        </select>
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="font-bold text-slate-700">Status Publikasi *</label>
                        <select 
                          value={beritaFormData.status}
                          onChange={(e) => setBeritaFormData({ ...beritaFormData, status: e.target.value as 'Draft' | 'Terbit' })}
                          className="p-2.5 border border-slate-200 rounded-lg bg-white"
                        >
                          <option value="Draft">Draft (Disimpan saja)</option>
                          <option value="Terbit">Terbit (Ditampilkan di publik)</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1 md:col-span-2 text-left">
                        <label className="font-bold text-slate-700 flex items-center justify-between">
                          <span>Foto Sampul (URL atau Unggah File)</span>
                          {isUploading && <span className="text-[10px] text-emerald-600 font-bold animate-pulse">Mengunggah...</span>}
                        </label>
                        <div className="flex gap-2">
                          <input 
                            type="text"
                            value={beritaFormData.foto_sampul}
                            onChange={(e) => setBeritaFormData({ ...beritaFormData, foto_sampul: e.target.value })}
                            placeholder="https://images.unsplash.com/... atau pilih file di samping"
                            className="p-2.5 border border-slate-200 rounded-lg flex-1 text-xs"
                          />
                          <label className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 cursor-pointer shrink-0 transition-colors">
                            <Upload className="w-3.5 h-3.5 text-slate-500" />
                            <span className="text-[10px]">Unggah File</span>
                            <input 
                              type="file" 
                              accept="image/*,video/*"
                              className="hidden" 
                              onChange={async (e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const url = await handleFileUpload(file);
                                  if (url) {
                                    setBeritaFormData({ ...beritaFormData, foto_sampul: url });
                                    showAlert('File berhasil diunggah!');
                                  }
                                }
                              }} 
                            />
                          </label>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1 md:col-span-2">
                        <label className="font-bold text-slate-700">Konten / Isi Artikel (Dukung teks baris baru) *</label>
                        <textarea 
                          rows={6}
                          required
                          value={beritaFormData.konten}
                          onChange={(e) => setBeritaFormData({ ...beritaFormData, konten: e.target.value })}
                          placeholder="Ketik detail isi artikel di sini..."
                          className="p-2.5 border border-slate-200 rounded-lg font-sans resize-y leading-relaxed"
                        ></textarea>
                      </div>

                      <div className="md:col-span-2 flex justify-end gap-2.5 pt-2">
                        <button 
                          type="button" 
                          onClick={() => setIsBeritaFormOpen(false)}
                          className="px-4 py-2 border border-slate-200 rounded-xl text-slate-600 font-bold hover:bg-slate-50 cursor-pointer"
                        >
                          Batal
                        </button>
                        <button 
                          type="submit" 
                          className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl flex items-center gap-1 cursor-pointer shadow-sm"
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>Simpan Berita</span>
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Table List of Articles */}
                <div className="overflow-x-auto border border-slate-100 rounded-2xl shadow-inner">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 uppercase font-bold tracking-wider">
                      <tr>
                        <th className="p-3.5 text-[10px]">Judul Artikel</th>
                        <th className="p-3.5 text-[10px]">Kategori</th>
                        <th className="p-3.5 text-[10px]">Tanggal</th>
                        <th className="p-3.5 text-[10px]">Status</th>
                        <th className="p-3.5 text-[10px] text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {filteredBerita.map((berita) => (
                        <tr key={berita.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-800 max-w-xs truncate">{berita.judul}</td>
                          <td className="p-3.5">
                            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold text-[10px]">
                              {getKategoriBeritaName(berita.kategori_id)}
                            </span>
                          </td>
                          <td className="p-3.5 text-slate-400 font-mono">{berita.tanggal_terbit}</td>
                          <td className="p-3.5">
                            <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                              berita.status === 'Terbit' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'
                            }`}>{berita.status}</span>
                          </td>
                          <td className="p-3.5 text-right flex justify-end gap-1.5">
                            <button 
                              onClick={() => handleOpenBeritaForm(berita)}
                              className="p-1.5 hover:bg-slate-100 rounded text-blue-600 cursor-pointer"
                              title="Edit berita"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button 
                              onClick={() => handleDeleteBerita(berita.id)}
                              className="p-1.5 hover:bg-slate-100 rounded text-rose-600 cursor-pointer"
                              title="Hapus berita"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                      {filteredBerita.length === 0 && (
                        <tr>
                          <td colSpan={5} className="p-8 text-center text-slate-400 font-sans">
                            Belum ada artikel berita yang cocok dengan kriteria pencarian.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ================= KELOLA PROGRAM ================= */}
            {activeSubTab === 'program' && (
              <div className="flex flex-col gap-6 text-left">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-display font-bold text-slate-800 text-sm">Daftar Program Kewirausahaan</h3>
                    <p className="text-slate-400 text-[11px] mt-0.5">Kelola program bimbingan, jadwal pelaksanaan, syarat pendaftaran, dan status.</p>
                  </div>
                  <button 
                    onClick={() => handleOpenProgramForm()}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1.5 shadow-md shadow-emerald-500/10 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Tambah Program</span>
                  </button>
                </div>

                {/* Form Program Editor */}
                {isProgramFormOpen && (
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-6 animate-in fade-in duration-300">
                    <div className="flex justify-between items-center border-b border-slate-200 pb-3 mb-4">
                      <span className="font-display font-bold text-xs text-slate-800">
                        {editingProgram ? 'Edit Program Kewirausahaan' : 'Tambah Program Kewirausahaan Baru'}
                      </span>
                      <button onClick={() => setIsProgramFormOpen(false)} className="text-slate-400 hover:text-slate-600">
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <form onSubmit={handleSaveProgram} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="flex flex-col gap-1 md:col-span-2">
                        <label className="font-bold text-slate-700">Nama Program *</label>
                        <input 
                          type="text"
                          required
                          value={programFormData.nama_program}
                          onChange={(e) => setProgramFormData({ ...programFormData, nama_program: e.target.value })}
                          placeholder="Contoh: P2MW — Program Pembinaan..."
                          className="p-2.5 border border-slate-200 rounded-lg"
                        />
                      </div>

                      <div className="flex flex-col gap-1 md:col-span-2">
                        <label className="font-bold text-slate-700">Deskripsi Ringkas *</label>
                        <textarea 
                          rows={3}
                          required
                          value={programFormData.deskripsi}
                          onChange={(e) => setProgramFormData({ ...programFormData, deskripsi: e.target.value })}
                          placeholder="Masukkan detail penjelasan program..."
                          className="p-2.5 border border-slate-200 rounded-lg font-sans resize-y"
                        ></textarea>
                      </div>

                      <div className="flex flex-col gap-1 md:col-span-2">
                        <label className="font-bold text-slate-700">Syarat Pendaftaran (Ketik per baris kalimat)</label>
                        <textarea 
                          rows={3}
                          value={programFormData.syarat}
                          onChange={(e) => setProgramFormData({ ...programFormData, syarat: e.target.value })}
                          placeholder="Masukkan syarat kelayakan peserta..."
                          className="p-2.5 border border-slate-200 rounded-lg font-sans resize-y"
                        ></textarea>
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="font-bold text-slate-700">Tanggal Mulai Pendaftaran</label>
                        <input 
                          type="date"
                          value={programFormData.jadwal_mulai}
                          onChange={(e) => setProgramFormData({ ...programFormData, jadwal_mulai: e.target.value })}
                          className="p-2.5 border border-slate-200 rounded-lg"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="font-bold text-slate-700">Tanggal Selesai Pendaftaran</label>
                        <input 
                          type="date"
                          value={programFormData.jadwal_selesai}
                          onChange={(e) => setProgramFormData({ ...programFormData, jadwal_selesai: e.target.value })}
                          className="p-2.5 border border-slate-200 rounded-lg"
                        />
                      </div>

                      <div className="flex flex-col gap-1 md:col-span-2">
                        <label className="font-bold text-slate-700">Status Pendaftaran *</label>
                        <select 
                          value={programFormData.status}
                          onChange={(e) => setProgramFormData({ ...programFormData, status: e.target.value as ProgramStatus })}
                          className="p-2.5 border border-slate-200 rounded-lg bg-white"
                        >
                          <option value="Pendaftaran Dibuka">Pendaftaran Dibuka</option>
                          <option value="Berjalan Rutin">Berjalan Rutin</option>
                          <option value="Segera Dibuka">Segera Dibuka</option>
                        </select>
                      </div>

                      <div className="md:col-span-2 flex justify-end gap-2.5 pt-2">
                        <button 
                          type="button" 
                          onClick={() => setIsProgramFormOpen(false)}
                          className="px-4 py-2 border border-slate-200 rounded-xl text-slate-600 font-bold hover:bg-slate-50 cursor-pointer"
                        >
                          Batal
                        </button>
                        <button 
                          type="submit" 
                          className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl flex items-center gap-1 cursor-pointer shadow-sm"
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>Simpan Program</span>
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Programs List Table */}
                <div className="overflow-x-auto border border-slate-100 rounded-2xl shadow-inner">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 uppercase font-bold tracking-wider">
                      <tr>
                        <th className="p-3.5 text-[10px]">Nama Program</th>
                        <th className="p-3.5 text-[10px]">Periode</th>
                        <th className="p-3.5 text-[10px]">Status</th>
                        <th className="p-3.5 text-[10px] text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {filteredPrograms.map((prog) => (
                        <tr key={prog.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-800">{prog.nama_program}</td>
                          <td className="p-3.5 text-slate-400 font-mono">{prog.jadwal_mulai} s/d {prog.jadwal_selesai}</td>
                          <td className="p-3.5">
                            <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                              prog.status === 'Pendaftaran Dibuka' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
                              prog.status === 'Berjalan Rutin' ? 'bg-blue-50 text-blue-700 border border-blue-100' : 'bg-slate-100 text-slate-500'
                            }`}>{prog.status}</span>
                          </td>
                          <td className="p-3.5 text-right flex justify-end gap-1.5">
                            <button 
                              onClick={() => handleOpenProgramForm(prog)}
                              className="p-1.5 hover:bg-slate-100 rounded text-blue-600 cursor-pointer"
                              title="Edit program"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button 
                              onClick={() => handleDeleteProgram(prog.id)}
                              className="p-1.5 hover:bg-slate-100 rounded text-rose-600 cursor-pointer"
                              title="Hapus program"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                      {filteredPrograms.length === 0 && (
                        <tr>
                          <td colSpan={4} className="p-8 text-center text-slate-400 font-sans">
                            Belum ada program wirausaha terdaftar.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ================= KELOLA UMKM MAHASISWA ================= */}
            {activeSubTab === 'umkm' && (
              <div className="flex flex-col gap-6 text-left">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-display font-bold text-slate-800 text-sm">Direktori UMKM Mahasiswa Binaan</h3>
                    <p className="text-slate-400 text-[11px] mt-0.5">
                      Kelola profil usaha mahasiswa, data program studi, deskripsi produk, histori usaha, dan no HP kontak.
                    </p>
                  </div>
                  <button 
                    onClick={() => handleOpenUmkmForm()}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1.5 shadow-md shadow-emerald-500/10 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Tambah UMKM</span>
                  </button>
                </div>

                {/* Form UMKM Editor */}
                {isUmkmFormOpen && (
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-6 animate-in fade-in duration-300">
                    <div className="flex justify-between items-center border-b border-slate-200 pb-3 mb-4">
                      <span className="font-display font-bold text-xs text-slate-800">
                        {editingUmkm ? 'Edit Profil UMKM Mahasiswa' : 'Tambah Profil UMKM Mahasiswa Baru'}
                      </span>
                      <button onClick={() => setIsUmkmFormOpen(false)} className="text-slate-400 hover:text-slate-600">
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <form onSubmit={handleSaveUmkm} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="flex flex-col gap-1">
                        <label className="font-bold text-slate-700">Nama Usaha / Brand *</label>
                        <input 
                          type="text"
                          required
                          value={umkmFormData.nama_usaha}
                          onChange={(e) => setUmkmFormData({ ...umkmFormData, nama_usaha: e.target.value })}
                          placeholder="Contoh: Kopi Kandang UMP"
                          className="p-2.5 border border-slate-200 rounded-lg"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="font-bold text-slate-700">Nama Mahasiswa Pemilik *</label>
                        <input 
                          type="text"
                          required
                          value={umkmFormData.nama_mahasiswa}
                          onChange={(e) => setUmkmFormData({ ...umkmFormData, nama_mahasiswa: e.target.value })}
                          placeholder="Masukkan nama lengkap pemilik..."
                          className="p-2.5 border border-slate-200 rounded-lg"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="font-bold text-slate-700">Fakultas & Program Studi *</label>
                        <input 
                          type="text"
                          required
                          value={umkmFormData.program_studi}
                          onChange={(e) => setUmkmFormData({ ...umkmFormData, program_studi: e.target.value })}
                          placeholder="Contoh: Teknik Informatika, FT&S"
                          className="p-2.5 border border-slate-200 rounded-lg"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="font-bold text-slate-700">Kategori Usaha *</label>
                        <select 
                          value={umkmFormData.kategori_id}
                          onChange={(e) => setUmkmFormData({ ...umkmFormData, kategori_id: e.target.value })}
                          className="p-2.5 border border-slate-200 rounded-lg bg-white"
                        >
                          {kategoriUMKM.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.nama_kategori}</option>
                          ))}
                        </select>
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="font-bold text-slate-700">Narahubung WhatsApp Usaha (Dimulai 62 atau 08) *</label>
                        <input 
                          type="text"
                          required
                          value={umkmFormData.kontak}
                          onChange={(e) => setUmkmFormData({ ...umkmFormData, kontak: e.target.value })}
                          placeholder="6281234567890"
                          className="p-2.5 border border-slate-200 rounded-lg font-mono"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="font-bold text-slate-700">Status Usaha</label>
                        <select 
                          value={umkmFormData.status}
                          onChange={(e) => setUmkmFormData({ ...umkmFormData, status: e.target.value })}
                          className="p-2.5 border border-slate-200 rounded-lg bg-white"
                        >
                          <option value="Aktif">Aktif Binaan</option>
                          <option value="Alumni">Alumni / Mandiri</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1 md:col-span-2 text-left">
                        <label className="font-bold text-slate-700 flex items-center justify-between">
                          <span>Foto Produk Utama (URL atau Unggah File)</span>
                          {isUploading && <span className="text-[10px] text-emerald-600 font-bold animate-pulse">Mengunggah...</span>}
                        </label>
                        <div className="flex gap-2">
                          <input 
                            type="text"
                            value={umkmFormData.foto_produk}
                            onChange={(e) => setUmkmFormData({ ...umkmFormData, foto_produk: e.target.value })}
                            placeholder="https://images.unsplash.com/... atau pilih file di samping"
                            className="p-2.5 border border-slate-200 rounded-lg flex-1 text-xs"
                          />
                          <label className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 cursor-pointer shrink-0 transition-colors">
                            <Upload className="w-3.5 h-3.5 text-slate-500" />
                            <span className="text-[10px]">Unggah File</span>
                            <input 
                              type="file" 
                              accept="image/*,video/*"
                              className="hidden" 
                              onChange={async (e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const url = await handleFileUpload(file);
                                  if (url) {
                                    setUmkmFormData({ ...umkmFormData, foto_produk: url });
                                    showAlert('File berhasil diunggah!');
                                  }
                                }
                              }} 
                            />
                          </label>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1 md:col-span-2 text-left">
                        <label className="font-bold text-slate-700 flex items-center justify-between">
                          <span>Foto Pendukung (Dokumen NIB / Legalitas & Foto Kegiatan Usaha)</span>
                          {isUploading && <span className="text-[10px] text-emerald-600 font-bold animate-pulse">Mengunggah...</span>}
                        </label>
                        <div className="flex gap-2">
                          <textarea 
                            rows={2}
                            value={umkmFormData.foto_pendukung}
                            onChange={(e) => setUmkmFormData({ ...umkmFormData, foto_pendukung: e.target.value })}
                            placeholder="Pisahkan URL gambar dengan koma atau baris baru (Contoh: Foto NIB, Foto Kegiatan 1, Foto Kegiatan 2)"
                            className="p-2.5 border border-slate-200 rounded-lg flex-1 text-xs font-mono"
                          ></textarea>
                          <label className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 cursor-pointer shrink-0 transition-colors h-fit">
                            <Upload className="w-3.5 h-3.5 text-slate-500" />
                            <span className="text-[10px]">Tambah File</span>
                            <input 
                              type="file" 
                              accept="image/*,video/*"
                              className="hidden" 
                              onChange={async (e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const url = await handleFileUpload(file);
                                  if (url) {
                                    const current = umkmFormData.foto_pendukung.trim();
                                    const updated = current ? `${current}, ${url}` : url;
                                    setUmkmFormData({ ...umkmFormData, foto_pendukung: updated });
                                    showAlert('File pendukung berhasil diunggah!');
                                  }
                                }
                              }} 
                            />
                          </label>
                        </div>
                        <span className="text-[10px] text-slate-400">
                          Unggah foto NIB / Izin Usaha dan foto kegiatan operasional untuk memperlengkap tampilan detail UMKM.
                        </span>
                      </div>

                      <div className="flex flex-col gap-1 md:col-span-2">
                        <label className="font-bold text-slate-700">Deskripsi Singkat Usaha *</label>
                        <textarea 
                          rows={2}
                          required
                          value={umkmFormData.deskripsi}
                          onChange={(e) => setUmkmFormData({ ...umkmFormData, deskripsi: e.target.value })}
                          placeholder="Jelaskan produk apa yang ditawarkan oleh usaha ini..."
                          className="p-2.5 border border-slate-200 rounded-lg font-sans resize-y"
                        ></textarea>
                      </div>

                      <div className="flex flex-col gap-1 md:col-span-2">
                        <label className="font-bold text-slate-700">Histori Singkat Perjalanan Usaha (Penting - Ceritakan rintangan & inkubasi ISBI) *</label>
                        <textarea 
                          rows={4}
                          required
                          value={umkmFormData.histori_usaha}
                          onChange={(e) => setUmkmFormData({ ...umkmFormData, histori_usaha: e.target.value })}
                          placeholder="Tulis histori lengkap dari pendirian, bantuan pendanaan ISBI, rintangan, hingga kemajuan operasional..."
                          className="p-2.5 border border-slate-200 rounded-lg font-sans resize-y leading-relaxed"
                        ></textarea>
                      </div>

                      <div className="md:col-span-2 flex justify-end gap-2.5 pt-2">
                        <button 
                          type="button" 
                          onClick={() => setIsUmkmFormOpen(false)}
                          className="px-4 py-2 border border-slate-200 rounded-xl text-slate-600 font-bold hover:bg-slate-50 cursor-pointer"
                        >
                          Batal
                        </button>
                        <button 
                          type="submit" 
                          className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl flex items-center gap-1 cursor-pointer shadow-sm"
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>Simpan UMKM</span>
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Table of Student Businesses */}
                <div className="overflow-x-auto border border-slate-100 rounded-2xl shadow-inner">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 uppercase font-bold tracking-wider">
                      <tr>
                        <th className="p-3.5 text-[10px]">Nama Usaha</th>
                        <th className="p-3.5 text-[10px]">Mahasiswa Pemilik</th>
                        <th className="p-3.5 text-[10px]">Kategori</th>
                        <th className="p-3.5 text-[10px]">Prodi</th>
                        <th className="p-3.5 text-[10px] text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {filteredUmkm.map((u) => (
                        <tr key={u.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-800 flex items-center gap-2">
                            <img src={u.foto_produk} alt={u.nama_usaha} className="w-8 h-8 rounded object-cover shrink-0" referrerPolicy="no-referrer" />
                            <span>{u.nama_usaha}</span>
                          </td>
                          <td className="p-3.5 text-slate-700 font-medium">{u.nama_mahasiswa}</td>
                          <td className="p-3.5">
                            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold text-[10px]">
                              {getKategoriUmkmName(u.kategori_id)}
                            </span>
                          </td>
                          <td className="p-3.5 text-slate-400">{u.program_studi}</td>
                          <td className="p-3.5 text-right flex justify-end gap-1.5 mt-1.5">
                            <button 
                              onClick={() => handleOpenUmkmForm(u)}
                              className="p-1.5 hover:bg-slate-100 rounded text-blue-600 cursor-pointer"
                              title="Edit UMKM"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button 
                              onClick={() => handleDeleteUmkm(u.id)}
                              className="p-1.5 hover:bg-slate-100 rounded text-rose-600 cursor-pointer"
                              title="Hapus UMKM"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                      {filteredUmkm.length === 0 && (
                        <tr>
                          <td colSpan={5} className="p-8 text-center text-slate-400 font-sans">
                            Belum ada profil usaha mahasiswa yang terdaftar.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ================= KELOLA GALERI ================= */}
            {activeSubTab === 'galeri' && (
              <div className="flex flex-col gap-6 text-left">
                <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
                  <div>
                    <h3 className="font-display font-bold text-slate-800 text-sm">Kelola Galeri Foto & Album</h3>
                    <p className="text-slate-400 text-[11px] mt-0.5">Kelola album pameran kewirausahaan dan kelola kumpulan foto di dalamnya.</p>
                  </div>
                  <button 
                    onClick={() => handleOpenAlbumForm()}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1.5 shadow-md shadow-emerald-500/10 cursor-pointer"
                  >
                    <FolderPlus className="w-4 h-4" />
                    <span>Buat Album Baru</span>
                  </button>
                </div>

                {/* Form Album Baru */}
                {isAlbumFormOpen && (
                  <form onSubmit={handleSaveAlbum} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col gap-3 text-xs animate-in fade-in duration-300">
                    <span className="font-bold text-slate-800 border-b border-slate-200 pb-2">
                      {editingAlbum ? `Edit Album: ${editingAlbum.judul_album}` : 'Buat Album Dokumentasi Baru'}
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="flex flex-col gap-1">
                        <label className="font-bold text-slate-600">Judul Album *</label>
                        <input 
                          type="text" 
                          required
                          value={albumFormData.judul_album}
                          onChange={(e) => setAlbumFormData({ ...albumFormData, judul_album: e.target.value })}
                          placeholder="Contoh: Expo Milad UMP 2026"
                          className="p-2 border border-slate-200 rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-bold text-slate-600">Tanggal Acara</label>
                        <input 
                          type="date" 
                          value={albumFormData.tanggal_kegiatan}
                          onChange={(e) => setAlbumFormData({ ...albumFormData, tanggal_kegiatan: e.target.value })}
                          className="p-2 border border-slate-200 rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-bold text-slate-600">Deskripsi Singkat</label>
                        <input 
                          type="text" 
                          value={albumFormData.deskripsi_singkat}
                          onChange={(e) => setAlbumFormData({ ...albumFormData, deskripsi_singkat: e.target.value })}
                          placeholder="Pameran tugas akhir mahasiswa"
                          className="p-2 border border-slate-200 rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <button 
                        type="button" 
                        onClick={() => { setIsAlbumFormOpen(false); setEditingAlbum(null); }}
                        className="px-3 py-1.5 border border-slate-200 text-slate-600 font-bold rounded-lg cursor-pointer"
                      >
                        Batal
                      </button>
                      <button 
                        type="submit" 
                        className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg cursor-pointer"
                      >
                        {editingAlbum ? 'Simpan Perubahan' : 'Simpan Album'}
                      </button>
                    </div>
                  </form>
                )}

                {/* Album Management Area split in columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Left: Album Select list */}
                  <div className="lg:col-span-5 flex flex-col gap-3">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Langkah 1: Pilih Album Kegiatan</span>
                    <div className="flex flex-col gap-2.5 max-h-[350px] overflow-y-auto">
                      {albums.map((al) => (
                        <div 
                          key={al.id} 
                          onClick={() => setSelectedAlbumIdForPhotos(al.id)}
                          className={`p-3 border rounded-xl flex items-center justify-between cursor-pointer text-left transition-all ${
                            selectedAlbumIdForPhotos === al.id 
                              ? 'bg-emerald-50/50 border-emerald-300 shadow-sm' 
                              : 'bg-white border-slate-100 hover:border-slate-200'
                          }`}
                        >
                          <div className="flex flex-col gap-0.5">
                            <span className="font-bold text-slate-800 text-xs leading-tight">{al.judul_album}</span>
                            <span className="text-[10px] text-slate-400 font-mono">{al.tanggal_kegiatan}</span>
                            <span className="text-[10px] text-emerald-700 font-medium">
                              {photos.filter(p => p.album_id === al.id).length} Foto terunggah
                            </span>
                          </div>
                          <div className="flex gap-1 shrink-0">
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleOpenAlbumForm(al); }}
                              className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg cursor-pointer"
                              title="Edit Album"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleDeleteAlbum(al.id); }}
                              className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg cursor-pointer"
                              title="Hapus Album"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Upload Photo to Selected Album */}
                  <div className="lg:col-span-7 flex flex-col gap-3 border-l border-slate-100 pl-0 lg:pl-6">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Langkah 2: Kelola Foto Dalam Album Pilihan
                    </span>

                    {selectedAlbumIdForPhotos ? (
                      <div className="flex flex-col gap-4 text-left">
                        
                        {/* Title of selected album */}
                        <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                          <span className="text-[10px] text-slate-400 font-bold uppercase block">ALBUM AKTIF:</span>
                          <span className="font-display font-black text-xs text-slate-800">
                            {albums.find(a => a.id === selectedAlbumIdForPhotos)?.judul_album}
                          </span>
                        </div>

                        {/* Add Photo Form inside Album */}
                        <form onSubmit={handleAddPhoto} className="bg-white border border-slate-150 p-4 rounded-xl flex flex-col gap-3 text-xs">
                          <span className="font-bold text-slate-700">Tambahkan Foto Baru ke Album Ini</span>
                          <div className="flex flex-col gap-1 text-left">
                            <label className="font-bold text-slate-500 flex items-center justify-between">
                              <span>Foto/Media (URL atau Unggah File) *</span>
                              {isUploading && <span className="text-[10px] text-emerald-600 font-bold animate-pulse">Mengunggah...</span>}
                            </label>
                            <div className="flex gap-2">
                              <input 
                                type="text" 
                                required
                                value={newPhotoUrl}
                                onChange={(e) => setNewPhotoUrl(e.target.value)}
                                placeholder="https://images.unsplash.com/... atau pilih file di samping"
                                className="p-2 border border-slate-200 rounded-lg flex-1 text-xs"
                              />
                              <label className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 cursor-pointer shrink-0 transition-colors">
                                <Upload className="w-3.5 h-3.5 text-slate-500" />
                                <span className="text-[10px]">Unggah File</span>
                                <input 
                                  type="file" 
                                  accept="image/*,video/*"
                                  className="hidden" 
                                  onChange={async (e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      const url = await handleFileUpload(file);
                                      if (url) {
                                        setNewPhotoUrl(url);
                                        showAlert('File berhasil diunggah!');
                                      }
                                    }
                                  }} 
                                />
                              </label>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <label className="font-bold text-slate-500">Keterangan / Caption Foto</label>
                            <input 
                              type="text"
                              value={newPhotoKeterangan}
                              onChange={(e) => setNewPhotoKeterangan(e.target.value)}
                              placeholder="Contoh: Sambutan rektor, transaksi kasir..."
                              className="p-2 border border-slate-200 rounded-lg"
                            />
                          </div>
                          <button 
                            type="submit" 
                            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded-lg cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Unggah Foto</span>
                          </button>
                        </form>

                        {/* Image Thumbnails with deletion */}
                        <span className="text-[10px] font-bold text-slate-400 mt-2 block uppercase">Foto Terunggah di Album ini:</span>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[220px] overflow-y-auto pr-1">
                          {photos.filter(p => p.album_id === selectedAlbumIdForPhotos).map((ph) => (
                            <div key={ph.id} className="relative group rounded-lg overflow-hidden border border-slate-200 h-24 bg-slate-100">
                              <img src={ph.url_foto} alt="album item" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                                <p className="text-[9px] text-white text-center leading-snug line-clamp-2 absolute top-2 px-1">{ph.keterangan}</p>
                                <button 
                                  onClick={() => handleDeletePhoto(ph.id)}
                                  className="bg-red-600 hover:bg-red-500 text-white p-1.5 rounded-full absolute bottom-2 cursor-pointer shadow"
                                  title="Hapus foto"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          ))}
                          {photos.filter(p => p.album_id === selectedAlbumIdForPhotos).length === 0 && (
                            <p className="col-span-2 sm:col-span-3 text-xs text-slate-400 py-6 text-center">Belum ada foto dalam album ini.</p>
                          )}
                        </div>

                      </div>
                    ) : (
                      <div className="py-12 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400">
                        <ImageIcon className="w-10 h-10 text-slate-300 mb-2" />
                        <p className="text-xs">Silakan pilih salah satu album di sebelah kiri untuk mengunggah dan mengedit foto.</p>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            )}

            {/* ================= INBOX / PESAN MASUK ================= */}
            {activeSubTab === 'pesan' && (
              <div className="flex flex-col gap-6 text-left">
                <div>
                  <h3 className="font-display font-bold text-slate-800 text-sm">Pesan Masuk & Registrasi Program</h3>
                  <p className="text-slate-400 text-[11px] mt-0.5">
                    Lihat pesan formulir kontak, pengajuan inkubasi, dan pendaftaran program mahasiswa.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {filteredPendaftaran.map((reg) => (
                    <div 
                      key={reg.id} 
                      className={`border p-5 rounded-2xl shadow-sm text-left flex flex-col gap-3 transition-colors ${
                        reg.status === 'Masuk' ? 'bg-amber-50/20 border-amber-200' : 'bg-white border-slate-100'
                      }`}
                    >
                      {/* Top bar info */}
                      <div className="flex flex-wrap justify-between items-start gap-2 border-b border-slate-100 pb-2.5">
                        <div className="flex flex-col gap-1">
                          <span className="font-display font-bold text-slate-800 text-xs sm:text-sm">{reg.nama}</span>
                          <span className="text-[10px] text-slate-400 font-mono">{reg.email} • {reg.no_hp}</span>
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                          <span className="text-[9px] text-slate-400 font-mono">{reg.tanggal_masuk}</span>
                          <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded border ${
                            reg.status === 'Masuk' ? 'bg-red-50 text-red-700 border-red-100' :
                            reg.status === 'Diproses' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                            reg.status === 'Diterima' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                            'bg-rose-50 text-rose-700 border-rose-100'
                          }`}>{reg.status}</span>
                        </div>
                      </div>

                      {/* Targeted Program Details */}
                      <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg text-xs">
                        <span className="font-bold text-slate-500 block text-[9px] uppercase tracking-wide">Program yang didaftar / ditanyakan:</span>
                        <span className="font-display font-bold text-slate-800 mt-1 block">{getProgramName(reg.program_id)}</span>
                      </div>

                      {/* Content Message */}
                      <div className="text-xs text-slate-600 leading-relaxed font-sans whitespace-pre-wrap bg-slate-50/50 p-3 rounded-lg border border-slate-100/50">
                        {reg.pesan}
                      </div>

                      {/* Proposal File Download */}
                      {reg.file_proposal && (
                        <a 
                          href={reg.file_proposal} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2.5 hover:bg-blue-100 transition-colors group"
                        >
                          <FileText className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-wide block">Berkas Proposal</span>
                            <span className="text-xs text-blue-700 font-medium truncate block">
                              {reg.file_proposal.split('/').pop() || 'Unduh Berkas'}
                            </span>
                          </div>
                          <Download className="w-4 h-4 text-blue-500 group-hover:text-blue-700 flex-shrink-0" />
                        </a>
                      )}

                      {/* Actions & Status Updates */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Ubah Status:</span>
                          <button 
                            onClick={() => handleUpdatePendaftaranStatus(reg.id, 'Diproses')}
                            className="px-2 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-150 rounded text-[10px] font-bold cursor-pointer"
                          >
                            Proses
                          </button>
                          <button 
                            onClick={() => handleUpdatePendaftaranStatus(reg.id, 'Diterima')}
                            className="px-2 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-150 rounded text-[10px] font-bold cursor-pointer"
                          >
                            Terima
                          </button>
                          <button 
                            onClick={() => handleUpdatePendaftaranStatus(reg.id, 'Ditolak')}
                            className="px-2 py-1 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-150 rounded text-[10px] font-bold cursor-pointer"
                          >
                            Tolak
                          </button>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => handleDeletePendaftaran(reg.id)}
                            className="p-1.5 hover:bg-slate-100 rounded text-rose-600 border border-slate-200 cursor-pointer"
                            title="Hapus pesan"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {filteredPendaftaran.length === 0 && (
                    <div className="py-12 border-2 border-dashed border-slate-100 rounded-2xl flex flex-col items-center justify-center text-slate-400">
                      <Inbox className="w-10 h-10 text-slate-300 mb-2" />
                      <p className="text-xs">Tidak ada pesan masuk atau pendaftaran program saat ini.</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ================= KELOLA PRESTASI ================= */}
            {activeSubTab === 'prestasi' && (
              <div className="flex flex-col gap-6 text-left animate-in fade-in duration-200">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="font-display font-bold text-slate-800 text-md">Kelola Prestasi Wirausaha Mahasiswa</h3>
                    <p className="text-slate-400 text-xs mt-0.5">Kelola data prestasi kompetisi, hibah, wirausaha tingkat regional hingga internasional.</p>
                  </div>
                  {!isPrestasiFormOpen && (
                    <button 
                      onClick={() => handleOpenPrestasiForm()}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Tambah Prestasi</span>
                    </button>
                  )}
                </div>

                {isPrestasiFormOpen ? (
                  <form onSubmit={handleSavePrestasi} className="bg-slate-50 border border-slate-150 p-6 rounded-2xl flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
                    <div className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                      <span className="font-sans font-black text-sm text-slate-800">
                        {editingPrestasi ? 'Edit Prestasi Wirausaha' : 'Tambah Prestasi Wirausaha Baru'}
                      </span>
                      <button type="button" onClick={() => setIsPrestasiFormOpen(false)} className="text-slate-400 hover:text-slate-600 p-1 rounded-lg">
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Judul */}
                      <div className="flex flex-col gap-1.5 md:col-span-2">
                        <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">Judul Prestasi / Penghargaan *</label>
                        <input 
                          type="text"
                          required
                          value={prestasiFormData.judul}
                          onChange={(e) => setPrestasiFormData({ ...prestasiFormData, judul: e.target.value })}
                          placeholder="Contoh: Juara 1 Nasional Kategori Makanan & Minuman KMI Expo 2025"
                          className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white"
                        />
                      </div>

                      {/* Tim Usaha */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">Nama Tim / Nama Usaha *</label>
                        <input 
                          type="text"
                          required
                          value={prestasiFormData.tim_usaha}
                          onChange={(e) => setPrestasiFormData({ ...prestasiFormData, tim_usaha: e.target.value })}
                          placeholder="Contoh: Tim Ambara (2024)"
                          className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white"
                        />
                      </div>

                      {/* Nama Mahasiswa */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">Nama Anggota Mahasiswa (Koma Terpisah) *</label>
                        <input 
                          type="text"
                          required
                          value={prestasiFormData.nama_mahasiswa}
                          onChange={(e) => setPrestasiFormData({ ...prestasiFormData, nama_mahasiswa: e.target.value })}
                          placeholder="Contoh: Zidan Al-Ghifari, Hanif Prasetyo, Rian Ardiansyah"
                          className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white"
                        />
                      </div>

                      {/* Tingkat */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">Tingkat Kompetisi / Prestasi</label>
                        <select 
                          value={prestasiFormData.tingkat}
                          onChange={(e) => setPrestasiFormData({ ...prestasiFormData, tingkat: e.target.value as any })}
                          className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white"
                        >
                          <option value="Nasional">Nasional</option>
                          <option value="Regional">Regional</option>
                          <option value="Internasional">Internasional</option>
                          <option value="Lokal">Lokal</option>
                        </select>
                      </div>

                      {/* Tahun */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">Tahun Perolehan *</label>
                        <input 
                          type="text"
                          required
                          value={prestasiFormData.tahun}
                          onChange={(e) => setPrestasiFormData({ ...prestasiFormData, tahun: e.target.value })}
                          placeholder="Contoh: 2026"
                          className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white"
                        />
                      </div>

                      {/* Peringkat */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">Peringkat / Predikat *</label>
                        <input 
                          type="text"
                          required
                          value={prestasiFormData.peringkat}
                          onChange={(e) => setPrestasiFormData({ ...prestasiFormData, peringkat: e.target.value })}
                          placeholder="Contoh: Juara 1 Terbaik, Penerima Hibah, Medali Emas"
                          className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white"
                        />
                      </div>

                      {/* Penyelenggara */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">Penyelenggara Kegiatan *</label>
                        <input 
                          type="text"
                          required
                          value={prestasiFormData.penyelenggara}
                          onChange={(e) => setPrestasiFormData({ ...prestasiFormData, penyelenggara: e.target.value })}
                          placeholder="Contoh: Direktorat Belmawa Kemendikbudristek"
                          className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white"
                        />
                      </div>

                      {/* Foto Prestasi */}
                      <div className="flex flex-col gap-1.5 md:col-span-2 text-left">
                        <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono flex items-center justify-between">
                          <span>Foto Prestasi / Kegiatan (URL atau Unggah File)</span>
                          {isUploading && <span className="text-[10px] text-emerald-600 font-bold animate-pulse">Mengunggah...</span>}
                        </label>
                        <div className="flex gap-2">
                          <input 
                            type="text"
                            value={prestasiFormData.foto_prestasi}
                            onChange={(e) => setPrestasiFormData({ ...prestasiFormData, foto_prestasi: e.target.value })}
                            placeholder="https://images.unsplash.com/... atau pilih file di samping"
                            className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white flex-1"
                          />
                          <label className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-bold px-3 py-2 rounded-xl flex items-center gap-1.5 cursor-pointer shrink-0 transition-colors">
                            <Upload className="w-3.5 h-3.5 text-slate-500" />
                            <span className="text-[10px]">Unggah File</span>
                            <input 
                              type="file" 
                              accept="image/*,video/*"
                              className="hidden" 
                              onChange={async (e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const url = await handleFileUpload(file);
                                  if (url) {
                                    setPrestasiFormData({ ...prestasiFormData, foto_prestasi: url });
                                    showAlert('File berhasil diunggah!');
                                  }
                                }
                              }} 
                            />
                          </label>
                        </div>
                      </div>

                      {/* Deskripsi */}
                      <div className="flex flex-col gap-1.5 md:col-span-2">
                        <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">Deskripsi Prestasi / Cerita Sukses</label>
                        <textarea 
                          rows={4}
                          value={prestasiFormData.deskripsi}
                          onChange={(e) => setPrestasiFormData({ ...prestasiFormData, deskripsi: e.target.value })}
                          placeholder="Ceritakan detail kompetisi, inovasi apa yang dibawa, tantangan, dan hasil positif yang diperoleh..."
                          className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white resize-y"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 border-t border-slate-200/60 pt-4 mt-2">
                      <button 
                        type="button" 
                        onClick={() => setIsPrestasiFormOpen(false)}
                        className="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-xl text-xs font-bold transition-all text-slate-700 cursor-pointer"
                      >
                        Batal
                      </button>
                      <button 
                        type="submit"
                        className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-xs font-bold transition-all text-white flex items-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>{editingPrestasi ? 'Perbarui' : 'Simpan'}</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredPrestasi.map((item) => (
                        <div key={item.id} className="border border-slate-200/70 p-4 rounded-2xl flex gap-4 bg-white hover:shadow-xs transition-all text-left">
                          <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-slate-100 bg-slate-50">
                            <img 
                              src={item.foto_prestasi || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'} 
                              alt={item.judul}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100 font-mono">
                                {item.tingkat} • {item.tahun}
                              </span>
                              <div className="flex items-center gap-1 shrink-0">
                                <button 
                                  onClick={() => handleOpenPrestasiForm(item)}
                                  className="p-1 hover:bg-slate-50 rounded text-slate-500 hover:text-blue-600 border border-transparent hover:border-slate-100 transition-all cursor-pointer"
                                  title="Edit prestasi"
                                >
                                  <Edit2 className="w-3 h-3" />
                                </button>
                                <button 
                                  onClick={() => handleDeletePrestasi(item.id)}
                                  className="p-1 hover:bg-slate-50 rounded text-slate-500 hover:text-rose-600 border border-transparent hover:border-slate-100 transition-all cursor-pointer"
                                  title="Hapus prestasi"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              </div>
                            </div>

                            <h4 className="font-display font-bold text-slate-800 text-xs sm:text-[13px] leading-snug line-clamp-2">{item.judul}</h4>
                            <span className="text-[10px] text-slate-500 font-medium">Usaha: <span className="font-bold text-slate-700">{item.tim_usaha}</span></span>
                            <span className="text-[9px] text-slate-400 truncate">Siswa: {item.nama_mahasiswa}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {filteredPrestasi.length === 0 && (
                      <div className="py-12 border-2 border-dashed border-slate-100 rounded-2xl flex flex-col items-center justify-center text-slate-400">
                        <Award className="w-10 h-10 text-slate-300 mb-2" />
                        <p className="text-xs">Tidak ada prestasi ditemukan.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* ================= KELOLA PROFIL ================= */}
            {activeSubTab === 'profil' && (
              <form onSubmit={handleSaveProfil} className="flex flex-col gap-6 text-left animate-in fade-in duration-200">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="font-display font-bold text-slate-800 text-md">Kelola Profil Lembaga ISBI UMP</h3>
                    <p className="text-slate-400 text-xs mt-0.5">Edit konten halaman profil utama: Sejarah, Visi, Misi, Struktur Organisasi, dan Kontak Resmi.</p>
                  </div>
                  <button 
                    type="submit"
                    className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-xs font-bold transition-all text-white flex items-center gap-1.5 cursor-pointer shadow-sm animate-pulse-subtle"
                  >
                    <Save className="w-4 h-4" />
                    <span>Simpan Perubahan</span>
                  </button>
                </div>

                {/* Section A: Sejarah */}
                <div className="bg-slate-50 border border-slate-150 p-5 rounded-2xl flex flex-col gap-4">
                  <span className="font-sans font-black text-xs sm:text-sm text-[#032050] tracking-tight pb-1 border-b border-slate-200/60 block">
                    A. Bagian Sejarah Singkat
                  </span>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">Judul Sejarah *</label>
                      <input 
                        type="text"
                        required
                        value={profilFormData.sejarah_judul}
                        onChange={(e) => setProfilFormData({ ...profilFormData, sejarah_judul: e.target.value })}
                        className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono flex items-center justify-between">
                        <span>Foto Sejarah (URL atau Unggah File) *</span>
                        {isUploading && <span className="text-[10px] text-emerald-600 font-bold animate-pulse">Mengunggah...</span>}
                      </label>
                      <div className="flex gap-2">
                        <input 
                          type="text"
                          required
                          value={profilFormData.sejarah_foto}
                          onChange={(e) => setProfilFormData({ ...profilFormData, sejarah_foto: e.target.value })}
                          placeholder="https://images.unsplash.com/... atau pilih file di samping"
                          className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white flex-1"
                        />
                        <label className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-bold px-3 py-2 rounded-xl flex items-center gap-1.5 cursor-pointer shrink-0 transition-colors">
                          <Upload className="w-3.5 h-3.5 text-slate-500" />
                          <span className="text-[10px]">Unggah File</span>
                          <input 
                            type="file" 
                            accept="image/*,video/*"
                            className="hidden" 
                            onChange={async (e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                const url = await handleFileUpload(file);
                                if (url) {
                                  setProfilFormData({ ...profilFormData, sejarah_foto: url });
                                  showAlert('File berhasil diunggah!');
                                }
                              }
                            }} 
                          />
                        </label>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 md:col-span-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">Paragraf Sejarah 1 *</label>
                      <textarea 
                        rows={3}
                        required
                        value={profilFormData.sejarah_p1}
                        onChange={(e) => setProfilFormData({ ...profilFormData, sejarah_p1: e.target.value })}
                        className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white resize-y"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 md:col-span-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">Paragraf Sejarah 2 (Opsional)</label>
                      <textarea 
                        rows={2}
                        value={profilFormData.sejarah_p2}
                        onChange={(e) => setProfilFormData({ ...profilFormData, sejarah_p2: e.target.value })}
                        className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white resize-y"
                      />
                    </div>
                  </div>
                </div>

                {/* Section B: Visi & Misi */}
                <div className="bg-slate-50 border border-slate-150 p-5 rounded-2xl flex flex-col gap-4">
                  <span className="font-sans font-black text-xs sm:text-sm text-[#032050] tracking-tight pb-1 border-b border-slate-200/60 block">
                    B. Visi & Misi Lembaga
                  </span>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">Visi Lembaga *</label>
                    <textarea 
                      rows={2}
                      required
                      value={profilFormData.visi_konten}
                      onChange={(e) => setProfilFormData({ ...profilFormData, visi_konten: e.target.value })}
                      className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white resize-y"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">Daftar Misi (Satu baris untuk satu poin misi) *</label>
                    <textarea 
                      rows={4}
                      required
                      value={profilFormData.misi_list.join('\n')}
                      onChange={(e) => setProfilFormData({ ...profilFormData, misi_list: e.target.value.split('\n').filter(line => line.trim() !== '') })}
                      placeholder="Masukkan poin-poin misi Anda, pisahkan dengan baris baru..."
                      className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white resize-y font-sans"
                    />
                  </div>
                </div>

                {/* Section C: Struktur Organisasi (Dynamic CRUD) */}
                <div className="bg-slate-50 border border-slate-150 p-5 rounded-2xl flex flex-col gap-4">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200/65">
                    <span className="font-sans font-black text-xs sm:text-sm text-[#032050] tracking-tight">
                      C. Kelola Anggota Struktur Organisasi (CRUD)
                    </span>
                    {!isOrgFormOpen && (
                      <button 
                        type="button"
                        onClick={() => handleOpenOrgForm()}
                        className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold rounded-lg transition-all flex items-center gap-1 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Tambah Anggota</span>
                      </button>
                    )}
                  </div>

                  {isOrgFormOpen ? (
                    <div className="bg-white border border-slate-150 p-4 rounded-xl flex flex-col gap-4 text-left">
                      <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                        <span className="font-sans font-bold text-xs text-slate-800">
                          {editingOrg ? 'Edit Anggota Organisasi' : 'Tambah Anggota Baru'}
                        </span>
                        <button type="button" onClick={() => setIsOrgFormOpen(false)} className="text-slate-400 hover:text-slate-650 font-bold p-1 rounded-lg">
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Nama */}
                        <div className="flex flex-col gap-1.5 md:col-span-2 text-left">
                          <label className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">Nama Lengkap & Gelar *</label>
                          <input 
                            type="text"
                            required
                            value={orgFormData.nama}
                            onChange={(e) => setOrgFormData({ ...orgFormData, nama: e.target.value })}
                            placeholder="Contoh: Efi Miftah Faridli, M. Pd."
                            className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white"
                          />
                        </div>

                        {/* Urutan */}
                        <div className="flex flex-col gap-1.5 text-left">
                          <label className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">No. Urut Tampilan *</label>
                          <input 
                            type="number"
                            required
                            min="1"
                            value={orgFormData.urutan}
                            onChange={(e) => setOrgFormData({ ...orgFormData, urutan: parseInt(e.target.value) || 1 })}
                            className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white"
                          />
                        </div>

                        {/* Jabatan */}
                        <div className="flex flex-col gap-1.5 md:col-span-3 text-left">
                          <label className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">Jabatan / Peran *</label>
                          <input 
                            type="text"
                            required
                            value={orgFormData.jabatan}
                            onChange={(e) => setOrgFormData({ ...orgFormData, jabatan: e.target.value })}
                            placeholder="Contoh: Kepala Biro Kemahasiswaan dan Alumni"
                            className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white"
                          />
                        </div>

                        {/* Foto */}
                        <div className="flex flex-col gap-1.5 md:col-span-3 text-left">
                          <label className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 font-mono flex items-center justify-between">
                            <span>Foto Anggota (URL atau Unggah)</span>
                            {isUploading && <span className="text-[9px] text-emerald-600 font-bold animate-pulse">Mengunggah...</span>}
                          </label>
                          <div className="flex gap-2">
                            <input 
                              type="text"
                              value={orgFormData.foto}
                              onChange={(e) => setOrgFormData({ ...orgFormData, foto: e.target.value })}
                              placeholder="https://images.unsplash.com/... atau pilih file di samping"
                              className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white flex-1"
                            />
                            <label className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-bold px-3 py-2 rounded-xl flex items-center gap-1.5 cursor-pointer shrink-0 transition-colors">
                              <Upload className="w-3.5 h-3.5 text-slate-500" />
                              <span className="text-[10px]">Unggah File</span>
                              <input 
                                type="file" 
                                accept="image/*"
                                className="hidden" 
                                onChange={async (e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    const url = await handleFileUpload(file);
                                    if (url) {
                                      setOrgFormData({ ...orgFormData, foto: url });
                                      showAlert('File foto berhasil diunggah!');
                                    }
                                  }
                                }} 
                              />
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end gap-2 border-t border-slate-200/60 pt-4 mt-2">
                        <button 
                          type="button" 
                          onClick={() => setIsOrgFormOpen(false)}
                          className="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-xl text-xs font-bold transition-all text-slate-700 cursor-pointer"
                        >
                          Batal
                        </button>
                        <button 
                          type="button"
                          onClick={handleSaveOrg}
                          className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-sm"
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>Simpan</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                      {organisasiList.sort((a,b) => a.urutan - b.urutan).map((member) => (
                        <div 
                          key={member.id} 
                          className="border border-slate-200 p-3 rounded-xl flex items-center gap-3.5 bg-white hover:border-slate-350 transition-all text-left relative group"
                        >
                          {/* Avatar */}
                          <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-100 bg-slate-50 flex items-center justify-center">
                            <img 
                              src={member.foto || "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"} 
                              alt={member.nama} 
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          {/* Member info */}
                          <div className="flex-1 min-w-0 pr-16">
                            <h4 className="font-sans font-bold text-slate-800 text-[13px] truncate leading-tight flex items-center gap-1.5">
                              <span>{member.nama}</span>
                              <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-full font-mono border border-slate-200">#{member.urutan}</span>
                            </h4>
                            <p className="text-[10px] text-slate-400 font-medium truncate mt-1">{member.jabatan}</p>
                          </div>

                          {/* Actions */}
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                            <button 
                              type="button"
                              onClick={() => handleOpenOrgForm(member)}
                              className="p-1 hover:bg-slate-50 rounded text-slate-500 hover:text-blue-600 border border-slate-100 transition-all cursor-pointer"
                              title="Edit anggota"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button 
                              type="button"
                              onClick={() => handleDeleteOrg(member.id)}
                              className="p-1 hover:bg-slate-50 rounded text-slate-500 hover:text-rose-600 border border-slate-100 transition-all cursor-pointer"
                              title="Hapus anggota"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                      {organisasiList.length === 0 && (
                        <div className="col-span-2 py-8 border border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-400">
                          <Compass className="w-8 h-8 text-slate-300 mb-1" />
                          <p className="text-xs font-semibold">Belum ada anggota struktur organisasi terdaftar.</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Section D: Kontak */}
                <div className="bg-slate-50 border border-slate-150 p-5 rounded-2xl flex flex-col gap-4">
                  <span className="font-sans font-black text-xs sm:text-sm text-[#032050] tracking-tight pb-1 border-b border-slate-200/60 block">
                    D. Koordinat Kontak Lembaga
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1.5 md:col-span-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono font-sans">Alamat Kantor Resmi *</label>
                      <input 
                        type="text"
                        required
                        value={profilFormData.kontak_alamat}
                        onChange={(e) => setProfilFormData({ ...profilFormData, kontak_alamat: e.target.value })}
                        className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono font-sans">No WhatsApp / HP *</label>
                      <input 
                        type="text"
                        required
                        value={profilFormData.kontak_phone}
                        onChange={(e) => setProfilFormData({ ...profilFormData, kontak_phone: e.target.value })}
                        className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono font-sans">Alamat Email *</label>
                      <input 
                        type="email"
                        required
                        value={profilFormData.kontak_email}
                        onChange={(e) => setProfilFormData({ ...profilFormData, kontak_email: e.target.value })}
                        className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2 border-t border-slate-100 pt-5">
                  <button 
                    type="submit"
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>Simpan Seluruh Perubahan</span>
                  </button>
                </div>
              </form>
            )}

            {/* ================= KELOLA BANNER BERANDA ================= */}
            {activeSubTab === 'banner' && (
              <div className="flex flex-col gap-6 text-left animate-in fade-in duration-200">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="font-display font-bold text-slate-800 text-md">Kelola Banner Beranda</h3>
                    <p className="text-slate-400 text-xs mt-0.5">Kelola gambar/video promosi utama, slogan, dan tautan tombol di halaman depan.</p>
                  </div>
                  {!isBannerFormOpen && (
                    <button 
                      onClick={() => handleOpenBannerForm()}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Tambah Slide Banner</span>
                    </button>
                  )}
                </div>

                {isBannerFormOpen ? (
                  <form onSubmit={handleSaveBanner} className="bg-slate-50 border border-slate-150 p-6 rounded-2xl flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
                    <div className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                      <span className="font-sans font-black text-sm text-slate-800">
                        {editingBanner ? 'Edit Slide Banner' : 'Tambah Slide Banner Baru'}
                      </span>
                      <button type="button" onClick={() => setIsBannerFormOpen(false)} className="text-slate-400 hover:text-slate-600 p-1 rounded-lg">
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Judul */}
                      <div className="flex flex-col gap-1.5 md:col-span-2">
                        <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">Judul Utama Banner *</label>
                        <input 
                          type="text"
                          required
                          value={bannerFormData.title}
                          onChange={(e) => setBannerFormData({ ...bannerFormData, title: e.target.value })}
                          placeholder="Contoh: Mencetak Wirausaha Mandiri Sukses"
                          className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white"
                        />
                      </div>

                      {/* Subjudul */}
                      <div className="flex flex-col gap-1.5 md:col-span-2">
                        <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">Subjudul / Deskripsi Singkat</label>
                        <textarea 
                          rows={2}
                          value={bannerFormData.subtitle}
                          onChange={(e) => setBannerFormData({ ...bannerFormData, subtitle: e.target.value })}
                          placeholder="Tulis penjelasan singkat mengenai program atau promosi ini..."
                          className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white"
                        />
                      </div>

                      {/* Label Kecil (Badge) */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono font-sans">Label Mini (Badge)</label>
                        <input 
                          type="text"
                          value={bannerFormData.badge}
                          onChange={(e) => setBannerFormData({ ...bannerFormData, badge: e.target.value })}
                          placeholder="Contoh: Program P2MW"
                          className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white"
                        />
                      </div>

                      {/* Gradien Tema */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono font-sans">Preset Gradien Latar Belakang</label>
                        <select 
                          value={bannerFormData.gradient}
                          onChange={(e) => setBannerFormData({ ...bannerFormData, gradient: e.target.value })}
                          className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white"
                        >
                          <option value="from-[#032050] via-[#032050]/80 to-transparent">Deep Blue UMP</option>
                          <option value="from-[#0a192f] via-[#0a192f]/85 to-transparent">Midnight Dark</option>
                          <option value="from-[#042f2e] via-[#042f2e]/85 to-transparent">Forest Teal</option>
                          <option value="from-[#020617] via-[#020617]/90 to-transparent">Obsidian Slate</option>
                          <option value="from-[#1e1b4b] via-[#1e1b4b]/85 to-transparent">Indigo Nebula</option>
                        </select>
                      </div>

                      {/* Gambar Banner */}
                      <div className="flex flex-col gap-1.5 md:col-span-2">
                        <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">Tautan Gambar / Video Banner (Maks. 10MB)</label>
                        <div className="flex gap-2">
                          <input 
                            type="text"
                            required
                            value={bannerFormData.image}
                            onChange={(e) => setBannerFormData({ ...bannerFormData, image: e.target.value })}
                            placeholder="URL gambar (https://...) atau unggah berkas lokal"
                            className="flex-1 px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white"
                          />
                          <div className="relative">
                            <input 
                              type="file"
                              accept="image/*,video/*"
                              onChange={async (e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const url = await handleFileUpload(file);
                                  if (url) setBannerFormData({ ...bannerFormData, image: url });
                                }
                              }}
                              className="hidden"
                              id="banner-image-upload"
                            />
                            <label 
                              htmlFor="banner-image-upload"
                              className="px-4 py-3 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer h-full transition-all"
                            >
                              <Upload className="w-3.5 h-3.5 shrink-0" />
                              <span>Unggah</span>
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Tombol Utama (CTA) */}
                      <div className="flex flex-col gap-1.5 border border-slate-200 p-3 rounded-xl bg-white">
                        <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 font-mono mb-1">Konfigurasi Tombol Utama</span>
                        <div className="flex flex-col gap-2">
                          <input 
                            type="text"
                            value={bannerFormData.ctaText}
                            onChange={(e) => setBannerFormData({ ...bannerFormData, ctaText: e.target.value })}
                            placeholder="Teks Tombol (misal: Daftar Sekarang)"
                            className="w-full px-3.5 py-1.5 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-emerald-500"
                          />
                          <select 
                            value={bannerFormData.ctaTab}
                            onChange={(e) => setBannerFormData({ ...bannerFormData, ctaTab: e.target.value })}
                            className="w-full px-3.5 py-1.5 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white"
                          >
                            <option value="beranda">Tab: Beranda</option>
                            <option value="profil">Tab: Profil</option>
                            <option value="program">Tab: Program</option>
                            <option value="berita">Tab: Berita</option>
                            <option value="prestasi">Tab: Prestasi</option>
                            <option value="galeri">Tab: Galeri</option>
                            <option value="umkm">Tab: UMKM</option>
                            <option value="kontak">Tab: Kontak / Hubungi Kami</option>
                          </select>
                        </div>
                      </div>

                      {/* Tombol Sekunder */}
                      <div className="flex flex-col gap-1.5 border border-slate-200 p-3 rounded-xl bg-white">
                        <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 font-mono mb-1">Konfigurasi Tombol Sekunder</span>
                        <div className="flex flex-col gap-2">
                          <input 
                            type="text"
                            value={bannerFormData.secondaryText}
                            onChange={(e) => setBannerFormData({ ...bannerFormData, secondaryText: e.target.value })}
                            placeholder="Teks Tombol (misal: Pelajari Lebih Lanjut)"
                            className="w-full px-3.5 py-1.5 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-emerald-500"
                          />
                          <select 
                            value={bannerFormData.secondaryTab}
                            onChange={(e) => setBannerFormData({ ...bannerFormData, secondaryTab: e.target.value })}
                            className="w-full px-3.5 py-1.5 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white"
                          >
                            <option value="beranda">Tab: Beranda</option>
                            <option value="profil">Tab: Profil</option>
                            <option value="program">Tab: Program</option>
                            <option value="berita">Tab: Berita</option>
                            <option value="prestasi">Tab: Prestasi</option>
                            <option value="galeri">Tab: Galeri</option>
                            <option value="umkm">Tab: UMKM</option>
                            <option value="kontak">Tab: Kontak / Hubungi Kami</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 border-t border-slate-200/60 pt-4 mt-2">
                      <button 
                        type="button" 
                        onClick={() => setIsBannerFormOpen(false)}
                        className="px-4 py-2 border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-100 cursor-pointer text-xs"
                      >
                        Batal
                      </button>
                      <button 
                        type="submit"
                        className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
                      >
                        {editingBanner ? 'Simpan Suntingan' : 'Tambahkan Banner'}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="flex flex-col gap-4">
                    {/* Instructions note */}
                    <div className="bg-amber-50/60 border border-amber-200/80 p-3.5 rounded-xl text-left">
                      <p className="text-[11px] text-amber-900 leading-relaxed font-sans">
                        <span className="font-extrabold block mb-0.5">💡 Tips Pengelolaan Banner Beranda</span>
                        Gunakan tombol naik/turun (<span className="font-bold">▲/▼</span>) untuk mengubah posisi urutan slide di halaman depan. Untuk performa terbaik, kami merekomendasikan resolusi gambar landscape minimal <span className="font-bold">1200 x 500 px</span> dengan format WebP atau JPG terkompresi. Format video didukung (.mp4).
                      </p>
                    </div>

                    {/* Table / Card List */}
                    <div className="flex flex-col gap-3">
                      {heroSlides.map((slide, idx) => (
                        <div 
                          key={slide.id}
                          className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-slate-300 transition-colors"
                        >
                          {/* Image & Title Info */}
                          <div className="flex items-center gap-3.5 flex-1 min-w-0">
                            {/* Order Badge */}
                            <span className="h-6 w-6 shrink-0 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center text-xs font-mono font-black text-slate-500">
                              {idx + 1}
                            </span>
                            {/* Thumbnail */}
                            <div className="w-20 h-12 bg-slate-100 rounded-lg overflow-hidden shrink-0 border border-slate-200">
                              <img 
                                src={slide.image} 
                                alt={slide.title} 
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            {/* Text details */}
                            <div className="text-left truncate flex-1">
                              {slide.badge && (
                                <span className="bg-amber-100 text-amber-800 text-[9px] font-bold px-2 py-0.5 rounded mr-2">
                                  {slide.badge}
                                </span>
                              )}
                              <h4 className="text-slate-800 font-bold text-xs truncate leading-snug mt-1">
                                {slide.title}
                              </h4>
                              <p className="text-slate-400 text-[10px] truncate mt-0.5">
                                {slide.subtitle || 'Tidak ada deskripsi'}
                              </p>
                            </div>
                          </div>

                          {/* Control Buttons & Actions */}
                          <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-end border-t md:border-t-0 pt-3 md:pt-0">
                            {/* Ordering Buttons */}
                            <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-lg border border-slate-200">
                              <button 
                                onClick={() => handleMoveBannerOrder(idx, 'up')}
                                disabled={idx === 0}
                                className="p-1 text-slate-500 hover:text-slate-800 disabled:opacity-30 disabled:pointer-events-none hover:bg-white rounded cursor-pointer text-[10px] font-bold"
                                title="Naikkan Urutan"
                              >
                                ▲
                              </button>
                              <button 
                                onClick={() => handleMoveBannerOrder(idx, 'down')}
                                disabled={idx === heroSlides.length - 1}
                                className="p-1 text-slate-500 hover:text-slate-800 disabled:opacity-30 disabled:pointer-events-none hover:bg-white rounded cursor-pointer text-[10px] font-bold"
                                title="Turunkan Urutan"
                              >
                                ▼
                              </button>
                            </div>

                            {/* CRUD buttons */}
                            <button 
                              onClick={() => handleOpenBannerForm(slide)}
                              className="px-2.5 py-1.5 text-slate-600 hover:text-emerald-700 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-extrabold flex items-center gap-1 cursor-pointer transition-colors uppercase"
                            >
                              <Edit2 className="w-3 h-3 text-slate-400" />
                              <span>Edit</span>
                            </button>

                            <button 
                              onClick={() => handleDeleteBanner(slide.id)}
                              className="px-2.5 py-1.5 text-red-600 hover:text-white hover:bg-rose-600 border border-slate-200 hover:border-transparent rounded-lg text-[10px] font-extrabold flex items-center gap-1 cursor-pointer transition-all uppercase"
                            >
                              <Trash2 className="w-3 h-3 text-red-400 hover:text-white" />
                              <span>Hapus</span>
                            </button>
                          </div>
                        </div>
                      ))}

                      {heroSlides.length === 0 && (
                        <div className="py-16 text-center border border-dashed border-slate-200 rounded-2xl bg-white p-8">
                          <LayoutDashboard className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                          <h4 className="font-bold text-slate-700 text-xs">Belum ada slide banner</h4>
                          <p className="text-[10px] text-slate-400 mt-1 max-w-xs mx-auto">
                            Halaman depan akan menampilkan latar default kosong. Tambahkan slide banner baru untuk menyapa pengunjung.
                          </p>
                          <button
                            onClick={() => handleOpenBannerForm()}
                            className="mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-sm transition-colors cursor-pointer"
                          >
                            Tambah Slide Pertama
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Kustom Confirm Modal */}
      {confirmDialog.isOpen && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200 font-sans">
          <div className="bg-white rounded-xl border border-slate-200 shadow-2xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-200 text-left">
            <div className="p-6 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-rose-50 border border-rose-100 text-rose-600 mb-4 animate-pulse">
                <AlertCircle className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-bold text-slate-800 tracking-tight">{confirmDialog.title}</h3>
              <p className="text-[11px] text-slate-500 mt-2 leading-relaxed px-2">
                {confirmDialog.message}
              </p>
            </div>
            <div className="bg-slate-50 px-4 py-3 sm:px-6 flex flex-row-reverse justify-center gap-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  confirmDialog.onConfirm();
                  setConfirmDialog(prev => ({ ...prev, isOpen: false }));
                }}
                className="w-full inline-flex justify-center rounded-xl border border-transparent shadow-sm px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-bold transition-colors cursor-pointer"
              >
                {confirmDialog.confirmText || 'Hapus Permanen'}
              </button>
              <button
                type="button"
                onClick={() => setConfirmDialog(prev => ({ ...prev, isOpen: false }))}
                className="w-full inline-flex justify-center rounded-xl border border-slate-200 shadow-sm px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 text-[11px] font-bold transition-colors cursor-pointer"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
