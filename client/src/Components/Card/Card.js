import axios from "axios";
import "./Card.css";
import {useEffect, useState} from "react";

export default function Card(props){
    const [Id,setId]=useState(props.id);
    const [userId,setUserId]=useState(null);
    useEffect(()=>{
        if(localStorage.getItem('user')){
            setUserId(JSON.parse(localStorage.getItem('user')));
        }
    },[])
    const HandleRedirect=()=>{
        window.location.href=`/productdetails`;
    }
    const handleAddToCart = async() =>{
        await axios.post(`/auth/cart/${Id}`,{id:userId})
    }
    return(
        <div className="Card-Container">
            <img className="Card-image" src={"http://localhost:8000/images/"+props.img[0]} alt="image"  onClick={HandleRedirect}/>
            <div className="Card-Info-Container">
                <span className="Card-heading">{props.name}</span>
                <span className="Card-prcie">Rs:- {props.price}</span>
                <div className="Card-button">
                    <button className=" Card-Buy-know">Buy Know</button>
                    <button className=" Card-Buy-Add-to-Cart" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
