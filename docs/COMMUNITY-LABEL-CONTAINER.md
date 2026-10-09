# Community Label Container — closed 2026-10-09

Only /esperienza node adB9Vb46p and its Desktop/Tablet/Phone replicas. This is the Community headline wrapper, not the category label container or other identically named frames. Current source captured read-only in docs/framer/community-label-container-source.json.

Absorbed into the existing ContentHeadline labelled composition: one ordinary div.loruni-content-headline__label containing the canonical Label, with title and color received from the parent. Existing real catalog example passes Community and Neutral/50. No LabelContainer component, duplicate typography, new catalog entry, section markup or interaction.

Wrapper uses flex column, justify center, align start, min-width0, width100%, auto height and existing overflow clip. Explicit width100% fixes Phone fill: previously the flex-start parent made it hug the79.609375px Label instead of filling its assigned area. Source wrapper widths are336.328125/233/351 at1200/810/390; documentation parents allocate different widths, so comparison verifies fill responsibility independently of those page dimensions. No wrapper breakpoint or fixed pixel width. Source gap80 has no effect with one child and is omitted. The existing clipping boundary is retained; the current child lies entirely inside it, so there is no visible cropping or reveal effect.

Label itself is unchanged:79.609375×16px, text71.609375×13.203125px, Funnel Sans400/12px/13.2px, Neutral/50, at all three viewports. Internal divider belongs exclusively to Label. Wrapper has one child, no focusable/interactive elements or motion/state/listeners; reduced motion needs no separate path.

Title, grid, parent responsive selection, page padding, section semantics, Community collections/cards remain outside this node's responsibility. Already migrated ContentHeadline is reused, not remigrated or newly certified as a full page section. Inventory totals and37runtime/catalog entries unchanged.

Proof: COMMUNITY-LABEL-CONTAINER-VERIFICATION.json. Manual native preview and local catalog at1200/810/390, source containment, all Label geometry/typography and Phone fill inspected. Typecheck/lint/build executed; no automated frontend suite or cross-engine/device/screenreader certification. Snapshot source and metrics stay outside browser imports; preceding dirty work retained.
