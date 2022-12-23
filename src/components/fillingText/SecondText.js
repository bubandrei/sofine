import React from "react";
import './SecondText.css'


const SecondText = () => {
    return (
        <>
            <div className="secondTextContainer">
                <div className="svgFill">
                    <svg height="100" width="100">
                        <line x1="00" y1="100" x2="100" y2="0"
                            stroke="black" stroke-width="1" />
                        <circle cx="25" cy="63" r="20" stroke="black" stroke-width="3" fill="transparent" />
                        <text x='40' y='83' fontSize='80' stroke="black" fill="black">2.</text>
                    </svg>
                </div>
                <div className="textContainer">
                    <div className="callName">
                        <div>MARKI</div>
                        <div>KEUNE</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondText