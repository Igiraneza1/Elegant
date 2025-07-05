"use client";
import Image from "next/image";
import React from "react";



const bestSellers = [
  {
    id: 1,
    image: "/image/jacket/jacket4.jpg",
    title: "Freestyle Crew Racer leather ",
    category: "Jackets",
    price: "$595.00",
    oldPrice: "$1,080.00",
    rating: 5,
    badge: "HOT",
    discount: "-50%",
  },
  {
    id: 2,
    image: "/image/jacket/jacket3.jpg",
    title: "1996 Retro Nuptse Cashmere ",
    category: "Jacket in Gray",
    price: "$149.99",
    rating: 5,
    badge: "HOT",
  },
  {
    id: 3,
    image: "/image/jacket/jacket2.jpg",
    title: "Chilliwack black Bomber",
    category: "HUMANATURE",
    price: "$1195.99",
    rating: 5,
    badge: "HOT",
  },
  {
    id: 4,
    image: "/image/jacket/jacket14.jpg",
    title: "96 Nuptse Dip Dye bomber",
    category: "Jacket",
    price: "$400.99",
    rating: 5,
    badge: "HOT",
  },
  {
    id: 5,
    image: "/image/jacket/jacket15.jpg",
    title: "Oversized real leather harrington ",
    category: "Jacket in black",
    price: "$249.99",
    rating: 5,
    badge: "HOT",
  },
  {
    id: 6,
    image: "/image/jacket/jacket1.jpg",
    title: "Men's Diamond Quilted Bomber",
    category: "Hoody",
    price: "$199.95",
    rating: 5,
    badge: "HOT",
  },
  {
    id: 7,
    image: "/image/jacket/jacket8.jpg",
    title: "Paradigm Chilliwack coat Black ",
    category: "Label",
    price: "$1495.00",
    rating: 5,
    badge: "HOT",
  },
  {
    id: 8,
    image: "/image/jacket/jacket9.jpg",
    title: "Men's Torrentshell 3L Rain ",
    category: "Jacket in Brown",
    price: "$149.00",
    rating: 5,
    badge: "HOT",
  },
];

export default function BestSellers() {
  return (
    <div className="sm:p-20 lg:p-30 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-5">Best Seller</h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {bestSellers.map((item) => (
          <div key={item.id} className=" relative bg-white shadow-sm">
            {/* Badges */}
            <div className="absolute top-2 left-2 flex gap-1 z-10">
              <span className="bg-white text-black font-semibold text-xs px-2 py-0.5 rounded">
                {item.badge}
              </span>
              {item.discount && (
                <span className="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded">
                  {item.discount}
                </span>
              )}
            </div>

            <div className="w-full h-[300px] relative mb-3">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover "
              />
            </div>

            <div className="text-black text-sm mb-1">
              {"★".repeat(item.rating)}
              {"☆".repeat(5 - item.rating)}
            </div>

            <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
            <h3 className="text-sm font-semibold mb-1">{item.category}</h3>
            <div className="flex items-center gap-2">
              <span className="text-black font-bold">{item.price}</span>
              {item.oldPrice && (
                <span className="line-through text-gray-500 text-sm">
                  {item.oldPrice}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
