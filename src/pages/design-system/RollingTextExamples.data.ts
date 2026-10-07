import type { RollingTextProps } from '../../components/RollingText'
import { colors, primitive, motion as motionTokens } from '../../styles/token'

export const rollingTextConfigurations = [
  { name: 'Nav Item Desktop', text: 'NAV ITEM', size: 22, weight: 400, line: '1em', color: colors.neutral50 },
  { name: 'Nav Item Mobile', text: 'NAV ITEM', size: 28, weight: 400, line: '1em', color: colors.neutral50 },
  { name: 'Nav Item Compact', text: 'NAV ITEM', size: 16, weight: 400, line: '1em', color: colors.neutral50 },
  { name: 'Main form button', text: 'INVIA MESSAGGIO', size: 20, weight: 400, line: '1em', color: colors.neutral50 },
  { name: 'Button Primary', text: 'VEDI LE SERATE', size: 48, weight: 600, line: '1.1em', color: colors.brandPrimary },
  { name: 'Button Secondary', text: 'VEDI LE SERATE', size: 16, weight: 600, line: '1.1em', color: colors.neutral50 },
  { name: 'Button Primary Mobile', text: 'VEDI LE SERATE', size: 28, weight: 600, line: '1.1em', color: colors.brandPrimary },
] as const

export function rollingTextConfiguration(index: number): RollingTextProps {
  const item = rollingTextConfigurations[index] ?? rollingTextConfigurations[0]
  const tween = motionTokens.transitions.buttonPrimaryTransition.config
  return {
    text: item.text, color: `var(${item.color.cssVariable})`, stagger: 60,
    font: { fontFamily: 'var(--font-funnel-sans)', fontSize: primitive.fontSize[`value${item.size}px`].value, fontWeight: item.weight, lineHeight: item.line, letterSpacing: primitive.letterSpacing.valueNegative0Point04em.value },
    transition: { type: 'tween', duration: parseFloat(tween.duration), ease: [...tween.ease] },
  }
}

