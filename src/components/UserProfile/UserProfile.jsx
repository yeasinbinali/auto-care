import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const UserProfile = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const logout = () => {
        logoutUser()
            .then(() => { })
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