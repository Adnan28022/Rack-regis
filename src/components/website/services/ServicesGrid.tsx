import React from 'react';
import Image from "next/image";
import Link from "next/link";

// 1. Service ki Type define ki
type Service = {
  title: string;
  slug: string;
  description: string;
  specs: string[];
  icon: React.FC<React.ComponentProps<'svg'>>; // Bataya ke icon ek SVG component hai
  image: string;
};

const services: Service[] = [
  {
    title: "Heavy Duty Pallet Racking",
    slug: "pallet-racking",
    description: "High-density storage solutions designed for heavy loads and seismic stability.",
    specs: ["Load: 4000kg/level", "ISO 9001 Certified"],
    // Yahan (props) ko (props: React.ComponentProps<'svg'>) mein badal diya
    icon: (props: React.ComponentProps<'svg'>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>,
    image: "/Services/Grid1.avif",
  },
  {
    title: "Multi-Tier Mezzanine Floors",
    slug: "mezzanine-floors",
    description: "Utilize vertical space efficiently with bolt-on mezzanine structures.",
    specs: ["Custom Spans", "High Load Bearing"],
    icon: (props: React.ComponentProps<'svg'>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>,
    image: "/Services/Grid2nd.avif",
  },
  {
    title: "Automated Retrieval Systems",
    slug: "automated-retrieval",
    description: "Smart warehousing solutions integrated with AI-driven logistics.",
    specs: ["PLC Integrated", "24/7 Reliability"],
    icon: (props: React.ComponentProps<'svg'>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>,
    image: "/Services/Grid3.avif",
  },
  {
    title: "Cantilever Racking",
    slug: "cantilever-racking",
    description: "Ultimate solution for storing long, heavy items like pipes and steel bars.",
    specs: ["Single/Double Sided", "Heavy-Wall Tubing"],
    icon: (props: React.ComponentProps<'svg'>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 5 4 4"></path><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path><path d="m8 6 2-2"></path><path d="m2 22 7.6-7.6"></path><path d="M12.5 10.5 22 20"></path><path d="m15 15 2 2"></path><path d="m20 12-2 2"></path><path d="m18 18 4 4"></path></svg>,
    image: "/Services/Grid4.avif",
  },
  {
    title: "Drive-In / Shuttle Racking",
    slug: "shuttle-racking",
    description: "Optimized for LIFO/FIFO inventory management, reducing aisles.",
    specs: ["High Volume Efficiency", "Remote Shuttles"],
    icon: (props: React.ComponentProps<'svg'>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20V10"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path><path d="M2 14h20"></path><path d="M22 10v10"></path><path d="M2 22h20"></path><path d="M8 22V14"></path><path d="M16 22V14"></path></svg>,
    image: "/Services/Grid1.avif", 
  },
  {
    title: "Industrial Safety Barriers",
    slug: "safety-barriers",
    description: "Impact protection systems to safeguard workforce and assets.",
    specs: ["Impact Absorbent", "High Visibility"],
    icon: (props: React.ComponentProps<'svg'>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>,
    image: "/Services/Grid6.avif",
  },
];

const ArrowUpRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
);

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] text-[#D62828] uppercase mb-2">Technical Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase text-slate-950 tracking-tighter leading-none">
              Precision Storage Systems
            </h3>
          </div>
          <p className="text-slate-500 max-w-md italic border-l-2 border-[#D62828] pl-4 text-sm">
            "Engineering excellence is not just about strength, it's about the precision of the layout."
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-slate-200 border border-slate-200">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[450px] overflow-hidden bg-slate-950 cursor-pointer"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-30 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              </div>

              {/* Content Container */}
              <div className="relative z-10 h-full p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                
                {/* Icon Box */}
                <div className="w-14 h-14 bg-[#D62828] flex items-center justify-center mb-6 -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {/* service.icon ab type-safe hai */}
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h4 className="text-2xl font-black uppercase mb-3 text-white tracking-tight">
                  {service.title}
                </h4>
                
                <p className="text-slate-300 mb-6 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </p>

                {/* Technical Tags */}
                <div className="flex flex-wrap gap-2 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {service.specs.map((spec, i) => (
                    <span key={i} className="text-[9px] font-bold tracking-tighter uppercase px-2 py-1 bg-white/10 text-white border border-white/20">
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Call to Action Link */}
                <Link 
                  href={`/services/${service.slug}`} 
                  className="inline-flex items-center gap-2 text-[#D62828] font-black text-xs uppercase tracking-[0.2em] group/btn w-fit"
                >
                  Technical Specs 
                  <span className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform">
                    <ArrowUpRight />
                  </span>
                </Link>
              </div>

              {/* Decorative Blueprint Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/10 group-hover:border-[#D62828] transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}