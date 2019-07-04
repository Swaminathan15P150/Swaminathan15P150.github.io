import React from 'react';
import './Skill.css';

const Skills = props =>(
    <div className = "skills-main">
        <header className = "skills-header">Skills</header>
        <div className = "skills-body">
            <div className = "skills-top">
                <div className = "each-top-skill html-skill"></div>
                <div className = "each-top-skill css-skill"></div>
                <div className = "each-top-skill js-skill"></div>
                <div className = "each-top-skill react-skill"></div>
                <div className = "each-top-skill jquery-skill"></div>
                <div className = "each-top-skill bs-skill"></div>
                <div className = "each-top-skill java-skill"></div>
            </div>
        </div>
    </div>
);

export default Skills;