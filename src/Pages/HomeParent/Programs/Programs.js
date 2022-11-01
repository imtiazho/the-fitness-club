import React from 'react';
import './Programs.css'
import { programsData } from '../../../Data/programsData'
import rightArrow from '../../../images/rightArrow.png'
import { useNavigate } from 'react-router-dom';

const Programs = () => {
    const navigate = useNavigate();

    return (
        <div className='programs' id='programs'>
            <div className="programs-title">
                <span className='stroke-text'>EXPLORE OUR </span>
                <span>PROGRAMS </span>
                <span className='stroke-text'>TO SHAPE YOU</span>
            </div>

            <div className="programs-categories">
                {programsData.map(program => (
                    <div key={program.id} className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <button onClick={() => navigate('/checkout')}>Join Now</button>
                            <img src={rightArrow} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Programs;