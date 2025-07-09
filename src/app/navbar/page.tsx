"use client";
import React, { useState } from "react";
import Link from "next/link";

const categories = ["furniture", "headset", "sport", "jacket"];
const subLinks = [
  { name: "New Arrivals", slug: "new-arrivals" },
  { name: "Best Seller", slug: "best-seller" },
  { name: "Collection", slug: "collection" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 relative z-50">
      <nav className="p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Elegant.</Link>
        </div>

        
        <div className="hidden md:flex space-x-6 items-center relative">
          <Link href="/" className="text-gray-600 hover:text-black transition-colors">
            Home
          </Link>

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
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/shop/${cat}`}
                    onClick={() => setIsShopOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 capitalize"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="relative group">
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
              <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md border border-gray-200 py-2 z-50">
                {categories.map((cat) => (
                  <div
                    key={cat}
                    className="relative group"
                    onMouseEnter={() => setHoveredCategory(cat)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <button className="w-40 px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 capitalize">
                      {cat}
                    </button>

                    {/* Submenu for hovered category */}
                    {hoveredCategory === cat && (
                      <div
                        className="absolute top-0 left-full w-40 bg-white shadow-lg rounded-md border border-gray-200 py-2 z-50"
                        onMouseEnter={() => setHoveredCategory(cat)}
                        onMouseLeave={() => setHoveredCategory(null)}
                      >
                        {subLinks.map((sub) => (
                          <Link
                            key={sub.slug}
                            href={`/product/${cat}/${sub.slug}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" className="text-gray-600 hover:text-black transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
    </div>
  );
}
