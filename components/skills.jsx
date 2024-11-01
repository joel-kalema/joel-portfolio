import React from 'react'
import Image from 'next/image';
import { frontend, backend, database, langages } from '@/utils/icons'

const Skills = () => {

    return (
        <div className='py-40 px-20'>
            <div className='flex justify-between gap-6 items-center my-20'>
                <h1 className='text-7xl uppercase'>Technical</h1>
                <div className='h-[2px] w-2/6 bg-[#d3d1c891]'></div>
                <h1 className='text-7xl uppercase'>Proficiencies</h1>
            </div>

            <div className="flex gap-10 mb-6">
                <p className='font-bold'>LANGAGES : </p>
                {langages.map((item) => (
                    <p key={item.langages} className="flex items-center gap-1 font-light"><span className="text-xs md:text-xl">{item.icons}</span>{item.langages}</p>
                ))}
            </div>

            <div className="flex gap-10 mb-6">
                <p className='font-bold'>FONTEND : </p>
                {frontend.map((item) => (
                    <p key={item.langages} className="flex items-center gap-1 font-light"><span className="text-xs md:text-xl">{item.icons}</span>{item.langages}</p>
                ))}
            </div>

            <div className="flex gap-10 mb-6">
                <p className='font-bold'>BACKEND : </p>
                {backend.map((item) => (
                    <p key={item.langages} className="flex items-center gap-1 font-light"><span className="text-xs md:text-xl">{item.icons}</span>{item.langages}</p>
                ))}
            </div>
            
            <div className="flex gap-10 mb-6">
                <p className='font-bold'>DATABASE : </p>
                {database.map((item) => (
                    <p key={item.langages} className="flex items-center gap-1 font-light"><span className="text-xs md:text-xl">{item.icons}</span>{item.langages}</p>
                ))}
            </div>
        </div>
    )
}

export default Skills;