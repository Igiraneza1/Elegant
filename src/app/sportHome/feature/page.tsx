import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number; // Can now handle decimal ratings like 4.5
  isHot: boolean;
}

export default function Feature() {
  const products: Product[] = [
    {
      id: 1,
      name: 'Shark - Men\'s Cabretta White Golf Glove',
      price: 19.00,
      image: '/image/sport/glove.png',
      rating: 5,
      isHot: true,
    },
    {
      id: 2,
      name: 'Greg Norman - Men\'s Shark Logo Golf Polo Shirt',
      price: 24.99,
      originalPrice: 49.00,
      image: '/image/sport/t-shirt.jpg',
      rating: 4.5, // Updated to 4.5 to show half star
      isHot: true,
    },
    {
      id: 3,
      name: 'G/FORE - Men\'s Left Glove Snow 2023',
      price: 30.00,
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
      originalPrice: 200.00,
      image: '/image/sport/shoe.png',
      rating: 5,
      isHot: true,
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8 text-black bg-white ">
      <h2 className="text-2xl font-bold mb-6 flex justify-center items-center">Featured</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto ">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              {product.isHot && (
                <span className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                  HOT
                </span>
              )}
              {product.originalPrice && (
                <span className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              )}
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={100}
                className="w-full h-48 w-36 object-cover bg-gray-100"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-semibold">{product.name}</h3>
              <p className="text-gray-600 mt-2">
                ${product.price.toFixed(2)}
                {product.originalPrice && (
                  <span className="text-gray-400 line-through ml-2">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </p>
              <div className="flex items-center mt-2">
                {Array.from({ length: 5 }, (_, i) => {
                  const fullStars = Math.floor(product.rating);
                  const hasHalfStar = product.rating % 1 >= 0.5 && i === fullStars;
                  const isEmpty = i >= fullStars + (hasHalfStar ? 1 : 0);

                  return (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${isEmpty ? 'text-gray-300' : 'text-yellow-400'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {hasHalfStar ? (
                        <path
                          d="M10 0l2.598 6.298 6.402.928-4.65 4.527.998 6.747L10 15.872l-5.348 2.628.998-6.747-4.65-4.527 6.402-.928L10 0z"
                          fill="currentColor"
                          clipPath="inset(0 50% 0 0)" // Half-filled star
                        />
                      ) : (
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      )}
                    </svg>
                  );
                })}
              </div>
              <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}