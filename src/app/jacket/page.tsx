import React from "react";
import Homepage from "./intro/page"
import AllProducts from "./justIn/page"
import Category from "./category/page"
import Collection from "./collection/page"
import BestSellers  from "./hot/page"
import SaleBanner from "./sale/page"
import Video from "./winter/page"
import LatestArticles from "./article/page"

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

        </div>
    )
}