import React from 'react';
import './Plan.css'
import { plansData } from '../../../Data/planData';
import whiteTick from '../../../images/whiteTick.png';

const Plan = () => {
    return (
        <div className='plan-container'>
            <div className="programs-title">
                <span className='stroke-text'>READY TO</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>WITH US</span>
            </div>

            {/* Plans Card */}
            <div className="plans">
                {
                   plansData.map((plan, i) => (
                    <div key={i} className="plan-card">
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <span>See more benefits </span>
                        </div>

                        <button className="btn">JOIN NOW</button>
                    </div>
                   )) 
                }
            </div>
        </div>
    );
};

export default Plan;