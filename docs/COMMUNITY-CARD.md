# Community Card

2026-10-06. Preview of a Community moment. Legacy source `Cards/Blog Card`, Framer `f8_TXnRzt`; no blog/article/post model or compatibility component. All twelve instances bind Community's photography, moment title and short description. Read-only capture: `docs/framer/community-card-source.json`; twelve current-instance screenshots: `community-card-screenshots.json`.

```tsx
<CommunityCard image="https://…" title="Il tavolo si allunga"
  subtitle="Una sedia si sposta. Il discorso passa al tavolo accanto." h3={false} />
```

API: `image?: string | {src:string;srcSet?:string;alt?:string}`, `title?:string`, `subtitle?:string`, `h3?:boolean` (default true). Source defaults retained. Missing/empty image uses the native hatch. Technical className/style allow parent sizing. Parent owns anchors, CMS bindings, collection limits/filter/pagination and visibility. No page logic or mobile variant.

One heading subtree selects H3 for true, H2 for false. Both use canonical Headline28 (28/24/20px at1200/810/small), Neutral50; subtitle uses Text20 (20px), Neutral300. Maximum measures340/516px, gaps24/16px, pre-wrap/break-word and source text balance. CSS clip on card/text, hidden on media; cover and centered crop. No new tokens or font overrides.

Native browser module uses **516/440 =1.1727272727272726**, height auto; editor aspect1.17 is rounded. CSS derives the exact ratio from existing width516/height440 primitives. Card width100%, no max516 cap: intrinsic sizing belongs to the parent. Canvas widths516/361/366 yield image heights440/307.828125/312.078125. Native browser scrollbar occupies15px here, producing parent widths508.5/353.5/351. Both profiles verified separately.

Four consumer groups use gutters80/40/12, two columns/gap8 on Desktop/Tablet and one on Phone. Esperienza/Vieni Phone limit3, Desktop/Tablet limit4. Community uses H2/pagination12; detail's other moments use H3, limit4 and exclusion of current item. These are future consumer responsibilities. Twelve instances mean four contexts ×three breakpoints.

Hover owns only media transform: scale1→1.1, tween0.5s/delay0/ease[.85,.05,.26,.96], including return. Reuses exact existing transition token/scale primitives; no duplicate motion helper, RAF, scroll owner, focus/pressed state or navigation. Live reduced-motion helper integrates root MotionConfig/OS preference; policy always yields scale1. CircularImage's avatar contract cannot represent this rectangular media.

Real examples, H2/H3 controls, four current CMS photos and native default are in /design-system#ds-component-community-card. Example content is catalog data, not a new CMS model. Empty-image hatch is source media presentation, not an Icon Engine glyph.

Final hashes/checks/comparisons: [COMMUNITY-CARD-VERIFICATION.json](COMMUNITY-CARD-VERIFICATION.json). Published Framer preview serves older photographs; current editor canvas and native on-demand screenshots confirm the photos used locally. No source/publish/consumer/section/next-component migration. No observed visual differences in compared configurations; timing configuration exact without synchronized frame-by-frame or cross-engine/device claims.
