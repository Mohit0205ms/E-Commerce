import "./Add.css";

export default function Add() {
    return (
        <div className="Add-Product-Container">
            <form className="Add-Product-Form" action="/api/posts" method="POST" enctype="multipart/form-data">
                <label>Name</label><br/>
                <input type="text" name="name" placeholder="enter name" /><br />
                <label>Description</label><br/>
                <textarea type="text" name="desc"></textarea><br />
                <select name="type">
                    <option>T-shirt</option>
                    <option>shirt</option>
                    <option>jeans</option>
                    <option>Lower</option>
                </select><br />
                <label>img</label><br/>
                <input type="file" name="image" /><br />
                <label>Price</label>
                <input type="number" name="price" placeholder="enter price" /><br />
                <input type="submit"/>
            </form>
        </div>
    )
}