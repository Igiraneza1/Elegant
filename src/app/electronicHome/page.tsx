"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  description?: string;
  features?: string[];
  rating?: number;
  colors?: string[];
}

export default function ElectronicHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const [slideInterval] = useState(3000);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Complete products data with all images and additional details
  const products: Product[] = [
       {
      id: 1,
      image: "/image/eletronics/airpods1.jpg",
      title: "Airpods Pro",
      price: "$19",
      description: "Compact wireless earbuds with good sound quality.",
      features: ["Bluetooth 5.0", "4 hours playback", "Charging case"],
      rating: 4.0
    },
    {
      id: 2,
      image: "/image/eletronics/airpods2.jpg",
      title: "Airpods Max",
      price: "$29",
      description: "Over-ear headphones with decent audio performance.",
      features: ["Wired connection", "Adjustable headband", "Foldable design"],
      rating: 3.8
    },
    {
      id: 3,
      image: "/image/eletronics/airpodspro.jpg",
      title: "Airpods 2",
      price: "$9",
      description: "Basic wireless earbuds for everyday use.",
      features: ["Bluetooth 4.2", "3 hours playback", "Simple controls"],
      rating: 3.5
    },
    {
      id: 4,
      image: "/image/eletronics/camera1.jpg",
      title: "Security camera",
      price: "$50",
      description: "Basic home security camera with motion detection.",
      features: ["720p resolution", "Night vision", "Mobile alerts"],
      rating: 3.9
    },
    {
      id: 5,
      image: "/image/eletronics/camera2.jpg",
      title: "Indoor camera",
      price: "$49",
      description: "Compact camera for indoor monitoring.",
      features: ["1080p resolution", "Two-way audio", "Wi-Fi connectivity"],
      rating: 4.1
    },
    {
      id: 6,
      image: "/image/eletronics/camera3.jpg",
      title: "Outdoor camera",
      price: "$79",
      description: "Weather-resistant camera for outdoor security.",
      features: ["IP66 rating", "Wide-angle lens", "Cloud storage"],
      rating: 4.2
    },
    {
      id: 7,
      image: "/image/eletronics/camera4.jpg",
      title: "Smart camera",
      price: "$109",
      description: "Advanced camera with AI detection features.",
      features: ["Person detection", "Facial recognition", "Smart alerts"],
      rating: 4.4
    },
    {
      id: 8,
      image: "/image/eletronics/earphone1.jpg",
      title: "Earphone",
      price: "$4",
      description: "Basic wired earphones with decent sound.",
      features: ["3.5mm jack", "In-line controls", "Tangle-free cable"],
      rating: 3.2
    },
    {
      id: 9,
      image: "/image/eletronics/earphone2.jpg",
      title: "Earphone",
      price: "$3",
      description: "Simple wired earphones for casual listening.",
      features: ["Lightweight", "Comfortable fit", "Universal compatibility"],
      rating: 3.0
    },
    {
      id: 10,
      image: "/image/eletronics/head-phone.jpg",
      title: "Headphone",
      price: "$20",
      description: "On-ear headphones with good audio quality.",
      features: ["Wired connection", "Adjustable headband", "Foldable design"],
      rating: 3.7
    },
    {
      id: 11,
      image: "/image/eletronics/headphone.jpg",
      title: "Headphone",
      price: "$19",
      description: "Comfortable over-ear headphones for daily use.",
      features: ["Soft ear cushions", "Volume control", "3.5mm jack"],
      rating: 3.6
    },
    {
      id: 12,
      image: "/image/eletronics/laptop1.jpg",
      title: "HP",
      price: "$500",
      description: "Reliable laptop for work and study.",
      features: ["15.6\" display", "8GB RAM", "256GB SSD"],
      rating: 4.0
    },
    {
      id: 13,
      image: "/image/eletronics/laptop2.jpg",
      title: "MacBook",
      price: "$900",
      description: "Sleek and powerful laptop for professionals.",
      features: ["13.3\" Retina display", "8GB RAM", "256GB SSD"],
      rating: 4.5
    },
    {
      id: 14,
      image: "/image/eletronics/laptop3.jpg",
      title: "Lenovo",
      price: "$600",
      description: "Versatile laptop for business and personal use.",
      features: ["14\" display", "12GB RAM", "512GB SSD"],
      rating: 4.2
    },
    {
      id: 15,
      image: "/image/eletronics/laptop4.jpg",
      title: "MacBook",
      price: "$1000",
      description: "Premium laptop with excellent performance.",
      features: ["M1 chip", "8-core CPU", "7-core GPU"],
      rating: 4.7
    },
    {
      id: 16,
      image: "/image/eletronics/laptop5.jpg",
      title: "MackBook Desktop",
      price: "$700",
      description: "Compact desktop computer with great features.",
      features: ["Intel Core i5", "8GB RAM", "256GB SSD"],
      rating: 4.3
    },
    {
      id: 17,
      image: "/image/eletronics/laptop6.jpg",
      title: "MacBook",
      price: "$800",
      description: "Lightweight laptop for everyday computing.",
      features: ["13\" display", "8GB RAM", "128GB SSD"],
      rating: 4.1
    },
    {
      id: 18,
      image: "/image/eletronics/laptop7.jpg",
      title: "MacBook",
      price: "$1200",
      description: "High-performance laptop for demanding tasks.",
      features: ["16\" display", "16GB RAM", "512GB SSD"],
      rating: 4.8
    },
    {
      id: 19,
      image: "/image/eletronics/mobile.jpg",
      title: "Mobile",
      price: "$150",
      description: "Basic smartphone for calls and messaging.",
      features: ["5\" display", "2GB RAM", "16GB storage"],
      rating: 3.5
    },
    {
      id: 20,
      image: "/image/eletronics/set1.jpg",
      title: "HP & Tablet & Phone",
      price: "$1800",
      description: "Complete tech bundle for work and entertainment.",
      features: ["Laptop", "Tablet", "Smartphone"],
      rating: 4.6
    },
    {
      id: 21,
      image: "/image/eletronics/set2.jpg",
      title: "MacBook & Tablet & Smart watch & Airpods",
      price: "$2000",
      description: "Premium Apple ecosystem bundle.",
      features: ["MacBook Air", "iPad", "Apple Watch", "AirPods"],
      rating: 4.9
    },
    {
      id: 22,
      image: "/image/eletronics/set3.jpg",
      title: "HP & Headphone",
      price: "$900",
      description: "Laptop and headphone combo package.",
      features: ["HP Pavilion", "Premium headphones"],
      rating: 4.3
    },
    {
      id: 23,
      image: "/image/eletronics/smartphone1.jpg",
      title: "Infinix",
      price: "$300",
      description: "Budget smartphone with good features.",
      features: ["6.5\" display", "4GB RAM", "64GB storage"],
      rating: 3.9
    },
    {
      id: 24,
      image: "/image/eletronics/smartphone2.jpg",
      title: "iPhone",
      price: "$800",
      description: "Premium smartphone with excellent camera.",
      features: ["iOS", "A15 Bionic", "12MP camera"],
      rating: 4.7
    },
    {
      id: 25,
      image: "/image/eletronics/smartphone3.jpg",
      title: "Samsung",
      price: "$500",
      description: "Android smartphone with great display.",
      features: ["AMOLED display", "8GB RAM", "128GB storage"],
      rating: 4.4
    },
    {
      id: 26,
      image: "/image/eletronics/stand1.jpg",
      title: "Stand pro",
      price: "$30",
      description: "Adjustable stand for phones and tablets.",
      features: ["360° rotation", "Sturdy base", "Multiple angles"],
      rating: 4.0
    },
    {
      id: 27,
      image: "/image/eletronics/stand2.jpg",
      title: "Horizontal stand",
      price: "$40",
      description: "Sleek stand for displaying devices horizontally.",
      features: ["Aluminum construction", "Non-slip surface", "Minimalist design"],
      rating: 4.1
    },
    {
      id: 28,
      image: "/image/eletronics/stand3.jpg",
      title: "Stand max",
      price: "$50",
      description: "Premium stand with charging capability.",
      features: ["Qi wireless charging", "Adjustable height", "Cable management"],
      rating: 4.3
    },
    {
      id: 29,
      image: "/image/eletronics/stand4.jpg",
      title: "Multiple stand",
      price: "$60",
      description: "Stand that holds multiple devices simultaneously.",
      features: ["Holds phone and tablet", "Adjustable arms", "Stable base"],
      rating: 4.2
    },
    {
      id: 30,
      image: "/image/eletronics/stand5.jpg",
      title: "Simple stand",
      price: "$17",
      description: "Basic stand for phones and small tablets.",
      features: ["Lightweight", "Portable", "Universal compatibility"],
      rating: 3.8
    },
    {
      id: 31,
      image: "/image/eletronics/tablet1.jpg",
      title: "Tablet",
      price: "$200",
      description: "Entry-level tablet for basic tasks.",
      features: ["10\" display", "32GB storage", "8MP camera"],
      rating: 3.7
    },
    {
      id: 32,
      image: "/image/eletronics/tablet2.jpg",
      title: "Tablet Pro",
      price: "$300",
      description: "Mid-range tablet with better performance.",
      features: ["10.5\" display", "64GB storage", "Stylus support"],
      rating: 4.0
    },
    {
      id: 33,
      image: "/image/eletronics/tablet3.jpg",
      title: "Tablet Max",
      price: "$400",
      description: "Large tablet for media consumption.",
      features: ["12.9\" display", "128GB storage", "Quad speakers"],
      rating: 4.3
    },
    {
      id: 34,
      image: "/image/eletronics/tablet4.jpg",
      title: "Tablet Air",
      price: "$500",
      description: "Slim and lightweight premium tablet.",
      features: ["10.9\" display", "256GB storage", "Touch ID"],
      rating: 4.5
    },
    {
      id: 35,
      image: "/image/eletronics/tablet5.jpg",
      title: "Tablet Air Max",
      price: "$600",
      description: "Top-tier tablet with professional features.",
      features: ["Liquid Retina display", "M1 chip", "5G connectivity"],
      rating: 4.8
    },
    {
      id: 36,
      image: "/image/eletronics/watch1.jpg",
      title: "Smart Watch",
      price: "$100",
      description: "Basic smartwatch with fitness tracking.",
      features: ["Heart rate monitor", "Step counter", "Smart notifications"],
      rating: 3.9
    },
    {
      id: 37,
      image: "/image/eletronics/watch2.jpg",
      title: "Smart Watch Pro",
      price: "$150",
      description: "Advanced smartwatch with more features.",
      features: ["GPS", "Water resistant", "Long battery life"],
      rating: 4.2
    },
    {
      id: 38,
      image: "/image/eletronics/watch3.jpg",
      title: "Smart Watch Max",
      price: "$200",
      description: "Premium smartwatch with health monitoring.",
      features: ["ECG", "Blood oxygen", "Fall detection"],
      rating: 4.6
    }
  ];
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (autoSlide) {
      intervalId = setInterval(() => {
        setCurrentSlide((prev) =>
          prev === products.length - 1 ? 0 : prev + 1
        );
      }, slideInterval);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [autoSlide, slideInterval, products.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 3000);
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

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold">{selectedProduct.title}</h2>
                <button 
                  onClick={closeDetails}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  ✕
                </button>
              </div>
              
              <div className="mt-4 flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                      width={600}
                      height={600}
                      className="w-full h-auto rounded-lg object-contain"
                      priority
                    />
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <p className="text-3xl font-bold text-gray-800 mb-4">
                    {selectedProduct.price}
                  </p>
                  
                  {selectedProduct.rating && (
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-xl">
                          {i < Math.floor(selectedProduct.rating!) ? '★' : '☆'}
                        </span>
                      ))}
                
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-2">Description</h3>
                    <p className="text-gray-700">{selectedProduct.description}</p>
                  </div>
                  
                  {selectedProduct.features && (
                    <div className="mb-6">
                      <h3 className="font-semibold text-lg mb-2">Key Features</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        {selectedProduct.features.map((feature, i) => (
                          <li key={i} className="text-gray-700">{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {selectedProduct.colors && (
                    <div className="mb-6">
                      <h3 className="font-semibold text-lg mb-2">Color Options</h3>
                      <div className="flex gap-2">
                        {selectedProduct.colors.map((color, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                          >
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex gap-4">
          
                    <button className="flex-1 bg-orange-500 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="bg-gradient-to-r from-yellow-300 to-orange-300 p-8 rounded-xl mb-10 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Enjoy to the <span className="text-blue-600">digital</span><br /> life.
          </h1>
          <p className="text-lg text-gray-800 mb-6">
            Experience digital like never before
          </p>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <Image
            src="/image/start1.jpg"
            alt="Man listening to music"
            width={500}
            height={500}
            className="mx-auto rounded-2xl"
          />
        </div>
      </section>

      
      <h2 className="text-5xl font-bold mb-6 text-orange-800 text-center">Electronic devices</h2>
      
      <div className="relative overflow-hidden rounded-lg shadow-lg h-full">
        <div className="relative h-96">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={product.image}
                alt={product.title}
                width={800}
                height={800}
                className="w-full h-full object-contain p-4"
                priority={index === currentSlide}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <h3 className="text-3xl font-bold text-center">
                  {product.title}
                </h3>
                <p className="text-xl opacity-80 text-center">
                  {index + 1} / {products.length}
                </p>
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
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-6" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg shadow p-4 text-center hover:shadow-lg transition"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={800}
              height={600}
              className="w-full h-48 object-contain mb-4"
            />
            <span className="bg-black text-white text-xs px-2 py-1 rounded-full uppercase text-[10px]">
              New
            </span>
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-600 text-sm">{product.price}</p>
            <div className="flex justify-center mt-4 gap-2">
              <button className="px-4 py-2 bg-yellow-400 text-black rounded font-semibold hover:bg-yellow-200">
                Add to Cart
              </button>
              <button 
                onClick={() => handleViewDetails(product)}
                className="px-4 py-2 bg-orange-400 text-black rounded font-semibold hover:bg-orange-200"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}