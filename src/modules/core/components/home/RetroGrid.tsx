import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'motion/react';

const GRID_STYLE = {
  backgroundImage:
    'linear-gradient(to right, rgba(34,211,238,0.35) 1px, transparent 1px), linear-gradient(to top, rgba(139,92,246,0.4) 1px, transparent 1px)',
  backgroundSize: '64px 64px',
} as const;

const RetroGrid = () => {
  const { scrollYProgress } = useScroll();

  // Scroll drives the tunnel: the net flattens and the camera pushes forward.
  const floorDeg = useTransform(scrollYProgress, [0, 1], [82, 60]);
  const ceilDeg = useTransform(scrollYProgress, [0, 1], [-82, -60]);
  const floorTransform = useMotionTemplate`rotateX(${floorDeg}deg)`;
  const ceilTransform = useMotionTemplate`rotateX(${ceilDeg}deg)`;

  const gridY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const sunY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const sunScale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const netOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.9, 0.45]);
  const horizonTop = useTransform(scrollYProgress, [0, 1], ['52%', '46%']);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink">
      {/* Deep base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,#1a0b2e_0%,#0b0518_45%,#05020c_100%)]" />

      {/* Aurora blobs — violet / cyan */}
      <div className="animate-aurora absolute -left-[10%] top-[6%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.35)_0%,transparent_70%)] blur-3xl" />
      <div className="animate-aurora absolute right-[2%] top-[2%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.28)_0%,transparent_70%)] blur-3xl [animation-delay:-6s]" />

      {/* Holographic sun / horizon orb */}
      <motion.div
        aria-hidden
        style={{ y: sunY, scale: sunScale }}
        className="absolute left-1/2 top-[14%] h-[440px] w-[440px] -translate-x-1/2"
      >
        <div className="animate-pulse-orb h-full w-full rounded-full bg-[radial-gradient(circle,rgba(232,121,249,0.45)_0%,rgba(139,92,246,0.2)_42%,transparent_72%)] blur-2xl" />
        <div className="absolute inset-x-[18%] top-1/2 h-[2px] -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.9),transparent)] blur-[1px]" />
      </motion.div>

      {/* 3D net tunnel */}
      <motion.div
        aria-hidden
        style={{ opacity: netOpacity }}
        className="absolute inset-0"
      >
        {/* Ceiling grid */}
        <div className="absolute inset-x-0 top-0 h-[58vh] [perspective:560px]">
          <motion.div
            style={{
              ...GRID_STYLE,
              transform: ceilTransform,
              y: gridY,
              maskImage: 'linear-gradient(to bottom, black 8%, transparent 88%)',
              WebkitMaskImage:
                'linear-gradient(to bottom, black 8%, transparent 88%)',
            }}
            className="animate-grid-drift absolute inset-0 origin-top"
          />
        </div>

        {/* Floor grid */}
        <div className="absolute inset-x-0 bottom-0 h-[72vh] [perspective:560px]">
          <motion.div
            style={{
              ...GRID_STYLE,
              transform: floorTransform,
              y: gridY,
              maskImage: 'linear-gradient(to top, black 8%, transparent 88%)',
              WebkitMaskImage:
                'linear-gradient(to top, black 8%, transparent 88%)',
            }}
            className="animate-grid-drift absolute inset-0 origin-bottom"
          />
        </div>
      </motion.div>

      {/* Horizon bloom line */}
      <motion.div
        style={{ top: horizonTop }}
        className="absolute inset-x-0 h-px bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.7)_20%,rgba(232,121,249,0.7)_80%,transparent)] blur-[0.5px]"
      />
      <motion.div
        style={{ top: horizonTop }}
        className="absolute inset-x-0 h-24 -translate-y-1/2 bg-[radial-gradient(ellipse_60%_100%_at_50%_50%,rgba(34,211,238,0.18),transparent_70%)] blur-xl"
      />

      {/* Bottom fade to ink */}
      <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-ink via-ink/50 to-transparent" />
    </div>
  );
};

export default RetroGrid;
