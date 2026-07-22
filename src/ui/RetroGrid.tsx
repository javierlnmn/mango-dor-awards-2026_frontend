const GRID_STYLE = {
  backgroundImage:
    'linear-gradient(to right, rgba(103,232,249,0.6) 1.5px, transparent 1.5px), linear-gradient(to top, rgba(167,139,250,0.65) 1.5px, transparent 1.5px)',
  backgroundSize: '80px 80px',
} as const;

// Large fade toward the horizon so the mesh dissolves smoothly to nothing.
const FLOOR_MASK = 'linear-gradient(to top, black 0%, black 6%, transparent 88%)';
const CEIL_MASK =
  'linear-gradient(to bottom, black 0%, black 6%, transparent 88%)';

const RetroGrid = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink">
      {/* Deep base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,#1a0b2e_0%,#0b0518_45%,#05020c_100%)]" />

      {/* Aurora blobs — violet / cyan.
          `will-change-transform` promotes each to its own compositor layer so the
          heavy blur raster is cached and only translated, never repainted. */}
      <div className="animate-aurora absolute -left-[10%] top-[6%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.35)_0%,transparent_70%)] blur-3xl will-change-transform" />
      <div className="animate-aurora absolute right-[2%] top-[2%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.28)_0%,transparent_70%)] blur-3xl will-change-transform [animation-delay:-6s]" />

      {/* Holographic sun / horizon orb — soft, blurry */}
      <div className="absolute left-1/2 top-[14%] h-[440px] w-[440px] -translate-x-1/2">
        <div className="animate-pulse-orb h-full w-full rounded-full bg-[radial-gradient(circle,rgba(232,121,249,0.45)_0%,rgba(139,92,246,0.2)_42%,transparent_72%)] blur-[90px] [will-change:opacity,transform] [transform:translateZ(0)]" />
      </div>

      {/* 3D net tunnel — static, steep into the horizon */}
      <div className="absolute inset-0">
        {/* Ceiling grid */}
        <div className="absolute -left-1/4 -right-1/4 top-0 h-[85vh] [perspective:440px]">
          <div
            style={{
              ...GRID_STYLE,
              transform: 'rotateX(-85deg)',
              maskImage: CEIL_MASK,
              WebkitMaskImage: CEIL_MASK,
            }}
            className="absolute inset-0 origin-top"
          />
        </div>

        {/* Floor grid */}
        <div className="absolute -left-1/4 -right-1/4 bottom-0 h-[100vh] [perspective:440px]">
          <div
            style={{
              ...GRID_STYLE,
              transform: 'rotateX(85deg)',
              maskImage: FLOOR_MASK,
              WebkitMaskImage: FLOOR_MASK,
            }}
            className="absolute inset-0 origin-bottom"
          />
        </div>
      </div>

      {/* Horizon glow — soft haze only, no hard line */}
      <div className="absolute inset-x-0 top-[50%] h-48 -translate-y-1/2 bg-[radial-gradient(ellipse_75%_100%_at_50%_50%,rgba(139,92,246,0.14),rgba(34,211,238,0.06)_45%,transparent_78%)] blur-3xl" />

      {/* Bottom fade to ink */}
      <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-ink via-ink/50 to-transparent" />
    </div>
  );
};

export default RetroGrid;
