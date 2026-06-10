import PageHero from "@/src/components/common/PageHero";
import ContactInfo from "@/src/components/website/contact/ContactInfo";
import ContactForm from "@/src/components/website/contact/ContactForm";
import LocationMap from "@/src/components/website/contact/LocationMap";

export default function ContactPage() {
  return (
    <main>
      {/* Existing Reusable Hero */}
      <PageHero 
        title="Get in Touch" 
        subtitle="Consult with our engineering experts for your next industrial or retail project."
        bgImage="/Contact/ContactHero.avif"
      />

      {/* Info Cards Section */}
      <ContactInfo />

      {/* Main Inquiry Form Section */}
      <ContactForm />

      {/* Cinematic Map Section */}
      <LocationMap />

      {/* Final CTA/Support Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-950 mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-slate-500 mb-8 font-medium">
            Our technical support hotline is available 24/7 for emergency structural issues or site safety audits.
          </p>
          <a href="tel:+923001234567" className="text-red-600 font-black text-3xl tracking-tighter hover:tracking-widest transition-all duration-500">
            +92 300 1234567
          </a>
        </div>
      </section>
    </main>
  );
}