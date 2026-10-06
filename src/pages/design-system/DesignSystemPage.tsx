import { useEffect, type CSSProperties, type ReactNode } from 'react'
import { breakpoints, colors, fonts, links, typography } from '../../styles/token'
import { componentExamples } from './componentExamples'
import { spacing, radii } from '../../styles/token'
import { SourceCatalog, MotionCatalog, ComponentTokenCatalog } from './SourceCatalog'
import { BaseCatalog, LayoutCatalog, ShapeCatalog, SpacingCatalog } from './GeometryCatalog'
import './DesignSystemPage.css'

const sections = [
  ['colori', 'Colori'], ['tipografia', 'Tipografia'], ['font', 'Font'],
  ['link', 'Link'], ['responsive', 'Responsive'],
  ['spaziature', 'Spaziature'], ['forme', 'Raggi e bordi'], ['layout', 'Layout'], ['base', 'Base HTML'],
  ['valori-fonte', 'Valori della fonte'], ['motion', 'Motion'], ['ricette', 'Token componenti'],
  ['componenti', 'Componenti'],
] as const
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
    <section id={id} className="ds-section" aria-labelledby={`${id}-title`}>
      <header className="ds-section-header">
        <h2 id={`${id}-title`}>{title}</h2>
        <p>{description}</p>
      </header>
      {children}
    </section>
  )
}

export function DesignSystemPage() {
  useEffect(() => {
    const previous = document.title
    document.title = 'Design system — Loruni'
    return () => { document.title = previous }
  }, [])

  return (
    <div className="ds-page">
      <a className="ds-skip" href="#ds-content">Vai ai campioni</a>
      <header className="ds-topbar">
        <a className="ds-brand" href="/" aria-label="Loruni, pagina iniziale">Loruni</a>
        <span>Design system</span>
      </header>
      <div className="ds-layout">
        <aside className="ds-sidebar">
          <nav aria-label="Sezioni del design system">
            {sections.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
          <p>Il sistema cresce qui, un elemento alla volta.</p>
        </aside>
        <main id="ds-content" className="ds-content" tabIndex={-1}>
          <header className="ds-intro">
            <h1>Un linguaggio<br />condiviso.</h1>
            <p>Colori, caratteri e componenti di Loruni. Una raccolta viva di ciò che abbiamo già portato in codice.</p>
            <ul className="ds-inventory" aria-label="Elementi presenti">
              <li>{Object.keys(colors).length} colori</li>
              <li>{Object.keys(typography).length} stili di testo</li>
              <li>{Object.keys(fonts).length} famiglie font</li>
              <li>{Object.keys(spacing).length} spaziature</li>
              <li>{Object.keys(radii).length} raggi</li>
              <li>{componentExamples.length} componenti</li>
            </ul>
          </header>

          <CatalogSection id="colori" title="Colori" description="La palette completa. I colori con alpha sono mostrati su fondo scuro e chiaro.">
            {colorGroups.map(group => (
              <div className="ds-color-group" key={group.name}>
                <h3>{group.name}</h3>
                <ul className="ds-swatches">
                  {group.entries.map(([name, color]) => (
                    <li key={name}>
                      <div className="ds-swatch" style={{ '--swatch': `var(${color.cssVariable})` } as CSSProperties} aria-hidden="true">
                        <span className="ds-swatch-dark" /><span className="ds-swatch-light" />
                      </div>
                      <h4>{color.path.replace(/^\//, '').replaceAll('/', ' / ')}</h4>
                      <code>{color.cssVariable}</code>
                      <span className="ds-value">{color.light}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CatalogSection>

          <CatalogSection id="tipografia" title="Tipografia" description="I campioni usano i preset reali e seguono la larghezza della finestra. Apri i dettagli per vedere metriche ed enfasi.">
            <div className="ds-type-list">
              {Object.entries(typography).map(([name, preset]) => (
                <article className="ds-type-row" key={name}>
                  <header className="ds-type-label"><h3>{preset.path.replace(/^\//, '').replaceAll('/', ' / ')}</h3><code>{preset.className}</code></header>
                  <p className={`ds-specimen ${preset.className}`}>{specimen}</p>
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
              <article key={name} className="ds-font-family">
                <header><h3>{font.family}</h3><code>{font.cssVariable}</code></header>
                <ul>{font.faces.toSorted((a, b) => a.weight - b.weight || a.style.localeCompare(b.style)).map(face => <li key={`${face.weight}-${face.style}`}><span className="ds-font-weight">{face.weight} · {face.style === 'italic' ? 'corsivo' : 'normale'}</span><p style={{ fontFamily: `var(${font.cssVariable})`, fontWeight: face.weight, fontStyle: face.style }}>Aa Bb Cc — È già un bel momento. 0123456789</p></li>)}</ul>
              </article>
            ))}
          </CatalogSection>

          <CatalogSection id="link" title="Link" description="Il preset di testo Link applica il corallo della palette.">
            {Object.entries(links).map(([name, link]) => <div className="ds-link-example" key={name}><a href="#tipografia" className={link.className}>Esplora la tipografia</a><code>{link.className}</code><span>Colore: {link.states.link.textColor}</span></div>)}
          </CatalogSection>

          <CatalogSection id="responsive" title="Responsive" description="Le soglie di Framer. I campioni tipografici sopra applicano gli stessi intervalli.">
            <dl className="ds-breakpoints">{Object.entries(breakpoints).map(([name, query]) => <div key={name}><dt>{breakpointLabels[name] ?? name}</dt><dd><code>{query}</code></dd></div>)}</dl>
          </CatalogSection>

          <CatalogSection id="spaziature" title="Spaziature" description="Valori ricorrenti nei layout Framer, condivisi tra padding, gap e margini. Nessuna scala standard aggiunta."><SpacingCatalog /></CatalogSection>
          <CatalogSection id="forme" title="Raggi e bordi" description="Angoli, bordi e ombra di focus osservati nella fonte, con il loro contesto d’uso."><ShapeCatalog /></CatalogSection>
          <CatalogSection id="layout" title="Layout" description="Contratti responsive ricavati dai layout reali. I componenti restano proprietari della propria geometria."><LayoutCatalog /></CatalogSection>
          <CatalogSection id="base" title="Base HTML" description="Default solidi e controlli nativi funzionali, pronti per ricevere gli stili dei componenti."><BaseCatalog /></CatalogSection>
          <CatalogSection id="valori-fonte" title="Valori della fonte" description="Proprietà esplicite dei layout e dei controlli. I nomi descrivono la proprietà originale; non implicano una scala o un ruolo condiviso."><SourceCatalog /></CatalogSection>
          <CatalogSection id="motion" title="Motion" description="Configurazioni originali tween e spring. I parametri sono dati della fonte; questi campioni non attivano animazioni."><MotionCatalog /></CatalogSection>
          <CatalogSection id="ricette" title="Token dei componenti" description="Proprietà delle varianti canvas, collegate alle primitive. Sono riferimenti della fonte; i componenti React disponibili restano elencati sotto."><ComponentTokenCatalog /></CatalogSection>
          <CatalogSection id="componenti" title="Componenti" description="Ogni componente portato in React troverà qui le sue varianti e i suoi stati reali.">
            {componentExamples.length === 0 ? <div className="ds-empty"><h3>Il prossimo passo prende forma qui.</h3><p>I token sono pronti. I componenti del sito non sono ancora stati portati in React.</p></div> : componentExamples.map(component => <article className="ds-component" key={component.name}><h3>{component.name}</h3><p>{component.description}</p><code>{component.source}</code>{component.examples.map(example => <div className="ds-component-example" key={example.name}><h4>{example.name}</h4><div>{example.preview}</div></div>)}</article>)}
          </CatalogSection>
          <footer className="ds-footer"><p>Loruni · Design system in evoluzione</p><a href="#ds-content">Torna all’inizio</a></footer>
        </main>
      </div>
    </div>
  )
}
