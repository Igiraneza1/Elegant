import React from "react";
import Homepage from "./intro/page"
import AllProducts from "./justIn/page"
import Category from "./category/page"
import Collection from "./collection/page"
import BestSellers  from "./hot/page"
import SaleBanner from "./sale/page"
import Video from "./video/page"
import LatestArticles from "./article/page"
import Instagram from "./instagram/page"
import ServicesGrid from "./service/page";
import Footer from "./footer/page";

export default function JacketPage(){
    return(
        <div>
            <Homepage/>
            <AllProducts/>
            <Category/>
            <Collection/>
            <BestSellers/>
            <SaleBanner/>
            <Video/>
            <LatestArticles/>
            <Instagram/>
            <ServicesGrid/>
            <Footer/>

        </div>
    )
}