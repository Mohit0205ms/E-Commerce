import "./Shop.css";
import axios from "axios";
import Filter from "../../Components/Filter/Filter";
import Card from "../../Components/Card/Card";
import { Products } from "../../Data/Products";
import { useEffect, useState } from "react";

export default function Shop(){
    const [filter,setFilter]=useState("");
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.post("/posts/delete")
        .then((res)=>{
            console.log(res.data);
            setData(res.data)
        })
        .catch(err=>console.log(err));
    })
    const HandleChild=(value)=>{
        setFilter(value);
    }
    return(
        <div className="Shop-Container">
            <Filter find={HandleChild} />
            <div className="Shoping-Product-list-container">
                {data.map((product)=>{
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