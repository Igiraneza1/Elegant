"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import man from "../../../../public/image/headset/man.jpg";

interface CountdownType {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Counter = () => {
  const [countdown, setCountdown] = useState<CountdownType>({
    days: 2,
    hours: 12,
    minutes: 45,
    seconds: 5,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (
          prev.days === 0 &&
          prev.hours === 0 &&
          prev.minutes === 0 &&
          prev.seconds === 0
        ) {
          clearInterval(timer);
          return prev;
        }

        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }

        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: countdown.days.toString().padStart(2, "0"), label: "Days" },
    { value: countdown.hours.toString().padStart(2, "0"), label: "Hours" },
    { value: countdown.minutes.toString().padStart(2, "0"), label: "Minutes" },
    { value: countdown.seconds.toString().padStart(2, "0"), label: "Seconds" },
  ];

  return (
    <div className="relative h-max w-screen">
      <div className="h-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full">
          <div className="relative order-2 lg:order-1 h-full">
            <div className="relative h-full w-full">
              <Image
                src={man}
                alt="Premium Headphones"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-8 order-1 lg:order-2 bg-yellow-200 p-8 flex flex-col h-full">
            <div className="inline-flex items-center text-blue-500 rounded-full text-sm font-semibold uppercase tracking-wide">
              PROMOTION
            </div>

            <div className="space-y-4">
              <h1 className="text-xl font-bold">Hurry up! 40% OFF</h1>
              <p className="text-md text-gray-600">
                Thousands of high tech are waiting for you
              </p>
            </div>

            <div>
              <p className="text-gray-500 font-medium">Offer expires in:</p>
              <div className="flex gap-4">
                {timeUnits.map((unit, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gray-200 text-black lg:text-3xl font-bold px-4 py-4 rounded-xl min-w-[70px] shadow-lg">
                      {unit.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-2 uppercase tracking-wider font-medium">
                      {unit.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="bg-gray-950 hover:bg-gray-800 text-white px-5 py-2 rounded-md text-sm transition-all duration-300 shadow-lg hover:shadow-xl mt-auto">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;