"use client";
import Image from "next/image";
import React from 'react';
import { CiMail } from 'react-icons/ci';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaAngellist } from 'react-icons/fa';
import { FaChevronRight } from "react-icons/fa6";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const Contact = () => {
    return (
        <div className='py-40 px-4 lg:px-20 lg:flex relative overflow-hidden'>
            {/* <ParallaxProvider> */}
            <div className="absolute h-full overflow-hidden w-full top-0 right-0 opacity-20 z-10">
                <Image src="/contact.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} className='' />
            </div>
            <div className="lg:w-2/4 relative z-30 mb-40">
                <ParallaxProvider>
                    <div className='text-7xl lg:text-9xl italic font-semibold text-[#575757] cursor-pointer flex flex-col mb-4 lg:mb-0'>
                        <Parallax speed={-8}><h1 className="">Let&apos;s<br /></h1></Parallax>
                        <Parallax speed={-4}> <h1 className="ml-20">Get in</h1></Parallax>
                        <Parallax speed={0}><h1 className="">Touch!</h1></Parallax>
                    </div>
                </ParallaxProvider>
                <p className='w-5/6 text-[#8f8f8f] italic text-sm'>Let&apos;s make somthing new, different and more meanigful or make think more visual or Conceptual?</p>
            </div>
            <div className="lg:w-2/4 relative z-30">
                <ParallaxProvider>
                    <Parallax speed={-10}>
                    <form >
                        <input type="text" name="name" id="name" placeholder="FULL NAME" maxlength="30" required className="mb-4 lg:mb-16 pb-4" /><br />
                        <input type="email" name="email" id="email" placeholder="EMAIL" require className="mb-4 lg:mb-16 pb-4" /><br />
                        <textarea id="message" name="message" placeholder="MESSAGE" className="mb-6 pb-4" required></textarea><br />
                        <button className="mt-5 text-5xl float-right mb-10" maxlength="500" type='submit'><FaChevronRight /></button>
                    </form>
                    <div className='flex w-3/5 items-center mt-20'>
                        <div className='flex w-3/6 text-xl'>
                            <a href='https://angel.co/u/joel-kalema' target="_blank" rel="noopener noreferrer"><FaAngellist className='mr-4' /></a>
                            <a href="#"><CiMail className="mr-4" /></a>
                            <a href='https://github.com/joel-kalema' target="_blank" rel="noopener noreferrer"><FiGithub className='mr-4' /></a>
                            <a href='https://www.linkedin.com/in/joel-kalema/' target="_blank" rel="noopener noreferrer"><FiLinkedin className='mr-4' /></a>
                        </div>
                    </div>
                    </Parallax>
                    </ParallaxProvider>
            </div>
        </div >
    );
}

export default Contact;
