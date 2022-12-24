import React from "react";
import './NameToggleColumn.css'


const NameToggleColumn = ({name}) => {
    return (
        <>
            <div className="forNameToggleColumn">
                <div>KEUNE</div>
                <div>{name}</div>
                <div className="container-NameToggleColumn">
                    <div className="line-NameToggleColumn"></div>
                    <div className="textToggle-NameToggleColumn">ODKRYJ SERIE</div>
                    <div className="arrowToggle-NameToggleColumn">&gt;</div>
                </div>
            </div>
        </>
    )
}

export default NameToggleColumn