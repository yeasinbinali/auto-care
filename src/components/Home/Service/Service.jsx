import React from 'react';

const Service = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className='border-2 border-[whitesmoke] shadow-xl p-5'>
            <img src={img} alt="service-img" />
            <div className='card-animate flex justify-between items-center mt-2'>
                <div>
                    <h3 className='text-xl font-bold'>{title}</h3>
                    <p>Price: {price}</p>
                </div>
                <div>
                    <button>Hello</button>
                </div>
            </div>
        </div>
    );
};

export default Service;