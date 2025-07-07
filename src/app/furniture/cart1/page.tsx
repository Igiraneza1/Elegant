import React from 'react';

interface CartItem {
  id: number;
  name: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Cart() {
  const cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Tray Table',
      color: 'Black',
      price: 19.00,
      quantity: 2,
      image: '/',
    },
    {
      id: 2,
      name: 'Tray Table',
      color: 'Red',
      price: 19.00,
      quantity: 2,
      image: '/tray-table-red.jpg',
    },
    {
      id: 3,
      name: 'Table Lamp',
      color: 'Gold',
      price: 39.00,
      quantity: 1,
      image: '/table-lamp-gold.jpg',
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping selected
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-black">3legant.</span>
          <nav className="ml-6 space-x-4">
            <a href="/" className="text-gray-600 hover:text-black">Home</a>
            <a href="#" className="text-gray-600 hover:text-black">Shop</a>
            <a href="#" className="text-gray-600 hover:text-black">Product</a>
            <a href="#" className="text-gray-600 hover:text-black">Contact Us</a>
          </nav>
        </div>
        <div className="flex space-x-4">
          <input type="text" placeholder="Search" className="p-2 border rounded" />
          <div className="flex space-x-2">
            <span className="text-gray-600">👤</span>
            <span className="text-gray-600">🛒</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Cart</h1>
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 items-center">
            <div className="flex items-center">
              <span className="w-8 h-8 bg-black rounded-full text-white flex items-center justify-center">1</span>
              <span className="ml-2 text-gray-600">Shopping cart</span>
            </div>
            <div className="w-12 border-t border-gray-300"></div>
            <div className="flex items-center">
              <span className="w-8 h-8 bg-gray-300 rounded-full text-white flex items-center justify-center">2</span>
              <span className="ml-2 text-gray-600">Checkout details</span>
            </div>
            <div className="w-12 border-t border-gray-300"></div>
            <div className="flex items-center">
              <span className="w-8 h-8 bg-gray-300 rounded-full text-white flex items-center justify-center">3</span>
              <span className="ml-2 text-gray-600">Order complete</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Table */}
          <div className="w-full md:w-2/3 bg-white p-4 rounded shadow">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 text-gray-600">Product</th>
                  <th className="text-left p-2 text-gray-600">Quantity</th>
                  <th className="text-left p-2 text-gray-600">Price</th>
                  <th className="text-left p-2 text-gray-600">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-2 flex items-center">
                      <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-gray-500">Color: {item.color}</p>
                        <button className="text-red-500 hover:underline">Remove</button>
                      </div>
                    </td>
                    <td className="p-2">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        className="w-16 p-1 border rounded"
                      />
                    </td>
                    <td className="p-2 text-gray-800">${item.price.toFixed(2)}</td>
                    <td className="p-2 text-gray-800">${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Summary */}
          <div className="w-full md:w-1/3 bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Cart summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="flex items-center">
                  <input type="radio" name="shipping" defaultChecked className="mr-2" /> Free shipping
                </label>
                <span className="text-gray-600">$0.00</span>
              </div>
              <div className="flex justify-between">
                <label className="flex items-center">
                  <input type="radio" name="shipping" className="mr-2" /> Express shipping
                </label>
                <span className="text-gray-600">+$15.00</span>
              </div>
              <div className="flex justify-between">
                <label className="flex items-center">
                  <input type="radio" name="shipping" className="mr-2" /> Pick Up
                </label>
                <span className="text-gray-600">+$21.00</span>
              </div>
            </div>
            <div className="border-t mt-4 pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-black text-white p-2 rounded mt-4 hover:bg-gray-800">
                Checkout
              </button>
            </div>
          </div>
        </div>

        {/* Coupon Section */}
        <div className="mt-6 bg-white p-4 rounded shadow">
          <p>Have a coupon?</p>
          <p className="text-gray-500 mt-1">Add your code for an instant cart discount</p>
          <div className="flex mt-2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="p-2 border rounded-l w-full"
            />
            <button className="bg-gray-200 p-2 rounded-r hover:bg-gray-300">Apply</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white p-4 mt-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold">3legant.</span>
            <span className="ml-2 text-gray-400">Gift & Decoration Store</span>
          </div>
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white">Home</a>
            <a href="#" className="text-gray-400 hover:text-white">Shop</a>
            <a href="#" className="text-gray-400 hover:text-white">Product</a>
            <a href="#" className="text-gray-400 hover:text-white">Blog</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
          </nav>
          <div className="flex space-x-4">
            <span className="text-gray-400">© 2023 3legant. All rights reserved</span>
            <span className="text-gray-400">Privacy Policy</span>
            <span className="text-gray-400">Terms of Use</span>
          </div>
          <div className="flex space-x-2">
            <span className="text-gray-400">📸</span>
            <span className="text-gray-400">🐦</span>
            <span className="text-gray-400">🎥</span>
          </div>
        </div>
      </footer>
    </div>
  );
}