# Product Requirements Document (PRD)

**Project:** Shalom Car Detailing Next-Generation 3D Experience  
**Status:** Initial Draft  
**Target Tier:** Awwwards Honorable Mention / Site of the Day  

---

## 1. Executive Summary
The objective is to transform Shalom Car Detailing’s digital presence from a standard 2D brochure into an immersive, high-performance 3D configurator. Located in Vashi, Navi Mumbai, the shop specializes in premium automotive protection (PPF, Ceramic, Graphene). This platform will allow prospective clients to visualize these "invisible" services on a high-fidelity 3D digital twin of a vehicle, driving higher conversion rates for high-ticket service packages.

## 2. Business Objectives
* **Conversion Optimization:** Increase leads for PPF and Ceramic Coating by 25% through interactive visual proof.
* **Brand Authority:** Establish Shalom as the most tech-forward detailing studio in the region.
* **User Engagement:** Increase average session duration to >3 minutes via 3D exploration.

## 3. User Personas
* **The Luxury Purist:** Owners of high-end performance cars seeking flawless aesthetics and maximum protection. They require high-fidelity visual proof of "glass-like" finishes.
* **The Protection Seeker:** Daily drivers looking for durability (PPF). They value technical data and clear "before-and-after" comparisons.
* **The Customizer:** Enthusiasts looking for aesthetic changes (Wraps, Interior 7D Mats). They use the 3D configurator to "try before they buy."

## 4. Functional Requirements (Core Features)

### FR-01: 3D Hero Configurator
* **Requirement:** A full-screen R3F canvas loading the provided `.glb` automotive model from `/public/models`.
* **Interaction:** Users can orbit, zoom, and pan around the vehicle with mathematically dampened constraints to prevent clipping.

### FR-02: Real-time Material Swapping
* **Requirement:** A UI menu to toggle between different protection states:
    * **Gloss PPF:** High-reflectivity, clear coat simulation.
    * **Matte/Satin Wrap:** Low-roughness, high-diffusion material.
    * **Ceramic Coating:** "Wet-look" shader with enhanced environment reflections.
* **Logic:** Updates the `MeshStandardMaterial` properties across the `Car_Paint` node in real-time via Zustand state.

### FR-03: Cinematic Hotspots & Camera Transitions
* **Requirement:** Specific click-zones or menu items that trigger eased camera transitions to localized areas (e.g., Interior for 7D Mats, Front-end for PPF).
* **Tech:** Use `maath/easing` for non-linear movement.

### FR-04: Dynamic Pricing & Service Table
* **Requirement:** A glassmorphism overlay that displays a pricing table. 
* **Logic:** The table must update its pricing data based on the "Active Service" selected in the 3D scene and the vehicle size category.

### FR-05: Lead Generation System
* **Requirement:** A streamlined contact form with service pre-selection based on the user's final 3D configuration.

## 5. User Experience (UX) & Design Requirements
* **Aesthetic:** "Brutalist-Luxury." Heavy blacks, sharp edges, and dramatic lighting.
* **Color Palette:**
    * **Background:** Absolute Black (`#000000`).
    * **Accent:** Racing Red (`#E50914`).
    * **Text:** Pure White (`#FFFFFF`).
* **Depth:** Use background blurs (`backdrop-filter`) for UI panels to create a sense of floating layers over the 3D canvas.
* **Feedback:** Every interaction (button hover, material change) must have a micro-interaction (haptic-like visual scaling or color shifts).

## 6. Performance & Technical Constraints
* **Next.js App Router:** All 3D logic must be inside `"use client"` components.
* **Loading Strategy:** Use React `Suspense` with a custom red-wireframe fallback to prevent layout shifts.
* **Asset Pipeline:** Models must be pre-optimized. Textures should be WebP or compressed HDRI maps.
* **SEO:** The initial HTML payload must contain all business metadata and service keywords before the JS/WebGL initializes.

## 7. Acceptance Criteria
1. The 3D model loads and is interactable without console errors.
2. Swapping from "Gloss" to "Matte" happens in <100ms.
3. The pricing table correctly reflects the state of the 3D configurator.
4. The website scores >90 on Lighthouse Desktop for Performance and SEO.
5. All camera transitions follow a non-linear, cinematic easing curve.