import React from "react";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import { FaList, FaTh, FaThLarge } from "react-icons/fa";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
}

export default function Main() {
  const blogPosts: BlogPost[] = [
    { id: 1, title: "7 ways to decor your home like a professional", date: "October 9, 2023", image: "/blog-post-1.jpg" },
    { id: 2, title: "Inside a beautiful kitchen organization", date: "October 9, 2023", image: "/blog-post-2.jpg" },
    { id: 3, title: "Decor your bedroom for your children", date: "October 16, 2023", image: "/blog-post-3.jpg" },
    { id: 4, title: "Modern texas home is beautiful and completely kid-friendly", date: "October 16, 2023", image: "/blog-post-4.jpg" },
    { id: 5, title: "Modern texas home is beautiful and completely kid-friendly", date: "October 16, 2023", image: "/blog-post-5.jpg" },
    { id: 6, title: "Modern texas home is beautiful and completely kid-friendly", date: "October 16, 2023", image: "/blog-post-6.jpg" },
    { id: 7, title: "Modern texas home is beautiful and completely kid-friendly", date: "October 16, 2023", image: "/blog-post-7.jpg" },
    { id: 8, title: "Modern texas home is beautiful and completely kid-friendly", date: "October 16, 2023", image: "/blog-post-8.jpg" },
    { id: 9, title: "Modern texas home is beautiful and completely kid-friendly", date: "October 16, 2023", image: "/blog-post-9.jpg" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">3legant.</div>
        <nav className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Shop</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Product</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
        </nav>
        <div className="space-x-4">
          <FaSearch className="text-gray-600 hover:text-gray-900 cursor-pointer" />
          <FaBell className="text-gray-600 hover:text-gray-900 cursor-pointer" />
          <FaUser className="text-gray-600 hover:text-gray-900 cursor-pointer" />
        </div>
      </header>

      <div className="relative w-full h-96">
        <Image
          src="/blog-hero.jpg"
          alt="Blog Hero"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <div className="text-sm text-gray-400">Home <span className="mx-2">></span> Blog</div>
          <h1 className="text-4xl font-bold text-black">Our Blog</h1>
          <p className="text-lg text-black">Home ideas and design inspiration</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <div className="space-x-4">
          <button className="text-gray-600 hover:text-black">All Blog</button>
          <button className="text-gray-600 hover:text-black">Featured</button>
        </div>
        <div className="space-x-2">
          <select className="p-2 border rounded">
            <option>Sort by</option>
            <option>Date</option>
            <option>Popularity</option>
          </select>
          <button className="p-2 border rounded"><FaList /></button>
          <button className="p-2 border rounded"><FaTh /></button>
          <button className="p-2 border rounded"><FaThLarge /></button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="border rounded overflow-hidden shadow">
            <div className="relative w-full h-64">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto p-4 text-center">
        <button className="bg-black text-white p-2 rounded">Show more</button>
      </div>
    </div>
  );
};
