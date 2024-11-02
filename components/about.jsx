"use client"

import Image from 'next/image';
import React from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const About = () => {
    return (
        <ParallaxProvider>
            <div className="pb-40 px-20 flex justify-between items-center gap-10">
                <div className="text-7xl w-2/6">
                    <Parallax speed={-10}>
                        <h1>ABOUT ME</h1>
                    </Parallax>
                </div>
                <div className="relative h-[40rem] w-2/6 overflow-hidden transition duration-300">
                    <Parallax speed={10}>
                        <div className="relative h-[40rem] w-full overflow-hidden transition duration-300 mage">
                            <Image src="/joel.jpg" layout="fill" objectFit="cover" alt="Portrait of Joel Kalema" quality={100} />
                        </div>
                    </Parallax>
                </div>

                <div className="w-2/6">
                    <Parallax speed={-15}>
                        <p className="text-[#8f8f8f] font-light">
                            I am Joel Kalema, a Software Developer with a user-centric approach and over 3 years of remote experience working with fast-growing U.S.-based startups. My strong problem-solving skills enable me to analyze complex issues and identify the most effective solutions.
                        </p>
                        <p className="mt-10 border-b pb-2 inline-block cursor-pointer">Hire me</p>
                    </Parallax>
                </div>
            </div>
        </ParallaxProvider>

    )
}

export default About;