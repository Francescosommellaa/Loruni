# LORUNI — Icon Engine

Verified 2026-10-06. Geometry is centralized in `src/components/Icon.registry.ts`; rendering and per-glyph visual motion in `Icon.tsx` / `Icon.css`. `IconName` is derived from the registry. No external icon dependency, Framer IDs or source captures are imported by the browser.

## Source coverage

Read all 33 inventory scopes live (31 complete trees; Logo and Testimonials Arrow serialization failures retained). Read original generated modules where needed; exportSVG recovered Button and Event quote geometry. Reference: `framer/icon-source.json` (read-only captures, modules, exact exports and SHA256 of all official SVGs). This is sequential source acquisition, not an immutable Framer revision.

## Registry

| Entry | Geometry / real configuration | Visual behavior |
| --- | --- | --- |
| arrow-forward | original 40 viewBox/path/mask, 40 or 28px; fill #FFFEF7 | −45° / 0°, tween .5s [.85,.05,.26,.96]; visibility supplied by parent |
| faq | exact 17×1.5 path in original 17×2 rendered bar frames; 24px glyph | outer −90°; fixed bar −90°, moving bar 0°/90°; tween .2s [.44,0,.56,1] |
| testimonial-arrow / testimonial-back / testimonial-forward | three original Material glyphs from the actual Framer module, 20px; exact rgba mask geometry and rgb(247,247,247) fallback | static glyph; TestimonialsArrow retains default/hover/pressed colors, opacity .8, spring .4/bounce .2 and callback |
| quote | original 63×56 SVG alpha mask and translate(1,1); Brand/Primary | static. Aspect ratio 1.125 with height auto; source wrappers 63×52.5,55×52.5,50×45.5 are NOT glyph heights |
| button-arrow | original 25.307 viewBox, 26px glyph at (1,1) inside 26×36 frame | 0° → 135°, tween .3s [.82,.14,.29,.91] |
| button-arrow-secondary | original 8px geometry inside 8×12 frame, Neutral/50 explicit binding | 0° → 45°, same tween |
| button-arrow-mobile | original 13.307 viewBox, 14px glyph at (1,1) inside 26×21 frame | static |
| brand-red-bull | exact original SVG path/viewBox16, translate(0,3.466), black, real 33px consumer | static |
| brand-aperol / brand-m2o / brand-king-esport / brand-asus-rog / brand-nvidia-geforce | original remote PNG alpha masks; 108×27 /95×33 /134×24 /88×21 /136×33, black, contain, clip | static; original alpha-mask behavior retained even where asset alpha gives solid silhouettes |
| brand-nvidia-geforce-image | original PNG,105×33, cover, grayscale100% | static |
| form-spinner | original ring SVG asset; rendered24×24 (aspect1 despite canvas height20), double mask, exact conic gradient and2px rounding | rotate360°, linear1s loop; no enter effect; overflow hidden |
| load-more-spinner | same original ring asset20×20; different gradient/single mask/rounding position | rotate360°, linear1s loop; opacity .001→1, tween .3s [.44,0,.56,1] |

18 UI/brand entries plus20 official SVG asset entries =38 typed registry entries. Brand references are concept references in Framer, not confirmed LORUNI partners.

### Official logos

Geometry authority is exclusively the20 files in `Logo/SVG/`. Imported directly as Vite `?url` assets; no manual path copy, recoloring or regeneration. All SHA256 checks equal the source manifests. The exact filenames/viewBoxes/digests are in `framer/icon-source.json` → `logoAssets`.

- `loruni-icon-{dark|light}-{circle|default|rounded}-{light|dark}`:6 files,280×280; dark background/light text, light background/dark text.
- `loruni-logo-{dark|light}-{circle|default|rounded}-{light|dark}`:6 files,440×280.
- `loruni-logo-transparent-none-{dark|light}`:2 files,440×280.
- `loruni-watermark-{dark|light}-{circle|default|rounded}-{light|dark}`:6 files,440×280.

The naming templates describe ONLY those existing combinations, not a Cartesian API. TypeScript derives the exact20 literal names. Original black/white fills prevail over Framer colors by explicit user instruction. No transparent symbol or watermark SVG exists; none created. The linked Logo wrapper/Big–Small navigation layout remains a later consumer task.

## API and ownership

`Icon` is a discriminated union: name, technical className/style, visible and optional accessible label. ArrowForward allows only size28/40 and rotation−45/0; FAQ receives the bar rotation target; Button arrows receive hovered; actual mask glyphs support width/height/fill; original logo/image assets support dimensions without recoloring. Omit label for decoration; informative glyphs receive role img / aria-label, assets use alt. No callbacks or carousel state inside Icon.

ArrowForward, FaqIcon, TestimonialsArrow retain their previous public APIs. FaqIcon owns Plus/Minus and source retained-rotation behavior; TestimonialsArrow owns hover/pressed/click; TestimonialsSection owns carousel state. Its private quote SVG now uses Icon. No consumer page, Button, form, navigation or carousel logic was migrated or refactored.

Animated properties have one Motion writer. Existing root MotionConfig reducedMotion=user is retained; spinners stop their loop under reduced motion. No RAF/scroll owner added. Static glyphs remain static. Source transition tokens reused without new aliases or tokens; original fallback fills are preserved rather than mapped to similar colors.

## Validation and limits

Original source geometry/exports/module paths compared; native preview showed quote55×48.875 with auto aspect sizing, Material20px glyphs and native SVG RedBull. Original canvas spinner states measured24×24/double mask vs20×20/single mask and matching gradients. RollingText/64px image comparisons are in ATOM-UI.md.

Local browser at1200/810/390: registry glyph dimensions, all20 SVG asset loads, auto quote heights63→56,55→48.875,50→44.4375; Testimonials phone quote absent. Exercised Button0/135° and0/45° visual controls, ArrowForward configurations, FAQ callback/Plus–Minus retained rotation, three Testimonials callback glyphs/keyboard activation and hover feedback. Existing pressed-state implementation is retained, not rewritten. Product page integration, physical touch, other browser engines, live OS reduced-motion toggling and performance certification are outside this evidence.

Second scan: all product `<svg>`/path/mask geometry is in Icon / registry. Two documentation-only copy/search SVGs in CatalogTools.tsx remain intentionally separate; they are not Framer site icons. No unresolved site glyph geometry remains. External BTN2 is unused; TextFit foreignObject/SVG, media raster wrappers and ©/Menu text are not icon assets.

