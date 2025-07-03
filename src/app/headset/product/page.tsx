"use client";
import Image from "next/image";
import React from "react";

// Star Icon Component
function StarIcon({ filled, half }: { filled: boolean; half?: boolean }) {
  return (
    <svg
      className={`w-5 h-5 ${
        filled ? "text-black" : half ? "text-black" : "text-gray-300"
      }`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927a1 1 0 011.902 0l1.357 4.18h4.394a1 1 0 01.592 1.806l-3.561 2.588 1.357 4.18a1 1 0 01-1.538 1.118L10 13.347l-3.55 2.452a1 1 0 01-1.538-1.118l1.357-4.18-3.561-2.588a1 1 0 01.592-1.806h4.394l1.357-4.18z" />
    </svg>
  );
}

interface Headset {
  id: number;
  image: string;
  title: string;
  price: string;
  category: string;
  description: string;
  rating: number;
}

const headsets: Headset[] = [
  {
    id: 1,
    image: "/image/headset/headset1.png",
    title: "Skullycandy-Crusher anc 2",
    category: "Wireless Headphones",
    price: "$299.99",
    description:
      "7.1 virtual surround sound, memory foam ear cushions, durable aluminum frame.",
    rating: 5,
  },
  {
    id: 2,
    image: "/image/headset/headset2.jpg",
    title: "Beats",
    category: "Studio Pro",
    price: "$349.99",
    description:
      "Wireless gaming headset with 24-hour battery life and ClearCast microphone.",
    rating: 5,
  },
  {
    id: 3,
    image: "/image/headset/headset5.png",
    title: "Sony - WH-CH720N Wireless",
    category: "Noise Canceling",
    price: "$149.99",
    description: "Lightweight design with powerful noise-canceling features.",
    rating: 5,
  },
  {
    id: 4,
    image: "/image/headset/headset3.png",
    title: "Skullcandy - Rail True Wireless",
    category: "Earbuds",
    price: "$129.99",
    description:
      "THX Spatial Audio, lightweight design, and noise-canceling mic.",
    rating: 5,
  },
  {
    id: 5,
    image: "/image/headset/headset4.png",
    title: "Beats",
    category: "Studio Pro",
    price: "$129.99",
    description:
      "Blue VOICE microphone tech, premium memory foam earpads, and pro-grade sound.",
    rating: 5,
  },
];

const getBadgeInfo = () => {
  return { text: "New", color: "text-black" };
};

export default function AllProducts() {
  return (
    <div className="w-full bg-white py-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">New Arrivals</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {headsets.map((headset) => {
            const badge = getBadgeInfo();
            return (
              <div
                key={headset.id}
                className="group relative bg-white p-4 flex flex-col rounded-lg shadow-sm"
              >
                {/* 🏷 Badge placed inside image wrapper */}
                <div className="relative h-64 w-full mb-4">
                  <span className="absolute top-2 left-2  text-black text-xs font-bold">
                    {badge.text}
                  </span>
                  <Image
                    src={headset.image}
                    alt={headset.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                <div className="flex items-center mb-3 text-black">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      filled={i < Math.floor(headset.rating)}
                      half={
                        i === Math.floor(headset.rating) &&
                        headset.rating % 1 >= 0.5
                      }
                    />
                  ))}
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-black text-sm">
                    {headset.title}
                  </h4>
                  <p className="text-black">{headset.category}</p>
                  <span className="text-black font-bold text-sm">
                    {headset.price}
                  </span>
                </div>

                <button className="w-full mt-auto bg-black text-white py-2 rounded-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
