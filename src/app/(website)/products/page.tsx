"use client";
import { useState, useMemo } from "react";
import PageHero from "@/src/components/common/PageHero";
import Image from "next/image";
import Link from "next/link";
import { getFilteredProducts } from "@/src/data/ProductsData";

// Extended Categories List
const categories = [
  { id: 1, name: "Display Racks", subItems: ["Gondola Rack","Wall Rack", "End Mode Rack", "Crockery Rack", "Oil and Ghee Rack", "Brush Rack", "Vegetable Rack", "Shopping Trolley", "Roller Basket","Shopping Basket", "Cash Counter", "Storage Rack"] },
  { id: 2, name: "Heavy Duty Racks", subItems: ["Bulk Rack With Mesh Decking","Bulk Rack With Steel Decking", "Double Deep Racking System", "Drive in Drive Thru Racking System", "Palletized Racks"] },
  { id: 3, name: "Medium Duty Racks", subItems: ["Medium Duty Rack With Mesh Decking", "Medium Duty Racks With Plastic Containers", "Rack with Steel Decking"] },
  { id: 4, name: "Mezzanine & Steel Plat Fram", subItems: ["Mezzanine on Gange Ways", "Over Head Steel Plate Farms", "Steel Mezzanine with Medium Duty Racks", "Steel Mezzanine with Short Span Racks"] },
  { id: 5, name: "Slotted Angle & Short Span Racks", subItems: ["Short Span Bulk Rack", "Short Span Rack with Mezzanine", "Short Span Racks with Plastic Bins", "Slotted Angle Racks"] },
  { id: 6, name: "Plastic Bins & Container", subItems: ["Plastic Bins with Led", "Plastic Container With Led"] },
  { id: 7, name: "Moveable Racks & Cabinets", subItems: ["Cabinets With Drawer", "Filing Cabinets", "Gerneral Cabinets", "Moveable Bulk Rack", "Moveable Filing Racks", "Moveable Racks and Bins", "Tool Cabinets & Trolleys-1", "Tool Cabinets & Trolleys-2"] },
  { id: 8, name: "Labour's Aids", subItems: ["Mens Handly Lockers", "Officer Changing Lockers-1", "Worker Locker-1", "Worker Locker-2", "Worker Locker-3", "Worker Locker-4"] },
  { id: 9, name: "Material Handling", subItems: [] },
  { id: 10, name: "Pallets Cage", subItems: ["Stackable Rack", "Water Rack"] },
  { id: 11, name: "Pigeon", subItems: [] },
  { id: 12, name: "Cantilever Racks", subItems: [] },
  { id: 13, name: "Slotted Angle Rack", subItems:["Hard Ware Storage Racks"]},
  { id: 14, name: "Tire Racks", subItems: ["Stacking Tire Rack", "Tire Racks"] },
  { id: 15, name: "Material Handling Equipment", subItems: ["Drum Trolley", "Mesh Cage Trolley", "Plastic Bins", "Trolley", "Truck Trolley"] },
  { id: 16, name: "Pallets", subItems: [] },
  { id: 17, name: "ESD Work Bench", subItems: []},
];

export default function ProductsPage() {
  const [openCategory, setOpenCategory] = useState<number | null>(2);
  const [selectedCategory, setSelectedCategory] = useState("Heavy Duty Racks");
  const [selectedSub, setSelectedSub] = useState<string | undefined>(undefined);

  const displayedProducts = useMemo(() => {
    return getFilteredProducts(selectedCategory, selectedSub);
  }, [selectedCategory, selectedSub]);

  const handleCategoryClick = (id: number, name: string) => {
    setOpenCategory(openCategory === id ? null : id);
    setSelectedCategory(name);
    setSelectedSub(undefined); // Reset sub-filter when switching main category
  };

  return (
    <main className="bg-white min-h-screen">
      <PageHero title="Industrial Catalog" subtitle="Precision-engineered hardware." bgImage="/Products/ProductsHero.webp" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* SIDEBAR */}
          <aside className="w-full lg:w-[320px] shrink-0">
            <div className="lg:sticky lg:top-24"> 
              <h2 className="text-2xl font-black uppercase mb-6 border-l-4 border-slate-900 pl-4">Categories</h2>
              <div className="flex flex-col space-y-1">
                {categories.map((cat) => (
                  <div key={cat.id}>
                    <button 
                      onClick={() => handleCategoryClick(cat.id, cat.name)}
                      className={`w-full flex items-center justify-between py-3 px-4 transition-all border-l-2 
                        ${selectedCategory === cat.name ? 'bg-slate-900 text-white border-red-600' : 'bg-slate-50 border-transparent hover:bg-slate-100'}`}
                    >
                      <span className="text-[11px] font-bold uppercase tracking-wider">{cat.name}</span>
                      {cat.subItems.length > 0 && <span>{openCategory === cat.id ? '−' : '+'}</span>}
                    </button>

                    <div className={`overflow-hidden transition-all ${openCategory === cat.id ? 'max-h-96' : 'max-h-0'}`}>
                      {cat.subItems.map((sub, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setSelectedSub(sub)}
                          className={`w-full text-left px-8 py-2 text-[10px] font-bold uppercase transition-colors flex items-center gap-2
                            ${selectedSub === sub ? 'text-red-600' : 'text-slate-500 hover:text-red-600'}`}
                        >
                          <span className={`w-1 h-1 rounded-full ${selectedSub === sub ? 'bg-red-600' : 'bg-slate-300'}`}></span>
                          {sub}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* CONTENT */}
          <section className="flex-1">
            <div className="bg-slate-50 p-8 border border-slate-100 min-h-screen">
              <div className="mb-12">
                <span className="text-red-600 font-black uppercase text-[10px] tracking-widest">{selectedSub || "All Series"}</span>
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">{selectedSub || selectedCategory}</h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {displayedProducts.length > 0 ? displayedProducts.map((item) => (
                  <Link href={`/products/${item.slug}`} key={item.id} className="group bg-white border border-slate-200 overflow-hidden hover:shadow-xl transition-all">
                    <div className="relative h-[300px] w-full">
                      <Image src={item.images[0]} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-sm font-black uppercase group-hover:text-red-600 transition-colors">{item.name}</h3>
                      <p className="text-[10px] text-slate-400 mt-2 uppercase font-black">View Details →</p>
                    </div>
                  </Link>
                )) : (
                  <p className="text-slate-400 italic">No products found in this sub-category yet.</p>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}