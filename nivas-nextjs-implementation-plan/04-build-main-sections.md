# Step 04 — Build the Main Editorial Sections

## Objective

Port the primary static layouts before adding animation. At the end of this step the page should look close to the source with JavaScript disabled.

## 1. Hero (`HeroSection`)

Preserve:

- `min-h-[100svh]`.
- dark ink base.
- full-bleed architectural image.
- initial image scale around 1.08 for the intro animation.
- two gradient overlays.
- kicker: `Contemporary residences in Dhaka`.
- two-line oversized display heading: `Spaces that` / italic `hold life.`.
- bottom bordered grid with supporting paragraph and `Explore residences` CTA.
- vertical right-side statement on large screens only.

Add data hooks for hero animation rather than inline style mutations.

Suggested hooks:

```text
data-hero-image
data-hero-kicker
data-hero-line
data-hero-bottom
```

## 2. Philosophy / intro (`PhilosophySection`)

Preserve the cream background and faint grid texture.

Content hierarchy:

- eyebrow: `Our philosophy`.
- display statement: `Not simply buildings. A way of living.`.
- two supporting paragraphs.
- 4-stat bordered strip.

Stats:

```text
28+ — Years of craft
43  — Completed projects
12  — Current residences
97% — On-time handover
```

Render stats from `brand-content.ts`. Each numeric span gets `data-counter-value`.

## 3. Feature image (`FeatureImageSection`)

A simple full-bleed parallax image break:

- ~65vh mobile, ~90vh desktop.
- image intentionally taller than container (`120%`) and offset upward.
- bottom caption border.
- right caption hidden on smaller screens.

Add `data-story-image` for parallax.

## 4. Manifesto (`ManifestoSection`)

Preserve the split editorial composition:

- warm grey/beige background.
- quote block on left.
- full-height residence façade image on right for large screens only.
- quote: `The best spaces do not ask for attention. They give it back to you.` with italic olive emphasis.
- attribution line: `NIVAS Design Office`.

Add `data-manifesto-image` for the reveal scale animation.

## 5. Contact (`ContactSection` + `ContactForm`)

Build the section structure now; detailed shadcn styling comes in Step 07.

Preserve:

- olive background / cream foreground.
- eyebrow: `Begin a conversation`.
- huge `Find your place.` heading.
- explanatory paragraph.
- right-column form at desktop sizes.

Keep the form behavior intentionally local at first. No backend is present in the source.

## 6. Footer (`SiteFooter`)

Port as semantic footer markup:

- NIVAS brand and supporting statement.
- Explore links.
- Visit block.
- Connect links.
- lower copyright/privacy/terms row.

Flag source placeholder content for later verification rather than silently inventing production content:

- placeholder street/address content.
- `hello@nivas.example`.
- social links currently `#`.
- Privacy and Terms currently `#`.

## 7. Semantic HTML pass

Use:

- one `<main>`.
- one `<h1>` in hero.
- `<section>` with headings for major blocks.
- `<blockquote>` for manifesto.
- `<article>` for project and journal items.
- `<footer>` for footer.

Do not make clickable-looking text a `<div>`.

## Done when

- [ ] Hero is visually recognizable without motion.
- [ ] Philosophy/stats and feature image match spacing and proportions.
- [ ] Manifesto layout switches correctly at the large breakpoint.
- [ ] Contact and footer content are fully represented.
- [ ] Source placeholders are preserved but clearly tracked for Step 08 cleanup.
