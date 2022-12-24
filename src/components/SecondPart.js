import React from "react";
import './SecondPart.css';
import care from '../assets/01_care.jpg'
import SecondText from "./fillingText/SecondText";
import Name from "./fillingText/Name";
import ToggleSerie from "./ToggleSerie";

const SecondPart = ({listOfName}) => {
    console.log(listOfName)

    return (
        <>
            <div className="second-container">
                <div className="inner-Second-Container">
                    <div className="second-title">
                        <SecondText name={listOfName.marki}/>
                    </div>
                    <div className="second-row-img">
                        <img src={care} className="second-img"></img>
                        <Name name={listOfName.care}/>
                        <ToggleSerie/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SecondPart