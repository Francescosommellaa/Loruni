import { createContext, useContext, useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import { breakpoints, colors, fonts, links, typography } from '../../styles/token'
import { componentExamples } from './componentExamples'
import { SourceCatalog, MotionCatalog, ComponentTokenCatalog } from './SourceCatalog'
import { BaseCatalog, LayoutCatalog, ShapeCatalog, SpacingCatalog } from './GeometryCatalog'
import './DesignSystemPage.css'
import './CatalogShell.css'
import { CatalogSearch, CopyToken } from './CatalogTools'
import { catalogId, revealCatalogTarget } from './catalogIndex'
import { currentTarget, navigationGroups, navigationItems, sectionForTarget, sortedComponents } from './catalogNavigation'
import { CatalogOverview } from './CatalogOverview'
import { FitPreview } from './FitPreview'

const ActiveDocument = createContext('introduzione')
const baseColorGroups = [
  { name: 'Brand', entries: Object.entries(colors).filter(([, c]) => c.path.startsWith('/Brand/')) },
  { name: 'Neutri', entries: Object.entries(colors).filter(([, c]) => /^\/Neutral\/\d+$/.test(c.path)).sort((a, b) => Number(b[1].path.split('/').pop()) - Number(a[1].path.split('/').pop())) },
  { name: 'Superfici e trasparenze', entries: Object.entries(colors).filter(([, c]) => c.path.startsWith('/Neutral/') && !/^\/Neutral\/\d+$/.test(c.path)) },
]
const groupedColors = new Set(baseColorGroups.flatMap(group => group.entries.map(([name]) => name)))
const colorGroups = [...baseColorGroups, { name: 'Altri colori', entries: Object.entries(colors).filter(([name]) => !groupedColors.has(name)) }].filter(group => group.entries.length > 0)
const breakpointLabels: Record<string, string> = { phone: 'Phone', tablet: 'Tablet', desktop: 'Desktop' }
const specimen = 'Le cose belle iniziano insieme.'
const fontStyleLabel = (style: string) => style === 'italic' ? 'corsivo' : 'normale'

function CatalogSection({ id, title, description, children }: { id: string; title: string; description: string; children: ReactNode }) {
  const active = useContext(ActiveDocument)
  if (active !== id) return null
  return (
    <section id={id} className="ds-section" aria-labelledby={`${id}-title`} tabIndex={-1}>
      <header className="ds-section-header">
        <div className="ds-section-title"><h1 id={`${id}-title`}>{title}</h1><a className="ds-section-anchor" href={`#${id}`} aria-label={`Link alla sezione ${title}`}>#</a></div>
        <p>{description}</p>
      </header>
      {children}
    </section>
  )
}

export function DesignSystemPage() {
  const [targetId, setTargetId] = useState(currentTarget)
  const activeSection = sectionForTarget(targetId) ?? 'introduzione'
  const selectedComponent = componentExamples.find(item => catalogId('component', item.name) === targetId)
  const documentId = selectedComponent ? targetId : activeSection
  const currentIndex = navigationItems.findIndex(([id]) => id === documentId)
  const previousDocument = navigationItems[currentIndex - 1]
  const nextDocument = navigationItems[currentIndex + 1]
  const [sampleText, setSampleText] = useState(specimen)
  const [navigationOpen, setNavigationOpen] = useState(() => !window.matchMedia('(max-width: 809.98px)').matches)
  useEffect(() => {
    const previous = document.title
    document.title = 'Design system — Loruni'
    return () => { document.title = previous }
  }, [])
  useEffect(() => {
    const query = window.matchMedia('(max-width: 809.98px)')
    const update = () => setNavigationOpen(!query.matches)
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])
  useEffect(() => {
    const select = () => {
      const id = currentTarget()
      if (sectionForTarget(id)) {
        setTargetId(id)
        if (window.matchMedia('(max-width: 809.98px)').matches) setNavigationOpen(false)
      } else {
        document.getElementById(id)?.focus()
      }
    }
    window.addEventListener('hashchange', select)
    return () => window.removeEventListener('hashchange', select)
  }, [])
  useEffect(() => {
    revealCatalogTarget(targetId)
    const target = document.getElementById(targetId)
    target?.scrollIntoView({ block: 'start' })
    // Keep the initial unfragmented overview ready for keyboard navigation.
    if (window.location.hash) target?.focus({ preventScroll: true })
  }, [targetId])
  useEffect(() => {
    if (window.matchMedia('(max-width: 809.98px)').matches) return
    const sidebar = document.querySelector<HTMLElement>('.ds-sidebar')
    const link = sidebar?.querySelector<HTMLElement>('a[aria-current]')
    if (!sidebar || !link) return
    const bounds = sidebar.getBoundingClientRect()
    const item = link.getBoundingClientRect()
    if (item.top < bounds.top + 16) sidebar.scrollTop -= bounds.top + 16 - item.top
    else if (item.bottom > bounds.bottom - 16) sidebar.scrollTop += item.bottom - bounds.bottom + 16
  }, [documentId, navigationOpen])

  return (
    <div className="ds-page">
      <a className="ds-skip" href="#ds-content">Vai ai campioni</a>
      <header className="ds-topbar">
        <a className="ds-brand" href="#introduzione" aria-label="Loruni Design System, introduzione">Loruni <span>Design System</span></a>
        <CatalogSearch />
        <a className="ds-topbar-home" href="/">Vai a Loruni <span aria-hidden="true">↗</span></a>
      </header>
      <div className="ds-layout">
        <aside className="ds-sidebar">
          <details className="ds-navigation" open={navigationOpen} onToggle={event => setNavigationOpen(event.currentTarget.open)}>
            <summary>Esplora il design system <span>{selectedComponent?.name ?? navigationItems.find(([id]) => id === documentId)?.[1]}</span></summary>
            <nav aria-label="Sezioni del design system">
              {navigationGroups.map(group => <div className="ds-nav-group" key={group.title}><p>{group.title}</p>{group.items.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => { if (window.matchMedia('(max-width: 809.98px)').matches) setNavigationOpen(false) }} aria-current={documentId === id ? 'location' : undefined}><span>{label}</span>{id === 'componenti' && <span className="ds-nav-count">{componentExamples.length}</span>}</a>)}</div>)}
            </nav>
          </details>
          <a className="ds-back-link" href="/">← Torna a Loruni</a>
        </aside>
        <main id="ds-content" className="ds-content" tabIndex={-1}>
          <ActiveDocument value={activeSection}>
          {activeSection === 'introduzione' && <CatalogOverview />}

          <CatalogSection id="colori" title="Colori" description="La palette completa. I colori con alpha sono mostrati su fondo scuro e chiaro.">
            {colorGroups.map(group => (
              <div className="ds-color-group" key={group.name}>
                <h3>{group.name}</h3>
                <ul className="ds-swatches">
                  {group.entries.map(([name, color]) => (
                    <li key={name} id={catalogId('color', color.cssVariable)} tabIndex={-1}>
                      <div className="ds-swatch" style={{ '--swatch': `var(${color.cssVariable})` } as CSSProperties} aria-hidden="true">
                        <span className="ds-swatch-dark" /><span className="ds-swatch-light" />
                      </div>
                      <h4>{color.path.replace(/^\//, '').replaceAll('/', ' / ')}</h4>
                      <div className="ds-token-line"><code>{color.cssVariable}</code><CopyToken value={color.cssVariable} /></div>
                      <span className="ds-value">{color.light}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CatalogSection>

          <CatalogSection id="tipografia" title="Tipografia" description="I campioni usano i preset reali e seguono la larghezza della finestra. Apri i dettagli per vedere metriche ed enfasi.">
            <div className="ds-specimen-control"><label htmlFor="ds-specimen-input">Testo del campione</label><input id="ds-specimen-input" type="text" value={sampleText} placeholder={specimen} onChange={event => setSampleText(event.target.value)} /><button type="button" className="ds-tool-button" onClick={() => setSampleText(specimen)}>Ripristina</button></div>
            <div className="ds-type-list">
              {Object.entries(typography).map(([name, preset]) => (
                <article className="ds-type-row" key={name} id={catalogId('type', preset.className)} tabIndex={-1}>
                  <header className="ds-type-label"><h3>{preset.path.replace(/^\//, '').replaceAll('/', ' / ')}</h3><div className="ds-token-line"><code>{preset.className}</code><CopyToken value={preset.className} /></div></header>
                  <p className={`ds-specimen ${preset.className}`}>{sampleText || specimen}</p>
                  <details className="ds-details">
                    <summary>Metriche ed enfasi</summary>
                    <p>{preset.font.family} · peso {preset.font.weight} · {fontStyleLabel(preset.font.style)}</p>
                    <div className="ds-table-scroll" tabIndex={0} role="region" aria-label={`Metriche ${preset.path}`}>
                      <table><caption>Intervalli del preset</caption><thead><tr><th scope="col">Da</th><th scope="col">Dimensione</th><th scope="col">Interlinea</th><th scope="col">Tracking</th><th scope="col">Paragrafi</th></tr></thead>
                        <tbody>{preset.breakpoints.map(bp => <tr key={bp.minWidth}><th scope="row">{bp.minWidth}px</th><td>{bp.fontSize}</td><td>{bp.lineHeight}</td><td>{bp.letterSpacing}</td><td>{bp.paragraphSpacing}</td></tr>)}</tbody>
                      </table>
                    </div>
                    <dl className="ds-properties"><div><dt>Allineamento</dt><dd>{preset.alignment}</dd></div><div><dt>Trasformazione</dt><dd>{preset.transform}</dd></div><div><dt>Wrapping</dt><dd>{preset.wrap}</dd></div><div><dt>Decorazione</dt><dd>{preset.decoration}</dd></div><div><dt>OpenType</dt><dd>{Object.entries(preset.features).map(([feature, value]) => `${feature}: ${value}`).join(', ') || 'normal'}</dd></div></dl>
                    {(preset.boldFont || preset.italicFont || preset.boldItalicFont) && <div className={`ds-emphasis ${preset.className}`}><p>{preset.boldFont && <strong>Grassetto. </strong>}{preset.italicFont && <em>Corsivo. </em>}{preset.boldItalicFont && <strong><em>Grassetto corsivo.</em></strong>}</p></div>}
                  </details>
                </article>
              ))}
            </div>
          </CatalogSection>

          <CatalogSection id="font" title="Font" description="Tre famiglie. Ogni variante qui sotto usa il file locale effettivamente caricato.">
            {Object.entries(fonts).map(([name, font]) => (
              <article key={name} className="ds-font-family" id={catalogId('font', font.cssVariable)} tabIndex={-1}>
                <header><h3>{font.family}</h3><code>{font.cssVariable}</code></header>
                <ul>{font.faces.toSorted((a, b) => a.weight - b.weight || a.style.localeCompare(b.style)).map(face => <li key={`${face.weight}-${face.style}`}><span className="ds-font-weight">{face.weight} · {face.style === 'italic' ? 'corsivo' : 'normale'}</span><p style={{ fontFamily: `var(${font.cssVariable})`, fontWeight: face.weight, fontStyle: face.style }}>Aa Bb Cc — È già un bel momento. 0123456789</p></li>)}</ul>
              </article>
            ))}
          </CatalogSection>

          <CatalogSection id="link" title="Link" description="Il preset di testo Link applica il corallo della palette.">
            {Object.entries(links).map(([name, link]) => <div className="ds-link-example" key={name}><a href="#tipografia" className={link.className}>Esplora la tipografia</a><code>{link.className}</code><span>Colore: {link.states.link.textColor}</span></div>)}
          </CatalogSection>


          <CatalogSection id="spaziature" title="Spaziature" description="Lo spazio dà ritmo alla pagina. Esplora le distanze, dal dettaglio più piccolo alle separazioni più ampie."><SpacingCatalog /></CatalogSection>
          <CatalogSection id="forme" title="Raggi e bordi" description="Angoli, bordi e ombra di focus osservati nella fonte, con il loro contesto d’uso."><ShapeCatalog /></CatalogSection>
          <CatalogSection id="layout" title="Layout" description="Spazio, proporzioni e larghezze che accompagnano i contenuti su ogni schermo."><LayoutCatalog /></CatalogSection>
          <CatalogSection id="responsive" title="Responsive" description="Le soglie di Framer. I campioni tipografici sopra applicano gli stessi intervalli.">
            <dl className="ds-breakpoints">{Object.entries(breakpoints).map(([name, query]) => <div key={name}><dt>{breakpointLabels[name] ?? name}</dt><dd><code>{query}</code></dd></div>)}</dl>
          </CatalogSection>

          {activeSection === 'componenti' && (selectedComponent ?
            <article className="ds-component ds-component-document" key={selectedComponent.name} id={targetId} tabIndex={-1} aria-labelledby="ds-component-title">
              <a className="ds-document-back" href="#componenti">← Tutti i componenti</a>
              <header><h1 id="ds-component-title">{selectedComponent.name}</h1><span className="ds-badge">{selectedComponent.examples.length} esempi</span></header>
              <details className="ds-details ds-component-source"><summary>Uso e riferimenti</summary><p>{selectedComponent.description}</p><code>{selectedComponent.source}</code></details>
              <div className="ds-component-grid">{selectedComponent.examples.map(example => <div className="ds-component-example" key={example.name}><h2>{example.name}</h2><div className="ds-component-stage">{selectedComponent.name === 'Button' && example.name !== 'Personalizza il pulsante' ? <FitPreview>{example.preview}</FitPreview> : example.preview}</div></div>)}</div>
            </article> :
            <CatalogSection id="componenti" title="Componenti" description="Implementazioni React reali. Scegli un componente per esplorarne varianti, stati e interazioni.">
              <ul className="ds-component-index">{sortedComponents.map(component => <li key={component.name}><a href={`#${catalogId('component', component.name)}`}><strong>{component.name}</strong><p>{component.description}</p><span>{component.examples.length} esempi <span aria-hidden="true">↗</span></span></a></li>)}</ul>
              {componentExamples.length === 0 && <p className="ds-empty">I componenti migrati appariranno qui.</p>}
            </CatalogSection>)}

          <CatalogSection id="base" title="Base HTML" description="Default solidi e controlli nativi funzionali, pronti per ricevere gli stili dei componenti."><BaseCatalog /></CatalogSection>
          <CatalogSection id="valori-fonte" title="Valori della fonte" description="Proprietà esplicite dei layout e dei controlli. I nomi descrivono la proprietà originale; non implicano una scala o un ruolo condiviso."><SourceCatalog /></CatalogSection>
          <CatalogSection id="motion" title="Motion" description="Configurazioni originali tween e spring. I parametri sono dati della fonte; questi campioni non attivano animazioni."><MotionCatalog /></CatalogSection>
          <CatalogSection id="ricette" title="Token dei componenti" description="Proprietà delle varianti canvas, collegate alle primitive. Sono riferimenti della fonte; le implementazioni disponibili sono nella sezione Componenti."><ComponentTokenCatalog /></CatalogSection>
          </ActiveDocument>
          <nav className="ds-pagination" aria-label="Pagine del catalogo">
            {previousDocument ? <a href={`#${previousDocument[0]}`}><span>Precedente</span><strong>← {previousDocument[1]}</strong></a> : <span />}
            {nextDocument && <a href={`#${nextDocument[0]}`}><span>Successivo</span><strong>{nextDocument[1]} →</strong></a>}
          </nav>
          <footer className="ds-footer"><p>Loruni · Design system in evoluzione</p><a href="#introduzione">Introduzione</a></footer>
        </main>
      </div>
    </div>
  )
}
