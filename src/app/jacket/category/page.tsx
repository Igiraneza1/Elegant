import React from "react";
import Image from "next/image";

// ✅ Import images statically
import jacket1 from "../../../../public/image/jacket/jacket6.jpg";
import jacket2 from "../../../../public/image/jacket/jacket2.jpg";
import jacket3 from "../../../../public/image/jacket/jacket1.jpg";
import jacket4 from "../../../../public/image/jacket/jacket7.jpg";
import jacket5 from "../../../../public/image/jacket/jacket8.jpg";
import jacket6 from "../../../../public/image/jacket/jacket9.jpg";

interface Category {
  id: number;
  image: any;
  title: string;
}

const categories: Category[] = [
  { id: 1, title: "Puffers", image: jacket1 },
  { id: 2, title: "Bombers", image: jacket2 },
  { id: 3, title: "Lightweight Jackets", image: jacket3 },
  { id: 4, title: "Gilets", image: jacket4 },
  { id: 5, title: "Coats", image: jacket5 },
  { id: 6, title: "Rainwear", image: jacket6},
];

export default function Category() {
  return (
    <div className="py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 sm:px-8 md:px-15 lg:px-30">
        {categories.map((item) => (
          <div key={item.id} className="text-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto overflow-hidden rounded-full shadow-md">
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
