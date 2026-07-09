import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { HeroSlide } from '../types';

interface HeroProps {
  slides: HeroSlide[];
  onCtaClick: (tabId: string) => void;
}

export default function Hero({ slides, onCtaClick }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide interval
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Adjust currentSlide index if slides length changes and index is out of bounds
  useEffect(() => {
    if (currentSlide >= slides.length) {
      setCurrentSlide(0);
    }
  }, [slides.length, currentSlide]);

  if (slides.length === 0) {
    return (
      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] overflow-hidden bg-slate-900 font-sans flex flex-col items-center justify-center text-white text-center px-6">
        <Sparkles className="w-12 h-12 text-amber-400 mb-4 animate-pulse" />
        <h1 className="text-xl sm:text-2xl font-bold font-display">Islamic Student Business Incubator</h1>
        <p className="text-slate-350 text-xs sm:text-sm max-w-md mt-2">Universitas Muhammadiyah Purwokerto. Belum ada banner yang terdaftar di halaman beranda.</p>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const activeSlide = slides[currentSlide];

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] overflow-hidden bg-slate-950 font-sans" id="hero-carousel">
      {/* Background Slides */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, idx) => (
          <div
            key={slide.id || idx}
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
            {/* Overlay Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient || 'from-[#032050] via-[#032050]/80 to-transparent'}`} />
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
              {activeSlide.badge && (
                <span className="bg-amber-400 text-slate-900 font-extrabold text-[9px] sm:text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider mb-4 border border-amber-300">
                  {activeSlide.badge}
                </span>
              )}

              {/* Title */}
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight max-w-2xl font-display">
                {activeSlide.title}
              </h1>

              {/* Subtitle */}
              {activeSlide.subtitle && (
                <p className="text-slate-200 mt-3 sm:mt-4 text-[10px] sm:text-xs md:text-sm max-w-xl sm:max-w-2xl leading-relaxed text-justify sm:text-left opacity-90">
                  {activeSlide.subtitle}
                </p>
              )}

              {/* Buttons */}
              <div className="flex items-center gap-3 mt-6 sm:mt-8 flex-wrap w-full">
                {activeSlide.ctaText && (
                  <button
                    onClick={() => onCtaClick(activeSlide.ctaTab)}
                    className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-lg font-bold text-xs transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center border border-transparent uppercase"
                  >
                    {activeSlide.ctaText}
                  </button>
                )}
                
                {activeSlide.secondaryText && (
                  <button
                    onClick={() => onCtaClick(activeSlide.secondaryTab)}
                    className="bg-transparent border border-white text-white px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-lg font-bold text-xs hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center uppercase"
                  >
                    {activeSlide.secondaryText}
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      {slides.length > 1 && (
        <>
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
        </>
      )}

      {/* Slide Indicators Dots */}
      {slides.length > 1 && (
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
      )}
    </div>
  );
}
