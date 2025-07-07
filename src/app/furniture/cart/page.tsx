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
    <div className="flex h-screen">
    
      <div className="w-3/4">
        <div className="bg-gray-200 text-gray-600 text-center py-2">
          <span>30% off storewide - Limited time!</span>
          <a href="#" className="ml-2 underline">Shop Now →</a>
        </div>

    
        <header className="flex justify-between items-center p-4 bg-white shadow">
          <div className="text-xl font-bold text-gray-900">HOMEDECOR</div>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Shop</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Product</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
          </nav>
        </header>

        
        <div className="relative w-full h-64 ">
          <img
            src="/image/furniture/sofa1.jpg"
            alt="Living Room"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Tagline */}
        <div className="p-6 bg-gray-50">
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col">
              <h1 className="text-6xl font-bold text-gray-900 mb-4">Simply Unique /</h1>
              <h2 className="text-6xl font-bold text-gray-900 mb-4">Simply Better</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-gray-600 text-sm mb-1">Homedecor is a gift & dec</p>
              <p className="text-gray-600 text-sm">HCMC Rwanda. Est since 2019</p>
            </div>
          </div>
        </div>

    
        <div className="h-full flex flex-row gap-6 overflow-hidden">
  {/* Living Room block */}
  <div className="w-full ">
    <span className="p-4 bg-gray-100 rounded-l-lg flex flex-col justify-center w-3/4 p-8">
      <h3 className="text-md font-semibold text-gray-800">Living Room</h3>
      <a href="#" className="text-sm text-gray-600 hover:underline">Shop Now →</a>
    </span>
    <img
      src="/image/furniture/livingroom.png"
      alt="livingroom"
      className="h-18 w-24 object-cover rounded-r-lg"
    />
  </div>

  {/* Bedroom block */}
  <div className="w-full">
    <span className="p-4 bg-gray-100 rounded flex flex-col justify-center w-1/4 p-8">
      <h3 className="text-md font-semibold text-gray-800">Bedroom</h3>
      <a href="#" className="text-sm text-gray-600 hover:underline">Shop Now →</a>
    </span>
    <img
      src="/image/furniture/bedroom.png"
      alt="bedroom"
      className="h-24 w-12 object-cover rounded-r-lg"
    />
  </div>
</div>


      
      <aside className="w-1/4 bg-white shadow-lg p-4 fixed right-0 top-0 h-screen overflow-y-auto">
        <h2 className="text-xl font-bold text-black mb-4">Cart</h2>
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                <div>
                  <p className="text-sm font-semibold text-black">{item.name}</p>
                  <p className="text-xs text-black">Color: {item.color}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-black text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                <div className="flex items-center gap-1">
                  <button className="w-6 h-6 border text-black flex items-center justify-center">-</button>
                  <span className="text-black text-sm">{item.quantity}</span>
                  <button className="w-6 h-6 border text-black flex items-center justify-center">+</button>
                </div>
                <button className="text-red-500">×</button>
              </div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="mt-4 space-y-2 text-black p-4 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        
        <button className="w-full bg-black text-white py-2 mt-50">Checkout</button>
        <a className="w-full text-black py-2 flex justify-center items-center mt-2 underline">View Cart</a>
      </aside>
    </div>
    </div>
  );
}
