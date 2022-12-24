import React from "react";
import './Name.css'


const Name = ({name}) => {
    return (
        <>
            <div className="forName">
                <div>KEUNE</div>
                <div>{name}</div>
            </div>
        </>
    )
}

export default Name