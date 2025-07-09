import React from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import Image from "next/image"

interface CartItem {
  id: number;
  name: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Main() {
  const cartItems: CartItem[] = [
    { id: 1, name: "Tray Table", color: "Black", price: 19.0, quantity: 2, image: "/image/furniture/table4.jpg" },
    { id: 2, name: "Tray Table", color: "Red", price: 19.0, quantity: 2, image: "/image/furniture/table6.jpg" },
    { id: 3, name: "Table Lamp", color: "Gold", price: 39.0, quantity: 1, image: "/image/furniture/Table lamp.png" },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0.0;
  const discount = 25.0;
  const total = subtotal + shipping - discount;

  return (
    <div className="min-h-screen bg-white text-black">
      
      <header className=" p-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Check Out</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-center items-center space-x-8 gap-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <span className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full">
                <FaCheck />
              </span>
              <span className="ml-2 text-green-500">Shopping cart</span>
            </div>
            <div className="border-b-4 border-green-500 w-33 mt-3"></div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <span className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">2</span>
              <span className="ml-2 text-black font-bold">Checkout details</span>
            </div>
            <div className="border-b-4 border-black w-42 mt-4"></div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <span className="w-8 h-8 bg-gray-500 text-white flex items-center justify-center rounded-full">3</span>
              <span className="ml-2 text-gray-500">Order complete</span>
            </div>
            <div className="border-b-4 border-transparent w-24 mt-1"></div>
          </div>
        </div>
      </div>

      
      <main className="max-w-7xl mx-auto p-4 grid grid-cols-3 gap-8">

        <div className="col-span-2 space-y-6">
          <div className="p-4 border rounded">
            <h2 className="text-lg font-bold mb-4">Contact Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="p-2 border rounded" />
              <input type="text" placeholder="Last name" className="p-2 border rounded" />
            </div>
            <input type="text" placeholder="Phone number" className="w-full p-2 border rounded mt-4" />
            <input type="email" placeholder="Your Email" className="w-full p-2 border rounded mt-4" />
          </div>

        
          <div className="p-4 border rounded">
            <h2 className="text-lg font-bold mb-4">Shipping Address</h2>
            <input type="text" placeholder="Street Address" className="w-full p-2 border rounded" />
            <select className="w-full p-2 border rounded mt-4">
              <option value="">Country</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
            </select>
            <input type="text" placeholder="Town / City" className="w-full p-2 border rounded mt-4" />
            <div className="grid grid-cols-2 gap-4 mt-4">
              <input type="text" placeholder="State" className="p-2 border rounded" />
              <input type="text" placeholder="Zip Code" className="p-2 border rounded" />
            </div>
            <div className="mt-4">
              <input type="checkbox" className="mr-2" />
              <span>Use a different billing address (optional)</span>
            </div>
          </div>

    
          <div className="p-4 border rounded">
            <h2 className="text-lg font-bold mb-4">Payment method</h2>
            <label className="flex items-center p-2 border rounded">
              <input type="radio" name="payment" defaultChecked className="mr-2" />
              Pay by Card Credit
            </label>
            <label className="flex items-center p-2 border rounded mt-2">
              <input type="radio" name="payment" className="mr-2" />
              PayPal
            </label>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <input type="text" placeholder="Card Number" className="p-2 border rounded" />
              <input type="text" placeholder="CVC" className="p-2 border rounded" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <input type="text" placeholder="MM/YY" className="p-2 border rounded" />
            </div>
          </div>

    
          <button className="w-full bg-black text-white p-4 rounded mt-4">Place Order</button>
        </div>

    
        <div className="col-span-1">
          <div className="p-4 border rounded">
            <h2 className="text-lg font-bold mb-4">Order summary</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Image src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
                  <div>
                    {item.name}
                    <br />
                    <span className="text-gray-600">Color: {item.color}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span>${item.price.toFixed(2)}</span>
                  <div className="flex items-center mt-1">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      className="w-16 p-1 border rounded"
                    />
                    <button className="text-red-500 ml-2">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t pt-2 mt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 text-green-600">
                <span>JenkatMW</span>
                <span>-${discount.toFixed(2)} [Remove]</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold mt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-black text-white p-2 rounded mt-4">Apply</button>
          </div>
        </div>
      </main>
    </div>
  );
}
