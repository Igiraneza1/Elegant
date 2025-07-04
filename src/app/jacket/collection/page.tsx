"use client"
import React from "react"
import Image from "next/image";

const collection : collections [] = [
    {
        id: 1,
        name: "Winter Jackets",
        image: "/image/jacket/winter.jpg"
    },
    {
        id: 2,
        name: "Leather Jackets",
        image: "/image/jacket/leather.jpg"
    },
    {
        id: 3,
        name: "Casual Jackets",
        image: "/image/jacket/casual.jpg"
    },
    {
        id: 4,
        name: "Sports Jackets",
        image: "/image/jacket/sports.jpg"
    }
];

export default function Collection(){
    return(
        <div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                {collection.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <Image 
                            src={item.image} 
                            alt={item.name} 
                            width={400} 
                            height={300} 
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{item.name}</h2>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}