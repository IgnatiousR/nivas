import { cn } from "@/lib/utils";
import { Container } from "./container";
import { services } from "@/data/brand-content";
import type { Service } from "@/data/brand-content";

export function ServicesSection() {
  return (
    <section id="services" className="bg-cream py-24 md:py-36 lg:py-40">
      <Container>
        <div className="grid gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p
              data-animate="reveal-label"
              className="reveal-label text-[10px] uppercase tracking-[.24em] text-black/45"
            >
              Beyond development
            </p>
            <h2
              data-animate="reveal-text"
              className="reveal-text font-display mt-5 text-5xl leading-[.96] tracking-[-.045em] md:text-6xl lg:text-7xl"
            >
              From land
              <br />
              to <span className="italic text-olive">living.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {services.map((service, i) => (
              <ServiceRow
                key={service.index}
                service={service}
                isLast={i === services.length - 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ServiceRow({ service, isLast }: { service: Service; isLast: boolean }) {
  return (
    <div
      data-animate="service-row"
      className={cn(
        "service-row grid grid-cols-[42px_1fr_auto] items-start gap-4 border-black/15 py-7 md:grid-cols-[70px_1fr_1fr_auto] md:py-9",
        isLast ? "border-y" : "border-t",
      )}
    >
      <span className="font-display italic text-black/35">{service.index}</span>
      <h3 className="tracking-[-.03em] font-clean text-xl md:text-2xl">
        {service.title}
      </h3>
      <p className="hidden max-w-xs text-sm leading-6 text-black/50 md:block">
        {service.description}
      </p>
      <span className="text-xl">↗</span>
    </div>
  );
}