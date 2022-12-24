import React, { useState } from "react";
import './Main.css';
import MainText from "./fillingText/MainText";
import MainToggle from "./fillingText/MainToggle";
import storeImg from "./storeImg";


const Main = () => {
    const [isMainImg, setMainImg] = useState(true);
    console.log(storeImg)
    const toggle = () => {
        setMainImg(!isMainImg)
    }

    return (
        <>
            <div className="main-container">
                <div className="img-fluid">
                    <img src={isMainImg ? storeImg.slide1 : storeImg.slide2} className='img-main'></img>
                </div>
                <MainText isBlack={isMainImg} />
                <MainToggle toggle={toggle} />
            </div>

        </>
    )
}

export default Main