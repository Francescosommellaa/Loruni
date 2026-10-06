import { component, controlDefaults, motion, primitive } from '../../styles/token'
import { catalogId } from './catalogIndex'
import { CopyToken } from './CatalogTools'

export function SourceCatalog() {
  return Object.entries(primitive).map(([category, group]) => (
    <details className="ds-details" key={category}>
      <summary>{category} · {Object.keys(group).length} valori</summary>
      <div className="ds-table-scroll" tabIndex={0} role="region" aria-label={`Token ${category}`}>
        <table><caption>{category}</caption><thead><tr><th scope="col">Token CSS</th><th scope="col">Valore esatto</th></tr></thead>
          <tbody>{Object.entries(group).map(([name, token]) => <tr key={name} id={catalogId('source', token.cssVariable)} tabIndex={-1}><th scope="row"><div className="ds-token-line"><code>{token.cssVariable}</code><CopyToken value={token.cssVariable} /></div></th><td><code>{String(token.value)}</code></td></tr>)}</tbody>
        </table>
      </div>
    </details>
  ))
}

export function MotionCatalog() {
  return Object.entries(motion.transitions).map(([name, transition]) => (
    <details className="ds-details" key={name} id={catalogId('motion', name)} tabIndex={-1}>
      <summary>{name}</summary>
      <p><code>{transition.raw}</code></p>
      <dl className="ds-properties">{Object.entries(transition.config).map(([property, value]) => <div key={property}><dt>{property}</dt><dd><code>{JSON.stringify(value)}</code></dd></div>)}</dl>
      <p><code>{transition.cssVariable}</code></p>
    </details>
  ))
}

export function ComponentTokenCatalog() {
  const recipes: Readonly<Record<string, Readonly<Record<string, Readonly<Record<string, { readonly value: string | number; readonly cssVariable: string }>>>>>> = component
  return <>{Object.entries(recipes).map(([name, variants]) => (
    <details className="ds-details" key={name}>
      <summary>{name} · {Object.keys(variants).length} varianti</summary>
      {Object.entries(variants).map(([variant, properties]) => <div key={variant}><h3>{variant}</h3><dl className="ds-properties">{Object.entries(properties).map(([property, token]) => <div key={property} id={catalogId('recipe', token.cssVariable)} tabIndex={-1}><dt>{property}</dt><dd><code>{String(token.value)}</code><div className="ds-token-line"><code>{token.cssVariable}</code><CopyToken value={token.cssVariable} /></div></dd></div>)}</dl></div>)}
    </details>
  ))}<details className="ds-details"><summary>Default dichiarati nei controlli</summary><p>Valori di default delle definizioni. Le proprietà delle istanze possono sovrascriverli.</p>{Object.entries(controlDefaults).map(([name, properties]) => <div key={name}><h3>{name}</h3><dl className="ds-properties">{Object.entries(properties).map(([property, token]) => <div key={property} id={catalogId('default', `${name}-${property}`)} tabIndex={-1}><dt>{property}</dt><dd><code>{String(token.value)}</code></dd></div>)}</dl></div>)}</details></>
}
