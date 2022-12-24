import React from "react";
import './Navbar.css';
import logoKEUNEBlack from '../assets/logo_KEUNE.svg';
import logoKEUNEWhite from '../assets/logo_KEUNE_WHITE.svg';
import fb_WHITE from '../assets/fb_WHITE.svg';
import twitter_WHITE from '../assets/twitter_WHITE.svg';
import yt_WHITE from '../assets/yt_WHITE.svg';
import insta_WHITE from '../assets/insta_WHITE.svg'
import fb_BLACK from '../assets/fb.svg';
import twitter_BLACK from '../assets/twitter.svg';
import yt_BLACK from '../assets/yt.svg';
import insta_BLACK from '../assets/insta.svg'

const Navbar = ({ isWhite }) => {
    return (
        <>
            <div className="nav-container">
                <nav className="navbar">
                    <div className="navbar-logo">
                        <img src={isWhite ? logoKEUNEWhite : logoKEUNEBlack}></img>
                    </div>
                    <ul className='nav-menu'>
                        <li>
                            <a href="/" className={isWhite ? "nav-links" : "nav-links-black"}>Nowosci</a>
                        </li>
                        <li>
                            <a href="/" className={isWhite ? "nav-links" : "nav-links-black"}>Produkty</a>
                        </li>
                        <li>
                            <a href="/" className={isWhite ? "nav-links" : "nav-links-black"}>Trendy</a>
                        </li>
                        <li>
                            <a href="/" className={isWhite ? "nav-links" : "nav-links-black"}>O firmie</a>
                        </li>
                        <li>
                            <a href="/" className={isWhite ? "nav-links" : "nav-links-black"}>Salony</a>
                        </li>
                        <li>
                            <a href="/" className={isWhite ? "nav-links" : "nav-links-black"}>Dystrybutorzy</a>
                        </li>
                        <li>
                            <a href="/" className={isWhite ? "nav-links" : "nav-links-black"}>Kontakt</a>
                        </li>
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
                    {/* <div className="hamburger" onClick={handleClick}>
                        {click ? (<FaTimes size={20} style={{ color: '#333' }} />) : (<FaBars size={20} style={{ color: '#333' }} />)}

                    </div> */}


                </nav>


            </div>
        </>
    )
}

export default Navbar