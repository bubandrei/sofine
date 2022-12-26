import React, { useState } from "react";
import { serviceDropDown } from './serviceDropDown.js';
import './Dropmenu.css';

const Dropmenu = () => {

    const [dropDown, setDropDown] = useState(false)

    return (
        <>
            <ul className={dropDown ? "products-submenu clicked" : "products-submenu"}
                onClick={() => setDropDown(!dropDown)}
            >
                {serviceDropDown.map((item) => {
                    return (
                        <li
                            key={item.id}
                            className="products-item"
                            onClick={() => setDropDown(false)}
                        >{item.title}</li>
                    )
                })}
            </ul>
        </>
    )
}
export default Dropmenu