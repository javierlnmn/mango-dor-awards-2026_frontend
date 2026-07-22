interface ChyronProps {
  items: string[];
}

const Chyron = ({ items }: ChyronProps) => {
  const loop = [...items, ...items];

  return (
    <div className="relative flex w-full items-stretch overflow-hidden border-y border-fuchsia-500/40 bg-gradient-to-r from-fuchsia-600/20 via-black to-violet-600/20">
      <span className="font-display shrink-0 bg-fuchsia-500 px-4 py-3 text-sm uppercase tracking-wide text-black">
        Mango D'Or · En Vivo
      </span>
      <div className="flex-1 overflow-hidden">
        <div className="animate-ticker flex w-max items-center gap-10 whitespace-nowrap py-3 font-mono-retro text-sm text-white/80">
          {loop.map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-3">
              <span className="text-fuchsia-400">▸</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chyron;
