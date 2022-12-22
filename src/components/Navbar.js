import React from "react";
import './Navbar.css';
import logoKEUNE from '../assets/logo_KEUNE.svg'

const Navbar = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    {/* <h1 className="primary">KEUNE</h1> */}
                    <img src={logoKEUNE}></img>
                    <ul className='nav-menu'>
                        <li>
                            <a href="/">Nowosci</a>
                        </li>
                        <li>
                            <a href="/">Produkty</a>
                        </li>
                        <li>
                            <a href="/">Trendy</a>
                        </li>
                        <li>
                            <a href="/">O firmie</a>
                        </li>
                        <li>
                            <a href="/">Salony</a>
                        </li>
                        <li>
                            <a href="/">Dystrybutorzy</a>
                        </li>
                        <li>
                            <a href="/">Kontakt</a>
                        </li>
                        <li>
                            <a href="/">Icons</a>
                        </li>
                    </ul>
                    {/* <div className="hamburger" onClick={handleClick}>
                        {click ? (<FaTimes size={20} style={{ color: '#333' }} />) : (<FaBars size={20} style={{ color: '#333' }} />)}

                    </div> */}
                </div>

            </div>
        </>
    )
}

export default Navbar