---
name: loruni-motion-ownership
description: Implement or review Loruni animation ownership when translating Framer scroll choreography to GSAP and discrete React UI microinteractions to Motion.
---

# Loruni motion ownership

Read `docs/MOTION.md` and the source effect/component evidence for the requested interaction. The bootstrap installs libraries; it has no cinematic runtime or smoothing layer.

## Choose the writer

- Use GSAP/ScrollTrigger for scroll-linked sequencing, pinning, measured parallax and shared scene choreography.
- Use `motion/react` for discrete state transitions, hover/tap and UI presence where warranted by the source. CSS is sufficient for simple color/border feedback.
- Motion's internal UI scheduler is allowed for discrete interactions. It must not become a second scroll-progress clock, smoothing stack or controller of GSAP scene geometry.
- One writer per animated property. When a UI element also belongs to a GSAP scene, use separate structural/motion wrappers and explicitly assign each engine its targets. Do not share a transform between engines.

## Lifecycle and paths

- Register GSAP plugins at one integration boundary when first needed. Use scoped `useGSAP`/contexts and idempotent cleanup; never kill all document triggers from a component.
- Native scrolling is the initial transport. If a later slice adds smoothing, keep one root-owned instance and a named bridge to GSAP's ticker. No component RAF loops, second Lenis or ScrollSmoother.
- Use deterministic explicit endpoints and reversible direct scrubbing for scroll effects. Interaction-triggered playback is appropriate only for interactions, not as a substitute for canonical scroll progress.
- Keep the root `MotionConfig reducedMotion="user"`. For GSAP use a separate live reduced-motion policy; MotionConfig does not disable GSAP. Reduced/static content must remain complete and readable.
- Plan mobile choreography from its source variant; do not blindly scale desktop pin distances. Preference changes, route disposal, resize and font/media readiness must not leave hidden content or orphan pin spacers.

Verify meaningful seeks/reversals and cleanup when introducing scroll ownership; verify input/focus and live reduced motion for UI animation. Report measured browser/profile evidence only.
