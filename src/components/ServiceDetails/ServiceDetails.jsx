import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { TiTick } from "react-icons/ti";

const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id, title, img, price, description, time, facility } = service;

    return (
        <div className='w-1/3 mx-auto border-2 border-[whitesmoke] mt-10 mb-20'>
            <img src={img} alt="img" />
            <div className='p-3'>
                <h1 className='text-2xl font-bold my-1'>{title}</h1>
                <p className='my-2'>{description}</p>
                <div className='flex justify-between items-center mb-2'>
                    <p>Time: <span className='font-bold'>{time}</span></p>
                    <p>Price: <span className='font-bold'>{price}</span></p>
                </div>
                <h5 className='text-xl font-bold mb-1'>Facilities :</h5>
                <div className='flex flex-col gap-2'>
                    {
                        facility.map(facilityCard => <div>
                            <h4 className='text-lg font-bold flex items-center'><TiTick className='text-simple text-xl' /> {facilityCard.facility_name}</h4>
                            <p>{facilityCard.description}</p>
                        </div>)
                    }
                </div>
                <div className='my-3 flex justify-between items-center'>
                    <button className='btn btn-outline' style={{ border: '1px solid #b51a09' }}><Link to='/services'>Go back</Link></button>
                    <button className='btn bg-simple text-complex'><Link to={`/checkout/${_id}`}>Checkout</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;