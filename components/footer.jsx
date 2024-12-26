"use client";

import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='relative overflow-hidden'>
            <h1 className='text-[3rem] lg:text-[14rem] text-center font-semibold mb-2 text-border '>joel  kalema</h1>
            <div className='border-t px-2 lg:px-16 py-4 flex flex-col-reverse items-center justify-center lg:justify-between text-[#575757]'>
                <div
                    variant="small"
                    className="mb-4  font-normal md:mb-0"
                >
                    &copy; {currentYear} <sapn className="text-[#d3d1c8]">Joel Kalema</sapn>. All
                    Rights Reserved.
                </div>
                <div className='flex gap-3 mb-4 lg:mb-0'>
                    <p>ABOUT</p>
                    <p>PROJECTS</p>
                    <p>SKILLS</p>
                    <p>CONTACTS</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
