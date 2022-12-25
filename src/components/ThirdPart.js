import React from "react";
import './ThirdPart.css';
import design from '../assets/02_design.jpg';
import blend from '../assets/03_blend_1.jpg';
import Name from "./fillingText/Name";
import ToggleSerie from "./ToggleSerie";
import NameToggleColumn from "./fillingText/NameToggleColumn";

const ThirdPart = ({listOfName}) => {

    return (
        <>
            <div className="third-container">
                <div className="inner-Third-Container">
                    <div className="third-title third-row-effect-op">
                        <img src={design} className="third-img"></img>
                        <NameToggleColumn name={listOfName.design}/>
                    </div>
                    <div className="third-row-img third-row-effect">
                        <img src={blend} className="third-img"></img>
                        <Name name={listOfName.blend}/>
                        <ToggleSerie/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ThirdPart