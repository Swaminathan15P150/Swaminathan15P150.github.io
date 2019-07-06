import React from 'react';
import './Footer.css';

const Contact = props =>(
    <div className = "footer-main">
        <div className = "footer-body top">
            <div className = "twitter each-contact-top"><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/SSwamin91967302" className="fa fa-twitter-square"></a></div>
            <div className = "linkedin each-contact-top"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/swaminathan-s-990174132" className="fa fa-linkedin-square"></a></div>
            <div className = "github each-contact-top"><a target="_blank" rel="noopener noreferrer" href="https://github.com/Swaminathan15P150" className="fa fa-github-square"></a></div>
        </div>
        <div className = "footer-body bottom">
            <div className  = "phone each-contact-bottom fa fa-phone-square">&nbsp;&nbsp;+91 8012930902</div>
            <div className  = "phone each-contact-bottom fa fa-envelope-square">&nbsp;&nbsp;swami7798@gmail.com</div>
        </div>
    </div>
);

export default Contact;