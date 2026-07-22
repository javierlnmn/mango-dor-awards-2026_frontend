import { motion } from 'motion/react';

import { palette, withAlpha } from '@/lib/theme';

// Deterministic pseudo-random field (no Math.random so SSR/HMR stay stable)
const PARTICLES = Array.from({ length: 26 }, (_, i) => {
  const seed = (i * 9301 + 49297) % 233280;
  const r = seed / 233280;
  const r2 = ((i * 4231 + 13) % 997) / 997;
  return {
    left: `${(r * 100).toFixed(2)}%`,
    top: `${(r2 * 100).toFixed(2)}%`,
    size: 1 + (i % 3),
    duration: 6 + (i % 5) * 1.5,
    delay: -(i % 7) * 1.3,
    cyan: i % 3 === 0,
  };
});

const Particles = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-[5] overflow-hidden"
    >
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: p.cyan
              ? withAlpha(palette.cyan, 0.9)
              : withAlpha(palette.fuchsia, 0.85),
            boxShadow: p.cyan
              ? `0 0 6px ${withAlpha(palette.cyan, 0.8)}`
              : `0 0 6px ${withAlpha(palette.fuchsia, 0.8)}`,
          }}
          animate={{ y: [0, -22, 0], opacity: [0.15, 0.8, 0.15] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
