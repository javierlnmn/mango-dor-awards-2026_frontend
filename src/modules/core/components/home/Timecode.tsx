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
    <div className="flex items-start justify-start gap-1 md:gap-3">
      {units.map((unit, index) => (
        <div key={unit.label} className="flex items-start">
          <div className="flex flex-col items-center">
            <div
              className="odometer-fast font-mono-retro text-4xl text-fuchsia-400 md:text-6xl"
              style={{ textShadow: '0 0 16px rgba(232,121,249,0.7)' }}
            >
              <Odometer value={unit.value} format="dd" />
            </div>
            <span className="mt-2 text-[10px] uppercase tracking-widest text-white/50">
              {unit.label}
            </span>
          </div>
          {index < units.length - 1 && (
            <span className="animate-blink font-mono-retro px-1 text-4xl text-fuchsia-400/50 md:text-6xl">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timecode;
