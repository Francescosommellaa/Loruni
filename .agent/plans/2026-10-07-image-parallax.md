# Image Parallax — ONE TOUCH

Authorized 2026-10-07: reusable Image Parallax only, all 11 live source instances and their consumers, catalog, source/browser/build evidence. Grain, TextFitWidth, TextStagger and product page/section migrations excluded. Existing dirty/concurrent work preserved.

Source: external module zxcGfQb3lPhoJOWc1HTU, live controls/tree and preview. Canonical Y default control 30 (module fallback 50 differs); all consumers supply values. Y is linear vertical viewport passage; X is horizontal container position, independent of vertical scroll. Symmetric overscan comes from absolute percentage amounts. Border overlay, radius and shadow are actual module controls. Live uses CSS background cover/center with no lazy/srcset; accessible shared ImageFill can forward parent-owned responsive sources/crop.

Implementation: reuse ImageFill and live useReducedMotionPreference; centralized GSAP/ScrollTrigger integration, coordinated geometry reads then transform writes, one shared ticker for moving horizontal parents, no component RAF/listener or frame state. Parent owns sizing, breakpoint selection and CMS resolution. Retain overscan and crop under reduced motion; remove movement and release resources. Bound available travel to avoid uncovered edges.

Verification: source Desktop/Tablet/Phone Y30, contact Y30, Service X−50/Mobile Y50, Our Story Y50/X−50; equivalent consumer media fixtures (92vh/fill/640px/660px), X parent movement, both axes, dynamic/static/empty image, resize/fast scroll/live reduced/unmount. Typecheck, lint, build and available visual comparison, no automated suite. Record executed results and limitations, final scoped/build-input digest, update migration record/docs and Brain, read back saves.

Closed2026-10-07: final130build inputs stable digest 005a9b14e8a94577ba5640cc867beef90fd781ed49df99536c6927503f5b1605; typecheck/lint/build/tokens:checkPASS,538modules; runtime tokens/fonts unchanged. X safety bounds only the visible intersection, preserving source entering/exiting negative-X travel.11source instances/module reread unchanged, finalcatalog6→5/resize/overflow0/noerrors. Native Our Story hidden/horizontal-wrapper limits and raster comparison are explicit in IMAGE-PARALLAX.md/VERIFICATION.json.

Final range-refresh verification: retained parent640→2000, scroll2669/rootTop-1600/Y50 gives362.069px, then restore/reduced/unmount/Phone switch. All gates and5key browser captures repeated; scoped runtime digest cfb1857cc67fc563818bb9265f7082115915f13e680cc5b4ab3272863ed4f0bb.
