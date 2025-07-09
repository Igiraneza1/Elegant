"use client";

import React from "react";
import Image from "next/image";

import products from "../../../../public/datajacket/arriaval.json";

interface Product {
  id: number;
  image: string;
  title: string;
  category: string;
  price: string;
  rating: number;
}

const StarIcon = ({
  filled,
}: {
  filled: boolean;
  half?: boolean;
}) => {
  return (
    <svg
      className={`w-4 h-4 ${filled ? "text-black" : "text-gray-300"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927a1 1 0 011.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.97c.3.92-.755 1.688-1.54 1.118L10 13.347l-3.39 2.462c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L3.603 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
    </svg>
  );
};

export default function AllProducts() {
  return (
    <div className="w-full bg-white py-20 px-4 sm:px-8 md:px-15 lg:px-30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 ml-6 text-gray-900">Just In</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product: Product) => (
            <div key={product.id} className="group bg-white">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <span className="absolute top-2 left-2 bg-white text-black text-xs font-semibold px-2 py-1 rounded">
                  NEW
                </span>

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
                <p className="font-semibold text-black text-sm">{product.category}</p>
                <p className="text-black font-semibold mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
