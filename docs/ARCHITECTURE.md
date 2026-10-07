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
- GSAP, @gsap/react and Motion installed and pinned. Motion is active in migrated UI; ImageParallax uses one shared GSAP/ScrollTrigger scheduler on native scrolling. No smoothing transport.
- `scripts/framer`: read-only source capture, named/geometric/design audit derivation and hardcode classification. `tokens:check` verifies canonical files and compatibility wrappers. See docs/TOKEN-AUDIT.md.
- `docs/framer`: dated migration data, used only as development reference.
- `.agents/skills`: three project-scoped migration skills.

## Conversion boundary

Framer is the reference for the requested future 1:1 visual/behavioral port. Preserve source IDs for traceability; keep markup/components, content, tokens and motion responsibilities separate. Extract shared abstractions only from real page/component consumers. Keep the app composition small and put audit artifacts outside runtime imports.

GSAP/ScrollTrigger owns ImageParallax geometry and future scroll choreography; Motion owns discrete UI behavior with separate property writers. See [MOTION.md](MOTION.md). No Lenis, router, CMS backend, WebGL or design-system library is installed in this bootstrap. Adding any follows a concrete consumer need and its authorized slice.

CMS schema/counts are captured; content records are not yet migrated. Dynamic routes and data authoring need a destination decision. Vite's client bootstrap is not evidence of server rendering or SEO parity. Public hosting must define route fallback/prerender requirements during the page migration.

## Sources

- [Vite guide](https://vite.dev/guide/) — official React TS template.
- [Motion React installation](https://motion.dev/docs/react-installation) — `motion/react` import.
- [GSAP React guide](https://gsap.com/resources/React/) — scoped lifecycle integration.
- [Framer inventory](framer/INVENTORY.md) — observed source and its limits.

Verification is recorded in [BOOTSTRAP-VERIFICATION.md](BOOTSTRAP-VERIFICATION.md).

CommunityCard is the current Community moment preview, mapped to legacy Framer Cards/Blog Card. Four content controls only; parent owns width, links and CMS selection. Reuses canonical typography/geometry/tween and live motion policy. See COMMUNITY-CARD.md.

Button composes the existing RollingText and Icon Engine with native anchors. Consumer owns resolved CMS URLs, responsive variant and positioning. See BUTTON.md for the three configurations and verified interaction contract.

Content/form atoms: shared native FormControl/FormFieldGroup/FormField, NavItem over RollingText, ContentHeadline/SplitContent/StatRow, CategoryLabelGroup/CommunityDetails and ImageFill. Parent owns responsive allocation, bindings, links and page behavior. See CONTENT-FORM-ATOMS.md.

MainFormButton receives the real form lifecycle via MainFormButton.state.ts: pending/incomplete/success/error map directly to Loading/Disabled/Success/Error. Parent owns validation/request; native submit, auto/fill width, existing RollingText/Icon are complete. See MAIN-FORM-BUTTON.md.


LoadMore is controlled pagination UI: loading/hasMore/onLoadMore, native type=button, hidden null. Parent owns CMS request/state, list updates and placement. Existing Icon spinner renderer is reused. See LOAD-MORE.md.


ImageReveal is the shared viewport media utility extracted from TestimonialsSection. ImageFill forwards string/responsive descriptors; parent owns frame, image identity and visibility. Eventi source uses the same utility with Neutral950; no CMS route is ported. See IMAGE-REVEAL.md.


FAQRow is one controlled accordion row: title/text/open/onOpenChange/onClick. FaqIcon decorative composition preserves the existing glyph in one native trigger. Parent owns availability, sibling policy and layout; FAQ Section is not ported. See FAQ-ROW.md.


### Rolling Text / Arrow Right Alt — closed 2026-10-07

RollingText is the single glyph/shadow utility for NavItem, Button and MainFormButton. Source transform control has a canonical spelling, real semantic tag, preserved typography/line offsets and shared live reduced policy. External Arrow Right Alt is unused/legacy; the distinct existing native testimonial-arrow glyph remains in Icon Engine with configurable fill. No duplicate renderer or public alias. [Contract and evidence](ROLLING-TEXT.md).


ImageParallax is the shared fill media primitive for all11source instances. ImageFill retains cover/center and supports caller-provided srcSet/sizes/alt/intrinsic dimensions/loading and positionX/Y, without deriving CDN URLs. Parent owns frames, responsive X/Y selection and CMS values. Real catalog examples plus /design-system?fixture=image-parallax provide comparison geometry without porting product pages. See IMAGE-PARALLAX.md.
