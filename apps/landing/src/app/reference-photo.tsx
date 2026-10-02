import Image from 'next/image';
import { referenceMedia, type ReferenceMediaName } from './reference-media';
import styles from './narrative.module.css';

// The composition owns dimensions/crop; the figure owns the reference disclosure.
export function ReferencePhoto({ media, className = '', sizes = '(max-width: 47.99rem) 170vh, 100vw', priority = false }: { media: ReferenceMediaName; className?: string; sizes?: string; priority?: boolean }) {
  const source = referenceMedia[media];
  return <figure className={`${styles.photo} ${className}`}>
    <Image src={source.src} alt={source.alt} fill sizes={sizes} priority={priority} />
    <figcaption data-type="small">Reference sintetica</figcaption>
  </figure>;
}
