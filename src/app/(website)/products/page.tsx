import PageHero from "@/src/components/common/PageHero";
import { productsData } from "@/src/data/ProductsData";
import Image from "next/image";
import Link from "next/link";
import FeaturedProducts from "@/src/components/website/home/FeaturedProducts";

export default function ProductsPage() {
  const products = Object.values(productsData);

  return (
    <main className="bg-slate-50">
      <PageHero 
        title="Industrial Catalog" 
        subtitle="Precision-engineered hardware for modern warehousing and retail logistics."
        bgImage="/Products/ProductsHero.webp"
      />

     <FeaturedProducts/>
    </main>
  );
}