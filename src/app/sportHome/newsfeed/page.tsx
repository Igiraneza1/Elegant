import Image from 'next/image';

const images = [
   '/image/sport/man2.jpg',
    '/image/sport/truck1.jpg',
     '/image/sport/man.jpg',
     '/image/sport/man1.jpg',
      
     '/image/sport/truck.jpg',
    
    '/image/sport/man3.jpg',
        
];

export default function NewsfeedPage() {
  return (
    <section className="bg-white text-center py-16 px-4">
      <p className="text-sm font-semibold text-gray-500 uppercase">Newsfeed</p>
      <h2 className="text-3xl font-bold mt-2 mb-4">Instagram</h2>
      <p className="text-gray-600 mb-6">
        Follow us on social media for more discount &amp; promotions
      </p>
      <p className="text-purple-600 font-medium mb-12">@3legant_official</p>

      <div className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-3 gap-4 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <div key={index} className="relative w-24 h-24">
            <Image
              src={src}
              alt={`Instagram image ${index + 1}`}
              fill
              className="object-cover rounded-lg h-24 w-24"
              
            />
          </div>
        ))}
      </div>
    </section>
  );
}
