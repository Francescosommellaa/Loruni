---
name: loruni-framer-inventory
description: Read and refresh the Loruni Framer migration inventory, tracing pages, breakpoints, styles, components, media, CMS and animation evidence without changing the source project.
---

# Loruni Framer inventory

Use this skill for the source audit before porting a page or updating migration evidence.

- Project: `https://framer.com/projects/Loruni--F3868vuk7YeE7pDEgpP6`.
- Read `docs/framer/INVENTORY.md` and the relevant entries in `docs/framer/source-inventory.json`. These are dated snapshots, not current project authority.
- Use the installed `framer` skill and its generated project task map for CLI access. Check active sessions and reuse the conversation's session. Do not create a project/session replacement solely because a read fails.
- Run `scripts/framer/export-inventory.js` through the Framer VM from the repository root, then `pnpm inventory:report`. The script uses read-only Framer APIs. The command is documented in `docs/framer/README.md`.
- Preserve scope IDs and source property values. Record each page's actual breakpoint metadata, shared template, CMS bindings, component variants, asset URLs/crop/alt and effect settings. Names alone do not prove rendering or behavior.
- A global component-tree query previously failed on the variable `Icon`. Prefer the component catalog and targeted serialization. Keep per-scope errors and truncated nodes visible in the report. A partial tree never counts as complete.
- Separate component catalog entries from instances actually used by pages/templates. External components may expose controls and appearance without redistributable source.
- Keep code-file hashes/imports/exports as provenance. A successful source read is not license permission. Do not copy external component code or download large assets just to populate an inventory.
- Export CMS schema/counts for planning; choose the content destination explicitly during the migration slice. Do not store account metadata, credentials, analytics, form submissions or unrelated personal data.
- Observed source defects, leftover template copy and missing media stay identified as observations. They are not permission to silently change the source design.

For migration acceptance, supplement structure with screenshots at matching viewport sizes and exercised interaction states. API reads alone do not certify fidelity, responsive behavior or timing.
