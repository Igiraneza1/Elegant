import Image from 'next/image';

interface Article {
  title: string;
  imageSrc: string;
  altText: string;
}

const articles: Article[] = [
  {
    title: 'Air Jordan x Travis Scott Event',
    imageSrc: '/image/sport/shoe2.jpg',
    altText: 'Air Jordan x Travis Scott shoes',
  },
  {
    title: 'The timeless classics on the green',
    imageSrc: '/image/sport/shoe3.jpg',
    altText: 'Golf shoes on display',
  },
  {
    title: 'The 2023 Ryder Cup',
    imageSrc: '/image/sport/cup.jpg', 
    altText: 'Ryder Cup trophy',
  },
];

export default function Article () {
  return (
    <div className="container mx-auto px-4 py-8 text-black max-w-6xl bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Latest Articles</h2>
        <a href="#" className="text-black hover:text-gray-700">
          View More →
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative w-full h-64">
              <Image
                src={article.imageSrc}
                alt={article.altText}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

