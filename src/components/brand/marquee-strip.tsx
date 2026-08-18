import { marqueeWords } from "@/data/brand-content";

export function MarqueeStrip() {
  return (
    <section className="overflow-hidden border-y border-black/10 bg-gold py-5 text-ink">
      <div className="marquee-track flex items-center">
        <Track />
        <Track ariaHidden />
      </div>
    </section>
  );
}

function Track({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden || undefined}
      className="font-display flex items-center text-3xl italic tracking-[-.03em] md:text-5xl"
    >
      {marqueeWords.map((word) => (
        <span key={word} className="flex shrink-0 items-center">
          <span className="mx-8">{word}</span>
          <span className="text-black/30">✦</span>
        </span>
      ))}
    </div>
  );
}