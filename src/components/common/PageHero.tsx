import React from 'react';
import Image from "next/image";
interface PageHeroProps {
  title: string;
  subtitle: string;
  bgImage: string;
}

const PageHero = ({ title, subtitle, bgImage }: PageHeroProps) => {
  return (
    <section className="relative h-[50vh] md:h-[60vh] w-full flex items-center overflow-hidden bg-slate-950 font-sans">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={bgImage} 
          alt={title}
          fill
          className="object-cover opacity-40 grayscale-[30%]"
          priority
        />
        {/* Shadow Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          
          {/* Breadcrumb Style Indicator */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-[#D62828]"></span>
            <span className="text-[#D62828] text-[10px] font-black uppercase tracking-[4px]">
              Rack-Regis Engineering
            </span>
          </div>

          {/* Main Page Title - Matches the bold industrial look */}
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85]">
            {title}
          </h1>

          {/* Subtitle with Red Accent Border */}
          <p className="mt-8 text-slate-400 text-lg md:text-xl font-light border-l-2 border-[#D62828] pl-6 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Industrial Grid Overlay (Technical Blueprint Feel) */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
      ></div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#D62828] to-transparent opacity-50"></div>
    </section>
  );
};

export default PageHero;