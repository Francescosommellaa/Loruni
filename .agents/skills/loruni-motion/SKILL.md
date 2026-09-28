---
name: loruni-motion
description: Implement or review Loruni React animations with Motion, including presence, layout, gestures and reduced motion. Use for actual motion work; GSAP remains reserved for justified complex timelines or scroll sequences.
---

# Motion for Loruni

Read PRODUCT.md and the affected component before choosing an animation. The
user's brief owns the visual direction; this skill supplies implementation rules.

## Implementation

- Use the installed `motion` package and imports from `motion/react`.
- Motion owns React-driven reveals, presence, gestures and layout transitions.
  CSS is sufficient for simple color/focus states. Do not add motion without a
  visible purpose, or animate the same element with GSAP and Motion.
- Keep `MotionConfig reducedMotion="user"` at the root. This suppresses transform
  and layout animation, but does NOT disable opacity or background-color animation.
- Use `useReducedMotion()` for optional fades, parallax, autoplay and stagger:
  remove unnecessary effects and delay when reduced motion is requested. Essential
  content must remain visible. Check both settings in the browser.
- Use stable keys and direct conditional children for `AnimatePresence`. Removing
  a focused subtree must restore focus to a sensible control; animation does not
  provide dialog semantics, focus management or keyboard handling.
- Preserve native button/link behavior. Hover effects must not be required on
  touch devices. Respect keyboard focus and do not move the interactive hit area
  as a side effect of a press.
- Prefer transform and opacity for inexpensive effects, but measure actual
  behavior. Do not claim every transform is GPU accelerated or apply permanent
  `will-change` globally. Avoid React state updates on every animation frame.
- Do not introduce fixed timing tokens until there is a real interaction to tune.
- For enough animated components to justify bundle optimization, use `LazyMotion`
  with `m` from `motion/react-m`; do not mix full `motion` components into a strict
  lazy boundary. Do not add that architecture before it has a consumer.
- When GSAP is justified, read the installed `gsap-react` and relevant GSAP skill.
  Scope targets, revert contexts on cleanup, and handle reduced motion separately;
  MotionConfig has no effect on GSAP.

## Verification

Run the project's typecheck, lint and build. Verify the changed behavior in a real
browser with keyboard, touch-sized viewport, reduced motion, rapid interruption
and unmount/remount where relevant. Keep testing proportional to the change.

## Primary references

Consult the official page relevant to the API being changed and verify it against
the installed version. This is a project-authored skill, not an official Motion skill.

- [Installation](https://motion.dev/docs/react-installation)
- [MotionConfig](https://motion.dev/docs/react-motion-config)
- [Reduced motion](https://motion.dev/docs/react-use-reduced-motion)
- [AnimatePresence](https://motion.dev/docs/react-animate-presence)
- [LazyMotion](https://motion.dev/docs/react-lazy-motion)
