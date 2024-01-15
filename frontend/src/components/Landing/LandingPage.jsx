import { Header } from "../partials/Header";
import { Footer } from "../partials/Footer";
import { Banner } from "./Banner";

export function LandingPage(){
    return(
        <div>
            <Header></Header>
            <Banner />
            <Footer></Footer>
        </div>
    )
}