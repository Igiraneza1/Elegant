
import Image from 'next/image';

export default function SportHome() {
    return(
        <div>
            <div>
                <span>
                    More Than
                    just a game
                    It is a lifestyle
                </span>
                <span>
                    Whether you are just starting out, have played
                    your whole life or you are a Tour pro, your 
                    <Image
                        src="/image/sport/golf-balls.jpg"
                        alt="Sport Image"
                        width={800}
                        height={400}
                        style={{ width: "100%", height: "auto" }}
                    />
                </span>
            </div>
            <div>
                
            </div>
        </div>
    )
}