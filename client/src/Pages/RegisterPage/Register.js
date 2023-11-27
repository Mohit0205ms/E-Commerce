import "./Register.css";

export default function Register(){
    return(
        <div className="Register-Container">
            <div className="Register-form-Container">
                <span className="Register-heading">Register</span>
                <form className="Register-form" >
                    <input className="Register-name" type="text" placeholder="Enter User Name" name="name" />
                    <input className=" Register-email" type="email" placeholder="Enter user email" name="email" />
                    <input className="Register-password" type="password" placeholder="Enter Password" name="password" />
                    <input className="Register-confirmPassword" type="password" placeholder="Confirm Password" name="confirmPassword" />
                    <input className="Register-phoneNo" type="text" placeholder="Enter Phone no" name="phoneNo" />
                    <button className="Register-button">Create User</button>
                </form>
            </div>
        </div>
    )
}