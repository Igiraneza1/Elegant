"use client";

import Image from "next/image";
import bestSellers from "../../../../public/datajacket/seller.json"; 

export default function BestSellers() {
  return (
    <div className="p-10 md:p-20 lg:p-30 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-5">Best Seller</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {bestSellers.map((item) => (
          <div key={item.id} className="relative bg-white shadow-sm">
            
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
                className="object-cover"
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
