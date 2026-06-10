import React from 'react';
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black font-sans">
      
      {/* CSS for Animations (Scroll Indicator & Text Outline) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-scroll {
          animation: scrollBounce 2s infinite ease-in-out;
        }
        .text-outline-white {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
        }
      `}} />

      {/* --- BACKGROUND IMAGE WITH OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Home/Hero.png" 
          alt="Engineering Background"
          fill
          className="object-cover opacity-60 grayscale-[40%]"
          priority
        />
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          
          {/* Badge */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-[#D62828]" />
            <span className="text-[#D62828] text-xs font-black uppercase tracking-[4px]">
              Innovating Industrial Racking
            </span>
          </div>

          {/* Big Bold Typography */}
          <h1 className="text-6xl md:text-[100px] font-black text-white leading-none tracking-tighter uppercase">
            RACK REGIS <br />
            <span className="text-outline-white">ENGINEERING.</span>
          </h1>

          <p className="mt-8 text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed font-light border-l-2 border-[#D62828] pl-6">
            Precision structural solutions for the next generation of industrial storage. 
            Built for strength. Engineered for safety. 
          </p>

          {/* Attractive Buttons */}
          <div className="mt-12 flex flex-wrap gap-6">
            {/* Primary Button */}
            <button className="bg-[#D62828] hover:bg-red-700 text-white px-8 py-4 font-black uppercase tracking-widest text-xs flex items-center gap-2 group transition-all duration-300">
              Start Project 
              <svg className="group-hover:rotate-45 transition-transform duration-300" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>

            {/* Outline Button */}
            <button className="border-2 border-white/20 hover:border-white text-white px-8 py-4 font-black uppercase tracking-widest text-xs transition-all duration-300">
              Our Capabilities
            </button>
          </div>
        </div>
      </div>

      {/* --- SIDE DECORATION (Engineering Blueprint Look) --- */}
      <div className="absolute bottom-10 right-10 hidden lg:block text-right border-r-2 border-[#D62828] pr-6 py-2">
        <p className="text-white font-black text-2xl uppercase italic tracking-tighter">Quality Assured</p>
        <p className="text-gray-400 text-[10px] tracking-[3px] mt-1 uppercase font-bold">Standard 9001:2015</p>
      </div>

      {/* Animated Scroll Indicator (Static CSS Animation) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#D62828] to-transparent" />
        <span className="text-white/20 text-[10px] uppercase tracking-[3px] [writing-mode:vertical-lr]">Scroll</span>
      </div>

    </section>
  );
};

export default Hero;