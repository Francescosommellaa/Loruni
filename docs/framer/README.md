# Framer inventory maintenance

Source: https://framer.com/projects/Loruni--F3868vuk7YeE7pDEgpP6

Read [INVENTORY.md](INVENTORY.md) first. `source-inventory.json` records captured source trees/styles, catalog, CMS schema/counts and code provenance. `migration-inventory.json` derives node-level media, links, copy, component use and effect references. These dated files are development inputs, not source code imports or proof of visual fidelity.

## Capture (Windows PowerShell, from repository root)

Load the installed Framer skill and generated project task map, check `npx @framer/agent@latest session list`, and reuse the active session for this conversation. Session 3 was used for the initial capture; it may expire. Do not replace it automatically without verifying state.

```powershell
.\scripts\framer\capture-inventory.ps1 -Session 3
pnpm inventory:report
```

The capture script calls only read APIs. The wrapper validates JSON and project identity before saving it locally; the CLI VM's filesystem is separate from the repository. Per-scope failures are retained. A failed category is unknown, not empty; truncated trees require a narrower follow-up. Targeted catalog reads work around the previous global ComponentNode icon failure, without changing the Framer source.

The capture reads code to record hashes/imports/exports; it does not copy those files. It reads CMS items only to count records and exports no record content. Media references do not attest asset rights/download completeness. Do not commit account metadata, credentials, form submissions or raw tool logs.

## Reproducibility

Run `pnpm inventory:report` to regenerate the derived JSON/Markdown from the source JSON without a live connection. Run `pnpm test` for traversal/coverage checks. Actual previews/screenshots, interaction timing, all external component internals, source defects, content destination and visual acceptance remain follow-up work.
