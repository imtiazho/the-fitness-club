import React, { useEffect } from 'react';
import './CheckOut.css'
import { useForm, ValidationError } from '@formspree/react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const CheckOut = () => {
    const [state, handleSubmit] = useForm("mlevoewp");
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (state.succeeded) {
            toast.success('Thanks for Joinig!');
            navigate('/');
        }
    }, [state?.succeeded, navigate])

    return (
        <div className='CheckOut'>
            <div className='blur blur-from-1'></div>
            <div className='blur blur-from-2'></div>
            <div className='checkout-heading'>
                <span className='stroke-text'>JOINING INFORMATION</span>
            </div>

            <div className="form-container">
                <form onSubmit={handleSubmit} className='form'>
                    <div className="input-field">
                        <input type="text" placeholder='Name' name="Name" />
                    </div>

                    <div className="input-field">
                        <input type="text" placeholder='Whice Program or Plan?' name="CustomerWantToJoin" />
                    </div>

                    <div className="input-field">
                        <input type="text" readOnly value={user?.email} name="UserEmail" />
                    </div>

                    <div className="input-field">
                        <input type="text" placeholder='Address' name="UserAddress" />
                    </div>

                    <div className="input-field">
                        <input type="text" placeholder='Phone' name="UserPhone" />
                    </div>

                    <div className="input-field submit-btn">
                        <input type="submit" value="CONFIRM JOIN" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;