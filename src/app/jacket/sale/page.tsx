"use client";
import React from "react";
import Image from "next/image";
import backgroundImage from "../../../../public/image/jacket/jacket16.jpg";
import Link from "next/link";

export default function SaleBanner() {
  return (
    <div className="w-full flex flex-col md:flex-row min-h-[400px]">
     
      <div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
        <Image
          src={backgroundImage}
          alt="Winter Sale"
          fill
          className="object-cover"
          priority
        />
      </div>

      
      <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center px-6 py-12">
        <div className="max-w-md">
          <p className="text-blue-600 text-sm  font-semibold mb-2">SALE UP TO 35% OFF</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            HUNDREDS of <br />
            New lower prices!
          </h2>
          <p className="text-md mb-6">Hurry up!!! Winter is coming!</p>
          <Link
            href="/sale"
            className="text-sm text-gray-900 underline inline-flex items-center gap-1 group"
          >
            Shop Now
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
