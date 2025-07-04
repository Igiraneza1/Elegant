"use client";
import Image from "next/image";
import React from "react";
// import { Heart } from "lucide-react"; // Optional: add heart icon

// Star Icon Component
function StarIcon({ filled, half }: { filled: boolean; half?: boolean }) {
  return (
    <svg
      className={`w-4 h-4 ${
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
    image: "/image/jacket/jacket1.jpg",
    title: "96 Nuptse Dip Dye Korea Puffers",
    category: "Jacket",
    price: "$400.00",
    description:
      "A stylish dip-dye puffer jacket inspired by Korean streetwear, built to keep you warm in bold fashion.",
    rating: 5,
  },
  {
    id: 2,
    image: "/image/jacket/jacket2.jpg",
    title: "Paradigm Chilliwack Black Label",
    category: "Jacket",
    price: "$349.99",
    description:
      "Premium insulated jacket with classic bomber styling from the Black Label collection—ideal for cold weather.",
    rating: 5,
  },
  {
    id: 3,
    image: "/image/jacket/jacket3.jpg",
    title: "1996 Retro Nuptse",
    category: "Jacket in Black",
    price: "$149.99",
    description:
      "An iconic black retro puffer jacket with oversized baffles and packable hood, inspired by '90s design.",
    rating: 5,
  },
  {
    id: 4,
    image: "/image/jacket/jacket4.jpg",
    title: "Paul Quilted Nylon Puffer Bomber",
    category: "Jacket",
    price: "$300.00",
    description:
      "Modern puffer bomber jacket with quilted nylon exterior, offering both warmth and lightweight comfort.",
    rating: 5,
  },
  {
    id: 5,
    image: "/image/jacket/jacket5.jpg",
    title: "Chilliwack Jacket Bomber",
    category: "HUMANATURE",
    price: "$1,195",
    description:
      "A sustainable take on the classic Chilliwack bomber, designed under the HUMANATURE label for eco-conscious warmth.",
    rating: 5,
  },
];

export default function AllProducts() {
  return (
    <div className="w-full bg-white py-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 ml-6 text-gray-900">Just In</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {headsets.map((product) => (
            <div
              key={product.id}
              className="group bg-white"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* NEW Badge */}
                <span className="absolute top-2 left-2 bg-white text-black text-xs font-semibold px-2 py-1 rounded">
                  NEW
                </span>

                {/* Heart Icon */}
                {/* <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:scale-105 transition-transform">
                  <Heart size={16} className="text-gray-600" />
                </button> */}

                {/* Hover Add to Cart */}
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center text-sm py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Add to cart
                </div>
              </div>

              
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    filled={i < Math.floor(product.rating)}
                    half={
                      i === Math.floor(product.rating) &&
                      product.rating % 1 >= 0.5
                    }
                  />
                ))}
              </div>

              
              <div>
                <h4 className="font-semibold text-black">{product.title}</h4>
                <p className=" font-semibold text-black text-sm">{product.category}</p>
                <p className="text-black font-semibold mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
