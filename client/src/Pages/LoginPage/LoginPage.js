import "./LoginPage.css";

export default function LoginPage(){
    return(
        <div className="LoginPage-Container">
            <div className="LoginPage-info-Container">
                <span className="LoginPage-heading">Login Page</span>
                <form className="LoginPage-form">
                    <input className="LoginPage-email" type="text" placeholder="Enter the user email" name="email" />
                    <input className="LoginPage-password" type="password" placeholder="Password" name="password" />
                    <button className="LoginPage-Login-button">Login</button>
                </form>
                <button className="LoginPage-Create-Account">Create new account</button>
            </div>
        </div>
    )
}