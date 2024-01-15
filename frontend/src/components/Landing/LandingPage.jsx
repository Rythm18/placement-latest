import { Header } from "../partials/Header";
import { Footer } from "../partials/Footer";
import { Banner } from "./Banner";

import '../Css/style.css'
import '../Css/board.css'

export function LandingPage(){
    return(
        <div>
            <Header/>
            <Banner />
            <Footer/>
        </div>
    )
}