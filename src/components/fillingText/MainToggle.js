import React, { useState } from "react";
import './MainToggle.css'


const MainToggle = ({toggle}) => {
    return (
        <>
            <div className="mainToggle">
                <div className="toggleLeft toggle" onClick={() => { toggle() }}>&lt;</div>
                <div className="toggleRight toggle" onClick={() => { toggle() }}>&gt;</div>
                <div>handellToggle</div>
            </div>
        </>
    )
}

export default MainToggle