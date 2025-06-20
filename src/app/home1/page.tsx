'use client';
import React, { useState } from 'react';

export default function Dashboard1() {
  const slides = [
    { image: '/image/furniture/sofa1.jpg', description: 'Modern leather sofa with mint pillows.', price: '89k' },
    { image: '/image/furniture/sofa2.jpg', description: 'Elegant fabric.', price: '74k' },
    { image: '/image/furniture/sofa4.jpg', description: 'Comfortable and spacious sectional sofa.', price: '999k' },
    { image: '/image/furniture/sofa3.jpg', description: 'Minimalist design, perfect for small spaces.', price: '599k' },
    { image: '/image/furniture/chair2.jpg', description: 'Elegant fabric couch with cozy feel.', price: '89k' },
    { image: '/image/furniture/sofa5.jpg', description: 'Retro Toaster sofa', price: '479k' },
  ];

  const chair = [
    { image: '/image/furniture/chair1.jpg' },
    { image: '/image/furniture/chair2.jpg' },
    { image: '/image/furniture/chair3.jpg' },
    { image: '/image/furniture/chair4.jpg' },
    { image: '/image/furniture/chair5.jpg' },
  ];

  const room = [
    { image: '/image/furniture/room1.jpg' },
    { image: '/image/furniture/room2.jpg' },
    { image: '/image/furniture/room3.jpg' },
    { image: '/image/furniture/room4.jpg' },
    { image: '/image/furniture/room5.jpg' },
    { image: '/image/furniture/room.jpg' },
  ];

  const kitchen = [
    { image: '/image/furniture/kitchen1.jpg' },
    { image: '/image/furniture/kitchen2.jpg' },
    { image: '/image/furniture/kitchen3.jpg' },
    { image: '/image/furniture/kitchen.jpg' },
  ];

  const newArrivals = [
    { image: '/image/furniture/sofa2.jpg', title: 'Modern Tan Sofa', price: '99K', rating: 5 },
    { image: '/image/furniture/chair2.jpg', title: 'Retro Toaster', price: '79K', rating: 4 },
    { image: '/image/furniture/room.jpg', title: 'Accent Chair', price: '289K', rating: 4 },
    { image: '/image/furniture/kitchen2.jpg', title: 'Woven Basket', price: '450K', rating: 5 },
  ];

  const popular = [
    { image: '/image/furniture/sofa1.jpg', title: 'Mint Leather Sofa', description: 'Modern leather sofa with mint pillows.', price: '89k' },
    { image: '/image/furniture/sofa2.jpg', title: 'Elegant Fabric Sofa', description: 'Elegant fabric.', price: '74k' },
    { image: '/image/furniture/sofa4.jpg', title: 'Sectional Sofa', description: 'Comfortable and spacious sectional sofa.', price: '999k' },
    { image: '/image/furniture/sofa3.jpg', title: 'Minimalist Sofa', description: 'Minimalist design, perfect for small spaces.', price: '599k' },
  
  ];

  const [current, setCurrent] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((current + 1) % slides.length);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <div className="w-full h-96 bg-gray-400 mx-auto mt-12 relative">
        <div className="overflow-hidden rounded-xl shadow-md">
          <img
            src={slides[current].image}
            alt={`Slide ${current + 1}`}
            onClick={() => setShowDescription(!showDescription)}
            className="w-full h-96 object-cover cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        {showDescription && (
          <p className="mt-4 text-center text-gray-700 text-lg transition-opacity duration-500">
            {slides[current].description}
          </p>
        )}

        <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow">←</button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow">→</button>
      </div>

      
      <div className="flex space-x-5 mt-8 px-4">
        <p className="text-3xl text-gray-800">Simply Unique/<br />Simply Better</p>
        <p className="text-sm text-gray-600">Elegant is a gift & decorations store based in Kigali, Rwanda. Est since 2019</p>
      </div>

      
      <section className="w-full mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
          <div className="md:col-span-2 bg-gray-100 flex items-center justify-between p-6 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Living Room</h3>
              <a href="#" className="text-sm text-gray-600 hover:underline">Shop Now →</a>
            </div>
            <img src={chair[current % chair.length].image} alt="Chair" className="w-full h-92 md:h-64 object-contain" />
          </div>

      
          <div className="flex flex-col gap-6">
            <div className="bg-gray-100 flex items-center justify-between p-6 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Bedroom</h3>
                <a href="#" className="text-sm text-gray-600 hover:underline">Shop Now →</a>
              </div>
              <img src={room[current % room.length].image} alt="Room" className="h-64 md:h-32 object-contain" />
            </div>

            <div className="bg-gray-100 flex items-center justify-between p-6 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Kitchen</h3>
                <a href="#" className="text-sm text-gray-600 hover:underline">Add to cart →</a>
              </div>
              <img src={kitchen[current % kitchen.length].image} alt="Kitchen" className="h-64 md:h-32 object-contain" />
            </div>
          </div>
        </div>
      </section>

      
      <section className="px-4 py-12 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {newArrivals.map((item, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg hover:shadow-md transition duration-300">
              <img src={item.image} alt={item.title} className="h-48 w-full object-cover rounded" />
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <div className="text-yellow-500">
                {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
              </div>
              <p className="text-gray-700 mt-1">{item.price}</p>
              <button className="mt-2 text-sm bg-black text-white px-3 py-1 rounded hover:bg-gray-800">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      
      <section className="bg-gray-100 px-4 py-10 mt-12 rounded-lg mx-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img src="/image/furniture/sofa5.jpg"  alt="sofa5" className="rounded-lg h-64 w-full" />
        </div>
        <div className="w-full md:w-1/2 bg-gray-200 p-6  h-64 rounded-lg">
          <h3 className="text-2xl font-bold mb-2 text-gray-800">HUNDREDS of New Lower Prices!</h3>
          <p className="text-gray-600">Discover new markdowns on furniture, décor, and more—updated every week.</p>
          <a href="#" className="mt-4 inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">Shop Now</a>
        </div>
      </section>

      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-8 text-center">
        <div>
          <h4 className="font-semibold text-gray-800">Free Shipping</h4>
          <p className="text-sm text-gray-600">On orders over $100</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">Money-back Guarantee</h4>
          <p className="text-sm text-gray-600">30 days refund policy</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">24/7 Support</h4>
          <p className="text-sm text-gray-600">We’re here to help</p>
        </div>
      </section>

    
      <section className="px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Popular Picks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {popular.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow hover:shadow-md transition">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded mb-2" />
              <h4 className="font-semibold text-gray-800">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

    
      <div
        style={{ backgroundImage: "url('/image/furniture/chair2.jpg')" }}
        className="bg-cover bg-center p-10 text-center text-white mt-12"
      >
        <p className="text-3xl font-bold">Join Our Newsletter</p>
        <p>Sign up for deals, new products and promotions</p>
        <div className="flex justify-center space-x-4 mt-4">
          <input type="email" placeholder="Email address" className="p-2 rounded text-black" />
          <a href="/sign-up" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Sign Up</a>
        </div>
      </div>

    </main>
  );
}
