# Step 07 — shadcn Form Primitives and Accessibility

## Objective

Use shadcn/ui **whenever an appropriate primitive exists** for interactive/accessibility-sensitive UI, while styling those primitives so the page still looks like the source prototype. Do not recreate equivalent inputs, buttons, dialogs/sheets, or selects from scratch without a concrete reason.

## 1. Contact form primitives

Use:

- `Label`
- `Input`
- `Select`
- `Button`

The source form has three controls:

1. Your name
2. Email / phone
3. I'm interested in

Interest options:

- A residence
- Landowner partnership
- Interior design
- General enquiry

Keep the static `ContactSection` wrapper as a Server Component. Extract only the actual form into a small `ContactForm` Client Component if client-side state/event handling is required. Keep both components around the 50–60 line ceiling by extracting field definitions or reusable field markup when necessary.

## 2. Override shadcn's default visual language

The source uses underline-only transparent fields. Style the primitives accordingly.

### Inputs

Target appearance:

```text
transparent background
no outer rounded box
no box shadow
border only on bottom
cream/white text
subtle placeholder
stronger bottom border on focus
```

### Select

Style `SelectTrigger` to visually match the inputs. Ensure the dropdown content remains readable and usable; it does not need to look identical to native `<option>` styling from the prototype.

### Button

Use shadcn `Button` but style as the source pill CTA:

- transparent background initially.
- cream border.
- uppercase 10px-ish label with tracking.
- rounded-full.
- hover → cream background + ink text.
- arrow-up-right icon.
- mark it `data-magnetic`.

## 3. Submission behavior

The source prevents submit and has no backend. For parity, implement one of these explicitly:

### Phase 1 parity

- prevent default.
- validate basic required fields client-side.
- show a small inline `Demo form — no submission endpoint configured` state or leave button behavior inert in development.

### Later production integration

Replace with a Server Action/API endpoint/CRM integration when requirements exist.

Do not pretend submissions succeed if nothing receives them.

## 4. Mobile menu accessibility

Using shadcn `Sheet` should provide:

- focus trapping.
- Escape-to-close.
- dialog semantics.
- focus restoration to trigger.

Verify these behaviors after custom styling.

## 5. Keyboard and focus states

The source intentionally hides the native pointer cursor on fine-pointer devices, so keyboard focus visibility is especially important.

Add visible `focus-visible` styles for:

- nav links.
- menu trigger.
- CTAs.
- project/journal links once real URLs exist.
- form controls.
- footer links.

Never rely on hover alone.

## 6. Decorative versus meaningful imagery

All source architectural images currently have meaningful alt descriptions. Keep those alt texts if the images remain content-bearing.

For purely decorative future images, use empty alt text instead of redundant descriptions.

## 7. Motion/accessibility checks

Verify:

- reduced-motion users do not get parallax or long intro transitions.
- the marquee is not announced twice.
- custom cursor never blocks clicks (`pointer-events: none`).
- mobile Sheet does not leave page scroll locked after closing.
- counters expose readable final values.

## 8. Form labels and names

Add explicit `id`, `name`, and label association. Suggested names:

```text
name
contact
interest
```

Avoid relying on placeholder text as the only label.

## Done when

- [ ] shadcn primitives are used for the form and mobile dialog behavior.
- [ ] The styled form still matches the source's minimal underline design.
- [ ] Keyboard navigation is clear and complete.
- [ ] Menu focus management works.
- [ ] Form behavior is truthful about whether a backend exists.
