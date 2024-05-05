import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className='border-2 border-[whitesmoke] shadow-xl'>
            <img src={img} alt="service-img" />
            <div className='flex justify-between items-center p-5'>
                <div>
                    <h3 className='text-2xl font-bold mb-2'>{title}</h3>
                    <p className='text-lg'>Price: <span className='font-bold'>{price}</span></p>
                </div>
                <div>
                    <button className='bg-simple text-complex p-3 rounded-full'><Link to={`/service/${_id}`}><FaArrowRight /></Link></button>
                </div>
            </div>
        </div>
    );
};

export default Service;