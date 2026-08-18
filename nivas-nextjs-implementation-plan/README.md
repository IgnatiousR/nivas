# NIVAS Brand Showcase → Next.js Implementation Plan

This folder breaks the supplied single-file HTML prototype into implementation steps for a **single-page Next.js App Router site** using **TypeScript, Tailwind CSS v4, shadcn/ui, and GSAP**.

The goal is **visual and interaction parity first**, not a redesign. Keep the editorial/luxury character of the source: oversized Playfair Display typography, DM Sans/Manrope support type, cream/ink/olive/sage/gold palette, large architectural imagery, restrained borders, and cinematic motion.

## Assumptions

You will manually scaffold the project before following these steps. The plan assumes:

- Next.js App Router + TypeScript.
- Tailwind CSS is already working.
- `@/*` import alias is available.
- shadcn/ui has been initialized.
- The page remains one route: `/`.
- Initial content is local/static data, not a CMS.
- The existing Unsplash imagery is acceptable during implementation; production assets can replace it later.
- `app/page.tsx` and the top-level `BrandShowcase` composition remain Server Components. Never add `"use client"` to either.
- Add `"use client"` only to leaf/interactivity components that actually require browser APIs, state, event handlers, or GSAP lifecycle code.
- Prefer shadcn/ui primitives whenever an appropriate accessible primitive exists; restyle them with NIVAS Tailwind tokens instead of rebuilding equivalent controls from scratch.
- Keep functions and React components around **50–60 lines maximum where practical**. If a function grows beyond that, split markup, hooks, data transforms, or interaction logic into focused helpers/subcomponents.

## Recommended install after scaffold

```bash
pnpm add gsap
pnpm dlx shadcn@latest add button input label select sheet separator
```

If your shadcn preset already includes any of these, do not add duplicates.

## Implementation order

1. `01-project-baseline.md` — establish folders, dependencies, data model, and client/server boundaries.
2. `02-design-system-and-global-css.md` — migrate fonts, color tokens, global CSS, texture, grid, cursor rules, and shared layout primitives.
3. `03-shell-navigation-and-global-effects.md` — build preloader, responsive navbar, mobile menu, cursor, and shared page shell.
4. `04-build-main-sections.md` — port hero, philosophy/stats, feature image, manifesto, contact, and footer.
5. `05-data-driven-collections.md` — port projects, marquee, services, and journal from typed data arrays.
6. `06-motion-and-interactions.md` — reproduce GSAP timelines, ScrollTrigger reveals/parallax/counters, magnetic buttons, and reduced-motion behavior.
7. `07-shadcn-form-and-accessibility.md` — style shadcn primitives to match the design and make navigation/form/menu behavior accessible.
8. `08-images-seo-performance-and-qa.md` — Next Image, metadata, responsive QA, performance, content cleanup, and final acceptance checks.

## Target structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  brand/
    brand-showcase.tsx
    navbar.tsx
    mobile-menu.tsx
    preloader.tsx
    custom-cursor.tsx
    hero-section.tsx
    philosophy-section.tsx
    feature-image-section.tsx
    projects-section.tsx
    marquee-strip.tsx
    services-section.tsx
    manifesto-section.tsx
    journal-section.tsx
    contact-section.tsx
    site-footer.tsx
  motion/
    brand-motion-controller.tsx
    magnetic.tsx
  ui/
    ...shadcn generated files
data/
  brand-content.ts
lib/
  utils.ts
public/
  images/              # optional once production assets replace Unsplash
```

`app/page.tsx` must stay a **Server Component** and remain thin. It renders `BrandShowcase`, which should also remain a Server Component and compose the page sections in the same order as the HTML prototype. Never add `"use client"` to either file. Push client boundaries down to the smallest components that need navigation/menu state, form behavior, cursor logic, magnetic behavior, browser APIs, or GSAP orchestration.

## Code-size rule

Treat **50–60 lines per function/component** as the normal ceiling, not a target to pad toward. Split larger units into named subcomponents, hooks, and helpers while keeping related rendering logic easy to follow. A component may exceed this slightly when splitting would make the code less clear, but large 100+ line React functions should not be part of this implementation.

Examples:

- `BrandShowcase` only composes sections.
- `Navbar` delegates its mobile panel to `MobileMenu`.
- `ContactSection` keeps static section layout server-side and delegates interactive form behavior to `ContactForm`.
- `BrandMotionController` delegates animation registration into small setup functions such as `setupHeroMotion`, `setupScrollReveals`, and `setupMagneticElements`.

## Key implementation principle

Do **not** convert the page into a generic shadcn dashboard/card aesthetic. shadcn is the accessible primitive layer. Tailwind classes and the NIVAS tokens should own the visual language.
