import React from "react";
import './ThirdPart.css';
import design from '../assets/02_design.jpg';
import blend from '../assets/03_blend_1.jpg';

const ThirdPart = () => {

    return (
        <>
            <div className="third-container">
                <div className="inner-Third-Container">
                    <div className="third-title">
                        <img src={design} className="third-img"></img>
                    </div>
                    <div className="third-row-img">
                        <img src={blend} className="third-img"></img>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ThirdPart