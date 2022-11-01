import React from 'react';
import './Footer.css';

import instagram from '../../../images/instagram.png';
import github from '../../../images/github.png';
import linkedIn from '../../../images/linkedin.png';
import logo from '../../../images/logo.png';

const Footer = () => {
    return (
        <div className='footer-container'>
            <hr />

            <div className="footer">
                <div className="social-links">
                    <img src={github} alt="" />
                    <img src={instagram} alt="" />
                    <img src={linkedIn} alt="" />
                </div>

                <div className="logo-footer">
                    <img src={logo} alt="" />
                </div>
            </div>

            <div className="blur blur-footer-1"></div>
            <div className="blur blur-footer-2"></div>
        </div>
    );
};

export default Footer;