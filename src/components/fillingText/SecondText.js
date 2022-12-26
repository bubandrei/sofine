import React from "react";
import './SecondText.css'




const SecondText = ({name}) => {
    return (
        <>
            <div className="secondTextContainer">
                <div className="svgFillSecond">
                    <svg height="100" width="100">
                        <line x1="00" y1="100" x2="100" y2="0"
                            stroke="black" stroke-width="1" />
                        <circle cx="25" cy="63" r="20" stroke="black" stroke-width="2" fill="transparent" />
                        <text x='40' y='83' fontSize='80' stroke="black" fill="black">2.</text>
                    </svg>
                </div>
                <div className="svgFillSecondSmall">
                    <svg height="50" width="50">
                        <line x1="00" y1="50" x2="50" y2="0"
                            stroke="black" stroke-width="1" />
                        <circle cx="12" cy="31" r="10" stroke="black" stroke-width="2" fill="transparent" />
                        <text x='20' y='41' fontSize='40' stroke="black" fill="black">2.</text>
                    </svg>
                </div>
                <div className="callTextContainer">
                    <div className="secondCallName">
                        <div>{name}</div>
                        <div>KEUNE</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondText