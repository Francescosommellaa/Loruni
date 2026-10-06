# Design system — inspection and presentation

2026-10-06. Authorized: refine the local /design-system page with existing Loruni tokens and clearer UX. Documentation styling only; no product redesign, Framer edits or token generation changes.

Baseline HEAD: 6b85d4cbcf4f77b517732fe3c9b9307555b93842. Pre-existing changes: docs/COMPONENT_INVENTORY.md, componentExamples.ts and untracked src/components/. Preserve their contents.

Direction: warm dark surfaces, bone text, coral accents, Funnel typography, square geometry. Compact introduction, grouped section navigation, searchable generated token references, copy with accessible feedback, editable typography specimen, framed real component examples. Keep all existing sections and native anchors/details.

Ownership: page and catalog helpers own documentation state/layout; imported components retain their own styles and behavior. No new dependencies, timers, RAF or animation ownership. Responsive sidebar becomes a native compact index; tables scroll locally; keyboard focus and clipboard failure remain readable.

Deliverables: scoped page styles, navigation/search/copy tools, existing catalog integration and current documentation. Verification: tokens:check, lint, TS/Vite build, browser desktop/tablet/phone, search/empty/deep-link/copy/keyboard/component interactions. No automated test suites. Record final digest and limitations; persist through Loruni Brain MCP.

Status: completed. Catalog navigation/search/copy/specimen and scoped presentation implemented. Browser 1440/1280/810/390 with no document overflow; deep links/reload/focus/copy/empty search/mobile index/native controls and FAQ preview exercised. tokens:check, lint and TS/Vite build PASS; chunk size warning remains. No automated suites. Concurrent Testimonials Section preserved, with a narrow tuple typing correction in its example. Canonical tokens unchanged. Current evidence and limitations: docs/DESIGN-SYSTEM-REFINEMENT.md and its verification JSON. Brain persistence recorded in the catalog note and session log.
