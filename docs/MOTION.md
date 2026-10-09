# Animation boundaries

TestimonialsSection consolidation2026-10-08 preserves source tween.3/[.82,.18,.23,.74], parent-triggered word opacity spring.5/delay index*.06 and element quote reveal threshold.5/delay.2. Keyed existing ImageReveal owns cover; shared live reduced policy completes readable content. No second carousel/scroll scheduler. See TESTIMONIALS-SECTION.md.

Current: 2026-10-07. GSAP + @gsap/react + Motion installed. Motion is active in migrated UI components; ImageParallax centrally registers ScrollTrigger and one shared GSAP ticker. Scrolling remains native.

| Boundary | Owner |
| --- | --- |
| Markup, native semantics, interaction state | React |
| ImageParallax and future scroll choreography, pinning and measured scene geometry | GSAP / ScrollTrigger |
| Discrete hover/tap/presence/state microinteractions | Motion (`motion/react`) |
| Simple color/border feedback | CSS when sufficient |
| UI reduced-motion preference | Root MotionConfig (`reducedMotion="user"`) |

One global scroll-progress owner; no second smoothing/scroll clock. Motion's own scheduler for discrete interactions is allowed, but never computes canonical cinematic scroll progress. Do not animate the same transform/opacity with both libraries; give each a separate wrapper/property assignment.

Register GSAP plugins centrally, acquire scoped resources, and dispose only those resources. GSAP effects consume useReducedMotionPreference to observe the existing MotionConfig and live OS policy; MotionConfig alone does not stop GSAP. Preserve complete static/failure content, live preference changes and normal mobile flow. Use deterministic explicit endpoints and direct reversible scrub for scroll effects; scene callbacks cannot replace scroll geometry with independent progress calculations.

Native scrolling is the initial transport. Smoothing is not installed merely because an earlier removed application used Lenis. If source behavior later requires it, choose one root-owned transport and verify its clock, cleanup and native/reduced fallbacks.

An inventory effect configuration is structural evidence. Timing, spring feel and responsive choreography require preview observation and comparison. Component-specific evidence and limits live in the migration records; no all-site FPS/accessibility certification is implied.

Process Row uses a once/in-view glyph reveal grouped by rendered line: opacity/y only, with source spring0.6, initial delay0.1 and line stagger0.05. Our Story Card uses scoped variant layout projection, source spring0.4/bounce0.2, initialfalse; it has no headline reveal or interaction. Both consume the existing MotionConfig policy and live OS preference through useReducedMotionPreference. Readable reduced/failure paths and disposal remain local. See PROCESS-ROW.md and OUR-STORY-CARD.md; no new scroll owner/RAF/smoothing.

CommunityCard owns only its media scale1/1.1 during hover/leave, exact existing tween0.5/ease[.85,.05,.26,.96]/delay0. Motion whileHover on the root propagates to that single target. Live reduced-motion policy yields scale1, without a new helper, scroll owner, RAF or interaction state. See COMMUNITY-CARD.md.

Button: anchor hover state selects Icon's original 135/45-degree endpoints; RollingText keeps its independent text hover. Both reuse buttonPrimaryTransition (0.3s, cubic [.82,.14,.29,.91]); Primary Mobile arrow is static. No pressed/focus choreography or additional motion owner. See BUTTON.md.

NavItem reuses RollingText’s .3s cubic [.82,.14,.29,.91] and stagger60, plus exact existing .4/bounce.2 root spring. Live reduced policy disables projection and uses zero-duration/stagger for glyphs. Other content/form atoms are static; no new scroll or RAF owner. See CONTENT-FORM-ATOMS.md.

MainFormButton preserves source tween0.2/ease[.44,0,.56,1], existing RollingText tween0.3, and Icon form-spinner360/linear1s loop. Static state presets and runtime24px spinner aspect are verified; no additional animation/scroll owner. See MAIN-FORM-BUTTON.md.


LoadMore root changes instantly; the existing Icon load-more-spinner preserves source20×20 SVG mask/conic/round, linear1s rotation and .3s cubic[.44,0,.56,1] appearance. No additional hover/tap, scroll or RAF owner. See LOAD-MORE.md.


ImageReveal owns only cover left/width: once viewport appearance, delay0.6s, tween0.3s/cubic[.82,.18,.23,.74], full-height cover. useInView/animation controls dispose locally; shared live reduced-motion policy yields immediately uncovered media. Section keys remount the selected image; retained image updates preserve state. See IMAGE-REVEAL.md.


FAQRow uses the canonical tween0.2/ease[.44,0,.56,1] for root size projection, child position and answer opacity. Closed answer stays absolute/clipped/inert; parent controls open, no sibling state/RAF/scroll owner. FaqIcon motion/retention and live reduced policy are reused. See FAQ-ROW.md.


### Rolling Text / Arrow Right Alt — closed 2026-10-07

RollingText now owns its reduced-motion decision through useReducedMotionPreference, including live MotionConfig/media preference. Consumers pass original tween/stagger unchanged. Glyph shadow one line below, independent y0→−line→0; delay duration/text.length*index*stagger/100, reverse delays only. No new scroll owner, RAF or timers. [Contract and evidence](ROLLING-TEXT.md).


ImageParallax: src/motion/imageParallax.ts owns every media translate3d. One shared ScrollTrigger marks scroll geometry dirty; one GSAP ticker samples all moving horizontal parents, one ResizeObserver caches dimensions and invalidates layout. All root reads precede all media writes, unchanged transforms are skipped, no React frame state/component RAF/per-instance scroll listener. Final registration removal kills only this utility trigger/ticker/observer; live reduced policy releases registrations and retains the same overscan/crop at transform0. Source linear Y viewport passage and X horizontal-position formulas, bounds and evidence: IMAGE-PARALLAX.md.

ResizeObserver additionally schedules an own-trigger range refresh on the shared ticker (outside its callback) when document/frame dimensions change. This keeps retained media responsive after the document grows beyond the previous max scroll, without a per-instance listener.

Grain's original runtime animates a repeated PNG with ten percentage keyframes over8s, per-segment steps(10,start); inventory motion omission is superseded. CSS owns its transform, no JS frame work. Shared live reduced policy keeps static texture. LiquidHover uses GSAP's existing ticker for the source fixed-dt fluid pass order, with pointer-only input, cached resize and scoped GPU disposal; no new RAF/scroll progress or React frame state. Offscreen/background rendering is skipped. Reduced motion disposes canvas and exposes static ImageFill. Parent owns source Hero appear/parallax effects and mobile visibility. See GRAIN-LIQUID-HOVER.md.


### TextFitWidth / TextStagger — 2026-10-07

TextStagger uses existing Motion for y70→0 per visual line, source easing/delay/duration and one-shot inView/hover/click. Shared live reduced policy neutralizes transforms/timing; TextFit sizing remains active. Static wght500/700 and half-opacity are typography, not animation. No second scroll owner, component RAF or permanent will-change. Hover source guard is minimally fixed; keyboard support added. See [TEXT-UTILITIES.md](TEXT-UTILITIES.md) and executed proof.


### Project Card — 2026-10-08

ProjectCard React owns discrete hover/breakpoint state; Motion alone scales Inner media1/1.1, existing Icon alone rotates arrow−45/0 using tween.5s/ease[.85,.05,.26,.96]. Live reduced/Phone end hover and keep media1; no component RAF/scroll/measurement owner. Parent choreography stays separate. See PROJECT-CARD.md.

### Service Card — 2026-10-08

ServiceCard has no gesture/timeline: it selects existing ImageParallax X−50/Y0 or X0/Y50 on discrete breakpoint changes. Shared GSAP geometry sampling already follows horizontal parent transforms, with shared live reduced/crop/cleanup. Source spring metadata has no independent card state and adds no invented motion. Parent Section transport/visibility remains pending. See SERVICE-CARD.md.


### FAQ Section — 2026-10-08

Motion owns content-root size projection, sibling-wrapper position projection and existing FAQRow local targets; exact canonical0.2s/ease[.44,0,.56,1]. Outer height copies projected geometry only during discrete transitions, then one intrinsic ResizeObserver sync; no second height tween or component RAF/scroll owner. Existing live reduced policy cancels projection scheduling. See FAQ-SECTION.md.

### TheStoryTrack — static composition

No slot timeline or animated properties. ImageParallax retains its canonical shared GSAP registration and reduced policy; TextStagger retains its measurement/inView lifecycle and source-instance delay0.1/durPerLine0.7. OurStoryCard Desktop projection remains scoped to its own targets; Icon quote is static. No new progress owner/writer. Lenis/full Our Story Section remains pending.

Stats/StatRow are static markup/CSS only; uppercase is typography, no counter/inView/RAF/interaction/reduced-motion engine.


## EventTestimonial / CMS boundary — 2026-10-09
The existing testimonial title word-opacity algorithm is shared through motion/WordOpacityReveal.tsx; same heading/span DOM, once/threshold0, spring.5/bounce0/per-word.06, live readable reduced/failure path. Event quote uses element opacity once/threshold0 with source spring.4/delay.4, distinct from carousel quote tween.3/delay.2/threshold.5. No duplicated TextStagger, no carousel state in EventTestimonial.
CMS adapters own no scroll transform/progress. Home Collection List source effects reference headline-trigger, successive project roots and Services: cross-section choreography belongs to the pending Home scene on native wrapper refs. ProjectCard hover retains separate image/arrow targets; future GSAP must write only the outer scene wrapper. Current metadata records the endpoints; native/local Home scene transport is not certified by this task.
