# Process Row — one complete migration

2026-10-06. Authorized: only Row/Process Row, source T0VLBAAXc, all four Home rows and three breakpoint configurations; real catalog examples. No next component, product page, Framer mutation or publishing.

Baseline HEAD 6b85d4cbcf4f77b517732fe3c9b9307555b93842. Preserve existing catalog/refinement, Testimonials and inventory changes. Current code has no reusable line reveal: Testimonials' private opacity/word reveal is a different effect. Reuse canonical typography/colors/spacing/size/motion exports and Motion root policy; implement only the missing line-trigger helper needed here.

Live source/controls and twelve instances captured in docs/framer/process-row-source.json. Browser confirms space-between ignores canvas gap1129; content fills the remainder, number hugs width, paragraph max680, gap24, divider80×6, Neutral50/BrandAccent. Responsive padding is consumer data, not row identity. API accepts CSS padding or phone/tablet/desktop padding, title/text/number strings; unset text removes its node.

Motion owns glyph opacity/y, grouped by actual rendered line (native runtime uses glyph spans and offsetTop); initial0.001/y40, start0.1, line stagger0.05, spring0.6/bounce0/restDelta0.001, threshold0/once. No scroll timeline, RAF, smoothing or GSAP. Live reduced/static/failure/disposal must stay readable.

Verify source/local four rows at1440/1200/1199/810/809/390, matching parent width; title/paragraph wrapping, no text, number/divider/color/fonts, in-view/once, resize and reduced policy. Execute typecheck/lint/build/tokens:check. No automated suites per project direction. Record final digest, evidence and actual limits; persist via Brain MCP.

Status: completed. All24rows match final measured source geometry/typography; final typecheck/lint/build/tokens:check PASS and unchanged build-input digest recorded in PROCESS-ROW-VERIFICATION.json. No internal capability deferred. Brain persistence is verified before conversation closure.
