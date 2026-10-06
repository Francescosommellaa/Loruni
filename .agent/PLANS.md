# Work plans

Use one bounded plan per multi-file implementation slice. Record intent/authorization, actual source state and unrelated changes, ownership/interfaces, deliverables, static/mobile/reduced/failure paths, minimum sufficient verification and final evidence. Do not report unexecuted checks or proposals as completed implementation.

Current plan: [Complete token audit](plans/2026-10-06-complete-token-audit.md). Previous: [Layout tokens and base CSS](plans/2026-10-06-layout-tokens-base.md). Completed: [Design system page](plans/2026-10-06-design-system-page.md), [Framer tokens and base.css](plans/2026-10-06-framer-tokens.md), [Vite / Framer bootstrap](plans/2026-10-05-vite-framer-bootstrap.md).

The first slice initializes tooling and inventories Framer. Subsequent conversion should proceed through verified used tokens/shared layout, then page sections and responsive/interaction states with direct source comparisons. CMS destination and hosting/routing remain open decisions until a slice needs them.
