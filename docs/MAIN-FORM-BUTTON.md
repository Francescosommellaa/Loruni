# Main form button — Nav/Main form button

2026-10-06. Authorized ONE TOUCH port of Framer `oG9J4ak1n`, only this submit control. Live source/controls and six contact/Template instances: `docs/framer/main-form-button-source.json`. No Framer source edit or form submission was performed.

```tsx
import { MainFormButton } from '../components/MainFormButton'
import { canSubmitMainForm, type MainFormStatus } from '../components/MainFormButton.state'

// status is owned by the form's validation/request lifecycle.
<MainFormButton formStatus={status} width="auto" />  // contact
<MainFormButton formStatus={status} width="fill" />  // Template
```

API: controlled `formStatus: default | pending | incomplete | success | error`, or controlled visual `state: Default | Loading | Disabled | Success | Error` (mutually exclusive; default Default). `width?: auto | fill` (default auto), technical className/style and native submit attributes such as form/name/value. No configurable copy, hover variant, click callback, validation or request inside the button.

Production adapter `MainFormButton.state.ts` implements all six source consumers' mappings already: default→Default, pending→Loading, incomplete→Disabled, success→Success, error→Error. Both pending/incomplete make a genuine disabled submit button; Loading also sets aria-busy. The owning form guards its onSubmit with `canSubmitMainForm(status)` and an immediate pending guard before awaiting its request. That covers implicit/requestSubmit attempts as well as native button activation. Validation decides incomplete; request owner sets pending and its actual success/error result. The button never guesses those results or owns the whole form.

The catalog contains a native local form using this production adapter, existing FormField, native required input, immediate duplicate-submit guard and deferred completion controls. Enter/Space submit, incomplete input, pending repeat-requestSubmit rejection, error retry and success were exercised. Completion controls are documentation-only; no endpoint or fake product response is embedded in the component.

| State | Visible subtree | Font / tracking / line | Auto width |
| --- | --- | --- | --- |
| Default | Existing RollingText, INVIA MESSAGGIO | Funnel Sans400,20px,−.04em,1em | 198px |
| Loading | Existing Icon form-spinner only | Original conic/mask loop | 198px |
| Disabled | Static INVIA MESSAGGIO | Functional/16,400,16px,0em,1.1em | 198px |
| Success | Static MESSAGGIO INVIATO | Functional/28,600;28/18/20px Desktop/Tablet/Phone,−.04em,1.1em | 198px |
| Error | Static RIPROVA | Functional/16,400,16px,0em,1.1em | 195px |

All states use original Neutral950 background, Neutral50 text, centered horizontal layout, gap0, padding10px 0 13px. Height56px is the explicit override in all six real instances. Auto-width preserves the native component's inherited198px frame (Error195px), not text-only shrink sizing. Fill uses100% of the consumer frame, including Error; no page positioning is embedded. Source isolated heights are43 Default,47 Loading,40.59375 Disabled,53.796875/42.796875/45 Success at three widths,54 Error; consumers override them to56. Technical style allows those standalone source bounds where needed. Success Desktop text spans254.15625px and overflows the198px auto frame in Framer too; preserved, without redesign.

Default hover is exclusively existing RollingText hover/leave:20px shadow offset, stagger60, padding0, reversefalse, transformnone, tween.3s/ease[.82,.14,.29,.91]/delay0. Source hover SHipWlhf4 is not a public state. Static text has no rolling behavior. Root size projection uses the original tween.2s/ease[.44,0,.56,1]/delay0 through the existing exact-equivalent transition config; no FAQ behavior is imported. No new pressed scale/opacity or scroll owner/RAF.

Loading reuses Icon Engine form-spinner, exact source mask pGiXYozQ3mE4cilNOItfe2L2fUA.svg and conic gradient7.208614864864882→342degrees. Source serialized wrapper24×20 and conic20×24 both have aspect1; native runtime resolves both24×24. Existing Icon already reproduces this runtime, double mask, rounding2×2 and loop360°/1s/linear/infinite. No generic spinner, new SVG, CSS engine or library. Existing primitive/root reduced-motion policy retained.

Native button type=submit, disabled Loading/Disabled, keyboard Enter/Space, whole-string accessible label, decorative spinner, aria-busy and hidden polite status with exact Success/Error copy. Existing global focus-visible2px/currentColor/offset4px is retained; no outline removal, new visual focus design or focus animation. Validation/request form handler must also guard implicit/programmatic attempts as documented, since disabled buttons cannot stop arbitrary form.requestSubmit by themselves.

Real native contact/template instances were compared at1200/810/390. Auto198×56; Template widths285.671875/214.328125/311×56 in this preview's parent frames. Local auto/fill matrices at1440/810/390 match visible content metrics: Default157.84375×20, Disabled135.125×17.59375, Error65.53125×17.59375, Success254.15625/163.390625/181.546875 widths. Parent widths are documentation evidence, not Button constraints or global layout tokens.

Final checks/hashes: [MAIN-FORM-BUTTON-VERIFICATION.json](MAIN-FORM-BUTTON-VERIFICATION.json). No frontend suite added/run. Browser console clean. No observed visual mismatch in compared states; intentional native disabled/focus accessibility behavior follows this request. External submission backend, full form/page composition, physical touch, live OS reduced-motion toggle, cross-browser/screen-reader and synchronized frame/pixel-diff certification remain outside the executed evidence. Reference captures under docs/framer remain locally ignored by existing repository policy. Other controls and prior/concurrent work preserved.
