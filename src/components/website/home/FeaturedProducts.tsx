import React from 'react';
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  image: string;
  slug: string;
  category: string;
}

const FeaturedProducts = () => {
  // 8-9 Featured Products Data
  const products: Product[] = [
    { id: 1, title: "Industrial Racking", image: "/Home/productGroup1.jpg", slug: "industrial-racking", category: "Storage" },
    { id: 2, title: "Structural Mezzanine", image: "/Home/productGroup2.jpg", slug: "structural-mezzanine", category: "Structure" },
    { id: 3, title: "Cantilever Systems", image: "/Home/productGroup3.jpg", slug: "cantilever-systems", category: "Heavy Duty" },
    { id: 4, title: "Steel Fabrications", image: "/Home/productGroup4.jpg", slug: "steel-fabrications", category: "Custom" },
    { id: 5, title: "Pallet Flow Racks", image: "/Home/productGroup5.jpg", slug: "pallet-flow-racks", category: "Warehouse" },
    { id: 6, title: "Conveyor Solutions", image: "/Home/productGroup6.jpg", slug: "conveyor-solutions", category: "Automation" },
    { id: 7, title: "Cold Storage", image: "/Home/productGroup7.jpg", slug: "cold-storage", category: "Specialized" },
    { id: 8, title: "Automated AS/RS", image: "/Home/productGroup8.jpg", slug: "automated-asrs", category: "Robotics" },
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden font-sans">
      <div className="container mx-auto px-6">
        
        {/* --- HEADING SECTION (MATCHED TO YOUR ABOUT STYLE) --- */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-[#D62828]"></span>
            <span className="text-[#D62828] font-black uppercase tracking-[4px] text-[10px]">
              Our Engineering Catalog
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[0.9] uppercase tracking-tighter">
            Premium Project <br /> 
            <span className="text-slate-300 font-light italic">Featured Products.</span>
          </h2>
        </div>

        {/* --- PRODUCTS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Red Overlay with Button (Shows on Hover) */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link href={`/products`}>
                    <button className="bg-[#D62828] text-white px-6 py-3 font-black uppercase text-[10px] tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                      Read More
                    </button>
                  </Link>
                </div>

                {/* Category Tag */}
                <div className="absolute top-4 left-4 bg-white px-3 py-1">
                   <p className="text-[9px] font-black uppercase tracking-tighter text-slate-900">
                     {product.category}
                   </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 border-t border-slate-50">
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight group-hover:text-[#D62828] transition-colors duration-300">
                  {product.title}
                </h3>
                <div className="w-8 h-[2px] bg-slate-200 mt-2 group-hover:w-full group-hover:bg-[#D62828] transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* --- VIEW ALL ACTION --- */}
        <div className="mt-16 flex justify-center">
          <Link href="/products">
            <button className="border-2 border-slate-200 text-slate-900 px-12 py-4 font-black uppercase text-xs tracking-widest hover:bg-[#D62828] hover:text-white hover:border-[#D62828] transition-all duration-300">
              View All Products
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;