import "./Shop.css";
import Filter from "../../Components/Filter/Filter";
import Card from "../../Components/Card/Card";
import { Products } from "../../Data/Products";
import { useState } from "react";

export default function Shop(){
    const [filter,setFilter]=useState("");
    const HandleChild=(value)=>{
        setFilter(value);
    }
    return(
        <div className="Shop-Container">
            <Filter find={HandleChild} />
            <div className="Shoping-Product-list-container">
                {Products.map((product)=>{
                    if(filter===""){
                        return <Card name={product.name} img={product.img} price={product.price} />
                    }
                    else if(product.type===filter){
                        return <Card name={product.name} img={product.img} price={product.price} />
                    }
                })}
            </div>
        </div>
    )
}