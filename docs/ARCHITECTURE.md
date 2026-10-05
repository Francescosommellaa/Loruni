# Loruni Vite architecture

Current: 2026-10-05. This checkout was empty except for Git metadata and pre-existing asset deletions at task start. Historical Next.js and cinematic runtime files are absent.

## Implemented

- Root Vite React TypeScript project, strict TypeScript, React StrictMode.
- `src/main.tsx`: one React root and MotionConfig with user reduced-motion preference.
- `src/app/App.tsx`: temporary neutral development status. It is not the Framer homepage.
- `src/styles/base.css`: temporary bootstrap styles, not confirmed Loruni tokens.
- GSAP, @gsap/react and Motion installed and pinned; no custom animation runtime or smoothing yet.
- `scripts/framer`: read-only source capture and inventory derivation.
- `docs/framer`: dated migration data, used only as development reference.
- `.agents/skills`: three project-scoped migration skills.

## Conversion boundary

Framer is the reference for the requested future 1:1 visual/behavioral port. Preserve source IDs for traceability; keep markup/components, content, tokens and motion responsibilities separate. Extract shared abstractions only from real page/component consumers. Keep the app composition small and put audit artifacts outside runtime imports.

GSAP/ScrollTrigger owns future scroll choreography; Motion owns discrete UI behavior with separate property writers. See [MOTION.md](MOTION.md). No Lenis, router, CMS backend, WebGL or design-system library is installed in this bootstrap. Adding any follows a concrete consumer need and its authorized slice.

CMS schema/counts are captured; content records are not yet migrated. Dynamic routes and data authoring need a destination decision. Vite's client bootstrap is not evidence of server rendering or SEO parity. Public hosting must define route fallback/prerender requirements during the page migration.

## Sources

- [Vite guide](https://vite.dev/guide/) — official React TS template.
- [Motion React installation](https://motion.dev/docs/react-installation) — `motion/react` import.
- [GSAP React guide](https://gsap.com/resources/React/) — scoped lifecycle integration.
- [Framer inventory](framer/INVENTORY.md) — observed source and its limits.

Verification is recorded in [BOOTSTRAP-VERIFICATION.md](BOOTSTRAP-VERIFICATION.md).
