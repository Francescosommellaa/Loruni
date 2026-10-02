'use client';

import { useId } from 'react';
import styles from './switch.module.css';

type SwitchProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

export function Switch({ label, checked, onChange, disabled = false }: SwitchProps) {
  const labelId = useId();
  return (
    <div className={styles.field}>
      <span id={labelId}>{label}</span>
      <button type="button" role="switch" aria-checked={checked} aria-labelledby={labelId}
        disabled={disabled} className={styles.switch} onClick={() => onChange(!checked)}>
        <span className={styles.thumb} />
      </button>
    </div>
  );
}
