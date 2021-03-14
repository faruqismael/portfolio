import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div>
                <FontAwesomeIcon icon={faCopyright} /> Copyright - {new Date().getFullYear()} Faruq Ismael, All Right Reserved
            </div>
        </footer>
    );
}

export default Footer;
