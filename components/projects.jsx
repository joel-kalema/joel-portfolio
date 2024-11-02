"use client"

import React from 'react'
import Image from 'next/image';
import { LuMoveRight } from "react-icons/lu";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { FlippingText } from '@/utils/flippingText';

const Projects = () => {

    const decription = "This website was built for a client in the e-commerce sector, designed to facilitate browsing properties. The platform enables users to view listings, filter products, schedule appointments through a seamless, responsive interface. The primary goal was to build a user-friendly, fully functional site within a strict 3-day deadline. By focusing on core functionalities and performance optimization, I delivered a site that allowed users to quickly find listings by location, explore product details, and make reservations."

    return (
        <div className='pt-40 px-20'>
            <ParallaxProvider>
                <div className='w-5/6 mx-auto text-center mb-40 mix-blend-difference'>
                    <Parallax speed={-18}>
                        <h1 className='italic text-xl mb-20 font-light'>SINCE 2020</h1>
                        <h1 className='uppercase text-4xl font-light mix-blend-difference italic flex flex-col justify-center items-center gap-4'>
                            <FlippingText>I HAVE BEEN WORKING ON Innovative</FlippingText>
                            <FlippingText>solutions crafted to solve real-world challenges.</FlippingText>
                            <FlippingText>Each project reflects a commitment to </FlippingText>
                            <span className='text-[#676767]'><FlippingText>quality, performance, and user impact.</FlippingText></span>
                        </h1>
                    </Parallax>
                </div>

                <div className='flex justify-between gap-6 items-center my-40 mix-blend-difference'>
                    <h1 className='text-7xl uppercase'>Recent</h1>
                    <div className='h-[4px] w-2/6 bg-[#d3d1c891] mix-blend-difference'></div>
                    <h1 className='text-7xl uppercase'>Projects</h1>
                </div>
            </ParallaxProvider>

            <div className='mt-40 flex flex-wrap'>

                <div className='w-1/2 p-6 border border-dotted border-[#ffffff38] grayscale hover:grayscale-0 transition duration-300'>
                    <div className='h-[33rem] flex items-center'>
                        <div className="relative h-[23rem] overflow-hidden w-full mx-auto">
                            <Image src="/qavah.png" layout="fill" objectFit="cover" alt="bay" quality={100} className='' />
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='text-xl mb-2 font-extrabold'>Qavah Group.</h1>
                        <p className='text-sm w-5/6 mb-10 font-light text-[#8f8f8f]'>{decription.substring(0, 190)}...</p>
                        <p className='border flex items-center justify-between py-1 px-4 rounded-3xl w-1/6'>More <LuMoveRight /></p>
                    </div>
                </div>

                <div className='w-1/2 p-6 grayscale hover:grayscale-0 transition duration-300'>
                    <div className="relative h-[33rem] overflow-hidden w-5/6 mx-auto">
                        <Image src="/eleka.png" layout="fill" objectFit="cover" alt="bay" quality={100} className='' />
                    </div>
                    <div className=''>
                        <h1 className='text-xl mb-2 font-extrabold'>Qavah Group.</h1>
                        <p className='text-sm w-5/6 mb-10 font-light text-[#8f8f8f]'>{decription.substring(0, 190)}...</p>
                        <p className='border flex items-center justify-between py-1 px-4 rounded-3xl w-1/6'>More <LuMoveRight /></p>
                    </div>
                </div>


                <div className='mb-10 w-1/2 grayscale hover:grayscale-0 transition duration-300'>
                    <div className='h-[33rem] flex'>
                        <div className="relative h-full overflow-hidden w-5/6 mb-4 mx-auto">
                            <Image src="/updev.png" layout="fill" objectFit="cover" alt="bay" quality={100} className='' />
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='text-xl mb-2 font-extrabold'>Qavah Group.</h1>
                        <p className='text-sm w-5/6 mb-10 font-light text-[#8f8f8f]'>{decription.substring(0, 190)}...</p>
                        <p className='border flex items-center justify-between py-1 px-4 rounded-3xl w-1/6'>More <LuMoveRight /></p>
                    </div>
                </div>


                <div className='mb-10 w-1/2 p-6 border border-dotted border-[#ffffff38] grayscale hover:grayscale-0 transition duration-300'>
                    <div className="relative h-[32rem]  w-5/6 mx-auto">
                        <Image src="/hop.png" layout="fill" objectFit="cover" alt="bay" quality={100} className='' />
                    </div>
                    <div className=''>
                        <h1 className='text-xl mb-2 font-extrabold'>Qavah Group.</h1>
                        <p className='text-sm w-5/6 mb-10 font-light text-[#8f8f8f]'>{decription.substring(0, 190)}...</p>
                        <p className='border flex items-center justify-between py-1 px-4 rounded-3xl w-1/6'>More <LuMoveRight /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;