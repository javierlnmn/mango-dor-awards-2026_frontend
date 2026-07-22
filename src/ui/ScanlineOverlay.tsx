import { motion } from 'motion/react';

const ScanlineOverlay = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      <div className="crt-scanlines absolute inset-0 opacity-40" />
      <div className="grain absolute inset-0 opacity-[0.06]" />
      <div className="crt-vignette absolute inset-0" />
      <div className="animate-flicker absolute inset-0 bg-cyan-400/[0.015]" />
      <motion.div
        aria-hidden
        // Animate translateY (composited) rather than `top` (triggers layout);
        // no mix-blend so the whole stack doesn't recomposite each frame.
        initial={{ y: '-10vh' }}
        animate={{ y: '110vh' }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear', delay: 1 }}
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent via-cyan-200/[0.05] to-transparent"
      />
    </div>
  );
};

export default ScanlineOverlay;
