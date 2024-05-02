import React from 'react';
import aboutUpImage from '../../../../images/about/about_up_img.jpg';
import aboutPartsImage from '../../../../images/about/car_parts_about.png';
import { SlUser } from "react-icons/sl";
import { FiHome } from "react-icons/fi";
import { GoProjectRoadmap } from "react-icons/go";
import CountUp from 'react-countup';

const About = () => {
    return (
        <div className='flex justify-between items-center mb-20'>
            <div className='w-1/2 relative'>
                <img className='rounded-lg' src={aboutUpImage} alt="" />
                <img className='absolute w-1/2 h-1/2 -right-10 -bottom-12 border-[whitesmoke] border-8 rounded-lg' src={aboutPartsImage} alt="" />
            </div>
            <div className='w-2/3 pl-20'>
                <h5 className='text-4xl font-bold'>About <span className='text-simple'>Us</span></h5>
                <p className='text-justify mt-2'>Car servicing involves regular maintenance tasks performed on a vehicle to ensure its optimal performance, safety, and longevity. This typically includes oil and filter changes, checking and topping up fluids, inspecting and replacing worn-out parts.</p>
                <div className='grid grid-cols-3 gap-5 mt-4'>
                    <div className='flex flex-col justify-center items-center gap-1 border-[1px] border-[gray] p-3'>
                        <div className='bg-simple p-2 rounded-full w-16 h-16 flex justify-center items-center'>
                            <SlUser className='text-complex text-2xl' />
                        </div>
                        <span className='text-3xl font-bold mt-2 text-simple'>
                            <CountUp
                                end={1567}
                                duration={3} 
                                start={0}
                                delay={1}
                            ></CountUp>+
                        </span>
                        <p>Engineers & Workers</p>
                    </div>                    
                    <div className='flex flex-col justify-center items-center gap-1 border-[1px] border-[gray] p-3'>
                        <div className='bg-simple p-2 rounded-full w-16 h-16 flex justify-center items-center'>
                            <FiHome className='text-complex text-2xl' />
                        </div>
                        <span className='text-3xl font-bold mt-2 text-simple'>
                            <CountUp
                                end={321}
                                duration={3} 
                                delay={1}
                                start={0}
                            ></CountUp>+
                        </span>
                        <p>Factory In Worldwide</p>
                    </div>                    
                    <div className='flex flex-col justify-center items-center gap-1 border-[1px] border-[gray] p-3'>
                        <div className='bg-simple p-2 rounded-full w-16 h-16 flex justify-center items-center'>
                            <GoProjectRoadmap className='text-complex text-2xl' />
                        </div>
                        <span className='text-3xl font-bold mt-2 text-simple'>
                            <CountUp
                                end={2390}
                                duration={3} 
                                delay={1}
                                start={0}
                            ></CountUp>+
                        </span>
                        <p>Projects Completed</p>
                    </div>                    
                </div>
                <p className='mt-4'>This includes tasks like oil changes, fluid top-ups, and inspections to identify and address any potential issues before they escalate.</p>
                <button className='btn bg-simple text-complex mt-4'>Read More+</button>
            </div>
        </div>
    );
};

export default About;