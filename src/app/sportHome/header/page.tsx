"use client";
import React from "react";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-gray-50">
      {/* Promo bar */}
      <div className="bg-green-400 text-gray-700 text-center py-2 text-sm">
        <span>30% off storewide - Limited time</span>
        <Link href="/shop" className="underline ml-2">Shop Now →</Link>
      </div>

      <header className="flex justify-between items-center px-6 py-3 bg-white shadow">
      
        <div className="text-xl font-bold text-black">3legant.</div>

        
        <nav className="space-x-6">
          <Link href="/" className="text-gray-600 hover:text-black">Home</Link>
          <Link href="/shop" className="text-gray-600 hover:text-black">Shop</Link>
          <Link href="/product" className="text-gray-600 hover:text-black">Product</Link>
          <Link href="/contact" className="text-gray-600 hover:text-black">Contact Us</Link>
        </nav>

        
        <div className="flex space-x-4 text-gray-600">
          <FaSearch className="w-5 h-5 cursor-pointer hover:text-black" />
          <FaUser className="w-5 h-5 cursor-pointer hover:text-black" />
          <div className="relative">
            <FaShoppingBag className="w-5 h-5 cursor-pointer hover:text-black" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">2</span>
          </div>
        </div>
      </header>
    </div>
  );
}
