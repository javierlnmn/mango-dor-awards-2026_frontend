import { motion } from 'motion/react';
import { FaRegHandPointer, FaTrophy, FaUsers } from 'react-icons/fa';

import ChannelCard from '@/modules/core/components/home/ChannelCard';
import Chyron from '@/modules/core/components/home/Chyron';
import CursorSpotlight from '@/modules/core/components/home/CursorSpotlight';
import GlitchHeadline from '@/modules/core/components/home/GlitchHeadline';
import Hero from '@/modules/core/components/home/Hero';
import Particles from '@/modules/core/components/home/Particles';
import PlayButton from '@/modules/core/components/home/PlayButton';
import RetroGrid from '@/modules/core/components/home/RetroGrid';
import ScanlineOverlay from '@/modules/core/components/home/ScanlineOverlay';
import Sidebar from '@/modules/core/components/home/Sidebar';
import Timecode from '@/modules/core/components/home/Timecode';
import VcrSteps from '@/modules/core/components/home/VcrSteps';

const REVEAL_DATE = new Date('2026-12-20T21:00:00');

const CATEGORIES = [
  'Mejor Meme del Año',
  'El Más Dramático',
  'Icono Indiscutible',
  'Mejor Outfit',
  'El Que Más Tarda en Responder',
  'La Reina del Drama',
  'Mejor Tirador de Plancha',
  'El Más Random',
];

const CHANNELS = [
  {
    icon: FaUsers,
    title: 'Candidatos',
    description:
      'Quiénes se juegan el trofeo esta noche. Cada uno postulado por sus propios méritos (o desastres).',
  },
  {
    icon: FaTrophy,
    title: 'Categorías',
    description:
      'Los premios en juego. De lo más honorable a lo más absurdo, todo se vota igual.',
  },
  {
    icon: FaRegHandPointer,
    title: 'Votos',
    description:
      'El público decide. Reparte tus votos entre tus favoritos en cada categoría.',
  },
];

const STEPS = [
  {
    title: 'Cuenta requerida',
    description: 'Regístrate o inicia sesión para poder participar.',
    icon: '👤',
  },
  {
    title: 'Buscar categorías',
    description: 'Explora las categorías y conoce a los nominados.',
    icon: '🔍',
  },
  {
    title: 'Repartir los votos',
    description: 'Distribuye tus votos entre tus candidatos favoritos.',
    icon: '🗳️',
  },
  {
    title: 'Resultados',
    description: 'Llegado el día, descubre quién se lleva cada trofeo.',
    icon: '🏆',
  },
];

const reveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

const sectionLabel =
  'font-mono-retro inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-cyan-300/80 before:h-px before:w-8 before:bg-cyan-300/50 before:content-[""]';

const Home = () => {
  return (
    <div className="viewfinder relative min-h-screen w-full overflow-x-hidden text-white">
      <RetroGrid />
      <Particles />
      <CursorSpotlight />
      <ScanlineOverlay />
      <Sidebar />

      <main className="relative md:pl-64">
        <Hero />

        {/* Programming grid */}
        <motion.section
          {...reveal}
          id="programacion"
          className="mx-auto max-w-6xl scroll-mt-20 px-6 pt-24 md:px-12"
        >
          <p className={sectionLabel}>Programación · 21:00</p>
          <h2 className="font-display mt-3 text-4xl uppercase md:text-5xl">
            Qué verás esta noche
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {CHANNELS.map((channel, index) => (
              <ChannelCard
                key={channel.title}
                index={index + 1}
                icon={channel.icon}
                title={channel.title}
                description={channel.description}
              />
            ))}
          </div>
        </motion.section>

        {/* Chyron */}
        <motion.div {...reveal} id="categorias" className="my-20 w-full scroll-mt-20">
          <Chyron items={CATEGORIES} />
        </motion.div>

        <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-32 md:px-12">
          {/* Steps */}
          <motion.section
            {...reveal}
            id="votar"
            className="max-w-2xl scroll-mt-20"
          >
            <p className={sectionLabel}>Guía de Programación</p>
            <h2 className="font-display mt-3 text-4xl uppercase md:text-5xl">
              Cómo sintonizar
            </h2>
            <div className="mt-10">
              <VcrSteps steps={STEPS} />
            </div>
          </motion.section>

          {/* Countdown */}
          <motion.section {...reveal} id="cuenta-atras" className="scroll-mt-20">
            <p className={sectionLabel}>En Directo</p>
            <h2 className="font-display mt-3 text-4xl uppercase md:text-5xl">
              Cuenta atrás para la gran noche
            </h2>
            <p className="mt-4 text-white/60">
              La revelación de los ganadores será el{' '}
              <span className="text-cyan-200 glow-cyan">
                {REVEAL_DATE.toLocaleDateString('es-ES', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </p>
            <div className="mt-10">
              <Timecode targetDate={REVEAL_DATE} />
            </div>
          </motion.section>

          {/* Outro */}
          <motion.section
            {...reveal}
            className="flex flex-col items-start gap-6 border-t border-white/10 pt-16"
          >
            <GlitchHeadline holo className="text-4xl md:text-6xl">
              Sintoniza.
            </GlitchHeadline>
            <PlayButton>Próximamente</PlayButton>
            <p className="font-mono-retro text-xs text-white/40">
              Mango D'Or Awards © 2026 — transmisión no oficial entre amigos.
            </p>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default Home;
