"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30 w-full max-w-7xl mx-auto relative z-50">
      <nav className="p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Elegant.</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center relative">
          <Link href="/" className="text-gray-600 hover:text-black transition-colors">
            Home
          </Link>

          {/* Shop Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsShopOpen(!isShopOpen);
                setIsProductOpen(false);
              }}
              className="text-gray-600 hover:text-black transition-colors flex items-center gap-1"
            >
              Shop
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isShopOpen && (
              <div className="absolute top-full mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-200 py-2 z-50">
                <Link href="/shop/furniture" onClick={() => setIsShopOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Furniture
                </Link>
                <Link href="/shop/headset" onClick={() => setIsShopOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Headset
                </Link>
                <Link href="/shop/sport" onClick={() => setIsShopOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Sport
                </Link>
                <Link href="/shop/jacket" onClick={() => setIsShopOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Jacket
                </Link>
              </div>
            )}
          </div>

          {/* Product Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsProductOpen(!isProductOpen);
                setIsShopOpen(false);
              }}
              className="text-gray-600 hover:text-black transition-colors flex items-center gap-1"
            >
              Product
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isProductOpen && (
              <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 py-2 z-50">
                <Link href="/product/featured" onClick={() => setIsProductOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Featured
                </Link>
                <Link href="/product/best-sellers" onClick={() => setIsProductOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Best Sellers
                </Link>
                <Link href="/product/new-arrivals" onClick={() => setIsProductOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-100">
                  New Arrivals
                </Link>
                <Link href="/product/sale" onClick={() => setIsProductOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Sale
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="text-gray-600 hover:text-black transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 space-y-3 shadow-md rounded-lg">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 hover:text-black">
            Home
          </Link>

          {/* Shop Mobile */}
          <div>
            <button onClick={() => setIsShopOpen(!isShopOpen)} className="w-full text-left text-gray-600 hover:text-black">
              Shop
            </button>
            {isShopOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link href="/shop/furniture" onClick={() => setIsMenuOpen(false)} className="block text-sm">
                  Furniture
                </Link>
                <Link href="/shop/headset" onClick={() => setIsMenuOpen(false)} className="block text-sm">
                  Headset
                </Link>
                <Link href="/shop/sport" onClick={() => setIsMenuOpen(false)} className="block text-sm">
                  Sport
                </Link>
                <Link href="/shop/jacket" onClick={() => setIsMenuOpen(false)} className="block text-sm">
                  Jacket
                </Link>
              </div>
            )}
          </div>

          {/* Product Mobile */}
          <div>
            <button onClick={() => setIsProductOpen(!isProductOpen)} className="w-full text-left text-gray-600 hover:text-black">
              Product
            </button>
            {isProductOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link href="/product/featured" onClick={() => setIsMenuOpen(false)} className="block text-sm">
                  Featured
                </Link>
                <Link href="/product/best-sellers" onClick={() => setIsMenuOpen(false)} className="block text-sm">
                  Best Sellers
                </Link>
                <Link href="/product/new-arrivals" onClick={() => setIsMenuOpen(false)} className="block text-sm">
                  New Arrivals
                </Link>
                <Link href="/product/sale" onClick={() => setIsMenuOpen(false)} className="block text-sm">
                  Sale
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 hover:text-black">
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
