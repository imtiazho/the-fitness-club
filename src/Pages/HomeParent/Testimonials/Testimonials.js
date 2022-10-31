import React, { useState } from 'react';
import './Testimonials.css'
import { testimonialsData } from '../../../Data/testimonialsData';
import leftArrow from '../../../images/leftArrow.png'
import rightArrow from '../../../images/rightArrow.png'

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const testimonialLength = testimonialsData.length;

    return (
        <div className='testimonials' id='testimonials'>
            <div className="testimonials-left">
                <span>TESTIMONIALS</span>
                <span className='stroke-text'>WHAT THEY </span>
                <span>SAY ABOUT US</span>

                <span>
                    {testimonialsData[selected].review}
                </span>

                <span>
                    <span style={{ color: "var(--orange)" }}>
                        {testimonialsData[selected].name} {" "}
                    </span>

                    <span>
                        - {testimonialsData[selected].status}
                    </span>
                </span>
            </div>
            <div className="testimonials-right">
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="" />

                <div className="arrows">
                    <img onClick={() =>
                        selected === 0 ?
                            setSelected(testimonialLength - 1)
                            :
                            setSelected((prev) => prev - 1)
                    } src={leftArrow} alt="" />
                    
                    <img onClick={() =>
                        selected === testimonialLength - 1 ?
                            setSelected(0) : setSelected((prev) => prev + 1)
                    } src={rightArrow} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;



