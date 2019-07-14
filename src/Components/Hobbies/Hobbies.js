import React from 'react';
import './Hobbies.css';

const Hobbies = props =>(
    <div className = "hobbies-main">
        <div className = "hobbies-section">
            <header className = "hobbies-header">Hobbies</header>
            <div className = "hobbies-body">
                <div className = "each-hobby cricket"></div>
                <div className = "each-hobby basketball"></div>
                <div className = "each-hobby singing"></div>
            </div>
        </div>
    </div>
);

export default Hobbies;