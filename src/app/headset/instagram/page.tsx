import React from "react";
import Image from "next/image";
import Link from "next/link"
import man from "../../../../public/image/headset/man2.jpg";
import woman1 from "../../../../public/image/headset/woman1.jpg";
import woman2 from "../../../../public/image/headset/woman2.jpg";
import headset10 from "../../../../public/image/headset/headset10.jpg";

const Instagram = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-10">
        <p className="text-gray-800 pb-5">NEWFEEDS</p>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Instagram
        </h2>
        <p className="text-gray-800 pb-5">Follow us on social media for more discount & promotions</p>
        <Link className="text-gray-600" href="/instagram">@3legant_official</Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {[man, woman1, woman2, headset10].map((img, idx) => (
          <div key={idx} className="aspect-square overflow-hidden group">
            <Image
              src={img}
              alt={`Instagram photo ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instagram;
