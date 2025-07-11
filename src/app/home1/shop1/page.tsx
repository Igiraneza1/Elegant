'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number; 
  image: string;
  rating: number;
  isNew?: boolean;
  discount?: string;
}

export default function Shop1() {
  const products: Product[] = [
    {
      id: 1,
      name: 'Loveseat Sofa',
      price: 199.99,
      originalPrice: 400.00,
      image: '/image/furniture/Loveseat sofa.png',
      rating: 4.5,
      isNew: true,
      discount: '-50%',
    },
    {
      id: 2,
      name: 'Luxury Sofa',
      price: 299.99,
      originalPrice: 600.00,
      image: '/image/furniture/livingroom.png',
      rating: 4.0,
      isNew: true,
      discount: '-50%',
    },
    {
      id: 3,
      name: 'Table Lamp',
      price: 19.00,
      originalPrice: 38.00,
      image: '/image/furniture/Beige table lamp.png',
      rating: 4.2,
      isNew: true,
      discount: '-50%',
    },
    {
      id: 4,
      name: 'White Drawer Unit',
      price: 89.99,
      originalPrice: 179.98,
      image: '/image/furniture/bedroom2.png',
      rating: 4.7,
      isNew: true,
      discount: '-50%',
    },
    {
      id: 5,
      name: 'Black Tray Table',
      price: 19.99,
      originalPrice: 39.98,
      image: '/image/furniture/table.png',
      rating: 4.5,
      isNew: true,
      discount: '-50%',
    },
    {
      id: 6,
      name: 'Lamp',
      price: 39.99,
      originalPrice: 79.98,
      image: '/image/furniture/lamp.png',
      rating: 4.1,
      isNew: true,
      discount: '-50%',
    },
    {
      id: 7,
      name: 'Light Beige Pillow',
      price: 3.99,
      originalPrice: 7.98,
      image: '/image/furniture/pillow.png',
      rating: 4.3,
      isNew: true,
      discount: '-50%',
    },
    {
      id: 8,
      name: 'Table Lamp',
      price: 39.99,
      originalPrice: 79.98,
      image: '/image/furniture/Table lamp.png',
      rating: 4.4,
      isNew: true,
      discount: '-50%',
    },
    {
      id: 9,
      name: 'Bamboo Basket',
      price: 9.99,
      originalPrice: 19.98,
      image: '/image/furniture/basket.png',
      rating: 4.6,
      isNew: true,
      discount: '-50%',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">3legant.</h1>
          <nav className="space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/shop" className="text-gray-600 hover:text-gray-900">
              Shop
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>
          </nav>
          <div className="space-x-4">
            <span>🔍</span>
            <span>🔔</span>
            <span>👤</span>
          </div>
        </div>
      </header>

      
     
      <div className="relative h-86 bg-gray-300 mb-6">
        <Image
          src="/image/furniture/sofa4.jpg"
          alt="Shop Hero"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-gray-900 gap-6">
          <div className=' flex flex-row space-x-5 items-center'>
           <p className="text-sm  gap-6">Home  </p> 
           <p>/</p>
           < p>   Shop</p>
          </div>
          <p className="text-5xl font-bold"> Shop Page</p>
          <h2 className="text-2xl  mt-2 text-gray-700">
            Let's design the place you always imagined
          </h2>
        </div>
      </div>

    
      <div className=" mx-auto p-4 pt-6 flex flex-col md:flex-row gap-6">
        
        <div className="w-full md:w-1/4 bg-white p-4 ">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">Filter</h2>
          <div className="space-y-6">
            <div>
              <p className="text-gray-900  mb-4 font-bold">CATEGORIES</p>
              <ul className="space-y-2 text-gray-600">
                <li>All Rooms</li>
                <li className='underline text-gray-900 font-bold'>Living Room</li>
                <li>Bedroom</li>
                <li>Kitchen</li>
                <li>Bathroom</li>
                <li>Dining</li>
                <li>Outdoor</li>
              </ul>
            </div>
            
          </div>
        </div>

        <div className="hidden md:block w-1 bg-gradient-to-t  from-brown-700 to-black mx-4 h-86"></div>

        
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Living Room</h2>
            <div className="flex space-x-2">
              <span className="text-gray-600">Sort by</span>
              <select className="border rounded p-1 text-gray-600">
                <option>Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
              <button className="text-gray-600">▢</button>
              <button className="text-gray-600">▧</button>
              <button className="text-gray-600">▤</button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className=" p-4  relative">
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={300}
                    className="w-full h-64 object-cover mb-2"
                  />
                  <div className='flex flex-col gap-2 m-2'>
                 
                  {product.isNew && (
                    <span className="absolute top-2  bg-green-500 text-white text-xs px-2 py-1 rounded">
                      NEW
                    </span>
                  )}
                   {product.discount && (
                    <span className="absolute top-10  bg-green-500 text-white text-xs px-2 py-1 rounded">
                      50%
                    </span>
                  )}
                  </div>
                  {product.id === 5 && (
                    <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded w-3/4">
                      Add to Cart
                    </button>
                  )}
                </div>
                <h3 className="text-md font-semibold text-gray-900 mt-2">{product.name}</h3>
                <p className="text-gray-600">
                  ${product.price.toFixed(2)}{' '}
                  {product.originalPrice && (
                    <span className="line-through text-gray-500">${product.originalPrice.toFixed(2)}</span>
                  )}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={i < Math.floor(product.rating) ? 'text-gray-900' : 'text-gray-700'}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded text-gray-900 hover:bg-gray-100">
              Show more
            </button>
          </div>
        </div>
      </div>

    
      <section className="relative h-72 flex items-center justify-center bg-gray-100 mt-8">
        <div className="absolute left-0 h-full w-1/3">
          <Image
            src="/image/furniture/bedroom.png"
            alt="dresser"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-md rounded-lg py-8 mx-4">
          <h2 className="text-4xl font-semibold text-gray-900 mb-2">Join Our Newsletter</h2>
          <p className="text-gray-700 mb-6 text-lg">Sign up for deals, new products and promotions</p>
          <div className="flex items-center border-b border-gray-800 w-full max-w-md">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-600 text-sm py-2 px-1"
            />
            <button className="ml-4 text-sm font-medium text-gray-900 cursor-pointer hover:text-gray-600 transition-colors">
              Signup
            </button>
          </div>
        </div>
        <div className="absolute right-0 h-full w-1/3">
          <Image
            src="/image/furniture/chair1.png"
            alt="chair"
            fill
            className="object-cover"
          />
        </div>
      </section>

    
      <footer className="w-full py-10 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-xl font-bold">
                3legant.
                <span className="text-gray-400 text-sm font-light"> | Gift & Decoration Store</span>
              </p>
            </div>
            <nav>
              <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium text-gray-400">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/shop">Shop</Link></li>
                <li><Link href="/product">Product</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </nav>
          </div>
          <div className="border-t border-gray-700"></div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
              <p>© 2023 3legant. All rights reserved.</p>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
            </div>
            <ul className="flex gap-4">
              <li>
                <Link href="https://www.facebook.com/" target="_blank" className="hover:text-blue-400">Facebook</Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/" target="_blank" className="hover:text-pink-400">Instagram</Link>
              </li>
              <li>
                <Link href="https://www.twitter.com/" target="_blank" className="hover:text-blue-300">Twitter</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}