import "./Products.css";
import Card from "../Card/Card";
import { Tshirts } from "../../Data/Products";
import { Jeans } from "../../Data/Products";
import { Lower } from "../../Data/Products";
import { Shirts } from "../../Data/Products";

export default function Products(){
    return(
        <div className="Products-Container">
            <div className="Tshirt-Container">
                <a href="/shop" ><span className="Tshirt-heading">T-Shirts</span></a>
                <div className="Tshirt-product-list">
                    {Tshirts.map((Tshirt)=>{
                        return <Card name={Tshirt.name} img={Tshirt.img} price={Tshirt.price} />
                    })}
                </div>
            </div>
            <div className="Shirt-Container">
                <a href="/shop" ><span className="Shirt-heading">Shirts</span></a>
                <div className="Shirt-product-list">
                {Shirts.map((shirt)=>{
                        return <Card name={shirt.name} img={shirt.img} price={shirt.price} />
                    })}
                </div>
            </div>
            <div className="Jeans-Container">
                <a href="/shop" ><span className="Jeans-heading">Jeans</span></a>
                <div className="Jeans-product-list">
                    {Jeans.map((jean)=>{
                        return <Card name={jean.name} img={jean.img} price={jean.price} />
                    })}
                </div>
            </div>
            <div className="Lower-Container">
                <a href="/shop" ><span className="Lower-heading">Lower</span></a>
                <div className="Lower-product-list">
                    {Lower.map((lower)=>{
                        return <Card name={lower.name} img={lower.img} price={lower.price} />
                    })}
                </div>
            </div>
        </div>
    )
}