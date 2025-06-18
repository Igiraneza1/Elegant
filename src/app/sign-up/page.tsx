"use client";

import React, { useState } from "react";
import Image from "next/image";
import chair from "../../image/chair1.jpg";
import Link from "next/link";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid items-center justify-center bg-gray-200 h-screen">
      <div className="bg-white p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6">
        <div className="flex items-center justify-center">
          <Image
            src={chair}
            alt="Chair"
            width={500}
            height={400}
            className="rounded"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
          <p className="text-gray-500 mb-6">
            Already have an account?{" "}
            <Link href="/signin" className="text-green-500 hover:underline">
              Sign in
            </Link>
          </p>

          <form className="mt-4">
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Your username"
                className="w-full px-3 py-2 p-2 rounded outline-none focus:outline-none border border-gray-300"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 p-2 rounded outline-none focus:outline-none border border-gray-300"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Your password"
                  className="w-full px-3 py-2 p-2 rounded outline-none focus:outline-none border border-gray-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? "👁️" : "👁️"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md focus:outline-none hover:bg-gray-800 transition"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
