import { motion } from 'motion/react';

const ScanlineOverlay = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      <div className="crt-scanlines absolute inset-0 opacity-60" />
      <div className="crt-vignette absolute inset-0" />
      <div className="absolute inset-0 animate-flicker bg-fuchsia-500/[0.03]" />
      <motion.div
        aria-hidden
        initial={{ top: '-10%' }}
        animate={{ top: '110%' }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: 1 }}
        className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-white/[0.04] to-transparent mix-blend-overlay"
      />
    </div>
  );
};

export default ScanlineOverlay;
