import React, { useState } from 'react';
import './Testimonials.css'
import { testimonialsData } from '../../../Data/testimonialsData';
import leftArrow from '../../../images/leftArrow.png'
import rightArrow from '../../../images/rightArrow.png'
import { motion } from "framer-motion";

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const testimonialLength = testimonialsData.length;
    const transition = { type: 'spring', duration: 3 };


    return (
        <div className='testimonials' id='testimonials'>
            <div className="testimonials-left">
                <span>TESTIMONIALS</span>
                <span className='stroke-text'>WHAT THEY </span>
                <span>SAY ABOUT US</span>

                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                >
                    {testimonialsData[selected].review}
                </motion.span>

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
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}
                ></motion.div>
                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 1, x: -100 }}
                    transition={transition}
                    src={testimonialsData[selected].image} alt="" />

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



