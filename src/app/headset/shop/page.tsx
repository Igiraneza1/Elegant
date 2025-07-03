"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const categories = [
  {
    title: "Headband",
    image: "/image/headset/headset11.png",
    link: "/collections/headband",
  },
  {
    title: "Earbuds",
    image: "/image/headset/headset6.jpg",
    link: "/collections/earbuds",
  },
  {
    title: "Accessories",
    image: "/image/headset/headset7.jpg",
    link: "/collections/accessories",
  },
];

export default function Shop() {
  return (
    <div className="w-full bg-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Shop Collection</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First big card */}
          <div className="relative bg-gray-100 p-6 rounded-lg flex flex-col items-center">
            <Image
              src={categories[0].image}
              alt={categories[0].title}
              width={400}
              height={400}
              className="mx-auto object-contain"
            />
            <h3 className="mt-6 text-xl font-semibold text-black">{categories[0].title}</h3>
            <Link
              href={categories[0].link}
              className="mt-2 inline-block  text-black underline text-xs rounded-full"
            >
              Collection →
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            {categories.slice(1).map((item) => (
              <div
                key={item.title}
                className="relative bg-gray-100 p-6 rounded-lg flex items-center"
              >

                <div className="mt-20">
                  <h3 className="text-xl font-semibold text-black">{item.title}</h3>
                  <Link
                    href={item.link}
                    className="mt-2 inline-block underline text-black text-xs"
                  >
                    Collection →
                  </Link>
                </div>
                <div className="flex-1">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
