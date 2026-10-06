# Animation boundaries

Current: 2026-10-06. GSAP + @gsap/react + Motion installed. Motion is active in migrated UI components; no custom clock, ScrollTrigger registration or smooth scrolling is active.

| Boundary | Owner |
| --- | --- |
| Markup, native semantics, interaction state | React |
| Future scroll choreography, pinning and measured scene geometry | GSAP / ScrollTrigger |
| Discrete hover/tap/presence/state microinteractions | Motion (`motion/react`) |
| Simple color/border feedback | CSS when sufficient |
| UI reduced-motion preference | Root MotionConfig (`reducedMotion="user"`) |

One global scroll-progress owner; no second smoothing/scroll clock. Motion's own scheduler for discrete interactions is allowed, but never computes canonical cinematic scroll progress. Do not animate the same transform/opacity with both libraries; give each a separate wrapper/property assignment.

When GSAP effects are implemented, register plugins centrally, acquire scoped contexts/resources, and dispose only those resources. GSAP reduced-motion handling must be implemented independently: MotionConfig does not control GSAP. Preserve complete static/failure content, live preference changes and normal mobile flow. Use deterministic explicit endpoints and direct reversible scrub for scroll effects; scene callbacks cannot replace scroll geometry with independent progress calculations.

Native scrolling is the initial transport. Smoothing is not installed merely because an earlier removed application used Lenis. If source behavior later requires it, choose one root-owned transport and verify its clock, cleanup and native/reduced fallbacks.

An inventory effect configuration is structural evidence. Timing, spring feel and responsive choreography require preview observation and comparison. Component-specific evidence and limits live in the migration records; no all-site FPS/accessibility certification is implied.

Process Row uses a once/in-view glyph reveal grouped by rendered line: opacity/y only, with source spring0.6, initial delay0.1 and line stagger0.05. Our Story Card uses scoped variant layout projection, source spring0.4/bounce0.2, initialfalse; it has no headline reveal or interaction. Both consume the existing MotionConfig policy and live OS preference through useReducedMotionPreference. Readable reduced/failure paths and disposal remain local. See PROCESS-ROW.md and OUR-STORY-CARD.md; no new scroll owner/RAF/smoothing.
