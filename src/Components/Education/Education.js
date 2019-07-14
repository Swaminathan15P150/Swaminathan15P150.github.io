import React from 'react';
import './Education.css';

const Education = props => (
    <div className = "education-main">
        <div className = "education-section">
            <header className = "education-header">Education</header>
            <div className = "education-details">
                <div className = "each-education sslc">
                    <div className = "header">SSLC</div>
                    <div className = "percentage">93.5&#37;</div>
                </div>
                <div className = "each-education hsc">
                    <div className = "header">HSC</div>
                    <div className = "percentage">91.5&#37;</div>
                </div>
                <div className = "each-education degree">
                    <div className = "header">BE CSE</div>
                    <div className = "percentage">84&#37;</div>
                </div>
            </div>
        </div>
    </div>
);

export default Education