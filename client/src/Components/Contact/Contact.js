import "./Contact.css";

export default function Contact() {
    return (
        <div className="Contact-Container">
            <div className="Contact-header-section">
                <span className="Contact-heading-heading">Men's Fashion</span>
                <span className="Contact-heading-info">Top Deals on Top Brands upto 40% off Go and Buy know</span>
                <div className="Contact-heading-icons">
                    <img src="assets/images/linkedin.png" alt="" />
                    <img src="assets/images/twitter.png" alt="" />
                    <img src="assets/images/youtube.png" alt="" />
                </div>
            </div>
            <div className="Contact-Products-section">
                <ul className="Contact-Product-project">
                    <li>Project</li>
                    <li>Home</li>
                    <li>Rooms</li>
                    <li>Flats</li>
                    <li>Apartments</li>
                </ul>
                <ul className="Contact-Product-Company">
                    <li>Company</li>
                    <li>Objective</li>
                    <li>Capital</li>
                    <li>Security</li>
                    <li>selling</li>
                </ul>
                <ul className="Contact-Product-Movement">
                    <li>Movement</li>
                    <li>Movement</li>
                    <li>Support Us</li>
                    <li>Pricing</li>
                    <li>Renting</li>
                </ul>
            </div>
        </div>
    )
}