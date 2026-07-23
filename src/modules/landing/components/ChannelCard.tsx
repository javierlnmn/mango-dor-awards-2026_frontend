import { type MouseEvent, useRef } from 'react';
import { type IconType } from 'react-icons';
import { Link } from 'react-router-dom';

import { cn } from '@/lib/cn';

interface ChannelCardProps {
  index: number;
  icon: IconType;
  title: string;
  description: React.ReactNode;
  to: string;
  className?: string;
  /** Direction the card slides on hover. @default 'up' */
  hoverDirection?: 'up' | 'left' | 'right';
  /** Whether the card rises above its siblings on hover. @default true */
  raiseOnHover?: boolean;
}

const HOVER_TRANSLATE = {
  up: 'hover:-translate-y-1',
  left: 'hover:-translate-x-2',
  right: 'hover:translate-x-2',
};

const ChannelCard = ({
  index,
  icon: Icon,
  title,
  description,
  to,
  className,
  hoverDirection = 'up',
  raiseOnHover = true,
}: ChannelCardProps) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <Link
      ref={ref}
      to={to}
      onMouseMove={handleMove}
      className={cn(
        'group glass holo-border relative z-0 block overflow-hidden rounded-xl p-6 transition-transform duration-300',
        raiseOnHover && 'hover:z-10',
        HOVER_TRANSLATE[hoverDirection],
        className
      )}
    >
      {/* Cursor-follow spotlight */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 [background:radial-gradient(240px_circle_at_var(--mx,50%)_var(--my,50%),rgba(34,211,238,0.14),transparent_70%)] group-hover:opacity-100" />
      {/* Holographic sheen sweep */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <div className="relative">
        <div className="mb-6 flex items-center justify-between font-mono-retro text-[11px] tracking-widest text-cyan-300/70">
          <span>CH.0{index}</span>
          <span className="animate-blink text-fuchsia-400">●</span>
        </div>

        <div className="mb-5 inline-flex rounded-lg border border-cyan-300/20 bg-cyan-400/5 p-3 text-2xl text-cyan-200 shadow-[0_0_20px_-6px_rgba(34,211,238,0.6)] transition-colors duration-300 group-hover:border-fuchsia-400/40 group-hover:text-fuchsia-200">
          <Icon />
        </div>

        <h3 className="font-display mb-2 text-2xl uppercase text-white">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-white/60">{description}</p>
      </div>
    </Link>
  );
};

export default ChannelCard;
