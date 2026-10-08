import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import { breakpoints, colors, fonts, links, radii, spacing, typography } from '../../styles/token'
import { componentExamples } from './componentExamples'
import { SourceCatalog, MotionCatalog, ComponentTokenCatalog } from './SourceCatalog'
import { BaseCatalog, LayoutCatalog, ShapeCatalog, SpacingCatalog } from './GeometryCatalog'
import './DesignSystemPage.css'
import { CatalogSearch, CopyToken } from './CatalogTools'
import { catalogId, revealCatalogTarget } from './catalogIndex'

const sections = [
  ['colori', 'Colori'], ['tipografia', 'Tipografia'], ['font', 'Font'],
  ['link', 'Link'], ['spaziature', 'Spaziature'], ['forme', 'Raggi e bordi'], ['layout', 'Layout'], ['responsive', 'Responsive'],
  ['componenti', 'Componenti React'], ['base', 'Base HTML'],
  ['valori-fonte', 'Valori della fonte'], ['motion', 'Motion'], ['ricette', 'Token componenti'],
] as const
const navigationGroups = [
  { title: 'Fondamenti', sections: sections.slice(0, 8) },
  { title: 'In codice', sections: sections.slice(8, 10) },
  { title: 'Riferimenti', sections: sections.slice(10) },
]
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
  return (
    <section id={id} className="ds-section" aria-labelledby={`${id}-title`} tabIndex={-1}>
      <header className="ds-section-header">
        <div className="ds-section-title"><span className="ds-section-number" aria-hidden="true">{String(sections.findIndex(([key]) => key === id) + 1).padStart(2, '0')}</span><h2 id={`${id}-title`} className="text-headline-32">{title}</h2><a className="ds-section-anchor" href={`#${id}`} aria-label={`Link alla sezione ${title}`}>#</a></div>
        <p>{description}</p>
      </header>
      {children}
    </section>
  )
}

export function DesignSystemPage() {
  const [activeSection, setActiveSection] = useState('colori')
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
    const orient = () => {
      let id: string
      try { id = decodeURIComponent(window.location.hash.slice(1)) } catch { return }
      if (!id) return
      revealCatalogTarget(id)
      const target = document.getElementById(id)
      const section = target?.closest('.ds-section')
      if (section) setActiveSection(section.id)
      target?.scrollIntoView({ block: 'start' })
      target?.focus({ preventScroll: true })
    }
    orient()
    window.addEventListener('hashchange', orient)
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(item => item.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      if (visible[0]) setActiveSection(visible[0].target.closest('.ds-section')!.id)
    }, { rootMargin: '-80px 0px -55% 0px' })
    document.querySelectorAll('.ds-section-header').forEach(node => observer.observe(node))
    return () => { window.removeEventListener('hashchange', orient); observer.disconnect() }
  }, [])

  return (
    <div className="ds-page">
      <a className="ds-skip" href="#ds-content">Vai ai campioni</a>
      <header className="ds-topbar">
        <a className="ds-brand" href="/" aria-label="Loruni, pagina iniziale">Loruni</a>
        <span className="ds-topbar-label">Design system <span className="ds-badge">Catalogo vivo</span></span>
      </header>
      <div className="ds-layout">
        <aside className="ds-sidebar">
          <details className="ds-navigation" open={navigationOpen} onToggle={event => setNavigationOpen(event.currentTarget.open)}>
            <summary>Indice del catalogo</summary>
            <nav aria-label="Sezioni del design system">
              {navigationGroups.map(group => <div className="ds-nav-group" key={group.title}><p>{group.title}</p>{group.sections.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => { if (window.matchMedia('(max-width: 809.98px)').matches) setNavigationOpen(false) }} aria-current={activeSection === id ? 'location' : undefined}><span>{label}</span>{id === 'componenti' && <span className="ds-nav-count">{componentExamples.length}</span>}</a>)}</div>)}
            </nav>
          </details>
          <a className="ds-back-link" href="/">← Torna a Loruni</a>
        </aside>
        <main id="ds-content" className="ds-content" tabIndex={-1}>
          <header className="ds-intro">
            <p className="ds-eyebrow">Loruni / Libreria visiva</p>
            <h1 className="text-headline-76">Design system<span className="ds-title-dot" aria-hidden="true">.</span></h1>
            <p>Il linguaggio di Loruni, dal token al componente.</p>
            <ul className="ds-inventory" aria-label="Elementi presenti">
              {[
                ['colori', Object.keys(colors).length, 'Colori'], ['tipografia', Object.keys(typography).length, 'Stili di testo'],
                ['font', Object.keys(fonts).length, 'Font'], ['spaziature', Object.keys(spacing).length, 'Spaziature'],
                ['forme', Object.keys(radii).length, 'Raggi'], ['componenti', componentExamples.length, 'Componenti React'],
              ].map(([target, count, label]) => <li key={target}><a href={`#${target}`}><strong>{count}</strong><span>{label}</span></a></li>)}
            </ul>
            <CatalogSearch />
          </header>

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


          <CatalogSection id="spaziature" title="Spaziature" description="Valori ricorrenti nei layout Framer, condivisi tra padding, gap e margini. Nessuna scala standard aggiunta."><SpacingCatalog /></CatalogSection>
          <CatalogSection id="forme" title="Raggi e bordi" description="Angoli, bordi e ombra di focus osservati nella fonte, con il loro contesto d’uso."><ShapeCatalog /></CatalogSection>
          <CatalogSection id="layout" title="Layout" description="Contratti responsive ricavati dai layout reali. I componenti restano proprietari della propria geometria."><LayoutCatalog /></CatalogSection>
          <CatalogSection id="responsive" title="Responsive" description="Le soglie di Framer. I campioni tipografici sopra applicano gli stessi intervalli.">
            <dl className="ds-breakpoints">{Object.entries(breakpoints).map(([name, query]) => <div key={name}><dt>{breakpointLabels[name] ?? name}</dt><dd><code>{query}</code></dd></div>)}</dl>
          </CatalogSection>

          <CatalogSection id="componenti" title="Componenti React" description="Implementazioni reali, con varianti e stati da provare.">
            <ul className="ds-component-index">{componentExamples.map(component => <li key={component.name}><a href={`#${catalogId('component', component.name)}`}>{component.name}<span>{component.examples.length} esempi ↗</span></a></li>)}</ul>
            {componentExamples.length === 0 ? <div className="ds-empty"><h3>Il prossimo passo prende forma qui.</h3><p>I token sono pronti. I componenti del sito non sono ancora stati portati in React.</p></div> : componentExamples.map(component => <article className="ds-component" key={component.name} id={catalogId('component', component.name)} tabIndex={-1}><header><h3 className="text-headline-28">{component.name}</h3><span className="ds-badge">{component.examples.length} esempi</span></header><p>{component.description}</p><details className="ds-details ds-component-source"><summary>Riferimento della fonte</summary><code>{component.source}</code></details><div className="ds-component-grid">{component.examples.map(example => <div className="ds-component-example" key={example.name}><h4>{example.name}</h4><div className="ds-component-stage">{example.preview}</div></div>)}</div></article>)}
          </CatalogSection>

          <CatalogSection id="base" title="Base HTML" description="Default solidi e controlli nativi funzionali, pronti per ricevere gli stili dei componenti."><BaseCatalog /></CatalogSection>
          <CatalogSection id="valori-fonte" title="Valori della fonte" description="Proprietà esplicite dei layout e dei controlli. I nomi descrivono la proprietà originale; non implicano una scala o un ruolo condiviso."><SourceCatalog /></CatalogSection>
          <CatalogSection id="motion" title="Motion" description="Configurazioni originali tween e spring. I parametri sono dati della fonte; questi campioni non attivano animazioni."><MotionCatalog /></CatalogSection>
          <CatalogSection id="ricette" title="Token dei componenti" description="Proprietà delle varianti canvas, collegate alle primitive. Sono riferimenti della fonte; i componenti React disponibili restano elencati sotto."><ComponentTokenCatalog /></CatalogSection>
          <footer className="ds-footer"><p>Loruni · Design system in evoluzione</p><a href="#ds-content">Torna all’inizio</a></footer>
        </main>
      </div>
    </div>
  )
}
