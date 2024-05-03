import React, { memo, useContext } from 'react';
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = memo(() => {
    const { register, handleSubmit } = useForm();
    const { createUser } = useContext(AuthContext);

    const onSubmit = (data) => {
        const name = data.name;
        const imageURL = data.image;
        const email = data.email;
        const password = data.password;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }
    
    return (
        <div className="w-[90%] mx-auto flex flex-row items-center my-20">
            <div className="w-1/2">
                <img className='w-full' src="https://i.ibb.co/7VKVtWT/illustration-profile-flat-vector-9206-2929.jpg" alt="" />
            </div>
            <div className="card shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100 p-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-center text-4xl font-bold mb-5'>Register Now!</h1>
                    <div>
                        <label>Full Name</label><br />
                        <input className='border-[1px] mt-1 p-1 w-full rounded-lg' type='text' placeholder='Your Name' {...register("name")} required />
                    </div>
                    <div className='mt-3'>
                        <label>Image URL</label><br />
                        <input className='border-[1px] mt-1 p-1 w-full rounded-lg' type='text' placeholder='Your Image' {...register("image")} required />
                    </div>
                    <div className='mt-3'>
                        <label>Email</label><br />
                        <input className='border-[1px] mt-1 p-1 w-full rounded-lg' type='email' placeholder='Your Email' {...register("email")} required />
                    </div>
                    <div className='mt-3'>
                        <label>Password</label><br />
                        <input className='border-[1px] mt-1 p-1 w-full rounded-lg' type='password' placeholder='Your Password' {...register("password")} required />
                    </div>
                    <input type="submit" className='btn btn-sm bg-simple w-full text-complex my-5' />
                </form>
                <p className='text-center'>Already have an account ? <Link to='/login' className='font-bold'>Login</Link></p>
            </div>
        </div>
    );
});

export default Register;