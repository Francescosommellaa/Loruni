# Vite / Framer bootstrap

Date: 2026-10-05, Europe/Rome.

## Authorization and scope

The user requests a Vite React TypeScript project, GSAP and Motion, initial project skills and a Framer inventory. This slice does not implement the Framer pages, invent a design system, publish Framer, select a CMS backend or deploy.

## Current evidence

The workspace contains only `.git`. Git tracks Logo assets, all already deleted in the working tree before this task. Preserve those deletions. Earlier Next.js/cinematic source and documentation are absent; Brain descriptions of that implementation are historical for this checkout. Node 24.13.1 and pnpm 11.24.0 are available. Framer project F3868vuk7YeE7pDEgpP6 is connected through session 3; global ComponentNode enumeration previously failed on an unresolved Icon set. Reuse the session and use bounded, read-only extraction with per-scope error records.

## Ownership

- Root Vite app owns React mounting. MotionConfig owns UI reduced-motion preference.
- GSAP and Motion are installed. No scroll runtime or smoothing is created in this slice.
- Future GSAP/ScrollTrigger owns scroll choreography; Motion owns discrete UI interactions on separate nodes/properties. One global scroll owner, one writer per animated property; no competing smoothing or component RAF loops.
- Framer remains the visual/content reference. Inventory artifacts are documentation inputs and are never imported into the browser bundle.
- Project skills live in `.agents/skills`, scoped to Loruni migration work.

## Deliverables

- [x] Vite React TS scaffold without template artwork, counter or an invented homepage.
- [x] Pinned GSAP, @gsap/react and Motion; strict TypeScript and useful scripts.
- [x] Read-only Framer capture script, selected source data and readable inventory with completeness/errors.
- [x] Skills for source inventory, faithful React port and animation ownership.
- [x] Current architecture, usage and verification documentation.
- [ ] Brain current-state update and session log, read back after persistence.

## Verification

Run pnpm lint, pnpm typecheck and pnpm build, frozen-lockfile installation, relevant Node tests for inventory processing if a processing module is introduced, and skill-creator quick validation. Start the app and check the bootstrap in browser at desktop/mobile when available. Capture a digest of relevant source/config/scripts/skills/inventory artifacts and preserve all pre-existing Logo deletions. An inventory is not a visual fidelity certification or proof that proprietary component source can be copied.

## Failure/restoration

Use a temporary Vite template and copy only new scaffold files into the workspace. Capture read failures per page/category; do not mutate the source project to fix extraction. Native HTML remains visible before JS; no initial content hiding or autoplay. Removing only files added in this slice restores the initial state; do not restore/delete Logo assets or alter Git history.

## Completion

Implementation/tooling/data digest `4df715dc5ec3dffdbf02e5b28dda72e93e63063494a190854f25591c10927de1`. Five Node tests, lint, typecheck, production build and frozen install pass. Three skills validate. IAB bootstrap smoke at1200×800 and390×844: rendered status, no overflow, captured error/warning list empty. Wrapper capture succeeds and wrong-session guard preserves snapshot. Two local component definitions unavailable due to Icon/Upload Logo; external internals, source visual/timing acceptance and CMS destination remain open. Exact evidence in docs/BOOTSTRAP-VERIFICATION.md. No commit/publish/deploy. Pre-existing deletions and independently appearing Logo/Favicon.ico left untouched. Brain persistence pending.
