# TextFitWidth + TextStagger — source-based port, 2026-10-07

Original Code Files read fully before implementation and reread unchanged together with all21instance attributes. Reference copies, controls, parents, bindings and source IDs live in ignored `docs/framer/text-utilities/`, outside browser imports.

| Source | Lines | SHA256 |
| --- | --- | --- |
| Text_fit.tsx | 188 | 71c6800173e9e8c99d1676ab5ef13bb4f4762ff7adda695119d0b2f03733fb57 |
| Workshop_Component/TextStagger_1.tsx | 266 | 15afe573a6d980351c52895c9b5fe54fe7356f286fcb65a3828ac49d7e8c752a |

## Architecture and APIs

Separate TextFitWidth/TextStagger components. Shared TextFont CSS type and useTextMeasurement only; existing live reduced-motion policy and Motion reused. Parent owns frame, positioning, blending and responsive selection. No dependency/token/font changes, new scroll transport or frame loop.

Fit: `text?`, `font?:TextFont`, `text1?`, `background?`, `align?:left|center|right`, technical `className?/style?`. Defaults: `SYSTEM FOR\nBRANDS TO GROW`, #1A1917, transparent, left. Serialized text1/background map to source textColor/backgroundColor. Parametric family/weight/style/features/axes/tracking/leading; original Funnel Display fallback only when family absent.

Stagger: `text?`, `delay?`(.08), `durPerLine?`(.5), `color?`(#1A1917), `font?:TextFont`, `variableWeight?`(false), `trigger?:inView|hover|click`(inView), `halfOpacity?`(false), technical `className?/style?`. Default `Editable\nStaggered\nText`, font40/1em/−.02em/left; original missing-family Funnel Sans fallback. Serialized durPerLine/variableWeight map to source duration/variable.

## Algorithms

Fit retains integer binary search[1,2000], largest clone scrollWidth <= root.clientWidth−2. Explicit newline lines use white-space:pre, empty line NBSP, one fitted size for all lines. No trim/normalization or height/breakpoint constraint. Visible/hidden copies share typography; source flex alignment/overflow-visible retained. Initial layout effect fits before paint; fitting stays active under reduced motion.

Stagger retains cumulative UTF16 DOM Range bounds from offset0 to each successive character. Bounding bottom increasing by more than2px starts a visual line. Raw spaces/newlines stay in strings, including source blank-line behavior. Hidden configured-font clone uses pre-wrap at available width. Block overflow-hidden line spans contain inline-block pre-wrap Motion spans with inset0 clip. Only y70px→0 animates, ease[.44,0,.34,.98], index×delay, individual durPerLine; no opacity/scale reveal.

InView: default any-intersection threshold0/rootMargin0, one-shot/no replay. Click: once, repeated clicks do not restart/reverse. Hover: once on enter, no leave/reset/reverse. Original hover is self-gated: enter sets hasAnimated=true and start effect requires !hasAnimated. Minimum bug fix makes the requested trigger work. Keyboard focus supports hover, Enter/Space supports click with button semantics/global focus; explicit accessibility adaptations. Unused Framer controls were not edited for validation.

VariableWeight is static wght/fontWeight500, or700 when true; no axis animation. Clone measures configured weight, visible spans override it exactly as source: bold can additionally wrap within a clipping line. HalfOpacity is whole-line0.5 when preceding cumulative UTF16characters >= text.length/2; earlier lines1. Both are independent of reveal motion.

## Measurement, lifecycle and policy

One shared ResizeObserver for root width and Stagger clone width/natural height; one shared resize handler and FontFaceSet ready/loadingdone/loadingerror subscriptions. External work deduplicated into a microtask with a batched React commit before paint; initial measure remains synchronous. Text/font/style/align signatures invalidate. Unchanged size/line arrays skip updates. Range reads do not write; fitting's bounded logarithmic clone write/read passes preserve original search. No measurements during animation or permanent will-change layers.

Font completion, parent-only resize, viewport, font-size/tracking/leading and dynamic CMS text remeasure. New lines after reveal stay visible. Active guards discard disposed jobs; final unmount disconnects observer/listeners and queued ownership. Motion disposes line animation. Live shared reduced policy gives y0/zero timing without typography/whitespace/opacity changes; TextFit stays functional. MotionConfig changes exercised, physical OS-setting changes not performed.

## Coverage and limits

6Fit: Home/Esperienza Desktop/Tablet/Phone. 15Stagger: Home quote/Process intro, Esperienza intro, Evento CMS (three each), OurStory36px Desktop/Mobile plus64px connected canvas frame. No Community page instance;64px frame is not Tablet. OurStory36px Desktop is under The story visible=false: source controls/local isolated render checked, no visible native comparator.

20 visible configurations match native browser/canvas font-size, client height, color and every line string. Browser widths include15px scrollbar, distinct from canvas. Responsive documentation parents use existing810/1200 queries and source horizontal allocation (Home gutters/max frame; Process68% residual after32% Label; Esperienza70%/Phonefill). Product pages/Sections remain pending. Native RichText effects in ProcessRow/useLineReveal and Testimonials are separate, unchanged; previous inventory attribution to TextStagger superseded.

Browser: resize1200/1000/810/800/600/390/back,21configs, intentional/blank/newline spaces, align left/center/right, three permitted font families including observed loading→loaded, tracking/leading changes, all five current Evento CMS texts, native/local inView sequence, repeated click, hover entry, keyboard, half-opacity/500→700, live reduced/remount/unmount. No errors; expected Motion reduced-policy warning observed. Gates/digest: [TEXT-UTILITIES-VERIFICATION.json](TEXT-UTILITIES-VERIFICATION.json).

No synchronized pixel-diff/frame-time/CLS/heap, physical touch/OS setting, screen-reader or cross-engine claim. Intentional differences: minimum hover fix, keyboard/reduced support and responsive/CMS/font lifecycle repairs. No observed residual geometry/color/wrapping mismatch in20visible comparisons; hidden config has no native visual comparator. No source edit/publish, suite, deployment or global-memory update.
