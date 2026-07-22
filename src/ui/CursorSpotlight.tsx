import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useEffect } from 'react';

import { palette, withAlpha } from '@/lib/theme';

const CursorSpotlight = () => {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);

  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  const background = useTransform(
    [sx, sy],
    ([lx, ly]) =>
      `radial-gradient(320px circle at ${lx}px ${ly}px, ${withAlpha(palette.cyan, 0.1)}, ${withAlpha(palette.violet, 0.06)} 40%, transparent 70%)`
  );

  useEffect(() => {
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ background }}
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
    />
  );
};

export default CursorSpotlight;
