# Button — Nav/Button

2026-10-06. Authorized ONE TOUCH port of Framer `dLxvGaGxG`. Only this link control is migrated in this task. Live source/controls and all nine instances are captured in `docs/framer/button-source.json` (reference only, outside browser imports).

```tsx
<Button variant="Primary" text="VEDI LE SERATE" link="/eventi" />
<Button variant="Primary Mobile" text="TORNA A LORUNI" link="/" />
<Button variant="Secondary" text={event.actionText} link={event.actionHref} newTab={false} />
```

API: `variant?: 'Primary' | 'Secondary' | 'Primary Mobile'`, `text?: string`, `link?: string`, `newTab?: boolean`; technical `className`/`style`. Defaults Primary, VEDI LE SERATE, no link, false. Consumer resolves internal/external/CMS URLs and chooses the responsive configuration. No route/CMS coupling, offsets, visibility conditions, callbacks, disabled/loading variants or public hover variants.

| Configuration | Text | Gap | Arrow frame | Native SVG box | Hover rotation |
| --- | --- | --- | --- | --- | --- |
| Primary | Funnel Sans 600, 48px | 12px | 26×36 | 26×26 | 135° |
| Secondary | Funnel Sans 600, 16px | 4px | 8×12 | 8×8 | 45° |
| Primary Mobile | Funnel Sans 600, 28px | 8px | 26×21 | 14×14 | none |

All text uses −0.04em tracking, 1.1em line height, padding0, transform none, reversefalse, stagger60. Layout is horizontal, aligned center, intrinsic width/height. Native vector geometry is approximately25.31/8/13.31 inside the existing Icon frames, including the original1px inset where present. Mobile is a distinct configuration, never scaled Primary.

**Verified colors:** current live source and preview use Brand/Primary coral rgb(255,85,56) for Primary/Mobile, Neutral/50 rgb(244,240,232) for Secondary. These match existing generated component tokens and Icon registry. The request's Accent/dark descriptions are different names/values; fidelity follows the verified source.

Button reuses RollingText and the Icon Engine (`button-arrow`, `button-arrow-secondary`, `button-arrow-mobile`, same original vector provenance). No SVG, glyph or RollingText engine is duplicated. React owns anchor/hover state, Icon owns arrow transform, RollingText independently owns text hover. Hovering only the arrow rotates it without starting the text roll, as observed natively. Both use the existing tween0.3s, delay0, ease[.82,.14,.29,.91]; rolling per-character delay is owned by RollingText. Hover leave reverses the same endpoints. Mobile has text roll and a static arrow. No native pressed/tap-specific graphic was found in the source or completed click observation; no scale/opacity/pressed design is added. Native link activation handles click/Enter. Motion hover filtering keeps synthetic touch events out of the arrow hover owner; existing RollingText mouse behavior is preserved.

With link supplied, output is a real anchor. New tab supplies target_blank, rel noopener noreferrer and a visually hidden accessible description. aria-label preserves the full unsplit text as the link name; decoration stays aria-hidden. Missing link preserves a source visual anchor without href, explicit tabIndex or click handler. Keyboard focus uses the existing global focus-visible outline2px/currentColor/offset4px, deliberately improving on Framer's suppressed outline without introducing a product focus design. No hover animation is synthesized on keyboard focus. Root MotionConfig/user policy remains the transform owner for reduced motion; no new scheduler/scroll runtime.

Home and404 use Primary on Desktop/Tablet and Primary Mobile on Phone; event details use Secondary at every breakpoint. All nine actual instances were inspected, including replica identity and CMS text/link bindings. Live event preview resolves INFO SULLA SERATA → /vieni-a-trovarci. Parent-specific absolute coordinates and `isSet(text)` visibility remain consumer concerns.

The catalog at `/design-system#ds-component-button` contains fifteen real React examples: three configurations, nine consumer configurations, editable variant/text/link/newTab, an external new-tab anchor and missing link. Documentation overflow/padding belongs to wrappers, not Button.

Evidence and final input hashes: [BUTTON-VERIFICATION.json](BUTTON-VERIFICATION.json). Native component preview and Home/404/event at1200/810/390 plus local1440/810/390 match observed text/layout/glyph bounds. Internal keyboard navigation and new-tab creation were exercised. Focus-visible2px and accessible names/descriptions checked. No browser console warnings/errors observed. No frontend automated suite added or run. Timing is configuration/endpoint verified, without synchronized frame comparison. Physical touch, held pointer-down, OS reduced-motion toggling and cross-browser/device coverage were unavailable in this browser tool; no hardware or global WCAG/pixel-diff certification is claimed. Product routes/CMS are not yet migrated, so local navigation verifies native anchor behavior and current app destinations, not future page content. Source snapshots under docs/framer remain locally ignored under the existing repository policy.

No observed visual difference in compared Button configurations. Other controls and page positioning remain outside this task.

Closure scope:21 Button/primitive/token/catalog/config inputs remain unchanged after the84input build snapshot. Later concurrent StatRow.css and ContentFormAtomExamples.css changes are listed separately in the verification record; they are outside this Button task.
