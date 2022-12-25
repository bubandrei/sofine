import React, { useState } from "react";
import './Main.css';
import MainText from "./fillingText/MainText";
import MainToggle from "./fillingText/MainToggle";
import storeImg from "./storeImg";
import Navbar from "./Navbar";
import Carusel from "./Carusel";



const Main = () => {
    const [isMainImg, setMainImg] = useState(true);
    console.log(storeImg)
    const toggle = (b) => {
        setMainImg(b)
    }
    return (
        <>
            <div className="main-container">
                <Navbar isWhite={isMainImg} />
                <Carusel toggle={toggle}/>
                {/* <div className="img-fluid">
                    <img src={isMainImg ? storeImg.slide1 : storeImg.slide2} className='img-main'></img>
                </div> */}
                <MainText isWhite={isMainImg} />
                {/* <MainToggle toggle={toggle} isWhite={isMainImg} /> */}
            </div>

        </>
    )
}

export default Main