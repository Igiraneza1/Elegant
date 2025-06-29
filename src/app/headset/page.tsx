"use client";
import Image from "next/image";
import React from "react";
import bg from "../../../public/image/headset/bg.png";
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
    category: "wireless headphones",
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
    description: "",
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
    title: "Beats ",
    price: "$129.99",
    category: "Studio Pro",
    description:
      "Blue VO!CE microphone tech, premium memory foam earpads, and pro-grade sound.",
    rating: 5,
  },
];
const headsets2: Headset2[] = [
  {
    id: 6,
    image: "/image/headset/headset11.png",
    title: "Headband",
    price: "$329.99",
    description:
      "Premium noise cancellation, balanced audio, and comfortable over-ear design.",
    rating: 5,
  },

  {
    id: 7,
    image: "/image/headset/headset6.jpg",
    title: "Earbuds",
    price: "$199.99",
    description:
      "Wireless gaming headset with active noise cancellation and RGB lighting.",
    rating: 5,
  },
  {
    id: 8,
    image: "/image/headset/headset8.jpg",
    title: "Accessories",
    price: "$179.99",
    description:
      "High-fidelity audio, broadcast-quality mic, and premium build quality.",
    rating: 5,
  },
];

const bestSellerHeadsets: Headset[] = [
  {
    id: 1,
    image: "/image/headset/headset11.png",
    title: "Headband",
    category: "Over-Ear",
    price: "$329.99",
    description: "Premium noise cancellation, balanced audio, and comfortable over-ear design.",
    rating: 5,
  },
  {
    id: 2,
    image: "/image/headset/headset2.jpg",
    title: "Beats Studio Pro",
    category: "Studio Headphones",
    price: "$349.99",
    description: "Wireless gaming headset with 24-hour battery life and ClearCast microphone.",
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
    description: "THX Spatial Audio, lightweight build, and noise-canceling mic.",
    rating: 5,
  },
  {
    id: 5,
    image: "/image/headset/headset4.png",
    title: "Beats",
    category: "Studio Pro",
    price: "$129.99",
    description: "Blue VO!CE mic tech, premium memory foam, and pro-grade sound.",
    rating: 5,
  },
  {
    id: 6,
    image: "/image/headset/headset8.jpg",
    title: "Accessories Pro",
    category: "Gaming Audio",
    price: "$179.99",
    description: "High-fidelity audio and premium broadcast mic.",
    rating: 5,
  },
  {
    id: 7,
    image: "/image/headset/headset8.jpg",
    title: "Accessories Pro",
    category: "Gaming Audio",
    price: "$179.99",
    description: "High-fidelity audio and premium broadcast mic.",
    rating: 5,
  },
  {
    id: 8,
    image: "/image/headset/headset9.png",
    title: "Apple AirPods Max",
    category: "Luxury Wireless",
    price: "$549.99",
    description: "Spatial audio, active noise cancellation, sleek aluminum design.",
    rating: 5,
  },
  {
    id: 9,
    image: "/image/headset/headset10.jpg",
    title: "Sennheiser HD 660 S",
    category: "Audiophile",
    price: "$499.99",
    description: "Open-back design with natural sound reproduction.",
    rating: 5,
  },
];

export default function HeadsetHomepage() {
  return (
    <>
      <div className="w-full min-h-screen bg-yellow-400">
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 py-10 md:py-20 md:px-16">
          <div className="w-full md:w-1/2">
            <Image
              src={bg}
              alt="Music background"
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <div className="max-w-md mx-auto md:mx-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black leading-tight">
                Listen to <br />
                the <span className="text-blue-500">amazing</span> <br />
                music sound.
              </h1>
              <p className="text-base sm:text-lg text-black mb-6">
                Experience music like never before
              </p>
              <button className="bg-black text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-800 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">New Arrivals</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-8">
              {headsets.map((headset) => (
                <div
                  key={headset.id}
                  className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={headset.image}
                      alt={headset.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>

                  <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                    Add to Cart
                  </button>

                  <div className="flex items-center pl-5 pt-2">
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

                  <div className="pl-5">
                    <div className=" items-start">
                      <h4 className="font-bold text-md">{headset.title}</h4>
                      <h4 className="font-bold text-md">{headset.category}</h4>
                      <span className=" text-black font-bold text-md">
                        {headset.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <section className="px-4 py-10">
          <h2 className="text-3xl font-bold mb-12">Shop Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 h-full ">
            {headsets2.map((item, index) => (
              <div
                key={item.id}
                className={`rounded-xl p-4 bg-gray-100 shadow-sm transition hover:shadow-md ${
                  index === 0? "md:row-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative w-full h-48 md:h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    objectFit="contain"
                    className="rounded-lg"
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  {item.category}
                  <span>colection →</span>
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="px-4 py-10 bg-white">
  <h2 className="text-3xl font-bold mb-12">Best Sellers</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
    {[
      "headset11.png",
      "headset2.jpg",
      "headset5.png",
      "headset3.png",
      "headset4.png",
      "headset8.jpg",
      "headset8.jpg", // repeated as per your list
      "headset9.png",
      "headset10.jpg",
    ].map((img, index) => (
      <div
        key={index}
        className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-md transition"
      >
        <div className="relative w-full h-48">
          <Image
            src={`/image/headset/${img}`}
            alt={`Headset ${index + 1}`}
            fill
            className="object-contain p-4"
          />
        </div>
        <div className="text-center p-3">
          <p className="font-semibold">Headset {index + 1}</p>
          <button className="mt-2 bg-black text-white text-sm py-1 px-3 rounded hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

    </>
  );
}

function StarIcon({ filled, half }: { filled: boolean; half?: boolean }) {
  if (filled) {
    return (
      <svg
        className="w-5 h-5 text-black"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
      </svg>
    );
  } else if (half) {
    return (
      <svg
        className="w-5 h-5 text-black"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <defs>
          <linearGradient id="half">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"
          fill="url(#half)"
        />
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    );
  } else {
    return (
      <svg
        className="w-5 h-5 text-gray-300"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
      </svg>
    );
  }
}
