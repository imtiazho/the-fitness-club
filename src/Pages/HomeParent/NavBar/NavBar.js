import React from 'react';
import './NavBar.css'
import Logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='header'>
            <img src={Logo} alt=""  className='logo'/>

            <div className='nav-links'>
                <Link>Home</Link>
                <Link>Programs</Link>
                <Link>Why Us</Link>
                <Link>Plans</Link>
                <Link>Testimonials</Link>
            </div>
        </div>
    );
};

export default NavBar;