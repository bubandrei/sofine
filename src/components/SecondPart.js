import React from "react";
import './SecondPart.css';
import care from '../assets/01_care.jpg'
import SecondText from "./fillingText/SecondText";

const SecondPart = () => {

    return (
        <>
            <div className="second-container">
                <div className="inner-Second-Container">
                    <div className="second-title">
                       <SecondText/>
                    </div>
                    <div className="second-row-img">
                    <img src={care} className="second-img"></img>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SecondPart