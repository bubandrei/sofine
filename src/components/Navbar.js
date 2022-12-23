import React from "react";
import './Navbar.css';
import logoKEUNE from '../assets/logo_KEUNE.svg';
import logoKEUNEWhite from '../assets/logo_KEUNE_WHITE.svg'

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
                            <a href="/" className="nav-links">Icons</a>
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