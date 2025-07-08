import React from "react";
import { FaCheck, FaGift } from "react-icons/fa";
import Image from "next/image";

export default function Main() {
  return (
    <div className="min-h-screen bg-white">
      
      <header className="p-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl text-black font-bold">Complete!</h1>
        </div>
      </header>

      
      <div className="max-w-8xl mx-auto px-20">
          <div className="flex items-center justify-center space-x-4">
  {/* Step 1 */}
  <div className="flex items-center">
    <span className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full">
      <FaCheck />
    </span>
    <span className="ml-2 text-green-500">Shopping cart</span>
  </div>

  {/* Line */}
  <div className="h-1 w-10 bg-green-500" />

  {/* Step 2 */}
  <div className="flex items-center">
    <span className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full">
      <FaCheck />
    </span>
    <span className="ml-2 text-green-500">Checkout details</span>
  </div>

  {/* Line */}
  <div className="h-1 w-10 bg-green-500" />

  {/* Step 3 */}
  <div className="flex items-center">
    <span className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">
      3
    </span>
    <span className="ml-2 text-black">Order complete</span>
  </div>
</div>

      </div>


      <main className="max-w-7xl mx-auto p-4 flex items-center justify-center">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center w-full max-w-md">
          <div className="flex justify-center mb-4">
            <FaGift className="text-4xl text-yellow-500" />
          </div>
          <h2 className="text-2xl font-bold">Thank you!</h2>
          <p className="text-xl text-black leading-relaxed">
            Your order has been <br /> received
          </p>

    
          <div className="mt-6 flex justify-center space-x-2">
            <div className="mt-6 flex justify-center space-x-2">
  <div className="relative">
    <Image src="/image/furniture/table4.jpg" alt="Tray Table Black" width={64} height={64} />
    <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">2</span>
  </div>

  <div className="relative">
    <Image src="/image/furniture/table6.jpg" alt="Tray Table Red" width={64} height={64} />
    <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">2</span>
  </div>

  <div className="relative">
    <Image src="/image/furniture/Table lamp.png" alt="Table Lamp" width={64} height={64} />
    <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">2</span>
  </div>
</div>


          
          <div className="mt-6 space-y-2 text-gray-600 text-sm">
            <p>Order code: <strong className="text-black">#0123.45678</strong></p>
            <p>Date: <strong className="text-black">October 19, 2023</strong></p>
            <p className="left-4">Total: <strong className="text-black">$1,345.00</strong></p>
            <p>Payment method: <strong className="text-black">Credit Card</strong></p>
          </div>

    
          <button className="mt-6 bg-black text-white p-2 rounded w-full hover:bg-gray-800 transition">
            Purchase history
          </button>
        </div>
      </main>
    </div>
  );
}
