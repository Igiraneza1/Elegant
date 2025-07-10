"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-8">
          
          <div className="relative w-96 h-48 ml-20 flex-shrink-0">
            <Image
              src="/image/sport/golf-ball.jpg"
              alt="golf-ball"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          
          <div className="text-center flex-1 mx-4 ">
            <h2 className="text-4xl font-bold mb-4 tracking-wide">Join Our Newsletter</h2>
            <p className="text-lg mb-8 text-gray-300">
              Sign up for deals, new products and promotions
            </p>

            <form onSubmit={handleSubmit} className="flex items-center justify-center max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 bg-transparent border-0 border-b-2 border-gray-400 text-white placeholder-gray-400 py-3 focus:outline-none focus:border-white text-lg"
                required
              />
              <button
                type="submit"
                className="ml-4 bg-transparent text-white px-6 py-2 text-lg hover:text-gray-300 transition duration-300 font-medium"
              >
                Signup
              </button>
            </form>
          </div>

          
          <div className="relative w-64 h-48 ml-20 flex-shrink-0">
            <Image
              src="/image/sport/golf-ball1.jpg"
              alt="golf-ball"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
