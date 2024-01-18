import { Navbar } from "../partials/Navbar";
import { Footer } from "../partials/Footer";
import { Banner } from "./Banner";
import { AboutUs } from "./AboutUs";

// import '../Css/style.css'
// import '../Css/board.css'

export function LandingPage(){
    return(
        <div>
            <Navbar/>
            <Banner/>
            <AboutUs/>
            <Footer/>
        </div>
    )
}