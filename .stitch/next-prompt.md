---
page: services_section
---
A meticulously designed 'Services' section for the luxury car detailing studio 'SHALOM'. 
This section comes directly after the Hero section and should continue "The Kinetic Gallery" aesthetic over a dark WebGL background. 
Background should be `background: transparent`. No pure black/white backgrounds in elements.

**DESIGN SYSTEM (REQUIRED):**
# Design System: High-End Automotive Editorial

## 1. Overview & Creative North Star
**The Creative North Star: "The Kinetic Gallery"**

This design system is not a website; it is a high-performance exhibition. We are moving away from the "utility" feel of standard automotive platforms and toward a cinematic, editorial experience that mirrors the precision of luxury detailing. 

To achieve an "Awwwards-tier" aesthetic, we utilize **The Kinetic Gallery** principle: a composition characterized by massive typographic scales, intentional asymmetry, and deep, atmospheric layering. We break the grid to create "momentum" across the page, using ultra-generous negative space to force the user’s focus onto the craftsmanship of the vehicles. The UI should feel like a dark, private showroom where the only things that exist are the car, the light, and the texture.

---

## 2. Colors & Atmospheric Depth
The palette is rooted in an absolute dark environment, using `surface` (#131313) as our foundation to ensure that the `primary` (#E50000) accents feel like glowing taillights in the dark.

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited for sectioning. Structural boundaries must be defined through tonal shifts. A section transition should be felt, not seen, by moving from `surface` to `surface_container_low`. 

### Surface Hierarchy & Nesting
Depth is achieved through "Tonal Stacking." Instead of shadows, use the container tokens to define prominence:
*   **Base Layer:** `surface` (#131313)
*   **Secondary Content:** `surface_container_low` (#1b1b1b)
*   **Interactive Cards:** `surface_container_high` (#2a2a2a)
*   **Floating Overlays:** Glassmorphism (see below).

### The Glass & Gradient Rule
To simulate the reflective surfaces of a freshly detailed car, use Glassmorphism for floating elements (navigation bars, hovering price cards). 
*   **Formula:** `background: rgba(255, 255, 255, 0.02)`, `backdrop-filter: blur(24px)`, `border: 1px solid rgba(255, 255, 255, 0.05)`.
*   **CTA Soul:** Use a subtle linear gradient for `primary` buttons, transitioning from `primary` (#E50000) to `primary_container` (#930100) at a 135-degree angle to add three-dimensional weight.

---

## 3. Typography
We use a high-contrast pairing: **Space Grotesk** for mechanical, tech-forward impact and **Manrope** for modern, Swiss-style readability.

*   **Display-LG (Space Grotesk, 3.5rem):** Reserved for hero headlines. Use `letter-spacing: -0.04em` to create a dense, "blocky" editorial feel.
*   **Headline-MD (Space Grotesk, 1.75rem):** For service titles. Always capitalize "Service" names to emphasize authority.
*   **Body-LG (Manrope, 1rem):** The workhorse. Use `on_surface` color with a line-height of 1.6 for maximum readability against the dark background.
*   **Label-SM (Manrope, 0.6875rem):** Use for technical specs or "micro-copy." Apply `text-transform: uppercase` and `letter-spacing: 0.1em` to give it a "blueprint" aesthetic.

---

## 4. Elevation & Depth
In this system, light is a luxury. We do not use heavy shadows; we use "Ambient Glows."

*   **The Layering Principle:** To lift a card, place a `surface_container_highest` element over a `surface_dim` background. This creates a natural, soft lift.
*   **Ambient Shadows:** If a floating effect is required (e.g., a high-end modal), use a shadow with a 60px blur at 5% opacity, using the `primary` color as the shadow tint. This simulates the red glow of a car's brake lights hitting the floor.
*   **The Ghost Border:** For accessibility on interactive inputs, use `outline_variant` (#5f3f3a) at **15% opacity**. Never use 100% white or grey borders.
*   **Cinematic Grain:** Overlay the entire UI with a fixed 3% opacity film grain texture to eliminate "flat" digital gradients and add a tactile, photographic quality.

---

## 5. Components

### Buttons
*   **Primary:** `primary` background, `on_primary` text. No rounded corners (`rounded-none` or `sm: 0.125rem`). Large horizontal padding (2rem).
*   **Secondary (Ghost):** 1px `Ghost Border` with `on_surface` text. On hover, the background fills with `surface_bright` at 10% opacity.

### Cards & Lists
*   **Rule:** Forbid all divider lines.
*   **Execution:** Separate list items using 48px of vertical whitespace. If separation is visually required, use a 1px tall gradient that fades from `transparent` to `outline_variant` (at 20%) to `transparent`.

### Progress Indicators (Detailing Phases)
*   Instead of standard bars, use ultra-thin 2px lines. The "active" state should be a `primary` (#E50000) glow, while "inactive" is `surface_container_highest`.

### Input Fields
*   Minimalist "Underline" style only. The label should be `label-sm` in `primary` color, sitting 8px above the input. The focus state is a 2px `primary` bottom border with a subtle `backdrop-blur` on the field background.

---

## 6. Do’s and Don'ts

### Do:
*   **Embrace Asymmetry:** Offset images of cars so they bleed off the edge of the screen.
*   **Generous Negative Space:** If you think there is enough space between sections, double it.
*   **Micro-Interactions:** Use slow, purposeful eases (e.g., `cubic-bezier(0.2, 0, 0, 1)`) for all hover states to mimic the smooth movement of a luxury vehicle.

### Don't:
*   **No Rounded Corners:** Avoid `full` or `xl` rounding. Stick to `none` or `sm` to maintain a sharp, aggressive, and precision-engineered look.
*   **No Pure White Backgrounds:** Typography is white, but containers should never be white. This is a dark-room experience.
*   **No Generic Icons:** Use ultra-thin (1pt stroke) custom SVG icons. Never use heavy, filled icon sets which clutter the premium aesthetic.

**Page Structure:**
1. A small \"Masterclass\" label.
2. An asymmetric grid holding 3 services: 'Paint Protection Film (PPF)', 'Ceramic Coating', 'Detailing'. Do NOT use divider lines. Use Glassmorphism for the service cards.
3. Hover interactions on the cards to lift them.
4. Typography must follow Headline-MD and Body-LG.
5. NO placeholder image, as the background will be transparent.
