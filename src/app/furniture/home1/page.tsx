import  Header from "./header/page";
import  Intro from "./intro/page";
import  Shop from "./shop/page";
import  NewArrivals from "./newArrival/page";
import  Discount from "./discount/page";
import  Articles from "./article/page";
import  NewsLetter from "./newsletter/page";
import  Footer from "./footer/page";

export default function FurrnitureHomepage(){
  return (
    <div className="bg-white">
      <Header/>
      <Intro/>
      <Shop/>
      <NewArrivals/>
      <Discount/>
      <Articles/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}
