"use client"

import React from 'react';
import { Link } from "next-scroll";
import { useState } from 'react';

const TopBar = () => {
    const [active, setActive] = useState('nav_active');
    const navToggle = () => (active === 'nav_active' ? setActive('nav_menu') : setActive('nav_active'));

    return (
        <div className='reletive'>
            <div className='flex justify-between py-8 px-4 lg:px-20 fixed top-0 w-[100%] z-40 mix-blend-difference'>
                <div className='flex gap-4 lg:gap-12'>
                    <Link to='about' className="cursor-pointer" offset={100} duration={1000}>[ ABOUT ]</Link>
                    <Link to='portfolio' className="cursor-pointer" offset={100} duration={1000}>[ PROJECTS ]</Link>
                </div>
                <p onClick={navToggle} className='text-4xl hidden lg:block font-black'>jk</p>
                <div className='flex gap-4 lg:gap-12'>
                    <Link to='skills' className="cursor-pointer" offset={100} duration={1000}>[ SKILLS ]</Link>
                    <Link to='contact' className="cursor-pointer" offset={100} duration={1000}>[ CONTAC ]</Link>
                </div>
            </div>
        </div>
    )
}

export default TopBar;