import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isHot: boolean;
}

export default function Feature() {
  const products: Product[] = [
    {
      id: 1,
      name: "Shark - Men's Cabretta White Golf Glove",
      price: 19.0,
      image: '/image/sport/glove.png',
      rating: 5,
      isHot: true,
    },
    {
      id: 2,
      name: "Greg Norman - Men's Shark Logo Golf Polo Shirt",
      price: 24.99,
      originalPrice: 49.0,
      image: '/image/sport/t-shirt.jpg',
      rating: 4.5,
      isHot: true,
    },
    {
      id: 3,
      name: "G/FORE - Men's Left Glove Snow 2023",
      price: 30.0,
      image: '/image/sport/white-glove.png',
      rating: 5,
      isHot: true,
    },
    {
      id: 4,
      name: 'Utility Rover-R Double Strap Bag All Black - 2023',
      price: 209.99,
      image: '/image/sport/tool.png',
      rating: 5,
      isHot: true,
    },
    {
      id: 5,
      name: 'Air Jordan 1 Low Iron Grey - SS25',
      price: 111.99,
      originalPrice: 200.0,
      image: '/image/sport/shoe.png',
      rating: 5,
      isHot: true,
    },
  ];

  return (
    <main className="max-w-5xl container mx-auto px-4 py-8 bg-white">
      <h2 className="text-2xl font-bold mb-6 flex justify-center items-center text-black">Featured</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <div className='flex flex-cols'>
              {product.isHot && (
                <span className="absolute top-2 left-2 bg-white text-black text-xs font-semibold px-2 py-1 rounded">
                  HOT
                </span>
              )}
              {product.originalPrice && (
                <span className="absolute top-10 left-2 bg-green-100 text-black text-xs font-semibold px-2 py-1 rounded">
                 50%
                </span>
              )}
              </div>
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={100}
                className="w-full h-48 object-cover bg-gray-100"
              />
              
              {product.id === 1 && (
                  <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white  px-1 py-2 rounded-lg text-sm font-medium z-10 w-full">
                    Add to cart
                  </button>
                )}
            </div>
            <div className="mt-4 ">
              <h3 className="text-sm font-semibold text-black">{product.name}</h3>
              <p className="text-black mt-2">
                ${product.price.toFixed(2)}
                {product.originalPrice && (
                  <span className="text-gray-400 line-through ml-2">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </p>
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => {
                  const fullStars = Math.floor(product.rating);
                  const hasHalfStar = product.rating % 1 >= 0.5;
                  const showHalf = hasHalfStar && i === fullStars;

                  return (
                    <span key={i}>
                      {i < fullStars ? (
                        <FaStar className="text-black w-4 h-4" />
                      ) : showHalf ? (
                        <FaStar className="text-black w-4 h-4" />
                      ) : (
                        <FaStar className="text-black w-4 h-4" />
                      )}
                    </span>
                  );
                })}
              </div>

            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
