'use client';

import Image from 'next/image';

interface Category {
  id: number;
  name: string;
  image: string;
}

export default function Category() {
  const categories: Category[] = [
    { id: 1, name: 'Golf Clubs', image: '/image/sport/golf-clubs.jpg' },
    { id: 2, name: 'Golf Balls', image: '/image/sport/golf-balls1.jpg' },
    { id: 3, name: 'Golf Bags', image: '/image/sport/golf-bag.jpg' },
    { id: 4, name: 'Clothing & Rainwear', image: '/image/sport/t-shirt.jpg' },
    { id: 5, name: 'Footwear', image: '/image/sport/shoe1.png' },
    { id: 6, name: 'Accessories', image: '/image/sport/glove.png' },
  ];

  return (
    <main className="bg-white text-black">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-8">Shop by Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-48">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
