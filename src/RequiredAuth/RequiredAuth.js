import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Firebase.init';
import Spinner from '../Spinner/Spinner';

const RequiredAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return <Spinner />
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequiredAuth;