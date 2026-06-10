import PageHero from "@/src/components/common/PageHero";
import MissionVision from "@/src/components/website/about/MissionVision";
import Overview from "@/src/components/website/about/Overview";
import Team from "@/src/components/website/about/Team";

export default function AboutPage() {
  return (
    <main>
      <PageHero 
        title="About Us" 
        subtitle="Driving the future of industrial storage through precision structural engineering and innovative retail solutions." 
        bgImage="/About/PageHero.avif" 
      />
      <Overview/>
      <MissionVision/>
      <Team/>      
    </main>
  );
}