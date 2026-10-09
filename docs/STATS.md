# Stats /esperienza — closed2026-10-09

Only Stats root pattern-BDsGjDpwB and current comparison of the four previously closed StatRow records. Fresh Framer tree captures all3breakpoints; actual preview verifies current copy and inline typography. No page, counter, hover or timeline added.

`Stats` receives required `items: readonly StatsItem[]` and ordinary section props/ref/id/style. `StatsItem` has string `value`/`label`, optional `id` for stable key, optional `labelStyle: StatRowProps['caption']` (`compact`/`display`). The default is the canonical row's display caption. No numeric parsing or runtime copy defaults. One existing StatRow maps every item; no new StatItem renderer or second typography system.

Section width100%/auto height/BrandAccent. At810 and above flex row/nowrap/space-between/center/padding24 80; native computed gapnormal, metadata354 inactive. Phone grid two50px-minimum fractional columns, gap60 8, padding60 12. Native items hug their content at grid cell origins, with their internal value/label stack centered and gap8. Values48px at all viewports; no invented mobile font reduction.

The first label really uses FunnelSans600/12/18 and width122; the other three FunnelDisplay600/16/18. Preserved through the existing compact caption, no alternate component. Value typography is FunnelDisplay600/48/48/−0.05em, uppercase/Neutral950. Existing spacing/padding/font/BrandAccent/Neutral950 tokens reused unchanged; no preset exactly matches these inline source configurations, so StatRow's existing source tokens remain canonical.

Copy is01—Al tavolo,02—Gioco,03—Eventi,∞—Un’altra, poi vediamo at every breakpoint. Names350+/20+/290+/25+/Completed projects/Years in the game/Happy clients/Countries served are layer metadata only. Existing documentary row and composite examples now share one confirmed dataset; no copy in the global component.

Source Phone detail: fourth label remains a single192.21875px line. In390px preview with375px content/vertical scrollbar, cell width171.5 and x191.5 cause final8.71875px to extend beyond the section. Framer's page ancestor clips it. The composition preserves the observed intrinsic sizing; documentary comparison reproduces ancestor clipping separately. No invented wrapping, grid recentering or mobile horizontal track. This is an existing source clipping defect, not a new layout difference.

Proof [STATS-VERIFICATION.json](STATS-VERIFICATION.json):156numeric fields across1200/810/390 agree, visible typography/copy agree, source/native screenshots captured at all3sizes.809→grid and810→flex boundary verified; values remain48. String0007 and dynamic long caption preserved; section has no interactive descendants. Three real catalog examples; StatRow unchanged. No state/effects/listeners/animation engine in Stats, so no additional reduced-motion path is needed.

Build/typecheck/lint/tokens/diff gates and stable final input manifest are recorded in proof. No frontend automated suite; no physical-device/cross-engine/screenreader certification. Source read-only, unrelated dirty work retained. Parent Color container and Esperienza page remain pending.
