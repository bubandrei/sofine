import React, { cloneElement, useEffect, useState, Children } from "react";
import './MainCarusel.css';

const PAGE_WIDTH = 100;

const MainCarusel = ({ children, toggle, isWhite }) => {

    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;
            toggle(false);
            return Math.min(newOffset, 0);
        })
    }
    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH;
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
            toggle(true);
            return Math.max(newOffset, maxOffset);
        })
    }
    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        minWidth: `${PAGE_WIDTH}%`,
                        maxWidth: `${PAGE_WIDTH}%`
                    },
                })
            })
        )
    }, [])
    return (
        <div className="main-carusel-container">

            <div className="window">
                <div className="all-pages-container"
                    style={{
                        transform: `translateX(${offset}%)`,
                    }}>{pages}</div>
            </div>
            <div className={`mainToggle ${isWhite ? 'isWhiteColor' : 'isBlackColor'}`}>
                <div className="toggleLeft toggle" onClick={() => { handleLeftArrowClick() }}>&lt;</div>
                <div className="toggleRight toggle" onClick={() => { handleRightArrowClick() }}>&gt;</div>
            </div>
        </div>
    )
}
export default MainCarusel