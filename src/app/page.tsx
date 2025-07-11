"use client";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();
  const categories = ["furniture", "headset", "sport", "jacket"];

  return (
    <main className="relative flex items-center justify-center min-h-screen overflow-hidden text-white">
     
      <div className="absolute inset-0 z-0">
        <div className="bg-carousel bg-image-1"></div>
        <div className="bg-carousel bg-image-2"></div>
        <div className="bg-carousel bg-image-3"></div>
        <div className="bg-carousel bg-image-4"></div>
      </div>

      
      <div className="relative z-20 p-10 text-center bg-white/50 backdrop-blur-sm rounded-xl shadow-lg">
        <h1 className="text-5xl font-bold mb-8 text-gray-900">Welcome to Elegant</h1>
        <p className="mb-10 text-lg text-gray-900 font-bold">
          Choose a category to continue shopping with Elegant.
        </p>

        
        <div className="flex flex-wrap gap-6 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => router.push(`/${category}`)}
              className="px-6 py-3 rounded-lg bg-white text-black hover:bg-opacity-40 transition duration-300 ease-in-out font-semibold text-lg capitalize shadow-md transform hover:scale-105 hover:shadow-xl"
            >
              {category}
            </button>
          ))}
        </div>

        
        <div className="flex justify-center gap-6">
          <button
            onClick={() => router.push("/sign-up")}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold"
          >
            Sign Up
          </button>
          <button
            onClick={() => router.push("/signin")}
            className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition font-semibold"
          >
            Sign In
          </button>
        </div>
      </div>
    </main>
  );
}
