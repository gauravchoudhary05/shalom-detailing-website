# GEMINI.md - AI & IDE ORCHESTRATION

## Context
Workspace for Shalom Car Detailing 3D Platform. Focus: WebGL spatial experience + high-ticket service visualization (PPF, Ceramic).

## Stitch MCP Configuration
* **Endpoint:** `https://stitc`
* **Protocol:** Injected via `X-Goog-Api-Key` header. Use the `react:components` skill to transform Stitch output into Next.js App Router components.

## Execution Rules
* **Reasoning:** Set internal processing to **ULTRA**. Validate all 3D matrix math internally before outputting code.
* **Loop:** Follow the Ralph autonomous loop protocols strictly.