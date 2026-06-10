import { productsData, ProductSlug } from "@/src/data/ProductsData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug as ProductSlug;
  const product = productsData[slug];

  if (!product) notFound();

  return (
    <main className="bg-white min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6">
        
        {/* 1. Breadcrumb & Back (Static Arrow SVG) */}
        <Link href="/products" className="group inline-flex items-center gap-2 text-slate-400 hover:text-red-600 transition-colors mb-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
            <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
          </svg>
          <span className="text-[10px] font-black uppercase tracking-[3px]">Back to Catalog</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* IMAGE SECTION */}
          <div className="relative">
            <div className="sticky top-32">
              <div className="relative h-[500px] w-full bg-slate-50 border border-slate-100 p-12 overflow-hidden group">
                {/* Tech Grid Background (CSS Radial) */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[size:30px_30px] bg-[radial-gradient(#000_1px,transparent_1px)]" />
                
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  priority
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute bottom-6 left-6">
                   <div className="bg-slate-950 text-white text-[10px] font-black px-4 py-2 uppercase tracking-widest">
                     Equipment ID: REG-{slug.substring(0,4).toUpperCase()}
                   </div>
                </div>
              </div>

              {/* Trust Badges (Inline SVGs) */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-slate-50 border border-slate-100 text-center group hover:border-red-600 transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2 text-red-600 group-hover:scale-110 transition-transform">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>
                   </svg>
                   <p className="text-[8px] font-black uppercase tracking-widest text-slate-500">Quality Certified</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-100 text-center group hover:border-red-600 transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2 text-red-600 group-hover:scale-110 transition-transform">
                    <path d="M2 20V9l9-2 10 2v11"/><path d="M9 20V5l10 2v13"/><path d="M11 13h4"/><path d="M11 17h4"/><path d="M11 9h4"/>
                   </svg>
                   <p className="text-[8px] font-black uppercase tracking-widest text-slate-500">Direct Factory</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-100 text-center group hover:border-red-600 transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2 text-red-600 group-hover:scale-110 transition-transform">
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-2.235-2.98a1 1 0 0 0-.795-.396H15"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>
                   </svg>
                   <p className="text-[8px] font-black uppercase tracking-widest text-slate-500">Global Shipping</p>
                </div>
              </div>
            </div>
          </div>

          {/* DETAILS SECTION */}
          <div className="flex flex-col">
            <span className="text-red-600 font-black uppercase text-[10px] tracking-[4px] mb-4">
              {product.category}
            </span>
            <h1 className="text-5xl font-black uppercase text-slate-950 mb-6 leading-none tracking-tighter">
              {product.name}
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 pb-10 border-b border-slate-100 font-medium italic">
              {product.description}
            </p>

            {/* Features List */}
            <div className="mb-12">
              <h3 className="text-xs font-black uppercase tracking-widest mb-6 text-slate-950">Key Engineering Features</h3>
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                {product.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                      <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
                    </svg>
                    <span className="text-[11px] font-black uppercase text-slate-700 tracking-tight">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specification Table */}
            <div className="bg-slate-950 p-8 mb-10 relative overflow-hidden">
               {/* Decorative Background Element */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rotate-45 -mr-16 -mt-16 pointer-events-none" />
               
              <h3 className="text-white text-xs font-black uppercase tracking-[3px] mb-8 border-l-2 border-red-600 pl-4 relative z-10">
                Technical Data Sheet
              </h3>
              <div className="space-y-4 relative z-10">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/5 pb-3 group">
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest group-hover:text-red-500 transition-colors">{spec.label}</span>
                    <span className="text-slate-200 text-xs font-black uppercase">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs (Static Button Replacement) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-black h-16 uppercase text-xs tracking-widest active:scale-95 transition-all duration-300">
                Request Bulk Quote
              </button>
              <button className="flex-1 border-2 border-slate-950 text-slate-950 font-black h-16 uppercase text-xs tracking-widest hover:bg-slate-950 hover:text-white active:scale-95 transition-all duration-300">
                Technical Inquiry
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(productsData).map((slug) => ({
    slug: slug,
  }));
}