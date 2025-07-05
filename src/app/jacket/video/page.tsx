import video from "../../../../public/image/jacket/jacket17.jpg";
import Image from "next/image"
export default function Video(){
    return(
        <div className="flex flex-col justify-center items-center p-10 md:p-20 lg:p-30 bg-gray-50">
            <h4 className="text-blue-500">PROMOTION</h4>
            <h1 className="text-2xl font-bold">Winter Collections</h1>
            <p className="text-sm">Introducing the new winter jackets.</p>
            <Image
            src={video}
            alt="promotion video"
            width={800}
            height={400}
            className="rounded-lg mt-5"
            />
        </div>
    )
}
