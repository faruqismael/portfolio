import React from 'react';
import '../styles/Front.css'
import data from '../data.json'
// font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from "@fortawesome/free-solid-svg-icons"

// iterating over roles

let iterateRoles = () => {
    return data.roles[Math.floor(Math.random() * data.roles.length)]
}

let lucky = iterateRoles();
setInterval(() => {
    lucky = iterateRoles()
    lucky.toString();
    let luckyArr = [];
    for (let i = 0; i < lucky.length; i++) {
        luckyArr.push(lucky[i])
    }

    let luckyString = '';
    luckyArr.map(arr => luckyString += arr);
    document.getElementById("role").innerText = luckyString;
}, 3000);


const Front = () => {
    return (
        <div className="front">
            <div className="front__bg">

                <div className="front__info">
                    <div className="front__name">FARUQ ISMAEL</div>
                    <div className="front__role">
                        <span id="role">{lucky}</span> <FontAwesomeIcon icon={faCode} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Front;