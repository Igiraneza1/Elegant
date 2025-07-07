'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
function ToggleSection({ title, isOpen, onClick, children }: any) {
  return (
    <div className="border-t pt-4">
      <button
        onClick={onClick}
        className="w-full text-left font-semibold text-lg flex justify-between items-center"
      >
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="mt-2 text-gray-700 text-sm">{children}</div>}
    </div>
  );
}

export default function Product2() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Black');
  const [infoToggle, setInfoToggle] = useState({
    additional: true,
    questions: false,
    reviews: false,
  });

  const product = {
    name: 'Tray Table',
    price: 199.0,
    originalPrice: 400.0,
    rating: 5,
    reviews: 11,
    dimensions: '17 1/2×20 5/8 "',
    colors: ['Black', 'Brown', 'Red', 'White'],
    sku: '1117',
    category: 'Living Room, Bedroom',
    description:
      'Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.',
    images: [
       '/image/furniture/table.png',
      '/image/furniture/table3.jpg',
      '/image/furniture/table2.jpg',
      '/image/furniture/table8.jpg',
      '/image/furniture/table1.jpg',
      '/image/furniture/table9.jpg',
      
    
    ],
  };

 const product2 = {
    id: '01',
    name: 'Tray Table',
    price: 199.0,
    originalPrice: 400.0,
    discount: '50% OFF',
    rating: 4.5,
    reviews: 11,
    dimensions: '17 1/2 x 20 5/8"',
    colors: ['Black', 'Brown', 'Red', 'White'],
    sku: '1117',
    category: 'Living Room, Bedroom',
    offerExpiry: {
      days: 0,
      hours: 12,
      minutes: 45,
      seconds: 5,
    },
    images: [
      '/image/furniture/table4.jpg',
      '/image/furniture/table5.jpg',
      '/image/furniture/table6.jpg',
      '/image/furniture/table7.jpg',
    ],
  };
  const newArrivals = [
    { image: '/image/furniture/Loveseat sofa.png', title: 'Loveseat', price: '$71.00', rating: 5, originalPrice: '$99.00', isNew: true, discount: '50%' },
    { image: '/image/furniture/Table lamp.png', title: 'Table Lamp', price: '$24.00', rating: 4, originalPrice: '$48.00', isNew: true, discount: '50%' },
    { image: '/image/furniture/Beige table lamp.png', title: 'Beige Table Lamp', price: '$30.00', rating: 4, originalPrice: '$60.00', isNew: true, discount: '50%' },
    { image: '/image/furniture/basket.png', title: 'Bamboo Basket', price: '$12.00', rating: 5, originalPrice: '$24.00', isNew: true, discount: '50%' },
    { image: '/image/furniture/Toasted.png', title: 'Toaster', price: '$35.00', rating: 4, originalPrice: '$70.00', isNew: true, discount: '50%' }
  ];

  return (
    <>
    <div className='bg-white'>
      <div className="max-w-7xl mx-auto px-4 py-8 bg-white">
        <div className="bg-gray-100 text-center text-sm py-2 mb-4">
          30% off storewide — Limited time! <a href="#" className="text-blue-600 underline">Shop Now</a>
        </div>

        <div className="text-sm text-gray-500 mb-4">
          Home / Shop / Living Room / <span className="text-black font-medium">Product</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {product.images.map((src, i) => (
              <img key={i} src={src} alt={`img-${i}`} className="w-full object-cover rounded-lg" />
            ))}
          </div>

          <div className="md:w-1/2">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? "text-black-500" : "text-gray-300"}>★</span>
              ))}
              <span className="ml-2 text-sm text-gray-700">{product.rating} ({product.reviews} Reviews)</span>
            </div>

            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-700 mb-4">
              Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks
            </p>

            <div className="text-2xl font-bold mb-4">
              ${product.price.toFixed(2)}{' '}
              <span className="line-through text-gray-400 text-lg">${product.originalPrice.toFixed(2)}</span>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1">Offer expires in:</p>
              <div className="flex gap-2 text-white text-sm">
                <div className="bg-black px-3 py-1 rounded">{product2.offerExpiry.days}d</div>
                <div className="bg-black px-3 py-1 rounded">{product2.offerExpiry.hours}h</div>
                <div className="bg-black px-3 py-1 rounded">{product2.offerExpiry.minutes}m</div>
                <div className="bg-black px-3 py-1 rounded">{product2.offerExpiry.seconds}s</div>
              </div>
            </div>

            <div className="mb-4">
              <p className="font-medium">Measurements:</p>
              <p>{product.dimensions}</p>
            </div>

            <div className="mb-4">
              <p className="font-medium">Choose Color:</p>
              <div className="flex gap-2 mt-2">
                {product2.images.map((img, idx) => (
                  <img key={idx} src={img} className="w-10 h-10 object-cover rounded border" alt="" />
                ))}
              </div>
            </div>

            <div className="mt-6 text-gray-900 ">
              <ToggleSection
                title="Additional Info"
                isOpen={infoToggle.additional}
                onClick={() => setInfoToggle(prev => ({ ...prev, additional: !prev.additional }))}
                className="text-black"
              >
                <p className='text-gray-500'>Details</p>
                <p className="mb-2">You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.</p>
                <p><strong>Packaging:</strong><br />
                  Width: 20 “ Height: 1 ½ “ Length: 21 ½ “<br />
                  Weight: 7 lb 8 oz<br />
                  Packages: 1
                </p>
              </ToggleSection>

              <ToggleSection
                title="Questions"
                isOpen={infoToggle.questions}
                onClick={() => setInfoToggle(prev => ({ ...prev, questions: !prev.questions }))}
                
              >
                <p>No questions yet.</p>
              </ToggleSection>

              <ToggleSection
                title={`Reviews (${product.reviews})`}
                isOpen={infoToggle.reviews}
                onClick={() => setInfoToggle(prev => ({ ...prev, reviews: !prev.reviews }))}
              >
                <p>No reviews displayed in this mockup.</p>
              </ToggleSection>
            </div>
          </div>
        </div>
      </div>

    
      <section className="w-full ml-50 px-2 md:px-6 py-20 ">
        <div className="flex justify-between items-center mb-12 px-2">
          <h2 className="text-4xl font-medium text-gray-900">You must also like</h2>
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
                  <div className="absolute top-3 left-3 z-10 space-y-2 bg-gray-100">
                    <span className="block bg-white text-black text-[10px] font-semibold px-2 py-0.5 rounded shadow-sm">
                      NEW
                    </span>
                    <span className="block bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                      -{item.discount}
                    </span>
                  </div>
                )}
                <img
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
                {'★'.repeat(item.rating)}
                {'☆'.repeat(5 - item.rating)}
              </div>
              <h3 className="text-gray-900 font-semibold text-sm mb-1">{item.title}</h3>
              <div className="flex items-center gap-2">
                <span className="text-gray-900 font-bold text-sm">{item.price}</span>
                {item.originalPrice && (
                  <span className="text-gray-400 line-through text-xs">{item.originalPrice}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        
      </section>
    <section className="relative h-72 flex items-center justify-center bg-gray-100">
  <div className="absolute left-0 h-full w-1/3">
    <Image
      src="/image/furniture/bedroom.png"
      alt="dresser"
      fill
      className="object-cover"
    />
  </div>
  
  <div className="relative z-10 flex flex-col items-center justify-center text-center w-full  rounded-lg py-8 mx-4">
    <h2 className="text-4xl font-semibold text-gray-900 mb-2">
      Join Our Newsletter
    </h2>
    <p className="text-gray-700 mb-6 text-lg">
      Sign up for deals, new products and promotions
    </p>
    <div className="flex items-center border-b border-gray-800 w-full max-w-md">
      <input
        type="email"
        placeholder="Email address"
        className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-600 text-sm py-2 px-1"
      />
      <button className="ml-4 text-sm font-medium text-gray-900 cursor-pointer hover:text-gray-600 transition-colors">
        Signup
      </button>
    </div>
  </div>

  <div className="absolute right-0 h-full w-1/3">
    <Image
      src="/image/furniture/chair1.png"
      alt="chair"
      fill
      className="object-cover"
    />
  </div>
</section>
<div className="w-full py-10 px-6 bg-black">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-xl font-bold text-white">
                Elegant.
                <span className="text-gray-400 text-sm font-light">
                  {" "} | Headphone Store
                </span>
              </p>
            </div>

            <nav>
              <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium text-gray-400">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/shop">Shop</Link></li>
                <li><Link href="/product">Product</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </nav>
          </div>

          <div className="border-t border-gray-700"></div>

          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
              <p>&copy; 2023 Elegant. All rights reserved.</p>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
            </div>

            <ul className="flex gap-4">
              <li>
                <Link href="https://www.facebook.com/" target="_blank" className="hover:text-blue-400">Facebook</Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/" target="_blank" className="hover:text-pink-400">Instagram</Link>
              </li>
              <li>
                <Link href="https://www.twitter.com/" target="_blank" className="hover:text-blue-300">Twitter</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
</div>

 
    </>
        )
}
