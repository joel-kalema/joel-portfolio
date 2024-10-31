import Link from 'next/link';
import React from 'react'

const About = () => {

    return (
        <div className='py-40 px-20 flex justify-between items-end'>
            <h1 className='text-5xl'>ABOUT ME</h1>
            <div className='w-2/6'>
                <p className='text-[#8f8f8f]'>I am Joel Kalema, a Software developer with a user-centric approach and have more than 3 years of remote work experience within fast growing us-based startups. My strong problem-solving skills allow me to analyze complex problems and identify the most effective solution.</p>
                <p className='mt-4 border-b pb-2 inline-block'>Hire me</p>
            </div>
        </div>
    )
}

export default About;