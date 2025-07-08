import Header from "./header/page";
import Intro from "./intro/page";
import About from "./about/page";
import Form from "./form/page";
import Icon from "./icon/page";
import Footer from "./footer/page"

export default function ContactPage(){
    return(
        <div className="bg-white ">
            <div className=" mx-auto max-w-6xl">
    <Header/>
    <Intro />
    <About />
    <Form />
    <Icon />
    <Footer/>
    </div>
    </div>
    )
}