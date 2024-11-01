import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {

    return (
        <div className='py-40 px-20 relative overflow-hidden'>
            <div className="absolute h-full overflow-hidden w-full top-0 right-0 opacity-20 animate-pulse transition duration-300 z-10">
                <Image src="/bg.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} className='' />
            </div>
            <div className='relative z-20'>
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
        </div>
    )
}

export default HomePage;