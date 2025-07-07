"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    id: 1,
    name: "November Outfits",
    image: "/image/jacket/jacket10.jpg",
  },
  {
    id: 2,
    name: "Cashmere Set",
    image: "/image/jacket/jacket11.jpg",
  },
  {
    id: 3,
    name: "The New Nordic",
    image: "/image/jacket/jacket12.jpg",
  },
  {
    id: 4,
    name: "The Leather",
    image: "/image/jacket/jacket13.jpg",
  },
];

export default function Collection() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="p-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:px-8 md:px-15 lg:px-30">
        {collections.map((item) => (
          <div key={item.id} className="relative group w-full h-[600px]">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover p-5"
            />
            <div className="absolute inset-0"></div>

            <div className="absolute bottom-4 left-4 p-10 text-white">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <Link href="" className="text-sm underline underline-offset-2">Collections →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
