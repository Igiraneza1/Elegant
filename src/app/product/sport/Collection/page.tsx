import Image from 'next/image';

interface Collection {
  id: number;
  name: string;
  image: string;
}

export default function Collection() {
  const collections: Collection[] = [
    { id: 1, name: 'Juniors Set', image: '/image/sport/junior-set.png' },
    { id: 2, name: 'Men\'s Set', image: '/image/sport/men-set.png' },
    { id: 3, name: 'Women\'s Set', image: '/image/sport/women-set.png' },
  ];

  return (
    <main className=" bg-white max-w-6xl mx-auto text-black">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-8">Shop Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="col-span-1 bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-128">
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
          
          <div className="col-span-1 grid grid-cols-1 gap-6">
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
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