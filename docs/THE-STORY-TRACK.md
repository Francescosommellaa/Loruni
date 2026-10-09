# The story — static Desktop content-slot

Closed2026-10-09. Source slot ECF_um_EE inside Our Story Section; fresh parent tree resolves every binding, Esperienza Desktop/Tablet overrides read separately. Source snapshots remain outside browser imports.

`TheStoryTrack`: required `label`, `title`, `image: ImageParallaxProps['image']`, `firstCard`, `quote`, `secondCard`; ordinary div props/ref/style/id accepted, children owned internally. Both card objects are `Omit<OurStoryCardProps, 'variant' | 'className' | 'style'>`, preserving the canonical card's content defaults. No parallel model. Runtime does not supply page copy.

Intrinsic width5760 =740+660+960+1440+960+4×200+200. Default height1080 from existing component geometry token, consumer overridable. Horizontal/nowrap/end/center, nonshrinking children, root overflow clip and Neutral950. Clip bounds include all children and trailing padding; the future viewport belongs to the parent.

Intro740/full height/padding80, Label and canonical Headline180 with space-between. Native computed gap is normal; metadata gap80 is inactive. Label/title Neutral50. Media660/full height delegates X−50/Y0/crop/overscan/reduced motion to unchanged ImageParallax. Both960/full-height OurStoryCard use Desktop; no new card layout.

Quote1440/full height/padding80 120/center both/gap80/clip/Neutral800. Both decorative Quote icons63×56 share the central registry, BrandPrimary fill, no rotation. TextStagger receives unchanged quote text, Funnel Sans Regular64/center/−0.04em/1.16em, delay0.1/halfOpacityfalse. Fresh source contains **durPerLine0.7**, not the primitive default0.5; preserve this actual instance override. Remaining trigger/variableWeight behavior stays canonical. Six leading spaces and newline content remain intact. Original measurement font400/rendered line weight500 behavior is inherited unchanged.

No slot state, listeners, RAF, timeline, interactions, mobile-column CSS, Lenis knowledge or CMS/routing. Existing children retain their own motion/accessibility/cleanup and live reduced policy. Mobile composition, mounting breakpoints, sticky/viewport pinning, progress/speed/direction and scroll transforms belong to the future full section/wrapper.

Three real catalog examples and isolated fixtures reuse the existing Esperienza card dataset. Source default first title differs (`Sociologo · Traduzione italiana`) from the page binding (`Al tavolo`); the documentation selector preserves that distinction.

Proof: [THE-STORY-TRACK-VERIFICATION.json](THE-STORY-TRACK-VERIFICATION.json).88numeric geometry fields match source with no differences; all three Quote lines match including leading spaces. Standalone/external overflow viewport, long/dynamic quote/card, absent image, parent height override, real810→1440 iframe resize retaining edited content, native horizontal scroll/inView settlement verified. No frontend automated suite. Gates and final manifest recorded in proof.

Limits: parent canvas replicas report the original TextStagger local module missing, while the detached slot renders correctly and permits direct comparison. Canvas zoom0.25 is normalized only in measured geometry. This proves the static composition, not synchronized horizontal scroll/parallax crop or the excluded full section/Mobile. Live OS reduced-motion toggle not repeated; canonical children/policy unchanged. Existing build chunk warning retained.
