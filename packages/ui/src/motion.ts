type MotionEngine = {
  gsap: typeof import('gsap').gsap;
  ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger;
};
let enginePromise: Promise<MotionEngine> | undefined;
export function loadMotionEngine(): Promise<MotionEngine> {
  if (typeof window === 'undefined') return Promise.reject(new Error('Motion requires a browser.'));
  enginePromise ??= Promise.all([import('gsap'), import('gsap/ScrollTrigger')])
    .then(([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      return { gsap, ScrollTrigger };
    }).catch((error: unknown) => { enginePromise = undefined; throw error; });
  return enginePromise;
}
export function createMotionScope(
  engine: MotionEngine,
  scope: HTMLElement,
  setup: (context: MotionEngine & { reducedMotion: boolean }) => void | (() => void),
) {
  // matchMedia owns its GSAP context and reverts it on preference changes/unmount.
  const media = engine.gsap.matchMedia();
  media.add({ normal: '(prefers-reduced-motion: no-preference)', reduced: '(prefers-reduced-motion: reduce)' },
    (context) => setup({ ...engine, reducedMotion: Boolean(context.conditions?.reduced) }), scope);
  return () => media.revert();
}
