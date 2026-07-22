import { motion } from 'motion/react';

import BroadcastHud from '@/modules/core/components/home/BroadcastHud';

const STATS = [
  { value: '08', label: 'Categorías' },
  { value: '∞', label: 'Egos en juego' },
  { value: '01', label: 'Noche decisiva' },
];

const line = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col px-6 pb-10 pt-24 md:px-12 md:pt-20"
    >
      <BroadcastHud />

      {/* Vertical edge label */}
      <span className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] font-mono-retro text-[10px] uppercase tracking-[0.4em] text-white/25 lg:block">
        Transmisión en directo · MMXXVI
      </span>

      {/* Wordmark */}
      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.09, delayChildren: 0.1 }}
        className="flex flex-1 flex-col justify-end"
      >
        <motion.p
          variants={line}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-mono-retro mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-cyan-300/80"
        >
          <span className="h-px w-10 bg-cyan-300/50" />
          Edición 2026 · Premios entre amigos
        </motion.p>

        <h1 className="font-brutal uppercase leading-[0.82]">
          <motion.span
            variants={line}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="block text-2xl font-semibold tracking-[0.2em] text-white/40 md:text-3xl"
          >
            Los
          </motion.span>
          <motion.span
            variants={line}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="holo-text block text-[clamp(3.2rem,12vw,11rem)] font-black tracking-tight [filter:drop-shadow(0_0_28px_rgba(139,92,246,0.4))]"
          >
            Mango
          </motion.span>
          <motion.span
            variants={line}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-stroke-cyan font-brutal block text-[clamp(3.2rem,12vw,11rem)] font-black tracking-tight"
          >
            D'Or
          </motion.span>
          <motion.span
            variants={line}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="block text-4xl font-bold tracking-[0.25em] text-white md:text-6xl"
          >
            Awards
          </motion.span>
        </h1>
      </motion.div>

      {/* Bottom strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
        className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-6"
      >
        <div className="flex items-stretch gap-6 md:gap-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-brutal text-3xl font-black leading-none text-cyan-200 md:text-4xl">
                {stat.value}
              </span>
              <span className="font-mono-retro mt-2 text-[10px] uppercase tracking-[0.2em] text-white/45">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <p className="font-mono-retro flex items-center gap-2 text-xs uppercase tracking-widest text-white/50">
          Desliza
          <span className="animate-float inline-block">↓</span>
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
