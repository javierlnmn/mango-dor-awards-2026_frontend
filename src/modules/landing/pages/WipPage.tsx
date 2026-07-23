import { motion } from 'motion/react';

import { revealOnView } from '@/lib/motion';
import GlitchHeadline from '@/modules/landing/components/GlitchHeadline';
import Background from '@/ui/Background';

/**
 * Fully self-contained — brings its own backdrop rather than relying on the
 * app's Layout, so it can be rendered with no router/sidebar/shell around it.
 */
const WipPage = () => (
  <div className="viewfinder relative min-h-screen w-full overflow-x-hidden text-white">
    <Background />

    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Extra darkness, scoped to this page only — the shared Background stays subtle for every other route. */}
      <div className="pointer-events-none absolute inset-0 bg-black/60" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.92)_100%)]" />
      <div className="animate-flicker pointer-events-none absolute inset-0 bg-black/20" />

      <motion.div
        {...revealOnView}
        className="relative flex flex-col items-center gap-6"
      >
        <p className="font-mono-retro inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-white/30">
          <span className="animate-blink h-1.5 w-1.5 rounded-full bg-fuchsia-500/70" />
          Frecuencia clasificada
        </p>

        <GlitchHeadline className="text-5xl text-white/80 md:text-7xl">
          Próximamente
        </GlitchHeadline>

        <p className="max-w-md font-mono-retro text-sm leading-relaxed text-white/35">
          Estamos ajustando la señal. Algo se está gestando al otro lado de la
          estática — vuelve pronto para descubrir de qué se trata.
        </p>
      </motion.div>
    </section>
  </div>
);

export default WipPage;
