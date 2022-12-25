import React from 'react';
import './Carusel.css';
import MainCarusel from './MainCarusel';
import storeImg from "./storeImg";

const Carusel = ({toggle, isWhite}) => {
    return (
        <MainCarusel toggle={toggle} isWhite={isWhite}>
            <div className='item item-1'><img className='imgForCarusel' src={storeImg.slide1}></img></div>
            <div className='item item-2'><img className='imgForCarusel' src={storeImg.slide2}></img></div>
        </MainCarusel>
    );
}

export default Carusel;