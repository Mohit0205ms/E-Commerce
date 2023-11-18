import { useRef } from "react";
import "./Filter.css";

export default function Filter({ find }) {
    const tshirt = useRef(null);
    const shirt = useRef(null);
    const jeans = useRef(null);
    const lower = useRef(null);


    const HandleClick = () => {
        const isTshirt = tshirt.current.checked;
        const isShirt = shirt.current.checked;
        const isJeans = jeans.current.checked;
        const isLower = lower.current.checked;
        if(isTshirt){
            return find("tshirt");
        }
        if(isShirt){
            return find("shirt");
        }
        if(isJeans){
            return find("jeans");
        }
        if(isLower){
            return find("lower");
        }
        if(!isTshirt || !isJeans || !isLower || !isShirt){
            return find("");
        }
    }

    return (
        <div className="Filter-Container">
            <span className="Filter-heading">Filters</span>
            <div className="Filter-section">
                <div className="Filter-Categories-section">
                    <span className="Filter-Categories-heading">Categories</span>
                    <div><label for="Tshirt">T-Shirt</label><input type="checkbox" name="tshirt" ref={tshirt} onClick={HandleClick} /></div>
                    <div><label for="Tshirt">Shirt</label><input type="checkbox" name="shirt" ref={shirt} onClick={HandleClick} /></div>
                    <div><label for="Tshirt">Jeans</label><input type="checkbox" name="jeans" ref={jeans} onClick={HandleClick} /></div>
                    <div><label for="Tshirt">Lower</label><input type="checkbox" name="lower" ref={lower} onClick={HandleClick} /></div>
                </div>
                <div className="Filter-Price-Section">
                    <span className="Filter-Price-heading">Price</span>
                    <div><label for="Tshirt">500-600</label><input type="checkbox" name="Tshirt" /></div>
                    <div><label for="Tshirt">600-1000</label><input type="checkbox" name="Tshirt" /></div>
                    <div><label for="Tshirt">1000-1500</label><input type="checkbox" name="Tshirt" /></div>
                    <div><label for="Tshirt">1500-2000</label><input type="checkbox" name="Tshirt" /></div>
                </div>
            </div>
        </div>
    )
}