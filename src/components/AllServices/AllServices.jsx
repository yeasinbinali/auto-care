import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Home/Service/Service';

const AllServices = () => {
    const services = useLoaderData();
    return (
        <div className='w-[90%] mx-auto mt-10 mb-20'>
            <h1 className='text-4xl text-center font-bold'>All services</h1>
            <p className='mt-5 mb-10 w-[50%] mx-auto text-center'>Discover expert car services tailored to your needs at AutoCare Hub. From routine maintenance to specialized repairs, we've got you covered with top-notch service and convenience.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AllServices;