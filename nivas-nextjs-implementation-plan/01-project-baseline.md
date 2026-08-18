# Step 01 — Project Baseline and Component Architecture

## Objective

Prepare the manually scaffolded Next.js project for a faithful, maintainable port of the single-file prototype without changing its information architecture.

## 1. Confirm baseline

Before implementing UI, confirm the scaffold has:

- App Router (`app/`).
- TypeScript.
- Tailwind CSS.
- `@/*` path alias.
- shadcn/ui initialized.
- ESLint working.

Install GSAP and the shadcn primitives listed in `README.md`.

## 2. Keep one public route

The showcase is a single page. Use only:

```text
app/layout.tsx
app/page.tsx
```

Do not introduce separate routes for projects, journal, services, or contact during this conversion. Existing `href="#..."` navigation stays anchor-based.

## 3. Preserve source section order

The source HTML uses this sequence:

1. Preloader
2. Fixed navbar
3. Full-screen mobile menu
4. Hero (`#home`)
5. Philosophy / introduction (`#philosophy`)
6. Feature image
7. Projects (`#projects`)
8. Marquee
9. Services (`#services`)
10. Manifesto
11. Journal (`#journal`)
12. Contact (`#contact`)
13. Footer

Build components with the same names/order. This makes visual comparison against the prototype straightforward.

## 4. Define client/server boundaries early

### Keep as Server Components by default

- `HeroSection`
- `PhilosophySection`
- `FeatureImageSection`
- `ProjectsSection`
- `MarqueeStrip`
- `ServicesSection`
- `ManifestoSection`
- `JournalSection`
- `SiteFooter`

These components can render normal HTML plus Tailwind classes and animation target attributes/classes.

### Use Client Components only where needed

- `Navbar` / mobile menu state.
- `CustomCursor`.
- `BrandMotionController` for GSAP + ScrollTrigger.
- `Magnetic` wrapper if implemented with React pointer handlers.
- `ContactSection` or `ContactForm` if the prototype remains client-only with no submission backend.

Avoid putting `"use client"` on the entire page just because GSAP exists. **`app/page.tsx` and `BrandShowcase` must remain Server Components.** Client boundaries belong only on the smallest components that genuinely need browser-only behavior.


## 5. Enforce component/function size

Keep each React component, hook, event handler, animation setup function, or utility at roughly **50–60 lines maximum where practical**. Do not solve the port with a few very large files/functions.

When a unit approaches that size:

- extract repeated or self-contained markup into a subcomponent;
- extract browser behavior into a focused Client Component or hook;
- extract GSAP groups into named setup helpers;
- move static arrays/content into `data/brand-content.ts`;
- keep page-level components focused on composition rather than implementation details.

Do not split purely to satisfy a line count if the result is harder to understand; the goal is small, focused units with a strong default ceiling.

## 6. Use shadcn primitives when possible

Before hand-building an interactive control, check whether shadcn/ui already provides the accessible primitive. Prefer shadcn for items such as:

- `Button` for actionable CTAs/buttons;
- `Sheet` for the mobile navigation panel;
- `Input`, `Label`, and `Select` for the enquiry form;
- `Separator` where a semantic reusable divider is useful.

Do **not** force shadcn `Card` or other generic containers onto editorial sections that are better represented by semantic HTML. shadcn should supply behavior/accessibility; Tailwind and NIVAS tokens control appearance.

## 7. Extract static content into typed data

Create `data/brand-content.ts`.

Suggested types:

```ts
export type Project = {
  id: string
  index: string
  name: string
  location: string
  description: string
  image: string
  imageAlt: string
  imageSide: "left" | "right"
}

export type Service = {
  index: string
  title: string
  description: string
}

export type JournalPost = {
  category: string
  readTime: string
  title: string
  image: string
  imageAlt: string
}

export type Stat = {
  value: number
  suffix?: string
  label: string
}
```

Populate these with the source values before building collection markup. The source currently has 3 featured projects, 4 services, 3 journal cards, and 4 stats.

## 8. Establish selector strategy for animation

The original script targets CSS classes such as `.hero-line`, `.reveal-text`, `.reveal-label`, `.reveal-up`, `.counter`, `.clip-project`, `.service-row`, and `.journal-card`.

For the port, either:

- keep these classes as intentional GSAP hooks, **or**
- replace them with `data-animate="..."` attributes.

Recommended: use data attributes so animation hooks are distinct from styling.

Example:

```tsx
<h2 data-animate="reveal-text" className="...">...</h2>
```

## 9. Page composition

`app/page.tsx` should be minimal:

```tsx
import { BrandShowcase } from "@/components/brand/brand-showcase"

export default function Page() {
  return <BrandShowcase />
}
```

`BrandShowcase` composes the full page and mounts `BrandMotionController` once. `BrandShowcase` itself stays server-side; rendering a Client Component child does not require the parent to become a Client Component.

## Done when

- [ ] The project builds before any detailed styling starts.
- [ ] Every source section has a planned React component.
- [ ] Static collections live in typed data.
- [ ] `app/page.tsx` and `BrandShowcase` contain no `"use client"`.
- [ ] Client components are limited to the smallest interaction/animation boundaries.
- [ ] shadcn primitives are used for suitable interactive/accessibility controls instead of unnecessary custom equivalents.
- [ ] Functions/components are normally kept within the ~50–60 line ceiling.
- [ ] `/` is the only route required for parity.
