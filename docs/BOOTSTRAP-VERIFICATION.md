# Bootstrap verification

Date: 2026-10-05, Europe/Rome. Working tree based on HEAD `5d0f7a69cc4ab355e83d093ed07d69d99cd57cf1`; no commit, push, deploy or Framer mutation.

## Checked inputs

SHA256: `4df715dc5ec3dffdbf02e5b28dda72e93e63063494a190854f25591c10927de1`.

Method: sorted `relative-path:SHA256(file bytes)` records joined with LF, then SHA256 of that string. 21 files: all files under `src`, `scripts`, `tests`, `.agents/skills`; package.json, pnpm-lock.yaml, three tsconfig files, vite.config.ts, .oxlintrc.json, index.html, source-inventory.json and migration-inventory.json. Documentation/evidence and user Logo assets are outside this digest to avoid self-reference and include only this slice's implementation/tooling/data inputs.

## Executed checks

| Check | Result |
| --- | --- |
| `pnpm install --frozen-lockfile` | exit 0, lockfile accepted |
| `pnpm test` | exit 0, 5 inventory traversal/coverage/deduplication/failure tests pass |
| `pnpm lint` | exit 0, Oxlint on src/scripts/tests/Vite config |
| `pnpm typecheck` | exit 0, strict TypeScript project build check |
| `pnpm build` | exit 0, Vite production build |
| skill-creator `quick_validate.py` | all 3 project skills valid |
| Framer capture wrapper, session 3 | exit 0, 8 pages, 24 local components, 4 scoped errors covering 2 unreadable definitions |
| Capture wrapper, unavailable session 0 | rejected as expected; existing source snapshot SHA256 unchanged |
| `pnpm inventory:report` | exit 0, derived JSON and Markdown generated |
| `git diff --check` | exit 0; new generated files are untracked and reviewed separately |

Build output: HTML 0.56 kB, CSS 0.26 kB (0.20 kB gzip), JS 220.99 kB (69.21 kB gzip). This is the bootstrap payload, not a site performance budget/CWV result.

Pinned: Vite 8.3.2, React/React DOM 19.3.0, TypeScript 6.0.3, GSAP 3.15.0, @gsap/react 2.1.2, Motion 14.0.0; Node 24.13.1 and pnpm 11.24.0 used. Toolchain peer resolution/install/build succeeded; GSAP is installed but no GSAP scene is active.

## Executed browser smoke check

Codex in-app browser, Vite dev server `http://127.0.0.1:5173/`, started with `pnpm dev --port 5173 --strictPort`:

- Desktop override 1200×800: title `Loruni — sviluppo`, main heading `Loruni` and bootstrap status render; document scrollWidth does not exceed viewport width.
- Mobile viewport override 390×844: same content renders, no horizontal overflow; screenshot inspected.
- Captured browser warning/error log query returns an empty list. Viewport override reset after inspection.

This is a smoke check of the initial development status page. It is not device hardware, Framer screenshot equivalence, responsive fidelity of migrated pages, a screen-reader audit or GSAP/Motion lifecycle verification for effects that do not yet exist. No-JS displays an explicit development fallback; production semantic content is future page work.

## Framer source limits

Current capture starts `2026-10-05T13:31:57.925Z`; acquisition is a sequence of reads rather than an atomic frozen project snapshot. The project can change between/after reads; re-read the affected scope before implementing.

Eight page structures, one template, 22 of 24 local component definitions, 19 color styles, 11 text styles, 2 CMS schemas/counts and 2 code-file provenance records are acquired. Latest derived inventory has 17 distinct media references and 240 effect/transition references. External catalog has 9 entries; source internals/rights and preview behavior are unverified.

`Testimonials Arrow` and `Logo` serialization fails on unresolved icon variables `Icon` and `Upload Logo`. Both full and shallow attempts are recorded. CMS records (5 Eventi, 4 Community) were counted but not exported. Media not downloaded; code sources read for hashes/imports/exports but not copied. No preview motion, timing, forms, source navigation or visual acceptance executed.

All pre-existing Logo deletions were left untouched. A new untracked `Logo/Favicon.ico` appeared during this task from outside these edits and was also left untouched.
