import Link from 'next/link';
import React from 'react'

const HomePage = () => {

    return (
        <div className='py-40 px-20'>
            <h1 className='text-8xl uppercase mb-40'>Software</h1>
            <div className='flex justify-end  gap-3'>
                <div className='h-[2px] w-[10rem] bg-[#d3d1c8]'></div>
                <h1 className='text-8xl uppercase text-right mb-28'>Developer</h1>
            </div>
            <div className='flex justify-between'>
                <p className='w-2/6 text-[#8f8f8f]'>Let's make somthing new, different and more meanigful or make think more visual or Conceptual?</p>
                <Link href='#' className='pb-2 text-[#8f8f8f]'>Get in Touch!</Link>
            </div>
        </div>
    )
}

export default HomePage;