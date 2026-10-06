# Atom di contenuto e form

Authorized 2026-10-06: close shared fields/groups, Nav Item and all remaining simple content/media patterns. ProcessRow, OurStoryCard and CommunityCard remain closed and unchanged. No product pages, sections, global navigation, full form, backend or deployment.

Source: read-only Framer session1; live Nav tree/controls/module and all48 consumers;105 targeted pattern roots across all breakpoint replicas, plus Community details. Capture in docs/framer/content-form-atoms-*.json. Source styles/tokens are reused, not regenerated from guesses. Runtime browser/canvas comparison resolves overlay borders, native textarea height/resize and actual parent geometry.

Implementation: shared FormControl + FormFieldGroup + FormField and four content configurations; NavItem reuses RollingText; ContentHeadline, SplitContent, StatRow, CategoryLabelGroup, CommunityDetails and ImageFill cover the eligible elementary patterns. Parent positioning, CMS selection and application actions remain external. Desktop/Tablet/Phone at1200/810; only Nav variants are explicitly parent-selected, as in source.

Excluded: complex cards, accordion, stateful application/form buttons and pagination, complete sections and lists, shared template/global navigation, sticky CMS detail layout, TextFit/TextStagger, ticker, reveal/parallax/shader/grain/preloader/scroll triggers and scroll runtime. Exact record classification is saved with closure evidence; names alone are not the classifier.

Verification: source and local browser measurements/screenshots for all configurations at1200/810/390, resize boundaries, form focus/typing/native validity/labels, textarea semantics/resize CSS, Nav hover/leave/link targets/callback/keyboard/live motion policy, content wrapping/conditional data and media load/crop. No automated frontend test suite per AGENTS. Run typecheck, lint, build, tokens:check. Final input digest and inventory rescan, durable Brain note/session log. Preserve unrelated dirty CommunityCard/doc work.

Status: inspection complete; implementation and browser closure in progress.
