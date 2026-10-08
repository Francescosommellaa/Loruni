# Loruni — Vite migration workspace

The current authorized slice (2026-10-06) includes imported Framer tokens/fonts/base.css and the explicitly requested live design-system documentation page. Porting product pages, CMS backend selection, redesign and deployment are subsequent slices. The source project is `https://framer.com/projects/Loruni--F3868vuk7YeE7pDEgpP6`; preserve its appearance and behavior.

## Current checkout and workflow

- Use pnpm and the scripts in package.json. Read `docs/ARCHITECTURE.md`, `docs/MOTION.md`, `.agent/PLANS.md` and the relevant inventory before changes.
- The old Next.js/cinematic implementation is absent from this checkout. Historical Brain proof does not attest today's Vite app. Do not restore removed source or assets without a request.
- Preserve unrelated changes. All tracked `Logo/` assets were already deleted before initialization; do not restore them or claim their deletion as this task's work.
- Use `.agents/skills/loruni-framer-inventory`, `loruni-react-port` and `loruni-motion-ownership` for their respective boundaries. Framer CLI access remains governed by the installed Framer skill.
- Keep changes bounded. Use `.agent/PLANS.md` for multi-file work. Select checks from the diff; report only executed evidence with revision/digest and limits.
- Framer inspection is read-only unless the user requests source changes. Reading content does not authorize publishing, source edits or copying third-party code.

## Animation and presentation

React owns markup and discrete UI state. GSAP/ScrollTrigger owns future cinematic scroll choreography; Motion owns discrete UI microinteractions on separate targets/properties. One global scroll-progress owner and one writer per animated property. No component RAF loops or competing smoothing layers. Motion's internal interaction scheduling is allowed; it must not drive a second scroll timeline. Respect mobile, live reduced motion, readable static/failure paths and scoped disposal. Reference snapshots stay outside browser imports. Tokens come from verified source styles and real consumers.

Named tokens live in src/styles/tokens.ts and tokens.css, generated from docs/framer/token-source.json by pnpm tokens:generate; pnpm tokens:check detects drift. Read docs/TOKENS.md before changing them. Use serialized text preset breakpoint slots rather than interpreting plugin API thresholds as CSS min-width. Apply text classes/data-text-style explicitly; base.css owns reset/defaults, consumers own layout and local source overrides. Geometric extraction is now authorized: read docs/LAYOUT-TOKENS.md and docs/BASE-CSS.md. Shared spacing requires at least two independent source nodes after replica deduplication; keep isolated values and source-specific overrides local. geometry-source.json and geometry-audit.json hold provenance outside browser imports. Never infer margin from absolute coordinates or impose layout tokens on every section.

User corrections (2026-10-06) take precedence over Framer defaults: only Funnel Display, Funnel Sans and IBM Plex Sans. Runtime token names and references must be semantic, without UUID aliases or ID fields. Keep Framer IDs in reference snapshots only. docs/framer/token-policy.json records these corrections separately from the unchanged source capture.

Current user direction: do not add or run automated test suites for this frontend import. Use browser inspection and build verification; preserve unrelated existing tests.

The user explicitly requested /design-system as a growing visual catalog. Existing token sections read the generated exports directly. Whenever adding a real UI component, add its real React examples, variants and meaningful states to src/pages/design-system/componentExamples.ts in the same task. New token categories also need a matching catalog section. Keep documentation layout and controls separate from product components/tokens; do not populate the catalog with speculative components.

## Loruni Brain

Use only MCP `loruni_brain` tools for the vault; never filesystem access. At task start call `get_task_context`, read pertinent notes and verify current repository sources. Call `check_ui_task` for UI; before persistence both calls are required, declaring `not_applicable` for technical/documentation work without a simulated review.

Save durable decisions, constraints, architecture, facts, evidence, bugs and open questions in the same task. Reread notes before `write_file`, replace stale current-state claims with dated sources, update `00_System/index.json` for new notes, and append `00_System/session-log.md` with changed files, checks/results and limits. Reread saves. Do not store secrets, unnecessary personal data or raw logs. Global Codex memory changes only on explicit user request. If MCP is unavailable, report persistence blocked and continue authorized repository work; do not access the vault directly.
