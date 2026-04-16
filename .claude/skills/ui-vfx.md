# SKILL: ui-vfx

## Description
This skill dictates the integration of premium React Bits VFX components (`Aurora`, `SoftAurora`, `BorderGlow`) into the Shalom Car Detailing platform. The goal is "Brutalist-Luxury"—effects must be dark, cinematic, and highly performant.

## 1. Component Roles & Constraints
* **`Aurora` (High Energy):** * **Use Case:** Only in the primary Hero Section or full-screen loading fallbacks. 
  * **Constraint:** Never place heavy reading text directly over it.

* **`SoftAurora` (Low Energy):**
  * **Use Case:** Backgrounds for modals, Lead Generation forms, and detailed Pricing Tables.
  * **Constraint:** Must act like slow-moving smoke. Keep `speed` below 0.3.

* **`BorderGlow` (Targeted Highlighting):**
  * **Use Case:** Wrapping primary CTAs ("Book Now") or Premium Service Cards (e.g., "Ceramic Coating Package").
  * **Constraint:** Do not overuse. A page should have maximum 2 glowing elements to maintain visual importance.

## 2. Color Synchronization (Strict)
Do not use default pastel colors. Map these to the `DESIGN.md` tokens:
* **Aurora / SoftAurora:** Use `colorStops={["#000000", "#120202", "#0A0A0C"]}` (Deep obsidian to faint crimson).
* **BorderGlow:** Use exactly `#E50914` (Racing Red) for the glow color.

## 3. Performance & WebGL Safety
* **Canvas Isolation:** The `<Aurora>` and `<SoftAurora>` components use their own WebGL context (`ogl`). Ensure they are placed on a standard DOM layer (`z-index: 0`) heavily separated from the React Three Fiber `<Canvas>` (`z-index: -1`) to prevent context crashing.
* **Conditional Rendering:** If the 3D car is actively being rotated or configured, pause or unmount the Aurora effects to ensure 60FPS on the 3D model.