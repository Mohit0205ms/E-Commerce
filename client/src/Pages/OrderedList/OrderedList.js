import "./OrderedList.css";
import OrderCart from "../../Components/OrderCart/OrderCart";
export default function OrderList(){
    return(
        <div className="OrderedList-Container">
            <OrderCart/>
            <OrderCart/>
            <OrderCart/>
            <OrderCart/>
            <OrderCart/>
            <OrderCart/>
            <OrderCart/>
            <OrderCart/>
        </div>
    )
}