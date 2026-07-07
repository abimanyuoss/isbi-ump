import React from 'react';
import { Phone, MapPin, Mail, MessageSquare, Clock, ExternalLink } from 'lucide-react';

export default function ContactMap() {
  const whatsappContacts = [
    {
      unit: 'Biro Kemahasiswaan & Alumni (BKA)',
      name: 'Layanan Umum Kemahasiswaan',
      phone: '+62 812-3527-6164',
      waLink: 'https://wa.me/6281235276164?text=Assalamualaikum%20BKA%20UMP%2C%20saya%20ingin%20bertanya%20mengenai...',
      desc: 'Pertanyaan seputar administrasi kemahasiswaan umum dan persuratan'
    },
    {
      unit: 'Penanggung Jawab ISBI UMP',
      name: 'Tim Inkubasi Bisnis',
      phone: '+62 812-3527-6164',
      waLink: 'https://wa.me/6281235276164?text=Assalamualaikum%20ISBI%20UMP%2C%20saya%20ingin%20berkonsultasi%20mengenai%20inkubasi...',
      desc: 'Konsultasi kelolosan program P2MW, mentoring bisnis, dan pembinaan internal'
    },
    {
      unit: 'Layanan Kemitraan & Direktori UMKM',
      name: 'Koordinator UMKM Mahasiswa',
      phone: '+62 812-3527-6164',
      waLink: 'https://wa.me/6281235276164?text=Assalamualaikum%20ISBI%20UMP%2C%20saya%20ingin%20bertanya%20seputar%20kemasan%20dan%20legalitas%20UMKM...',
      desc: 'Layanan foto produk, legalitas NIB, sertifikasi Halal, dan update direktori UMKM'
    }
  ];

  return (
    <div className="w-full bg-white py-12 px-6 md:px-12 border-t border-slate-200" id="contacts-section">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Left Column: Styled Interactive Map & Address */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex flex-col text-left mb-6">
            <span className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-widest mb-1.5">Lokasi Kantor</span>
            <h3 className="font-bold text-lg text-slate-800 tracking-tight flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>Gedung Serbaguna UMP Kampus I</span>
            </h3>
            <p className="text-slate-550 text-xs mt-2 leading-relaxed">
              Gd. Serbaguna Lt. 2, Kampus Ahmad Dahlan, Jl. K.H. Ahmad Dahlan, PO Box 202, Kembaran, Purwokerto, Kabupaten Banyumas, Jawa Tengah 53182.
            </p>
          </div>

          {/* Embedded Google Map */}
          <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-inner border border-slate-200 mb-4 bg-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.41829676644!2d109.27151047586523!3d-7.418856692591461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6575cb70d6efbb%3A0xf6a7e0ecde2d854e!2sUniversitas%20Muhammadiyah%20Purwokerto!5e0!3m2!1sid!2sid!4v1719741000000!5m2!1sid!2sid" 
              className="absolute top-0 left-0 w-full h-full border-0" 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps UMP Kampus Ahmad Dahlan"
            ></iframe>
          </div>

          <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200/60 text-xs">
            <div className="flex items-center gap-1.5 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Senin - Sabtu: 08:00 - 15:30 WIB</span>
            </div>
            <a 
              href="https://maps.app.goo.gl/oYfLd8DscuPq2m1q8" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1 hover:underline transition-colors"
            >
              <span>Buka di Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Right Column: WhatsApp Hotline per Unit */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex flex-col text-left mb-6">
            <span className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-widest mb-1.5">Hubungi Unit Terkait</span>
            <h3 className="font-bold text-lg text-slate-800 tracking-tight flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>Hotline WhatsApp Per Unit</span>
            </h3>
            <p className="text-slate-550 text-xs mt-2 leading-relaxed font-sans">
              Silakan hubungi narahubung WhatsApp di bawah ini sesuai kebutuhan untuk respon yang cepat dan terarah.
            </p>
          </div>

          {/* WhatsApp Contacts List */}
          <div className="flex flex-col gap-4">
            {whatsappContacts.map((contact, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:border-emerald-100 transition-colors duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-left"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md self-start border border-emerald-100">
                    {contact.unit}
                  </span>
                  <span className="font-bold text-slate-800 text-sm mt-1">{contact.name}</span>
                  <span className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{contact.desc}</span>
                </div>
                <a 
                  href={contact.waLink}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs px-4 py-2.5 rounded-lg inline-flex items-center gap-1.5 shadow-sm hover:shadow-md transition-all self-stretch sm:self-auto justify-center cursor-pointer uppercase text-[10px]"
                >
                  {/* WhatsApp SVG Icon */}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.454L0 24zm6.59-4.846c1.6.95 3.198 1.451 4.811 1.452 5.518 0 10.006-4.486 10.01-10.008.002-2.675-1.039-5.188-2.932-7.082C16.643 1.621 14.135.58 11.512.58 5.994.58 1.505 5.066 1.501 10.59c-.001 1.745.474 3.447 1.378 4.961l-1.033 3.771 3.864-1.013zm11.365-5.32c-.3-.15-1.777-.878-2.046-.975-.27-.099-.465-.148-.66.148-.195.298-.755.948-.925 1.147-.17.198-.34.223-.64.074-.3-.15-1.265-.467-2.41-1.487-.89-.794-1.49-1.775-1.665-2.074-.175-.299-.019-.46.131-.609.135-.134.3-.349.45-.524.15-.175.2-.299.3-.499.1-.2.05-.375-.025-.524-.075-.15-.66-1.59-.9-2.167-.234-.567-.47-.49-.66-.5-.17-.008-.365-.01-.56-.01-.195 0-.515.073-.785.37-.27.299-1.03 1.002-1.03 2.44 0 1.439 1.045 2.83 1.19 3.029.145.2 2.055 3.14 4.977 4.41.696.302 1.24.482 1.66.615.7.223 1.337.192 1.843.117.563-.083 1.777-.727 2.026-1.428.25-.699.25-1.3.175-1.428-.075-.125-.275-.199-.575-.349z" />
                  </svg>
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50/60 border border-emerald-100/80 p-3.5 rounded-xl flex items-center gap-3 text-emerald-800 text-xs text-left mt-4">
            <svg className="w-5 h-5 text-emerald-700 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <p>
              Layanan kami terbebas dari pungutan biaya apa pun. Semua bimbingan wirausaha difasilitasi oleh Biro Kemahasiswaan dan Alumni (BKA) UMP.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
