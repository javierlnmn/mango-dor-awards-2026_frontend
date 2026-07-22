import { motion, useScroll, useTransform } from 'motion/react';
import { FaRegHandPointer, FaTrophy, FaUsers } from 'react-icons/fa';

import logo from '@/assets/logo.png';
import BroadcastHud from '@/modules/core/components/home/BroadcastHud';
import ChannelCard from '@/modules/core/components/home/ChannelCard';
import Chyron from '@/modules/core/components/home/Chyron';
import GlitchHeadline from '@/modules/core/components/home/GlitchHeadline';
import PlayButton from '@/modules/core/components/home/PlayButton';
import RetroGrid from '@/modules/core/components/home/RetroGrid';
import ScanlineOverlay from '@/modules/core/components/home/ScanlineOverlay';
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
  'font-mono-retro text-xs uppercase tracking-[0.3em] text-fuchsia-400/70';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const sunY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <main className="relative w-full overflow-x-hidden text-white">
      <RetroGrid gridY={gridY} sunY={sunY} />
      <ScanlineOverlay />

      {/* Hero */}
      <section className="relative flex h-screen flex-col justify-between px-6 pb-10 pt-32 md:px-16">
        <BroadcastHud />

        <h1 className="leading-[0.85]">
          <span className="font-display block text-3xl text-white/70 md:text-4xl">
            Los
          </span>
          <GlitchHeadline as="span" className="block text-[16vw] md:text-[7.5vw]">
            Mango D'Or
          </GlitchHeadline>
          <span className="font-display ml-[12vw] block text-3xl text-white/70 md:ml-28 md:text-4xl">
            Awards
          </span>
        </h1>

        <div className="font-mono-retro flex items-end justify-between text-xs uppercase tracking-widest text-white/50 md:text-sm">
          <p>Vuelven · Edición 2026</p>
          <p className="animate-blink">Desliza ↓</p>
        </div>

        <img
          src={logo}
          alt="Mango D'Or Awards"
          className="absolute bottom-8 right-6 h-10 w-auto opacity-50 md:right-16 md:h-14"
        />
      </section>

      {/* Programming grid */}
      <motion.section
        {...reveal}
        className="mx-auto max-w-6xl px-6 pt-24 md:px-16"
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
      <motion.div {...reveal} className="my-20 w-full">
        <Chyron items={CATEGORIES} />
      </motion.div>

      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-32 md:px-16">
        {/* Steps */}
        <motion.section {...reveal} className="max-w-2xl">
          <p className={sectionLabel}>Guía de Programación</p>
          <h2 className="font-display mt-3 text-4xl uppercase md:text-5xl">
            Cómo sintonizar
          </h2>
          <div className="mt-10">
            <VcrSteps steps={STEPS} />
          </div>
        </motion.section>

        {/* Countdown */}
        <motion.section {...reveal}>
          <p className={sectionLabel}>En Directo</p>
          <h2 className="font-display mt-3 text-4xl uppercase md:text-5xl">
            Cuenta atrás para la gran noche
          </h2>
          <p className="mt-4 text-white/60">
            La revelación de los ganadores será el{' '}
            <span className="text-fuchsia-300">
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
          <GlitchHeadline className="text-4xl md:text-6xl">
            Sintoniza.
          </GlitchHeadline>
          <PlayButton>Próximamente</PlayButton>
          <p className="font-mono-retro text-xs text-white/40">
            Mango D'Or Awards © 2026 — transmisión no oficial entre amigos.
          </p>
        </motion.section>
      </div>
    </main>
  );
};

export default Home;
