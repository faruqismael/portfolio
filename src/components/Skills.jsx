import React from 'react';
import '../styles/Skills.css'
import { data } from '../data'

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
                                    {/*  */}
                                    {skill.skill === "Typescript" ?
                                        <img src={skill.icon} alt={skill.skill} style={{ backgroundColor: "white" }} width={100} className="skills__icon" /> :
                                        <img src={skill.icon} alt={skill.skill} width={100} className="skills__icon" />}

                                    <h4>{skill.skill}</h4>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
            <div className="skills__tools">
                <h2>Tools</h2>
                <div className="skills__list">
                    {data.tools.map(tool => {
                        return (
                            <div className="skills__single">
                                <img src={tool.icon} alt={tool.skill} width={100} className="skills__icon" />
                                <h4>{tool.skill}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Skills;
