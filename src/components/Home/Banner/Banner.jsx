import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full mt-5">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/3W0LKBJ/photo-handsome-vehicle-repair-mechanic-763111-53627.jpg" className="h-[550px] object-cover rounded-lg brightness-50 w-full mx-auto" />
                <div className="absolute flex justify-end transform -translate-y-1/2 right-28 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute w-[50%] mx-auto left-36 top-32'>
                    <h1 className='text-5xl font-bold text-complex'>Ensuring Your Safety on Every Journey!</h1>
                    <p className='text-complex my-6'>At DriveGuard, we prioritize your safety on the road. Our comprehensive car service solutions ensure your vehicle is in top condition, providing peace of mind for every mile of your journey.</p>
                    <button className='btn bg-simple border-simple text-complex px-10'>Explore</button>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/jVCvRFH/male-mechanic-working-shop-car-23-2150170042.jpg" className="h-[550px] object-cover rounded-lg brightness-50 w-full mx-auto" />
                <div className="absolute flex justify-end transform -translate-y-1/2 right-28 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute w-[50%] mx-auto left-36 top-32'>
                    <h1 className='text-5xl font-bold text-complex'>Your One-Stop Solution for Car Maintenance!</h1>
                    <p className='text-complex my-6'>Discover expert car services tailored to your needs at AutoCare Hub. From routine maintenance to specialized repairs, we've got you covered with top-notch service and convenience.</p>
                    <button className='btn bg-simple border-simple text-complex px-10'>Explore</button>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Hgy49HM/auto-mechanic-hands-using-wrench-repair-checking-car-engine-systems-101448-1128.jpg" className="h-[550px] object-cover rounded-lg brightness-50 w-full mx-auto" />
                <div className="absolute flex justify-end transform -translate-y-1/2 right-28 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute w-[50%] mx-auto left-36 top-32'>
                    <h1 className='text-5xl font-bold text-complex'>Elevate Your Car's Performance!</h1>
                    <p className='text-complex my-6'>RevUp Garage is your go-to destination for enhancing your car's performance. Experience the thrill of optimized power, efficiency, and reliability with our premium range of services and upgrades.</p>
                    <button className='btn bg-simple border-simple text-complex px-10'>Explore</button>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Sv3ncqQ/handsome-indian-auto-mechanic-car-servise-255667-45755.jpg" className="h-[550px] object-cover rounded-lg brightness-50 w-full mx-auto" />
                <div className="absolute flex justify-end transform -translate-y-1/2 right-28 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute w-[50%] mx-auto left-36 top-32'>
                    <h1 className='text-5xl font-bold text-complex'>Precision Service, Trusted Results!</h1>
                    <p className='text-complex my-6'>Trust MileMaster Mechanics for precision car servicing that keeps your vehicle running smoothly mile after mile. Our skilled technicians deliver reliable solutions tailored to your car's needs, ensuring peak performance and longevity.</p>
                    <button className='btn bg-simple border-simple text-complex px-10'>Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;