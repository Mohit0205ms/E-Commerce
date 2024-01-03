import "./CartList.css";
import { useEffect,useState } from "react";
import CartCard from "../../Components/CartCard/CartCard";
import axios from "axios";

export default function CartList(){
    const [user,setUser]=useState(null);
    const [List,setList]=useState([]);
    const [data,setData]=useState([]);

    useEffect(()=>{
        if(localStorage.getItem('user')){
            setUser(JSON.parse(localStorage.getItem('user')));
        }
    },[])
    useEffect(()=>{
        if(user){
            const CartList = async() =>{
                try{
                    const res = await axios.post("/auth/login",{email:user.email,password:user.password});
                    setList(res.data.cart);
                }
                catch(err){
                    console.log(err);
                }
            }
            CartList();
            const interval = setInterval(()=>{
                CartList();
            },1000);
            return ()=>clearInterval(interval);
        }
    },[user])
    useEffect(()=>{
        if (List.length > 0) {
            const add = async () => {
                try {
                    const promises = List.map((ele) =>
                        axios.post("/posts/product", { id: ele })
                    );
                    const results = await Promise.all(promises);
                    const extractedData = results.map((result) => result.data);
                    setData(extractedData);
                } catch (err) {
                    console.log(err);
                }
            };
            add();
        }
    },[List])
    return(
        <div className="CartList-Container">
            {data.map((ele)=>{
                return <CartCard name={ele.name} price={ele.price} img={ele.img} />
            })}
        </div>
    )
}
