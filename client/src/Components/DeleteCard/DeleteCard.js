import { useEffect, useState } from "react";
import axios from "axios";
import "./DeleteCard.css";

export default function DeleteCard(props){
    //const [Id,setId] = useState(props.id);
    const id = props.id;
    const handleDelete = async () => {
        try{
            await axios.delete(`/posts/delete/${id}`);
            try{
                await axios.post("/delete",{img : props.img});
                console.log("deleted successfully");
                window.location.reload();
            }catch(err){
                console.log(err);
            }
        }
        catch(err){
            console.log(err);
        }
    }
    return(
        <div className="DeleteCard-Container">
            {/* <img className="DeleteCard-Image" src="/assets/Tshirt/Tshirt1.jpg" alt=""/> */}
            <img className="DeleteCard-Image" src={"http://localhost:8000/images/"+props.img[0]} alt=""/>
            <div className="DeleteCard-Information-Manipulation-section">
                <span className="DeleteCard-Heading">{props.name}</span>
                <span className="DeleteCard-Price">Rs:- {props.price}</span>
                <div className="DeleteCard-Manipulation-section" onClick={handleDelete}>
                    <img src="/assets/images/trash.png" alt=""/>
                </div>
            </div>
        </div>
    )
}