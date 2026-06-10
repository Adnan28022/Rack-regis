import React from 'react';

// 1. Support Service ki type define ki
type SupportService = {
  title: string;
  description: string;
  icon: React.FC<React.ComponentProps<'svg'>>;
};

const ServiceSupport = () => {
  // 2. Array ko type assign ki
  const supportServices: SupportService[] = [
    {
      title: "Safety Audits (SARI)",
      description: "Annual structural inspections to ensure your racking systems meet international safety standards and prevent warehouse accidents.",
      icon: (props: React.ComponentProps<'svg'>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>,
    },
    {
      title: "Rack Relocation",
      description: "Professional dismantling and re-installation of your existing systems when moving facilities or re-configuring layouts.",
      icon: (props: React.ComponentProps<'svg'>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>,
    },
    {
      title: "Repair & Maintenance",
      description: "Rapid response teams to replace damaged uprights or beams using high-strength components without disrupting operations.",
      icon: (props: React.ComponentProps<'svg'>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 5 5"></path><path d="m8.5 14.5-1.5-6.5 6.5 1.5"></path></svg>,
    },
    {
      title: "Load Capacity Certification",
      description: "Technical evaluation and labeling of load limits for every rack level to ensure operational compliance.",
      icon: (props: React.ComponentProps<'svg'>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m9 15 2 2 4-4"></path></svg>,
    },
  ];

  const Icons = {
    HardHat: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"></path><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path><path d="M4 15v-3a8 8 0 0 1 16 0v3"></path></svg>,
    Clipboard: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M9 12h6"></path><path d="M9 16h6"></path><path d="M9 8h6"></path></svg>
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden font-sans">
      
      {/* Background Watermark */}
      <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <h2 className="text-[20rem] font-black leading-none">REGIS</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-[#D62828]" />
              <h2 className="text-[10px] font-black tracking-[0.4em] text-[#D62828] uppercase">
                Lifecycle Support
              </h2>
            </div>
            
            <h3 className="text-4xl md:text-6xl font-black uppercase text-slate-950 mb-8 leading-none tracking-tighter">
              Beyond <span className="text-[#D62828]">Installation.</span> <br />
              Total Reliability.
            </h3>
            
            <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-xl font-light">
              At Rack-Regis, our relationship doesn't end when the last bolt is tightened. 
              We provide comprehensive maintenance and safety protocols to ensure your 
              infrastructure remains a high-performance asset for decades.
            </p>

            {/* Status Boxes */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 p-5 bg-white border-l-4 border-[#D62828] shadow-sm">
                <div className="text-slate-950 shrink-0"><Icons.HardHat /></div>
                <div>
                  <h4 className="font-black uppercase text-sm tracking-tight">Certified Engineers</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 font-bold">Safety First Methodology</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white border-l-4 border-[#D62828] shadow-sm">
                <div className="text-slate-950 shrink-0"><Icons.Clipboard /></div>
                <div>
                  <h4 className="font-black uppercase text-sm tracking-tight">Compliance Ready</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 font-bold">ISO & OSHA Standards</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <button className="bg-slate-950 text-white px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-[#D62828] transition-colors duration-300">
                SCHEDULE AN INSPECTION
              </button>
            </div>
          </div>

          {/* Right: Interactive Support Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {supportServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 border border-slate-200 hover:border-[#D62828]/50 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-slate-200/50 group"
              >
                <div className="w-12 h-12 bg-slate-950 text-white flex items-center justify-center mb-6 group-hover:bg-[#D62828] transition-colors">
                  {/* Service icon used as a component */}
                  <service.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black uppercase mb-3 text-slate-950 leading-tight tracking-tight">
                  {service.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            ))}

            {/* Special Callout Card */}
            <div className="sm:col-span-2 bg-[#D62828] p-8 text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
              <div>
                <h4 className="text-xl font-black uppercase italic tracking-tight">Emergency Repairs?</h4>
                <p className="text-red-100 text-sm font-medium">24/7 Technical assistance for structural failures.</p>
              </div>
              <button className="px-6 py-3 bg-white text-[#D62828] font-black text-xs uppercase tracking-widest hover:bg-slate-950 hover:text-white transition-colors duration-300">
                Contact Hotline
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceSupport;