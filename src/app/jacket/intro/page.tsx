"use client";
import React from "react";
import Image from "next/image";
import image from "../../../../public/image/jacket/bg.jpg";

export default function Homepage() {
  return (
    <div className="flex flex-col lg:flex-row w-full ">
      <div>
        <Image src={image} alt="introduction image" width={500} height={500} className="w-full" />
      </div>

      <div className="bg-slate-900 text-gray-200 flex flex-col justify-center pl-10 w-full">
        <h1 className="text-3xl font-bold pb-5">Bring the<br></br> warmth.</h1>
        <p className="">
          Everyone needs a good winter jacket.<br/>Find yours with our collection
          and more.
        </p>
      </div>
    </div>
  );
}
