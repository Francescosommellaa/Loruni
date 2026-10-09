import { Fragment } from 'react'
import { m } from 'motion/react'
import { motion } from '../styles/token'
import { useReducedMotionPreference } from './useReducedMotionPreference'

const source = motion.transitions.eventiEventiDesktopColorContainerTestimonialContentTitleTitle1TextEffectStyleTransition.config
const transition = { type: source.type, duration: Number.parseFloat(source.duration), bounce: source.bounce, restDelta: 0.001 }
const wordDelay = Number.parseFloat(source.delay)

/** Shared source word-opacity reveal; the caller supplies the LazyMotion boundary. */
export function WordOpacityReveal({ text, as = 'h3', className }: { text: string; as?: 'h2' | 'h3'; className?: string }) {
  const reduced = useReducedMotionPreference()
  const readable = reduced || typeof IntersectionObserver === 'undefined'
  const Heading = as === 'h2' ? m.h2 : m.h3
  const words = text.split(' ')
  return <Heading className={className} dir="auto" initial={readable ? false : 'hidden'} animate={readable ? 'visible' : undefined} whileInView="visible" viewport={{ once: true, amount: 0 }}>
    {words.map((word, index) => <Fragment key={index}><m.span variants={{ hidden: { opacity: 0.001 }, visible: { opacity: 1, transition: readable ? { duration: 0 } : { ...transition, delay: index * wordDelay } } }}>{word}</m.span>{index < words.length - 1 ? ' ' : null}</Fragment>)}
  </Heading>
}
