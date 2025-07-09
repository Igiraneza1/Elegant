"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CollectionItem {
  id: number;
  name: string;
  image: string;
}

export default function Collection() {
  const [collections, setCollections] = useState<CollectionItem[]>([]);

  useEffect(() => {
    fetch("/datajacket/collection.json")
      .then((res) => res.json())
      .then(setCollections)
      .catch((err) => console.error("Failed to load collection data:", err));
  }, []);

  if (collections.length === 0) return <p className="text-center p-10">Loading collections...</p>;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="p-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:px-8 md:px-15 lg:px-30">
        {collections.map((item) => (
          <div key={item.id} className="relative group w-full h-[600px]">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover p-5"
            />
            <div className="absolute inset-0"></div>

            <div className="absolute bottom-4 left-4 p-10 text-white">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <Link href="#" className="text-sm underline underline-offset-2">
                Collections →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
