'use client';

import React, { useState } from 'react';
import { FaTrash, FaTag } from 'react-icons/fa';

interface CartItem {
  id: number;
  name: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Main() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Tray Table',
      color: 'Black',
      price: 19.0,
      quantity: 2,
      image: '/image/furniture/table4.jpg',
    },
    {
      id: 2,
      name: 'Tray Table',
      color: 'Red',
      price: 19.0,
      quantity: 2,
      image: '/image/furniture/table6.jpg',
    },
    {
      id: 3,
      name: 'Table Lamp',
      color: 'Gold',
      price: 39.0,
      quantity: 1,
      image: '/image/furniture/Table lamp.png',
    },
  ]);

  const [shippingCost, setShippingCost] = useState(0);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + shippingCost;

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white mt-4">
      <main className="max-w-7xl mx-auto px-6 py-8 text-black">
        <h1 className="text-center text-2xl font-bold mb-6 text-black">Cart</h1>

        {/* Steps */}
        <div className="flex justify-center mb-10">
          <div className="flex space-x-6 items-center">
            <div className="flex items-center">
              <span className="w-8 h-8 bg-black text-white rounded-full flex justify-center items-center">
                1
              </span>
              <span className="ml-2 font-bold text-sm">Shopping cart</span>
              <div className="border-b-2 border-black w-33 mt-3"></div>

            </div>
            
            <div className="flex items-center">
              <span className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex justify-center items-center">
                2
              </span>
              <span className="ml-2 text-sm">Checkout details</span>
            </div>
            <div className="h-px w-10 bg-gray-300" />
            <div className="flex items-center">
              <span className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex justify-center items-center">
                3
              </span>
              <span className="ml-2 text-sm text-black">Order complete</span>
            </div>
          </div>
        </div>

        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b font-semibold">
                  <th className="text-left p-2">Product</th>
                  <th className="text-left p-2">Quantity</th>
                  <th className="text-left p-2">Price</th>
                  <th className="text-left p-2">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-2 flex items-center">
                      <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
                      <div>
                        <p>{item.name}</p>
                        <p className="text-gray-500 text-sm">Color: {item.color}</p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex text-gray-500 text-xs items-center mt-1 hover:underline"
                        >
                          <FaTrash className="mr-1" size={12} /> Remove
                        </button>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="flex items-center border rounded w-fit">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 text-lg"
                        >
                          -
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 text-lg"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-2">${item.price.toFixed(2)}</td>
                    <td className="p-2">${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border rounded p-4 space-y-4">
            <h2 className="text-lg font-bold">Cart summary</h2>
            <div className="space-y-2 text-sm">
              <label className="flex justify-between items-center border border-black p-2">
                <div>
                  <input
                    type="radio"
                    name="shipping"
                    defaultChecked
                    onChange={() => setShippingCost(0)}
                    className="mr-2 "
                  />
                  Free shipping
                </div>
                <span>$0.00</span>
              </label>

              <label className="flex justify-between items-center border border-black p-2">
                <div>
                  <input
                    type="radio"
                    name="shipping"
                    onChange={() => setShippingCost(15)}
                    className="mr-2"
                  />
                  Express shipping
                </div>
                <span>+$15.00</span>
              </label>

              <label className="flex justify-between items-center border border-black p-2">
                <div>
                  <input
                    type="radio"
                    name="shipping"
                    onChange={() => setShippingCost(21)}
                    className="mr-2"
                  />
                  Pick Up
                </div>
                <span>$21.00</span>
              </label>
            </div>

            <div className="border-t pt-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-base mt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-black text-white py-2 rounded mt-2">
              Checkout
            </button>
          </div>
        </div>

        {/* Coupon */}
        <div className="mt-10 border rounded p-4 flex items-start space-x-4">
          <FaTag className="text-gray-600 mt-1" />
          <div className="flex-1">
            <p className="mb-1 font-medium">Have a coupon?</p>
            <p className="text-sm text-gray-500">Add your code for an instant cart discount</p>
            <div className="flex mt-2">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border rounded-l px-4 py-2 w-3/4"
              />
              <button className="bg-gray-200 px-4 py-2 rounded-r text-sm">Apply</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
