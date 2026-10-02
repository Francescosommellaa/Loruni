'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button, Switch, Container, Section } from '@loruni/ui';
import { brand } from '@loruni/ui/brand';
import { MotionDiagnostic } from './motion-diagnostic';
import styles from './playground.module.css';

export function Playground() {
  const [light, setLight] = useState(false);
  const [count, setCount] = useState(0);
  const [motionEnabled, setMotionEnabled] = useState(false);
  return <main id="main" tabIndex={-1} data-theme={light ? 'light' : 'dark'} className={styles.page}>
    <Section aria-labelledby="playground-title">
      <Container className={styles.stack}>
        <Image src={light ? brand.assets.logoDark : brand.assets.logoLight} alt={brand.name} width={132} height={84} />
        <h1 id="playground-title" data-type="heading-2">Banco delle fondamenta</h1>
        <p className={styles.description}>Prove interne di token, controlli e ciclo di vita motion. Nessuna composizione della home è stata approvata.</p>
        <div className={styles.controls}>
          <Switch label="Tema chiaro" checked={light} onChange={setLight} />
          <div className={styles.actions}>
            <Button onClick={() => setCount((value) => value + 1)}>Prova pulsante</Button>
            <Button variant="secondary" disabled={count === 0} onClick={() => setCount(0)}>Azzera</Button>
          </div>
          <p role="status">Attivazioni: {count}</p>
        </div>
      </Container>
    </Section>
    <Section aria-labelledby="motion-title">
      <Container className={styles.stack}>
        <h2 id="motion-title" data-type="heading-3">Ciclo di vita GSAP</h2>
        <p className={styles.description}>Il motore viene caricato su richiesta. La prova verifica registrazione e movimento ridotto, senza animare la pagina.</p>
        <div><Button variant="secondary" aria-expanded={motionEnabled} aria-controls="motion-diagnostic" onClick={() => setMotionEnabled((value) => !value)}>{motionEnabled ? 'Rimuovi prova' : 'Verifica GSAP'}</Button></div>
        <div id="motion-diagnostic">{motionEnabled && <MotionDiagnostic />}</div>
      </Container>
    </Section>
  </main>;
}
