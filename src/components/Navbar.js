import React from "react";
import './Navbar.css';
import logoKEUNE from '../assets/logo_KEUNE.svg';
import logoKEUNEWhite from '../assets/logo_KEUNE_WHITE.svg';
import fb_WHITE from '../assets/fb_WHITE.svg';
import twitter_WHITE from '../assets/twitter_WHITE.svg';
import yt_WHITE from '../assets/yt_WHITE.svg';
import insta_WHITE from '../assets/insta_WHITE.svg'

const Navbar = () => {
    return (
        <>
            <div className="nav-container">
                <nav className="navbar">
                    <div className="navbar-logo">
                        <img src={logoKEUNEWhite}></img>
                    </div>
                    <ul className='nav-menu'>
                        <li>
                            <a href="/" className="nav-links">Nowosci</a>
                        </li>
                        <li>
                            <a href="/" className="nav-links">Produkty</a>
                        </li>
                        <li>
                            <a href="/" className="nav-links">Trendy</a>
                        </li>
                        <li>
                            <a href="/" className="nav-links">O firmie</a>
                        </li>
                        <li>
                            <a href="/" className="nav-links">Salony</a>
                        </li>
                        <li>
                            <a href="/" className="nav-links">Dystrybutorzy</a>
                        </li>
                        <li>
                            <a href="/" className="nav-links">Kontakt</a>
                        </li>
                        <li>
                            <div href="/" className="nav-links row-Item">
                                <div className="firstRowIcon">
                                    <a href="http://www.facebook.com"><img className="styleImg" src={fb_WHITE}></img></a>
                                </div>
                                <div className="secondRowIcon">
                                    <a href="http://www.twitter.com" ><img className="styleImg"  src={twitter_WHITE}></img></a>
                                    <a href="http://www.youtube.com" ><img className="styleImg"  src={yt_WHITE}></img></a>
                                </div>
                                <div className="thirdRowItem">
                                    <a href="http://www.instagram.com" ><img className="styleImg"  src={insta_WHITE}></img></a>
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