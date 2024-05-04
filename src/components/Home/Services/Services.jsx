import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = "http://localhost:5000/services";
        axios.get(url)
            .then(data => {
                setServices(data.data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    return (
        <div className='w-[90%] mx-auto mb-20'>
            <h1 className='text-4xl font-bold text-center'>Services</h1>
            <p className='mt-4 mb-10 w-[50%] mx-auto text-center'>Discover expert car services tailored to your needs at AutoCare Hub. From routine maintenance to specialized repairs, we've got you covered with top-notch service and convenience.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.slice(0, 6).map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;