# ImageReveal — ONE TOUCH

Authorized 2026-10-07: only Misc/Testimonials Image reveal, source dmfgfOdOP.
Preserve the dirty checkout and all previously closed components. No source edits,
publication, product page migration or automated suite.

Live source: two states, 35 instances / five independent slots. Eight Testimonials
variants and three event breakpoints; four image controls and dynamic event image.
Root fills its parent, cover retracts right-to-left, full height throughout.
Native event preview proves onAppear waits for the mount's first viewport appearance.
Delay .6s, duration .3s, cubic [.82,.18,.23,.74]. Responsive media cover/center
confirmed cover/center in native preview. Canvas width/height constraints are not CSS.

Implementation: shared ImageReveal, semantic image/backgroundColor plus technical
className/style. Reuse ImageFill for media (extend its responsive descriptor),
existing motion configuration and live reduced-motion policy. Parent owns visibility,
mount identity and carousel; image-only changes on a retained instance preserve state.
Extract private Section reveal, leave carousel behavior intact. Add real catalog
examples for both backgrounds, empty media, source changes, remount and visibility.

Verification: direct native preview timing/geometry/crop, Desktop/Tablet/Phone,
carousel next/previous/rapid interactions, retained image update versus remount,
responsive source and reduced policy. pnpm typecheck/lint/build/tokens:check;
final input digest and explicit evidence limits. Record source/runtime contract in
inventory/docs and Brain; reread persistence. Do not proceed to the next utility.

Closure:35/5source coverage, nativeDesktop/Tablet/Phone and final browser lifecycle/carousel/responsive checks complete. Typecheck/lint/build/tokens:check PASS; source tree/controls/module reread unchanged. Final124input digest 0fe4e5479fda3e736c89854a619fabb39ed937029fe68dac15e3d122926888ec. Brain persistence follows with readback.
Brain dedicated note/registry/inventory/index/sessionlog saved and reread PASS. No next utility.
