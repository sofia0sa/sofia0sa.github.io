# Design System: High-End Editorial Gallery

## 1. Overview & Creative North Star
**Creative North Star: The Digital Curator**
This design system is not a framework for an interface; it is a framework for a gallery. It rejects the "app-like" density of modern SaaS in favor of an editorial, cinematic experience. By utilizing intentional asymmetry, extreme typographic scales, and an obsession with negative space, we transform a digital portfolio into a high-end physical exhibition. 

The system breaks the "template" look by treating the viewport as a single canvas. Elements are often "hung" in space—sometimes overlapping, sometimes isolated—to create a sense of rhythm and breathing room that feels expensive and bespoke.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a deep, atmospheric charcoal (`#131313`) and a pure, stark white (`#FFFFFF`). It relies on tonal depth rather than color to communicate hierarchy.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined solely through background color shifts or the "Ghost Border" fallback. 
- Use `surface-container-low` sections sitting atop a `surface` background to define areas of interest.
- Physical separation is achieved through the **Spacing Scale** (e.g., `24` / 8.5rem gaps), not lines.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, premium materials. 
- **Base Layer:** `surface` (#131313)
- **Primary Content Wells:** `surface-container-low` (#1C1B1B)
- **Interactive/Floating Elements:** `surface-container-high` (#2A2A2A) with Glassmorphism.

### The Glass & Gradient Rule
To move beyond a flat "Material" feel:
- **Floating Navigation:** Apply `surface-container-highest` with a 20px backdrop-blur and 80% opacity.
- **CTAs:** Use a subtle linear gradient from `primary` (#FFFFFF) to `primary-fixed-dim` (#C6C6C7) at a 45-degree angle to give buttons a "satin" finish rather than a flat plastic look.

---

## 3. Typography
The typographic soul of this system lies in the tension between the intellectual elegance of the **Newsreader** serif and the architectural precision of **Inter** (standing in for the modernist PP Neue Montreal style).

*   **Display & Headlines (Newsreader):** Used for large-scale storytelling. `display-lg` (3.5rem) should be used with tight letter-spacing (-0.02em) to create a "block" of text that feels like a masthead.
*   **Body & Labels (Inter):** Used for functional data. `body-md` (0.875rem) should be set with generous tracking (+0.03em) to ensure it feels light and airy against the heavy serif headlines.
*   **Hierarchy Note:** High-end design is defined by contrast. Pair a `display-lg` title with a `label-sm` caption nearby to create an intentional "big/small" dynamic.

---

## 4. Elevation & Depth
Traditional shadows are too "digital." We use **Tonal Layering** to create a naturalistic sense of height.

*   **The Layering Principle:** To lift a card, place a `surface-container-lowest` (#0E0E0E) element inside a `surface-container` (#20201F) section. The shift in value creates a "recessed" or "raised" effect without artificial drop shadows.
*   **Ambient Shadows:** If an element must float (e.g., a modal), use a shadow with a 60px blur and 4% opacity, tinted with the `on-surface` color. It should feel like an atmospheric occlusion, not a dark glow.
*   **The Ghost Border Fallback:** If accessibility requires a stroke, use `outline-variant` (#444748) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
- **Primary:** High-contrast. Background: `primary` (#FFFFFF); Text: `on-primary` (#2F3131). Shape: Sharp `0px` corners.
- **Secondary:** Ghost style. No background. `Ghost Border` (outline-variant at 20%) with `on-surface` text. 
- **Interaction:** On hover, the Primary button should shift to `primary-fixed-dim`, and the text should have a subtle Y-axis slide animation.

### Cards & Lists
- **The Forbid Rule:** No divider lines between list items. Use `spacing-8` (2.75rem) to separate items.
- **Visuals:** Project cards should be "Cinematic." Use a 16:9 or 21:9 aspect ratio. Images should use a `surface-container-highest` placeholder with a "shimmer" gradient during load.

### Input Fields
- **Styling:** Minimalist bottom-border only (using the `Ghost Border` rule). 
- **State:** When focused, the bottom border transitions from 20% opacity to 100% `primary` (#FFFFFF). Labels (`label-md`) stay small and static above the field; do not use floating label animations.

### Custom Component: The "Cinematic Scroller"
A full-width horizontal scroll section using `surface-container-lowest` background. Items are not snapped to a grid; they use the **Spacing Scale** to create asymmetrical gaps (e.g., Item 1 has `spacing-10` left, Item 2 has `spacing-20` left).

---

## 6. Do’s and Don’ts

### Do:
- **Embrace the Void:** Use `spacing-24` (8.5rem) between major sections. If it feels like "too much" space, add 20% more.
- **Asymmetric Balance:** Place a large image on the left and a small `label-sm` text block on the far right.
- **Micro-Animations:** Use a "Power4.out" easing for all transitions. Elements should feel like they have weight and are gliding on ice.

### Don’t:
- **Don't use Rounded Corners:** Every `borderRadius` token is `0px`. This maintains the architectural, gallery-grid feel.
- **Don't use Icons for Everything:** Use `label-sm` text (e.g., "VIEW") instead of a chevron or plus icon. Text is more elegant.
- **Don't use Pure Black:** Use `surface` (#131313) for backgrounds. Pure black (#000000) kills the "paper" texture and feels unrefined on OLED screens.

---

## 7. Spacing & Rhythm
This system uses a **non-linear spacing scale**. 
- Use small increments (`0.5` to `2`) for internal component padding.
- Use large increments (`12`, `16`, `20`, `24`) for layout margins. 
**Pro-Tip:** Never use two adjacent spacing values (e.g., don't put a `10` next to a `12`). Jump scales (e.g., `4` and `16`) to create a clear visual hierarchy.