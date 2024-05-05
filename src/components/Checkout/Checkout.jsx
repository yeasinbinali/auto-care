import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const Checkout = () => {
    const { register, handleSubmit } = useForm();
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (info) => {
        axios.post('http://localhost:5000/carts', info)
            .then(data => {
                if (data.data.acknowledged) {
                    alert('Added cart');
                    navigate('/services');
                }
            })
    }

    return (
        <div className='mt-10 mb-20'>
            <form className='w-1/2 mx-auto bg-[whitesmoke] p-10' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-4xl font-bold text-center'>Checkout</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5'>
                    <div>
                        <label>Service Name</label><br />
                        <input className='border-[1px] mt-1 p-1 w-full rounded-lg' type='text' defaultValue={service.title} {...register("title")} readOnly />
                    </div>
                    <div>
                        <label>Price</label><br />
                        <input className='border-[1px] mt-1 p-1 w-full rounded-lg' type='text' defaultValue={service.price} {...register("price")} readOnly />
                    </div>
                    <div>
                        <label>Time</label><br />
                        <input className='border-[1px] mt-1 p-1 w-full rounded-lg' type='text' defaultValue={service.time} {...register("time")} readOnly />
                    </div>
                    <div>
                        <label>Date</label><br />
                        <input className='border-[1px] mt-1 p-1 w-full rounded-lg' type='date' placeholder='Enter the date' {...register("date")} required />
                    </div>
                    <div>
                        <label>User</label><br />
                        <input className='border-[1px] mt-1 p-1 w-full rounded-lg uppercase' type='text' defaultValue={user?.displayName} {...register("user")} readOnly />
                    </div>
                    <div>
                        <label>Email</label><br />
                        <input className='border-[1px] mt-1 p-1 w-full rounded-lg' type='email' defaultValue={user?.email} {...register("email")} readOnly />
                    </div>
                </div>
                <div className='mt-5'>
                    <label>Message</label><br />
                    <textarea className='border-[1px] mt-1 p-1 w-full rounded-lg' type='text' placeholder='Write a message' {...register("message")} required />
                </div>
                <input type="submit" className='btn btn-sm bg-simple w-full text-complex my-5' />
            </form>
        </div>
    );
};

export default Checkout;