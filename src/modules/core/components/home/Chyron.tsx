interface ChyronProps {
  items: string[];
}

const Chyron = ({ items }: ChyronProps) => {
  const loop = [...items, ...items];

  return (
    <div className="glass relative flex w-full items-stretch overflow-hidden border-y border-cyan-400/25">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-fuchsia-600/10 via-transparent to-cyan-500/10" />

      <span className="font-display relative z-10 flex shrink-0 items-center gap-2 bg-gradient-to-r from-fuchsia-500 to-fuchsia-400 px-4 py-3 text-sm uppercase tracking-wide text-black shadow-[0_0_24px_-4px_rgba(232,121,249,0.8)]">
        <span className="animate-blink h-2 w-2 rounded-full bg-black/80" />
        Mango D'Or · En Vivo
      </span>

      <div className="relative flex-1 overflow-hidden">
        {/* edge fades — anchored to the ticker column so they always align */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink/70 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink/70 to-transparent" />

        <div className="animate-ticker flex w-max items-center gap-10 whitespace-nowrap py-3 font-mono-retro text-sm text-white/80">
          {loop.map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-3">
              <span className="text-cyan-300">▸</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chyron;
