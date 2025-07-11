import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isNew: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Loveseat Sofa',
    price: 199.0,
    originalPrice: 399.0,
    image: '/image/furniture/Loveseat sofa.png',
    rating: 4.5,
    isNew: true,
  },
  {
    id: 2,
    name: 'Luxury Sofa',
    price: 229.0,
    originalPrice: 399.0,
    image: '/image/furniture/livingroom.png',
    rating: 4.8,
    isNew: true,
  },
  {
    id: 3,
    name: 'Table Lamp',
    price: 19.0,
    image: '/image/furniture/Beige table lamp.png',
    rating: 4.7,
    isNew: true,
  },
  {
    id: 4,
    name: 'Cozy Sofa',
    price: 229.0,
    image: '/image/furniture/sofa5.jpg',
    rating: 4.0,
    isNew: true,
  },
  {
    id: 5,
    name: 'White Drawer Unit',
    price: 89.99,
    image: '/image/furniture/bedroom2.png',
    rating: 4.7,
    isNew: true,
  },
  {
    id: 6,
    name: 'Black Tray Table',
    price: 19.99,
    image: '/image/furniture/table.png',
    rating: 4.5,
    isNew: true,
  },
  {
    id: 7,
    name: 'Table Lamp',
    price: 39.99,
    image: '/image/furniture/lamp.png',
    rating: 4.1,
    isNew: true,
  },
  {
    id: 8,
    name: 'Black Brow Side table',
    price: 16.99,
    image: '/image/furniture/table10.jpg',
    rating: 5.0,
    isNew: true,
  },
  {
    id: 9,
    name: 'Light Beige Pillow',
    price: 3.99,
    image: '/image/furniture/pillow.png',
    rating: 4.3,
    isNew: true,
  },
  {
    id: 10,
    name: 'Table Lamp',
    price: 39.99,
    image: '/image/furniture/Table lamp.png',
    rating: 4.4,
    isNew: true,
  },
  {
    id: 11,
    name: 'Bamboo Basket',
    price: 9.99,
    image: '/image/furniture/basket.png',
    rating: 4.6,
    isNew: true,
  },
  {
    id: 12,
    name: 'Off-white Pillow',
    price: 7.99,
    image: '/image/furniture/pillow2.png',
    rating: 4.0,
    isNew: true,
  },
];

export default function Shop2() {
  return (
    <div className="min-h-screen bg-white">
     
      <header className="bg-white shadow p-4">
              <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">3legant.</h1>
                <nav className="space-x-6">
                  <Link href="/" className="text-gray-600 hover:text-gray-900">
                    Home
                  </Link>
                  <Link href="/shop" className="text-gray-600 hover:text-gray-900">
                    Shop
                  </Link>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                    Contact Us
                  </Link>
                </nav>
                <div className="space-x-4">
                  <span>🔍</span>
                  <span>🔔</span>
                  <span>👤</span>
                </div>
              </div>
            </header>
      
            
            <div className="bg-purple-100 text-purple-700 text-center py-2 mb-4">
              <span>30% off storewide - Limited time</span>
              <Link href="/shop" className="underline ml-2">Shop Now →</Link>
            </div>
            <div className="relative h-86 bg-gray-300 mb-6">
              <Image
                src="/image/furniture/sofa4.jpg"
                alt="Shop Hero"
                fill
                className="object-cover opacity-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-gray-900 gap-6">
                <div className=' flex flex-row space-x-5 items-center'>
                 <p className="text-sm  gap-6">Home  </p> 
                 <p>/</p>
                 < p>   Shop</p>
                </div>
                <p className="text-5xl font-bold"> Shop Page</p>
                <h2 className="text-2xl  mt-2 text-gray-700">
                  Let's design the place you always imagined
                </h2>
              </div>
            </div>
            <section className=' max-w-6xl bg-white mx-auto '>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex space-x-6">
          <div className='flex flex-col gap-2'>
            <p className='text-gray-500'>CATEGORIES</p>
          <select className="border rounded px-2 py-1 bg-white text-gray-900 font-bold w-64">
            <option className='font-bold '>Living Room</option>
            <option className='font-bold '>Bedroom</option>
            <option className='font-bold '>Kitchen</option>
            <option className='font-bold '>Bathroom</option>
            <option className='font-bold '>Dining</option>
            <option className='font-bold '>Outdoor</option>
          </select>
          </div>
          <div className='flex flex-col gap-2'> 
            <p className='text-gray-500'>PRICE</p>
          <select className="border rounded px-2 py-1 bg-white text-gray-900 font-bold w-64">
            <option>All Price</option>
            <option>$0.00 - $99.99</option>
            <option>$100.00 - $199.99</option>
            <option>$200.00 - $299.99</option>
            <option>$300.00 - $399.99</option>
            <option>$400+</option>
          </select>
          </div>
        </div>
        <select className="border border-black text-black font-bold rounded px-2 py-1 bg-white">
          <option >Sort by</option>
        </select>
      </div>

    
      <div className=" mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className=" overflow-hidden relative ">
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                {product.isNew && (
                  <div className="absolute flex flex-col top-2 left-2 gap-1">
                    <button className="bg-green-500 text-white text-xs px-2 py-1 rounded mb-1">NEW</button>
                    <button className="bg-green-500 text-white text-xs px-2 py-1 rounded">-50%</button>
                  </div>
                )}
                {product.id === 6 && (
                  <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded">
                    Add to cart
                  </button>
                )}
              </div>
              <div className="p-4 text-left text-black">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <div className="flex">
                  {'★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating))}
                </div>
                {product.id <= 2 && product.originalPrice && (
                  <p className="line-through">${product.originalPrice.toFixed(2)}</p>
                )}
                <p className="font-bold text-red-600">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <button className=" mt-6 bg-gray-200 text-gray-700 px-4 py-2  rounded hover:bg-gray-300">
          Show more
        </button>
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
  );
}