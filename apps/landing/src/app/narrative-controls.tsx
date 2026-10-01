'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Button, Container } from '@loruni/ui';
import { brand } from '@loruni/ui/brand';
import { site } from '../config/site';
import { journey, narrative } from './narrative-content';
import styles from './narrative.module.css';

// Progressive navigation only: the complete narrative is rendered on the server.
export function NarrativeControls() {
  const [scene, setScene] = useState({ id: narrative.opening.id as string, theme: 'dark' });
  const [menuOpen, setMenuOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scenes = [...document.querySelectorAll<HTMLElement>('[data-scene]')];
    const opening = scenes[0];
    const reversedScenes = [...scenes].reverse();
    const previousNavHeight = document.documentElement.style.getPropertyValue('--journey-nav-height');
    let frame = 0;
    const finishIntro = () => { if (opening) opening.dataset.introComplete = 'true'; };
    const update = () => {
      frame = 0;
      // The same measured height owns both anchor clearance and theme detection.
      const navigationHeight = navigationRef.current?.getBoundingClientRect().height ?? 0;
      document.documentElement.style.setProperty('--journey-nav-height', `${navigationHeight}px`);
      const current = reversedScenes.find((item) => item.getBoundingClientRect().top <= navigationHeight + 1) ?? opening;
      if (current) setScene((previous) => previous.id === current.id ? previous : { id: current.id, theme: current.dataset.theme ?? 'dark' });
      const range = document.documentElement.scrollHeight - window.innerHeight;
      const progress = range > 0 ? Math.max(0, Math.min(1, window.scrollY / range)) : 0;
      progressRef.current?.style.setProperty('--journey-progress', String(progress));
      if (window.scrollY > 0) finishIntro();
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const resizeObserver = new ResizeObserver(schedule);
    if (navigationRef.current) resizeObserver.observe(navigationRef.current);
    // Input ends the autonomous intro immediately; none of these cancels input.
    const inputs = ['pointerdown', 'keydown', 'wheel', 'touchstart'] as const;
    inputs.forEach((event) => window.addEventListener(event, finishIntro, { passive: true }));
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      if (previousNavHeight) document.documentElement.style.setProperty('--journey-nav-height', previousNavHeight);
      else document.documentElement.style.removeProperty('--journey-nav-height');
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      inputs.forEach((event) => window.removeEventListener(event, finishIntro));
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [menuOpen]);

  function openMenu() {
    dialogRef.current?.showModal();
    setMenuOpen(true);
  }

  function goToScene(id: string) {
    dialogRef.current?.close();
    const target = document.getElementById(id);
    // Preserve the reading position for keyboard users after a modal jump.
    if (target) {
      target.tabIndex = -1;
      target.focus({ preventScroll: true });
    }
  }

  return <>
    <header ref={navigationRef} className={styles.navigation} data-theme={scene.theme} data-hidden={scene.id === narrative.opening.id} inert={scene.id === narrative.opening.id} aria-hidden={scene.id === narrative.opening.id}>
      <Container className={styles.navigationContent}>
        <a href={`#${narrative.opening.id}`} aria-label="Loruni, torna all’inizio"><Image src={scene.theme === 'light' ? brand.assets.logoDark : brand.assets.logoLight} alt="" width={88} height={56} /></a>
        <a className={styles.visitShortcut} href={`#${narrative.visit.id}`}>{site.actions.primary}</a>
        <Button variant="secondary" aria-haspopup="dialog" aria-expanded={menuOpen} aria-controls="journey-menu" onClick={openMenu}>Menu</Button>
      </Container>
      <div ref={progressRef} className={styles.progress} aria-hidden="true" />
    </header>
    <dialog id="journey-menu" ref={dialogRef} className={styles.menu} aria-labelledby="menu-title" onClose={() => setMenuOpen(false)}>
      <Container className={styles.menuContent}>
        <div className={styles.menuTop}><h2 id="menu-title" data-type="heading-2">Dentro Loruni</h2><Button variant="secondary" onClick={() => dialogRef.current?.close()}>Chiudi</Button></div>
        <nav aria-label="Momenti della serata"><ul className={styles.menuLinks}>
          {journey.map((item) => <li key={item.id}><a href={`#${item.id}`} aria-current={scene.id === item.id ? 'location' : undefined} onClick={() => goToScene(item.id)}>{item.label}</a></li>)}
        </ul></nav>
      </Container>
    </dialog>
  </>;
}
