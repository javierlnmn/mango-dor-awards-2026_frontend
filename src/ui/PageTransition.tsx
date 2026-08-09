import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useLocation, useOutlet } from 'react-router-dom';

import { pageVariants, pageVariantsReduced } from '@/lib/motion';

/**
 * Renders the matched route inside a zoom transition. `useOutlet` freezes the
 * outgoing page as a concrete element so it keeps its own content while it
 * animates out, instead of re-rendering into the new route.
 */
const PageTransition = () => {
  const outlet = useOutlet();
  const { pathname } = useLocation();
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={prefersReducedMotion ? pageVariantsReduced : pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        className="transform-gpu will-change-[transform,opacity]"
      >
        {outlet}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
