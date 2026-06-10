"use client";
import React, { useEffect, useState } from "react";

export default function QuoteModal({ isOpen, onClose }) {
  // Modal ke state handle karne ke liye (mounting/unmounting animation ke liye)
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      document.body.style.overflow = "hidden"; // Scroll block karein
    } else {
      const timer = setTimeout(() => setShowModal(false), 500); // Animation ke baad hide karein
      document.body.style.overflow = "auto";
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!showModal && !isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[100] ${isOpen ? "visible" : "invisible transition-all delay-500"}`}>
      
      {/* 1. Backdrop - Fade Effect */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-slate-950/90 backdrop-blur-md cursor-crosshair transition-opacity duration-500 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* 2. Modal Content - Slide in from Right */}
      <div
        className={`absolute top-0 right-0 h-full w-full max-w-2xl bg-slate-900 shadow-2xl border-l border-white/10 overflow-y-auto transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-slate-900 p-8 border-b border-white/5 flex justify-between items-center z-20">
          <div>
            <h2 className="text-red-600 font-black uppercase tracking-[4px] text-[10px]">Technical Inquiry</h2>
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter">
              Quote <span className="text-red-600">Configurator</span>
            </h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-3 hover:bg-white/5 text-white transition-colors group"
          >
            {/* Close X SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-90 transition-transform duration-300">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>

        {/* Form Content */}
        <div className="p-8 md:p-12">
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            
            {/* 1. Project Type Selection */}
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6 block italic">01. Select Solution Category</label>
              <div className="grid grid-cols-2 gap-4">
                {['Warehouse Racking', 'Retail Shelving', 'Mezzanine', 'Automation'].map((item) => (
                  <button key={item} type="button" className="p-4 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:border-red-600 hover:bg-red-600/5 transition-all text-left flex items-center justify-between group">
                    {item} 
                    {/* Factory SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-20 group-hover:opacity-100 transition-opacity">
                      <path d="M2 20V9l9-2 10 2v11"></path>
                      <path d="M9 20V5l10 2v13"></path>
                      <path d="M11 13h4"></path>
                      <path d="M11 17h4"></path>
                      <path d="M11 9h4"></path>
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Technical Parameters */}
            <div>
               <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6 block italic">02. Estimation Parameters</label>
               <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <span className="flex items-center gap-2 text-[9px] font-bold text-white uppercase tracking-wider">
                      {/* Ruler SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600"><path d="m21.41 10.12-7.29-7.29a2 2 0 0 0-2.83 0L2.12 12.01a2 2 0 0 0 0 2.83l7.29 7.29a2 2 0 0 0 2.83 0l9.17-9.17a2 2 0 0 0 0-2.83Z"></path><line x1="6.3" y1="11.8" x2="8.4" y2="13.9"></line><line x1="9.1" y1="9" x2="11.2" y2="11.1"></line><line x1="12" y1="6.2" x2="14.1" y2="8.3"></line></svg>
                      Facility Area (Sq. Ft)
                    </span>
                    <input type="number" placeholder="E.G. 5000" className="w-full bg-slate-800 border-b border-white/20 p-3 text-white outline-none focus:border-red-600 transition-all font-mono" />
                  </div>
                  <div className="space-y-2">
                    <span className="flex items-center gap-2 text-[9px] font-bold text-white uppercase tracking-wider">
                      {/* Weight SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600"><circle cx="12" cy="5" r="3"></circle><path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.9-2.5l-2.495-9.04A2 2 0 0 0 17.5 8Z"></path></svg>
                      Load Capacity (KG/Level)
                    </span>
                    <input type="number" placeholder="E.G. 2000" className="w-full bg-slate-800 border-b border-white/20 p-3 text-white outline-none focus:border-red-600 transition-all font-mono" />
                  </div>
               </div>
            </div>

            {/* 3. Personal Details */}
            <div className="space-y-6 pt-6 border-t border-white/5">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 block italic">03. Authorized Contact Information</label>
              <input type="text" placeholder="FULL NAME" className="w-full bg-transparent border-b border-white/20 p-3 text-white outline-none focus:border-red-600 transition-all font-bold text-xs tracking-widest" />
              <input type="email" placeholder="OFFICIAL EMAIL" className="w-full bg-transparent border-b border-white/20 p-3 text-white outline-none focus:border-red-600 transition-all font-bold text-xs tracking-widest" />
              <input type="tel" placeholder="PHONE NUMBER" className="w-full bg-transparent border-b border-white/20 p-3 text-white outline-none focus:border-red-600 transition-all font-bold text-xs tracking-widest" />
            </div>

            {/* Submit Button */}
            <div className="pt-10">
              <button className="w-full h-16 bg-red-600 group relative overflow-hidden flex items-center justify-center gap-3 active:scale-95 transition-all duration-300">
                {/* Hover white slide background */}
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                
                <span className="relative z-10 text-white group-hover:text-black font-black uppercase tracking-[4px] text-xs flex items-center gap-2 transition-colors duration-500">
                  Generate Project Quote 
                  {/* Send SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </span>
              </button>
              <p className="text-[8px] text-slate-500 text-center mt-4 uppercase tracking-widest">
                *Our engineers will respond with a preliminary budget estimate within 24 business hours.
              </p>
            </div>
          </form>
        </div>

        {/* Background Graphic (Calculator SVG) */}
        <div className="absolute bottom-0 right-0 p-4 opacity-[0.02] pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="16" height="20" x="4" y="2" rx="2"></rect>
            <line x1="8" y1="6" x2="16" y2="6"></line>
            <line x1="16" y1="14" x2="16" y2="18"></line>
            <path d="M16 10h.01"></path>
            <path d="M12 10h.01"></path>
            <path d="M8 10h.01"></path>
            <path d="M12 14h.01"></path>
            <path d="M8 14h.01"></path>
            <path d="M12 18h.01"></path>
            <path d="M8 18h.01"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}