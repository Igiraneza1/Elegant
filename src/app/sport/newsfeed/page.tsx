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
    <section className="bg-white text-center py-8 px-4">
      <p className="text-sm  font-semibold text-gray-400 uppercase">Newsfeed</p>
      <h2 className="text-5xl bg-font-bold text-black mt-2 mb-4">Instagram</h2>
      <p className="text-gray-400 mb-6">
        Follow us on social media for more discount &amp; promotions
      </p>
      <p className="text-gray-400 font-medium mb-12">@3legant_official</p>

      <div className="flex flex-row w-full  ">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative min-w-[254px] h-[252px]  "
          >
            <Image
              src={src}
              alt={`Instagram image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
