// components/GolfHero.tsx
import Image from 'next/image';

export default function Intro() {
  return (
    <section className="bg-black text-white flex items-center justify-center px-4">
      <div className=" w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className='ml-60'>
          <h1 className="text-9xl md:text-6xl font-bold leading-tight">
            More than <br />
            <span className="text-white">just a game.</span> <br />
            <span className="text-white">It’s a lifestyle.</span>
          </h1>
          <p className="text-gray-300 mt-4 text-base md:text-xl">
            Whether you’re just starting out, have played your whole life or you're a Tour pro, your swing is like a fingerprint.
          </p>
          <button className="mt-6 bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-md">
            Shopping Now
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end mr-50">
          <Image
            src="/image/sport/golf-balls.jpg"
            alt="Golf Clubs with Balls"
            width={500}
            height={300}
            className="w-full h-120 object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
