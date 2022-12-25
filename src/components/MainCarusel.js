import React, { cloneElement, useEffect, useState, Children } from "react";
import './MainCarusel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const PAGE_WIDTH = 100;

const MainCarusel = ({ children }) => {

    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;
            console.log(newOffset)
            return Math.min(newOffset, 0);
        })
    }

    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH;
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
            return Math.max(newOffset,maxOffset);
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '500px',
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
            <FaChevronLeft className="arrow" onClick={() => handleLeftArrowClick()} />
            <div className="window">
                <div className="all-pages-container"
                    style={{
                        transform: `translateX(${offset}%)`,
                    }}>{pages}</div>
            </div>
            <FaChevronRight className="arrow" onClick={() => handleRightArrowClick()} />
        </div>
    )
}
export default MainCarusel