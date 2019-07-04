import React from 'react';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding,faLaptopCode,faCalendar} from '@fortawesome/free-solid-svg-icons';


const Experience = props =>(
    <div className = "experience-main">
        <header className = "experience-header">Experience</header>
        <div className = "experience-body">
            <div className = "each-exp-details company"><div className ="each-icon"><FontAwesomeIcon icon={faBuilding} style = {{color:'white',display:'inline-block'}}/></div><div className = "each-text">COMPANY - Senseforth AI Research Centre.</div></div>
            <div className = "each-exp-details role"><div className ="each-icon"><FontAwesomeIcon icon={faLaptopCode} style = {{color:'white',display:'inline-block'}}/></div><div className = "each-text">ROLE - UI Developer.</div></div>
            <div className = "each-exp-details duration"><div className ="each-icon"><FontAwesomeIcon icon={faCalendar} style = {{color:'white',display:'inline-block'}}/></div><div className = "each-text">DURATION - 11 Months(June 2018 - April 2019).</div></div>
        </div>
    </div>
);

export default Experience;