"use client"

import Head from "next/head";
import { useState } from "react";
import Image from "next/image"

export default function Intro() {

    const [current, setCurrent] = useState(0);
     const slides = [
    {
      image: "/image/furniture/sofa1.jpg",
      title: "Modern Leather Sofa",
      description: "Modern leather sofa with mint pillows.",
      price: "89k",
    },
    {
      image: "/image/furniture/chair1.png",
      title: "Elegant chair",
      description: "Elegant chair with a modern design.",
      price: "89k",
    },
    {
      image: "/image/furniture/livingroom.png",
      title: "Mint Leather Sofa",
      price: "89k",
    },
    {
      image: "/image/furniture/kitchen.jpg",
      title: "Kitchen Fabric",
      price: "90k",
    },
    {
      image: "/image/furniture/bedroom.png",
      title: "Accent Room Cupboard",
      price: "289k",
    },
    {
      image: "/image/furniture/Loveseat sofa.png",
      title: "Love Seat Sofa",
      price: "200k",
    },
    {
      image: "/image/furniture/Table lamp.png",
      title: "Table Lamp",
      price: "160k",
    },
    {
      image: "/image/furniture/Beige table lamp.png",
      title: "Beige Table Lamp",
      price: "289k",
    },
    {
      image: "/image/furniture/basket.png",
      title: "Bamboo Basket",
      price: "200k",
    },
    { image: "/image/furniture/Toasted.pgg", title: "Toaster", price: "140k" },
    {
      image: "/image/furniture/sofa2.jpg",
      title: "Mint Leather Sofa",
      description: "7 ways to decorate your home",
      price: "89k",
    },
    {
      image: "/image/furniture/kitchen.jpg",
      title: "Elegant Kitchen Fabric",
      description: "Kitchen organization",
      price: "74k",
    },
    {
      image: "/image/furniture/bedroom1.jpg",
      title: "Sectional Bedroom",
      description: "Decor your bedroom",
      price: "99k",
    },
  ];

   const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((current + 1) % slides.length);
  return (
    <div className="">
      
    
      <main className="flex flex-col items-center py-10 w-full t-4">
        <div className="relative w-full max-w-4xl">
          <Image
            
         src={slides[current].image}
         alt={`Slide ${current + 1}`}

            width={1000}
            height={400}
            className="object-cover cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 h-110 w-full"

          />
          <button onClick={prevSlide} className="absolute left-0 top-1/2 transform bg-white rounded-full m-5 -translate-y-1/2  p-2 text-black ">←</button>     
          <button onClick={nextSlide} className="absolute right-0 top-1/2 transform bg-white rounded-full m-5 -translate-y-1/2 p-2 text-black">→</button>     
        </div>
        <div className="flex space-x-75 justify-between mt-6  text-black">
          <h1 className="text-4xl font-bold">
            Simply Unique / <br /> Simply Better.
          </h1>
          <p className=" mt-2 text-sm text-gray-600">
            <strong className="text-black">3legant</strong> is a gift & decorations store based in HCMC,<br/>
             Vietnam. Est since 2019.
             
          </p>
        </div>
      </main>

    </div>
  );
}