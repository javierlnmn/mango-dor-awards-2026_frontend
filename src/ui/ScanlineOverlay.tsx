import { motion } from 'motion/react';

const ScanlineOverlay = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      <div className="crt-scanlines absolute inset-0 opacity-40" />
      <div className="grain absolute inset-0 opacity-[0.06] mix-blend-overlay" />
      <div className="crt-vignette absolute inset-0" />
      <div className="animate-flicker absolute inset-0 bg-cyan-400/[0.015]" />
      <motion.div
        aria-hidden
        initial={{ top: '-10%' }}
        animate={{ top: '110%' }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear', delay: 1 }}
        className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-cyan-200/[0.05] to-transparent mix-blend-overlay"
      />
    </div>
  );
};

export default ScanlineOverlay;
