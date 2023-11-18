import "./Landing.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import TopDeals from "../../Components/TopDeals/TopDeals";
import Products from "../../Components/Products/Products";
import Contact from "../../Components/Contact/Contact";

export default function Landing(){
    return(
        <>
            <Header/>
            <TopDeals/>
            <Products/>
            <Contact/>
        </>
    )
}