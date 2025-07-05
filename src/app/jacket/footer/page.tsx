"use client";
import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
// import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-10 md:px-20 lg:px-30 bg-gray-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-xl font-semibold mb-2">3legant.</h2>
          <p>43/111 Hai Trieu street,</p>
          <p>District 1, HCMC</p>
          <p>Vietnam</p>
          <p className="mt-2">84-756-3237</p>
          <div className="flex items-center gap-4 mt-4 text-xl">
            <FaInstagram />
            <FaFacebookF />
            <FaYoutube />
          </div>
        </div>

        
        <div>
          <h3 className="text-sm font-semibold mb-3">Page</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="/article">Articles</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-sm font-semibold mb-3">Info</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Return & Refund</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-sm font-semibold mb-3">Join Newsletter</h3>
          <p className="text-sm mb-3">
            Subscribe our newsletter to get more deals, new products and promotions
          </p>
          <form className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-2 px-4 pr-10 text-sm border rounded-full focus:outline-none"
            />
            <button
              type="submit"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full"
            >
              →
            </button>
          </form>
        </div>
      </div>

      
      <div className="border-t border-gray-300 py-4 px-4 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto text-sm">
        <div className="text-center md:text-left mb-2 md:mb-0">
          Copyright © 2023 3legant. All rights reserved |
          <a href="#" className="ml-2 hover:underline">Privacy Policy</a> |
          <a href="#" className="ml-2 hover:underline">Terms & Conditions</a>
        </div>

        {/* Payment Icons */}
        {/* <div className="flex items-center gap-2">
          <Image src="/image/payment/visa.png" alt="Visa" width={40} height={24} />
          <Image src="/image/payment/amex.png" alt="Amex" width={40} height={24} />
          <Image src="/image/payment/stripe.png" alt="Stripe" width={40} height={24} />
          <Image src="/image/payment/paypal.png" alt="PayPal" width={40} height={24} />
          <Image src="/image/payment/applepay.png" alt="Apple Pay" width={40} height={24} />
        </div> */}
      </div>
    </footer>
  );
}
