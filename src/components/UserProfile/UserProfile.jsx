import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = () => {
        logoutUser()
            .then(() => { 
                navigate('/');
             })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }

    return (
        <div className='mt-10 mb-20 text-center'>
            {
                user ? <>
                    <p className='mb-2'>{user?.email}</p>
                    <button onClick={logout} className='btn bg-simple text-complex'>Logout</button>
                </> : <>
                    <p>No user</p>
                </>
            }
        </div>
    );
};

export default UserProfile;