"use client";
import React from "react";

export default function LocationMap() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* 1. Technical Background Decoration (Globe SVG) */}
      <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-slate-900">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-red-600 font-black uppercase tracking-[5px] text-[10px] mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-red-600"></span> Global Operations
            </h2>
            <h3 className="text-5xl font-black text-slate-950 uppercase tracking-tighter">
              Strategic <span className="text-red-600">Location.</span>
            </h3>
          </div>
          <div className="text-left md:text-right">
             <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Sector: INDUSTRIAL-A2</p>
             <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Coords: 32.1877° N, 74.1945° E</p>
          </div>
        </div>

        {/* The Map Container */}
        <div className="relative group">
          
          {/* Decorative Corner Brackets (Blueprint Style) */}
          <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-red-600 z-20" />
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-slate-950 z-20" />

          {/* Map Frame */}
          <div className="relative h-[600px] w-full overflow-hidden border border-slate-200 shadow-2xl">
            {/* Dark Overlay with Scanlines logic */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-slate-950/10 group-hover:bg-transparent transition-all duration-700" />
            
            {/* The Actual Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108842.123!2d74.1234567!3d32.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA3JzM0LjQiTiA3NMKwMDcnNDQuNCJF!5e0!3m2!1sen!2s!4v123456789"
              className="w-full h-full border-none grayscale contrast-125 invert-[0.05] group-hover:grayscale-0 group-hover:invert-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              allowFullScreen
              loading="lazy"
            ></iframe>

            {/* HUD Overlay (Floating Info Box) - Fixed Transition instead of Motion */}
            <div 
              className="absolute top-6 right-6 md:top-10 md:right-10 z-20 w-full max-w-[320px] bg-slate-950/95 backdrop-blur-xl p-8 border-l-4 border-red-600 shadow-2xl transition-all duration-700 transform translate-y-0 opacity-100"
            >
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-white font-black uppercase text-xs tracking-widest">Headquarters</h4>
                <div className="w-2 h-2 bg-red-600 animate-ping" />
              </div>

              <div className="space-y-6">
                {/* Address Group */}
                <div className="flex gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 shrink-0">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Address</p>
                    <p className="text-xs text-slate-200 font-bold leading-relaxed uppercase">
                      Rack-Regis Engineering Complex,<br />
                      Industrial Estate, Gujranwala.
                    </p>
                  </div>
                </div>

                {/* Dispatch Group */}
                <div className="flex gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 shrink-0">
                    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                  </svg>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Dispatch Hub</p>
                    <p className="text-xs text-slate-200 font-bold uppercase">Zone 4 - Heavy Logistics</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <button className="w-full py-4 bg-red-600 text-white font-black text-[10px] uppercase tracking-[3px] hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center gap-2 group/btn">
                    Get Directions 
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:rotate-12 transition-transform">
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Coordinate Display (Bottom Left) */}
            <div className="absolute bottom-6 left-6 z-20 hidden md:flex items-center gap-6 text-white bg-slate-950/80 px-6 py-3 backdrop-blur-sm border border-white/10">
               <div className="flex flex-col">
                  <span className="text-[8px] font-black text-red-500 uppercase">Latitude</span>
                  <span className="text-xs font-mono font-bold tracking-widest">32.187744</span>
               </div>
               <div className="w-[1px] h-8 bg-white/10" />
               <div className="flex flex-col">
                  <span className="text-[8px] font-black text-red-500 uppercase">Longitude</span>
                  <span className="text-xs font-mono font-bold tracking-widest">74.194488</span>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}