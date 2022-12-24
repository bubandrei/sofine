import React, { useState } from "react";
import './MainToggle.css'


const MainToggle = ({ toggle, isWhite }) => {
    return (
        <>
            <div className={`mainToggle ${isWhite ? 'isWhiteColor' : 'isBlackColor'}`}>
                <div className="toggleLeft toggle" onClick={() => { toggle() }}>&lt;</div>
                <div className="toggleRight toggle" onClick={() => { toggle() }}>&gt;</div>
                <div>handellToggle</div>
            </div>
        </>
    )
}

export default MainToggle