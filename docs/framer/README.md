# Framer inventory maintenance

Source: https://framer.com/projects/Loruni--F3868vuk7YeE7pDEgpP6

Read [INVENTORY.md](INVENTORY.md) first. `source-inventory.json` records captured source trees/styles, catalog, CMS schema/counts and code provenance. `migration-inventory.json` derives node-level media, links, copy, component use and effect references. These dated files are development inputs, not source code imports or proof of visual fidelity.

## Capture (Windows PowerShell, from repository root)

The 2026-10-06 named-style capture is [token-source.json](token-source.json), separate from the earlier full inventory. It includes full text style attributes, serialized canonical presets/intervals, Link, Home breakpoint metadata and font provenance. See [token import](../TOKENS.md). Refresh affected styles through the current Framer session before regenerating; the full inventory exporter intentionally has less text-style detail.

Load the installed Framer skill and generated project task map, check `npx @framer/agent@latest session list`, and reuse the active session for this conversation. Session 3 was used for the initial capture; it may expire. Do not replace it automatically without verifying state.

```powershell
.\scripts\framer\capture-inventory.ps1 -Session 3
pnpm inventory:report
```

The capture script calls only read APIs. The wrapper validates JSON and project identity before saving it locally; the CLI VM's filesystem is separate from the repository. Per-scope failures are retained. A failed category is unknown, not empty; truncated trees require a narrower follow-up. Targeted catalog reads work around the previous global ComponentNode icon failure, without changing the Framer source.

The capture reads code to record hashes/imports/exports; it does not copy those files. It reads CMS items only to count records and exports no record content. Media references do not attest asset rights/download completeness. Do not commit account metadata, credentials, form submissions or raw tool logs.

## Geometry audit

geometry-source.json is the 2026-10-06 read-only page/template/component geometry capture. capture-geometry.js runs in the verified Framer CLI VM; preserve coverage errors and save only selected geometric attributes. pnpm tokens:generate derives geometry.ts/css and geometry-audit.json alongside named tokens. See [LAYOUT-TOKENS.md](../LAYOUT-TOKENS.md).

## Reproducibility

Run `pnpm inventory:report` to regenerate the derived JSON/Markdown from the source JSON without a live connection. Existing traversal checks are preserved, but the user now directs browser inspection and build only; do not add or run test suites for this frontend work. Actual previews/screenshots, interaction timing, all external component internals, source defects, content destination and visual acceptance remain follow-up work.
