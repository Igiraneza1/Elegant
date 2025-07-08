// components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import bheadset from "../../../../public/image/headset/bgheadset.png";
import woman3 from "../../../../public/image/headset/woman3.png";

export default function Footer() {
  return (
    <footer className="text-white">
      {/* Newsletter Section */}
      <div className="flex flex-col lg:flex-row items-center bg-gray-200">
        {/* Left Image */}
        <div className="w-full lg:w-auto flex justify-center p-4">
          <Image
            src={bheadset}
            alt="footer headset"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Newsletter Form */}
        <div className="w-full py-10 px-6 border-y border-gray-300 text-center">
          <h2 className="text-2xl font-semibold mb-3 text-black">
            Join Our Newsletter
          </h2>
          <p className="text-gray-700 mb-6 text-sm">
            Sign up for deals, new products, and promotions
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="flex-grow px-4 py-3 text-sm text-gray-900 font-semibold border border-gray-300 rounded focus:outline-none focus:border-black"
            />
            <button className="bg-black text-white px-6 py-3 text-sm font-medium rounded hover:bg-gray-800 transition">
              Signup
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-auto flex justify-center p-4">
          <Image
            src={woman3}
            alt="footer woman"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>

      {/* Main Footer */}
     <div className="w-full py-10 px-6 bg-black">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Brand & Nav */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="text-center md:text-left">
              <p className="text-xl font-bold text-white">
                Elegant.
                <span className="text-gray-400 text-sm font-light">
                  {" "} | Headphone Store
                </span>
              </p>
            </div>

            <nav>
              <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium text-gray-400">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/shop">Shop</Link></li>
                <li><Link href="/product">Product</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </nav>
          </div>

          <div className="border-t border-gray-700"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
              <p>&copy; 2023 Elegant. All rights reserved.</p>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
            </div>

            <ul className="flex gap-4">
              <li>
                <Link href="https://www.facebook.com/" target="_blank" className="hover:text-blue-400">Facebook</Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/" target="_blank" className="hover:text-pink-400">Instagram</Link>
              </li>
              <li>
                <Link href="https://www.twitter.com/" target="_blank" className="hover:text-blue-300">Twitter</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
