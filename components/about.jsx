"use client";

import React from 'react';
import Image from 'next/image';
import { Link } from "next-scroll";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { LuMoveRight } from "react-icons/lu";
import Skills from "./skills";

const About = () => {
    return (
        <div className='py-40 lg:py-20' id='about'>
            <ParallaxProvider>
                <div className="pb-40 px-4 lg:px-20 lg:flex justify-between items-center gap-10">
                    <div className="text-6xl text-center lg:text-start lg:text-7xl lg:w-2/6 font-semibold">
                        <Parallax speed={-10}>About me</Parallax>
                    </div>

                    <div className="relative mb-40 lg:mb-0 h-[25rem] lg:h-[40rem] lg:w-2/6 overflow-hidden transition duration-300">
                        <Parallax speed={10}>
                            <div className="relative h-[40rem] w-full overflow-hidden transition duration-300 mage">
                                <Image src="/joel.jpg" layout="fill" objectFit="cover" alt="Portrait of Joel Kalema" quality={100} />
                            </div>
                        </Parallax>
                    </div>

                    <div className="lg:w-2/6">
                        <Parallax speed={-15}>
                            <p className="text-[#FFFFE3] text-xl lg:text-md">
                                I am Joel Kalema, a Software Developer with 4+ years of remote experience, focused on building user-centered solutions and solving complex challenges effectively. Passionate about creating impactful digital experiences.
                            </p>
                            <Link to='contact' className="mt-10 border bg-[#FFFFE3] hover:bg-[#10100e00] hover:text-[#FFFFE3] text-[#10100e] transition duration-300 flex items-center justify-between w-2/5 py-3 px-6 rounded-3xl cursor-pointer" offset={100} duration={1000}>
                                Hire me
                                <LuMoveRight />
                            </Link>
                        </Parallax>
                    </div>
                </div>
                <Skills />
            </ParallaxProvider>
        </div>
    );
};

export default About;
