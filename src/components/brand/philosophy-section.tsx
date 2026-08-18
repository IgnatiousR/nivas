import { cn } from "@/lib/utils";
import { Container } from "./container";
import { stats } from "@/data/brand-content";
import type { Stat } from "@/data/brand-content";

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden bg-cream py-24 text-ink md:py-36 lg:py-44"
    >
      <div className="grid-lines absolute inset-0 opacity-25 pointer-events-none"></div>
      <Container className="relative">
        <div className="grid gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p
              data-animate="reveal-label"
              className="reveal-label flex items-center gap-3 text-[10px] uppercase tracking-[.24em] text-black/50"
            >
              <span className="h-px w-7 bg-black/30"></span>
              Our philosophy
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <h2
              data-animate="reveal-text"
              className="reveal-text font-display text-[11vw] leading-[.98] tracking-[-.045em] sm:text-6xl md:text-7xl lg:text-[5.3rem]"
            >
              Not simply buildings.
              <br />
              <span className="italic text-olive">A way of living.</span>
            </h2>

            <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-2 md:gap-14">
              <p
                data-animate="reveal-up"
                className="reveal-up max-w-xl text-[17px] leading-8 text-black/72 md:text-xl"
              >
                NIVAS creates considered residential environments where
                architecture, material and nature work quietly together.
              </p>
              <p
                data-animate="reveal-up"
                className="reveal-up max-w-md text-sm leading-7 text-black/55 md:text-[15px]"
              >
                From the orientation of a window to the texture beneath your
                hand, each decision is made to elevate the ordinary. We believe
                luxury is not excess — it is clarity, calm and care.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 border-y border-black/15 md:mt-36 lg:grid-cols-4">
          <StatCard
            stat={stats[0]}
            className="border-r border-black/15 py-7 md:py-9 lg:px-5"
          />
          <StatCard
            stat={stats[1]}
            className="border-black/15 px-4 py-7 md:py-9 lg:border-r lg:px-8"
          />
          <StatCard
            stat={stats[2]}
            className="border-r border-t border-black/15 py-7 md:py-9 lg:border-t-0 lg:px-8"
          />
          <StatCard
            stat={stats[3]}
            className="border-t border-black/15 py-7 pl-4 md:py-9 lg:border-t-0 lg:pl-8"
          />
        </div>
      </Container>
    </section>
  );
}

function StatCard({ stat, className }: { stat: Stat; className: string }) {
  return (
    <div className={cn("stat", className)}>
      <div className="font-display text-5xl tracking-[-.05em] md:text-6xl lg:text-7xl">
        <span data-counter data-value={stat.value}>
          0
        </span>
        {stat.suffix && <span className="text-gold">{stat.suffix}</span>}
      </div>
      <p className="mt-3 text-[10px] uppercase tracking-[.2em] text-black/50">
        {stat.label}
      </p>
    </div>
  );
}