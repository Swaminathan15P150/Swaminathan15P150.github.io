import React from 'react';
import './Experience.css';

const Experience = props =>(
    <div className = "experience-main">
        <div className = "experience-section">
            <header className = "experience-header">Experience</header>
            <div className = "experience-body">
                <div className = "each-exp-details company"><div className ="each-icon"><i className="fas fa-building"></i></div><div className = "each-text"><b>Company</b> - Senseforth Technologies.</div></div>
                <div className = "each-exp-details role"><div className ="each-icon"><i className="fas fa-laptop-code"></i></div><div className = "each-text"><b>Role</b> - UI Developer.</div></div>
                <div className = "each-exp-details duration"><div className ="each-icon"><i className="far fa-calendar-alt"></i></div><div className = "each-text"><b>Experience</b> - 11 Months.</div></div>
            </div>
        </div>
    </div>
);

export default Experience;