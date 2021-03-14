import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "../styles/Projects.css";
import { } from '@fortawesome/react-fontawesome'
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import data from "../data.json"

const Projects = () => {
    return (
        <div className="project">
            <h2>MY WORKS <FontAwesomeIcon icon={faListAlt} color="blue" /> </h2>

            <div className="project__cards">
                {data.projects.map(project => {
                    return (
                        <div className="project__card">
                            <div className="project__image"></div>
                            <div className="project__title">
                                {project.title}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    );
}

export default Projects;
