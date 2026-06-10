import React from 'react';
import Image from "next/image";
import Link from "next/link";

// 1. Products ki type define ki
type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Industrial Checkout Counter",
    slug: "industrial-checkout-counter",
    category: "Retail Solutions",
    description: "Heavy-duty ergonomic design with premium finish and built-in storage drawers.",
    image: "/Home/Product-1.webp",
  },
  {
    id: 2,
    name: "Heavy-Duty Rolling Baskets",
    slug: "heavy-duty-rolling-baskets",
    category: "Store Equipment",
    description: "High-grade durable plastic baskets with smooth-rolling wheels for easy maneuverability.",
    image: "/Home/Product-2.jfif",
  },
  {
    id: 3,
    name: "Chrome Wire Basket",
    slug: "chrome-wire-basket",
    category: "Shopping Accessories",
    description: "Classic stackable wire basket with reinforced red handles for comfort and strength.",
    image: "/Home/Product-3rd.jpg",
  }
];

// 2. Icon Props ki type define ki
interface IconProps {
  className?: string;
}

// Inline SVGs for the UI
const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#D62828" stroke="#D62828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);

// Yahan className: IconProps add kiya
const ArrowRightIcon = ({ className }: IconProps) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

// Yahan bhi className: IconProps add kiya
const ShoppingBagIcon = ({ className }: IconProps) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
);

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden font-sans">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-[#D62828]"></span>
              <span className="text-[#D62828] font-black uppercase tracking-[4px] text-[10px]">
                Product Catalog
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">
              Precision Built <br /> <span className="text-slate-400 font-light italic">Retail Equipment.</span>
            </h2>
          </div>
          <Link href="/products">
            <button className="border border-slate-300 text-slate-900 bg-transparent px-8 py-4 font-black text-[10px] uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300">
              View All Products
            </button>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm overflow-hidden"
            >
              {/* Image Container */}
              <Link href={`/products/${product.slug}`} className="block relative h-72 w-full bg-[#f1f1f1] overflow-hidden p-8">
                <div className="flex items-center justify-center h-full w-full">
                    <Image 
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="object-contain group-hover:scale-110 transition-transform duration-700 h-full w-auto"
                    />
                </div>
                
                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 border border-slate-100">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">
                    {product.category}
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                  <span className="text-[10px] text-slate-400 font-bold ml-2 uppercase">Certified Quality</span>
                </div>
                
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-3 group-hover:text-[#D62828] transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2">
                  {product.description}
                </p>

                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <Link 
                    href={`/products/${product.slug}`}
                    className="text-slate-900 font-black text-xs uppercase tracking-widest flex items-center gap-2 group/btn"
                  >
                    Enquire Now 
                    <ArrowRightIcon className="group-hover/btn:translate-x-2 transition-transform text-[#D62828]" />
                  </Link>
                  <div className="p-2 bg-slate-50 group-hover:bg-red-50 transition-colors">
                    <ShoppingBagIcon className="text-slate-400 group-hover:text-[#D62828]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bulk Order Banner */}
        <div 
          className="mt-20 bg-slate-950 p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border-b-4 border-[#D62828]"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(#ffffff 2px, transparent 2px)`, backgroundSize: '30px 30px' }}>
          </div>
          
          <div className="relative z-10">
            <h4 className="text-white text-2xl md:text-3xl font-black uppercase italic mb-2 tracking-tighter">Setup Your Store Today</h4>
            <p className="text-slate-400 text-sm max-w-lg font-medium tracking-wide">We provide complete retail engineering solutions from checkout counters to storage racking. Get a customized quote for bulk orders.</p>
          </div>
          
          <button className="relative z-10 w-full md:w-auto px-12 py-6 bg-[#D62828] hover:bg-white hover:text-black transition-all duration-300 rounded-none font-black uppercase tracking-[2px] text-xs text-white">
            Request Bulk Quote
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;