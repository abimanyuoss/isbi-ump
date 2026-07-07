import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  onCtaClick: (tabId: string) => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Mencetak Mahasiswa Pengusaha Berkemajuan",
      subtitle: "Inkubator Sentra Bisnis dan Inovasi Universitas Muhammadiyah Purwokerto. Kembangkan ide bisnismu menjadi nyata bersama kami.",
      ctaText: "Daftar Sekarang",
      ctaTab: "kontak",
      secondaryText: "Pelajari Lebih Lanjut",
      secondaryTab: "program",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200",
      badge: "Inkubasi Bisnis UMP",
      gradient: "from-[#032050] via-[#032050]/80 to-transparent"
    },
    {
      title: "Dana Hibah & Mentoring Bisnis P2MW 2026",
      subtitle: "Kesempatan emas bagi kelompok usaha mahasiswa UMP untuk mendapatkan dana pembinaan, pameran produk, dan sertifikasi usaha gratis.",
      ctaText: "Panduan Pendaftaran",
      ctaTab: "kontak",
      secondaryText: "Daftar Tenant",
      secondaryTab: "program",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
      badge: "Program Hibah P2MW",
      gradient: "from-[#0a192f] via-[#0a192f]/85 to-transparent"
    },
    {
      title: "Prestasi Wirausaha Tingkat Nasional",
      subtitle: "ISBI UMP bangga mengantarkan Kedai Kopi Kandang menyabet Juara 1 Nasional Kategori Makanan & Minuman di KMI Expo Kemendikbudristek.",
      ctaText: "Lihat Cerita Sukses",
      ctaTab: "prestasi",
      secondaryText: "Direktori UMKM",
      secondaryTab: "umkm",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
      badge: "Delegasi UMP Menang",
      gradient: "from-[#042f2e] via-[#042f2e]/85 to-transparent"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] overflow-hidden bg-slate-950 font-sans" id="hero-carousel">
      {/* Background Slides */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Image */}
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {/* Overlay Gradient (Blue/Dark tint matching UMP) */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
          </div>
        ))}
      </div>

      {/* Slide Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl text-left text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start"
            >
              {/* Badge */}
              <span className="bg-amber-400 text-slate-900 font-extrabold text-[9px] sm:text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider mb-4 border border-amber-300">
                {slides[currentSlide].badge}
              </span>

              {/* Title */}
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight max-w-2xl font-display">
                {slides[currentSlide].title}
              </h1>

              {/* Subtitle */}
              <p className="text-slate-200 mt-3 sm:mt-4 text-[10px] sm:text-xs md:text-sm max-w-xl sm:max-w-2xl leading-relaxed text-justify sm:text-left opacity-90">
                {slides[currentSlide].subtitle}
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-3 mt-6 sm:mt-8 flex-wrap w-full">
                <button
                  onClick={() => onCtaClick(slides[currentSlide].ctaTab)}
                  className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-lg font-bold text-xs transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center border border-transparent"
                >
                  {slides[currentSlide].ctaText}
                </button>
                
                <button
                  onClick={() => onCtaClick(slides[currentSlide].secondaryTab)}
                  className="bg-transparent border border-white text-white px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-lg font-bold text-xs hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center"
                >
                  {slides[currentSlide].secondaryText}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all cursor-pointer hidden md:flex items-center justify-center border border-white/15"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all cursor-pointer hidden md:flex items-center justify-center border border-white/15"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentSlide ? 'w-6 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
