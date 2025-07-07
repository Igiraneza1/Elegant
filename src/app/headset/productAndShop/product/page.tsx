"use client";
import React from "react";
import Image from "next/image";
import backgound  from "../../../../../public/image/headset/headsetbackground.jpg"

export default function ShopHeader() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
      {/* Background Image */}
      <Image
        src={backgound}
        alt="Shop background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white text-center px-4">
        <p className="text-sm mb-2">Home &gt; <span className="text-gray-200">Shop</span></p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Shop Page</h1>
        <p className="text-sm sm:text-base text-gray-200">
          Let’s design the place you always imagined.
        </p>
      </div>
    </div>
  );
}
