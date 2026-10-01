import Image from 'next/image';
import { Container, Section } from '@loruni/ui';
import { brand } from '@loruni/ui/brand';
import { websiteStructuredData } from '../config/seo';
import styles from './page.module.css';

export default function LandingPage() {
  return <main id="main" tabIndex={-1}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData()).replace(/</g, '\\u003c') }} />
    <Section aria-labelledby="foundation-title">
      <Container className={styles.content}>
        <Image src={brand.assets.logoLight} alt={brand.name} width={132} height={84} priority />
        <h1 id="foundation-title" data-type="heading-3"><span className="sr-only">Loruni: </span>Foundation ready</h1>
      </Container>
    </Section>
  </main>;
}
