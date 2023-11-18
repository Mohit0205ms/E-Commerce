import "./TopCard.css";

export default function TopCard(props) {
    const divStyle1={
        backgroundImage:`url(${props.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    return (
        <div className="Project-Card-Container" style={divStyle1}>
            <div className="project-Card-empty"></div>
            <div className="Project-Card-Info-Container">
                <span className="Project-Card-heading">{props.heading}</span>
                <div className="Project-Card-Info">
                    {props.desc}
                    <button className="Project-Card-button">Collection -{'>'}</button>
                </div>
            </div>
        </div>
    )
}

TopCard.defaultProps={
    imageUrl:"assets/product/product-1.jpg",
    heading:"Shoes",
    desc:"Click to check top deals on this"
}