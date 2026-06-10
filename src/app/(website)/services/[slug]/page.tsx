import { servicesData, ServiceSlug } from "@/src/data/ServicesData";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug as ServiceSlug;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-white">
      {/* 1. INLINE DYNAMIC HERO (Replacing PageHero) */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="object-cover opacity-40 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="flex justify-center mb-4">
             <span className="h-[1px] w-12 bg-red-600 self-center"></span>
             <span className="text-red-600 font-black uppercase tracking-[5px] text-[10px] px-4">System Specification</span>
             <span className="h-[1px] w-12 bg-red-600 self-center"></span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
            {service.title.split(' ').map((word, i) => (
              <span key={i} className={i === service.title.split(' ').length - 1 ? "text-red-600" : ""}>
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium tracking-tight">
            {service.subtitle}
          </p>
        </div>
      </section>

      <section className="py-24 relative">
        {/* Blueprint background lines */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(30deg,#000_1px,transparent_1px),linear-gradient(150deg,#000_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* LEFT CONTENT: Technical Details */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-red-600" />
                <span className="text-red-600 font-black uppercase tracking-widest text-xs">Engineering Brief</span>
              </div>
              
              <h2 className="text-4xl font-black uppercase mb-8 text-slate-950 tracking-tighter italic">Technical Solution <br /> Overview</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-12 border-l-4 border-red-600 pl-6 font-medium">
                {service.description}
              </p>
              
              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-16">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 p-6 bg-slate-50 hover:bg-slate-950 transition-all duration-500 border border-slate-100 group">
                    {/* Inline CheckCircle2 SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 group-hover:scale-110 transition-transform">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span className="font-black uppercase text-[11px] tracking-widest text-slate-800 group-hover:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Technical Blueprint Showcase */}
              <div className="relative h-[500px] w-full group overflow-hidden border border-slate-200 bg-slate-100">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute top-6 left-6 bg-red-600 text-white text-[10px] font-black px-4 py-2 uppercase tracking-widest shadow-xl">
                  Structural View: REF-ORD-2024
                </div>
                {/* HUD Scanline Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>

            {/* RIGHT SIDEBAR: Specs Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-slate-950 text-white p-10 relative overflow-hidden border-b-8 border-red-600">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 -mr-12 -mt-12 rotate-45" />
                  
                  <h3 className="text-xl font-black uppercase mb-10 flex items-center gap-3">
                    {/* Inline FileText SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <line x1="10" y1="9" x2="8" y2="9"></line>
                    </svg> 
                    Technical Spec Sheet
                  </h3>
                  
                  <div className="space-y-8">
                    {service.specs.map((spec, i) => (
                      <div key={i} className="border-b border-white/5 pb-4 group cursor-default">
                        <p className="text-red-600 text-[9px] font-black uppercase tracking-[0.4em] mb-2 group-hover:translate-x-1 transition-transform">{spec.label}</p>
                        <p className="text-base font-bold text-slate-200 uppercase tracking-tight">{spec.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Standard Static Button Replacement */}
                  <button className="w-full mt-12 bg-red-600 h-16 group relative overflow-hidden active:scale-95 transition-all">
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="relative z-10 flex items-center justify-center gap-3 text-white group-hover:text-black font-black uppercase tracking-[3px] text-[10px] transition-colors duration-500">
                      Download Catalogue 
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform duration-500">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </button>
                </div>

                {/* Technical Help Box */}
                <div className="mt-8 border-2 border-dashed border-slate-200 p-8 text-center group hover:border-red-600 transition-colors">
                  <h4 className="font-black uppercase text-sm mb-2 text-slate-950">Expert Consultation</h4>
                  <p className="text-[10px] text-slate-500 mb-6 uppercase tracking-widest font-bold">Request a custom CAD drawing for your facility</p>
                  
                  <button className="w-full h-12 border-2 border-slate-950 font-black text-[10px] uppercase tracking-widest hover:bg-slate-950 hover:text-white transition-all duration-300">
                    Talk to an Engineer
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}