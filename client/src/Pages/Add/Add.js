import "./Add.css";
import { useRef, useState } from "react";
import axios from "axios";

export default function Add() {
    const itemName = useRef();
    const itemDesc = useRef();
    const itemType = useRef();
    const [files, setFiles] = useState([]); // Changed state variable name to 'files'
    const itemPrice = useRef();
    const itemQuantity = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const arr = [];
        files.forEach((f)=>{
            arr.push(f.name);
        })
        console.log(arr);
        const Item = {
            name: itemName.current.value,
            desc: itemDesc.current.value,
            type: itemType.current.value,
            images: arr, // Changed 'image' to 'images'
            price: itemPrice.current.value,
            quantity: itemQuantity.current.value,
        };
        const fd = new FormData();
        files.forEach((f) => {
            fd.append('images', f);
        });
        try {
            await axios.post("/upload", fd);
        } catch (err) {
            console.log(err);
        }
        try{
            await axios.post("/posts",Item);
            window.location.reload();
        }
        catch(err){
            console.log(err);
        }
    };

    const handleFileChange = (e) => {
        // Convert the FileList object to an array and set it in state
        const selectedFiles = Array.from(e.target.files);
        setFiles(selectedFiles);
    };

    return (
        <div className="Add-Product-Container">
            <h1 className="Add-product-heading">Add Details about img</h1>
            <form
                className="Add-Product-Form"
                action="/api/posts"
                method="POST"
                encType="multipart/form-data"
            >
                <input type="text" placeholder="enter name" className="Add-product-name" ref={itemName} /><br />
                <textarea
                    type="text"
                    placeholder="Enter description about the product"
                    className="Add-product-desc"
                    rows="5"
                    cols="52"
                    ref={itemDesc}
                ></textarea><br />
                <select name="type" ref={itemType}>
                    <option>T-shirt</option>
                    <option>shirt</option>
                    <option>jeans</option>
                    <option>Lower</option>
                </select><br />
                <input type="file" multiple onChange={handleFileChange} name="images" /><br />
                <input type="number" ref={itemPrice} placeholder="enter price" className="Add-product-price" /><br />
                <input type="number" ref={itemQuantity} placeholder="enter Quantity" className="Add-product-Quantity" /><br />
                <input type="submit" onClick={handleSubmit} className="Add-product-button" />
            </form>
        </div>
    );
}
