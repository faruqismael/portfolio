import React from 'react';
import '../styles/Front.css'

// font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from "@fortawesome/free-solid-svg-icons"

// iterating over roles
let roles = [
    'front-end developer',
    'coder',
    'software engineer',
    'programmer'
]

const iterateRoles = (index) => {
    return roles[Math.floor(Math.random() * roles.length)]
}

// let random = ;


const Front = () => {
    return (
        <div className="front">
            <div className="front__bg">

                <div className="front__info">
                    <div className="front__name">FARUQ ISMAEL</div>
                    <div className="front__role">
                        {iterateRoles()} <FontAwesomeIcon icon={faCode} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Front;