import type { ReactNode } from 'react';
import styles from './narrative.module.css';

export function JourneyArrow() {
  return <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M5 27 27 5M5 5h22v22" stroke="currentColor" strokeWidth="2" /></svg>;
}

export function JourneyLink({ href, children }: { href: string; children: ReactNode }) {
  return <a className={styles.journeyLink} href={href}><span>{children}</span><JourneyArrow /></a>;
}
