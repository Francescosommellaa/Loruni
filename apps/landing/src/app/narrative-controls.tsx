'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Container } from '@loruni/ui';
import { brand } from '@loruni/ui/brand';
import { site } from '../config/site';
import { journey, narrative } from './narrative-content';
import { ReferencePhoto } from './reference-photo';
import type { ReferenceMediaName } from './reference-media';
import styles from './narrative.module.css';

// Progressive navigation only: the complete narrative is rendered on the server.
export function NarrativeControls() {
  const [scene, setScene] = useState({ id: narrative.opening.id as string, theme: 'dark' });
  const [menuOpen, setMenuOpen] = useState(false);
  const [preview, setPreview] = useState<ReferenceMediaName>('social');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scenes = [...document.querySelectorAll<HTMLElement>('[data-scene]')];
    const opening = scenes[0];
    const reversedScenes = [...scenes].reverse();
    const previousNavHeight = document.documentElement.style.getPropertyValue('--journey-nav-height');
    let frame = 0;
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
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const resizeObserver = new ResizeObserver(schedule);
    if (navigationRef.current) resizeObserver.observe(navigationRef.current);
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      if (previousNavHeight) document.documentElement.style.setProperty('--journey-nav-height', previousNavHeight);
      else document.documentElement.style.removeProperty('--journey-nav-height');
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
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

  function previewScene(id: string) {
    const media: ReferenceMediaName = id === narrative.cocktail.id ? 'cocktail' : id === narrative.table.id ? 'table' : id === narrative.digital.id ? 'gaming' : 'social';
    setPreview(media);
  }

  return <>
    <header ref={navigationRef} className={styles.navigation} data-theme={scene.theme} data-hidden={scene.id === narrative.opening.id} inert={scene.id === narrative.opening.id} aria-hidden={scene.id === narrative.opening.id}>
      <Container className={styles.navigationContent}>
        <a href={`#${narrative.opening.id}`} aria-label="Loruni, torna all’inizio"><Image src={scene.theme === 'light' ? brand.assets.iconDark : brand.assets.iconLight} alt="" width={64} height={64} /></a>
        <a className={styles.visitShortcut} href={`#${narrative.visit.id}`}>{site.actions.primary}</a>
        <button className={styles.navButton} type="button" aria-haspopup="dialog" aria-expanded={menuOpen} aria-controls="journey-menu" onClick={openMenu}>Menu<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1 8h14M8 1v14" stroke="currentColor" /></svg></button>
      </Container>
      <div ref={progressRef} className={styles.progress} aria-hidden="true" />
    </header>
    <dialog id="journey-menu" ref={dialogRef} className={styles.menu} aria-labelledby="menu-title" onClose={() => setMenuOpen(false)}>
      <Container className={styles.menuContent}>
        <div className={styles.menuTop}><h2 id="menu-title">Dentro Loruni</h2><button className={styles.navButton} type="button" onClick={() => dialogRef.current?.close()}>Chiudi</button></div>
        <div className={styles.menuBody}>
          <nav aria-label="Momenti della serata"><ul className={styles.menuLinks}>
            {journey.map((item) => <li key={item.id}><a href={`#${item.id}`} aria-current={scene.id === item.id ? 'location' : undefined} onClick={() => goToScene(item.id)} onMouseEnter={() => previewScene(item.id)} onFocus={() => previewScene(item.id)}>{item.label}</a></li>)}
          </ul></nav>
          {menuOpen && <ReferencePhoto media={preview} className={styles.menuPreview} sizes="(min-width: 48rem) 45vw, 100vw" />}
        </div>
        <div className={styles.menuFooter}><span>{site.business.city}</span><a href={site.social.instagram}>@loruni.it</a></div>
      </Container>
    </dialog>
  </>;
}
