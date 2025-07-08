import Image from 'next/image';
import Link from 'next/link';

 const articles= [
    {
        id:1,
      Image: "/image/furniture/sofa2.jpg",
      title: "7 ways to decor your home",
      slug: "7 ways to decor your home",
      description: "",
      price: "",
    },
    {
        id:2,
      Image: "/image/furniture/kitchen.jpg",
      title: "Kitchen organisation",
      slug: "kitchen-organisation",
      description: "",
      price: "",
    },
    {
        id:3,
      Image: "/image/furniture/bedroom1.jpg",
      title: "Decor your bedroom",
      description: "",
      price: "",
      slug: "decor-your-bedroom",
    },
  ];

export default function Articles() {
  return (
    <main className='bg-white'>
    <div className="container mx-auto px-4 py-8 ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-black">Articles</h2>
        <Link href="/more-articles" className=" text-black text-lg underline">
          More Articles →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="text-center">
            <div className="relative w-full h-64">
              <Image
                src={article.Image}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-black">{article.title}</h3>
            <Link href={`/articles/${article.slug}`} className="mt-2 inline-block text-lg underline text-black">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
    </main>
  );
}