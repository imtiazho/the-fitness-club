import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5swnzkf', 'template_ff7zjvh', form.current, 'Hib3-iCCUS2-yADvy')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='Join' id='Join-Us'>
            <div className="join-left">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO </span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY </span>
                    <span className='stroke-text'>WITH US</span>
                </div>
            </div>
            <div className="join-right">
                <form ref={form} onSubmit={sendEmail} className='email-container'>
                    <input type="email" name="user_email" placeholder='Enter Your Email' id="" />
                    <button className='btn btn-email-join'>JOIN NOW</button>
                </form>
            </div>
        </div>
    );
};

export default Join;