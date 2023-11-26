import "./Register.css";

export default function Register(){
    return(
        <div className="Register-Container">
            <div className="Register-form-Container">
                <span className="Register-heading">Register</span>
                <form>
                    <input className="" type="" placeholder="" name="name" />
                    <input className="" type="" placeholder="" name="email" />
                    <input className="" type="" placeholder="" name="password" />
                    <input className="" type="" placeholder="" name="confirmPassword" />
                    <input className="" type="" placeholder="" name="phoneNo" />
                    <button className="">Create User</button>
                </form>
            </div>
        </div>
    )
}