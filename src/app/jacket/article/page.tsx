"use client";
import React from "react";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "2023 Holiday Gift Guide",
    image: "/image/jacket/jacket18.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "2023 Holiday Gift Guide",
    image: "/image/jacket/jacket19.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "2023 Holiday Gift Guide",
    image: "/image/jacket/jacket20.jpg",
    link: "#",
  },
];

export default function LatestArticles() {
  return (
    <div className=" p-10 md:p-20 lg:p-30 w-full px-4 py-10 max-w-7xl mx-auto">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
        <a href="#" className="text-sm font-medium text-gray-900 hover:underline flex items-center gap-1">
          View More <span>→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white">
            <div className="w-full h-56 relative">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-2 text-gray-900">{article.title}</h3>
              <a
                href={article.link}
                className="text-sm text-gray-600 hover:text-black flex items-center gap-1"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
