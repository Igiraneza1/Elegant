"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30 w-full max-w-7xl mx-auto">
      <nav className="p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Elegant.</Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/product"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Product
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Contact Us
          </Link>
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 space-y-3 shadow-md rounded-lg">
          <Link
            href="/"
            className="block text-gray-600 hover:text-black transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="block text-gray-600 hover:text-black transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            href="/product"
            className="block text-gray-600 hover:text-black transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Product
          </Link>
          <Link
            href="/contact"
            className="block text-gray-600 hover:text-black transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
