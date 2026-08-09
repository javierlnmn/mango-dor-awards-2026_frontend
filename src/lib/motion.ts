import { type Variants } from 'motion/react';

/** Fade + rise, triggered once when scrolled into view. Spread onto a motion element. */
export const revealOnView = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

/** Per-line reveal used by staggered headline groups (parent drives the stagger). */
export const lineVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

/** Route change: the outgoing page zooms out, the incoming one zooms back in. */
export const pageVariants: Variants = {
  initial: { opacity: 0, scale: 0.94 },
  enter: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
  },
};

/** Same timing, no transform — used when the visitor prefers reduced motion. */
export const pageVariantsReduced: Variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};
