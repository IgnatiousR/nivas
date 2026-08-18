import Image from "next/image";
import { Container } from "./container";
import { heroImage } from "@/data/brand-content";

export function HeroSection() {
  return (
    <section
      data-hero
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-ink text-white"
    >
      <div className="absolute inset-0">
        <Image
          data-hero-image
          className="hero-image object-cover opacity-72 scale-[1.08]"
          src={heroImage}
          alt="Contemporary luxury residence"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/5 to-black/55"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.18),transparent_50%)]"></div>
      </div>

      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-end pt-32 pb-8 md:pt-40 md:pb-10">
        <div className="mb-auto max-w-5xl pt-[8vh] md:pt-[12vh]">
          <p
            data-hero-kicker
            className="hero-kicker flex items-center gap-4 text-[10px] uppercase tracking-[.28em] text-white/70 opacity-0 md:text-xs"
          >
            <span className="h-px w-9 bg-white/50"></span>
            Contemporary residences in Dhaka
          </p>

          <h1 className="font-display mt-5 text-[15vw] leading-[.82] tracking-[-.055em] sm:text-[12vw] md:mt-7 lg:text-[8.8vw] xl:text-[8rem]">
            <span className="line-mask">
              <span data-hero-line className="hero-line">
                Spaces that
              </span>
            </span>
            <span className="line-mask">
              <span data-hero-line className="hero-line italic font-medium">
                hold life.
              </span>
            </span>
          </h1>
        </div>

        <div className="grid items-end gap-6 border-t border-white/30 pt-5 md:grid-cols-12">
          <p
            data-hero-bottom
            className="hero-bottom max-w-md text-sm leading-6 text-white/75 opacity-0 md:col-span-5 md:text-[15px] lg:col-span-4"
          >
            We shape enduring homes around light, landscape and the rhythms of
            everyday life — with an uncompromising eye for detail.
          </p>

          <div
            data-hero-bottom
            className="hero-bottom flex opacity-0 md:col-start-9 md:col-span-4 md:justify-end"
          >
            <a
              href="#projects"
              data-magnetic
              className="interactive focus-ring magnetic group inline-flex items-center gap-4 text-[11px] uppercase tracking-[.2em]"
            >
              <span>Explore residences</span>
              <span className="grid h-11 w-11 place-items-center rounded-full border border-white/45 transition duration-300 group-hover:bg-white group-hover:text-ink">
                <svg className="h-4 w-4 rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeWidth="1.4" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </Container>

      <div className="absolute top-1/2 right-5 hidden -translate-y-1/2 lg:block md:right-8 lg:right-12">
        <p className="[writing-mode:vertical-rl] rotate-180 text-[9px] uppercase tracking-[.32em] text-white/50">
          Architecture for a lasting city
        </p>
      </div>
    </section>
  );
}