

import Head from "next/head";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-gray-50">
      <div className="bg-purple-100 text-purple-700 text-center py-2 text-sm">
        <span>30% off storewide - Limited time</span>
        <Link href="/shop" className="underline ml-2">Shop Now →</Link>
      </div>
      <div className="top-0">
      <Head>
        <title>3legant</title>
        <meta name="description" content="Gift & Decorations Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center px-6 py-3 bg-white shadow">
        <div className="text-2xl font-bold">3legant.</div>

        <nav className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Shop</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Product</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
            <span className="sr-only">Search</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12z" />
            </svg>
          </button>
          <button className="hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
            <span className="sr-only">Profile</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 110-8 4 4 0 010 8zm0 6c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </button>
          <button className="hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center relative">
            <span className="sr-only">Cart</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a1 1 0 00.95.68h10.06a1 1 0 01.995 1.147l-1.5 6a1 1 0 01-.994.853H6.833a1 1 0 00-.98.804l-.627 2.509A1 1 0 006 15h10a1 1 0 100-2H6.439l.528-2.114a1 1 0 00.98-.804l1.5-6H16a1 1 0 100-2H4.22l-.305-1.222a1 1 0 00-.95-.68H3zm0 6a1 1 0 100 2 1 1 0 000-2zm8 4a1 1 0 100 2 1 1 0 000-2z" />
            </svg>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">2</span>
          </button>
        </div>
      </header>
    </div>
    </div>
  );
}
