import React from "react";
import Header from "./header/page"; 
import Intro from "./intro/page";
import Featured from "./feature/page";
import Category from "./categories/page";
import Shop from "./shop/page";
import Collection from "./collection/page";
import Article from "./article/page";
import Newsletter from "./newsletter/page";
import NewsfeedPage from "./newsfeed/page";
import Footer from "./footer/page";

export default function SportPage(){
  return(
    <div className="bg-white">
      <Header/>
      <Intro/>
      <Featured/>
      <Category/>
      <Shop/>
      <Collection/>
      <Article/>
      <Newsletter/>
      <NewsfeedPage/>
      <Footer/>
    </div>
  )
}
