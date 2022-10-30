import React from 'react';
import NavBar from '../NavBar/NavBar';
import '../Home.css';
import heart from '../../../images/heart.png';
import banner from '../../../images/hero_image.png';
import bannerBack from '../../../images/hero_image_back.png';
import calories from '../../../images/calories.png';

const NavAndTopBanner = () => {
    return (
        <div className='nav-topBanner'>
            <div className="nt-left">
                <NavBar />

                {/* The best add */}
                <div className="the-best-add">
                    <div></div>
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
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            <div className="nt-right">
                <button className="btn">LOGIN</button>

                <div className="heart-rate">
                    <img src={heart} alt="" />

                    <span>Heart Rate</span>
                    <span>116bpm</span>
                </div>

                <img src={banner} className='banner-img' />
                <img src={bannerBack} className='banner-img-back' />

                <div className="calories">
                    <img src={calories} alt="" />

                    <div>
                        <span>Calories Burn</span>
                        <span>200 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavAndTopBanner;