import React from 'react';
import Image from "next/image";

const AboutPreview = () => {
  // Inline SVGs for the features
  const Icons = {
    ShieldCheck: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
    ),
    HardHat: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"></path><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path><path d="M4 15v-3a8 8 0 0 1 16 0v3"></path></svg>
    ),
    Award: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
    ),
    CheckCircle: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    )
  };

  return (
    <section className="py-24 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT SIDE: IMAGE COMPOSITION --- */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10 w-full md:w-[80%] h-[400px] md:h-[500px] rounded-sm overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="/Home/About.webp" 
                alt="Engineering Team"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Secondary Floating Image */}
            <div className="absolute -bottom-10 -right-4 md:right-0 z-20 w-[60%] md:w-[50%] h-[200px] md:h-[250px] border-[10px] border-white shadow-2xl hidden sm:block overflow-hidden rounded-sm">
              <Image 
                src="/Home/About-2.webp" 
                alt="Technical Drawing"
                fill
                className="object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute top-10 -left-6 z-30 bg-[#D62828] text-white p-6 shadow-xl hidden md:block">
              <p className="text-4xl font-black leading-none italic">15+</p>
              <p className="text-[10px] uppercase font-bold tracking-widest mt-1">Years of <br /> Excellence</p>
            </div>
          </div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-[#D62828]"></span>
              <span className="text-[#D62828] font-black uppercase tracking-[4px] text-[10px]">
                About Rack-Regis
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[0.9] uppercase tracking-tighter mb-8">
              Engineering Reliability <br /> 
              <span className="text-slate-300 font-light italic">With Precision.</span>
            </h2>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed font-light border-l-2 border-slate-100 pl-6">
              At Rack-Regis Engineering, we don&apos;t just build structures; we engineer peace of mind. 
              Our team specializes in high-integrity industrial racking and structural solutions 
              tailored for complex warehouse environments.
            </p>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                { icon: <Icons.ShieldCheck />, title: "Safety First" },
                { icon: <Icons.HardHat />, title: "Certified Pro's" },
                { icon: <Icons.Award />, title: "Quality Steel" },
                { icon: <Icons.CheckCircle />, title: "ISO Standards" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="p-2 bg-slate-50 rounded-full text-[#D62828] group-hover:bg-[#D62828] group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="font-bold text-slate-800 uppercase text-[10px] tracking-widest">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {/* Primary Action */}
              <button className="bg-[#D62828] text-white px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-slate-900 transition-colors duration-300">
                Our Story
              </button>
              
              {/* Secondary Action */}
              <button className="border-2 border-slate-200 text-slate-900 px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;