import styles from './narrative.module.css';

// A neutral media slot, not a substitute photograph or a final composition.
export function MediaPlaceholder({ description, className = '' }: { description: string; className?: string }) {
  return <figure className={`${styles.media} ${className}`}>
    <figcaption data-type="small"><span>Placeholder media</span>{description}</figcaption>
  </figure>;
}
