import "./Products.css";
import Card from "../Card/Card";
import axios from "axios";
// import { Tshirts } from "../../Data/Products";
// import { Jeans } from "../../Data/Products";
// import { Lower } from "../../Data/Products";
// import { Shirts } from "../../Data/Products";
import { useEffect, useState } from "react";

export default function Products(){
    const [data,setData] = useState([]);
    useEffect( ()=>{
        axios.post("/posts/delete")
        .then(res=>setData(res.data))
        .catch(err=>console.log(err));
    },[])
    return(
        <div className="Products-Container">
            <div className="Tshirt-Container">
                <a href="/shop" ><span className="Tshirt-heading">T-Shirts</span></a>
                <div className="Tshirt-product-list">
                    {data.map((Tshirt)=>{
                        if(Tshirt.type==="T-shirt"){
                            return <Card id={Tshirt._id} name={Tshirt.name} img={Tshirt.img} price={Tshirt.price} />
                        }
                    })}
                </div>
            </div>
            <div className="Shirt-Container">
                <a href="/shop" ><span className="Shirt-heading">Shirts</span></a>
                <div className="Shirt-product-list">
                {data.map((shirt)=>{
                        if(shirt.type==="shirt"){
                            return <Card id={shirt._id} name={shirt.name} img={shirt.img} price={shirt.price} />
                        }
                    })}
                </div>
            </div>
            <div className="Jeans-Container">
                <a href="/shop" ><span className="Jeans-heading">Jeans</span></a>
                <div className="Jeans-product-list">
                    {data.map((jean)=>{
                        if(jean.type==="jeans"){
                            return <Card id={jean._id} name={jean.name} img={jean.img} price={jean.price} />
                        }
                    })}
                </div>
            </div>
            <div className="Lower-Container">
                <a href="/shop" ><span className="Lower-heading">Lower</span></a>
                <div className="Lower-product-list">
                    {data.map((lower)=>{
                        if(lower.type==="Lower"){
                            return <Card id={lower._id} name={lower.name} img={lower.img} price={lower.price} />
                        }
                    })}
                </div>
            </div>
        </div>
    )
}