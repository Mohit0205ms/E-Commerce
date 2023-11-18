import "./ProductDetails.css";
import Card from "../../Components/Card/Card";
import Contact from "../../Components/Contact/Contact";
import { Products } from "../../Data/Products";
import { useState } from "react";

export default function ProductDetails(){
    
    const [image,setImage]=useState("assets/shop-details/thumb-1.png");
    const handleClick=(e)=>{
        setImage(e.target.src);
    }
    return(
        <div className="ProductDetails-Container">
            <div className="ProductDetails-TopContainer">
                <div className="ProductDetails-Top-Left-Section">
                    <img className="ProductDetails-Top-Left-Images image" name="thumb-1.png" add="shop-details" onClick={handleClick} src="assets/shop-details/thumb-1.png" alt="image" />
                    <img className="ProductDetails-Top-Left-Images image" name="thumb-2.png" add="shop-details" onClick={handleClick} src="assets/shop-details/thumb-2.png" alt="image" />
                    <img className="ProductDetails-Top-Left-Images image" name="thumb-3.png" file="shop-details" onClick={handleClick} src="assets/shop-details/thumb-3.png" alt="image" />
                    <img className="ProductDetails-Top-Left-Images image" name="thumb-4.png" file="shop-details" onClick={handleClick} src="assets/shop-details/thumb-4.png" alt="image" />
                </div>
                <div className="ProductDetails-Top-Right-Section">
                    <img className="ProductDetail-Final-Image" src={image} alt="" />
                </div>
            </div>
            <div className="ProductDetails-Detail-Section">
                <span className="ProductDetails-Detail-heading">T-Shirt</span>
                <span className="ProductDetails-Price">Rs:- 599</span>
                <div className="ProductDetails-Buttons-Container">
                    <button className="ProductDetails-Button">Add to Cart</button>
                    <button className="ProductDetails-Button">Buy Know</button>
                </div>
            </div>
            <div className="Tshirt-Container">
                <span className="Tshirt-heading">Related</span>
                <div className="Tshirt-product-list">
                    {Products.map((product)=>{
                        return <Card name={product.name} img={product.img} price={product.price} />
                    })}
                </div>
            </div>
            <Contact/>
        </div>
    )
}