import "./OrderCart.css";

export default function OrderCart(){
    return(
        <div className="OrderCart-Container">
            <img className="OrderCart-Image" src="assets/Tshirt/Tshirt1.jpg" alt=""/>
            <div className="OrderCart-Information-Manipulation-section">
                <span className="OrderCart-Heading">T-shirt</span>
                <span className="OrderCart-Price">Rs:- 1000</span>
                <div className="OrderCart-Manipulation-section">
                    <span className="OrderCart-quantity">Qnty:- 2</span>
                    <img src="assets/images/trash.png" alt=""/>
                </div>
            </div>
        </div>
    )
}