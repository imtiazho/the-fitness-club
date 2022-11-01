import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import '../Home.css';
import heart from '../../../images/heart.png';
import banner from '../../../images/hero_image.png';
import bannerBack from '../../../images/hero_image_back.png';
import calories from '../../../images/calories.png';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import userImg from '../../../images/user-icon.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';

const NavAndTopBanner = () => {
    const transition = { type: 'spring', duration: 3 };
    const mobile = window.innerWidth <= 768 ? true : false;
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [userMenuExpand, setUserMenuExpand] = useState(false);

    const userSignOut = () => {
        signOut(auth);
        setUserMenuExpand(false);
        toast.success('Successfully Sign Out');
    }

    return (
        <div className='nav-topBanner'>
            <div className="blur blur-tb"></div>
            <div className="nt-left">
                <NavBar />

                {/* The best add */}
                <div className="the-best-add">
                    <motion.div
                        initial={{ left: mobile ? '165px' : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    >
                    </motion.div>
                    <span>THE BEST FITNESS CLUB IN THE TOWN</span>
                </div>

                {/* Banner Heading */}
                <div className="banner-heading">
                    <div>
                        <span className='stroke-text'>SHAPE </span>
                        <span>YOUR</span>
                    </div>

                    <div>
                        <span>IDEAL BODY</span>
                    </div>

                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>

                <div className="figures">
                    <div>
                        <span>+ 140</span>
                        <span>EXPERT COACHES</span>
                    </div>

                    <div>
                        <span>+ 978</span>
                        <span>MEMBERS JOINED</span>
                    </div>

                    <div>
                        <span>+ 50</span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>

                <div className="banner-btns">
                    <button onClick={() => navigate('/login')} className='btn'>Get Started</button>
                    <button onClick={() => navigate('/about')} className='btn'>Learn More</button>
                </div>
            </div>
            <div className="nt-right">
                {
                    user
                        ?
                        <div onClick={() => setUserMenuExpand(!userMenuExpand)} className="user-profile">
                            <img src={userImg} alt="" />
                        </div>
                        :
                        <button onClick={() => navigate('/login')} className="btn">LOGIN</button>
                }

                {userMenuExpand &&
                    <div className="user-control-menu">
                        <div>
                            <p>{user?.email}</p>
                        </div>
                        <div>
                            <p onClick={userSignOut} id='logout'>Sign Out</p>
                        </div>
                    </div>
                }

                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}
                    className="heart-rate"
                >
                    <img src={heart} alt="" />

                    <span>Heart Rate</span>
                    <span>116bpm</span>
                </motion.div>

                <img src={banner} className='banner-img' />

                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '19rem' }}
                    transition={transition}
                    src={bannerBack} className='banner-img-back' />

                <motion.div
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={transition}
                    className="calories"
                >
                    <img src={calories} alt="" />

                    <div>
                        <span>Calories Burn</span>
                        <span>200 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default NavAndTopBanner;