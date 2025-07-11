'use client';

import React from 'react';

export default function Cart() {
  const cartItems = [
    { id: 1, name: 'Tray Table', price: 119.19, color: 'Black', quantity: 2, image: '/image/furniture/table4.jpg' },
    { id: 2, name: 'Tray Table', price: 119.19, color: 'Red', quantity: 2, image: '/image/furniture/table6.jpg' },
    { id: 3, name: 'Table lamp', price: 39.0, color: 'gold', quantity: 2, image: '/image/furniture/Table lamp.png' },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal; 

  return (
    <div className="flex h-screen bg-white">
      {/* Main Content */}
      <div className="w-3/4 flex flex-col">
        {/* Top Banner */}
        <div className="bg-gray-200 text-gray-700 text-center py-2 text-sm">
          <span className="mr-2">🎁</span>
          <span>30% off storewide — Limited time!</span>
          <a href="#" className="ml-2 underline text-black">Shop Now →</a>
        </div>

        {/* Header */}
        <header className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-100">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-black mr-2"></div>
            <div className="text-xl font-bold text-black">HOMEDECOR</div>
          </div>
          <nav className="flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-black">Home</a>
            <a href="#" className="text-gray-600 hover:text-black flex items-center">
              Shop 
              <span className="ml-1 text-xs">▼</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-black flex items-center">
              Product 
              <span className="ml-1 text-xs">▼</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-black">Contact Us</a>
          </nav>
        </header>

        {/* Hero Image */}
        <div className="relative flex-1 max-h-96">
          <img
            src="/image/furniture/sofa1.jpg"
            alt="Living Room"
            className="w-full h-full object-cover"
          />
          {/* Left Arrow */}
          <button className="absolute left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-md hover:bg-opacity-100">
            <span className="text-gray-800 text-xl font-bold">‹</span>
          </button>
        </div>

        {/* Tagline Section */}
        <div className="px-6 py-8 bg-gray-100 flex-1">
          <div className="flex justify-between items-start mb-8">
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold text-black leading-tight">Simply Unique/</h1>
              <h2 className="text-5xl font-bold text-black leading-tight">Simply Better.</h2>
            </div>
            <div className="flex flex-col justify-center text-right max-w-xs text-sm text-gray-600">
              <p><strong>Homedecor</strong> is a gift & decorations</p>
              <p>HCMC, Vietnam. Est since 2019</p>
            </div>
          </div>

          {/* Category Sections */}
          <div className="flex gap-4 w-3/4">
            {/* Living Room */}
            <div className="flex bg-white rounded-lg overflow-hidden shadow-sm" style={{width: '300px', height: '120px'}}>
              <div className="flex-1 p-6 flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-black mb-2">Living Room</h3>
                <a href="#" className="text-sm text-gray-600 hover:underline">Shop Now →</a>
              </div>
              <div className="w-full">
                <img
                  src="/image/furniture/livingroom.png"
                  alt="livingroom"
                  className="h-70 w-30 object-cover"
                />
              </div>
            </div>

            {/* Bedroom */}
            <div className="flex bg-white rounded-lg overflow-hidden shadow-sm" style={{width: '300px', height: '120px'}}>
              <div className="flex-1 p-6 flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-black mb-2">Bedroom</h3>
                <a href="#" className="text-sm text-gray-600 hover:underline">Shop Now →</a>
              </div>
              <div className="w-24">
                <img
                  src="/image/furniture/bedroom.png"
                  alt="bedroom"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      <aside className="w-1/4 bg-white shadow-lg border-l border-gray-200 h-screen overflow-y-auto">
        <div className="p-6">
          <h2 className="text-xl font-bold text-black mb-6">Cart</h2>
          
          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-3 pb-4">
                <div className="w-16 h-16 bg-gray-50 rounded flex-shrink-0 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <p className="text-sm font-medium text-black">{item.name}</p>
                      <p className="text-xs text-gray-500">Color: {item.color}</p>
                    </div>
                    <button className="text-gray-400 hover:text-red-500 text-lg leading-none">×</button>
                  </div>
                  
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-1">
                      <button className="w-6 h-6 border border-gray-300 text-gray-500 flex items-center justify-center text-sm hover:bg-gray-50 leading-none">−</button>
                      <span className="text-black text-sm font-medium mx-2">{item.quantity}</span>
                      <button className="w-6 h-6 border border-gray-300 text-gray-500 flex items-center justify-center text-sm hover:bg-gray-50 leading-none">+</button>
                    </div>
                    <span className="text-black font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="mt-8 pt-4 border-t border-gray-200">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-black font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span className="text-black">Total</span>
              <span className="text-black">${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 space-y-3">
            <button className="w-full bg-black text-white py-3 rounded font-medium hover:bg-gray-800 transition-colors">
              Checkout
            </button>
            <div className="text-center">
              <a href="#" className="text-black underline hover:no-underline text-sm">
                View Cart
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

