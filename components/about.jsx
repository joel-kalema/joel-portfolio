import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

const About = () => {

    return (
        <div className='py-40 px-20 flex justify-between items-center gap-10'>
            <h1 className='text-7xl w-2/6'>ABOUT ME</h1>
            <div className="relative h-[40rem] overflow-hidden w-2/6 transition duration-300">
                <Image src="/joel.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} className='' />
            </div>
            <div className='w-2/6'>
                <p className='text-[#8f8f8f] font-light'>I am Joel Kalema, a Software Developer with a user-centric approach and have more than 3 years of remote work experience within fast growing us-based startups. My strong problem-solving skills allow me to analyze complex problems and identify the most effective solution.</p>
                <p className='mt-10 border-b pb-2 inline-block'>Hire me</p>
            </div>
        </div>
    )
}

export default About;