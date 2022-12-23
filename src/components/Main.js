import React from "react";
import mainBG from '../assets/slide1-big.jpg'
import './Main.css'
import MainText from "./fillingText/MainText";


const Main = () => {
    return (
        <>
            <div className="main-container">
                <div className="img-fluid">
                    <img src={mainBG} className='img-main'></img>
                </div>
                <MainText />
            </div>

        </>
    )
}

export default Main