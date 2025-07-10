'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Shop() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 2,
    hours: 12,
    minutes: 45,
    seconds: 5,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number): string => {
    return time.toString().padStart(2, '0');
  };

  return (
    <div className="w-full mx-auto ">
      <div className="flex flex-col lg:flex-row items-center">
        
        <div className="flex-1 relative w-full h-96 lg:h-126">
          <Image
            src="/image/sport/set.jpg"
            alt="Golf equipment including gloves, balls, and clubs on green grass"
            fill
            className="object-cover"
            priority
          />
        </div>

        
        <div className="flex-1 p-8 lg:p-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full">
              <span className="text-emerald-400 text-sm font-semibold tracking-wide uppercase">
                Limited Edition
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Hurry up! <span className="text-emerald-400">30% OFF</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Find clubs that are right for your game
            </p>

            <div className="space-y-4">
              <p className="text-gray-400 text-sm font-medium">Offer expires in:</p>
              <div className="flex space-x-3">
                {['days', 'hours', 'minutes', 'seconds'].map((unit, i) => {
                  const value = formatTime(
                    timeLeft[unit as keyof TimeLeft]
                  );
                  const label = unit.charAt(0).toUpperCase() + unit.slice(1).slice(0, 3);
                  return (
                    <div
                      key={i}
                      className="bg-white text-slate-900 px-4 py-3 rounded-lg min-w-[60px] text-center"
                    >
                      <div className="text-2xl font-bold">{value}</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wide">
                        {label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-500/50">
                Shop now
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
