import React from 'react';
import Image from 'next/image';
import { Star, ShoppingCart} from 'lucide-react';

// Types
interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  isNew?: boolean;
  discount?: string;
}

interface Category {
  id: string;
  name: string;
  image: string;
}

interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

// Sample data
const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Golf Glove',
    price: 29.99,
    rating: 4.8,
    image: '/api/placeholder/200/200',
    isNew: true
  },
  {
    id: '2',
    name: 'Pro Golf Polo Shirt',
    price: 49.99,
    rating: 4.6,
    image: '/api/placeholder/200/200',
    isNew: true
  },
  {
    id: '3',
    name: 'Golf Ball Set (12 Pack)',
    price: 24.99,
    rating: 4.7,
    image: '/api/placeholder/200/200'
  },
  {
    id: '4',
    name: 'Golf Tee Pack',
    price: 8.99,
    rating: 4.5,
    image: '/api/placeholder/200/200'
  },
  {
    id: '5',
    name: 'Golf Shoes',
    price: 129.99,
    rating: 4.9,
    image: '/api/placeholder/200/200',
    isNew: true
  }
];

const categories: Category[] = [
  {
    id: '1',
    name: 'Golf Clubs',
    image: '/api/placeholder/150/150'
  },
  {
    id: '2',
    name: 'Golf Balls',
    image: '/api/placeholder/150/150'
  },
  {
    id: '3',
    name: 'Golf Bags',
    image: '/api/placeholder/150/150'
  },
  {
    id: '4',
    name: 'Clothing & Rainwear',
    image: '/api/placeholder/150/150'
  },
  {
    id: '5',
    name: 'Footwear',
    image: '/api/placeholder/150/150'
  },
  {
    id: '6',
    name: 'Accessories',
    image: '/api/placeholder/150/150'
  }
];

const collections: Collection[] = [
  {
    id: '1',
    name: 'Juniors Set',
    description: 'Complete golf set for young players',
    image: '/api/placeholder/300/200',
    price: 199.99
  },
  {
    id: '2',
    name: "Men's Set",
    description: 'Professional golf club set',
    image: '/api/placeholder/300/200',
    price: 599.99
  },
  {
    id: '3',
    name: "Women's Set",
    description: 'Designed for female golfers',
    image: '/api/placeholder/300/200',
    price: 499.99
  }
];

// Components
const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
    <div className="relative">
      <Image 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      {product.isNew && (
        <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
          NEW
        </span>
      )}
    </div>
    <div className="p-4">
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
      </div>
      <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>
        <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => (
  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer">
    <div className="aspect-square">
      <Image 
        src={category.image} 
        alt={category.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4">
      <h3 className="font-medium text-gray-900 text-center">{category.name}</h3>
    </div>
  </div>
);

const CollectionCard: React.FC<{ collection: Collection }> = ({ collection }) => (
  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
    <div className="aspect-[3/2]">
      <Image  
        src={collection.image} 
        alt={collection.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-gray-900 mb-1">{collection.name}</h3>
      <p className="text-sm text-gray-600 mb-3">{collection.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900">${collection.price}</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          View Set
        </button>
      </div>
    </div>
  </div>
);

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 2,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-white bg-opacity-20 rounded-lg p-2 min-w-[50px]">
            <div className="text-2xl font-bold text-white">{value.toString().padStart(2, '0')}</div>
          </div>
          <div className="text-sm text-white mt-1 capitalize">{unit}</div>
        </div>
      ))}
    </div>
  );
};

const GolfStorePage: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    {/* Header */}
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">GolfPro</h1>
          </div>
          <div className="flex items-center space-x-4">
            <ShoppingCart className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </div>
    </header>

    {/* Main Content */}
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Featured Products */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop by Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="mb-12">
        <div 
          className="relative bg-gradient-to-r from-green-600 to-green-800 rounded-lg overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/api/placeholder/800/300')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="px-8 py-12 text-white">
            <div className="max-w-md">
              <h3 className="text-3xl font-bold mb-4">Hurry up! 30% OFF</h3>
              <p className="text-lg mb-6">Thousands of products to explore</p>
              <CountdownTimer />
              <button className="mt-6 bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Collection */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map(collection => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </section>
    </main>
  </div>
);

export default GolfStorePage;