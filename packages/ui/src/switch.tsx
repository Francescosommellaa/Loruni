'use client';

import { useId } from 'react';

type SwitchProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

export function Switch({ label, checked, onChange, disabled = false }: SwitchProps) {
  const labelId = useId();
  return (
    <div className="switch-field">
      <span id={labelId}>{label}</span>
      <button type="button" role="switch" aria-checked={checked} aria-labelledby={labelId}
        disabled={disabled} className="switch" onClick={() => onChange(!checked)}>
        <span className="switch__thumb" />
      </button>
    </div>
  );
}
