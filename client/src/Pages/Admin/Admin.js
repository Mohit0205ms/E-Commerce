import "./Admin.css";

export default function Admin() {
    return (
        <div className="Admin-Page-Container">
            <div className="Admin-Button-Container">
                <button className="Admin-Button"><a href="/admin/add">Add</a></button>
                <button className="Admin-Button"><a href="/admin/delete">Delete</a></button>
            </div>
        </div>
    )
}

