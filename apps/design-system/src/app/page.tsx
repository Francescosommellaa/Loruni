import Image from "next/image";
import Link from "next/link";
import { directions } from "@/data/directions";
import { metadataForRoute } from "@/lib/seo";
import { DirectionComparison } from "@/components/direction-comparison";
import { visualStyleForDirection } from "@/data/system-profiles";

export const metadata = metadataForRoute("home");

export default function HomePage() {
  return (
    <div className="overview-shell page-container">
      <section className="overview-intro" aria-labelledby="overview-title">
        <p className="overview-index">Tre proposte da esplorare</p>
        <h1 id="overview-title">Quale Loruni vogliamo costruire?</h1>
        <p className="overview-lead">
          Stessa identità ufficiale, tre modi diversi di organizzare voce, colore e interfaccia.
          Sono prototipi per scegliere una direzione: nessuno è ancora il design system di Loruni.
        </p>
      </section>

      <section className="overview-directions" aria-label="Direzioni visive">
        {directions.map((direction) => (
          <article className={`direction-card direction-${direction.id}`} style={visualStyleForDirection(direction.id)} key={direction.id}>
            <div className="card-stage" aria-hidden="true">
              <div className="stage-top">
                <Image src={`/brand/logo-${direction.id === "editorial" ? "dark" : "light"}.svg`} width={132} height={84} alt="" className="stage-logo" />
                <Image src={`/brand/icon-${direction.id === "editorial" ? "dark" : "light"}.svg`} width={58} height={58} alt="" className="stage-icon" />
              </div>
              <div className="stage-content">
                <span className="stage-small">Una direzione possibile</span>
                <strong>{direction.sampleTitle}</strong>
                <span className="stage-action">Esplora <span>→</span></span>
              </div>
              <div className="stage-bottom"><span>Eventi</span><span>Community</span><span>Info</span></div>
            </div>
            <div className="card-copy">
              <div className="card-heading"><h2>{direction.name}</h2><span>{direction.shortType}</span></div>
              <p>{direction.summary}</p>
              <Link className="card-link" href={direction.path} aria-label={`Esplora la direzione ${direction.name}`}>
                Apri la direzione <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      <DirectionComparison />

      <aside className="overview-note" aria-label="Come valutare le proposte">
        <h2>Come guardarle</h2>
        <p>Apri ogni direzione e confronta tipografia, colori, controlli, densità e resa su schermo piccolo. I testi dell&apos;anteprima sono esempi neutri, non contenuti pubblicati.</p>
      </aside>
    </div>
  );
}
