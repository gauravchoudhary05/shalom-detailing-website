# CONTEXT.md - ARCHITECTURAL LOCK

## Tech Stack
* **Framework:** Next.js 15 (App Router)
* **3D Engine:** React Three Fiber (R3F)
* **State:** Zustand (`useConfiguratorStore`)
* **Animation:** `maath/easing` + R3F `useFrame`

## Decisions
1.  **Fixed 3D Background:** The `<Canvas />` is fixed at `z-index: -1`.
2.  **Shared State:** Zustand bridges the gap between the 3D Car model and the HTML Pricing Table.
3.  **Asset Loading:** Models are served as static files; no dynamic external URL fetching.
## Layout Structure (Crucial)
- **Scrollable Page:** The application is a standard scrolling website, NOT a locked full-screen app.
- **Hero Section:** The 3D Configurator lives inside a `100vh` hero section at the top of the page.
- **Canvas Interaction:** R3F `OrbitControls` MUST have `enableZoom={false}`. The user's scroll wheel must scroll the webpage to reveal the services and before/after videos below the hero, not zoom the camera.