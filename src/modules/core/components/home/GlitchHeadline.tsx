import { type ElementType, type ReactNode } from 'react';

import { cn } from '@/lib/cn';

interface GlitchHeadlineProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

const GlitchHeadline = ({
  children,
  as: Tag = 'h1',
  className,
}: GlitchHeadlineProps) => {
  return (
    <Tag
      className={cn(
        'text-glitch font-display uppercase leading-[0.85] tracking-tight text-white',
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default GlitchHeadline;
