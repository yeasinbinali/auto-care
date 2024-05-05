import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const { register, handleSubmit } = useForm();
    const service = useLoaderData();
    console.log(service);

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='mt-10 mb-20'>
            <form className='w-1/2 mx-auto bg-[whitesmoke] p-10' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-4xl font-bold text-center'>Checkout</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5'>
                    <div>
                        <label>Full Name</label><br />
                        <input className='border-[1px] mt-1 p-1 w-full rounded-lg' type='text' placeholder='Your Name' {...register("name")} required />
                    </div>
                    <div>
                        <label>Image URL</label><br />
                        <input className='border-[1px] mt-1 p-1 w-full rounded-lg' type='text' placeholder='Your Image' {...register("image")} required />
                    </div>
                    <div>
                        <label>Email</label><br />
                        <input className='border-[1px] mt-1 p-1 w-full rounded-lg' type='email' placeholder='Your Email' {...register("email")} required />
                    </div>
                    <div>
                        <label>Password</label><br />
                        <input className='border-[1px] mt-1 p-1 w-full rounded-lg' type='password' placeholder='Your Password' {...register("password")} required />
                    </div>
                </div>
                <input type="submit" className='btn btn-sm bg-simple w-full text-complex my-5' />
            </form>
        </div>
    );
};

export default Checkout;