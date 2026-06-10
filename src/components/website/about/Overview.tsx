import React from 'react';
import Image from "next/image";

const Overview = () => {
  // Static SVGs for industrial look
  const Icons = {
    HardHat: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"></path><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path><path d="M4 15v-3a8 8 0 0 1 16 0v3"></path></svg>
    ),
    Ruler: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.4 2.4 0 0 1 0-3.4l2.6-2.6a2.4 2.4 0 0 1 3.4 0l12.6 12.6z"></path><path d="m7.5 10.5 2 2"></path><path d="m10.5 7.5 2 2"></path><path d="m13.5 4.5 2 2"></path><path d="m4.5 13.5 2 2"></path></svg>
    ),
    Award: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
    )
  };

  return (
    <section className="py-24 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Content Area */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-[#D62828]"></span>
              <span className="text-[#D62828] font-black uppercase tracking-[4px] text-[10px]">
                Our Legacy
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-8">
              Decades of <br /> <span className="text-slate-400">Engineering Grit.</span>
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
              <p>
                Founded in 2008, <strong>Rack-Regis Engineering</strong> has grown from a specialized workshop into a full-scale industrial powerhouse. We specialize in the design, manufacturing, and installation of premium racking systems.
              </p>
              <p>
                Our journey is built on the foundation of <strong>Precision</strong> and <strong>Trust</strong>. Every project we undertake is a testament to our commitment to structural integrity and innovative space management.
              </p>
            </div>

            {/* Quick Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Icons.HardHat />, text: "Certified Field Engineers" },
                { icon: <Icons.Ruler />, text: "Precision Structural Design" },
                { icon: <Icons.Award />, text: "15+ Years Industry Leader" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-900 font-bold uppercase text-[10px] tracking-widest bg-slate-50 p-3 border-l-4 border-[#D62828]">
                  <span className="text-[#D62828]">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical Image with Offset Frame */}
          <div className="lg:w-1/2 relative">
            {/* Background decorative border */}
            <div className="absolute -inset-4 border-2 border-slate-100 -rotate-3 rounded-sm pointer-events-none"></div>
            
            <div className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl group">
              <Image 
                src="/About/OverviewCompany.avif" 
                alt="Engineering Site Inspection"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              
              {/* Image Caption */}
              <div className="absolute bottom-6 left-6 text-white uppercase italic">
                <p className="font-black text-2xl tracking-tighter leading-none">Site Operations</p>
                <p className="text-[#D62828] text-[10px] font-bold tracking-widest mt-1">Quality Control In Action</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Overview;