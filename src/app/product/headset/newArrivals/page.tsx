"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NewArrival from "../../../../../public/dataheadset/arrival.json";

interface Product {
  id: number;
  image: string;
  title: string;
  category: string;
  price: string;
  description: string;
  rating: number;
}

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      router.push("/sign-up");
      return;
    }
    alert("Product added to cart!");
  };

  return (
    <div className="p-6 space-y-12">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {NewArrival.map((item: Product) => (
            <div
              key={item.id}
              className="border rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedProduct(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={250}
                height={150}
                className="rounded-t-xl w-full h-[160px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-base font-bold text-black">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <div className="w-full lg:w-[350px] border rounded-xl p-4 shadow-md sticky top-4 h-fit">
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.title}
              width={300}
              height={180}
              className="rounded-lg object-cover w-full"
            />
            <h2 className="text-xl font-bold mt-4">{selectedProduct.title}</h2>
            <p className="text-sm text-gray-500">{selectedProduct.category}</p>
            <p className="text-base font-semibold text-black mt-1">
              {selectedProduct.price}
            </p>
            <p className="mt-2 text-sm text-gray-700">{selectedProduct.description}</p>
            <p className="mt-1 text-black">{"★".repeat(selectedProduct.rating)}</p>

            <button
              onClick={handleAddToCart}
              className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">You might also like</h2>
          <Link href="#" className="text-sm text-gray-500 hover:underline">
            More Products →
          </Link>
        </div>

        <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide">
          {NewArrival.map((item: Product) => (
            <div
              key={item.id}
              className="min-w-[180px] max-w-[180px] border rounded-xl shadow hover:shadow-md transition bg-white flex-shrink-0"
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={180}
                  height={150}
                  className="rounded-t-xl w-full h-[150px] object-cover"
                />
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  -50%
                </span>
                <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                  ♡
                </button>
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.category}</p>
                <div className="text-black text-xs mt-1">
                  {"★".repeat(item.rating)}
                </div>
                <p className="text-sm font-bold mt-1">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t w-full"></div>
      </div>
    </div>
  );
};

export default ProductShowcase;
