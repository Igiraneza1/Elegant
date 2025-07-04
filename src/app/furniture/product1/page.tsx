'use client';

import { useParams } from 'next/navigation';
import React from 'react';

export default function Product1() {
  const { id } = useParams();

  const product = {
    id: '01',
    name: 'Tray Table',
    price: 199.0,
    originalPrice: 400.0,
    discount: '50%',
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
    newsletter: [
      '/image/furniture/chair1.png',
      '/image/furniture/bedroom.png'
    ]
  };

  const reviews = [
    {
      id: 1,
      author: 'Sofia Harrett',
      rating: 4,
      comment: 'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et lusto odio dignissimos ducimus qui blanditilis praesentium praesentium voluptatum deleniti atque corrupt etque corrupt et quas molestias excepturi sint non provident.',
      date: 'June 20, 2025',
    },
    {
      id: 2,
      author: 'Nicolas Jensen',
      rating: 5,
      comment: 'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et lusto odio dignissimos ducimus qui blanditilis praesentium praesentium voluptatum deleniti atque corrupt etque corrupt et quas molestias excepturi sint non provident.',
      date: 'June 18, 2025',
    },
    {
      id: 3,
      author: 'Nicolas Jensen',
      rating: 5,
      comment:'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et lusto odio dignissimos ducimus qui blanditilis praesentium praesentium voluptatum deleniti atque corrupt etque corrupt et quas molestias excepturi sint non provident.',
      date: 'June 15, 2025',
    },
    {
      id: 4,
      author: 'Sofia Harrett',
      rating: 4,
      comment: 'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et lusto odio dignissimos ducimus qui blanditilis praesentium praesentium voluptatum deleniti atque corrupt etque corrupt et quas molestias excepturi sint non provident.',
      date: 'June 10, 2025',
    },
    {
      id: 5,
      author: 'Nicolas Jensen',
      rating: 5,
      comment: 'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et lusto odio dignissimos ducimus qui blanditilis praesentium praesentium voluptatum deleniti atque corrupt etque corrupt et quas molestias excepturi sint non provident.',
      date: 'June 05, 2025',
    },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto p-4 bg-white max-w-6xl">
         <div className="bg-purple-100 text-purple-700 text-center py-2 mb-4">
          30% off storewide - Limited time. <a href="#" className="underline">Shop Now →</a>
        </div>
        <header className="flex justify-between items-center mb-4">
          <div className="text-xl font-bold text-gray-800">3legant.</div>
          <nav className="space-x-4">
            <a href="#" className="hover:text-purple-600 text-gray-800">Home</a>
            <a href="#" className="hover:text-purple-600 text-gray-800">Shop</a>
            <a href="#" className="hover:text-purple-600 text-gray-800">About</a>
            <a href="#" className="hover:text-purple-600 text-gray-800">Contact Us</a>
          </nav>
          <div className="space-x-2">
            <span>🔍</span>
            <span>🔔</span>
            <span>👤</span>
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 relative">
            <img src="/image/furniture/table.png" alt="Main product" className="w-125 h-96 object-cover" />
            <span className="absolute top-2 left-2 bg-green-500 text-white text-sm px-2 rounded">NEW</span>
            <span className="absolute top-2 left-16 bg-green-500 text-white text-sm px-2 rounded">{product.discount}</span>
            <div className="flex flex-row gap-4 mt-4">
              <img src="/image/furniture/table1.jpg" alt="Side 1" className="w-40 h-36" />
              <img src="/image/furniture/table2.jpg" alt="Side 2" className="w-40 h-36" />
              <img src="/image/furniture/table3.jpg" alt="Side 3" className="w-40 h-36" />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-2 mb-2">
              {'★'.repeat(4).split('').map((star, i) => (
                <span key={i} className="text-black">★</span>
              ))}
              <span className="text-gray-300">★</span>
              <span className="ml-2 text-gray-800">{product.rating} ({product.reviews} Reviews)</span>
            </div>
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">
              Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.
            </p>
            <div className="text-3xl font-bold mb-2">
              ${product.price.toFixed(2)}{' '}
              <span className="line-through text-gray-500 text-xl">${product.originalPrice.toFixed(2)}</span>
            </div>
            <div className="text-sm text-gray-600 mb-4">
              Offer expires in: {`${product.offerExpiry.days}d ${product.offerExpiry.hours}h ${product.offerExpiry.minutes}m ${product.offerExpiry.seconds}s`}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Measurements:</span> {product.dimensions}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Choose Color: </span>
              <div className="flex gap-2 mt-2">
                {product.images.map((src, index) => (
                  <img key={index} src={src} alt={`Color ${index + 1}`} className="h-12 w-12 border rounded" />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <button className="px-2 py-1 border">-</button>
              <span>1</span>
              <button className="px-2 py-1 border">+</button>
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">♥ Wishlist</button>
            </div>
            <button className="w-full bg-black text-white py-2 mb-4">Add to Cart</button>
            <div className="text-sm">
              <span className='text-gray-800' >SKU: {product.sku}</span>
              <span className="ml-4 text-gray-800">CATEGORY: {product.category}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 bg-gray-50 max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Customer Reviews</h2>
        <div className="flex justify-between items-center mb-4">
          <div>
            {'★'.repeat(4).split('').map((star, i) => (
              <span key={i} className="text-black">★</span>
            ))}
            <span className="text-gray-300">★</span>
            <span className="ml-2 text-gray-800">4.5</span>
          </div>
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-black">Write a Review</button>
        </div>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-4">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={`https://i.pravatar.cc/40?img=${review.id}`}
                  alt={review.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-800">{review.author}</p>
                  <p className="text-sm text-gray-800">{review.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-2">
                {'★'.repeat(review.rating).split('').map((star, index) => (
                  <span key={index} className="text-yellow-400">{star}</span>
                ))}
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded">Load More</button>
        </div>
      </div>

      <div className="relative flex w-full h-[280px] bg-gray-100">
        <div className="w-1/3 h-full">
          <img src="/image/furniture/bedroom.png" alt="dresser" className="w-full h-full object-cover mb-20 mr-20" />
        </div>
        <div className="w-1/3 h-full flex flex-col items-center justify-center pl-20">
          <h2 className="text-4xl font-semibold text-black mb-2">Join Our Newsletter</h2>
          <p className="text-black text-xl mb-4">Sign up for deals, new products and promotions</p>
          <div className="flex items-center border-b border-black w-full max-w-md">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-transparent outline-none text-black placeholder-black text-sm py-2"
            />
            <span className="ml-4 text-sm font-medium text-black cursor-pointer hover:text-gray-800">Signup</span>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 h-full w-1/3 overflow-hidden">
          <img src="/image/furniture/chair1.png" alt="chair" className="h-full w-full object-cover ml-80 mb-20" />
        </div>
      </div>
    </section>
  );
}
