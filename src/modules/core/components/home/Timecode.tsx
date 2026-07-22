import 'odometer/themes/odometer-theme-default.css';

import { useEffect, useState } from 'react';
import Odometer from 'react-odometerjs';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimecodeProps {
  targetDate: Date;
}

const Timecode = ({ targetDate }: TimecodeProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const diff = +targetDate - +new Date();
      setTimeLeft(
        diff > 0
          ? {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / 1000 / 60) % 60),
            seconds: Math.floor((diff / 1000) % 60),
          }
          : { days: 0, hours: 0, minutes: 0, seconds: 0 }
      );
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Seg', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap items-stretch gap-3 md:gap-4">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="glass holo-border group relative flex min-w-[74px] flex-1 flex-col items-center overflow-hidden rounded-xl px-3 py-4 md:min-w-[120px] md:px-6 md:py-6"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
          <div
            className="odometer-fast font-mono-retro text-4xl text-cyan-200 md:text-6xl"
            style={{ textShadow: '0 0 18px rgba(34,211,238,0.6)' }}
          >
            <Odometer value={unit.value} format="dd" />
          </div>
          <span className="mt-3 text-[10px] uppercase tracking-[0.3em] text-white/45">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Timecode;
