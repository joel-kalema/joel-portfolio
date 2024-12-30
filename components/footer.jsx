"use client";

import React from 'react';
import { Link } from "next-scroll";

const links = [
    { name: "ABOUT", idLink: "about" },
    { name: "SKILLS", idLink: "skills" },
    { name: "PROJECTS", idLink: "portfolio" },
    { name: "CONTACTS", idLink: "contact" },
  ];

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='relative overflow-hidden border-t border-t-[#5757578f]'>
            <h1 className='text-[3rem] lg:text-[14rem] text-center font-semibold mb-2 text-border '>joel  kalema</h1>
            <div className='flex justify-between px-4 gap-3 mb-4 lg:mb-10 lg:w-4/6 mx-auto'>
                    {links.map((link, index) => (
                        <Link key={index} to={link.idLink} className="cursor-pointer" offset={100} duration={1000}>[ {link.name} ]</Link>
                    ))}
                </div>
            <div className='border-t border-t-[#5757578f] px-2 lg:px-16 py-4 flex flex-col-reverse items-center justify-center lg:justify-between text-[#575757]'>
                <div
                    variant="small"
                    className="mb-4  font-normal md:mb-0"
                >
                    &copy; {currentYear} <sapn className="text-[#d3d1c8]">Joel Kalema</sapn>. All
                    Rights Reserved.
                </div>
            </div>
        </div>
    );
}

export default Footer;
