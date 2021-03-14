import React from 'react';
import "../styles/Projects.css";
import Anime from 'react-anime';

const Projects = () => {
    return (
        <div className="project">
            <h2>MY WORKS</h2>

            <Anime translateX={200}> projects here</Anime>
        </div>
    );
}

export default Projects;
