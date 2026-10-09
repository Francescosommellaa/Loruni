# Loruni Vite architecture

ServicesDesktopTrack2026-10-09: static Desktop/Tablet content-slot, Label/Headline180 intro and existing ServiceCard array. Intrinsic max-content/nowrap, stable targets, no motion/state/transport; parent owns clipping, breakpoint selection and Lenis. See SERVICES-DESKTOP-TRACK.md. Services Section remains pending.

TestimonialsSection consolidated2026-10-08: required items image/title/quote/name/role with optional id, one dynamic carousel selection and existing ImageReveal/TestimonialsArrow/Icon/Divider. Parent owns allocation; Desktop/Tablet grid and Phone content-only layout. See TESTIMONIALS-SECTION.md; no product page migrated.

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

GSAP/ScrollTrigger owns ImageParallax geometry and future scroll choreography; Motion owns discrete UI behavior with separate property writers. See [MOTION.md](MOTION.md). No Lenis, router, CMS backend or external design-system library is installed. The closed LiquidHover uses the native WebGL runtime; see GRAIN-LIQUID-HOVER.md. Adding any follows a concrete consumer need and its authorized slice.

CMS schema/counts are captured and current normalized content fixtures are available; no production CMS provider is installed. Dynamic routes and data authoring need a destination decision. Vite's client bootstrap is not evidence of server rendering or SEO parity. Public hosting must define route fallback/prerender requirements during the page migration.

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


FAQRow is one controlled accordion row: title/text/open/onOpenChange/onClick. FaqIcon decorative composition preserves the existing glyph in one native trigger. FAQSection now owns availability and exclusive sibling state; page layout/content remain consumer-owned. See FAQ-ROW.md and FAQ-SECTION.md.


### Rolling Text / Arrow Right Alt — closed 2026-10-07

RollingText is the single glyph/shadow utility for NavItem, Button and MainFormButton. Source transform control has a canonical spelling, real semantic tag, preserved typography/line offsets and shared live reduced policy. External Arrow Right Alt is unused/legacy; the distinct existing native testimonial-arrow glyph remains in Icon Engine with configurable fill. No duplicate renderer or public alias. [Contract and evidence](ROLLING-TEXT.md).


ImageParallax is the shared fill media primitive for all11source instances. ImageFill retains cover/center and supports caller-provided srcSet/sizes/alt/intrinsic dimensions/loading and positionX/Y, without deriving CDN URLs. Parent owns frames, responsive X/Y selection and CMS values. Real catalog examples plus /design-system?fixture=image-parallax provide comparison geometry without porting product pages. See IMAGE-PARALLAX.md.

Grain fills a positioned parent with the original repeated raster and inner opacity. Consumer owns outer opacity/masks/stacking/responsive frame. LiquidHover composes ImageFill with a scoped WebGL surface, centered source cover crop, existing GSAP ticker and shared live reduced policy. Mobile touch is an authorized opt-in at the consumer visibility boundary, with native vertical scrolling retained. Hero Home remains pending; /design-system?fixture=grain is documentary media composition. See GRAIN-LIQUID-HOVER.md.


### TextFitWidth / TextStagger — 2026-10-07

Separate TextFitWidth/TextStagger canonical components use shared TextFont and useTextMeasurement. Source snapshots stay outside browser imports; documentation fixtures expose all21 configurations. Parent owns breakpoints/frames/content. One shared ResizeObserver/window/font-ready service batches external measurements before paint, no frame loop. See [TEXT-UTILITIES.md](TEXT-UTILITIES.md) and executed proof.


### Project Card — 2026-10-08

ProjectCard owns one responsive main/inner visual tree, optional content and discrete hover. Reuses ImageFill/ArrowForward/typography and shared reduced policy. Parent supplies dimensions, links, CMS and sticky/scroll; native default Inner aspect16/9 and Phone760 retained. No product page or other composite port. See PROJECT-CARD.md.

### Service Card — 2026-10-08

ServiceCard owns a single responsive media/content tree and optional six-slot labels/price. ImageParallax, CategoryLabel, Divider and canonical presets are unchanged. Actual Home boundary810 changes media axis/layout; parent owns allocation, ID, content/visibility and horizontal Section choreography. Services Section remains pending. See SERVICE-CARD.md.


### FAQ Section — 2026-10-08

FAQSection owns one exclusive identity-based state and isSet availability, composing unchanged Row markup/motion/accessibility and existing Icon Engine. A scoped LayoutGroup coordinates projection; the outer vertical reservation absorbs Layout Jump Preventer using bounded Motion postRender plus ResizeObserver. No global helper/page/CMS. See FAQ-SECTION.md.

### The story content-slot — 2026-10-09

TheStoryTrack composes existing primitives in one intrinsic horizontal frame. Required consumer content, card models derived from OurStoryCardProps, normal div integration. No own state/effects/listeners/scroll runtime. Root clips only its5760×1080 content bounds; external wrapper owns viewport clipping, breakpoint mounting and future transport. [Contract](THE-STORY-TRACK.md).

### Stats /esperienza — 2026-10-09

Stats owns only responsive section composition, one data array and existing StatRow. value/label strings, optionalid/labelStyle; no state/effects/motion. Page owns copy and ancestor clipping; source Phone caption remains intrinsic/unwrapped. [Contract](STATS.md).


## Final component/CMS batch — 2026-10-09
EventTestimonial is a single conditional presentational section, distinct from TestimonialsSection. Existing ImageReveal/Divider/Icon/reduced policy and exact word-opacity title reveal are reused; WordOpacityReveal is the shared internal helper for both testimonial titles. CmsCollections.tsx exports EventCardSlot, EventCollection and CommunityCollection; normalized semantic records, filtering/query/route/heading/layout/pagination are owned by these consumers. Card visual primitives remain routing-free. CurrentCms.data.ts is documentary current CMS data, shared with existing card examples; no provider/backend/product pages added.41catalog entries,39component files;80completed/55pending/2legacy over137records. Existing MIGRATION-STATUS.md and its verification JSON contain the full closure/contracts/residual list/NEXT SESSION.
Home scene references external headline/sibling/Services targets: CMS adapters expose native id/ref/allocation, while the future Home parent owns sticky/stacking/progress and opacity/y/scale. No percentage artifacts or transform writer added to the adapters. Full Services/OurStory/Lenis/navigation/template/page work remains pending.


### Headline sections — 2026-10-09
Four runtime implementations cover eleven source patterns: new HeroFittedHeadline/LabelledStaggerHeadline compose unchanged TextFitWidth/TextStagger/Label; ContentHeadline and SplitContent retain their existing bounded APIs. Content/CMS/visibility/gutter/section/hero orchestration belongs to consumers; source contact Template heading is live on six enabled pages. No product pages or full Hero/Process/form migration. Current counts82completed/53pending/2legacy,41runtime/43catalog. Contracts in CONTENT-FORM-ATOMS.md; current mapping/evidence in MIGRATION-STATUS and its headlineSections proof.


### Logos and Intro — 2026-10-09
LogosAndIntro owns the page-specific two-section composition; required semantic content is separate from markup. BrandTicker owns only source-derived continuous logo transport through native Web Animations, scoped RO/IO/visibility and shared reduced policy. Intro is internal, reusing unchanged Label/TextStagger. Original brand assets remain in Icon Engine; Color container background/later blocks/product page stay parent-owned and pending. 84completed/51pending/2legacy,43runtime/45catalog. Proof/contracts: MIGRATION-STATUS-VERIFICATION.json.logosAndIntro and CONTENT-FORM-ATOMS.md.
