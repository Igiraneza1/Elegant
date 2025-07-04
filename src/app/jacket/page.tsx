import React from "react";
import Homepage from "./intro/page"
import AllProducts from "./justIn/page";
import Category from "./category/page"

export default function JacketPage(){
    return(
        <div>
            <Homepage/>
            <AllProducts/>
            <Category/>
        </div>
    )
}