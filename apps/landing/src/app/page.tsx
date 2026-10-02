import Image from 'next/image';
import type { CSSProperties } from 'react';
import { Button, Container } from '@loruni/ui';
import { brand } from '@loruni/ui/brand';
import { businessStructuredData } from '../config/seo';
import { site } from '../config/site';
import { narrative } from './narrative-content';
import { NarrativeControls } from './narrative-controls';
import { ReferencePhoto } from './reference-photo';
import { referenceMedia } from './reference-media';
import { JourneyArrow, JourneyLink } from './journey-link';
import styles from './narrative.module.css';

/* Phase 03: cinematic/editorial night, inherited Loruni palette and official assets.
   Static posters first: partial social opening, social release, bar/table continuity,
   deeper gaming room, quiet app/events, convergence and huge real visit link.
   No choreography or pins. Synthetic references never document the real venue. */
export default function LandingPage() {
  const mask = { '--brand-mask': 'url("' + brand.assets.watermarkLight + '")', '--opening-image': 'url("' + referenceMedia.social.src + '")' } as CSSProperties;
  return <>
    <NarrativeControls />
    <main id="main" tabIndex={-1} className={styles.night} style={mask}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessStructuredData()).replace(/</g, '\\u003c') }} />
      <section id={narrative.opening.id} data-scene data-theme="dark" className={styles.opening} aria-labelledby="opening-title">
        <div className={styles.openingWindow} aria-hidden="true" />
        <Container className={styles.openingContent}>
          <ReferencePhoto media="social" className={styles.openingPhoto} sizes="(min-width: 64rem) 45vw, 80vw" priority />
          <h1 id="opening-title" data-type="poster"><span className="sr-only">Loruni — </span><span>{narrative.opening.lines[0]}</span><span>{narrative.opening.lines[1]}</span></h1>
          <div className={styles.openingBottom}>
            <Image src={brand.assets.logoLight} alt={brand.name} width={176} height={112} priority />
            <div className={styles.openingContext}>
              <p data-type="small">Socialità, cocktail e gioco.<br />Anche senza giocare.</p>
              <p data-type="small">{site.business.city}, dopo il giorno.</p>
            </div>
            <a className={styles.scrollHint} href={`#${narrative.social.id}`}>Entra nella serata<span aria-hidden="true" className={styles.scrollLine} /></a>
          </div>
        </Container>
      </section>
      <section id={narrative.social.id} data-scene data-theme="dark" className={styles.social} aria-labelledby="social-title">
        <ReferencePhoto media="social" className={styles.socialPhoto} priority />
        <Container className={styles.socialContent}>
          <h2 id="social-title" data-type="poster">{narrative.social.lines[0]}<br />{narrative.social.lines[1]}</h2>
          <JourneyLink href={`#${narrative.visit.id}`}>{site.actions.primary}</JourneyLink>
        </Container>
      </section>
      <div className={styles.tablePassage}>
        <section id={narrative.cocktail.id} data-scene data-theme="dark" className={styles.cocktail} aria-labelledby="cocktail-title">
          <Container className={styles.cocktailContent}>
            <h2 id="cocktail-title" data-type="poster">{narrative.cocktail.lines[0]}<br />{narrative.cocktail.lines[1]}</h2>
            <ReferencePhoto media="cocktail" className={styles.cocktailPhoto} sizes="(min-width: 64rem) 130vh, 100vh" />
            <ReferencePhoto media="social" className={styles.cocktailDetail} sizes="(min-width: 64rem) 50vh, 35vh" />
            <p className={styles.cocktailNote} data-type="small">Cocktail.<br />Il bancone è un punto d’incontro.</p>
          </Container>
        </section>
        <section id={narrative.table.id} data-scene data-theme="dark" className={styles.table} aria-labelledby="table-title">
          <Container className={styles.tableContent}>
            <ReferencePhoto media="table" className={styles.tablePhoto} sizes="(min-width: 64rem) 130vh, 100vh" />
            <h2 id="table-title" data-type="scene">{narrative.table.lines[0]}<br />{narrative.table.lines[1]}</h2>
            <p className={styles.tableNote} data-type="small">Giochi da tavolo.<br />Il tuo posto resta, anche se non giochi.</p>
          </Container>
        </section>
      </div>
      <section id={narrative.digital.id} data-scene data-theme="dark" className={styles.digital} aria-labelledby="digital-title">
        <ReferencePhoto media="gaming" className={styles.roomPhoto} />
        <Container className={styles.digitalContent}>
          <h2 id="digital-title" data-type="scene">{narrative.digital.lines[0]}<br />{narrative.digital.lines[1]}</h2>
          <p data-type="small">Gaming digitale.<br />Un altro modo di stare insieme.</p>
        </Container>
      </section>
      <section id={narrative.expansion.id} data-scene data-theme="light" className={styles.expansion} aria-labelledby="expansion-title">
        <Container className={styles.expansionContent}>
          <h2 id="expansion-title" data-type="scene">{narrative.expansion.lines[0]}<br />{narrative.expansion.lines[1]}</h2>
          <div className={styles.appComposition}>
            <div className={styles.appCopy}>
              <h3 data-type="heading-2">Loruni,<br />anche in tasca.</h3>
              <Button variant="secondary" disabled aria-describedby="store-status">{site.actions.secondary}</Button>
              <p id="store-status" data-type="small">Link agli store da confermare.</p>
            </div>
            <figure className={styles.appScreens} aria-label="Spazio riservato alle schermate ufficiali dell’app">
              <p data-type="small">Le schermate reali<br />arriveranno qui.</p>
              <figcaption data-type="small">Placeholder app</figcaption>
            </figure>
          </div>
          <div className={styles.eventTeaser}>
            <ReferencePhoto media="social" sizes="(min-width: 64rem) 30vw, 100vw" />
            <div><h3 data-type="heading-2">Ci rivediamo.</h3><p data-type="small">Eventi. Altre occasioni per ritrovarsi.</p></div>
          </div>
        </Container>
      </section>
      <section id={narrative.connection.id} data-scene data-theme="dark" className={styles.connection} aria-labelledby="connection-title">
        <Container className={styles.connectionContent}>
          <ReferencePhoto media="social" className={styles.connectionSocial} sizes="(min-width: 64rem) 130vh, 95vh" />
          <ReferencePhoto media="table" className={styles.connectionTable} sizes="(min-width: 64rem) 75vh, 45vh" />
          <ReferencePhoto media="gaming" className={styles.connectionGaming} sizes="(min-width: 64rem) 60vh, 50vh" />
          <h2 id="connection-title" data-type="poster">{narrative.connection.lines[0]}<br />{narrative.connection.lines[1]}</h2>
          <Image className={styles.connectionMark} src={brand.assets.watermarkLight} alt="" width={880} height={560} />
          <p className={styles.convergenceWords} data-type="small">Persone / Cocktail / Giochi al tavolo / Gaming digitale</p>
        </Container>
      </section>
      <section id={narrative.visit.id} data-scene data-theme="dark" className={styles.visit} aria-labelledby="visit-title">
        <Container className={styles.visitContent}>
          <Image className={styles.visitMark} src={brand.assets.watermarkLight} alt="" width={440} height={280} />
          <h2 id="visit-title" data-type="poster"><a className={styles.finalLink} href={site.social.instagram} aria-describedby="visit-action"><span>Vieni a</span><span>trovarci<JourneyArrow /></span></a></h2>
          <p id="visit-action" data-type="small">Scrivici su Instagram per le indicazioni.<br />Anche senza giocare.</p>
          <div className={styles.visitDetails}>
            <p>{site.business.city}</p>
            <p>{site.business.hours.opens}–{site.business.hours.closes}<br /><span data-type="small">Orari indicativi</span></p>
            <p data-type="small">Indirizzo da confermare.</p>
          </div>
          <footer className={styles.close}>
            <a href={site.social.instagram}>@loruni.it</a>
            <span data-type="small">Reference sintetiche, non fotografie della sede.</span>
            <a href={`#${narrative.opening.id}`}>Torna all’inizio</a>
          </footer>
        </Container>
      </section>
    </main>
  </>;
}
