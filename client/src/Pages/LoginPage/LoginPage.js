import "./LoginPage.css";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
    const email = useRef();
    const password = useRef();
    const Navigate = useNavigate();

    const handleSubmit= async(e)=>{
        e.preventDefault();
        const user={
            email:email.current.value,
            password:password.current.value
        }
        try{
            if(email.current.value==="admin0205@gmail.com" && password.current.value==="mohit#chitkara@"){
                Navigate("/admin");
            }
            else{
                const res=await axios.post("/auth/login",user);
                console.log(res.data);
                localStorage.setItem('user',JSON.stringify(res.data));
                window.location.reload();
            }
        }catch(e){
            console.log("not able to login "+e);
        }
    }

    return(
        <div className="LoginPage-Container">
            <div className="LoginPage-info-Container">
                <span className="LoginPage-heading">Login Page</span>
                <form className="LoginPage-form" onSubmit={handleSubmit}>
                    <input className="LoginPage-email" type="text" placeholder="Enter the user email" name="email" ref={email} />
                    <input className="LoginPage-password" type="password" placeholder="Password" name="password" ref={password} />
                    <button className="LoginPage-Login-button" type="submit">Login</button>
                </form>
                <button className="LoginPage-Create-Account"><a href="/register">Create new account</a></button>
            </div>
        </div>
    )
}