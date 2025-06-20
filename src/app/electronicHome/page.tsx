"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
}

export default function ElectronicHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const [slideInterval] = useState(3000);

  const products: Product[] = [
    { id: 1, image: "/image/eletronics/airpods1.jpg", title: "Airpods Pro", price: "$19" },
    { id: 2, image: "/image/eletronics/airpods2.jpg", title: "Airpods Max", price: "$29" },
    { id: 3, image: "/image/eletronics/airpods3.jpg", title: "Airpods 2", price: "$9" },
    { id: 4, image: "/image/eletronics/camera1.jpg", title: "Security camera", price: "$50" },
    { id: 5, image: "/image/eletronics/camera2.jpg", title: "Indoor camera", price: "$49" },
    { id: 6, image: "/image/eletronics/camera3.jpg", title: "Outdoor camera", price: "$79" },
    { id: 7, image: "/image/eletronics/camera4.jpg", title: "Smart camera", price: "$109" },
    { id: 8, image: "/image/eletronics/earphone1.jpg", title: "Earphone", price: "$4" },
    { id: 9, image: "/image/eletronics/earphone2.jpg", title: "Earphone", price: "$3" },
    { id: 10, image: "/image/eletronics/head-phone.jpg", title: "Headphone", price: "$20" },
    { id: 11, image: "/image/eletronics/headphone.jpg", title: "Headphone Pro", price: "$29" },
    { id: 12, image: "/image/eletronics/laptop1.jpg", title: "HP", price: "$500" },
    { id: 13, image: "/image/eletronics/laptop2.jpg", title: "MacBook", price: "$900" },
    { id: 14, image: "/image/eletronics/laptop3.jpg", title: "Lenovo", price: "$600" },
    { id: 15, image: "/image/eletronics/laptop4.jpg", title: "MacBook", price: "$1000" },
    { id: 16, image: "/image/eletronics/laptop5.jpg", title: "MackBook Desktop", price: "$700" },
    { id: 17, image: "/image/eletronics/laptop6.jpg", title: "MacBook", price: "$800" },
    { id: 18, image: "/image/eletronics/laptop7.jpg", title: "MacBook", price: "$1200" },
    { id: 19, image: "/image/eletronics/mobile.jpg", title: "Mobile", price: "$150" },
    { id: 20, image: "/image/eletronics/set1.jpg", title: "HP & Tablet & Phone", price: "$1800" },
    { id: 21, image: "/image/eletronics/set2.jpg", title: "MacBook & Tablet & Smart watch & Airpods", price: "$2000" },
    { id: 22, image: "/image/eletronics/set3.jpg", title: "HP & Headphone", price: "$900" },
    { id: 23, image: "/image/eletronics/smartphone1.jpg", title: "Infinix", price: "$300" },
    { id: 24, image: "/image/eletronics/smartphone2.jpg", title: "iPhone", price: "$800" },
    { id: 25, image: "/image/eletronics/smartphone3.jpg", title: "Samsung", price: "$500" },
    { id: 26, image: "/image/eletronics/stand1.jpg", title: "Stand pro", price: "$30" },
    { id: 27, image: "/image/eletronics/stand2.jpg", title: "Horizontal stand", price: "$40" },
    { id: 28, image: "/image/eletronics/stand3.jpg", title: "Stand max", price: "$50" },
    { id: 29, image: "/image/eletronics/stand4.jpg", title: "Multiple stand", price: "$60" },
    { id: 30, image: "/image/eletronics/stand5.jpg", title: "Simple stand", price: "$17" },
    { id: 31, image: "/image/eletronics/tablet1.jpg", title: "Tablet", price: "$200" },
    { id: 32, image: "/image/eletronics/tablet2.jpg", title: "Tablet Pro", price: "$300" },
    { id: 33, image: "/image/eletronics/tablet3.jpg", title: "Tablet Max", price: "$400" },
    { id: 34, image: "/image/eletronics/tablet4.jpg", title: "Tablet Air", price: "$500" },
    { id: 35, image: "/image/eletronics/tablet5.jpg", title: "Tablet Air Max", price: "$600" },
    { id: 36, image: "/image/eletronics/watch1.jpg", title: "Smart Watch", price: "$100" },
    { id: 37, image: "/image/eletronics/watch2.jpg", title: "Smart Watch Pro", price: "$150" },
    { id: 38, image: "/image/eletronics/watch3.jpg", title: "Smart Watch Max", price: "$200" },
  ];

  
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (autoSlide) {
      intervalId = setInterval(() => {
        setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
      }, slideInterval);
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [autoSlide, slideInterval, products.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 5000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 5000);
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 5000);
  };

  const toggleAutoSlide = () => {
    setAutoSlide(!autoSlide);
  };


  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Electronic Products Showcase</h2>
      
      
      <div className="flex justify-center gap-4 mb-4">
        <button 
          onClick={toggleAutoSlide}
          className={`px-4 py-2 rounded ${autoSlide ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'} text-white`}
        >
          {autoSlide ? 'Pause' : 'Play'}
        </button>
        <div className="flex gap-2">
          
        </div>
      </div>
      
      <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
        <div className="relative h-96">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <Image
                src={product.image}
                alt={product.title}
                width={800}
                height={600}
                className="w-full h-full object-contain p-4"
                priority={index === currentSlide}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p>{product.price}</p>
                <p className="text-sm opacity-80">{index + 1} / {products.length}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
          aria-label="Next slide"
        >
          ❯
        </button>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add to Cart
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          View Details
        </button>
      </div>
    </div>
  );
}