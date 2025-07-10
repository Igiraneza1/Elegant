import Image from 'next/image';

interface Collection {
  id: number;
  name: string;
  image: string;
}

export default function Collection() {
  const collections: Collection[] = [
    { id: 1, name: 'Juniors Set', image: '/path-to-juniors-set-image.jpg' },
    { id: 2, name: 'Men\'s Set', image: '/path-to-mens-set-image.jpg' },
    { id: 3, name: 'Women\'s Set', image: '/path-to-womens-set-image.jpg' },
  ];

  return (
    <main className=" bg-white">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-8">Shop Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First card taking half width */}
          <div className="col-span-1 bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <Image
                src={collections[0].image}
                alt={collections[0].name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{collections[0].name}</h3>
              <a href="#" className="text-blue-600 hover:underline mt-2 block">
                Collections →
              </a>
            </div>
          </div>
          {/* Second and third cards sharing the other half */}
          <div className="col-span-1 grid grid-cols-1 gap-6">
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src={collections[1].image}
                  alt={collections[1].name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{collections[1].name}</h3>
                <a href="#" className="text-blue-600 hover:underline mt-2 block">
                  Collections →
                </a>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src={collections[2].image}
                  alt={collections[2].name}
                  fill
                  className="object-contain"
                  
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{collections[2].name}</h3>
                <a href="#" className="text-blue-600 hover:underline mt-2 block">
                  Collections →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}