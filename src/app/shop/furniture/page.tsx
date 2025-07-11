'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Off-white Pillow',
    price: 7.0,
    category: 'Living Room',
    discount: 50,
    new: true,
    rating: 5,
    description:
      'Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.',
    image: '/image/furniture/pillow2.png',
  },
  {
    id: 2,
    name: 'Table Lamp',
    price: 39.99,
    category: 'Living Room',
    new: true,
    rating: 5,
    description:
      'Like small jewels in shiny brass and clear glass, spread a soft mood light that creates exciting shadows on walls and ceilings.',
    image: '/image/furniture/Table lamp.png',
  },
  {
    id: 3,
    name: 'White Drawer Unit',
    price: 89.99,
    category: 'Living Room',
    new: true,
    rating: 5,
    description:
      'Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.',
    image: '/image/furniture/bedroom2.png',
  },
  {
    id: 4,
    name: 'Cozy Sofa',
    price: 299.0,
    category: 'Living Room',
    new: true,
    rating: 5,
    description:
      'Easy transportation was the goal when we created this comfy loveseat with durable beige polyester fabric.',
    image: '/image/furniture/sofa5.jpg',
  },
  {
    id: 5,
    name: 'Bamboo Basket',
    price: 9.99,
    category: 'Living Room',
    new: false,
    rating: 5,
    description:
      'With its soft shape and color, this spacious basket is just as decorative wherever you choose to put it.',
    image: '/image/furniture/basket.png',
  },
  {
    id: 6,
    name: 'Black Tray Table',
    price: 19.19,
    category: 'Living Room',
    new: false,
    rating: 5,
    description:
      "Easy to love at a price that's hard to resist. Buy one or buy a few and make every space where you sit more convenient.",
    image: '/image/furniture/table.png',
  },
];

export default function Shop3() {
  const [category, setCategory] = useState('Living Room');
  const [priceFilter, setPriceFilter] = useState('All Price');
  const [sortBy, setSortBy] = useState('');

  const filteredProducts = products
    .filter((product) => category === 'All' || product.category === category)
    .filter(
      (product) =>
        priceFilter === 'All Price' ||
        (priceFilter === 'Under $50' ? product.price < 50 : product.price >= 50)
    )
    .sort((a, b) => {
      if (sortBy === 'Price Low to High') return a.price - b.price;
      if (sortBy === 'Price High to Low') return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-white">
     

      <div className="relative h-86 bg-gray-300 mb-6">
        <Image
          src="/image/furniture/sofa4.jpg"
          alt="Shop Hero"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-gray-900 gap-6">
          {/* <div className="flex flex-row space-x-5 items-center text-sm font-medium text-gray-700">
            <p>Home</p>
            <span>/</span>
            <p>Shop</p>
          </div> */}
          <p className="text-5xl font-bold">Shop Page</p>
          <h2 className="text-2xl mt-2 text-gray-700">
            Let us design the place you always imagined
          </h2>
        </div>
      </div>

      {/* Filters and Sorting */}
      <section className="bg-white mx-auto max-w-7xl p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
            <select
              className="border border-gray-300 p-2 rounded text-sm text-gray-600 bg-white w-full sm:w-auto"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Living Room">CATEGORIES</option>
              <option value="All">All Categories</option>
              <option value="Living Room">Living Room</option>
            </select>
            <select
              className="border border-gray-300 p-2 rounded text-sm text-gray-600 bg-white w-full sm:w-auto"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="All Price">PRICE</option>
              <option value="All Price">All Price</option>
              <option value="Under $50">Under $50</option>
            </select>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4 w-full md:w-auto justify-between">
            <select
              className="border border-gray-300 p-2 rounded text-sm text-gray-600 bg-white flex-1 md:flex-none"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Sort by</option>
              <option value="Price Low to High">Price Low to High</option>
              <option value="Price High to Low">Price High to Low</option>
            </select>
            {/* View toggle buttons */}
            <div className="hidden md:flex space-x-2">
              <button className="p-2 border border-gray-300 rounded" aria-label="Grid view">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-2 h-2 bg-gray-400"></div>
                  <div className="w-2 h-2 bg-gray-400"></div>
                  <div className="w-2 h-2 bg-gray-400"></div>
                  <div className="w-2 h-2 bg-gray-400"></div>
                </div>
              </button>
              <button className="p-2 border border-gray-300 rounded" aria-label="List view">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400"></div>
                  <div className="w-2 h-2 bg-gray-400"></div>
                  <div className="w-2 h-2 bg-gray-400"></div>
                </div>
              </button>
              <button className="p-2 border border-gray-300 rounded" aria-label="Menu view">
                <div className="flex flex-col space-y-1">
                  <div className="w-6 h-1 bg-gray-400"></div>
                  <div className="w-6 h-1 bg-gray-400"></div>
                  <div className="w-6 h-1 bg-gray-400"></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="p-1 md:p-2 border rounded shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Image container */}
                <div className="sm:w-72 w-full h-76 relative flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 288px"
                    className="object-contain"
                    priority={product.id === 1}
                  />
                  {/* Labels */}
                  {product.new && (
                    <span className="absolute top-2 left-2 bg-white text-black px-2 py-1 text-xs font-medium rounded z-10">
                      NEW
                    </span>
                  )}
                  {product.discount && (
                    <span className="absolute top-10 left-2 bg-green-500 text-white px-2 py-1 text-xs font-medium rounded z-10">
                      -{product.discount}%
                    </span>
                  )}
                </div>

                {/* Product details */}
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-black text-sm mb-1" aria-label={`${product.rating} star rating`}>
                      {'★'.repeat(product.rating)}
                    </p>
                    <h3 className="text-lg font-semibold text-black mb-1">{product.name}</h3>
                    <p className="text-lg font-bold text-black mb-3">${product.price.toFixed(2)}</p>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                    <button className="bg-black text-white px-4 py-2 rounded text-sm font-medium w-full mb-3 hover:bg-gray-800 transition-colors">
                      Add to cart
                    </button>
                    <button className="text-gray-600 px-4 py-2 rounded text-sm font-medium w-full mb-3 hover:text-gray-800 transition-colors flex items-center justify-center space-x-2">
                      <span>♡</span>
                      <span>Wishlist</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more button */}
        <div className="text-center mt-8">
          <button className="border border-gray-300 text-gray-800 px-8 py-3 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
            Show more
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative h-72 flex items-center justify-center bg-gray-100">
        <div className="absolute left-0 h-full w-1/3">
          <Image
            src="/image/furniture/bedroom.png"
            alt="dresser"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full rounded-lg py-8 mx-4">
          <h2 className="text-4xl font-semibold text-gray-900 mb-2">Join Our Newsletter</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Sign up for deals, new products and promotions
          </p>
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

      {/* Footer */}
      <footer className="w-full py-10 px-6 bg-black">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Brand & Nav */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-xl font-bold text-white">
                Elegant.
                <span className="text-gray-400 text-sm font-light"> | Headphone Store</span>
              </p>
            </div>

            <nav>
              <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium text-gray-400">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/shop">Shop</Link>
                </li>
                <li>
                  <Link href="/product">Product</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="border-t border-gray-700"></div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
              <p>&copy; 2023 Elegant. All rights reserved.</p>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
            </div>

            <ul className="flex gap-4">
              <li>
                <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
