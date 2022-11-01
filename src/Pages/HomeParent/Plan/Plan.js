import React from 'react';
import './Plan.css'
import { plansData } from '../../../Data/planData';
import whiteTick from '../../../images/whiteTick.png';
import { useNavigate } from 'react-router-dom';


const Plan = () => {
    const navigate = useNavigate();

    return (
        <div className='plan-container'>
            <div className="blur blur-plan-1"></div>
            <div className="blur blur-plan-2"></div>
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
                            <span>Don't ever give up...</span>
                        </div>

                        <button onClick={() => navigate('/checkout')} className="btn">JOIN NOW</button>
                    </div>
                   )) 
                }
            </div>
        </div>
    );
};

export default Plan;