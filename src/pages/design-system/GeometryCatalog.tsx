import { useId, useState, type CSSProperties } from 'react'
import { borders, gaps, insets, layout, radii, shadows, spacing } from '../../styles/token'
import { catalogId } from './catalogIndex'
import { CopyToken } from './CatalogTools'

export function SpacingCatalog() {
  return <>
    <ul className="ds-space-list">{Object.entries(spacing).map(([name, token]) => <li key={name} id={catalogId('geometry', token.cssVariable)} tabIndex={-1}><header><div className="ds-token-line"><code>{token.cssVariable}</code><CopyToken value={token.cssVariable} /></div><span>{token.value}</span></header><div className="ds-space-track"><span style={{ width: `var(${token.cssVariable})` }} /></div><p>{token.sourceNodes} nodi distinti · {token.properties.join(', ')}</p></li>)}</ul>
    <h3 className="ds-subheading">Padding, gap e margini</h3>
    <p className="ds-explanation">Una sola scala per lo spazio. Il padding è interno, il gap appartiene al contenitore, il margine separa gli elementi. La fonte usa padding e gap: non imponiamo margini automatici.</p>
    <div className="ds-box-model" aria-label="Campione illustrativo: margin24, padding24 e gap16"><div className="ds-box-model-margin"><span>margin · 24px</span><div className="ds-box-model-padding"><span>padding · 24px</span><div className="ds-box-model-gap"><span>Elemento</span><span>gap · 16px</span><span>Elemento</span></div></div></div></div>
    <div className="ds-recipe-list">{Object.entries({ ...insets, ...gaps }).map(([name, token]) => <div key={name} id={catalogId('geometry', token.cssVariable)} tabIndex={-1}><code>{token.cssVariable}</code><span>{token.value}</span></div>)}</div>
  </>
}

export function ShapeCatalog() {
  return <>
    <ul className="ds-radius-list">{Object.entries(radii).map(([name, token]) => <li key={name} id={catalogId('geometry', token.cssVariable)} tabIndex={-1}><div className="ds-radius-sample" style={{ borderRadius: `var(${token.cssVariable})` }} aria-hidden="true" /><h3>{name === 'none' ? 'Nessun raggio' : name === 'subtle' ? 'Raggio minimo' : 'Raggio immagini / avatar'}</h3><code>{token.cssVariable}</code><p>{token.value} · {token.sourceNodes} nodi distinti</p></li>)}</ul>
    <h3 className="ds-subheading">Bordi ed effetto focus della fonte</h3>
    <div className="ds-recipe-list">{Object.entries(borders).map(([name, token]) => <div key={name} id={catalogId('geometry', token.cssVariable)} tabIndex={-1}><code>{token.cssVariable}</code><span>{token.value}</span></div>)}</div>
    <div className="ds-source-focus" id={catalogId('geometry', shadows.formFocus.cssVariable)} tabIndex={-1}><div style={{ border: `var(${borders.formInput.cssVariable})`, boxShadow: `var(${shadows.formFocus.cssVariable})` }}>Campione bordo e ombra dei campi Framer</div><code>{shadows.formFocus.cssVariable}</code><span>{shadows.formFocus.value}</span></div>
    <p className="ds-explanation">Il raggio 56px proviene dalle immagini; non è un raggio universale delle card. I controlli Framer senza raggio rimangono a 0px.</p>
  </>
}

export function LayoutCatalog() {
  return <>
    <div className="ds-layout-values">{Object.entries(layout).map(([name, token]) => <article key={name} id={catalogId('geometry', token.cssVariable)} tabIndex={-1}><h3>{({ pageGutter: 'Gutter delle sezioni', sectionBlock: 'Padding verticale delle sezioni', contentMeasure: 'Larghezza contenuti' })[name]}</h3><code>{token.cssVariable}</code>{'breakpoints' in token ? <dl>{Object.entries(token.breakpoints).map(([label, bp]) => <div key={label}><dt>{label}</dt><dd>{bp.value} · da {bp.minWidth}px</dd></div>)}</dl> : <p>{token.value}</p>}</article>)}</div>
    <div className="ds-layout-preview" style={{ '--preview-gutter': `var(${layout.pageGutter.cssVariable})` } as CSSProperties}><span>Il gutter segue la finestra</span><div>Area del contenuto</div></div>
    <p className="ds-explanation">Contratti osservati nelle sezioni Quote e Process. I valori sono disponibili ai componenti, senza applicarli globalmente a ogni pagina o sezione.</p>
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
