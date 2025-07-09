"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ProductDetailPage() {
  const product = {
    title: "Tray Table",
    description: "Buy one or buy a few and make every space convenient...",
    price: 199,
    oldPrice: 400,
    images: ["/tray1.jpg", "/tray2.jpg", "/tray3.jpg"],
    measurements: "17 1/2×20 5/8 ''",
    colors: ["black", "white", "red"],
    rating: 4.5,
    reviews: 11,
    details: "You can use the removable tray for serving...",
    sku: "1117",
    category: "Living Room, Bedroom",
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6">
      {/* LEFT SIDE - Images */}
      <div>
        <Image src={selectedImage} alt={product.title} width={500} height={500} className="mb-4 rounded-xl" />
        <div className="grid grid-cols-3 gap-2">
          {product.images.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`Thumbnail ${idx}`}
              width={100}
              height={100}
              onClick={() => setSelectedImage(img)}
              className="cursor-pointer rounded-lg border"
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE - Info */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-sm text-gray-600 mb-2">⭐ {product.rating} ({product.reviews} Reviews)</p>
        <p className="text-xl font-semibold text-black mb-1">${product.price.toFixed(2)} <span className="line-through text-gray-400 text-base">${product.oldPrice}</span></p>
        <p className="text-gray-700 mb-4">{product.description}</p>

        <div className="mb-4">
          <p className="font-semibold">Measurements</p>
          <p>{product.measurements}</p>
        </div>

        <div className="mb-4">
          <p className="font-semibold">Choose Color:</p>
          <div className="flex space-x-3 mt-1">
            {product.colors.map((color, idx) => (
              <div key={idx} className={`w-6 h-6 rounded-full border-2 border-gray-300 cursor-pointer`} style={{ backgroundColor: color }}></div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1} className="px-3 py-1 bg-gray-200 rounded">-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 bg-gray-200 rounded">+</button>
        </div>

        <div className="flex space-x-4 mb-6">
          <button className="px-6 py-2 bg-black text-white rounded">Add to Cart</button>
          <button className="px-6 py-2 border rounded">♡ Wishlist</button>
        </div>

        <div className="border-t pt-4">
          <h2 className="font-semibold text-lg mb-2">Additional Info</h2>
          <p className="text-sm text-gray-600 mb-1"><strong>SKU:</strong> {product.sku}</p>
          <p className="text-sm text-gray-600 mb-1"><strong>Category:</strong> {product.category}</p>
          <p className="text-sm text-gray-600"><strong>Details:</strong> {product.details}</p>
        </div>
      </div>
    </div>
  );
}
