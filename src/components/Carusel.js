import React from 'react';
import './Carusel.css';
import MainCarusel from './MainCarusel';
import storeImg from "./storeImg";

const Carusel = () => {
    return (
        <MainCarusel>
            <div className='item item-1'><img src={storeImg.slide1}></img></div>
            <div className='item item-2'><img src={storeImg.slide2}></img></div>
        </MainCarusel>
    );
}

export default Carusel;