
import Intro from "./intro/page";
import ProductSection from "./product/page";
import Shop from "./shop/page";
import Seller from "./seller/page";
import Counter from "./counter/page";

export default function HeadsetHomepage() {
    return(
        <div>
            <Intro/>
            <ProductSection/>
            <Shop/>
            <Seller/>
            <Counter/>
            
        </div>
    )

}