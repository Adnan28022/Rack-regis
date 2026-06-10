import React from 'react';
import Image from "next/image";

const MissionVision = () => {
  // Inline SVGs to remove lucide-react dependency
  const Icons = {
    Target: () => (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
    ),
    Eye: () => (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
    )
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden font-sans">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%23ffffff' fill-opacity='0.4'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Technical Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
          
          {/* Mission Block */}
          <div className="relative p-12 lg:p-20 group overflow-hidden">
            {/* Mission Image Background Overlay */}
            <Image 
              src="/About/Mission1.webp" 
              alt="Mission" 
              fill 
              className="object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
            />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#D62828] flex items-center justify-center mb-8 shadow-lg shadow-red-600/20">
                <Icons.Target />
              </div>
              <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-6">
                Our Mission
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed font-light border-l-2 border-[#D62828] pl-6">
                To transform warehouse efficiency worldwide by delivering superior structural racking solutions that exceed global safety standards and operational expectations.
              </p>
            </div>
          </div>

          {/* Vision Block */}
          <div className="relative p-12 lg:p-20 group overflow-hidden bg-white/[0.02]">
             {/* Vision Image Background Overlay */}
             <Image 
              src="/About/Mission2.jfif" 
              alt="Vision" 
              fill 
              className="object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
            />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white flex items-center justify-center mb-8 shadow-lg">
                <div className="text-slate-900"><Icons.Eye /></div>
              </div>
              <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-6">
                Our Vision
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed font-light border-l-2 border-slate-700 pl-6">
                To be the undisputed global benchmark in retail and industrial engineering, recognized for precision, sustainability, and unparalleled durability.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;