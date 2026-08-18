"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Container } from "./container";
import { MobileMenu } from "./mobile-menu";
import { navLinks } from "@/data/brand-content";

gsap.registerPlugin(ScrollTrigger);

export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const trigger = ScrollTrigger.create({
      start: 100,
      onUpdate: (self) => {
        if (self.scroll() > 80) {
          header.classList.add("nav-glass", "text-ink");
          header.classList.remove("text-white");
        } else {
          header.classList.remove("nav-glass", "text-ink");
          header.classList.add("text-white");
        }
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
      <header
        ref={headerRef}
        id="navbar"
        className="fixed inset-x-0 top-0 z-50 text-white transition-all duration-500"
      >
        <Container className="flex h-20 items-center justify-between md:h-24">
          <a
            href="#home"
            className="interactive focus-ring font-display text-[25px] font-semibold tracking-[-0.035em]"
          >
            NIVAS
          </a>

          <nav className="font-medium hidden items-center gap-8 text-[11px] uppercase tracking-[.17em] md:flex lg:gap-11">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="interactive focus-ring nav-link transition hover:opacity-60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="interactive focus-ring group hidden items-center gap-3 text-[11px] uppercase tracking-[.17em] md:inline-flex"
          >
            <span>Enquire</span>
            <span className="grid h-8 w-8 place-items-center rounded-full border border-current transition group-hover:bg-current">
              <svg
                className="h-3.5 w-3.5 transition group-hover:text-ink"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeWidth="1.5" />
              </svg>
            </span>
          </a>

          <SheetTrigger
            className="interactive focus-ring flex h-10 w-10 flex-col items-end justify-center gap-1.5 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="menu-line h-px w-7 bg-current transition"></span>
            <span className="menu-line h-px w-5 bg-current transition"></span>
          </SheetTrigger>
        </Container>
      </header>

      <MobileMenu />
    </Sheet>
  );
}