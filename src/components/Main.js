import React from "react";
import mainBG from '../assets/slide1-big.jpg'
import './Main.css'


const Main = () => {
    return (
        <>
            <div className="img-fluid">
                <img src={mainBG} className='img-main'></img>
            </div>
        </>
    )
}

export default Main