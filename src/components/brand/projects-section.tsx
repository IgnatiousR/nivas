import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { projects } from "@/data/brand-content";
import type { Project } from "@/data/brand-content";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="overflow-hidden bg-ink py-24 text-cream md:py-36 lg:py-40"
    >
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              data-animate="reveal-label"
              className="reveal-label text-[10px] uppercase tracking-[.24em] text-white/45"
            >
              Selected residences
            </p>
            <h2
              data-animate="reveal-text"
              className="reveal-text font-display mt-5 text-[13vw] leading-[.88] tracking-[-.055em] md:text-7xl lg:text-[6.8rem]"
            >
              Made for
              <br />
              <span className="italic text-sage">belonging.</span>
            </h2>
          </div>
          <p
            data-animate="reveal-up"
            className="reveal-up max-w-sm text-sm leading-6 text-white/50 md:pb-2"
          >
            A collection of distinct addresses, each grounded in its
            neighborhood and shaped around the people who will call it home.
          </p>
        </div>

        <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-24 flex items-center justify-between border-t border-white/15 pt-7 md:mt-32">
          <span className="text-[10px] uppercase tracking-[.22em] text-white/40">
            12 current residences
          </span>
          <button
            type="button"
            className="interactive focus-ring flex items-center gap-3 text-[10px] uppercase tracking-[.22em] transition hover:text-sage"
          >
            View all projects
            <span>↗</span>
          </button>
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const imageOnLeft = project.imageSide === "left";
  return (
    <article className="project-card group grid items-end gap-5 lg:grid-cols-12 lg:gap-8">
      <div
        data-animate="clip-project"
        className={cn(
          "clip-project relative aspect-[4/3] overflow-hidden md:aspect-[16/10] lg:col-span-8",
          imageOnLeft ? "order-1" : "order-1 lg:order-2",
        )}
      >
        <Image
          className="project-image object-cover"
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 66vw, 100vw"
        />
      </div>
      <div
        className={cn(
          "pb-1 lg:col-span-4",
          imageOnLeft ? "lg:pl-4" : "lg:pr-4",
          imageOnLeft ? "order-2" : "order-2 lg:order-1",
        )}
      >
        <div className="flex items-center justify-between border-b border-white/15 pb-4 text-[9px] uppercase tracking-[.2em] text-white/40">
          <span>{project.index} / Residence</span>
          <span>{project.location}</span>
        </div>
        <h3 className="font-display mt-5 text-4xl leading-none tracking-[-.04em] md:text-5xl lg:text-[3.7rem]">
          {project.name}
        </h3>
        <p className="mt-5 max-w-sm text-sm leading-6 text-white/52">
          {project.description}
        </p>
        <button
          type="button"
          className="interactive focus-ring mt-8 inline-flex items-center gap-4 text-[10px] uppercase tracking-[.2em]"
        >
          View residence
          <svg className="project-arrow h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 19 19 5M9 5h10v10" strokeWidth="1.4" />
          </svg>
        </button>
      </div>
    </article>
  );
}