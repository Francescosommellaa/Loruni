import { useId, useState } from 'react'
import { catalogIndex, revealCatalogTarget } from './catalogIndex'

export function CopyToken({ value }: { value: string }) {
  const [status, setStatus] = useState('')
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setStatus('Copiato negli appunti')
    } catch {
      setStatus('Copia non disponibile. Seleziona il testo qui accanto.')
    }
  }
  return <span className="ds-copy-control">
    <button type="button" className="ds-copy" onClick={copy} onBlur={() => setStatus('')} aria-label={`Copia ${value}`} title={`Copia ${value}`}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M8 8h12v12H8zM16 8V4H4v12h4" /></svg>
    </button>
    <span className="ds-copy-status" role="status">{status}</span>
  </span>
}

export function CatalogSearch() {
  const id = useId()
  const [query, setQuery] = useState('')
  const [limit, setLimit] = useState(24)
  const terms = query.trim().toLocaleLowerCase('it').split(/\s+/).filter(Boolean)
  const results = terms.length ? catalogIndex.filter(item => terms.every(term => `${item.name} ${item.value} ${item.category}`.toLocaleLowerCase('it').includes(term))) : []
  return <div className="ds-search" role="search" aria-label="Cerca nel design system">
    <label htmlFor={id}>Trova un token o un componente</label>
    <div className="ds-search-field">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg>
      <input id={id} type="search" placeholder="Nome, variabile CSS o valore…" value={query} aria-controls={`${id}-results`} onChange={event => { setQuery(event.target.value); setLimit(24) }} onKeyDown={event => { if (event.key === 'Escape') setQuery('') }} />
      {query && <button type="button" className="ds-clear" onClick={() => { setQuery(''); document.getElementById(id)?.focus() }}>Cancella</button>}
    </div>
    <div id={`${id}-results`}>
      <p className="ds-search-count" role="status">{terms.length ? `${results.length} risultati${results.length > limit ? ` · primi ${limit}` : ''}` : 'Es. neutral-50, space-24, FAQ Icon'}</p>
      {terms.length > 0 && (results.length ? <>
        <ul className="ds-search-results">{results.slice(0, limit).map((item, index) => <li key={`${item.target}-${index}`}><a href={`#${item.target}`} onClick={() => revealCatalogTarget(item.target)}><span>{item.category}</span><code>{item.name}</code><span className="ds-result-value">{item.value}</span></a></li>)}</ul>
        {results.length > limit && <button type="button" className="ds-tool-button" onClick={() => setLimit(value => value + 24)}>Mostra altri risultati</button>}
      </> : <p className="ds-search-empty">Nessun risultato per “{query.trim()}”. Prova un nome o una variabile diversa.</p>)}
    </div>
  </div>
}
