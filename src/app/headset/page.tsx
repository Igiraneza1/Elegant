
import Intro from "./intro/page";
import ProductSection from "./product/page";
import Seller from "./seller/page";
import Counter from "./counter/page";

export default function HeadsetHomepage() {
    return(
        <div>
            <Intro/>
            <ProductSection type="new-arrivals" title="Default Title"/>
            <Seller/>
            <Counter/>
            
        </div>
    )

}