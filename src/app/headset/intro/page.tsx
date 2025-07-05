import Image from "next/image";
import background from "../../../../public/image/headset/bg.png";
export default function Intro() {
  return (
    <div className="">
      <div className="w-full min-h-screen bg-amber-300">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:py-5 md:px-10 lg:px-8 py-10 gap-10">
          <div className="w-full h-screen flex items-center justify-center relative md:w-1/2">
            <Image
              src={background}
              alt="Music background"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black leading-tight mb-6">
              Listen to <br />
              the <span className="text-blue-500">amazing</span> <br />
              music sound.
            </h1>
            <p className="text-lg text-black mb-6">
              Experience music like never before
            </p>
            <button className=" bg-black text-white font-bold py-2 px-10 rounded-lg hover:bg-gray-800 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
