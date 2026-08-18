import { Preloader } from "./preloader";
import { Navbar } from "./navbar";
import { CustomCursor } from "./custom-cursor";
import { HeroSection } from "./hero-section";
import { PhilosophySection } from "./philosophy-section";
import { FeatureImageSection } from "./feature-image-section";
import { ProjectsSection } from "./projects-section";
import { MarqueeStrip } from "./marquee-strip";
import { ServicesSection } from "./services-section";
import { ManifestoSection } from "./manifesto-section";
import { JournalSection } from "./journal-section";
import { ContactSection } from "./contact-section";
import { SiteFooter } from "./site-footer";
import { BrandMotionController } from "@/components/motion/brand-motion-controller";

export function BrandShowcase() {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <CustomCursor />
      <Preloader />
      <Navbar />
      <main>
        <HeroSection />
        <PhilosophySection />
        <FeatureImageSection />
        <ProjectsSection />
        <MarqueeStrip />
        <ServicesSection />
        <ManifestoSection />
        <JournalSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <BrandMotionController />
    </>
  );
}