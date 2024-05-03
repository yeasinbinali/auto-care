import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return <div className='text-center mt-10 mb-20'>
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    
    if(user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;