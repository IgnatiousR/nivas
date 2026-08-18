import Image from "next/image";
import { Container } from "./container";
import { manifestoImage } from "@/data/brand-content";

export function ManifestoSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-[#d9d3c7]">
      <div className="absolute top-0 right-0 hidden h-full w-[45%] lg:block">
        <Image
          data-manifesto-image
          className="manifesto-image object-cover"
          src={manifestoImage}
          alt="Modern residence façade"
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
        />
      </div>
      <Container className="relative py-24 md:py-36">
        <div className="lg:w-[51%]">
          <p
            data-animate="reveal-label"
            className="reveal-label text-[10px] uppercase tracking-[.24em] text-black/45"
          >
            A quieter definition of luxury
          </p>
          <blockquote
            data-animate="reveal-text"
            className="reveal-text font-display mt-7 text-[11vw] leading-[1.02] tracking-[-.045em] md:text-6xl lg:text-7xl"
          >
            “The best spaces do not ask for attention.{" "}
            <span className="italic text-olive">They give it back to you.</span>”
          </blockquote>
          <div className="mt-10 flex items-center gap-4">
            <span className="h-px w-11 bg-black/30"></span>
            <p className="text-[10px] uppercase tracking-[.2em] text-black/50">
              NIVAS Design Office
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}