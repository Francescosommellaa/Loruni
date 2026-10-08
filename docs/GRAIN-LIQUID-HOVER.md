# Grain and Liquid Hover — ONE TOUCH

Verified 2026-10-07 against the read-only Framer Home preview and all six serialized instances. Grain was the original scope; the user explicitly added Liquid Hover and mobile tap/drag. TextFitWidth, TextStagger and the product Home/Hero composition remain outside this slice. Source provenance: `framer/grain-liquid-source.json`; executed evidence: `GRAIN-LIQUID-HOVER-VERIFICATION.json`.

## Grain

The original is a repeated 256×256 PNG, not generated SVG noise, a filter or canvas. `public/media/grain.png` preserves the original 22,927 bytes, SHA256 `7867172cbddd0172eb2fcf5803679ab8fb337eddb8397d43c918788016181409`. The source runtime animates it despite the inventory's missing motion entry.

`Grain({ opacity = 0.5, className?, style? })` fills its positioned parent, clips its own texture and enforces `pointer-events: none` on root and texture. It is decorative/aria-hidden. Opacity controls the inner texture only; a caller's style opacity or wrapper opacity controls the whole layer. Current Hero instances use inner 1 and outer 0.1. Masks, z-index, frame and breakpoint selection belong to the consumer.

The inner layer starts at -200%/-200%, is 400%×400%, repeats the PNG at intrinsic size, and translates in percentages of that layer. Ten source keyframes run evenly over eight seconds, with ten start steps within each of the nine segments, indefinitely:

```text
X: 0, -5, -15, 7, -5, -15, 15, 0, 3, -10
Y: 0, -10, 5, -25, 25, 10, 0, 15, 35, 10
```

CSS keyframes reproduce this with `steps(10, jump-start)`. No frame updates, listeners, timer or canvas are needed. The original background shorthand resets its earlier background-size setting to auto; the raster itself is 256px, so intrinsic repetition preserves density. The shared live reduced-motion preference disables translation while retaining texture, crop, mask and layout. It also removes will-change.

## Hero configuration

All three source Grain instances are absolute inset 0, outer opacity 0.1 and pointer passive. Their recorded 1200×800 values are canvas serialization, not browser fixed dimensions. Runtime Hero fills 100vh; the documentation consumer alone applies this sizing. The primitive has no viewport or Hero dimensions.

| Consumer | Mask | Stack |
| --- | --- | --- |
| Desktop ≥1200 | 50% 34% at 33.8% 38.5%; transparent39%, opaque57%, transparent73% | Grain z1 above Liquid image |
| Tablet 810–1199.98 | 50% 34% at 55.5% 35.6%; transparent39%, opaque57%, transparent73% | Grain z1; the later opaque static image z1 covers it |
| Phone ≤809.98 | 50% 36% at 33.8% 38.5%; transparent39%, opaque55%, transparent73% | Grain z2 above static image z1 |

The consumer reuses existing source mask/fill CSS variables. Liquid is visible only on Desktop in Framer. Its hidden Phone replica's 169% width/19.49% anchor is recorded, not silently made primitive policy. The catalog's explicit mobile toggle enables the requested extension in the existing media frame. The Hero appear/parallax effects, headline, nav and CTA are parent responsibilities and are not part of these utilities.

## Liquid Hover

An independent WebGL implementation follows the recovered source equations and pass order, without copying the third-party module. API: `LiquidHover({ image?, alt?, resolution = 4, cursorSize = 0.5, cursorPower = 0.6, distortionPower = 0.5, touch = true, className?, style? })`. Control names map source `cursor`→`cursorSize`, `power`→`cursorPower`, `distortion`→`distortionPower`. Defaults follow the actual Framer controls; the source function's undocumented fallback values differ. Valid intervals are resolution1–10, other numerical controls0.1–1. Nonfinite values fall back to control defaults.

`image` reuses ImageFill's string/responsive descriptor API and accessible static image; resolved binding/CMS values and srcSet/sizes can come from the parent. The loaded browser image candidate is uploaded to the GPU. Original Liquid cover crop is centered; descriptor position overrides are forwarded to the static ImageFill path, not interpreted as extra shader controls. Image changes rebuild scoped state, and candidate load updates the texture. Empty media is transparent rather than showing Framer's editor ComponentMessage.

The canvas overscans 120%, left/top -10%; display mapping reverses that scale using 5/6. It explicitly opts out of the base canvas max-inline-size rule. DPR is capped at 2 as in source. Simulation height is round(128+(resolution−1)×384/9); width multiplies by parent aspect. Seven float RGB targets implement velocity, dye, pressure ping-pong and divergence. Radius=(0.5+(cursorSize−0.1)×5)×0.001; intensity=(5+(cursorPower−0.1)×50)×0.001. Pointer deltas multiply by6, normalized into the overscanned frame.

Each tick splats pending input, computes divergence, runs16 Jacobi pressure iterations, subtracts pressure gradient, advects velocity with dt1/60 and decay0.97, then dye with dt8/60 and decay0.98. It preserves the source's previous velocity texture binding for dye advection. Output shift is distortionPower×normalize(velocity+0.001)×dye; photo shift is twice the frame shift. Cover UV, 0.002 edge fade and outside-photo nine-tap blur follow the source. No autonomous disturbance is introduced. Like the source, numerical dt is fixed per render tick, so high refresh screens may evolve the effect faster; this is not a second smoothing layer.

Mouse hover/drag and Pointer Events share the same solver. Tap injects an immediate impulse; one touch pointer is captured for drag and released on up/cancel/lost capture. This is the authorized mobile extension. `touch-action: pan-y` preserves native vertical page scroll: horizontal drag can continue, while a browser-owned vertical gesture can cancel the effect. No passive Grain layer intercepts input. Touch false restores auto handling and ignores non-mouse input.

The existing GSAP ticker schedules GPU rendering, without a component RAF or scroll timeline. Geometry is cached through ResizeObserver; buffer allocation happens in the ticker, not in the observer. Offscreen and background document ticks are skipped. One quad is reused; resize releases old targets. Unmount/reconfiguration removes only this surface's ticker callback, observers, pointer/load/context handlers, capture and GPU resources. React state never updates per frame. Reduced motion removes the canvas and shows the same static cover image. Unsupported float textures, shader/upload errors or context loss retain static ImageFill; the invisible fallback canvas cannot intercept input. Context restore stays static until remount/reconfiguration.

## Validation and limits

Matching CSS viewport checks:1440×900,810×900,390×844; source/local Hero widths1425/795/375 with15px scrollbars, heights900/900/844. Desktop source/local canvas1710×1080 at(-142.5,-90). Original preview refreshed at the end; module hashes unchanged. The Framer VM session expired during final node reread, so all-six-instance coverage comes from the earlier same-task capture rather than a second final serialization.

Browser exercised source and local Desktop drag, Phone extension mouse drag, viewport changes, dynamic images, distinct inner/layer opacity, underlying button click, live reduced motion, Grain unmount/remount, Liquid control minima/maxima, Liquid unmount/remount and empty image. Console had no errors/warnings. Static/failure and cleanup code paths were inspected; GPU failure/context-loss injection and hardware touch were not exercised. No automated frontend suite was added or run.

Paired screenshot crops compare only media areas outside the source headline/nav. Top-level local and embedded Framer screenshot exports have different raster extents despite matching CSS viewport geometry; comparison artifacts explicitly normalize these extents. Grain phase is not synchronized, so neither raw pixel identity nor a quantitative density equality is certified. Exact PNG, opacity/mask geometry, period/keyframes and visually comparable density/contrast are evidenced. No full product Hero fidelity, physical mobile/FPS, cross-engine or screen-reader certification is claimed. Native-to-local fluid drag captures are qualitative: input samples and simulation frames are not synchronized.

GRAIN — CLOSED

LIQUID HOVER — CLOSED within the authorized utility scope, with the documented device and failure-path validation limits.
