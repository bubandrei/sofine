import React from "react";
import './FourthPart.css';
import koloryzacja from '../assets/04_koloryzacja.jpg';
import pure from '../assets/05_so_pure.jpg';
import Name from "./fillingText/Name";
import ToggleSerie from "./ToggleSerie";
import NameToggleColumn from "./fillingText/NameToggleColumn";

const FourthPart = () => {

    return (
        <>
            <div className="fourth-container">
                <div className="inner-Fourth-Container">
                    <div className="fourth-title">
                        <img src={koloryzacja} className="third-img"></img>
                        <Name/>
                        <ToggleSerie/>
                    </div>
                    <div className="fourth-row-img">
                        <img src={pure} className="fourth-img"></img>
                        <NameToggleColumn/>
                        {/* <ToggleSerie/> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default FourthPart