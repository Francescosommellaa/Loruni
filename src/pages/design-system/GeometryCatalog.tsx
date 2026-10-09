import { useId, useState, type CSSProperties } from 'react'
import { borders, gaps, insets, layout, radii, shadows, spacing } from '../../styles/token'
import { catalogId } from './catalogIndex'
import { CopyToken } from './CatalogTools'
import './GeometryCatalog.css'

type GeometryToken = { cssVariable: string; value: string; sourceNodes?: number; properties?: readonly string[] }
function TokenDetails({ token }: { token: GeometryToken }) {
  return <details className="ds-geometry-details"><summary>Dettagli CSS</summary>
    <div id={catalogId('geometry', token.cssVariable)} tabIndex={-1}>
      <div className="ds-token-line"><code>{token.cssVariable}</code><CopyToken value={token.cssVariable} /></div>
      <code>{token.value}</code>
      {token.sourceNodes !== undefined && <p>{token.sourceNodes} elementi della fonte{token.properties ? ` · ${token.properties.join(', ')}` : ''}</p>}
    </div>
  </details>
}
const devices: Record<string, string> = { phone: 'Telefono', tablet: 'Tablet', desktop: 'Desktop' }
const resolveSpace = (value: string) => value.replace(/var\((--space-[^)]+)\)/g, (_, name: string) => Object.values(spacing).find(t => t.cssVariable === name)?.value ?? name)

export function SpacingCatalog() {
  return <>
    <div className="ds-spacing-explainer">
      <article><div className="ds-spacing-diagram ds-spacing-diagram--inside"><span>Contenuto</span></div><h2>Spazio interno</h2><p>Respiro tra il contenuto e il suo bordo.</p><small>Padding · 24px</small></article>
      <article><div className="ds-spacing-diagram ds-spacing-diagram--between"><span /><i aria-hidden="true" /><span /></div><h2>Tra gli elementi</h2><p>Una distanza regolare all’interno del gruppo.</p><small>Gap · 16px</small></article>
      <article><div className="ds-spacing-diagram ds-spacing-diagram--outside"><span>Contenuto</span></div><h2>Spazio esterno</h2><p>Separazione rispetto a ciò che sta intorno.</p><small>Margine · 24px, esempio illustrativo</small></article>
    </div>
    <h2 className="ds-subheading">Scala degli spazi</h2>
    <ul className="ds-spacing-scale">{Object.entries(spacing).map(([name, token]) => <li key={name}>
      <div className="ds-spacing-scale__sample"><strong>{token.value}</strong><div className="ds-spacing-ruler"><span style={{ width: `var(${token.cssVariable})` }} /></div></div>
      <TokenDetails token={token} />
    </li>)}</ul>
    <h2 className="ds-subheading">Spazi intorno al contenuto</h2>
    <div className="ds-geometry-grid">{Object.entries(insets).map(([name, token]) => <article key={name}>
      <div className={`ds-inset-diagram ${name === 'section' ? 'ds-inset-diagram--section' : ''}`} aria-hidden="true"><span /></div>
      <h3>{name === 'section' ? 'Intorno alla sezione' : 'Ai lati della pagina'}</h3>
      <p>Ai lati: {Object.values(layout.pageGutter.breakpoints).map(bp => bp.value).join(' / ')}{name === 'section' ? ` · sopra e sotto: ${Object.values(layout.sectionBlock.breakpoints).map(bp => bp.value).join(' / ')}` : ''}</p><small>Telefono / Tablet / Desktop</small>
      <TokenDetails token={token} />
    </article>)}</div>
    <h2 className="ds-subheading">Distanze nella griglia</h2>
    <div className="ds-geometry-grid">{Object.entries(gaps).map(([name, token]) => <article key={name}>
      <div className="ds-gap-diagram" style={{ gap: `var(${token.cssVariable})` }} aria-hidden="true">{Array.from({ length: 6 }, (_, i) => <span key={i} />)}</div>
      <h3>{name === 'rows0Columns8' ? 'Righe unite' : name === 'rows8Columns8' ? 'Distanza uniforme' : 'Righe distanziate'}</h3>
      <p>{resolveSpace(token.value).split(' ').map((v, i) => `${i ? 'Colonne' : 'Righe'} ${v}`).join(' · ')}</p><TokenDetails token={token} />
    </article>)}</div>
  </>
}

export function ShapeCatalog() {
  return <>
    <div className="ds-geometry-grid">{Object.entries(radii).map(([name, token]) => <article key={name}>
      <div className="ds-shape-preview"><span style={{ borderRadius: `var(${token.cssVariable})` }} /></div>
      <h2>{name === 'none' ? 'Angoli retti' : name === 'subtle' ? 'Raggio minimo' : 'Immagini arrotondate'}</h2><p>{token.value}</p><TokenDetails token={token} />
    </article>)}</div>
    <h2 className="ds-subheading">Bordi e focus</h2>
    <div className="ds-geometry-grid">{Object.entries(borders).map(([name, token]) => <article key={name}>
      <div className={`ds-border-preview ds-border-preview--${name}`}><span style={name === 'hairline' ? { borderTopWidth: `var(${token.cssVariable})` } : { border: `var(${token.cssVariable})` }} /></div>
      <h3>{name === 'hairline' ? 'Linea sottile' : name === 'separator' ? 'Separatore' : 'Bordo del campo'}</h3><p>1px</p><TokenDetails token={token} />
    </article>)}<article>
      <div className="ds-focus-preview"><span style={{ border: `var(${borders.formInput.cssVariable})`, boxShadow: `var(${shadows.formFocus.cssVariable})` }}>Campo attivo</span></div>
      <h3>Focus del campo</h3><p>Un’ombra netta accompagna il bordo.</p><TokenDetails token={shadows.formFocus} />
    </article></div>
    <p className="ds-geometry-note">Il raggio di 56px è usato per le immagini. Ogni componente mantiene la propria forma.</p>
  </>
}

export function LayoutCatalog() {
  return <>
    <div className="ds-layout-cards">{Object.entries(layout).map(([name, token]) => <article key={name}>
      <h2>{({ pageGutter: 'Spazio ai lati', sectionBlock: 'Spazio tra le sezioni', contentMeasure: 'Larghezza di lettura' })[name]}</h2>
      {'breakpoints' in token ? <dl>{Object.entries(token.breakpoints).map(([device, bp]) => <div key={device}><dt>{devices[device]}</dt><dd>{bp.value}</dd></div>)}</dl> : <strong>{token.value}</strong>}
      <TokenDetails token={{ ...token, value: 'breakpoints' in token ? Object.entries(token.breakpoints).map(([device, bp]) => `${devices[device]}: ${bp.value} (da ${bp.minWidth}px)`).join(' · ') : token.value }} />
    </article>)}</div>
    <h2 className="ds-subheading">Il contenuto nella pagina</h2>
    <div className="ds-page-diagram" style={{ '--preview-gutter': `var(${layout.pageGutter.cssVariable})` } as CSSProperties}><div><span /><span /><span /></div></div>
    <p className="ds-geometry-note">Lo spazio laterale si adatta alla finestra. La larghezza di lettura mantiene i testi raccolti.</p>
  </>
}

export function BaseCatalog() {
  const id = useId()
  const [active, setActive] = useState(false)
  return <>
    <p className="ds-explanation">Reset a bassa priorità, font ereditati e aspetto nativo dei controlli. Sono campioni HTML della base, non nuovi componenti del prodotto.</p>
    <div className="ds-native-samples"><div className="ds-native-field"><label htmlFor={`${id}-text`}>Campo di testo</label><input id={`${id}-text`} type="text" placeholder="Scrivi un esempio" /></div><div className="ds-native-field"><label htmlFor={`${id}-select`}>Selezione</label><select id={`${id}-select`} defaultValue="prima"><option value="prima">Prima opzione</option><option value="seconda">Seconda opzione</option></select></div><div className="ds-native-field"><label htmlFor={`${id}-textarea`}>Area di testo</label><textarea id={`${id}-textarea`} rows={3} placeholder="Il testo può crescere" /></div><div className="ds-native-actions"><button type="button" aria-pressed={active} onClick={() => setActive(value => !value)}>{active ? 'Attivato' : 'Prova il controllo'}</button><button type="button" disabled>Disabilitato</button><label><input type="checkbox" /> Checkbox nativa</label></div></div>
    <ul className="ds-base-rules"><li>Box sizing coerente e media entro il contenitore.</li><li>Focus visibile da tastiera; niente outline rimosso.</li><li>Liste con marker nativi e dettagli apribili.</li><li>Contenuto hidden rispettato; until-found ricercabile.</li><li>Riduzione del movimento per elementi CSS decorativi espliciti.</li><li>Nessun clipping, smooth scroll o layout globale imposto.</li></ul>
  </>
}
