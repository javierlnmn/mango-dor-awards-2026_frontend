import { motion, type MotionValue } from 'motion/react';

interface RetroGridProps {
  gridY: MotionValue<number>;
  sunY: MotionValue<number>;
}

const RetroGrid = ({ gridY, sunY }: RetroGridProps) => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#07020f]">
      <motion.div
        aria-hidden
        style={{ y: sunY }}
        className="absolute right-[8%] top-[16%] h-[420px] w-[420px] rounded-full blur-3xl"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(232,121,249,0.4)_0%,rgba(139,92,246,0.18)_45%,transparent_75%)]" />
      </motion.div>

      <motion.div
        aria-hidden
        style={{ y: gridY }}
        className="absolute inset-x-0 bottom-0 h-[75vh] [perspective:500px]"
      >
        <div
          className="absolute inset-0 origin-bottom animate-grid-drift [transform:rotateX(80deg)]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(232,121,249,0.35) 1px, transparent 1px), linear-gradient(to top, rgba(139,92,246,0.35) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-[45vh] bg-gradient-to-t from-[#07020f] via-transparent to-transparent" />
    </div>
  );
};

export default RetroGrid;
