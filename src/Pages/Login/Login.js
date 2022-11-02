import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import auth from '../../Firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef();

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: ""
    });

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const resetPassword = async () => {
        const emailToReset = emailRef.current.value;
        console.log(emailToReset)
        
        await sendPasswordResetEmail(emailToReset);
        toast.success('Send reset link');
    }

    let from = location.state?.from?.pathname || "/";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
            toast.success('Successfully Log In');
        }
    }, [user, navigate, from, loading]);

    useEffect(() => {
        const dbError = hookError;
        if (dbError) {
            if (dbError?.message.includes('user-not-found')) {
                toast.error("Invalid Email")
            }
            else if (dbError?.message.includes('wrong-password')) {
                toast.error("Wrong Password")
            }
            else {
                toast.error("Something wrong. Try again.")
            }
        }
    }, [hookError]);

    return (
        <div className='login'>
            <div className='blur blur-from-1'></div>
            <div className='blur blur-from-2'></div>

            <div className="form-heading">
                <span className='stroke-text'>LOGIN</span>
            </div>

            <div className="form-container">
                <form onSubmit={handleSubmit} className='form'>
                    <div>
                        <div className="input-field">
                            <input ref={emailRef} onBlur={handleEmail} type="email" placeholder='Email' name="email" />
                        </div>
                        {errors.emailError && <p className='error-message'>{errors.emailError}</p>}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handlePassword} type="password" placeholder='Password' name="password" />
                        </div>
                        {errors.passwordError && <p className='error-message'>{errors.passwordError}</p>}
                    </div>

                    <div className="input-field submit-btn">
                        <input type="submit" value="LOGIN" />
                    </div>
                </form>
            </div>

            <div className='from-important-link'>
                <Link to='/registration'>Don't have any account?</Link>
                <Link onClick={resetPassword}>Forget Password?</Link>
            </div>
        </div>
    );
};

export default Login;