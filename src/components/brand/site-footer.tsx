import { Container } from "./container";
import { footerLinks } from "@/data/brand-content";

const exploreHrefs = footerLinks.map((link) => link.href);

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <Container className="pt-16 pb-7 md:pt-20">
        <div className="grid gap-12 pb-16 md:grid-cols-12 md:pb-24">
          <div className="md:col-span-5">
            <div className="font-display text-5xl tracking-[-.05em] md:text-7xl">
              NIVAS
            </div>
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/45">
              Thoughtful residences for a more considered way of living in
              Dhaka.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <FooterHeading>Explore</FooterHeading>
            <div className="space-y-3 text-sm text-white/65">
              {exploreHrefs.map((href, i) => (
                <a
                  key={href}
                  href={href}
                  className="interactive focus-ring block transition hover:text-white"
                >
                  {["Projects", "Philosophy", "Services", "Journal"][i]}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <FooterHeading>Visit</FooterHeading>
            <p className="text-sm leading-6 text-white/65">
              18 Nivas Avenue
              <br />
              Dhaka 121@
              <br />
              Bangladesh
            </p>
          </div>

          <div className="md:col-span-2">
            <FooterHeading>Connect</FooterHeading>
            <div className="space-y-3 text-sm text-white/65">
              {connectLinks.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="interactive focus-ring block transition hover:text-white"
                  >
                    {link.label}
                  </a>
                ) : (
                  <button
                    key={link.label}
                    type="button"
                    className="interactive focus-ring block transition hover:text-white"
                  >
                    {link.label}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-white/12 pt-5 text-[9px] uppercase tracking-[.18em] text-white/30 sm:flex-row">
          <span>© 2026 NIVAS Developments</span>
          <div className="flex gap-6">
            <button type="button" className="focus-ring transition hover:text-white">Privacy</button>
            <button type="button" className="focus-ring transition hover:text-white">Terms</button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-[9px] uppercase tracking-[.2em] text-white/30">
      {children}
    </p>
  );
}

const connectLinks = [
  { label: "Instagram ↗", href: null as string | null },
  { label: "LinkedIn ↗", href: null as string | null },
  { label: "Email ↗", href: "mailto:hello@nivas.example" },
];