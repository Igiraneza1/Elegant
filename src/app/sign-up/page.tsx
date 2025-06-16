"use client";

import React from "react";
import Image from "next/image";
import chair from "../../image/chair1.jpg"; // Make sure chair1.jpg is inside `/image/` in your project root or `/public/image/` if you're using a static path
import Link from "next/link";

function SignUp() {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="bg-gray-400 flex items-center justify-center">
        <Image src={chair} alt="Chair" width={500} height={400} className="rounded" />
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
        <p>Already have an account? </p>
        <Link href="/signin" className="text-blue-500 hover:underline">
          Sign in
        </Link>
        <form className="mt-4">


          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            </input>
          </div>

           <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Email address
            </label>
            <input
              type="password"
              id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            </input>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            </input>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-gray-900 text-gray-200 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
