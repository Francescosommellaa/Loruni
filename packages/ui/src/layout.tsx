import type { HTMLAttributes } from 'react';
import styles from './layout.module.css';
export function Container({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`${styles.container} ${className}`} {...props} />;
}
export function Section({ className = '', ...props }: HTMLAttributes<HTMLElement>) {
  return <section className={`${styles.section} ${className}`} {...props} />;
}
