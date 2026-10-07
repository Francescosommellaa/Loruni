# Image Parallax — ONE TOUCH

Verified 2026-10-07 in A:/Loruni. Only Image Parallax is migrated; Grain, TextFitWidth, TextStagger and product sections/pages remain outside this task. Framer was inspected read-only. All11instances and ancestor bindings are captured in docs/framer/image-parallax-source.json; current module and instances were reread unchanged before closure. Verification and file digests are in IMAGE-PARALLAX-VERIFICATION.json.

## API and ownership

ImageParallax accepts image (optional string or shared ImageFill descriptor), alt, parallaxY (default30), parallaxX (default0), border (CSS border string or border style/width/color object, optional/null), radius (CSS border-radius, default0), shadow (CSS box-shadow string or string array), className and style. Image descriptors accept src, srcSet, sizes, alt, positionX/positionY, width/height and loading. Finite X/Y are constrained to the original control range −100…100. There are no direction variants.

The parent supplies the resolved static/CMS/binding image, its frame, placement, breakpoint selection and X/Y. The primitive fills that frame. No92vh/640px/660px or breakpoint is embedded in it. Responsive descriptors are forwarded without generating CDN URLs. The original live module uses background-cover and no lazy/srcset/intrinsic sizing; ImageFill uses an accessible img with cover/center, async decoding, ordinary eager/auto loading unless explicitly supplied. Crop position applies when both source position fields are present; otherwise center, matching the module. Decorative callers use empty alt; informative callers supply alt. No media-specific accessibility policy is added.

## Source algorithm

Exact source: https://framerusercontent.com/modules/zxcGfQb3lPhoJOWc1HTU/UHrEi0qhIpd3yrAh6Rk2/ParallaxImage_prod.js

SHA256 f4f22372c340efe88d22128a9cb4ba72991d353548ddfdc4d84cfbf29e1e2038. The external code was read to establish the contract, not copied into browser imports. Property-control default Y30 differs from the module's fallback/defaultProps50; the public API follows the real control default30. Every current consumer explicitly supplies X/Y.

Let W/H be root offsetWidth/offsetHeight, r its viewport bounding rect, Vw/Vh the viewport dimensions:

```text
p = clamp((Vh - r.top) / (Vh + H), 0, 1)
y = (p - 0.5) * parallaxY / 100 * H
x = (r.left + r.width / 2 - Vw / 2) / Vw * parallaxX / 100 * W
```

Y30 spans −15%H → +15%H; Y50 spans −25%H → +25%H as the root passes from below to above the viewport. Positive Y moves media downward during that passage; negative values reverse it. Progress clamps on entry/exit, without easing, lag or duration. X−50 follows horizontal root-center position, independent of vertical scroll: a center at viewport left gives +25%W, at center gives0, at right gives−25%W. Source X is unbounded outside those positions; entering/exiting negative-X consumers keep the same formula.

The local safety limit intervenes only when the computed X would uncover the *visible intersection* of frame and viewport. Fully visible limits are ±abs(X)W/200; partial frames retain additional travel that remains outside the viewport. Fully offscreen frames retain original X. This preserves all current negative-X behavior while preventing visible empty edges for positive-X/extreme placements. Example tested: X100, W1425, left−1000 has original x≈−997.005px, local−712.5px; visible media right remains exactly frame right425px. This is an explicit difference for that additional configuration, not an assertion about a current consumer.

## Crop and decoration

Source-derived symmetric overscan: left/right −abs(X)/2%, top/bottom −abs(Y)/2%, media dimensions (100+abs(X))% × (100+abs(Y))%. Cover is computed inside this enlarged media; root overflow hidden clips it. No fixed scale is added. Root/media inherit the configured radius; shadow belongs to root, border is a separate inset overlay above the image. All11current instances remain border null, radius0, shadow[].

## All consumers

| Consumer | Instances | X/Y | Frame assigned by parent |
| --- | --- | --- | --- |
| /esperienza Desktop/Tablet/Phone | 3 | 0/30 | fill ×92vh |
| /vieni-a-trovarci Desktop/Tablet/Phone | 3 | 0/30 | fill ×92vh |
| Service Card Desktop | 1 | −50/0 | fill ×fill; native parent600×1013 |
| Service Card Mobile | 1 | 0/50 | fill ×fill; parent image frame640px tall |
| Our Story Desktop/Mobile vertical | 2 | 0/50 | fill ×640px |
| Our Story horizontal content frame | 1 | −50/0 | 660px ×fill; captured parent1080px tall |

Page breakpoints are Desktop≥1200, Tablet810–1199.98, Phone≤809.98. The documentation parent exercises the Service axis switch at the Phone boundary. Original Service and Our Story images resolve inherited variables; Home Services supplies four distinct image controls. Static strings and retained dynamic descriptors were exercised. No CMS backend or parent section logic is introduced.

## Lifecycle and performance

src/motion/imageParallax.ts registers ScrollTrigger centrally. One shared ScrollTrigger invalidates scroll geometry, one GSAP ticker samples root geometry and one shared ResizeObserver caches dimensions/invalidation. ResizeObserver schedules a scroll-range refresh on the shared ticker, outside its callback, so retained layout changes cannot leave the trigger at an obsolete maximum. All reads precede all translate3d writes; unchanged transforms are skipped. X roots are sampled each ticker because their parents can move horizontally without vertical scrolling; Y-only roots are sampled when dirty. No per-instance scroll listener, React state per frame, component RAF or second smoothing clock. Each caller owns its registration; the last cleanup kills this utility's trigger/ticker/observer and refresh subscription, preserving other ScrollTrigger users.

Shared useReducedMotionPreference observes live OS and MotionConfig policy. Reduced motion unregisters movement and restores translate3d0, removes will-change, retains media dimensions, crop and layout. Returning to user policy reacquires geometry. Empty image also releases its registration. Retained image changes preserve progress; unmount removes the registration. React StrictMode's mount/dispose/reacquire path uses the same scoped lifecycle.

## Executed evidence and limits

True browser viewports1440×900,810×900,390×844; screenshots use explicit clips. Native Y30 page geometry, entry/exit and resize, Service Desktop X−50 and Mobile Y50, Our Story Mobile Y50 and all local frame configurations were measured. Service Desktop at left−243.5/top−64 yields600×1013 and x138.229px in source and local. Phone Y50 at top≈−104.90625 yields44.6159px source; integer local scroll top−105 yields44.6361px. Subpixel position differences explain nonzero capture deltas; no zero-pixel identity is claimed.

Four paired media crops were compared with Pillow/NumPy (existing repository has no runnable visual-comparison script): channel MAE/255 is1.18 Desktop Y30,1.26 Tablet Y30,1.71 Phone Our Story Y50 and4.76 Service X−50. Paired artifacts and metrics live in .agent/proofs/parallax-comparison-* and parallax-visual-comparison.json. Additional contact snapshots were captured at all three widths. A stopped local server was restarted; affected responsive/parent/lifecycle cases were repeated on current source.

Dynamic parent height and extended native scroll range, dynamic image, srcset/sizes forwarding, crop30%/70%, all decoration controls, both axes/signs, fast scroll, resize, empty, live reduced→user, unmount/remount and six simultaneous catalog instances were inspected. Removing one leaves five functioning; catalog/fixture overflow0. No browser console errors. Disposal is additionally verified from the scoped integration source; no heap/FPS benchmark is claimed.

Native Our Story Desktop vertical image is explicitly hidden; its horizontal-content preview and the page's external horizontal wrappers do not expose that image as a live scrolling consumer in this session. Its660×1080 local configuration uses the verified shared X algorithm; a native full-section visual comparison cannot be claimed. Source absence/placeholder is kept separate from primitive closure. Empty native media uses an editorial ComponentMessage; local empty media is transparent. The accessible img can rasterize differently from the source CSS background. No physical mobile performance, cross-engine, touch, screen-reader or OS-setting-change certification; live MotionConfig policy was exercised through the shared helper.

Typecheck, lint, build, tokens:check and final digests are recorded separately. No automated frontend suite was added or run. Current tokens/fonts remain byte-identical; only the derived hardcode audit is regenerated. Brain component note, current ownership/catalog/state and session log are persisted and reread.
