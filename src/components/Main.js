import React, { useState } from "react";
import './Main.css';
import MainText from "./fillingText/MainText";
import Navbar from "./Navbar";
import Carusel from "./Carusel";



const Main = () => {
    const [isMainImg, setMainImg] = useState(false);
    const toggle = (value) => {
        setMainImg(value)
    }
    return (
        <>
            <div className="main-container">
                <Navbar isWhite={isMainImg} />
                <Carusel toggle={toggle} isWhite={isMainImg}/>
                <MainText isWhite={isMainImg} />
            </div>

        </>
    )
}

export default Main