import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./Register.css";

export default function Register(){
    const UserName = useRef();
    const UserEmail = useRef();
    const UserPassword = useRef();
    const confirmPassword = useRef();
    const UserPhone = useRef();
    const Navigate = useNavigate();

    const handleSubmit= async (e)=>{
        e.preventDefault();
        if(UserPassword.current.value!==confirmPassword.current.value){
            Navigate("/register");
        }
        else{
            const user={
                name:UserName.current.value,
                email:UserEmail.current.value,
                password:UserPassword.current.value,
                phone:UserPhone.current.value
            }
            try{
                await axios.post("/auth/register",user);
                Navigate("/login");
            }
            catch(e){
                console.log(e+ " unable to upload data or unable to push data on data base");
            }
        }
    }
    return(
        <div className="Register-Container">
            <div className="Register-form-Container">
                <span className="Register-heading">Register</span>
                <form className="Register-form" onSubmit={handleSubmit} >
                    <input className="Register-name" type="text" placeholder="Enter User Name" ref={UserName} name="name" />
                    <input className=" Register-email" type="email" placeholder="Enter user email" ref={UserEmail} name="email" />
                    <input className="Register-password" type="password" placeholder="Enter Password" ref={UserPassword} name="password" />
                    <input className="Register-confirmPassword" type="password" placeholder="Confirm Password" ref={confirmPassword} name="confirmPassword" />
                    <input className="Register-phoneNo" type="text" placeholder="Enter Phone no" ref={UserPhone} name="phone" />
                    <button className="Register-button" type="submit" >Create User</button>
                </form>
                <a href="/login" className="Register-form-login">Login</a>
            </div>
        </div>
    )
}