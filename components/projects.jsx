"use client"

import React from 'react'
import Image from 'next/image';
import { LuMoveRight } from "react-icons/lu";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const Projects = () => {

    const decription = "This website was built for a client in the e-commerce sector, designed to facilitate browsing properties. The platform enables users to view listings, filter products, schedule appointments through a seamless, responsive interface. The primary goal was to build a user-friendly, fully functional site within a strict 3-day deadline. By focusing on core functionalities and performance optimization, I delivered a site that allowed users to quickly find listings by location, explore product details, and make reservations."

    return (
        <div className='pt-24 lg:pt-40 px-4 lg:px-20'>
            <ParallaxProvider>
                <div className='lg:w-5/6 mx-auto text-center mb-40 mix-blend-difference'>
                    <Parallax speed={-15}>
                        <h1 className='italic text-xl mb-4 font-light'>SINCE 2020</h1>
                        <h1 className='text-2xl italic lg:text-4xl mix-blend-difference'>
                            I have been working on Innovative solutions crafted to solve real-world challenges. Each project reflects a commitment to <span className='text-[#676767]'>quality, performance, and user impact.</span>
                        </h1>
                    </Parallax>
                </div>

                <div className='flex justify-between gap-6 items-center my-10 lg:my-40 mix-blend-difference'>
                    <h1 className='text-4xl lg:text-7xl font-semibold'>Recent</h1>
                    <div className='h-[4px] w-2/6 bg-[#d3d1c891] mix-blend-difference hidden lg:block'></div>
                    <h1 className='text-4xl lg:text-7xl font-semibold'>Projects</h1>
                </div>
            </ParallaxProvider>

            <div className='mt-40 lg:flex flex-wrap'>

                <div className='lg:w-1/2 p-6 border border-dotted border-[#ffffff38] grayscale hover:grayscale-0 transition duration-300'>
                    <div className='h-[20rem] lg:h-[33rem] flex items-center'>
                        <div className="relative h-[12rem] lg:h-[23rem] overflow-hidden w-full mx-auto">
                            <Image src="/qavah.png" layout="fill" objectFit="cover" alt="bay" quality={100} className='' />
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='text-xl mb-2 font-extrabold'>Qavah Group.</h1>
                        <p className='text-sm lg:w-5/6 mb-10 font-light text-[#8f8f8f]'>{decription.substring(0, 190)}...</p>
                        <p className='border flex items-center justify-between py-1 px-4 rounded-3xl w-3/6 lg:w-1/6'>More <LuMoveRight /></p>
                    </div>
                </div>

                <div className='lg:w-1/2 p-6 grayscale hover:grayscale-0 transition duration-300'>
                    <div className="relative h-[16rem] lg:h-[33rem] overflow-hidden w-5/6 mx-auto">
                        <Image src="/eleka.png" layout="fill" objectFit="cover" alt="bay" quality={100} className='' />
                    </div>
                    <div className=''>
                        <h1 className='text-xl mb-2 font-extrabold'>Qavah Group.</h1>
                        <p className='text-sm lg:w-5/6 mb-10 font-light text-[#8f8f8f]'>{decription.substring(0, 190)}...</p>
                        <p className='border flex items-center justify-between py-1 px-4 rounded-3xl w-3/6 lg:w-1/6'>More <LuMoveRight /></p>
                    </div>
                </div>


                <div className='mb-10 lg:w-1/2 grayscale hover:grayscale-0 transition duration-300'>
                    <div className='h-[20rem] lg:h-[33rem] flex'>
                        <div className="relative h-full overflow-hidden w-5/6 mb-4 mx-auto">
                            <Image src="/updev.png" layout="fill" objectFit="cover" alt="bay" quality={100} className='' />
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='text-xl mb-2 font-extrabold'>Qavah Group.</h1>
                        <p className='text-sm lg:w-5/6 mb-10 font-light text-[#8f8f8f]'>{decription.substring(0, 190)}...</p>
                        <p className='border flex items-center justify-between py-1 px-4 rounded-3xl w-3/6 lg:w-1/6'>More <LuMoveRight /></p>
                    </div>
                </div>


                <div className='mb-10 lg:w-1/2 p-6 border border-dotted border-[#ffffff38] grayscale hover:grayscale-0 transition duration-300'>
                    <div className="relative h-[16rem] lg:h-[32rem]  w-5/6 mx-auto">
                        <Image src="/hop.png" layout="fill" objectFit="cover" alt="bay" quality={100} className='' />
                    </div>
                    <div className=''>
                        <h1 className='text-xl mb-2 font-extrabold'>Qavah Group.</h1>
                        <p className='text-sm lg:w-5/6 mb-10 font-light text-[#8f8f8f]'>{decription.substring(0, 190)}...</p>
                        <p className='border flex items-center justify-between py-1 px-4 rounded-3xl w-3/6 lg:w-1/6'>More <LuMoveRight /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;