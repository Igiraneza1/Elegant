"use client";

import React from "react";
import Image from "next/image";
import chair from "../../image/chair1.jpg";
import Link from "next/link";

export default function SignIn() {
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
          <h1 className="text-3xl font-bold mb-4">Sign In</h1>
          <p className="text-gray-500 mb-6">
            Do not have an account yet?{" "}
            <Link href="/sign-up" className="text-green-500 hover:underline">
              Sign Up
            </Link>
          </p>

          <form className="mt-4">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Username or Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Your username or email address"
                className="w-full px-3 py-2 p-2 rounded outline-none focus:outline-none border border-gray-300"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Your password"
                className="w-full px-3 py-2 p-2 rounded outline-none focus:outline-none border border-gray-300"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-black w-4 h-4" />
                <span className="text-gray-700">Remember me</span>
              </label>
              <Link href="#" className="text-gray-700 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md focus:outline-none hover:bg-gray-800 transition"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
