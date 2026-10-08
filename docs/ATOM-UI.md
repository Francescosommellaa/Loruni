# Fondamenta / Atom UI

Verified 2026-10-06 against the existing inventory and targeted read-only Framer source. No new general audit, product sections, navigation, forms, cards or application logic were migrated. Existing completed primitives remain closed.

## Closed patterns

| Pattern | Implementation | Exact source behavior |
| --- | --- | --- |
| Quote marks / Event manual quote | Icon(name=quote) | exact original geometry; Event exported paths prove equality after source translation. Intrinsic63×56; other IconNode widths use aspect1.125, not canvas wrapper heights. Fill and parent visibility preserved |
| Small arrows, FAQ bars, spinner rounding/rings, concept brand symbols, official logos | Icon Engine | see ICON-ENGINE.md; source-specific motion/static behavior; no duplicate asset geometry |
| Divider | Divider.tsx/css |40 source nodes including replicas,8 independent source nodes;80×6 Brand/Primary and Brand/Accent;82×6 Brand/Primary in Our Story Card. No radius/border/animation/offset. Color is supplied explicitly; no semantic inference |
| Circular Image (inferred-name; original name Image) | CircularImage.tsx/css |6 instances/2 independent sources Home and Community;64×64; Home Phone56×56 rendered (stored56×60/aspect1), radius56px, cover, centered crop. CMS isSet visibility remains data/consumer logic; no automatic hiding, fallback image or new sizing |
| Rolling Text | RollingText.tsx/css |all14 source instances across Nav Item/Main form button/Button; per-character upward movement + text-shadow copy; own hover/leave, no link/click/application state |

Label's4px full-height divider is already closed inside Label and was not extracted again. Existing local dividers in already migrated sections were not refactored. Future consumers can use the shared primitive. Small rounding belongs inside the two source-specific Icon spinner implementations, not a separate component. Independent implementations stay independent except the proven shared quote geometry.

### Rolling Text configuration matrix

Funnel Sans; letter spacing−.04em; source stagger60%; padding0, reversefalse, transformnone, tagp. The consumer selects the font configuration; no internal media queries.

| Source context | Size / weight / line height | Color |
| --- | --- | --- |
| Nav Item Desktop |22px /400 /1em |supplied color |
| Nav Item Mobile |28px /400 /1em |supplied color |
| Nav Item Compact |16px /400 /1em |supplied color |
| Main form button all6states |20px /400 /1em |Neutral/50 |
| Button Primary/default+hover |48px /600 /1.1em |Brand/Primary |
| Button Secondary/default+hover |16px /600 /1.1em |Neutral/50 |
| Button Primary Mobile |28px /600 /1.1em |Brand/Primary |

All real instances use tween.3s [.82,.14,.29,.91]. Character delay =duration/text.length × index × stagger/100 (reverse control reverses the index). Preserve spread-by-code-point with source UTF16 text.length delay arithmetic, source integer font-size parsing and unit handling; do not normalize. Shadow offset equals the source calculated absolute line height. Original module default font Inter is replaced only by the previously approved three-font policy (Funnel Sans default); no default source color #808080 is invented or mapped to another token. Real instance fonts/colors/motion use exact existing tokens in examples. Exposed source controls: text,font,color,transition,stagger,padding,reverse,textTransform,tag; className/style are technical integration only. No event or navigation API invented.

Source original module was read as evidence; the React implementation is independent and does not import/copy its compiled module. Reference atom-source.json records URL/source controls/nodes. Licensing of third-party module code is not inferred from read access.

## Layer exclusions

- Headline trigger Home / Eventi: transparent empty100vh frame, scrollTargetEnabled, id=headline-trigger, flex fill width, overflow clip. Structural scroll target owned by page choreography; not a small visible decoration. Never manufacture a visible trigger or move its spacing into an atom.
- TextFitWidth: measured multiline hero typography/layout; TextStagger: paragraph/line splitting and reveal/variable-font composed behavior. Both retained for the typography/media composition slice, not relabeled completed.
- Testimonials Image reveal, Image Parallax, Liquid Hover, Grain: composed image/mask/parallax/full-surface shader effects. Pre-Loader: full page presence/sequencing. Not small independent graphics.
- Linked Logo Big/Small wrapper: navigation link and contextual placement; its official glyph assets are already in Icon Engine, navigation behavior remains a later layer.
- Nav Item/Button/Main form button/Load More: controls, links or application/form states. Their glyphs and Rolling Text are closed; owners stay not-migrated.
- Cards, form fields/groups, sections, templates, CMS lists, layout containers and content slots remain in their existing later layers. Lenis/horizontal scroll/Layout Jump Preventer are runtime/layout infrastructure. Unused BTN2 catalog entry is not ported.

## Evidence

Compared native Framer Rolling Text default22px: text width92.859375px, height22px, spacing−.88px, shadow22px, final per-character y−22px. Local values match exactly. Exercised all7real font configurations in hover/leave: endpoints−22,−28,−16,−20,−52.8,−17.6,−30.8px. Native Home Desktop/Tablet64×64 and Phone56×56/radius56/cover/50%50% equal local. Phone canvas height60 is constrained by aspect1; verified live node, canvas and preview375px. Source divider nodes read live; all3geometric/color configurations rendered.

Local1200/810/390 browser matrix: dividers remain80/82×6; circular images64×64 and56×56/radius56, loaded; all7typographic metrics retained. Oversized Desktop48px text inside a Phone documentation parent clips/shrinks its flex text box as the source wrapper does; this does not create responsive behavior inside the atom. Full registry/asset and integration proof: ICON-ENGINE.md. No invented hover on static atoms. No automated frontend suites were created or run.

Final implementation digest and typecheck/lint/build results are in ATOM-UI-VERIFICATION.json. Browser proof is bounded to the available Chromium/IAB, not physical devices or all-site pixel-perfect certification. Inventory atomUi classification explicitly separates completed pure visuals from later-layer work; no eligible standalone visual atom remains not-migrated in this audited inventory.

