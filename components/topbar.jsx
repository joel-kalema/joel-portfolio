"use client"

import React from 'react';
import { useState } from 'react';

const TopBar = () => {
    const [active, setActive] = useState('nav_active');
    const navToggle = () => (active === 'nav_active' ? setActive('nav_menu') : setActive('nav_active'));

    return (
        <div className='reletive'>
            <div className={active}>
                <div className="flex flex-col md:flex-row md:justify-between h-[100vh] fixed bg-[#191d28] w-full left-0 top-0 py-10 md:py-32 px-8 lg:px-72 md:px-16 xl:px-96 xl:pt-60">
                    <div className='flex'>
                        <h1 onClick={navToggle} className='flex cursor-pointer md:text-xl text-xs items-center absolute hover:text-[#ffd175] right-10 md:right-20 top-6'>
                            <p className='mr-1'>MENU</p>
                            {/* <AiOutlineCloseCircle /> */}
                        </h1>
                        <div className='flex items-center flex-col mr-4 md:mr-16'>
                            <div className='w-6 h-6 border border-yellow-200 mb-8'></div>
                            <div className='w-[1px] h-72 bg-[#ffd175]'></div>
                        </div>
                        <ul className='text-xl md:text-4xl font-semibold duration-300 ease-out mt-20 md:mt-0 list-container'>
                            <li onClick={navToggle}>HOME</li>
                            <li onClick={navToggle}>ABOUT</li>
                            <li onClick={navToggle}>PORTFOLIO</li>
                            <li onClick={navToggle}>CONTACT</li>
                            <li onClick={navToggle}>BLOG</li>
                        </ul>
                    </div>
                    <div className='mb-10 mt-6 md:mt-16 ml-2 md:ml-0'>
                        <h1 className="name text-[#ffd175] text-xl md:text-7xl my-6 md:my-16">Joel kalema</h1>
                        <div className='contact_info text-[#ffd175]'>
                            {/* <p className='flex items-center mb-2'><span className='mr-2'><HiOutlineLocationMarker /></span> Kigali</p>
                            <p className='flex items-center mb-2'><span className='mr-2'><CiMail /></span> joelkalema63@gmail.com</p>
                            <p className='flex items-center mb-2 w-full'><span className='mr-2'><TbPhoneCalling /></span> +250 (0) 789-816-723</p> */}
                        </div>
                        <div className='flex w-full md:w-3/4 mt-4'>
                            {/* <a href='https://twitter.com/JoelJklm'><CiTwitter className='hover:text-[#ffd175]' /></a>
                            <a href='https://github.com/joel-kalema'><FiGithub className='ml-6 hover:text-[#ffd175]' /></a>
                            <a href='https://www.linkedin.com/in/joel-kalema/'><FiLinkedin className='ml-6 hover:text-[#ffd175]' /></a>
                            <a href='https://angel.co/u/joel-kalema'><FaAngellist className='ml-6 hover:text-[#ffd175]' /></a> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-between py-8 px-20 fixed top-0 w-[100%] z-40 mix-blend-difference'>
                <div className='lg:flex gap-12 hidden'>
                    <p>ABOUT</p>
                    <p>PROJECTS</p>
                </div>
                <p onClick={navToggle} className='text-4xl font-black'>jk</p>
                <div className='hidden lg:flex gap-12'>
                    <p>SKILLS</p>
                    <p>CONTAC</p>
                </div>
            </div>
        </div>
    )
}

export default TopBar;