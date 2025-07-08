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
      <main className="max-w-7xl mx-auto px-6 py-4 text-black text-sm">
        <h1 className="text-center text-2xl font-bold mb-4">Cart</h1>

        {/* Steps */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-4 items-center">
            <div className="flex items-center">
              <span className="w-7 h-7 bg-black text-white rounded-full flex justify-center items-center text-xs">1</span>
              <span className="ml-2 font-semibold">Shopping cart</span>
            </div>
            <div className="h-px w-6 bg-gray-300" />
            <div className="flex items-center">
              <span className="w-7 h-7 bg-gray-200 text-gray-600 rounded-full flex justify-center items-center text-xs">2</span>
              <span className="ml-2">Checkout details</span>
            </div>
            <div className="h-px w-6 bg-gray-300" />
            <div className="flex items-center">
              <span className="w-7 h-7 bg-gray-200 text-gray-600 rounded-full flex justify-center items-center text-xs">3</span>
              <span className="ml-2">Order complete</span>
            </div>
          </div>
        </div>

        {/* Cart Content */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Product Table */}
          <div className="md:col-span-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b font-semibold">
                  <th className="text-left p-1">Product</th>
                  <th className="text-left p-1">Quantity</th>
                  <th className="text-left p-1">Price</th>
                  <th className="text-left p-1">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-1 flex items-center">
                      <img src={item.image} alt={item.name} className="w-12 h-12 mr-3" />
                      <div>
                        <p>{item.name}</p>
                        <p className="text-gray-500 text-xs">Color: {item.color}</p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex text-gray-500 text-xs items-center mt-1 hover:underline"
                        >
                          <FaTrash className="mr-1" size={11} /> Remove
                        </button>
                      </div>
                    </td>
                    <td className="p-1">
                      <div className="flex items-center border rounded w-fit text-sm">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 text-base"
                        >
                          -
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 text-base"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-1">${item.price.toFixed(2)}</td>
                    <td className="p-1">${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="border rounded p-3 space-y-3">
            <h2 className="text-base font-semibold">Cart summary</h2>

            {/* Shipping */}
            <div className="space-y-2">
              <label className="flex justify-between items-center border border-black p-2">
                <div>
                  <input
                    type="radio"
                    name="shipping"
                    defaultChecked
                    onChange={() => setShippingCost(0)}
                    className="mr-2"
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

            <div className="border-t pt-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-base mt-1">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-black text-white py-1.5 rounded">Checkout</button>
          </div>
        </div>

        {/* Coupon */}
        <div className="mt-6 border rounded p-3 flex items-start space-x-3">
          <FaTag className="text-gray-600 mt-1" />
          <div className="flex-1">
            <p className="mb-1 font-medium">Have a coupon?</p>
            <p className="text-xs text-gray-500">Add your code for an instant cart discount</p>
            <div className="flex mt-2">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border rounded-l px-3 py-1.5 w-3/4"
              />
              <button className="bg-gray-200 px-3 py-1.5 rounded-r text-sm">Apply</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
