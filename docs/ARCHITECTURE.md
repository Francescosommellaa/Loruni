# Loruni Vite architecture

Current: 2026-10-06. This checkout was empty except for Git metadata and pre-existing asset deletions at bootstrap start. Historical Next.js and cinematic runtime files are absent.

## Implemented

- Root Vite React TypeScript project, strict TypeScript, React StrictMode.
- `src/main.tsx`: one React root and MotionConfig with user reduced-motion preference.
- `src/app/App.tsx`: development status using imported Framer typography; App.css owns its temporary layout. It is not the Framer homepage.
- `/design-system`: explicitly requested live catalog in src/pages/design-system. Token sections consume generated exports; componentExamples.ts registers actual React examples as components are added. Scoped documentation CSS, native anchors/details, no router dependency. See [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md).
- `src/styles/base.css`: layered HTML reset and defaults, imports local fonts and generated named/geometric tokens. See [BASE-CSS.md](BASE-CSS.md).
- `src/styles/token.ts`, `token.css`, `fonts.css`: named Framer colors/text/link styles, semantic references, responsive slots and three approved font families. Generated from token-source.json plus token-policy.json by scripts/framer/tokens.mjs; Framer IDs stay in reference snapshots outside browser imports. See [TOKENS.md](TOKENS.md).
- `src/styles/geometry.ts/css`: compatibility wrappers around the canonical token files; consumer-derived spacing/radii/borders/shadow/layout from geometry-source.json through geometry.mjs; re-exported by tokens.ts. Recurrence audit stays outside runtime. See [LAYOUT-TOKENS.md](LAYOUT-TOKENS.md).
- GSAP, @gsap/react and Motion installed and pinned. Motion is active in migrated UI; no custom scroll runtime or smoothing.
- `scripts/framer`: read-only source capture, named/geometric/design audit derivation and hardcode classification. `tokens:check` verifies canonical files and compatibility wrappers. See docs/TOKEN-AUDIT.md.
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
