import { motion, useMotionValue, useSpring } from 'motion/react';
import { type MouseEvent, type ReactNode } from 'react';

interface PlayButtonProps {
  children: ReactNode;
}

const PlayButton = ({ children }: PlayButtonProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: MouseEvent<HTMLSpanElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className="group relative inline-flex cursor-default items-center gap-3 overflow-hidden rounded-full border border-cyan-300/50 bg-cyan-400/5 px-8 py-4 font-display text-lg uppercase text-cyan-100 shadow-[0_0_30px_-8px_rgba(34,211,238,0.7)] backdrop-blur-sm"
    >
      <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-fuchsia-400 transition-transform duration-300 group-hover:scale-x-100" />
      <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-black">
        <span className="text-sm">▶</span> {children}
      </span>
    </motion.span>
  );
};

export default PlayButton;
