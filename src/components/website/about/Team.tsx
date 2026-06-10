import React from 'react';
import Image from "next/image";

const Team = () => {
  const team = [
    {
      name: "Engr. Salman Regis",
      role: "Chief Executive Officer",
      img: "/About/Team1.avif",
      linkedin: "#",
    },
    {
      name: "M. Abdullah",
      role: "Head of Structural Design",
      img: "/About/Team2.avif",
      linkedin: "#",
    },
    {
      name: "Engr. Farhan Ali",
      role: "Senior Site Supervisor",
      img: "/About/Team3.jfif",
      linkedin: "#",
    },
    {
      name: "Zainab Malik",
      role: "Quality Assurance Lead",
      img: "/About/Team4.jfif",
      linkedin: "#",
    },
  ];

  // Static SVGs for social icons
  const Icons = {
    LinkedIn: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    ),
    Envelope: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
    )
  };

  return (
    <section className="py-24 bg-slate-50 overflow-hidden font-sans">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-10 bg-[#D62828]" />
              <span className="text-[#D62828] font-black uppercase tracking-[3px] text-[10px]">
                Experts Behind Rack-Regis
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none">
              The Minds Behind <br /> <span className="text-slate-400">The Structures.</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-xs text-sm font-medium leading-relaxed border-l-2 border-slate-200 pl-4">
            Our team of certified engineers and industrial designers bring decades of collective experience to every project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="group relative"
            >
              {/* Image Container with Technical Frame */}
              <div className="relative h-[400px] w-full overflow-hidden rounded-sm bg-slate-200 shadow-xl">
                {/* Blueprint Pattern Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 z-10 pointer-events-none transition-opacity duration-500" 
                  style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '20px 20px' }}
                ></div>

                <Image 
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />

                {/* Social Overlay */}
                <div className="absolute inset-0 bg-slate-950/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <a href={member.linkedin} className="w-10 h-10 bg-white text-slate-950 flex items-center justify-center rounded-full hover:bg-[#D62828] hover:text-white transition-all transform hover:-translate-y-1">
                    <Icons.LinkedIn />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white text-slate-950 flex items-center justify-center rounded-full hover:bg-[#D62828] hover:text-white transition-all transform hover:-translate-y-1">
                    <Icons.Envelope />
                  </a>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#D62828] translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 z-30"></div>
              </div>

              {/* Content Box */}
              <div className="mt-6 text-center lg:text-left">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight group-hover:text-[#D62828] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#D62828] text-[10px] font-bold uppercase tracking-[2px] mt-1">
                  {member.role}
                </p>
                <div className="mt-4 h-[1px] w-12 bg-slate-200 group-hover:w-full group-hover:bg-[#D62828] transition-all duration-500 mx-auto lg:mx-0"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Us CTA */}
        <div 
          className="mt-20 p-8 border border-dashed border-slate-300 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold italic">?</div>
             <div>
                <p className="text-slate-900 font-black uppercase text-sm italic">Want to join our engineering force?</p>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-widest mt-1">We are always looking for certified precision experts.</p>
             </div>
          </div>
          <button className="text-[#D62828] font-black uppercase text-xs tracking-[2px] hover:underline underline-offset-8 transition-all">
            View Openings →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Team;