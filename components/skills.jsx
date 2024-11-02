import React from 'react'
import Image from 'next/image';
import { frontend, backend, database, langages } from '@/utils/icons';
import { FlippingText } from '@/utils/flippingText';

const Skills = () => {

    return (
        <div className='py-20 px-20'>
            <div className='flex justify-between gap-6 items-center my-20'>
                <h1 className='text-7xl uppercase'><FlippingText>Technical</FlippingText></h1>
                <div className='h-[2px] w-2/6 bg-[#d3d1c891]'></div>
                <h1 className='text-7xl uppercase'><FlippingText>Proficiencies</FlippingText></h1>
            </div>

            <div className='flex justify-center items-center flex-col my-40'>
                <div className="flex gap-10 mb-6">
                    {langages.map((item) => (
                        <p key={item.langages} className="flex items-center gap-1 font-light"><span className="text-md">{item.icons}</span>{item.langages}</p>
                    ))}
                </div>

                <div className="flex gap-10 mb-6">
                    {frontend.map((item) => (
                        <p key={item.langages} className="flex items-center gap-1 font-light"><span className="text-md">{item.icons}</span>{item.langages}</p>
                    ))}
                </div>

                <div className="flex gap-10 mb-6">
                    {backend.map((item) => (
                        <p key={item.langages} className="flex items-center gap-1 font-light"><span className="text-md">{item.icons}</span>{item.langages}</p>
                    ))}
                </div>

                <div className="flex gap-10 mb-6">
                    {database.map((item) => (
                        <p key={item.langages} className="flex items-center gap-1 font-light"><span className="text-md">{item.icons}</span>{item.langages}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills;