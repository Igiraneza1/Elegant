"use client";
import Image from "next/image";
import React from "react";
import background from "../../../public/image/headset/background.jpg";

export default function HeadsetHomepage() {
  return (
    <div>
      <div className="relative w-full h-full">
        <Image
          src={background}
          alt="Music background"
          width={800}
          height={600}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 text-white">
          <div className="text-4xl font-bold mb-4 text-center">
            Listen to
            <br />
            the <span className="text-blue-500">amazing</span> <br />
            music sound.
          </div>
          <p className="text-xl mb-8">Experience music like never before</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
