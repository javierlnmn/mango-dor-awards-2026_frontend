import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';

import logo from '@/assets/logo.png';

interface NavItem {
  id: string;
  label: string;
}

const NAV: NavItem[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'programacion', label: 'Programación' },
  { id: 'categorias', label: 'Categorías' },
  { id: 'votar', label: 'Cómo votar' },
  { id: 'cuenta-atras', label: 'Cuenta atrás' },
];

interface NavContentProps {
  active: string;
  onNavigate: () => void;
  layoutScope: string;
}

const NavContent = ({ active, onNavigate, layoutScope }: NavContentProps) => (
  <div className="flex h-full flex-col p-6">
    {/* Emblem */}
    <a
      href="#inicio"
      onClick={onNavigate}
      className="group flex items-center gap-3"
    >
      <img
        src={logo}
        alt="Mango D'Or Awards"
        className="h-10 w-auto drop-shadow-[0_0_12px_rgba(34,211,238,0.5)] transition-transform duration-300 group-hover:scale-105"
      />
      <span className="leading-tight">
        <span className="font-brutal block text-sm font-extrabold uppercase tracking-tight text-white">
          Mango D'Or
        </span>
        <span className="font-mono-retro block text-[10px] uppercase tracking-[0.3em] text-cyan-300/70">
          Awards 26
        </span>
      </span>
    </a>

    {/* Nav */}
    <nav className="mt-12 flex-1">
      <p className="font-mono-retro mb-4 text-[10px] uppercase tracking-[0.3em] text-white/30">
        Canales
      </p>
      <ul className="space-y-1">
        {NAV.map((item, i) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={onNavigate}
                className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 font-mono-retro text-sm transition-colors duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-white/50 hover:text-white/90'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId={`nav-active-${layoutScope}`}
                    className="glass holo-border absolute inset-0 rounded-lg"
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                )}
                <span
                  className={`relative z-10 text-[10px] tabular-nums ${
                    isActive ? 'text-cyan-300' : 'text-white/30'
                  }`}
                >
                  0{i + 1}
                </span>
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <span className="relative z-10 ml-auto h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>

    {/* CTA + status */}
    <div className="mt-6">
      <a
        href="#votar"
        onClick={onNavigate}
        className="group flex items-center justify-between rounded-lg border border-cyan-300/40 bg-cyan-400/5 px-4 py-3 font-display text-sm uppercase tracking-wide text-cyan-100 shadow-[0_0_24px_-10px_rgba(34,211,238,0.9)] transition-colors duration-300 hover:bg-cyan-400/15"
      >
        Acceder
        <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
      <p className="font-mono-retro mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/25">
        <span className="animate-blink text-fuchsia-400">●</span>
        Señal estable
      </p>
    </div>
  </div>
);

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('inicio');

  // Scrollspy
  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Mobile trigger */}
      <button
        type="button"
        aria-label="Abrir navegación"
        onClick={() => setOpen(true)}
        className="glass holo-border fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-lg text-cyan-200 md:hidden"
      >
        <FiMenu className="text-xl" />
      </button>

      {/* Desktop sidebar */}
      <aside className="glass holo-border fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-white/5 md:block">
        <NavContent active={active} onNavigate={() => {}} layoutScope="desktop" />
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              className="glass fixed left-0 top-0 z-50 h-screen w-72 border-r border-white/10 md:hidden"
            >
              <button
                type="button"
                aria-label="Cerrar navegación"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-5 z-10 text-white/60 hover:text-white"
              >
                <FiX className="text-xl" />
              </button>
              <NavContent
                active={active}
                onNavigate={() => setOpen(false)}
                layoutScope="mobile"
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
