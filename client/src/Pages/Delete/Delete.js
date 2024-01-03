import "./Delete.css";
import axios from "axios";
import DeleteCard from "../../Components/DeleteCard/DeleteCard";
import { useEffect, useState } from "react";

export default function Delete(){
    const [product,setProduct] = useState([]);

    useEffect(()=>{
        axios.post("/posts/delete")
        .then(res => setProduct(res.data))
        .catch(err => console.log(err));
    },[])

    return(
        <div className="Delete-Section">
            {product.map((data)=>{
                return <DeleteCard id={data._id} name={data.name} price={data.price} img={data.img} />
            })}
        </div>
    )
}