import React from "react";
import { FaCheck } from "react-icons/fa";

export default function Intro(){
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Check Out</h1>
        </div>
      </header>

      {/* Progress Indicator */}
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-center items-center space-x-4">
          <div className="flex items-center">
            <span className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full">
              <FaCheck />
            </span>
            <span className="ml-2 text-green-500">Shopping cart</span>
          </div>
          <div className="border-b-2 border-green-500 w-24"></div>
          <div className="flex items-center">
            <span className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">2</span>
            <span className="ml-2 text-black font-bold">Checkout details</span>
          </div>
          <div className="border-b-2 border-gray-300 w-24"></div>
          <div className="flex items-center">
            <span className="w-8 h-8 bg-gray-200 text-gray-600 flex items-center justify-center rounded-full">3</span>
            <span className="ml-2 text-gray-600">Order complete</span>
          </div>
        </div>
      </div>

      {/* Main Content (Placeholder) */}
      <main className="max-w-7xl mx-auto p-4">
        <p className="text-center text-gray-600">Checkout details content goes here.</p>
      </main>
    </div>
  );
};

