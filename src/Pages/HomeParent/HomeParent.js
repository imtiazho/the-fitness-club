import React from 'react';
import './Home.css'
import NavAndTopBanner from './NavAndTopBanner/NavAndTopBanner';
import Programs from './Programs/Programs';
import Reason from './Reason/Reason';
import Plan from './Plan/Plan';
import Testimonials from './Testimonials/Testimonials';
import Join from './Join/Join';
import Footer from './Footer/Footer';

const HomeParent = () => {
    return (
        <div className='home-parent'>
            <NavAndTopBanner />
            <Programs />
            <Reason />
            <Plan />
            <Testimonials />
            <Join />
            <Footer /> 
        </div>
    );
};

export default HomeParent;