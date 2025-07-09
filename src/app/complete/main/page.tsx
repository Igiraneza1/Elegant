import React from "react";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

export default function Main() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="p-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl text-black font-bold">Complete!</h1>
        </div>
      </header>

      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-center items-start space-x-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <span className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full">
                <FaCheck />
              </span>
              <span className="ml-2 text-green-500">Shopping cart</span>
            </div>
            <div className="w-full h-0.5 bg-green-500 mt-2"></div>
          </div>

    
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <span className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full">
                <FaCheck />
              </span>
              <span className="ml-2 text-green-500">Checkout details</span>
            </div>
            <div className="w-full h-0.5 bg-green-500 mt-2"></div>
          </div>

          
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <span className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">
                3
              </span>
              <span className="ml-2 text-black">Order complete</span>
            </div>
            
            <div className="w-full h-0.5 bg-black mt-2"></div>
          </div>
        </div>
      </div>
      <main className="max-w-md mx-auto p-2 ">
        <div className="bg-white p-6 rounded-lg text-center bg-white shadow-lg ">
          <div className="mb-6">
            <h2 className="text-2xl  text-gray-400 font-bold mb-2">Thank you! </h2>
            <p className="text-3xl">
              Your order has been
              <br />
              received
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">
                <Image
                  src="/image/furniture/table4.jpg"
                  alt="Tray Table Black"
                  width={64}
                  height={64}
                />
                <div className="w-full h-full bg-gray-300"></div>
              </div>
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </div>

            <div className="relative">
              <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">
                <Image
                  src="/image/furniture/table6.jpg"
                  alt="Tray Table Red"
                  width={64}
                  height={64}
                />
                <div className="w-full h-full bg-gray-400"></div>
              </div>
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </div>

            <div className="relative">
              <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">
                <Image
                  src="/image/furniture/Table lamp.png"
                  alt="Table Lamp"
                  width={64}
                  height={64}
                />
                <div className="w-full h-full bg-gray-500"></div>
              </div>
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </div>
          </div>

          <div className="space-y-3 text-center">
            <p>
              Order code: <strong>#0123_45678</strong>
            </p>
            <p>
              Date: <strong>October 19, 2023</strong>
            </p>
            <p>
              Total: <strong>$1,345.00</strong>
            </p>
            <p>
              Payment method: <strong>Credit Card</strong>
            </p>
          </div>

        
          <button className="mt-8 bg-black text-white py-2 px-4 rounded w-full hover:bg-gray-800 transition">
            Purchase history
          </button>
        </div>
      </main>
    </div>
  );
}
