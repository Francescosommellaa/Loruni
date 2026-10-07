import { type ButtonHTMLAttributes, type CSSProperties } from 'react'
import { domAnimation, LazyMotion, m } from 'motion/react'
import { component, motion as motionTokens, primitive, typography } from '../styles/token'
import { RollingText } from './RollingText'
import { Icon } from './Icon'
import { mainFormButtonStateByFormStatus, type MainFormButtonState, type MainFormStatus } from './MainFormButton.state'
import './MainFormButton.css'

export type { MainFormButtonState, MainFormStatus } from './MainFormButton.state'

type NativeSubmitProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'dangerouslySetInnerHTML' | 'type' | 'disabled' | 'onClick' | 'onSubmit' | 'className' | 'style' | 'aria-busy' | 'aria-label' | 'onAnimationStart' | 'onDrag' | 'onDragStart' | 'onDragEnd'>
export type MainFormButtonProps = NativeSubmitProps & {
  width?: 'auto' | 'fill'
  className?: string
  style?: CSSProperties
} & ({ state?: MainFormButtonState; formStatus?: never } | { formStatus: MainFormStatus; state?: never })

const stateKey = { Default: 'default', Loading: 'loading', Disabled: 'disabled', Success: 'success', Error: 'error' } as const
const copy = { Default: 'INVIA MESSAGGIO', Loading: 'INVIA MESSAGGIO', Disabled: 'INVIA MESSAGGIO', Success: 'MESSAGGIO INVIATO', Error: 'RIPROVA' } as const
// Exact source-equivalent config; no FAQ behavior is imported.
const sourceTween = motionTokens.transitions.faqSectionDefaultTransition.config
const transition = { type: sourceTween.type, duration: parseFloat(sourceTween.duration), delay: parseFloat(sourceTween.delay), ease: [...sourceTween.ease] as [number, number, number, number] }
const rollingTween = motionTokens.transitions.buttonPrimaryTransition.config

/** Controlled submit presentation. Validation, request and lifecycle state stay with the form. */
export function MainFormButton({ state: visualState, formStatus, width = 'auto', className, style, ...native }: MainFormButtonProps) {
  const state = formStatus === undefined ? visualState ?? 'Default' : mainFormButtonStateByFormStatus[formStatus]
  const config = component.mainFormButton[stateKey[state]]
  const blocked = state === 'Loading' || state === 'Disabled'
  return <>
    <LazyMotion features={domAnimation} strict>
      <m.button {...native} type="submit" disabled={blocked} aria-busy={state === 'Loading'} aria-label={copy[state]}
        className={['loruni-main-form-button', className].filter(Boolean).join(' ')} data-state={state} data-width={width}
        initial={false} layout="size" transition={transition}
        style={{ backgroundColor: config.fill.value, color: config.rollingTextColor.value, padding: config.padding.value, gap: config.gap.value,
          width: width === 'fill' ? '100%' : config.width.value, height: primitive.height.value56px.value, ...style }}>
        {state === 'Default' ? <RollingText text={copy.Default} color={config.rollingTextColor.value}
          font={{ fontFamily: 'var(--font-funnel-sans)', fontWeight: 400, fontStyle: 'normal', fontSize: config.rollingTextFontSize.value, letterSpacing: config.rollingTextLetterSpacing.value, lineHeight: config.rollingTextLineHeight.value }}
          transition={{ type: rollingTween.type, duration: parseFloat(rollingTween.duration), delay: parseFloat(rollingTween.delay), ease: [...rollingTween.ease] }}
          stagger={Number(config.rollingTextStagger.value)} padding={config.rollingTextPadding.value} reverse={false} transform="none" tag="p" />
          : state === 'Loading' ? <Icon name="form-spinner" />
            : <p className={state === 'Success' ? typography.functional28.className : typography.functional16.className}>{copy[state]}</p>}
      </m.button>
    </LazyMotion>
    <span className="visually-hidden" role="status" aria-atomic="true">{state === 'Success' || state === 'Error' ? copy[state] : ''}</span>
  </>
}
