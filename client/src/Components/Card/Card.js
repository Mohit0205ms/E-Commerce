import "./Card.css";
import {useState} from "react";

export default function Card(props){
    const [userId,setUserId]=useState(props.id);
    const HandleRedirect=()=>{
        window.location.href=`/productdetails`;
    }
    return(
        <div className="Card-Container" onClick={HandleRedirect}>
            <img className="Card-image" src={`${props.img}`} alt="image"/>
            <div className="Card-Info-Container">
                <span className="Card-heading">{props.name}</span>
                <span className="Card-prcie">Rs:- {props.price}</span>
                <div className="Card-button">
                    <button className=" Card-Buy-know">Buy Know</button>
                    <button className=" Card-Buy-Add-to-Cart">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

Card.defaultProps={
    img:"assets/product/product-1.jpg",
    name:"Shoes",
    price:"559"
}