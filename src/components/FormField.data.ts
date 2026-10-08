import type { FormFieldProps } from './FormField'

// Shared confirmed contents; consumers choose textarea auto/fixed frame height.
export const contactFields = [
  { label: 'Nome', name: 'Name', type: 'text', required: true, placeholder: 'Il tuo nome' },
  { label: 'Gruppo / occasione', name: 'Gruppo', type: 'text', required: false, placeholder: 'Amici, festa, serata' },
  { label: 'Email', name: 'Email', type: 'email', required: true, placeholder: 'La tua email' },
  { label: 'Messaggio', name: 'message', type: 'textarea', required: true, placeholder: 'Che cosa hai in mente?' },
] as const satisfies readonly FormFieldProps[]
