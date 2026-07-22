const SignalBars = () => (
  <span className="flex items-end gap-[3px]">
    {[0, 1, 2, 3].map((i) => (
      <span
        key={i}
        className="animate-signal block w-[3px] origin-bottom bg-cyan-300"
        style={{ height: 6 + i * 3, animationDelay: `${i * 0.18}s` }}
      />
    ))}
  </span>
);

const BroadcastHud = () => {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-6 z-20 flex items-center justify-between pl-16 pr-6 font-mono-retro text-[11px] uppercase tracking-[0.25em] text-white/55 md:top-8 md:px-12">
      <span className="flex items-center gap-3">
        <span className="flex items-center gap-2 text-cyan-300">
          <span className="animate-blink text-fuchsia-400">●</span>
          REC 00:26
        </span>
        <span className="hidden text-white/30 sm:inline">
          40°25′N 3°42′W
        </span>
      </span>

      <span className="flex items-center gap-4">
        <SignalBars />
        <span className="glass holo-border animate-flicker rounded-sm px-2.5 py-1 text-cyan-200 glow-cyan">
          ON AIR
        </span>
      </span>
    </div>
  );
};

export default BroadcastHud;
