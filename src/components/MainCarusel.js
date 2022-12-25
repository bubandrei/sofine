import React, { cloneElement, useEffect, useState, Children } from "react";
import './MainCarusel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const PAGE_WIDTH = 100;

const MainCarusel = ({ children, toggle, isWhite }) => {

    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;
            toggle(true);
            console.log(newOffset)
            return Math.min(newOffset, 0);
        })
    }

    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH;
            console.log(newOffset)
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
            console.log(maxOffset)
            console.log(Math.max(newOffset, maxOffset))
            toggle(false);
            return Math.max(newOffset, maxOffset);
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        // height: '500px',
                        minWidth: `${PAGE_WIDTH}%`,
                        maxWidth: `${PAGE_WIDTH}%`
                        // minWidth: `100%`,
                        // maxWidth: `100%`
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
                <div>handellToggle</div>
            </div>
            {/* <FaChevronLeft className="arrow" onClick={() => handleLeftArrowClick()} /> */}
            {/* <FaChevronRight className="arrow" onClick={() => handleRightArrowClick()} /> */}
        </div>
    )
}
export default MainCarusel