import { useId, useRef, useState } from 'react'
import { LoadMore } from '../../components/LoadMore'

/** Catalog-only parent: completion is explicit, without a fabricated CMS request. */
export function LoadMoreLifecycleExample() {
  const resultsId = useId()
  const pending = useRef(false)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [requests, setRequests] = useState(0)
  const [status, setStatus] = useState('')
  function start() {
    if (pending.current || !hasMore) return
    pending.current = true
    setLoading(true)
    setStatus('')
    setRequests(count => count + 1)
  }
  function complete(more: boolean) {
    pending.current = false
    setLoading(false)
    setHasMore(more)
    setStatus(more ? 'Operazione conclusa: altri risultati disponibili.' : 'Operazione conclusa: nessun altro risultato.')
  }
  return <div style={{ display: 'grid', gap: '16px', padding: '8px' }}>
    <div id={resultsId} aria-busy={loading}>Attivazioni del callback parent: <output>{requests}</output></div>
    <div data-example="load-more-lifecycle" style={{ display: 'flex', alignItems: 'center' }}>
      <LoadMore loading={loading} hasMore={hasMore} onLoadMore={start} aria-controls={resultsId} />
    </div>
    <p role="status" aria-atomic="true">{status}</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      <button type="button" disabled={!loading} onClick={() => complete(true)}>Completa · altri risultati</button>
      <button type="button" disabled={!loading} onClick={() => complete(false)}>Completa · fine risultati</button>
      <button type="button" disabled={!loading} onClick={() => complete(true)}>Errore · abilita riprova</button>
      <button type="button" onClick={() => { complete(true); setRequests(0); setStatus('') }}>Ripristina esempio</button>
    </div>
  </div>
}
