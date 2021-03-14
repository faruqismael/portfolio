import React from 'react';
import '../styles/Header.css'

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
