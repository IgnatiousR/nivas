import Image from "next/image";
import { Container } from "./container";
import { journalPosts } from "@/data/brand-content";

export function JournalSection() {
  return (
    <section id="journal" className="bg-cream py-24 md:py-36">
      <Container>
        <div className="flex items-end justify-between gap-10">
          <div>
            <p
              data-animate="reveal-label"
              className="reveal-label text-[10px] uppercase tracking-[.24em] text-black/45"
            >
              Journal
            </p>
            <h2
              data-animate="reveal-text"
              className="reveal-text font-display mt-4 text-5xl tracking-[-.045em] md:text-7xl"
            >
              Ideas for living.
            </h2>
          </div>
          <button
            type="button"
            className="interactive focus-ring hidden border-b border-black/40 pb-2 text-[10px] uppercase tracking-[.2em] md:block"
          >
            View all stories
          </button>
        </div>

        <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-3 md:gap-5 lg:gap-8">
          {journalPosts.map((post) => (
            <article
              key={post.title}
              data-animate="journal-card"
              className="journal-card group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-warm">
                <Image
                  className="object-cover transition duration-700 group-hover:scale-[1.035]"
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="mt-4 border-t border-black/20 pt-5">
                <p className="text-[9px] uppercase tracking-[.18em] text-black/40">
                  {post.category} / {post.readTime}
                </p>
                <h3 className="font-display mt-3 text-2xl leading-tight tracking-[-.03em] md:text-3xl">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}