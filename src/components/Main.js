import React, { useState } from "react";
import './Main.css';
import MainText from "./fillingText/MainText";
import storeImg from "./storeImg";
import Navbar from "./Navbar";
import Carusel from "./Carusel";



const Main = () => {
    const [isMainImg, setMainImg] = useState(false);
    console.log(storeImg)
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