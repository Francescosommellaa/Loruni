'use client';
import { useEffect, useRef, useState } from 'react';
import { createMotionScope, loadMotionEngine } from '@loruni/ui/motion';
export function MotionDiagnostic() {
  const root = useRef<HTMLParagraphElement>(null);
  const [status, setStatus] = useState('Caricamento motore…');
  useEffect(() => {
    let cancelled = false;
    let dispose: (() => void) | undefined;
    void loadMotionEngine().then((engine) => {
      if (cancelled || !root.current) return;
      dispose = createMotionScope(engine, root.current, ({ reducedMotion, ScrollTrigger }) => {
        setStatus(`GSAP e ScrollTrigger pronti. Movimento ridotto: ${reducedMotion ? 'attivo' : 'non richiesto'}. Trigger attivi: ${ScrollTrigger.getAll().length}.`);
      });
    }).catch(() => {
      if (!cancelled) setStatus('Motore non disponibile. Rimuovi la prova e riaprila per riprovare.');
    });
    return () => { cancelled = true; dispose?.(); };
  }, []);
  return <p ref={root} role="status">{status}</p>;
}
