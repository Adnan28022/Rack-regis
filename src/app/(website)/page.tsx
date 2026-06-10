import AboutPreview from "@/src/components/website/home/AboutPreview";
import FeaturedProducts from "@/src/components/website/home/FeaturedProducts";
import Hero from "@/src/components/website/home/Hero";
import WhyChooseUs from "@/src/components/website/home/WhyChooseUs";
import Testimonials from "@/src/components/website/home/Testimonial"
import ServicesSection from "@/src/components/website/home/Services";
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts/>
      <AboutPreview />
      <ServicesSection/>
      <WhyChooseUs/>
      <Testimonials/>
    </>
  );
}