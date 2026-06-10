import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Certified Safety",
      desc: "Every structure we build undergoes rigorous load-testing and ISO safety audits.",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>,
    },
    {
      title: "Custom Engineering",
      desc: "No one-size-fits-all. We design solutions specifically for your floor plan.",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>,
    },
    {
      title: "Expert Team",
      desc: "Our engineers have over 15 years of experience in retail and industrial racking.",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    },
    {
      title: "Fast Execution",
      desc: "Minimize downtime with our efficient and precise installation process.",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>,
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden font-sans">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D62828]/5 -skew-x-12 translate-x-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* --- LEFT: CONTENT & STATS --- */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-[#D62828]" />
              <span className="text-[#D62828] font-black uppercase tracking-[4px] text-[10px]">
                The Rack-Regis Advantage
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              Why Industry <br /> Leaders <span className="text-[#D62828]">Trust Us.</span>
            </h2>

            <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">
              We combine advanced structural engineering with high-grade steel to deliver storage systems that are built to last a lifetime.
            </p>

            {/* Quick Stats Mini-Grid */}
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="border-l-4 border-[#D62828] pl-6">
                <h4 className="text-4xl font-black italic">99%</h4>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mt-1">Client Satisfaction</p>
              </div>
              <div className="border-l-4 border-white/20 pl-6">
                <h4 className="text-4xl font-black italic">0%</h4>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mt-1">Accident Rate</p>
              </div>
            </div>

            <button className="bg-[#D62828] hover:bg-red-700 text-white px-8 py-4 font-black uppercase tracking-widest text-xs flex items-center group transition-all">
              Speak to an Expert 
              <svg className="ml-2 group-hover:translate-x-2 transition-transform" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>

          {/* --- RIGHT: FEATURE CARDS --- */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="h-full bg-slate-800/50 border border-white/5 hover:border-[#D62828]/50 p-8 transition-all group"
              >
                <div className="w-14 h-14 bg-[#D62828]/10 rounded-sm flex items-center justify-center text-[#D62828] mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-white mb-4 italic">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Special "Growth" Highlight Card */}
            <div className="sm:col-span-2 bg-gradient-to-r from-[#D62828] to-red-800 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-white/10 backdrop-blur-md">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                </div>
                <div>
                  <h4 className="text-white font-black uppercase text-xl italic">Proven Scalability</h4>
                  <p className="text-red-100 text-xs font-medium">Our systems grow with your business needs.</p>
                </div>
              </div>
              <div className="text-white/50 font-black text-6xl hidden lg:block select-none opacity-20 tracking-tighter">
                GROWTH
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;