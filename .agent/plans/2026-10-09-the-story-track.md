# The story content-slot

Scope: only static horizontal slot ECF_um_EE. Our Story Section, Lenis, scroll transport/sticky and Mobile composition remain pending. Preserve all preceding dirty work.

Fresh read-only source: parent/slot/controls and Esperienza Desktop/Tablet overrides. Native canvas confirms intrinsic 5760×1080, children 740/660/960/1440/960 with gap200 and right padding200, root clip. Intro has space-between and computed gap normal. Quote icons both unrotated63×56. TextStagger instance overrides durPerLine0.7 (not default0.5), delay0.1, Funnel Sans64/1.16/−0.04em/center; six leading spaces retained. Parent canvas replicas report a missing local code module; detached source slot renders successfully and is the comparison target.

Implementation: TheStoryTrack with label/title/image/firstCard/quote/secondCard and div integration props. Derive card data from OurStoryCardProps. Reuse Label, ImageParallax, OurStoryCard Desktop, TextStagger and Icon quote. No own state, listeners, timeline, mobile CSS, interactions or engine. Existing semantic tokens only; parent can override height. Root clip its intrinsic content bounds, external wrapper owns viewport clipping.

Deliverables: component/CSS, live catalog and isolated document fixture, source mapping and dated contract/proof; Brain persistence. Verify source/local geometry/wrapping/icons, standalone/external viewport, dynamic/long content, Desktop/Tablet; typecheck/lint/tokens:check/build/diffcheck. No frontend automated suite or full scroll fidelity certification.

Status: CLOSED2026-10-09.88numeric fields/Quote lines match source; dynamic/long/missing-image/900height/standalone/viewport/810→1440 verified. Three catalog examples. All gates PASS, no suite.25canonical inputs unchanged. Final input count211/digest4c456fd18431d1c6299fd0cf8c0782d11fed604d133748117baefd80fc30a286; source readback unchanged. Full section/Lenis/Mobile remain excluded; parent replica local-module error and unsynchronized parallax limitations documented.
