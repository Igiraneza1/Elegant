"use client";
import React, { useState } from "react";

import  Header from "./header/page";
import  Intro from "./intro/page";
import  Shop from "./shop/page";
import  NewArrivals from "./newArrival/page";
import  Discount from "./discount/page";
import  Articles from "./article/page";
import  NewsLetter from "./newsletter/page";
import  Footer from "./footer/page";
import Image from "next/image";
import Link from "next/link";


export default function FurrnitureHomepage(){
  return (
    <main className="min-h-screen bg-white flex flex-col">
                                                                       
      <div className="w-full h-96 bg-gray-100 relative mx-5">      
          <div className="overflow-hidden rounded-xl shadow-md">         
            <Image src={slides[current].image}  alt={`Slide ${current + 1}`} onClick={() => setShowDescription(!showDescription)}             
            className="min-w-screen  h-[400px]  object-cover cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"           />     
          </div>          
                      
                  <button onClick={prevSlide} className="absolute left-0 top-1/2 transform bg-white rounded-full m-5 -translate-y-1/2  p-2 text-black ">←</button>     
                  <button onClick={nextSlide} className="absolute right-0 top-1/2 transform bg-white rounded-full m-5 -translate-y-1/2 p-2 text-black">→</button>     
          </div>               
          <div className="flex justify-between space-x-96 mt-12 px-4 max-w-7xl mx-auto gap-20">        
          <p className="text-6xl text-gray-800">Simply Unique/<br />Simply Better</p>      
          <p className="text-sm text-gray-600 mt-10">Elegant is a gift & decorations store based in Kigali,<br/> Rwanda. Est since 2019</p>      
          </div> 
    

      <div className=" rounded-lg p-6 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col w-full h-[500px]">
          <div className="p-6 bg-gray-100 rounded-t-lg text-left">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Living Room
            </h3>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Shop Now →
            </a>
          </div>
          <Image
            src={"image/furniture/livingroom.png"}
            alt="livingroom"
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>

        <div className="flex flex-col gap-6 w-full h-[600px]">
          <div className="bg-gray-100 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-between p-6 flex-1">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Bedroom
              </h3>
              <a href="#" className="text-sm text-gray-600 hover:underline">
                Shop Now →
              </a>
            </div>
            <Image
              src={"image/furniture/bedroom.png"}
              alt="bedroom"
              className="h-full w-64 object-cover"
            />
          </div>

          <div className="bg-gray-100 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-between p-6 flex-1">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Kitchen
              </h3>
              <a href="#" className="text-sm text-gray-600 hover:underline">
                Shop Now →
              </a>
            </div>
            <Image
              src={"image/furniture/toasted.png"}
              alt="kitchen"
              className="h-full w-64 object-cover"
            />
          </div>
        </div>
      </div>

      <section className="w-full ml-50 px-2 md:px-6 py-20 ">
        <div className="flex justify-between items-center mb-12 px-2">
          <h2 className="text-4xl font-medium text-gray-900">New Arrivals</h2>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 flex items-center text-sm font-medium gap-1 transition-colors"
          >
            More Products <span className="ml-1">→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {newArrivals.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative mb-4 rounded-xl overflow-hidden bg-gray-100">
                {item.isNew && (
                  <div className="absolute top-3 left-3 z-10 space-y-2 bg-gray-100 ">
                    <span className="block bg-white text-black text-[10px] font-semibold px-2 py-0.5 rounded shadow-sm">
                      NEW
                    </span>
                    <span className="block bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                      -{item.discount}
                    </span>
                  </div>
                )}
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                />

                {index === 0 && (
                  <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 rounded-lg text-sm font-medium z-10">
                    Add to cart
                  </button>
                )}
              </div>

              <div className="text-black text-sm mb-1">
                {"★".repeat(item.rating)}
                {"☆".repeat(5 - item.rating)}
              </div>
              <h3 className="text-gray-900 font-semibold text-sm mb-1">
                {item.title}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-gray-900 font-bold text-sm">
                  {item.price}
                </span>
                {item.originalPrice && (
                  <span className="text-gray-400 line-through text-xs">
                    {item.originalPrice}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full flex justify-center">
        <div className="flex w-full max-w-6xl">
          <div className="w-3/4 h-[1px] bg-black"></div>
          <div className="w-1/4 h-[1px] bg-gray-300"></div>
        </div>
      </div>

      <section className="bg-white py-12 px-4 md:px-16">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            {
              icon: "🚚",
              title: "Free Shipping",
              subtitle: "Order above $200",
            },
            {
              icon: "💳",
              title: "Money-back",
              subtitle: "30 days guarantee",
            },
            {
              icon: "🔒",
              title: "Secure Payments",
              subtitle: "Secured by Stripe",
            },
            {
              icon: "📞",
              title: "24/7 Support",
              subtitle: "Phone and Email support",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className=" bg-gray-100 rounded-lg p-6  flex flex-col items-center text-center space-y-2"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="font-semibold text-black text-lg">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <Image
            src="/image/furniture/sofa3.jpg"
            alt="sofa5"
            className=" h-86 w-full"
          />
        </div>
        <div className="w-full md:w-1/2 bg-gray-200 p-20  h-86 flex flex-col justify-center items-center">
          <p className="text-blue-400 text-2xl mr-60">SALE UP TO 35% OFF</p>
          <h3 className="text-5xl font-bold mb-2 text-gray-800">
            HUNDREDS of New Lower Prices!
          </h3>
          <p className="text-gray-600 text-xl">
            Discover new markdowns on furniture, décor, and more—updated every
            week.
          </p>
          <a
            href="#"
            className="mt-4 inline-block text-gray-800  mr-135 transition"
          >
            Shop Now →
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-medium text-gray-800">Articles</h2>
          <a
            href="#"
            className="text-gray-600 hover:underline flex items-center"
          >
            More Articles <span className="ml-2">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              image: "/image/furniture/article1.jpg",
              title: "How to Choose the Perfect Sofa",
            },
            {
              image: "/image/furniture/article2.jpg",
              title: "Top 10 Bedroom Decor Ideas",
            },
            {
              image: "/image/furniture/article3.jpg",
              title: "Modern Kitchen Trends 2024",
            },
          ].map((item, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-xl font-medium text-gray-800 group-hover:underline">
                {item.title}
              </h4>
            </article>
          ))}
        </div>
      </section>

      <div className="relative flex w-full h-[280px] bg-gray-100">
        <div className="w-1/3 h-full">
          <Image
            src="image/furniture/bedroom.png"
            alt="dresser"
            className="w-full h-full object-cover left-0 bottom-0 mb-20 mr-40"
          />
        </div>


        <div className="w-1/3 h-full flex flex-col items-center justify-center pl-20">
          <h2 className="text-4xl font-semibold text-black mb-2">
            Join Our Newsletter
          </h2>
          <p className="text-black mb-4 text-xl">
            Sign up for deals, new products and promotions
          </p>
          <div className="flex items-center border-b border-black w-full max-w-md">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-transparent outline-none text-black placeholder-black text-sm py-2"
            />
            <span className="ml-4 text-sm font-medium text-black cursor-pointer hover:text-gray-800">
              Signup
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 h-full w-1/3 overflow-hidden">
          <Image
            src="image/furniture/chair1.png"
            alt="chair"
            className="h-full w-full object-cover ml-50 mb-20 "
          />
        </div>
      </div>
      <section>
        <div className="relative flex w-full h-[200px] bg-gray-100">
          <div className="w-1/3 h-full flex items-center">
            <Image
              src="/image/furniture/bedroom.png"
              alt="dresser"
              className="w-auto h-full object-contain pl-4"
            />
          </div>

          <div className="w-full py-10 px-6 bg-black">
            <div className="max-w-7xl mx-auto space-y-8">
              {/* Brand & Nav */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                  <p className="text-xl font-bold text-white">
                    Elegant.
                    <span className="text-gray-400 text-sm font-light">
                      {" "}
                      | Headphone Store
                    </span>
                  </p>
                </div>

                <nav>
                  <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium text-gray-400">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link href="/product">Product</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="border-t border-gray-700"></div>

              {/* Bottom Footer */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
                  <p>&copy; 2023 Elegant. All rights reserved.</p>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                  <Link href="/terms">Terms of Use</Link>
                </div>

                <ul className="flex gap-4">
                  <li>
                    <Link
                      href="https://www.facebook.com/"
                      target="_blank"
                      className="hover:text-blue-400"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="hover:text-pink-400"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.twitter.com/"
                      target="_blank"
                      className="hover:text-blue-300"
                    >
                      Twitter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-1/3 h-full flex items-center justify-end pr-4">
            <Image
              src="/image/furniture/chair1.png"
              alt="chair with blanket"
              className="w-auto h-4/5 object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

    <div className="bg-white">
      <Header/>
      <Intro/>
      <Shop/>
      <NewArrivals/>
      <Discount/>
      <Articles/>
      <NewsLetter/>
      <Footer/>
    </div>
  

