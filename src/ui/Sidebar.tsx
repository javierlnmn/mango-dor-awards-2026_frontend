import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

import logo from '@/assets/logo.png';
import { NAV } from '@/config/navigation';

interface NavContentProps {
  active: string;
  onNavigate: () => void;
}

const NavContent = ({ active, onNavigate }: NavContentProps) => (
  <div className="flex h-full flex-col p-6">
    {/* Emblem */}
    <Link to="/" onClick={onNavigate} className="group flex items-center gap-3">
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
    </Link>

    {/* Nav */}
    <nav className="mt-12 flex-1">
      <p className="font-mono-retro mb-4 text-[10px] uppercase tracking-[0.3em] text-white/30">
        Navegación
      </p>
      <ul className="space-y-1">
        {NAV.map((item) => {
          const isActive = active === item.href;
          return (
            <li key={item.href}>
              <Link
                to={item.href}
                onClick={onNavigate}
                className={`group flex items-center gap-3 py-2 font-mono-retro text-sm tracking-wide transition-colors duration-200 ${
                  isActive
                    ? 'text-cyan-200'
                    : 'text-white/45 hover:text-white'
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.9)]'
                      : 'bg-white/20 group-hover:bg-white/50'
                  }`}
                />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>

    {/* CTA + status */}
    <div className="mt-6">
      <Link
        to="/access"
        onClick={onNavigate}
        className="group relative flex items-center justify-between gap-3 overflow-hidden rounded-sm border border-cyan-300/40 px-4 py-3 font-mono-retro text-[11px] uppercase tracking-[0.3em] text-cyan-100 transition-colors duration-300 hover:text-ink"
      >
        <span className="absolute inset-0 origin-left scale-x-0 bg-cyan-300 transition-transform duration-300 ease-out group-hover:scale-x-100" />
        <span className="relative flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 transition-colors duration-300 group-hover:bg-ink" />
          Acceder
        </span>
        <FiArrowRight className="relative transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
      <p className="font-mono-retro mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/25">
        <span className="animate-blink text-fuchsia-400">●</span>
        Señal estable
      </p>
    </div>
  </div>
);

/* Thin right edge that fades out top and bottom — no top/bottom/left "walls" */
const RightEdge = () => (
  <span className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-cyan-400/35 to-transparent" />
);

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { pathname: active } = useLocation();

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
        className="glass fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-lg text-cyan-200 md:hidden"
      >
        <FiMenu className="text-xl" />
      </button>

      {/* Desktop sidebar */}
      <aside className="glass fixed left-0 top-0 z-40 hidden h-screen w-64 border-0 md:block">
        <RightEdge />
        <NavContent active={active} onNavigate={() => {}} />
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
              className="glass fixed left-0 top-0 z-50 h-screen w-72 border-0 md:hidden"
            >
              <RightEdge />
              <button
                type="button"
                aria-label="Cerrar navegación"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-5 z-10 text-white/60 hover:text-white"
              >
                <FiX className="text-xl" />
              </button>
              <NavContent active={active} onNavigate={() => setOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
