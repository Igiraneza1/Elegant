'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Product1() {
  useParams();

  const product = {
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

  const reviews = [
   {
      id: 1,
      author: 'Sofia Harrett',
      rating: 4,
      comment: 'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et lusto odio dignissimos ducimus qui blanditilis praesentium praesentium voluptatum deleniti atque corrupt etque corrupt et quas molestias excepturi sint non provident.',
      
    },
    {
      id: 2,
      author: 'Nicolas Jensen',
      rating: 5,
      comment: 'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et lusto odio dignissimos ducimus qui blanditilis praesentium praesentium voluptatum deleniti atque corrupt etque corrupt et quas molestias excepturi sint non provident.',
      
    },
    {
      id: 3,
      author: 'Nicolas Jensen',
      rating: 5,
      comment:'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et lusto odio dignissimos ducimus qui blanditilis praesentium praesentium voluptatum deleniti atque corrupt etque corrupt et quas molestias excepturi sint non provident.',
    
    },
    {
      id: 4,
      author: 'Sofia Harrett',
      rating: 4,
      comment: 'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et lusto odio dignissimos ducimus qui blanditilis praesentium praesentium voluptatum deleniti atque corrupt etque corrupt et quas molestias excepturi sint non provident.',
      
    },
    {
      id: 5,
      author: 'Nicolas Jensen',
      rating: 5,
      comment: 'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et lusto odio dignissimos ducimus qui blanditilis praesentium praesentium voluptatum deleniti atque corrupt etque corrupt et quas molestias excepturi sint non provident.',
      
    },
  ];

  const totalReviews = 11;
  const averageRating = 4.5;

  return (
    <section className="bg-white text-black">
      <div className="bg-purple-100 text-purple-700 text-center py-2">
        30% off storewide – Limited time. <a href="#" className="underline">Shop Now →</a>
      </div>
      <header className="flex justify-between items-center mb-4 max-w-6xl ml-70">
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
    
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Image
              src="/image/furniture/table.png"
              alt="Main Product"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover rounded"
              priority
            />
            <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">NEW</span>
            <span className="absolute top-2 left-16 bg-red-500 text-white text-xs px-2 py-1 rounded">{product.discount}</span>
          </div>
          <div className="flex gap-4 mt-4">
            {['/image/furniture/table1.jpg', '/image/furniture/table2.jpg', '/image/furniture/table3.jpg'].map((img, idx) => (
              <Image key={idx} src={img} className="w-48 h-36 object-cover border rounded" alt={`alt-${idx}`} />
            ))}
          </div>
        </div>

        {/* Info section */}
        <div className="md:w-1/2">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(product.rating) ? "text-black-500" : "text-gray-300"}>★</span>
            ))}
            <span className="ml-2 text-sm text-gray-700">{product.rating} ({product.reviews} Reviews)</span>
          </div>

          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-4">
            Light and easy to move around with removable tray top, handy for serving snacks.
          </p>

          <div className="text-2xl font-bold mb-4">
            ${product.price.toFixed(2)}{' '}
            <span className="line-through text-gray-400 text-lg">${product.originalPrice.toFixed(2)}</span>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-1">Offer expires in:</p>
            <div className="flex gap-2 text-white text-sm">
              <div className="bg-black px-3 py-1 rounded">{product.offerExpiry.days}d</div>
              <div className="bg-black px-3 py-1 rounded">{product.offerExpiry.hours}h</div>
              <div className="bg-black px-3 py-1 rounded">{product.offerExpiry.minutes}m</div>
              <div className="bg-black px-3 py-1 rounded">{product.offerExpiry.seconds}s</div>
            </div>
          </div>

          <div className="mb-4">
            <p className="font-medium">Measurements:</p>
            <p>{product.dimensions}</p>
          </div>

          <div className="mb-4">
            <p className="font-medium">Choose Color:</p>
            <div className="flex gap-2 mt-2">
              {product.images.map((img, idx) => (
                <Image key={idx} src={img} className="w-10 h-10 object-cover rounded border" alt="" />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gray-200 w-24 flex justify-between px-2 rounded">
              <button className="text-xl">-</button>
              <span>1</span>
              <button className="text-xl">+</button>
            </div>
            <button className="flex justify-center items-center w-full border px-3 py-2 rounded">♥ Wishlist</button>
          </div>

          <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-900">Add to Cart</button>

          <div className="text-sm text-gray-600 mt-2">
            <p>SKU: {product.sku}</p>
            <p>Category: {product.category}</p>
          </div>
        </div>

  
        <div className="mt-12" id="reviews">
          <div className="flex space-x-4 mb-4 text-gray-600">
            <a href="#additional-info" className="hover:text-gray-900">Additional Info</a>
            <a href="#questions" className="hover:text-gray-900">Questions</a>
            <a href="#reviews" className="text-gray-900 border-b-2 border-gray-900">Reviews</a>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">Customer Reviews</h2>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <span className="text-gray-900">
                {Array.from({ length: 5 }, (_, i) => i < Math.floor(averageRating) ? '★' : '☆')}
              </span>
              <span className="ml-2 text-gray-600">{totalReviews} Reviews</span>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded">Write Review</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">{totalReviews} Reviews</h3>
              <select className="border rounded p-1">
                <option>Newest</option>
                <option>Oldest</option>
                <option>Highest Rating</option>
                <option>Lowest Rating</option>
              </select>
            </div>

            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-4 mb-4 last:border-b-0 last:pb-0">
                <div className="flex items-start gap-4">
                  <Image
                    width={50}
                    src={`https://i.pravatar.cc/50?img=${review.id}`}
                    alt={review.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{review.author}</h4>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className={i < review.rating ? 'text-gray-900' : 'text-gray-300'}>★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 mt-2 text-sm">{review.comment}</p>
                    <div className="flex gap-4 mt-2 text-sm text-gray-500 p-5">
                      <button className="hover:text-black">👍 Like</button>
                      <button className="hover:text-black">💬 Reply</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <button className="text-sm border px-4 py-2 rounded hover:bg-gray-100">Load More</button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-12 bg-gray-100 py-12 px-6 relative w-full">
          <Image
            src="/image/furniture/bedroom.png"
            alt="Bedroom"
            className="w-1/4 h-48 object-cover rounded mb-4 md:mb-0"
          />
          <div className="text-center md:w-1/2">
            <h2 className="text-2xl font-bold mb-2">Join Our Newsletter</h2>
            <p className="mb-4 text-gray-600">Sign up for deals, new products and promotions</p>
            <div className="flex max-w-md mx-auto border-b border-black">
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow py-2 px-2 bg-transparent text-sm outline-none"
              />
              <button className="text-sm px-4">Signup</button>
            </div>
          </div>
          <Image
            src="/image/furniture/chair1.png"
            alt="Chair"
            className="w-1/4 h-48 object-cover rounded mt-4 md:mt-0"
          />
        </div>
      </div>
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
    </section>
    
  );
}
