# Project Card — ONE TOUCH

Verified 2026-10-08 in A:/Loruni. Framer `Cards/Project Card` (`mIHy1XHUz`) was inspected read-only: complete six-frame tree, controls, all21 instance/parent/ancestor configurations and five current Eventi CMS items. Final reread confirms the tree and all21 instance attributes unchanged. Reference captures remain outside browser imports.

## Contract

`ProjectCard({ mode?: 'main' | 'inner', title?, text?, label1?: string | null, label2?: string | null, label3?: string | null, year?, image?: ImageFillImage, className?, style? })`.

Mode defaults to main. Default title/text/year/image retain the source values. Missing, null or empty labels render no row; whitespace is preserved. The source default-label specimen passes Eventi / Community / Da annunciare explicitly so optional API labels stay genuinely optional.

The card has no href, tabindex, button, link or CMS/scroll owner. Its parent supplies navigation, resolved content, responsive image descriptors and allocated dimensions. `style={{height:'100%'}}` fills a definite parent; `style={{height:'100vh'}}` is a parent allocation. Default auto Inner derives its desktop height from the source ratio and uses the source native760px on Phone. Width always fills its parent, without canvas coordinates or source1040/555/390px widths in product CSS.

## Four public variants, two private gestures

| Mode | Desktop / Tablet | Phone below810px |
| --- | --- | --- |
| main | Main page Desktop; root default585px/padding40px0; overlay40px; text row/gap52/max708; title/year Headline76; description Text20; arrow40 | Main Mobile; root default760px/padding64px0 40px; overlay20px; text column/gap12; title/year Headline76; description Text20; no arrow DOM |
| inner | Inner page Desktop; auto16/9; overlay24px; title/year Headline28; description absent; arrow28 | Inner page mobile; native760px/padding0; overlay20px; title/year Headline76; description Text20; no arrow DOM |

Headline76 means60/44/32px at Desktop/Tablet/Phone; Headline28 means28/24px for the two desktop variants. Label typography is Headline16; label gap4, year opacity.3, source Neutral50 overrides the Text20 default color. The source description slot adds8px top padding on Main and both mobile modes.

Inner Desktop retains the native empty description wrapper with min-height57px. Its text group remains min-content/gap52 with auto-sized title, producing the same original overflow and vertical alignment. Removing that wrapper changes the visual. Serialized space-between gaps1486/1000/100 are ignored by Framer's actual CSS and are not copied. Source ratio1.78 is rounded; live runtime is exactly16/9. The serializer's960×585 image box and variant canvas coordinates do not describe browser media bounds.

Hover on Desktop/Tablet rotates the existing ArrowForward from−45° to0°. Only Inner also scales its media1→1.1, centered inside root clipping. Enter/leave use the existing projectCardMainPageDesktopTransition: tween.5s, delay0, cubic[.85,.05,.26,.96]. Full source frame comparison shows only those changes. Private hover frames are not public API variants. No tap/pressed/focus scale, fade, gradient or mobile hover is added.

## Media, ownership and lifecycle

ImageFill is the sole image renderer: absolute fill, cover/center, caller-provided srcSet/sizes/alt/intrinsic dimensions/loading/position. Original images and three observed512/1024/1536 candidates are used by semantic catalog fixtures. No runtime CDN generator, extra overlay, arbitrary scale or duplicate image system. Native first Main images are eager; offscreen Inner media are lazy; the documentary parent passes this policy.

React updates only discrete hover/breakpoint state. Motion alone writes the media scale; existing ArrowForward/Icon alone writes rotation using the same transition. There is no scroll listener, component RAF, measurement observer, frame state, second scroll clock or permanent will-change. A matchMedia change subscription is disposed on unmount; breakpoint/reduced changes terminate the previous hover gesture. Shared useReducedMotionPreference keeps scale1 and rotation−45° with readable content and unchanged layout/crop.

## Consumers and verification

All21 prototypes: Home12 (four offsets ×three breakpoints), Eventi6 (Main + repeated Inner ×three), Event detail3 (related Inner ×three). Five current CMS records are resolved without importing reference IDs. Home sticky/scroll transforms, collection offsets, Eventi and Related grids, route links and CMS backend remain parent responsibilities and pending product work.

The native preview returns default label1 `Eventi` on Tablet/Phone while the serialized binding still references its CMS field. Desktop uses the actual category. This is recorded as a source consumer/runtime discrepancy, reproduced only by the documentary parent; the card always honors the label received.

The catalog includes both modes, current Home/Eventi/Related collections, optional labels, static/responsive/dynamic/empty images, parent auto/fill/100vh, live reduced motion and disposal controls. Isolated comparison: `/design-system?fixture=project-card`, with mode/event/width/height parameters; event−1 selects the original default-content specimen. Catalog consumer layout is documentary and does not migrate product pages.

Executed source/local dimensions, typography, text/wrapping, crop parameters and responsive source comparisons; native screenshots and local screenshots were visually inspected. Hover endpoints, reversal, reduced policy, image replacement, missing labels, viewport thresholds and mount/unmount exercised. Precise executed matrix/digests/gates and limitations: [PROJECT-CARD-VERIFICATION.json](PROJECT-CARD-VERIFICATION.json).

No synchronized raster pixel-diff, physical touch device, assistive-technology session, cross-engine or frame-time benchmark is claimed. Phone mouse/pointer interaction was exercised and stays static; physical touch was not available in this browser tool. Source has no mobile gesture variant. Source auto title overflow/clipping is preserved rather than silently redesigned.

PROJECT CARD — CLOSED
