1. System Architecture Overview
The Shalom Car Detailing platform is a hybrid application combining high-performance server-side logic with an immersive WebGL client-side experience. The architecture prioritizes spatial computing principles to deliver a cinematic automotive configurator.

Framework: Next.js 15+ (App Router).

Rendering Engine: React Three Fiber (R3F) – a declarative Three.js reconciler.

Utility Layer: @react-three/drei for shader abstractions and camera controls.

Autonomous Orchestration: Antigravity IDE utilizing the Ralph execution loop and GSD framework for spec-driven development.

2. 3D Asset Pipeline & Model Management
The rendering quality depends on the efficient loading and manipulation of .glb automotive assets.

2.1 Asset Transformation
All raw assets located in D:\Websites\Shalom\public\models must be processed via the gltfjsx compiler.

Command: npx gltfjsx public/models/car.glb --transform --types

Output: Functional React components that expose individual mesh nodes (e.g., Car_Paint, Glass_Windshield, Tires).

2.2 Material Handling & Instancing
To prevent reference mutation bugs when displaying multiple vehicle configurations:

Cloning: All materials retrieved from the useGLTF hook must be explicitly cloned:

<mesh geometry={nodes.Body.geometry} material={materials.Paint.clone()} />.

Shaders: Custom WebGL shaders will be used to simulate hydrophobic properties (ceramic coating) and self-healing textures (PPF) using the Bidirectional Reflectance Distribution Function (BRDF).

3. Global State & UI Synchronization
A centralized state management system is required to synchronize the 3D Canvas with the Document Object Model (DOM).

Library: Zustand.

Store Responsibilities: * Tracking active detailing service (e.g., PPF, Ceramic, Wrap).

Storing camera coordinates for cinematic transitions.

Managing dynamic pricing data to be displayed in glassmorphism UI overlays.

4. Scene Configuration & Lighting
To achieve an "Awwwards-tier" look, the lighting environment must mimic a professional detailing studio.

4.1 Environmental Simulation
HDRI Mapping: Use high-dynamic-range image maps via <Environment files="/studio_lighting.hdr" /> to provide realistic reflections on metallic and gloss surfaces.

Background: The background is strictly #000000 (True Black) to allow the car geometry and Red accents to pop.

4.2 Post-Processing
Effects: Implement EffectComposer from @react-three/postprocessing including:

Bloom: Subtle glow on headlights and Red UI indicators.

SSAO: To enhance depth in vehicle crevices.

5. Animation & Cinematic Motion
Animations must follow a "Super Smooth" non-linear easing curve.

Logic: Utilize maath/easing within the R3F useFrame loop.

Camera Controls: Implement CameraControls or PresentationControls from drei.

Transitions: When a user selects "7D Interior Mats," the camera must interpolate its position and lookAt target from the exterior orbit to a localized interior perspective over 1.2 seconds using a cubic-bezier curve.

6. Performance & Scalability
Technical constraints to ensure Core Web Vital compliance.

Lazy Loading: The <Canvas> component must be dynamic-loaded with ssr: false.

Suspense: Wrap 3D elements in <Suspense fallback={<Loader />} />. The loader must use a Red wireframe animation matching the brand aesthetic.

GPU Disposal: Manually trigger .dispose() on geometries and materials during component unmount to prevent memory leaks in long-running sessions.

7. AI Agentic Integration
The development workflow is orchestrated by the Stitch MCP and Ralph/GSD loop.

Stitch API: Uses Key AQ. for generating glassmorphism components.

GSD Protocol: All technical decisions are locked into CONTEXT.md. Task execution is handled via prd.json in the Ralph loop.

Skill Loading: The IDE must load .md skill files (e.g., frontend-design, ui-ux-pro-max) to maintain coding standards without context drift.

8. Security & Compliance (OWASP)
Sanitization: All inputs in the pricing and booking forms must be sanitized via zod.

Environment Variables: The Stitch API key and sensitive credentials must be stored in .env.local and never committed to the public repository.

Resource Access: Enforce CORS policies for 3D asset fetching if served from a CDN.