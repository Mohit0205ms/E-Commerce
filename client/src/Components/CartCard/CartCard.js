import { useState } from "react";
import "./CartCard.css";

export default function CartCard(props){
    const [qnty,setQnty]=useState(1);
    const handlingPlus =()=>{
        setQnty(qnty+1);
    }
    const handlingMinus=()=>{
        if(qnty>=2){
            setQnty(qnty-1);
        }
    }
    return(
        <div className="CartCard-Container">
            {/* <img className="CartCard-Image" src="assets/Tshirt/Tshirt1.jpg" alt=""/> */}
            <img className="CartCard-Image" src={"http://localhost:8000/images/"+props.img[0]} alt=""/>
            <div className="CartCard-Information-Manipulation-section">
                <span className="CartCard-Heading">{props.name}</span>
                <span className="CartCard-Price">Rs:- {props.price} </span>
                <div className="CartCard-Manipulation-section">
                    <img src="assets/images/plus.png" alt="" onClick={handlingPlus} />
                    <span className="CartCard-quantity">Qnty:-{qnty}</span>
                    <img src="assets/images/minus.png" alt="" onClick={handlingMinus} />
                    <img src="assets/images/trash.png" alt=""/>
                </div>
            </div>
        </div>
    )
}