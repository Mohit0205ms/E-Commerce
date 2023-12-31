
import { useEffect, useState } from "react";
import "./Navbar.css";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import axios from "axios";

function Navbar() {
    const [clicked, setClicked] = useState(false);
    const [user,setUser]=useState(null);
    const [size,setSize]=useState(0);
    useEffect(()=>{
        if(localStorage.getItem('user')){
            setUser(JSON.parse(localStorage.getItem('user')));
        }
    },[])
    useEffect(()=>{
        if(user){
            const CartSize = async() =>{
                try{
                    const res = await axios.post("/auth/login",{email:user.email,password:user.password});
                    setSize(res.data.cart.length);
                }
                catch(err){
                    console.log(err);
                }
            }
            CartSize();
            const interval = setInterval(()=>{
                CartSize();
            },1000);
            return ()=>clearInterval(interval);
        }
    },[user])
    
    const Toggle = () => {
        setClicked((prevInstance) => !prevInstance);
    }
    // Handling Search bar request
    const HandlePage=(e)=>{
        const arr=["shop","jeans","shirt","tshirt","shoes","product"];
        if(e.key==="Enter"){
            let isvisited=false;
            let value=e.target.value;
            value=value.toLowerCase();
            for(let i=0;i<5;i++){
                if(value===arr[i]){
                    isvisited=true;
                    window.location.href="/shop";
                    break;
                }
            } 
            if(isvisited===false){
                window.location.href="/error";
            }
        }
    }
    // handling cart click
    const handleCart=()=>{
        window.location.href="/cart";
    }
    return (
        <div className="Navbar-container">
            <span className="Navbar-heading">Men's Fashion</span>
            <div className="Navbar-Toolbar" >
                <div id="Navbar-Toolbar"className={clicked ? "Navbar-Menu-Container active" : "Navbar-Menu-Container"}>
                    <ul className="Navbar-Menu-bar">
                        <li className="Navbar-Menu"><a href="/">Home</a></li>
                        <li className="Navbar-Menu"><a href="/order">Orders</a></li>
                        <li className="Navbar-Menu"><a href="/shop">Shop</a></li>
                        <li className="Navbar-Menu"><a href="/register">Sign In</a></li>
                    </ul>
                    <div className="Navbar-icons">
                        <input type="text" placeholder="search" onKeyDown={HandlePage} />
                        <div>
                            <img className="Navbar-Cart-icon" src="/assets/images/cart.png" alt="image" onClick={handleCart} />
                            <span className="Navbar-Cart-size">{size}</span>
                        </div>
                    </div>
                </div>
                <div className="Navbar-Mobile-Menu-Container" onClick={Toggle}>
                    <img className="Navbar-Mobile-Menu" src={clicked ? "assets/images/close.png" : "assets/images/navigation-bar.png"} alt="image" />
                </div>
            </div>
        </div>
    )
}
export default Navbar;