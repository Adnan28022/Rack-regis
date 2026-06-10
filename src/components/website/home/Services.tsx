import React from 'react';

const ServicesSection = () => {
  // Replace this with your actual data
  const services = [
    {
      title: "Industrial Racking",
      tag: "Storage",
      desc: "Heavy-duty pallet racking systems designed for maximum warehouse efficiency.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="8" rx="1" /><rect x="2" y="13" width="20" height="8" rx="1" /></svg>
      )
    },
    {
      title: "Automated Systems",
      tag: "Logistics",
      desc: "Smart retrieval and storage solutions integrated with cutting-edge technology.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
      )
    },
    {
      title: "Safety Audits",
      tag: "Inspection",
      desc: "Comprehensive rack safety inspections and compliance certification services.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
      )
    },
    {
      title: "Custom Design",
      tag: "Engineering",
      desc: "Bespoke structural engineering tailored to your specific facility requirements.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white font-sans">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-[#D62828]"></span>
            <span className="text-[#D62828] font-black uppercase tracking-[4px] text-[10px]">
              Our Expertise
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.8] tracking-tighter uppercase">
              Engineering <br /> <span className="text-slate-300">Solutions.</span>
            </h2>
            <p className="max-w-xs text-slate-500 text-sm font-medium border-l-2 border-slate-200 pl-4">
              Providing world-class racking systems with precision engineering and uncompromised safety.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative group border-r border-b border-slate-200 bg-white p-10 hover:bg-slate-900 transition-colors duration-500 cursor-pointer"
            >
              {/* Top Accent: Plus Icon (Static SVG) */}
              <div className="absolute top-4 right-4 text-slate-200 group-hover:text-[#D62828] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div>

              {/* Icon Container */}
              <div className="w-16 h-16 bg-slate-50 flex items-center justify-center mb-10 group-hover:bg-[#D62828] group-hover:text-white transition-all duration-500 rounded-sm">
                {service.icon}
              </div>

              {/* Tag */}
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-slate-400 mb-2 block group-hover:text-red-500">
                {service.tag}
              </span>

              {/* Title */}
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed mb-8 group-hover:text-slate-400 transition-colors">
                {service.desc}
              </p>

              {/* Interactive Arrow */}
              <div className="flex items-center justify-between">
                <div className="h-[1px] w-8 bg-slate-200 group-hover:w-16 group-hover:bg-[#D62828] transition-all duration-500"></div>
                <div className="text-slate-300 group-hover:text-[#D62828] -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>

              {/* Hover Background Pattern */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 pointer-events-none transition-opacity duration-500" 
                style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '20px 20px' }}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats / Trust Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white p-8 border border-slate-100 shadow-sm">
          {[
            { label: "Safety Compliance", value: "100%" },
            { label: "Global Projects", value: "250+" },
            { label: "Expert Engineers", value: "40+" },
            { label: "Steel Quality", value: "Grade A" },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="text-[#D62828] text-2xl font-black">{stat.value}</p>
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;