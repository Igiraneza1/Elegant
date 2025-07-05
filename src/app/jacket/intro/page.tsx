"use client";
import React from "react";
import Image from "next/image";
import image from "../../../../public/image/jacket/bg.jpg";
import Link from "next/link";

export default function Homepage() {
  return (
    <div className="w-full flex flex-col lg:flex-row min-h-[500px]">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative">
        <Image
          src={image}
          alt="Winter jacket collection"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full lg:w-1/2 bg-slate-900 text-gray-200 flex flex-col justify-center items-start p-8 lg:p-12">
        <h1 className="text-4xl md:text-5xl font-bold pb-4 leading-tight">
          Bring the <br /> warmth.
        </h1>
        <p className="text-lg md:text-md pb-8">
          Everyone needs a good winter jacket. <br />
          Find yours with our collection and more.
        </p>
        <Link
          href="/shop"
          className="bg-blue-500 text-gray-200  px-10 py-2 rounded-md font-medium"
        >
          Shopping Now
        </Link>
      </div>
    </div>
  );
}