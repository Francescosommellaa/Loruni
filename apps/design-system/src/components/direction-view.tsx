import Image from "next/image";
import Link from "next/link";
import { directions, type Direction } from "@/data/directions";
import { routes } from "@/config/routes";
import { SystemLab } from "@/components/system-lab";
import { colorForDirection, visualStyleForDirection } from "@/data/system-profiles";

export function DirectionView({ direction }: { direction: Direction }) {
  const otherDirections = directions.filter((item) => item.id !== direction.id);
  const assetTone = direction.id === "night" ? "light" : "dark";
  const swatches = [
    { name: "Fondo", role: "background" },
    { name: "Testo", role: "text-primary" },
    { name: "Accento", role: "accent" },
    { name: direction.id === "night" ? "Focus" : "Superficie", role: direction.id === "night" ? "focus" : "surface-soft" },
  ];

  return (
    <div className={`direction-page direction-${direction.id}`} style={visualStyleForDirection(direction.id)}>
      <div className="direction-utility page-container">
        <Link href={routes.home.path}>← Tutte le direzioni</Link>
        <span>Prototipo visivo · non approvato</span>
      </div>

      <div className="direction-canvas">
        <div className="page-container">
        <header className="demo-header">
          <Image
            src={`/brand/logo-${assetTone}.svg`}
            width={132}
            height={84}
            alt="Loruni"
            className="demo-logo"
            priority
          />
          <nav className="demo-desktop-nav" aria-label="Sezioni della direzione">
            <a href="#tipografia">Tipografia</a>
            <a href="#laboratorio">Componenti</a>
            <a href="#contesti">Contesti</a>
            <a href="#regole">Regole</a>
          </nav>
          <details className="demo-mobile-nav">
            <summary>Esplora la direzione</summary>
            <nav aria-label="Sezioni della direzione su mobile">
              <a href="#tipografia">Tipografia</a>
              <a href="#laboratorio">Componenti</a>
              <a href="#contesti">Contesti</a>
              <a href="#regole">Regole</a>
            </nav>
          </details>
        </header>

        <section className="demo-hero" aria-labelledby="direction-title">
          <div className="hero-main">
            <p className="demo-marker">Direzione {direction.name.toLowerCase()} · anteprima</p>
            <h1 id="direction-title">{direction.sampleTitle}</h1>
            <p className="hero-text">{direction.premise}</p>
            <div className="hero-actions">
              <a className="demo-button demo-button-primary" href="#laboratorio">Esplora i componenti <span aria-hidden="true">↗</span></a>
              <a className="demo-button demo-button-secondary" href="#palette">Guarda la palette</a>
            </div>
          </div>
          <div className="hero-aside" aria-label="Applicazione dimostrativa dei segni ufficiali Loruni">
            <span>Segni originali Loruni</span>
            <Image src={`/brand/icon-${assetTone}.svg`} width={280} height={280} alt="Icona ufficiale Loruni" className="hero-icon" />
            <Image src={`/brand/watermark-${assetTone}.svg`} width={440} height={280} alt="Watermark ufficiale Loruni" className="hero-watermark" />
          </div>
        </section>

        <section className="demo-section type-section" id="tipografia" aria-labelledby="type-title">
          <div className="section-heading"><span>01 / Gerarchia</span><h2 id="type-title">La voce</h2></div>
          <div className="type-specimen">
            <div><span className="specimen-label">Titolo</span><p className="specimen-display">Stare bene, insieme.</p></div>
            <div><span className="specimen-label">Testo</span><p className="specimen-body">Questa è una frase dimostrativa per valutare ritmo, contrasto e leggibilità. Non descrive servizi o attività già confermati.</p></div>
          </div>
        </section>

        <section className="demo-section components-section" id="componenti" aria-labelledby="components-title">
          <div className="section-heading"><span>02 / Interfaccia</span><h2 id="components-title">Elementi in uso</h2></div>
          <div className="components-grid">
            <div className="sample-panel">
              <span className="sample-label">Navigazione e azioni</span>
              <h3>Un prossimo passo chiaro.</h3>
              <p>Un piccolo esempio di composizione, senza contenuti commerciali definitivi.</p>
              <div className="sample-actions">
                <a className="demo-button demo-button-primary" href="#palette">Vedi i colori <span aria-hidden="true">→</span></a>
                <button className="demo-button demo-button-disabled" type="button" disabled>Non disponibile</button>
              </div>
            </div>
            <div className="sample-panel sample-panel-alt">
              <span className="sample-label">Campo e stato</span>
              <label className="demo-label" htmlFor={`example-${direction.id}`}>Il tuo nome</label>
              <input id={`example-${direction.id}`} type="text" autoComplete="off" placeholder="Scrivi qui" />
              <p className="demo-helper">Campo dimostrativo: non salva né invia dati.</p>
              <details className="demo-details">
                <summary>Come funziona questo esempio?</summary>
                <p>Serve solo a provare focus, testo e apertura da tastiera o touch.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="demo-section palette-section" id="palette" aria-labelledby="palette-title">
          <div className="section-heading"><span>03 / Atmosfera</span><h2 id="palette-title">Colori di prova</h2></div>
          <div className="swatches">
            {swatches.map((swatch) => (
              <div className="swatch" key={swatch.role}>
                <span className="swatch-color" style={{ backgroundColor: colorForDirection(direction.id, swatch.role) }} aria-hidden="true" />
                <span className="swatch-name">{swatch.name}</span>
                <code>{colorForDirection(direction.id, swatch.role)}</code>
              </div>
            ))}
          </div>
          <p className="palette-note">Valori esplorativi: non sono token del prodotto.</p>
        </section>
        <SystemLab direction={direction} />
        </div>
      </div>

      <section className="direction-evaluation page-container" aria-labelledby="evaluation-title">
        <h2 id="evaluation-title">Come valutarla</h2>
        <div><p><strong>Punto di forza.</strong> {direction.strength}</p><p><strong>Attenzione.</strong> {direction.tradeoff}</p></div>
        <nav aria-label="Altre direzioni" className="other-directions">
          {otherDirections.map((item) => <Link href={item.path} key={item.id}>Vedi {item.name.toLowerCase()} <span aria-hidden="true">↗</span></Link>)}
        </nav>
      </section>
    </div>
  );
}
