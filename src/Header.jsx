import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faReact } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
        <header>
            <nav>
                <div className="header__left">
                    <div className="header__logo">FARUQ<span>ISMAEL</span></div>
                </div>
                <div className="header__right">
                    <p>Home</p>
                    <p>About</p>
                    <p>Projects</p>
                    <p>skills</p>
                    <p>Contact</p>
                </div>
            </nav>
        </header>
    );
}

export default Header;
