import React from 'react';
import '../styles/Skills.css'
import { data } from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills = () => {
    return (
        <div className='skills'>
            <div className="skills__skills">
                <h2>Skills</h2>
                <div className="skills__list">
                    {data.skills.map(
                        skill => {
                            return (
                                <div className="skills__single">
                                    < FontAwesomeIcon icon={skill.icon} style={{ fontSize: "150px" }} />
                                    <h4>{skill.skill}</h4>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
            {/* <div className="skills__tools">
                <h2>Tools</h2>
            </div> */}
        </div>
    );
}

export default Skills;
