"use client";

import React from "react";
import Image from "next/image";
import headsets from "../../../../public/dataheadset/seller.json"; // adjust path as needed

const StarRating = ({ rating }: { rating: number }) => {
  const totalStars = 5;
  return (
    <div className="flex text-black mt-1">
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
    <section className="max-w-6xl mx-auto p-6 bg-amber-50">
      <h2 className="text-3xl font-semibold mb-6">Best Seller</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {headsets.map(({ id, image, title, price, category, rating }) => (
          <div
            key={id}
            className="relative bg-gray-50 p-4 rounded-md shadow-sm flex flex-col"
            style={{ aspectRatio: "3 / 4" }} 
          >
            <div className="relative flex-grow">
              <span className="absolute top-1 left-2 text-xs font-bold text-black z-10">
                HOT
              </span>
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, 200px"
                className="object-contain"
                priority={id === 1}
              />
            </div>

            <StarRating rating={rating} />

            <h3 className="mt-2 text-sm font-semibold line-clamp-2 text-black">
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
