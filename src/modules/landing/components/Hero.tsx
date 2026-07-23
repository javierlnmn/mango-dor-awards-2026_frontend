import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

import BroadcastHud from '@/features/home/components/BroadcastHud';
import { STATS } from '@/features/home/config/content';
import { lineVariants } from '@/lib/motion';

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  // As the hero scrolls away, the title zooms up and fades out.
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 1.7]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative flex min-h-screen flex-col px-6 pb-10 pt-24 md:px-12 md:pt-20"
    >
      <BroadcastHud />

      {/* Vertical edge label */}
      <span className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] font-mono-retro text-[10px] uppercase tracking-[0.4em] text-white/25 lg:block">
        Transmisión en directo · MMXXVI
      </span>

      {/* Wordmark — brutalist, staggered placement, vertically centered */}
      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.09, delayChildren: 0.1 }}
        style={{ scale: titleScale, opacity: titleOpacity, y: titleY }}
        className="flex flex-1 flex-col justify-center md:pl-[3vw] lg:pl-[6vw]"
      >
        <motion.p
          variants={lineVariants}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-mono-retro mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-cyan-300/80"
        >
          <span className="h-px w-10 bg-cyan-300/50" />
          Premios entre amigos
        </motion.p>

        <h1 className="font-brutal uppercase leading-[0.78]">
          <motion.span
            variants={lineVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="holo-text block text-[clamp(3.4rem,12.5vw,11rem)] font-black tracking-tighter [filter:drop-shadow(0_0_28px_rgba(139,92,246,0.4))]"
          >
            Mango
          </motion.span>
          <motion.span
            variants={lineVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-stroke-cyan font-brutal ml-[16%] block text-[clamp(3.4rem,12.5vw,11rem)] font-black tracking-tighter md:ml-[24%]"
          >
            D'Or
          </motion.span>
          <motion.span
            variants={lineVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="ml-[4%] mt-5 flex items-center gap-4 md:gap-6"
          >
            <span className="text-2xl font-bold tracking-[0.4em] text-white/85 md:text-4xl">
              Awards
            </span>
            <span className="hidden h-px w-8 bg-white/25 sm:block md:w-16" />
            <span className="glow-cyan text-2xl font-bold tracking-[0.2em] text-cyan-300 md:text-4xl">
              2026
            </span>
          </motion.span>
        </h1>
      </motion.div>

      {/* Bottom strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
        className="flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-6"
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
