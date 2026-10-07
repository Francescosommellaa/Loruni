# Rolling Text / Arrow Right Alt — ONE TOUCH CLOSED

Verified 2026-10-07 against the current Framer source, native previews and local
catalog. One canonical implementation: `src/components/RollingText.tsx` and its
existing CSS. NavItem, Button and MainFormButton import it; no local glyph
animation remains in a consumer. Existing component states, callbacks, links,
responsive selection and form lifecycle remain consumer-owned.

## Public contract

`text`, `font`, `color`, `stagger`, `padding`, `reverse`, `transform`, `tag`;
`transition` retains the existing source motion configuration, `className` and
`style` integrate parent layout. The old `textTransform` spelling remains a
compatibility alias; `transform` takes precedence and is used by all consumers.

`tag` creates a real p/span/h1/h2/h3/h4/h5/h6 inside the layout wrapper.
`transform` accepts none/uppercase/lowercase/capitalize and uses source CSS
inheritance on the glyph spans, including the source's per-glyph capitalization.
`font` preserves family, size, weight, style, tracking, line height, alignment,
variation and feature settings. No breakpoint or consumer-specific typography
is embedded in the utility. Default Funnel Sans follows the approved three-font
policy; the original external default was Inter, already corrected in the prior
port. Source defaults remain stagger35, padding0, reversefalse, tagp,
spring0.4/bounce0 and gray; all fourteen actual instances instead use the
verified tween0.3, easing[0.82,0.14,0.29,0.91], stagger60, padding0,
reversefalse, transformnone and tagp.

| Source consumer | Font size | Weight | Line height |
| --- | --- | --- | --- |
| NavItem Desktop | 22px | 400 | 1em |
| NavItem Mobile | 28px | 400 | 1em |
| NavItem Compact | 16px | 400 | 1em |
| MainFormButton | 20px | 400 | 1em |
| Button Primary | 48px | 600 | 1.1em |
| Button Primary Mobile | 28px | 600 | 1.1em |
| Button Secondary | 16px | 600 | 1.1em |

All use Funnel Sans, tracking−0.04em. Button Primary/Mobile are Brand/Primary;
the other source configurations are Neutral50. Existing token exports and
consumer configuration remain authoritative.

## Motion and sizing

The source duplicates the visible glyph through a text shadow exactly one line
below it. Each glyph independently translates upwards by that absolute line
height on mouse enter, then returns to zero on leave. Both the semantic text
element and parent frame clip the shadow. Spaces become non-breaking spaces;
characters split with the source's spread iteration, not words. There is no
second accessible string, fade, scale or scroll timeline.

Per-character delay is `duration / text.length * characterIndex * stagger/100`.
Reverse changes `characterIndex` to `text.length−1−index`; direction remains
upwards. Source UTF16 length arithmetic and integer font-size/line-height unit
handling are retained. Motion owns only the individual glyph y property.
Interruptions use Motion's current-value retargeting; no timers or RAF loops.

The wrapper fills its allocated frame and centers a max-content single line.
Long strings keep the original single-line/clipped behavior, without invented
wrapping, ellipsis or responsive font changes. Consumer auto-width overrides
already present in NavItem/Button/MainFormButton are preserved. Standalone
Primary in a narrow catalog column intentionally clips; actual Button width
333.09375px and all seven summed glyph widths match native preview exactly.

`useReducedMotionPreference` is reused inside the canonical utility. It follows
the root MotionConfig user/always/never policy and the live media query; reduced
motion displays readable text at y0 immediately without stagger. NavItem no
longer implements a separate partial glyph policy. The existing helper and
MotionConfig are the only preference system. The catalog's live always/user
toggle was exercised; no physical OS preference switch is claimed.

## Arrow Right Alt resolution

External module `uii4O6Q2YMyHUZDfJBlW` is an ExternalModuleNode in the source
catalog with only the fill control. It has zero direct/nested uses across all
362 global ComponentInstanceNodes and 33 complete scopes: eight pages, one
Template and all24 local component roots, including hidden/variant descendants.
Neither the25 IconNodes nor either of the two code files references its ID/name.
Repository runtime and local assets have no import of the module.

**LEGACY / UNUSED — NO MIGRATION REQUIRED.** No new external module port,
component, alias or dead renderer is created. Its earlier completed mapping to
Icon was based on the matching glyph name; it is corrected and preserved as
dated superseded history in the inventory.

The *native Material glyph* Arrow Right Alt in TestimonialsArrow Default is
separately verified and already canonical `Icon(name="testimonial-arrow")`.
It is a20×20 mask, viewBox0 0 24 24, original path
`M 12.01 3 L 0 3 L 0 5 L 12.01 5 L 12.01 8 L 16 4 L 12.01 0 Z`,
translate(4 8), mask path16×8 and original fill rgb(247,247,247). Native geometry
matches the existing registry exactly. Configurable fill works through Icon;
Brand/Primary, Neutral50 and an explicit green override were verified. Native
TestimonialsArrow Default remains available; the sixteen current parent arrow
instances use Back/Forward. A matching glyph does not prove the orphan module
is used indirectly. No Icon Engine runtime change is needed.

## Evidence and limits

[Verification manifest](ROLLING-TEXT-ARROW-ALT-VERIFICATION.json) and reference
`docs/framer/rolling-text-arrow-alt-source.json` record controls, all14instances,
three complete consumer trees, module URL/hash, scope audit and browser samples.
Native/local seven font profiles match glyph widths, line heights, tracking,
color, shadow offset and hover/leave endpoints. Local controls exercise all
eight tags/four transforms, reverse timing, short/long/empty/emoji text, padding
and reduced motion. NavItem Desktop/Mobile/Compact, Button Primary/Secondary/
Primary Mobile and MainFormButton Default use the same implementation.
Local viewport1440/810/390 preserves clipping without document overflow;
browser error logs are empty. Typecheck/lint/build/token drift are in the
manifest. No automated suite added or run.

During native inspection an editor field was mistaken for preview sizing and
changed only Primary variant canvas top0→620px. It was restored to0px through
the editor before closure; all three serialized consumer trees then matched
the initial capture byte-for-byte. No design change remains, no publication.

Captures are sequential, not an immutable Framer revision or synchronized
frame-timing/pixel-diff proof. Physical touch, other browser engines, screen
readers and a physical OS preference toggle are untested. Reference snapshots
are outside browser imports and locally ignored per the existing repository
policy. No remaining internal work or next utility is included.
