---
name: loruni-react-port
description: Port an authorized Loruni Framer page or component faithfully into the Vite React TypeScript app, using verified source styles, content, responsive states and visual comparison.
---

# Loruni React port

Read the current `AGENTS.md`, `docs/ARCHITECTURE.md`, the requested page in `docs/framer/INVENTORY.md`, and its source snapshot. Refresh changed nodes through Framer before editing. The initial bootstrap is not an approved homepage.

## Fidelity boundary

- Preserve exact copy, section order, imagery, colors, typography, spacing, crop, borders, responsive breakpoints and interaction states from the current source.
- Build semantic React UI. Never render a whole-page screenshot as the implementation, invent replacement artwork, or remove difficult sections to obtain a superficial match.
- Record inaccessible source behavior or unresolved licensing/content destinations as an open decision or blocker, with the specific scope. Do not substitute a guess and mark it verified.
- Resolve Framer replica inheritance and template-owned layout before translating CSS. A missing value on a replica does not imply zero/default.
- Native anchors/buttons/forms must preserve intent and useful keyboard behavior. CMS routes require a real data source and host routing strategy; neither is installed by the bootstrap.

## Structure

- Keep `src/app/App.tsx` as composition. Put real pages, reusable UI, content and animation data in focused modules as they acquire consumers.
- Extract TypeScript tokens and CSS custom properties from verified, used styles. Preserve a mapping to Framer token IDs. Do not turn all one-off pixel values into global tokens or install a speculative design-system package.
- Keep reference JSON and audit files outside runtime imports. Record asset provenance before committing assets. Preserve existing user changes.
- Apply `loruni-motion-ownership` when adding animation; use the existing dependencies before introducing another library.

## Acceptance

Compare source and implementation screenshots at matching desktop/tablet/phone widths, then exercise navigation, hover/touch, menu, forms, transitions and scroll in both directions where applicable. Record mismatches, fixes and unverified states. Run the repository's affected checks (`pnpm test`, lint, typecheck, build) and identify the final working-tree digest. A clean console/build is not a 1:1 or performance proof.
