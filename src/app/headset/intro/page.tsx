import Image from "next/image";
import background from "../../../../public/image/headset/bg.png"
export default function Intro() {
  return (
    <div className="">
      <div className="w-full min-h-screen bg-yellow-200">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 md:py-24 md:px-20 gap-10">
          <div className="w-full md:w-1/2">
            <Image
              src={background}
              alt="Music background"
              width={500}
              height={500}
              className="w-full h-full"
              
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black leading-tight mb-6">
              Listen to <br />
              the <span className="text-blue-500">amazing</span> <br />
              music sound.
            </h1>
            <p className="text-lg text-black mb-6">
              Experience music like never before
            </p>
            <button className=" bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
