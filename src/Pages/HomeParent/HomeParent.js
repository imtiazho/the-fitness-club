import React from 'react';
import './Home.css'
import NavAndTopBanner from './NavAndTopBanner/NavAndTopBanner';
import Programs from './Programs/Programs';
import Reason from './Reason/Reason';
import Plan from './Plan/Plan';
import Testimonials from './Testimonials/Testimonials';

const HomeParent = () => {
    return (
        <div className='home-parent'>
            <NavAndTopBanner />
            <Programs />
            <Reason />
            <Plan />
            <Testimonials />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};

export default HomeParent;