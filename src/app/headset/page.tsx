
import Intro from "./intro/page";
import ProductSection from "./arrivals/page";
import Shop from "./shop/page";
import Seller from "./seller/page";
import Counter from "./counter/page";
import Instagram from "./instagram/page";
import ServicesGrid from "./service/page";
import HeadsetFooter from "./footer/page";

export default function HeadsetHomepage() {
    return(
        <div>
            <Intro/>
            <ProductSection/>
            <Shop/>
            <Seller/>
            <Counter/>
            <Instagram/>  
            <ServicesGrid/>
            <HeadsetFooter/>
        </div>
    )

}