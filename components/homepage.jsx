"use client"

import React from 'react'
import Image from 'next/image';
import { Link } from "next-scroll";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const HomePage = () => {

    return (
        <ParallaxProvider>
            <div className='py-20 lg:py-40 px-4 lg:px-20 relative overflow-hidden'>
                <div className="absolute h-full overflow-hidden w-full top-0 right-0 opacity-20 animate-pulse transition duration-300 z-10">
                    <Image src="/bg.png" layout="fill" objectFit="cover" alt="bay" quality={50} />
                </div>
                <div className='relative z-20'>
                    <Parallax speed={-18}>
                        <p className='text-2xl'>I&apos;m Joel kalema</p>
                        <h1 className='text-5xl lg:text-8xl mb-80 lg:mb-40 font-semibold'>Software</h1>
                    </Parallax>
                    <div className='flex justify-end  gap-3'>
                        <div className='hidden lg:block h-[2px] w-[10rem] bg-[#d3d1c8]'></div>
                        <h1 className='text-5xl lg:text-8xl text-right mb-28 font-semibold'>Developer</h1>
                    </div>
                    <div className='lg:flex justify-between items-center'>
                        <p className='lg:w-2/6 mb-4 lg:mb-0 text-[#8f8f8f]'>Let&apos;s make somthing new, different and more meanigful or make think more visual or Conceptual?</p>
                        <Link to='contact' className='text-[#8f8f8f] border py-2 px-6 rounded-3xl cursor-pointer' offset={100} duration={1000}>Get in Touch!</Link>
                    </div>
                </div>
            </div>
        </ParallaxProvider>
    )
}

export default HomePage;