
import Intro from "./intro/page";
import ProductGrid from "./arrivals/page";
import Shop from "./collection/page";
import Seller from "./seller/page";
import Counter from "./counter/page";
import Instagram from "./instagram/page";
import ServicesGrid from "./services/page";
import HeadsetFooter from "./footer/page";

export default function HeadsetHomepage() {
    return(
        <div>
            <Intro/>
            <ProductGrid/>
            <Shop/>
            <Seller/>
            <Counter/>
            <Instagram/>  
            <ServicesGrid/>
            <HeadsetFooter/>
        </div>
    )

}