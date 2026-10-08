import { useId, type CSSProperties, type InputHTMLAttributes, type LabelHTMLAttributes, type ReactNode, type TextareaHTMLAttributes } from 'react'
import { typography } from '../styles/token'
import './FormField.css'

type SharedControlProps = { className?: string; style?: CSSProperties }
export type FormControlProps = SharedControlProps & (
  | (Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'className' | 'style'> & { type?: 'text' | 'email' })
  | (Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className' | 'style'> & { type: 'textarea'; height?: 'auto' | 100 })
)

export function FormControl(props: FormControlProps) {
  const { className, style, ...control } = props
  const wrapperClass = ['loruni-form-control', className].filter(Boolean).join(' ')
  if (control.type === 'textarea') {
    const { type: _type, height = 'auto', ...native } = control
    return <div className={wrapperClass} data-control="textarea" data-sizing={height === 'auto' ? 'auto' : 'fixed'} style={style}>
      <textarea autoComplete="off" {...native} className="loruni-form-control__input" />
    </div>
  }
  return <div className={wrapperClass} data-control="input" style={style}>
    <input autoComplete="off" {...control} type={control.type ?? 'text'} className="loruni-form-control__input" />
  </div>
}

export type FormFieldGroupProps = Omit<LabelHTMLAttributes<HTMLLabelElement>, 'children'> & { label: string; children: ReactNode }
export function FormFieldGroup({ label, children, className, ...native }: FormFieldGroupProps) {
  return <label {...native} className={['loruni-form-field', className].filter(Boolean).join(' ')}>
    <h3 className={typography.headline16.className}>{label}</h3>
    {children}
  </label>
}

export type FormFieldProps = FormControlProps & { label: string; groupClassName?: string; groupStyle?: CSSProperties }
export function FormField({ label, groupClassName, groupStyle, id, ...control }: FormFieldProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  return <FormFieldGroup label={label} htmlFor={inputId} className={groupClassName} style={groupStyle}>
    <FormControl {...control} id={inputId} />
  </FormFieldGroup>
}
