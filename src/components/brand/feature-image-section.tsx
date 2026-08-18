import Image from "next/image";
import { Container } from "./container";
import { storyImage } from "@/data/brand-content";

export function FeatureImageSection() {
  return (
    <section className="relative h-[65vh] overflow-hidden bg-ink md:h-[90vh]">
      <Image
        data-story-image
        className="story-image object-cover"
        src={storyImage}
        alt="Warm modern interior"
        fill
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/15"></div>
      <Container className="absolute inset-x-0 bottom-0 z-10 pb-8 text-white md:pb-12">
        <div className="flex items-end justify-between border-t border-white/35 pt-4">
          <p className="text-[10px] uppercase tracking-[.22em]">
            Natural materials, honest details
          </p>
          <p className="hidden text-[10px] uppercase tracking-[.22em] text-white/60 md:block">
            NIVAS / Design Principle 02
          </p>
        </div>
      </Container>
    </section>
  );
}