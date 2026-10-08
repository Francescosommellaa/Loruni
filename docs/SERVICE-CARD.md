# Service Card — ONE TOUCH CLOSED

Verified 2026-10-08 in the current Vite checkout. Framer Cards/Service card (`MbD5vvr42`) was read without edits: both frames, controls, all twelve instances, Services Section's three frames/variables/slot and three Home overrides/ancestors. Reference captures stay outside browser imports. See [executed evidence](SERVICE-CARD-VERIFICATION.json).

## Contract

`ServiceCard({ image?, title?, text?, number?, labels?, price?, id?, className?, style? })`.

- `image` is the shared ImageFillImage string or descriptor; caller-provided srcSet/sizes/alt/crop/intrinsic dimensions/loading pass through the existing media engine.
- Original title/text/number/price/image defaults are retained. `labels` defaults to an empty list; the source-default specimen supplies Label1–4 explicitly. The first six slots accept string/null/undefined; omitted/null/empty labels produce no node or gap. Intentional whitespace is preserved. No labels means no container.
- `price` is copy, not money. Empty/null removes the entire price group and its eyebrow. Undefined uses the source default Insieme. Number remains a string; the shared Headline/180 preset supplies 128/84/64px at Desktop/Tablet/Phone, with wrapper opacity0.3.
- No public variant, href, click, hover or visibility state. `id` is a normal parent-supplied DOM scroll target; className/style allow allocations. Content/CMS resolution, IDs1–4, visibility, sticky/Lenis/horizontal scroll and navigation belong to Services Section.

## Source layout and responsive mapping

One tree: media → content(headline/title+Divider, labels, description, bottom(price+number)). ImageParallax, CategoryLabel, Divider and the canonical typography/color/geometry exports are reused unchanged.

The actual Home Desktop≥1200 and Tablet810–1199.98 both select the Section Desktop composition; Phone≤809.98 selects Mobile. CSS uses that verified boundary; the card's media configuration changes on matchMedia's discrete change event. No canvas coordinate or runtime width1912/390 is assigned by the card. The Desktop slot allocates auto width (native1912) × fill height1013; these dimensions are documentary parent fixtures only.

Desktop: row, overflowclip, media600×fill; content fill, padding64px128px/gap52, headlinegap36, Divider80×6 BrandPrimary; label container absolute right128/top74, width/max320, wrap/end/gap2; description Text/32P/max672/opacity0.7; bottom fills spare height/end/end/gap8. Price uses Headline/16 opacity0.7, gap4, Headline/32. Mobile: column/autoh, imagefill×640; contentpad12/gap32, headlinegap16; labels relative/fill/start/wrap/gap2; bottomautoh. Typography follows the existing global presets, including title60/44/32 and description32/28/20.

Runtime source colors: content Neutral950, copy Neutral50, Divider BrandPrimary, **pills Neutral50 background/Neutral950 text**. These verified values supersede the prompt's reversed pill-color description. The source spring-duration0.4/bounce0.2/delay0 is inert metadata without a card gesture/state; no speculative animation was added.

## Media/motion ownership

ImageParallax receives X−50/Y0 on Desktop+Tablet, X0/Y50 on Phone. Native cover/center is retained. X−50 uses proportional horizontal overscan150%/inset−25%; Y50 uses vertical150%/inset−25%, with no arbitrary scale. The shared GSAP ticker samples horizontally moving parents, batches geometry reads before transform writes and owns cleanup/resize/scroll progress. ServiceCard adds no listener/RAF/state work per scroll frame. Its only subscription is breakpoint change with cleanup.

The shared live reduced policy neutralizes parallax while retaining overscan/crop/layout. Dynamic/empty/restored images and unmount/remount reuse existing ImageParallax registration disposal. No new motion or accessibility system.

## Consumers and evidence limits

All12source instances: four hidden Mobile copies in the primary Desktop frame, four variable-visible Mobile replicas, four Desktop cards in the detached horizontal slot. Four Home overrides Al tavolo/Gioco/Eventi/Il bar are resolved in documentary fixtures, not hardcoded into the card. Desktop label counts6/6/5/4; Phone6/6/5/5. Source Phone bar label5 is bound to Gioco label5, `rivincite`; this binding quirk is preserved only by the documentary consumer.

Native isolated Desktop/Tablet and the four real Home Phone renderings match measured client/fractional dimensions, spacing, text, wrapping, colors and typography. Screenshots were inspected; X−50's native overscan and transform were compared directly. Browser controls exercised label counts0–6, missing price, long/multiline dynamic copy, static/descriptor/changed/empty media, parent700/1013/auto heights, horizontal parent offsets, eight viewport widths across810/1200, reduced motion and disposal. No internal interactive elements or click/zoom behavior.

**Native Services Section Desktop/Tablet currently renders an empty horizontal container in preview**, so its real scroll transport/visible-card choreography cannot be visually certified here. That parent remains pending. This closure certifies the card and available native comparisons, not a migrated product section. No synchronized pixel-diff, physical touch, cross-engine, screen-reader or frame-rate claim; no automated frontend suites per project instructions.

Catalog: `/design-system#ds-component-service-card` contains defaults, four source contents and controls. `/design-system?fixture=service-card` exposes isolated parent allocation for comparisons.
