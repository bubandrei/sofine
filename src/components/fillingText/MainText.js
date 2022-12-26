import React from "react";
import './MainText.css'


const MainText = ({isWhite}) => {
    return (
        <>
            <div className={`mainTextContainer ${isWhite?'isWhiteColor': 'isBlackColor'}`}>
                <div className="svgFill">
                    <svg height="100" width="100">
                        <line x1="00" y1="100" x2="100" y2="0"
                            stroke={isWhite? "white": "black"} stroke-width="1" />
                        <circle cx="25" cy="63" r="20" stroke={isWhite? "white": "black"} stroke-width="2" fill="transparent" />
                        <text x='40' y='83' fontSize='80' stroke={isWhite? "white": "black"} fill={isWhite? "white": "black"}>1.</text>
                    </svg>
                </div>
                <div className="svgFillSmall">
                    <svg height="50" width="50">
                        <line x1="00" y1="50" x2="50" y2="0"
                            stroke={isWhite? "white": "black"} stroke-width="1" />
                        <circle cx="12" cy="31" r="10" stroke={isWhite? "white": "black"} stroke-width="2" fill="transparent" />
                        <text x='20' y='41' fontSize='40' stroke={isWhite? "white": "black"} fill={isWhite? "white": "black"}>1.</text>
                    </svg>
                </div>
                <div className="textContainer">
                    {isWhite?    
                    <><div className="secondString">Bez kompromisu.</div>
                    <div className="secondString">Idealnie takie jak lubisz.</div></>  : 
                    <><div className="secondString">Wszystko dla was.</div>
                    <div className="secondString">Idealnie takie jak lubisz.</div></> }
    
                    <div className="callName">KEUNE <span className="textContainerBold">DESIGN</span></div>
                </div>
                <div className="containerMainToggle">
                    <div className="lineMainToggle"></div>
                    <div className="arrowMainToggle"><span className="arrowStyle">&gt;</span></div>
                </div>
            </div>
        </>
    )
}

export default MainText