import { motion } from 'motion/react';

import { SITE } from '@/config/site';
import { CATEGORIES } from '@/modules/categories/config/categories';
import ChannelCard from '@/modules/landing/components/ChannelCard';
import Chyron from '@/modules/landing/components/Chyron';
import ExplainerTabs from '@/modules/landing/components/ExplainerTabs';
import GlitchHeadline from '@/modules/landing/components/GlitchHeadline';
import Hero from '@/modules/landing/components/Hero';
import PlayButton from '@/modules/landing/components/PlayButton';
import Timecode from '@/modules/landing/components/Timecode';
import VcrSteps from '@/modules/landing/components/VcrSteps';
import {
  NAV_CHANNELS,
  PROGRAM_GUIDE,
  STEPS,
} from '@/modules/landing/config/content';
import { revealOnView } from '@/lib/motion';
import SectionHeading from '@/ui/SectionHeading';

const HomePage = () => {
  return (
    <>
      <Hero />

      {/* Programming grid */}
      <motion.section
        {...revealOnView}
        id="programming"
        className="mx-auto max-w-6xl scroll-mt-20 px-6 pt-24 md:px-12"
      >
        <SectionHeading
          label="Programación · 21:00"
          title="Qué verás esta noche"
        />
        <div className="mt-10">
          <ExplainerTabs topics={PROGRAM_GUIDE} />
        </div>
      </motion.section>

      {/* Chyron */}
      <motion.div
        {...revealOnView}
        id="categories"
        className="my-20 w-full scroll-mt-20"
      >
        <Chyron items={CATEGORIES} />
      </motion.div>

      {/* Channel nav */}
      <motion.section
        {...revealOnView}
        className="mx-auto max-w-6xl px-6 pb-20 md:px-12"
      >
        <div className="text-right">
          <SectionHeading label="Guía de Canales" title="Explora la gala" />
        </div>
        <div className="mt-14 flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
          {NAV_CHANNELS.map((channel, index) => (
            <ChannelCard
              key={channel.title}
              index={index + 1}
              icon={channel.icon}
              title={channel.title}
              description={channel.description}
              to={channel.to}
              className={
                index === 0
                  ? 'sm:w-96 sm:translate-y-6'
                  : 'sm:-ml-10 sm:w-96 sm:-translate-y-6'
              }
              hoverDirection={index === 0 ? 'left' : 'right'}
              raiseOnHover={index !== 0}
            />
          ))}
        </div>
      </motion.section>

      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-32 md:px-12">
        {/* Steps */}
        <motion.section {...revealOnView} id="vote" className="scroll-mt-20">
          <SectionHeading label="Guía de Programación" title="Cómo votar" />
          <div className="mt-10">
            <VcrSteps steps={STEPS} />
          </div>
        </motion.section>

        {/* Countdown */}
        <motion.section
          {...revealOnView}
          id="countdown"
          className="scroll-mt-20 text-right"
        >
          <SectionHeading
            label="En Directo"
            title="Cuenta atrás para la gran noche"
          />
          <p className="mt-4 text-white/60">
            La revelación de los ganadores será el{' '}
            <span className="text-cyan-200 glow-cyan">
              {SITE.revealDate.toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </p>
          <div className="mt-10 flex justify-end">
            <Timecode targetDate={SITE.revealDate} />
          </div>
        </motion.section>

        {/* Outro */}
        <motion.section
          {...revealOnView}
          className="flex flex-col items-center gap-6 border-t border-white/10 pt-16 text-center"
        >
          <GlitchHeadline holo className="text-4xl md:text-6xl">
            Sintoniza.
          </GlitchHeadline>
          <PlayButton>Próximamente</PlayButton>
          <p className="font-mono-retro text-xs text-white/40">
            {SITE.fullName} © {SITE.edition} — transmisión no oficial entre
            amigos.
          </p>
        </motion.section>
      </div>
    </>
  );
};

export default HomePage;
