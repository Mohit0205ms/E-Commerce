import "./Header.css";

export default function Header(){
    return(
        <div className="Header-Container">
            <div className="Header-Info">
                <span className="Header-Info-Heading">Fall - Winter Collections 2023</span>
                <div className="Header-Info-information-Container">
                    <span className="Header-Info-information-Container-heading">
                        Great deals on Top Brands 20% - 30% on Top Brands<br/>
                        excited price on Top Brands<br/>
                        Go and Shop know
                    </span>
                    <button className="Header-Info-button" href="/shop">Shop Know -{`>`} </button>
                </div>
            </div>
        </div>
    )
}