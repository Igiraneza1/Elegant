import Intro from "./intro/page";
import Main from "./main/page";
import Footer from "./footer/page";

export default function cartPage(){
  return(
    <div className="bg-white">
      <Intro/>
      <Main />
      <Footer />
    </div>
  )
}