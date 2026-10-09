import { useRef, useState, type FormEvent } from 'react'
import { MainFormButton } from '../../components/MainFormButton'
import { canSubmitMainForm, type MainFormStatus } from '../../components/MainFormButton.state'
import { FormField } from '../../components/FormField'

/** Native form integration proof. Only the catalog owns completion controls; no external request. */
export function MainFormButtonLifecycleExample() {
  const [status, setStatus] = useState<MainFormStatus>('default')
  const [width, setWidth] = useState<'auto' | 'fill'>('auto')
  const [submits, setSubmits] = useState(0)
  const [name, setName] = useState('Verifica locale')
  const pending = useRef(false)
  const form = useRef<HTMLFormElement>(null)
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (pending.current || !canSubmitMainForm(status)) return
    pending.current = true
    setSubmits(value => value + 1)
    setStatus('pending')
  }
  function complete(next: MainFormStatus) {
    pending.current = false
    setStatus(next)
  }
  return <div>
    <p>Form nativo locale: submit → pending; i controlli documentali completano l’esito senza inviare dati.</p>
    <p><label className="ds-demo-field">Larghezza form button <select value={width} onChange={event => setWidth(event.target.value as 'auto' | 'fill')}><option value="auto">auto · contatto</option><option value="fill">fill · Template</option></select></label></p>
    <form ref={form} onSubmit={submit} aria-label="Lifecycle Main form button" aria-busy={status === 'pending'}>
      <FormField type="text" label="Nome" name="Name" required value={name} disabled={status === 'pending'}
        onChange={event => { setName(event.target.value); complete(event.target.value ? 'default' : 'incomplete') }} />
      <MainFormButton formStatus={status} width={width} />
    </form>
    <p><output aria-live="polite">Form status: {status} · Submit: {submits}</output></p>
    <p><button className="ds-demo-action" type="button" disabled={status !== 'pending'} onClick={() => complete('success')}>Completa success</button>{' '}
      <button className="ds-demo-action" type="button" disabled={status !== 'pending'} onClick={() => complete('error')}>Completa error</button>{' '}
      <button className="ds-demo-action" type="button" disabled={status === 'pending'} onClick={() => complete('incomplete')}>Form incomplete</button>{' '}
      <button className="ds-demo-action" type="button" disabled={status === 'pending'} onClick={() => { setName('Verifica locale'); complete('default') }}>Form completo / reset</button>{' '}
      <button className="ds-demo-action" type="button" onClick={() => form.current?.requestSubmit()}>Ripeti submit form · prova locale</button></p>
  </div>
}

export function MainFormButtonStatesExample({ width = 'auto' }: { width?: 'auto' | 'fill' }) {
  return <div style={{ display: 'grid', gap: '16px', padding: '8px' }}>
    {(['Default', 'Loading', 'Disabled', 'Success', 'Error'] as const).map(state => <form key={state} aria-label={`Main form button ${state} ${width}`} onSubmit={event => event.preventDefault()}>
      <p>{state}</p><MainFormButton state={state} width={width} />
    </form>)}
  </div>
}
