import React, { useState } from "react";
import './Navbar.css';
import { naveItems } from "./storeNav.js";
import logoKEUNEBlack from '../assets/logo_KEUNE.svg';
import logoKEUNEWhite from '../assets/logo_KEUNE_WHITE.svg';
import fb_WHITE from '../assets/fb_WHITE.svg';
import twitter_WHITE from '../assets/twitter_WHITE.svg';
import yt_WHITE from '../assets/yt_WHITE.svg';
import insta_WHITE from '../assets/insta_WHITE.svg'
import fb_BLACK from '../assets/fb.svg';
import twitter_BLACK from '../assets/twitter.svg';
import yt_BLACK from '../assets/yt.svg';
import insta_BLACK from '../assets/insta.svg';
import burger from '../assets/burger.png';
import Dropmenu from "./Dropmenu";

const Navbar = ({ isWhite }) => {
    const [dropdown, setDropDown] = useState(false);

    return (
        <>
            <div className="nav-container">
                <nav className={dropdown ? "navbar colorGray" : "navbar"}>
                    <div className="navbar-logo">
                        <img src={isWhite ? logoKEUNEWhite : logoKEUNEBlack}></img>
                    </div>
                    <ul className='nav-menu'>
                        {naveItems.map((item) => {
                            if (item.title === 'Produkty') {
                                return (
                                    <li key={item.id}
                                    className='nav-items'
                                        onMouseEnter={() => setDropDown(true)}
                                        onMouseLeave={() => setDropDown(false)}
                                        >
                                        <a href="/" className={isWhite ? "nav-links" : "nav-links-black"} >{item.title}</a>
                                        {dropdown && <Dropmenu />}
                                    </li>
                                )
                            }
                            return <li key={item.id} className='nav-items'>
                                <a href="/" className={isWhite ? "nav-links" : "nav-links-black"}>{item.title}</a>
                            </li>
                        })}
                        <li>
                            <div href="/" className="nav-links row-Item">
                                <div className="firstRowIcon">
                                    <a href="http://www.facebook.com"><img className="styleImg" src={isWhite ? fb_WHITE : fb_BLACK}></img></a>
                                </div>
                                <div className="secondRowIcon">
                                    <a href="http://www.twitter.com" ><img className="styleImg" src={isWhite ? twitter_WHITE : twitter_BLACK}></img></a>
                                    <a href="http://www.youtube.com" ><img className="styleImg" src={isWhite ? yt_WHITE : yt_BLACK}></img></a>
                                </div>
                                <div className="thirdRowItem">
                                    <a href="http://www.instagram.com" ><img className="styleImg" src={isWhite ? insta_WHITE : insta_BLACK}></img></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="hamburger">
                        <div className="hamburger-line"><img src={burger}></img></div>
                    </div>
                </nav>


            </div>
        </>
    )
}

export default Navbar