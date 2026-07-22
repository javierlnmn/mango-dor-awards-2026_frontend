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
