# Testimonials Section — CLOSED

Verified 2026-10-08, main64873750eba59cfd4bd73f142dcf0dc69f49bcd2 with local changes. Consolidation of the existing component, not a second carousel or a new product page. Source: Section/Testimonials Section nkDvTeO6Q, eight variants and six Home/Esperienza consumers captured read-only. Evidence: TESTIMONIALS-SECTION-VERIFICATION.json and reference-only docs/framer/testimonials-section-*.

## Contract

`items: readonly { id?: string; image: ImageFillImage; title: string; quote: string; name: string; role: string }[]` is required. Optional `initialIndex:number=0`, `id`, `className`, `style`, `aria-label`. No fixed item count, baked-in copy, public responsive/state variants or iconCal. Original default copy remains an explicitly supplied reference dataset; consumer examples supply the actual authors/roles. Leading spaces/newlines are retained.

One selection index, functional modulo `items.length` in both directions. Empty arrays render nothing; one item has no meaningless navigation. Stable optional item id preserves selection across reorder; removed identity resets to valid initial index, shorter arrays are normalized. Without ids identity follows array position. Desktop/Tablet retain the selected item; crossing the Phone family resets initialIndex exactly as observed in Framer. InitialIndex changes do not otherwise reset a retained selection.

## Layout and ownership

Desktop/Tablet at >=810: fluid twelve-column grid, gap8, media4 + spacer1 + content7, gap56. Parent owns width/height/aspect/min/max and placement; no1168/750/600/84vh page allocation is imposed by Section. Grid tracks can shrink below the canvas minimum to remain usable in smaller assigned containers. Image fills the available media cell after padding-top16; source runtime confirms this rather than fixed canvas724.

Phone <=809.98: fluid vertical content, gap20. Media/spacer/quote are absent from DOM. Title140 and quote320 are source composition slots; implemented as minimums so long dynamic text expands without overlapping attribution. Current source content matches the exact slot geometry. Headline76/Text32P/Headline16 responsive serialized presets remain canonical. First quote max610, subsequent max698; title max593 and source third-title intrinsic width are preserved.

Single active semantic title/quote/attribution; footer includes existing Icon quote63×56, name/role gap4 (role opacity.7), navigation gap8 and existing forty-pixel arrow controls. Existing Divider80×6 is reused. Scoped name/role color selectors correct the demonstrated preset-specificity defect in the previous implementation.

## Motion, lifecycle and accessibility

Root size/child position projection uses existing tween.3 cubic[.82,.18,.23,.74]. Title is source space-tokenized word opacity, one parent in-view trigger, once/threshold0, spring.5/bounce0/restDelta.001 with word index*.06 delay. Quote is element opacity, once/threshold.5, delay.2, tween.3; effective wrapper opacity.7. Existing epsilon.001 matches the established text runtime path, not a replacement slide fade. TextStagger/useLineReveal are different algorithms and are not substituted.

Active media keys remount existing ImageReveal: once appearance, delay.6/tween.3/same cubic, cover left0/full width→left−1/width1. No duplicated media/reveal, four simultaneously loaded images or inactive accessible content. Retained dynamic media updates preserve the primitive's state.

Shared useReducedMotionPreference observes live MotionConfig/OS policy. Reduced title/body are fully visible and projection is instantaneous; ImageReveal reuses its already closed policy. Missing IntersectionObserver has a readable static text path. No component RAF, scroll listener, autoplay, timer, slider package or frame-driven React state. Motion owns discrete scheduling and existing primitive cleanup.

Native previous/next buttons keep accessible names and focus; no slide-key remount of controls or aggressive live region. Order is semantic and only current content exists. Native Enter/Space and rapid navigation verified; physical touch hardware/screen readers/other engines were not tested.

## Source controls and proof

iconCal=true exists only as an unbound editor variable; no reference in descendants, consumer overrides, readComponentControls or compiled module (SHA25601f366ae58ff6b71aa623987a4d423005ff648f5d527da5d659a0d07271aa144). Classified UNUSED LEGACY CONTROL; excluded.

24 settled comparisons: four slides × Home/Esperienza ×1200/810/390. Root, title/slots/quote/footer/nav/media/image rectangles agree exactly; fonts and whitespace match. Allocations Home1025×630.765625/715×600/351×auto; Esperienza1025×600/715×600/335×auto at observed viewport height620. They are documentation fixture allocations, not product rules. Parent pages remain pending. Sequential captures establish settled geometry, not synchronized animation-frame equality.

Catalog includes explicit source/default content, actual consumer data, native responsive iframe and dynamic/reduced/lifecycle controls. Temporary browser viewport overrides must be reset; fixtures remain outside product component ownership.
