import { type ReactNode } from 'react';

interface PlayButtonProps {
  children: ReactNode;
}

const PlayButton = ({ children }: PlayButtonProps) => {
  return (
    <span className="group relative inline-flex cursor-default items-center gap-3 overflow-hidden border-2 border-fuchsia-400 px-8 py-4 font-display text-lg uppercase text-fuchsia-300">
      <span className="absolute inset-0 origin-bottom scale-y-0 bg-fuchsia-400 transition-transform duration-300 group-hover:scale-y-100" />
      <span className="relative z-10 flex items-center gap-3 transition-colors group-hover:text-black">
        ▶ {children}
      </span>
    </span>
  );
};

export default PlayButton;
