"use client";
import React from "react";
import Image from "next/image";
import NewArrival from "../../../../../../public/dataheadset/arrival.json"; 

interface Product {
  id: number;
  image: string;
  title: string;
  category: string;
  price: string;
  description: string;
  rating: number;
}

const HeadsetList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
      {NewArrival.map((item: Product) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #eee",
            borderRadius: 8,
            width: 250,
            padding: 16,
          }}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={250}
            height={150}
            style={{
              objectFit: "cover",
              borderRadius: 4,
            }}
          />
          <h3>{item.title}</h3>
          <p>
            <strong>Category:</strong> {item.category}
          </p>
          <p>
            <strong>Price:</strong> {item.price}
          </p>
          <p>{item.description}</p>
          <p>Rating: {"★".repeat(item.rating)}</p>
        </div>
      ))}
    </div>
  );
};

export default HeadsetList;
