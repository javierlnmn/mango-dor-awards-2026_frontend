import { type ElementType, type ReactNode } from 'react';

import { cn } from '@/lib/cn';

interface GlitchHeadlineProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Holographic gradient fill (violet → cyan) instead of flat white. */
  holo?: boolean;
}

const GlitchHeadline = ({
  children,
  as: Tag = 'h1',
  className,
  holo = false,
}: GlitchHeadlineProps) => {
  return (
    <Tag
      className={cn(
        'font-display uppercase leading-[0.85] tracking-tight',
        holo
          ? 'holo-text [filter:drop-shadow(0_0_22px_rgba(139,92,246,0.35))]'
          : 'text-glitch text-white',
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default GlitchHeadline;
