const BroadcastHud = () => {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-8 z-20 flex items-center justify-between px-6 font-mono-retro text-xs uppercase tracking-widest text-white/60 md:px-12">
      <span className="flex items-center gap-2">
        <span className="text-fuchsia-500 animate-blink">●</span>
        REC 00:26
      </span>
      <span className="animate-flicker rounded-sm border border-fuchsia-400/40 px-2 py-1 text-fuchsia-300">
        ON AIR
      </span>
    </div>
  );
};

export default BroadcastHud;
