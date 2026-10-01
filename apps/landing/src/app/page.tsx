import Image from 'next/image';
import { Button, ButtonLink, Container } from '@loruni/ui';
import { brand } from '@loruni/ui/brand';
import { businessStructuredData } from '../config/seo';
import { site } from '../config/site';
import { narrative } from './narrative-content';
import { MediaPlaceholder } from './media-placeholder';
import { NarrativeControls } from './narrative-controls';
import styles from './narrative.module.css';

/* Phase 02 contract: one night, eight landmarks, natural vertical scroll.
   Established palette/fonts/assets; provisional copy and neutral media only.
   Opening: watermark → logo within 1s, short claim, Napoli, no CTA.
   Continuous social/table passage → distinct room → expansion → convergence
   → quiet physical visit. No pinning, final masks, cursor or decorative motion.
   Visual direction and static composition are the next phase, not this one. */
export default function LandingPage() {
  const visitHref = `#${narrative.visit.id}`;
  return <>
    <NarrativeControls />
    <main id="main" tabIndex={-1} className={styles.night}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessStructuredData()).replace(/</g, '\\u003c') }} />

      <section id={narrative.opening.id} data-scene data-theme="dark" className={styles.opening} aria-labelledby="opening-title">
        <Container className={styles.openingContent}>
          <div className={styles.brandReveal}>
            <Image className={styles.openingMark} src={brand.assets.watermarkLight} alt="" width={220} height={140} priority />
            <Image className={styles.openingLogo} src={brand.assets.logoLight} alt={brand.name} width={220} height={140} priority />
          </div>
          <h1 id="opening-title" data-type="display"><span className="sr-only">Loruni — </span>{narrative.opening.lines[0]}<br />{narrative.opening.lines[1]}</h1>
          <p>{site.business.city}. Socialità, cocktail e gioco.</p>
          <a className={styles.scrollHint} href={`#${narrative.social.id}`}>Scorri per entrare</a>
        </Container>
      </section>

      <div className={styles.socialPassage}>
        <section id={narrative.social.id} data-scene data-theme="dark" className={styles.social} aria-labelledby="social-title">
          <Container className={styles.socialContent}>
            <MediaPlaceholder description={narrative.social.media} className={styles.atmosphereMedia} />
            <div className={styles.copy}>
              <h2 id="social-title" data-type="heading-1">{narrative.social.line}</h2>
              <ButtonLink href={visitHref}>{site.actions.primary}</ButtonLink>
            </div>
          </Container>
        </section>

        <div className={styles.tablePassage}>
          <section id={narrative.cocktail.id} data-scene data-theme="dark" className={styles.experience} aria-labelledby="cocktail-title">
            <Container className={styles.cocktailContent}>
              <h2 id="cocktail-title" data-type="heading-1">{narrative.cocktail.line}</h2>
              <MediaPlaceholder description={narrative.cocktail.media} />
            </Container>
          </section>
          <section id={narrative.table.id} data-scene data-theme="dark" className={styles.experience} aria-labelledby="table-title">
            <Container className={styles.tableContent}>
              <MediaPlaceholder description={narrative.table.media} />
              <h2 id="table-title" data-type="heading-1">{narrative.table.line}</h2>
            </Container>
          </section>
        </div>
      </div>

      <section id={narrative.digital.id} data-scene data-theme="light" className={styles.digital} aria-labelledby="digital-title">
        <Container className={styles.digitalContent}>
          <h2 id="digital-title" data-type="heading-1">{narrative.digital.line}</h2>
          <MediaPlaceholder description={narrative.digital.media} className={styles.roomMedia} />
        </Container>
      </section>

      <section id={narrative.expansion.id} data-scene data-theme="dark" className={styles.expansion} aria-labelledby="expansion-title">
        <Container className={styles.expansionContent}>
          <h2 id="expansion-title" data-type="heading-1">{narrative.expansion.line}</h2>
          <div className={styles.extension}>
            <div className={styles.copy}>
              <h3 data-type="heading-3">Loruni, anche nell’app.</h3>
              <Button variant="secondary" disabled aria-describedby="store-status">{site.actions.secondary}</Button>
              <p id="store-status" data-type="small">Link agli store da confermare.</p>
            </div>
            <MediaPlaceholder description={narrative.expansion.media} />
          </div>
          <p className={styles.eventTeaser} data-type="body-large">Eventi: altre occasioni per ritrovarsi.</p>
        </Container>
      </section>

      <section id={narrative.connection.id} data-scene data-theme="dark" className={styles.connection} aria-labelledby="connection-title">
        <Container className={styles.connectionContent}>
          <h2 id="connection-title" data-type="display">{narrative.connection.line}</h2>
          <MediaPlaceholder description={narrative.connection.media} className={styles.convergenceMedia} />
          <p className={styles.convergenceWords} data-type="heading-3">Persone. Cocktail. Giochi al tavolo. Gaming digitale.</p>
          <Image src={brand.assets.watermarkLight} alt="" width={176} height={112} />
        </Container>
      </section>

      <section id={narrative.visit.id} data-scene data-theme="dark" className={styles.visit} aria-labelledby="visit-title">
        <Container className={styles.visitContent}>
          <Image src={brand.assets.watermarkLight} alt="" width={220} height={140} />
          <h2 id="visit-title" data-type="display" tabIndex={-1}>{site.actions.primary}</h2>
          <p data-type="body-large">Anche senza giocare.</p>
          <div className={styles.visitDetails}>
            <p>{site.business.city}</p>
            <p>{site.business.hours.opens}–{site.business.hours.closes}<br /><span data-type="small">Orari indicativi</span></p>
            <p data-type="small">Indirizzo e indicazioni da confermare.</p>
          </div>
          <footer className={styles.close}>
            <a href={site.social.instagram}>Instagram @loruni.it</a>
            <a href={`#${narrative.opening.id}`}>Torna all’inizio</a>
          </footer>
        </Container>
      </section>
    </main>
  </>;
}
