# Step 05 — Projects, Marquee, Services, and Journal

## Objective

Build repeated sections from typed arrays so the page remains easy to edit without losing the handcrafted layout.

## 1. Projects (`ProjectsSection`)

Section presentation:

- ink background / cream type.
- label: `Selected residences`.
- large heading: `Made for belonging.` with sage italic word.
- intro copy at right on desktop.

### Source project data

1. **Aaranya** — Gulshan 2
2. **Still House** — Banani
3. **The Courtyard** — Dhanmondi

Keep each source description and image alt text in the data file.

### Alternating layout

Do not create separate bespoke markup for each project. Store `imageSide` and derive ordering:

```tsx
const imageFirst = project.imageSide === "left"
```

The source alternates image/text positions on large screens while keeping the image first on mobile.

### Project image behavior

Each image wrapper gets:

```text
data-clip-project
```

The image keeps a long hover scale transition. The CTA arrow moves slightly up/right on group hover.

### Bottom project strip

Preserve:

- `12 current residences`.
- `View all projects` CTA.

These links can remain non-navigating placeholders during parity work, but do **not** keep `href="#"` in the final production pass. Prefer a disabled/non-link treatment until real URLs exist.

## 2. Marquee (`MarqueeStrip`)

Words:

```text
Light ✦ Material ✦ Landscape ✦ Longevity ✦ Community ✦
```

Implementation:

- gold background.
- ink text.
- Playfair italic.
- duplicate the word group exactly twice.
- wrapper overflow hidden.
- track width max-content.
- 28s linear infinite animation.
- pause or effectively disable motion under reduced-motion preference.

`aria-hidden="true"` can be used for the duplicate copy so screen readers do not read the words twice.

## 3. Services (`ServicesSection`)

Render these 4 items from data:

1. Residential Development
2. Landowner Partnership
3. Interior & Styling
4. Property Care

Desktop row columns:

```text
index | title | description | arrow
```

Mobile row columns:

```text
index | title | arrow
```

Descriptions are intentionally hidden on mobile in the source. Keep that behavior for visual parity; revisit only if product requirements change.

Each row gets `data-service-row` for staggered child animation.

## 4. Journal (`JournalSection`)

Render three `JournalPost` items:

- `Why natural materials age better.`
- `Building well in a changing Dhaka.`
- `The architecture of everyday calm.`

Keep the source category/read-time metadata and image alt text.

Each article gets `data-journal-card` and the image keeps the subtle group-hover scale.

## 5. Do not overuse shadcn `Card`

These sections are editorial compositions, not card UI. Avoid wrapping projects, services, or journal items in shadcn `Card` because its default borders/radius/padding would change the design language.

Use plain semantic HTML and Tailwind. Reserve shadcn for primitives where it improves behavior/accessibility.

## 6. Data ownership rule

Keep content in `data/brand-content.ts`; keep layout decisions in components.

Good:

```ts
{ name: "Still House", location: "Banani", imageSide: "right" }
```

Avoid storing Tailwind class strings in content data unless a layout variant truly needs them.

## Done when

- [ ] Projects render from one reusable article pattern and alternate correctly.
- [ ] Services render from data and preserve desktop/mobile differences.
- [ ] Journal cards render from data with correct metadata.
- [ ] Marquee loops seamlessly without duplicate screen-reader output.
- [ ] No generic shadcn card styling has diluted the brand design.
