# Step 08 — Images, Metadata, Performance, and Final QA

## Objective

Replace prototype-only browser/CDN assumptions with production-appropriate Next.js behavior and verify parity across viewport sizes.

## 1. Metadata

Move the source document metadata into `app/layout.tsx` or page metadata:

```text
Title: NIVAS — Contemporary Living, Dhaka
Description: NIVAS — contemporary residences shaped for Dhaka.
```

Add canonical/Open Graph/Twitter fields later only when real production URL and assets are known.

## 2. Images

The source uses remote Unsplash URLs for hero, feature, project, manifesto, and journal images.

Two acceptable implementation paths:

### Preferred for a production brand site

Download approved final assets into `public/images/` and use local `next/image` imports/paths.

Benefits:

- predictable crop and quality.
- no third-party dependency.
- easier asset governance.
- automatic intrinsic sizing where static imports are used.

### Temporary parity path

Keep Unsplash remote URLs and configure `images.remotePatterns` in `next.config.*`, then use `next/image` with `fill` for full-bleed compositions.

For every `fill` image:

- parent must be positioned (`relative`).
- preserve source `object-cover`.
- provide an accurate `sizes` attribute.
- only mark the hero image `priority`/high priority if it is the LCP candidate.

## 3. Preserve unusual image geometry

Do not normalize the source crops into standard cards.

Key ratios/behavior:

- hero: viewport fill.
- feature image: image 120% container height for parallax.
- project media: 4:3 mobile, ~16:10 tablet/desktop.
- journal media: 4:3.
- manifesto image: full-height right split on large screens.

## 4. Replace prototype dependencies

The final Next.js app should not contain:

- Tailwind Play CDN script.
- Google Fonts `<link>` tags.
- GSAP CDN `<script>` tags.
- large inline `<script>` block.
- inline `onsubmit` handler.

All dependencies should come from the project package manager and imports.

## 5. Content cleanup checklist

Before launch, verify every placeholder inherited from the prototype:

- project `View residence` targets.
- `View all projects` target.
- journal `View all stories` target.
- social URLs.
- Privacy/Terms URLs.
- email domain (`hello@nivas.example` is a placeholder).
- physical address text.
- the source footer line `Dhaka 121@` appears malformed and should be confirmed with the client.
- year/copyright wording.
- whether `Since 1998` and `28+ Years of craft` are intended to remain dynamically consistent over time.

Do not silently invent missing business details.

## 6. Responsive QA matrix

Test at minimum:

```text
375 × 812   mobile
430 × 932   large mobile
768 × 1024  tablet portrait
1024 × 768  tablet landscape
1440 × 900  desktop
1920 × 1080 large desktop
```

At each size verify:

- no horizontal overflow.
- headline wrapping resembles the prototype.
- nav text remains legible over hero.
- project order alternates only where intended.
- service descriptions appear at the expected breakpoint.
- manifesto image hides on smaller layouts.
- footer columns wrap cleanly.

## 7. Interaction QA

Test:

- preloader once per page load.
- hero reveal.
- scrolled nav state.
- every anchor target.
- mobile Sheet open/close/Escape/link click.
- custom cursor on mouse, absent on touch.
- project hover zoom/arrow motion.
- marquee continuity.
- counters.
- scroll reveals.
- magnetic buttons.
- form control focus/selection.

## 8. Reduced-motion QA

In OS/browser dev tools enable `prefers-reduced-motion: reduce` and verify:

- preloader does not delay access.
- content is immediately visible.
- parallax is disabled.
- marquee is stopped or effectively non-animated.
- no element remains stuck at opacity 0 or translated off-screen.

## 9. Performance pass

Prioritize:

- LCP hero image sizing/priority.
- optimized fonts via `next/font`.
- image `sizes` attributes.
- no unnecessary Client Components.
- no duplicated GSAP bundles/import paths.
- animation only on transform/opacity/clip-path where possible.
- remove `will-change` when not useful long-term; apply carefully to frequently transformed hero/project/story media.

## 10. Final acceptance criteria

- [ ] Page is still a single `/` route.
- [ ] Visual hierarchy closely matches the supplied HTML.
- [ ] All original major animations have equivalents.
- [ ] shadcn is used wherever a suitable interactive/accessibility primitive exists, without imposing generic component styling.
- [ ] `app/page.tsx` and `BrandShowcase` remain Server Components with no `"use client"`.
- [ ] Client Components are pushed down to the smallest necessary boundaries.
- [ ] React components/functions are generally <= 50–60 lines; larger units have a clear reason or are split into focused helpers.
- [ ] No CDN scripts or external font tags remain.
- [ ] No dead `href="#"` links remain in production.
- [ ] All content placeholders have been confirmed/replaced.
- [ ] Keyboard, touch, mouse, and reduced-motion modes work.
- [ ] Lighthouse/field performance is acceptable for the final asset sizes.
- [ ] No console warnings, hydration errors, or GSAP duplicate-trigger issues remain.
