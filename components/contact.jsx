"use client";
import { motion } from "framer-motion";
import React, { useRef } from 'react';
import { CiTwitter, CiMail } from 'react-icons/ci';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaAngellist } from 'react-icons/fa';
import { FlippingText } from "@/utils/flippingText";

const Contact = () => {
    return (
        <div className='pb-40 px-40'>
            <div className='text-[10rem] italic uppercase cursor-pointer'>
                <FlippingText>Get in Touch!</FlippingText>
            </div>

            <div className='flex w-3/5 items-center mt-10'>
                <div className='flex w-3/6 text-xl'>
                    <a href='https://twitter.com/JoelJklm' target="_blank" rel="noopener noreferrer"><CiTwitter className='mr-4' /></a>
                    <a href='https://github.com/joel-kalema' target="_blank" rel="noopener noreferrer"><FiGithub className='mr-4' /></a>
                    <a href='https://www.linkedin.com/in/joel-kalema/' target="_blank" rel="noopener noreferrer"><FiLinkedin className='mr-4' /></a>
                    <a href='https://angel.co/u/joel-kalema' target="_blank" rel="noopener noreferrer"><FaAngellist className='mr-4' /></a>
                    <p className='flex items-center mb-2'><CiMail /></p>
                </div>
                <div className='h-[2px] w-3/6 bg-[#d3d1c891]'></div>
            </div>
        </div>
    );
}

export default Contact;
