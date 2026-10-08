export type MainFormButtonState = 'Default' | 'Loading' | 'Disabled' | 'Success' | 'Error'
export type MainFormStatus = 'default' | 'pending' | 'incomplete' | 'success' | 'error'

/** The six Framer form consumers share this exact lifecycle mapping. */
export const mainFormButtonStateByFormStatus = {
  default: 'Default', pending: 'Loading', incomplete: 'Disabled', success: 'Success', error: 'Error',
} as const satisfies Record<MainFormStatus, MainFormButtonState>

/** Guard the owning form's submit handler, including implicit/programmatic submit. */
export function canSubmitMainForm(status: MainFormStatus) {
  return status !== 'pending' && status !== 'incomplete'
}
