import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

// 21 de noviembre de 2026, 08:30 a. m. (Bolivia, UTC-4)
const TARGET_DATE_MS = new Date('2026-11-21T08:30:00-04:00').getTime();

function calculateTimeLeft(): TimeLeft {
  const diff = TARGET_DATE_MS - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isPast: false,
  };
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  if (timeLeft.isPast) {
    return (
      <div className="mt-5 text-center">
        <p className="font-serif text-lg italic text-[#fbf3d5]">
          ¡Hoy celebramos este gran logro!
        </p>
      </div>
    );
  }

  const units = [
    { label: 'Días', value: String(timeLeft.days).padStart(2, '0') },
    { label: 'Horas', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'Min', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'Seg', value: String(timeLeft.seconds).padStart(2, '0') },
  ];

  return (
    <div className="mt-5 border-t border-[#dfba5b]/20 pt-5">
      <p className="mb-3 text-center font-sans text-[11px] font-semibold tracking-[0.22em] text-[#edd082]/90 uppercase">
        Cuenta regresiva para la ceremonia
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-md mx-auto">
        {units.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center rounded-xl border border-[#dfba5b]/30 bg-[#051840]/85 px-2 py-2.5"
          >
            <span className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white tabular-nums">
              {item.value}
            </span>
            <span className="mt-0.5 font-sans text-[10px] sm:text-[11px] font-medium tracking-[0.14em] text-[#edd082] uppercase">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
