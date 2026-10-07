# Load More — CLOSED

Verified 2026-10-07 against the live read-only Framer component and six Eventi/Community instances. Source: Nav/Load More `hZwon9KVq`; capture: `framer/load-more-source.json`. Reference captures stay outside runtime imports.

```tsx
<LoadMore loading={pending} hasMore={hasMore} onLoadMore={loadNextPage}
  aria-controls="results" />
```

`hasMore` and `onLoadMore` are required; `loading` defaults to false. Other native button attributes are forwarded, except attributes owned by this contract (`type`, `disabled`, click, busy, label, children). Parent styling and placement remain outside the base component.

| Parent state | Source state | Rendering |
| --- | --- | --- |
| hasMore=true, loading=false | Default | Native type=button, MOSTRA ALTRO |
| hasMore=true, loading=true | Loading | Same button, disabled and aria-busy, spinner only |
| hasMore=false | Hidden, visible=false | null; no layout, focus target or callback |

The list owner sets pending immediately when starting a request and updates hasMore after completion. The catalog parent demonstrates completion, exhaustion, retry and a synchronous pending guard. Arrays, CMS offsets, requests, page size, result announcements and focus after list updates belong to that parent. No product collection or fetch implementation is included.

Default and Loading are 173×40, centered horizontal layout, gap10, original Neutral50 background and Neutral950 text. Functional/16 is reused directly: Funnel Sans400, 16px, line-height1.1, normal tracking. Source label width and local width are both116.78125px at1200/810/390. Root state changes are instant. The source has static text; RollingText is not part of this component.

The existing Icon Engine already shares one private spinner renderer between form-spinner and load-more-spinner. Load More reuses its exact20×20 outer SVG mask, conic gradient, inner rotation360/linear1s/infinite and2×2 round. The source conic layer serializes20×11 but resolves20×20 in preview due to its pins; the existing configuration matches that runtime geometry. Appearance is tween0.3/ease[.44,0,.56,1]. Form spinner retains its separate source configuration and24×24 runtime geometry. No duplicate spinner, SVG, library or new motion owner was added.

Native disabled prevents pointer and keyboard activation while loading; the handler also checks current props. The accessible name remains MOSTRA ALTRO when text is absent, aria-busy communicates pending, and aria-controls/describedby can be supplied by the list owner. Existing global focus-visible is preserved (2px solid currentColor, offset4), following the requested accessible fallback; Framer standalone preview suppresses its outline. No custom hover/pressed visual is present in the source component and none was introduced.

All six instances retain the same intrinsic geometry. Eventi Phone bottom−64 versus Desktop/Tablet−80 and Community Phone relative versus Desktop/Tablet absolute are source consumer placement, excluded from LoadMore.css. Nine real catalog examples include Default/lifecycle, Loading, Hidden and the six consumer configurations at `#ds-component-load-more`.

Typecheck, lint and build passed; no frontend test suite added or run. Source preview and local browser checks cover1200/810/390, native click/Enter/Space, focus-visible, loading-only spinner, double-click guard, retry and zero DOM/layout after exhaustion. Shared Icon/form spinner unchanged. Build keeps the existing chunk>500kB warning. Detailed evidence and input digest: [LOAD-MORE-VERIFICATION.json](LOAD-MORE-VERIFICATION.json).

Limits: actual source Eventi/Community previews currently exhaust their collections and hide Load More at all three widths; a real next-page request could not be exercised without altering source content. Default/Loading were exercised in component preview and controlled local lifecycle. Hardware touch, held pointer-down, screen readers, cross-browser, live OS reduced-motion toggles, exact frame timing and automated pixel-diff are not attested. No Framer edit/publish, other control, product page or CMS backend was migrated.
