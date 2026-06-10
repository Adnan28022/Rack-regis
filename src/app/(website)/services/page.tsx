import PageHero from "@/src/components/common/PageHero";
import ServicesGrid from "@/src/components/website/services/ServicesGrid";
import Workflow from "@/src/components/website/services/WorkFlow";
import Link from "next/link";
import ServiceSupport from "@/src/components/website/services/ServicesSupport";

export default function ServicesPage() {
  return (
    <main className="bg-slate-50">
      {/* Existing Reusable Hero */}
      <PageHero 
        title="Engineering Solutions" 
        subtitle="Precision-crafted storage systems designed for industrial scale and maximum efficiency."
        bgImage="/Services/ServicesHero.avif"
      />

      {/* Main Technical Grid */}
      <ServicesGrid />

      {/* Process / Workflow Section */}
      <Workflow />
      <ServiceSupport/>
    </main>
  );
}