import React from 'react';
import jquery from '../../images/jquery.png';
import './Skill.css';

const Skills = props =>(
    <div className = "skills-main">
        <div className = "skills-section">
            <header className = "skills-header">Skills</header>
            <div className = "skills-body">
                <div className = "each-skill html-skill">
                    <i className="fab fa-html5" style={{color:'orange'}}></i>
                </div>
                <div className = "each-skill css-skill">
                    <i className="fab fa-css3-alt" style={{color:'blue'}}></i>
                </div>
                <div className = "each-skill js-skill">
                    <i className="fab fa-js-square" style={{color:'yellow'}}></i>
                </div>
                <div className = "each-skill react-skill">
                    <i className="fab fa-react" style={{color:'#00bcd4'}}></i>
                </div>
                <div className = "each-skill jquery-skill">
                    <img src = {jquery} alt = "jquery"></img>   
                </div>
                <div className = "each-skill bs-skill">
                    <i className="fab fa-bootstrap" style={{color:'#673ab7'}}></i>
                </div>
                <div className = "each-skill java-skill">
                    <i className="fab fa-java" style={{color:'#206888'}}></i>
                </div>
            </div>
        </div>
    </div>
);

export default Skills;