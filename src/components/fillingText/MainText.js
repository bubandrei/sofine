import React from "react";
import './MainText.css'


const MainText = () => {
    return (
        <>
            <div className="mainTextContainer">
                <div className="svgFill">
                    <svg height="100" width="100">
                        <line x1="00" y1="100" x2="100" y2="0"
                            stroke="white" stroke-width="1" />
                        <circle cx="25" cy="63" r="20" stroke="white" stroke-width="3" fill="transparent" />
                        <text x='40' y='83' fontSize='80' stroke="white" fill="white">1.</text>
                    </svg>
                </div>
                <div className="textContainer">
                    <div className="secondString">Bez kompromisu.</div>
                    <div className="secondString">Idealnie takie jak lubisz.</div>
                    <div className="callName">KEUNE <span className="textContainerBold">DESIGN</span></div>
                </div>
                <div>------------</div>
            </div>
        </>
    )
}

export default MainText