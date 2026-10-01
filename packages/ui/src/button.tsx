import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import styles from './button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: ButtonProps['variant'];
};

export function Button({ variant = 'primary', className = '', type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={`${styles.button} ${styles[variant]} ${className}`} {...props} />;
}

// Navigation keeps native anchor semantics and the same visual contract as Button.
export function ButtonLink({ variant = 'primary', className = '', ...props }: ButtonLinkProps) {
  return <a className={`${styles.button} ${styles[variant]} ${className}`} {...props} />;
}
