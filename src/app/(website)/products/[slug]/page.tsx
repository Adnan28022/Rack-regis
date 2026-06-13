"use client";
import { productsData, ProductSlug } from "@/src/data/ProductsData";
import { notFound, useParams } from "next/navigation";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as ProductSlug;
  const product = productsData[slug];

  // Logic for gallery images
  const [activeImg, setActiveImg] = useState(0);

  if (!product) notFound();

  return (
    <main className="bg-white min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6">
        
        <Link href="/products" className="group inline-flex items-center gap-2 text-slate-400 hover:text-red-600 transition-colors mb-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
            <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
          </svg>
          <span className="text-[10px] font-black uppercase tracking-[3px]">Back to Catalog</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* IMAGE SECTION WITH GALLERY */}
          <div className="relative">
            <div className="sticky top-32">
              <div className="relative h-[500px] w-full bg-slate-50 border border-slate-100 p-8 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[size:30px_30px] bg-[radial-gradient(#000_1px,transparent_1px)]" />
                
                <Image 
                  src={product.images[activeImg]} 
                  alt={product.name} 
                  fill 
                  priority
                  className="object-contain p-8 transition-opacity duration-500"
                />
              </div>

              {/* Thumbnails Gallery */}
              <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImg(idx)}
                    className={`relative w-24 h-24 border-2 transition-all shrink-0 
                      ${activeImg === idx ? 'border-red-600 scale-95' : 'border-slate-100 grayscale hover:grayscale-0'}`}
                  >
                    <Image src={img} alt="Thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* DETAILS SECTION */}
          <div className="flex flex-col">
            <span className="text-red-600 font-black uppercase text-[10px] tracking-[4px] mb-4">
              {product.category} / {product.subCategory}
            </span>
            <h1 className="text-5xl font-black uppercase text-slate-950 mb-6 leading-none tracking-tighter">
              {product.name}
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 pb-10 border-b border-slate-100 font-medium italic">
              {product.description}
            </p>

            {/* Features */}
            <div className="mb-12">
              <h3 className="text-xs font-black uppercase tracking-widest mb-6 text-slate-950">Key Engineering Features</h3>
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                {product.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    <span className="text-[11px] font-black uppercase text-slate-700 tracking-tight">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Table */}
            <div className="bg-slate-950 p-8 mb-10">
              <h3 className="text-white text-xs font-black uppercase tracking-[3px] mb-8 border-l-2 border-red-600 pl-4">
                Technical Data Sheet
              </h3>
              <div className="space-y-4">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/5 pb-3 group">
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{spec.label}</span>
                    <span className="text-slate-200 text-xs font-black uppercase">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-black h-16 uppercase text-xs tracking-widest transition-all">
                Request Bulk Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}