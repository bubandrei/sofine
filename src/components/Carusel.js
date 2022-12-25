import React from 'react';
import './Carusel.css';
import MainCarusel from './MainCarusel';

const Carusel = () => {
    return (
        <MainCarusel>
            <div className='item item-1'>Item 1</div>
            <div className='item item-2'>Item 2</div>
            <div className='item item-3'>Item 3</div>
        </MainCarusel>
    );
}

export default Carusel;