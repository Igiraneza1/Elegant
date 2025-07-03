"use client";

import React from "react";
import Image from "next/image";

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
    image: "/image/headset/headset11.png",
    title: "Sony - WH-1000XM5 Wireless",
    category: "Noise Canceling",
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
    price: "349.99",
    description: "High fidelity sound with active noise cancellation.",
    rating: 5,
  },
  {
    id: 3,
    image: "/image/headset/headset5.png",
    title: "Sony - WH-CH720N Wireless ",
    category: "Noise Canceling",
    price: "$149.99",
    description: "Comfortable fit with great sound quality.",
    rating: 5,
  },
  {
    id: 4,
    image: "/image/headset/headset3.png",
    title: "Skullcandy - Rail True",
    category: "Wireless Earbuds",
    price: "$79.99",
    description: "Compact and powerful earbuds with long battery life.",
    rating: 5,
  },
  {
    id: 5,
    image: "/image/headset/headset4.png",
    title: "Beats",
    category: "Studio Pro",
    price: "$249.99",
    description: "Noise cancelling technology for immersive sound.",
    rating: 5,
  },
  {
    id: 6,
    image: "/image/headset/headset8.jpg",
    title: "JBL Reflect Flow Pro+ Bluetooth ",
    category: "Truly Wireless Sports",
    price: "$179.95",
    description: "Premium sound with a sleek and stylish design.",
    rating: 5,
  },
  {
    id: 7,
    image: "/image/headset/headset9.png",
    title: "Bose",
    category: "QuietComfort Headphones",
    price: "$349.99",
    description: "Active noise cancellation and adaptive transparency.",
    rating: 5,
  },
  {
    id: 8,
    image: "/image/headset/headset1.png",
    title: "AKG",
    category: "Y600NC Wireless",
    price: "$349.99",
    description: "Virtual 7.1 surround sound with a detachable mic.",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const totalStars = 5;
  return (
    <div className="flex text-black">
      {[...Array(totalStars)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-black" : "text-gray-300"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.97c.3.92-.755 1.688-1.54 1.118L10 13.347l-3.39 2.462c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L3.603 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
        </svg>
      ))}
    </div>
  );
};

const HeadsetGrid = () => {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-6">Best Seller</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {headsets.map(({ id, image, title, price, category, rating }) => (
          <div
            key={id}
            className="relative bg-gray-50 p-4 rounded-md shadow-sm"
          >
            <div>
              <span className="absolute top-1 left-2 text-xs font-bold text-black z-10">
                HOT
              </span>
              <Image
                src={image}
                alt={title}
                width={200}
                height={300}
                className="object-contain"
                priority={id === 1}
              />
            </div>

            <StarRating rating={rating} />

            <h3 className="mt-1 text-sm font-semibold line-clamp-2 text-black">
              {title}
            </h3>

            <p className="mt-1 font-semibold text-black">{category}</p>

            <p className="mt-1 font-semibold text-black">{price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeadsetGrid;
