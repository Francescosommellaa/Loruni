import type { CSSProperties, ReactNode } from 'react'
import { colors, fonts, spacing, typography } from '../../styles/token'
import { Icon } from '../../components/Icon'
import { Label } from '../../components/Label'
import { CategoryLabel } from '../../components/CategoryLabel'
import { componentExamples } from './componentExamples'
import { catalogId } from './catalogIndex'

function OverviewTile({ target, title, description, children }: { target: string; title: string; description: string; children: ReactNode }) {
  return <a className="ds-overview-tile" href={`#${target}`}>
    <div className="ds-overview-preview" aria-hidden="true">{children}</div>
    <div className="ds-overview-caption"><h2>{title}<span aria-hidden="true">↗</span></h2><p>{description}</p></div>
  </a>
}

export function CatalogOverview() {
  return <section id="introduzione" className="ds-overview" aria-labelledby="introduzione-title" tabIndex={-1}>
    <header className="ds-intro"><h1 id="introduzione-title">Loruni Design System</h1><p>Il linguaggio visivo di Loruni. Fondamenti, componenti e dettagli, in un unico posto.</p></header>
    <div className="ds-overview-grid">
      <OverviewTile target="colori" title="Colori" description={`${Object.keys(colors).length} colori, dai neutri agli accenti del brand.`}>
        <div className="ds-overview-palette">{[colors.neutral50, colors.neutral200, colors.neutral400, colors.neutral600, colors.neutral800, colors.brandPrimary, colors.brandAccent].map(color => <span key={color.cssVariable} style={{ '--preview-color': `var(${color.cssVariable})` } as CSSProperties} />)}</div>
      </OverviewTile>
      <OverviewTile target="tipografia" title="Tipografia" description={`${Object.keys(typography).length} preset per titoli, testi e label.`}>
        <div className="ds-overview-type"><span>Aa</span><span>Le cose belle<br />iniziano insieme.</span></div>
      </OverviewTile>
      <OverviewTile target="componenti" title="Componenti" description={`${componentExamples.length} componenti React, con varianti e stati reali.`}>
        <div className="ds-overview-components"><Label title="Dentro Loruni" /><div className="ds-overview-labels"><CategoryLabel title="Serate Loruni" /><CategoryLabel title="Giochi da tavolo" backgroundColor="var(--color-brand-accent)" /></div><Icon name="testimonial-forward" width={40} height={40} /></div>
      </OverviewTile>
      <OverviewTile target={catalogId('component', 'Icon Engine')} title="Icone" description="Frecce, simboli e asset. Un unico registro.">
        <div className="ds-overview-icons"><Icon name="arrow-forward" size={28} /><Icon name="button-arrow" /><Icon name="testimonial-back" width={28} height={28} /><Icon name="testimonial-forward" width={28} height={28} /><Icon name="quote" width={28} /><Icon name="button-arrow-mobile" /></div>
      </OverviewTile>
      <OverviewTile target="layout" title="Layout e spaziature" description={`${Object.keys(spacing).length} spaziature e contratti responsive.`}>
        <div className="ds-overview-layout"><span /><span /><span /><span /><span /><span /></div>
      </OverviewTile>
      <OverviewTile target="font" title="Font" description="Tre famiglie. Tutte caricate localmente.">
        <div className="ds-overview-fonts">{Object.values(fonts).map(font => <span key={font.family} style={{ fontFamily: `var(${font.cssVariable})` }}>{font.family}</span>)}</div>
      </OverviewTile>
    </div>
  </section>
}
