import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import './Register.css';

const Registration = () => {
    const navigate = useNavigate()
    const location = useLocation();

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({
        nameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: ""
    });

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    let from = location.state?.from?.pathname || "/";

    const handleName = e => {
        if (e.target.value !== "") {
            setUserInfo({ ...userInfo, name: e.target.value });
            setErrors({ ...errors, nameError: "" })
        }
        else {
            setErrors({ ...errors, nameError: "Name in required" });
            setUserInfo({ ...userInfo, name: "" });
        }
    }

    const handleEmail = e => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, emailError: "" })
        }
        else {
            setErrors({ ...errors, emailError: "Enter a valid email" });
            setUserInfo({ ...userInfo, email: "" });
        }
    }

    const handlePassword = e => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, passwordError: "" })
        }
        else {
            setErrors({ ...errors, passwordError: "Password must be in 6 character" });
            setUserInfo({ ...userInfo, password: "" });
        }
    }

    const handleConfirmPasword = e => {
        if (userInfo.password === e.target.value) {
            setUserInfo({ ...userInfo, confirmPassword: e.target.value });
            setErrors({ ...errors, confirmPasswordError: "" })
        }
        else {
            setErrors({ ...errors, confirmPasswordError: "Password Mismatch" });
            setUserInfo({ ...userInfo, confirmPassword: "" });
        }
    }

    const handleRegister = e => {
        e.preventDefault();
        if (userInfo.password === userInfo.confirmPassword) {
            createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        }

    }

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
            toast.success('Successfully Sign Up');
        }
    }, [user, navigate, from])

    return (
        <div className='register'>
            <div className='blur blur-from-1'></div>
            <div className='blur blur-from-2'></div>

            <div className="form-heading">
                <span className='stroke-text'>SIGN UP</span>
            </div>
            <div className="form-container">
                <form onSubmit={handleRegister} className='form'>
                    <div>
                        <div className="input-field">
                            <input onBlur={handleName} type="text" placeholder='Name' name="name" />
                        </div>
                        {errors.nameError && <p className='error-message'>{errors.nameError}</p>}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handleEmail} type="email" placeholder='Email' name="email" />
                        </div>
                        {errors.emailError && <p className='error-message'>{errors.emailError}</p>}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handlePassword} type="password" placeholder='Password' name="password" />
                        </div>
                        {errors.passwordError && <p className='error-message'>{errors.passwordError}</p>}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handleConfirmPasword} type="password" placeholder='Confirm Password' name="password" />
                        </div>
                        {errors.confirmPasswordError && <p className='error-message'>{errors.confirmPasswordError}</p>}
                    </div>


                    <div className="input-field submit-btn">
                        <input type="submit" value="REGISTER" />
                    </div>
                </form>
            </div>

            <div className='from-important-link'>
                <Link to='/login'>Already have an acount?</Link>
            </div>
        </div>
    );
};

export default Registration;