"use client";

import { useState } from "react";
import { FaSearch, FaUser, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50">
      <div className="bg-purple-100 text-purple-700 text-center py-2 text-sm">
        <span>30% off storewide - Limited time</span>
        <Link href="/shop" className="underline ml-2">Shop Now →</Link>
      </div>

      
      <header className="flex justify-between items-center px-4 py-3 bg-white shadow md:px-6 relative">
        <div className="text-xl font-bold text-black">3legant.</div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="w-6 h-6 text-gray-600" />
            ) : (
              <FaBars className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        
        <nav
          className={`
            absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 py-4 shadow-md transition-all duration-300 z-20
            ${menuOpen ? "block" : "hidden"} 
            md:static md:flex md:flex-row md:items-center md:space-x-6 md:gap-0 md:py-0 md:shadow-none md:w-auto
          `}
        >
          <Link href="/" className="text-gray-600 hover:text-black">Home</Link>
          <Link href="/shop" className="text-gray-600 hover:text-black">Shop</Link>
          <Link href="/product" className="text-gray-600 hover:text-black">Product</Link>
          <Link href="/contact" className="text-gray-600 hover:text-black">Contact Us</Link>
        </nav>

        
        <div className="hidden md:flex space-x-4 text-gray-600">
          <FaSearch className="w-5 h-5 cursor-pointer hover:text-black" />
          <FaUser className="w-5 h-5 cursor-pointer hover:text-black" />
          <div className="relative">
            <FaShoppingBag className="w-5 h-5 cursor-pointer hover:text-black" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">2</span>
          </div>
        </div>
      </header>

      
      {menuOpen && (
        <div className="flex md:hidden justify-center gap-6 py-4 text-gray-600 border-t">
          <FaSearch className="w-5 h-5 cursor-pointer hover:text-black" />
          <FaUser className="w-5 h-5 cursor-pointer hover:text-black" />
          <div className="relative">
            <FaShoppingBag className="w-5 h-5 cursor-pointer hover:text-black" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">2</span>
          </div>
        </div>
      )}
    </div>
  );
}
