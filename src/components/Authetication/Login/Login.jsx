import React, { memo } from 'react';
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="w-[90%] mx-auto flex flex-row items-center my-20">
            <div className="w-1/2">
                <img className='w-full' src="https://i.ibb.co/7VKVtWT/illustration-profile-flat-vector-9206-2929.jpg" alt="" />
            </div>
            <div className="card shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100 p-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-center text-4xl font-bold mb-5'>Login Now!</h1>
                    <div className='mt-3'>
                        <label>Email</label><br />
                        <input className='border-[1px] mt-1 p-1 w-full rounded-lg' type='email' placeholder='Your Email' {...register("name")} required />
                    </div>
                    <div className='mt-3'>
                        <label>Password</label><br />
                        <input className='border-[1px] mt-1 p-1 w-full rounded-lg' type='password' placeholder='Your Password' {...register("name")} required />
                    </div>
                    <input type="submit" className='btn btn-sm bg-simple w-full text-complex my-5' />
                </form>
                <p className='text-center'>New to AutoCare ? <Link to='/register' className='font-bold'>Register</Link></p>
                <div className="divider">OR</div>
                <div className='flex justify-center items-center'>
                    <FaGithub className='github text-3xl mr-4' />
                    <Tooltip anchorSelect=".github" place="top">
                        Github Sign-in
                    </Tooltip>
                    <FcGoogle className='google text-3xl mr-4' />
                    <Tooltip anchorSelect=".google" place="top">
                        Google Sign-in
                    </Tooltip>
                    <FaFacebook className='facebook text-3xl mr-4' />
                    <Tooltip anchorSelect=".facebook" place="top">
                        Facebook Sign-in
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default Login;