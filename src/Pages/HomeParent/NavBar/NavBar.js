import React, { useState } from 'react';
import './NavBar.css'
import Logo from '../../../images/logo.png'
import bars from '../../../images/bars.png'
import CustomLink from '../../../CustomLink/CustomLink';

const NavBar = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [openedMenu, setOpenedMenu] = useState(false)
    

    return (
        <div className='header'>
            <img src={Logo} alt="" className='logo' />

            {(openedMenu === false && mobile === true) ? (
                <div style={{
                    background: 'var(--appColor)', 
                    padding: '0.5rem',
                    width: '40px',
                    height: '40px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    }}
                    onClick={() => setOpenedMenu(!openedMenu)} 
                    >
                    <img src={bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
            )
                :

                (
                    <div className='nav-links'>
                         {/* to='programs' span={true} smooth={true}  */}
                        <CustomLink to='/' onClick={() => setOpenedMenu(false)}>Home</CustomLink>
                        <CustomLink to='/about' onClick={() => setOpenedMenu(false)}>About Us</CustomLink>
                        {/* <Link onClick={() => setOpenedMenu(false)}>Why Us</Link>
                        <Link onClick={() => setOpenedMenu(false)}>Plans</Link>
                        <Link onClick={() => setOpenedMenu(false)}>Testimonials</Link> */}
                    </div>
                )
            }


        </div>
    );
};

export default NavBar;