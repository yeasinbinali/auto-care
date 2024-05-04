import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <div className='text-center mt-10 mb-20'>
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    
    if(user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default PrivateRoute;