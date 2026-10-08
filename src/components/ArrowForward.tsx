import { Icon } from './Icon'

export type ArrowForwardProps = {
  size?: 28 | 40
  rotation?: -45 | 0
  visible?: boolean
  /** Parent layout integration; not a design variant. */
  className?: string
}

export function ArrowForward(props: ArrowForwardProps) {
  return <Icon name="arrow-forward" {...props} className={['loruni-arrow-forward', props.className].filter(Boolean).join(' ')} />
}
