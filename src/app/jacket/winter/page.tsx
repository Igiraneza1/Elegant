import video from "../../../../public/image/jacket/jacket17.jpg";
import Image from "next/image"
export default function Video(){
    return(
        <div className="flex flex-col item-center justify-center">
            <h4 className="text-blue-500">PROMOTION</h4>
            <h1 className="text-2xl">Winter Collections</h1>
            <p className="text-sm">Introducing the new winter jackets.</p>
            <Image
            src={video}
            alt="promotion video"
            width={400}
            height={400}
            />
        </div>
    )
}
