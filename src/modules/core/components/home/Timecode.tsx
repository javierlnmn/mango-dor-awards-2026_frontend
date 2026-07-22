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
    <div className="flex flex-wrap items-end gap-x-8 gap-y-6 md:gap-x-14">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col">
          <div
            className="odometer-fast font-brutal text-6xl font-black leading-none text-white md:text-8xl"
            style={{ textShadow: '0 0 26px rgba(34,211,238,0.45)' }}
          >
            <Odometer value={unit.value} format="dd" />
          </div>
          <span className="font-mono-retro mt-4 text-[10px] uppercase tracking-[0.35em] text-cyan-300/60">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Timecode;
