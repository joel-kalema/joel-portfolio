import React from 'react'
import Image from 'next/image';

const Projects = () => {

    const decription = "This website was built for a client in the e-commerce sector, designed to facilitate browsing properties. The platform enables users to view listings, filter products, schedule appointments through a seamless, responsive interface. The primary goal was to build a user-friendly, fully functional site within a strict 3-day deadline. By focusing on core functionalities and performance optimization, I delivered a site that allowed users to quickly find listings by location, explore product details, and make reservations."

    return (
        <div className='py-40 px-20'>
            <div className='w-5/6 mx-auto text-center mb-40'>
                <h1 className='italic text-xl mb-10 font-light'>SINCE 2020</h1>
                <h1 className='uppercase text-5xl font-light'>I HAVE BEEN WORKING ON Innovative solutions crafted to solve real-world challenges.
                    Each project reflects a commitment to <span className='text-[#676767]'>quality, performance, and user impact</span>.</h1>
            </div>

            <div className='flex justify-between gap-6 items-center my-40'>
                <h1 className='text-7xl uppercase'>Recent</h1>
                <div className='h-[2px] w-2/6 bg-[#d3d1c891]'></div>
                <h1 className='text-7xl uppercase'>Projects</h1>
            </div>

            <div className='my-40'>

                <div className='flex gap-10 items-center mb-40'>
                    <div className="relative h-[30rem] overflow-hidden w-3/5 grayscale hover:grayscale-0 transition duration-300 group">
                        <Image src="/qavah.png" layout="fill" objectFit="cover" alt="bay" quality={100} className='' />
                        {/* <div className="h-full w-full absolute z-20 bg-[#1c1c1ca2] bottom-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0"></div>
                        <div className="h-full w-full absolute z-30 bottom-0 gradient opacity-100 transition-opacity duration-300 group-hover:opacity-0 flex flex-col justify-end p-10">
                            <div className='text-2xl mb-10 border rounded-[50%] w-[3rem] h-[3rem] flex justify-center items-center'>1</div>
                            <h1 className='text-4xl italic'>Qavah Group</h1>
                        </div> */}
                    </div>
                    <div className='w-2/5'>
                        <p className='text-md mb-10 font-light text-[#8f8f8f]'>{decription.substring(0, 190)}...</p>
                        <h1 className='text-3xl mb-6'>Learn More about <span className='text-[#676767]'>Qavah Group</span> project</h1>
                        <p className='border-b inline-block pb-2'>More</p>
                    </div>
                </div>

                <div className='flex flex-row-reverse gap-10 items-center mb-40'>
                    <div className="relative h-[30rem] overflow-hidden w-3/5 grayscale hover:grayscale-0 transition duration-300 group">
                        <Image src="/eleka.png" layout="fill" objectFit="cover" alt="bay" quality={100} className='' />
                        {/* <div className="h-full w-full absolute z-20 bg-[#1c1c1ca2] bottom-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0"></div>
                        <div className="h-full w-full absolute z-30 bottom-0 gradient opacity-100 transition-opacity duration-300 group-hover:opacity-0 flex flex-col justify-end p-10">
                            <div className='text-2xl mb-10 border rounded-[50%] w-[3rem] h-[3rem] flex justify-center items-center'>2</div>
                            <h1 className='text-4xl italic'>Qavah Group</h1>
                        </div> */}
                    </div>
                    <div className='w-2/5'>
                        <p className='text-xl italic mb-10 font-light text-[#8f8f8f]'>{decription.substring(0, 190)}...</p>
                        <h1 className='text-3xl mb-6'>Learn More about <span className='text-[#676767]'>Qavah Group</span> project</h1>
                        <p className='border-b inline-block pb-2'>More</p>
                    </div>
                </div>


                <div className='flex gap-10 items-center mb-40'>
                    <div className="relative h-[30rem] overflow-hidden w-3/5 grayscale hover:grayscale-0 transition duration-300 group">
                        <Image src="/updev.png" layout="fill" objectFit="cover" alt="bay" quality={100} className='' />
                        {/* <div className="h-full w-full absolute z-20 bg-[#1c1c1ca2] bottom-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0"></div>
                        <div className="h-full w-full absolute z-30 bottom-0 gradient opacity-100 transition-opacity duration-300 group-hover:opacity-0 flex flex-col justify-end p-10">
                            <div className='text-2xl mb-10 border rounded-[50%] w-[3rem] h-[3rem] flex justify-center items-center'>1</div>
                            <h1 className='text-4xl italic'>Qavah Group</h1>
                        </div> */}
                    </div>
                    <div className='w-2/5'>
                        <p className='text-xl italic mb-10 font-light text-[#8f8f8f]'>{decription.substring(0, 190)}...</p>
                        <h1 className='text-3xl mb-6'>Learn More about <span className='text-[#676767]'>Qavah Group</span> project</h1>
                        <p className='border-b inline-block pb-2'>More</p>
                    </div>
                </div>


                <div className='flex flex-row-reverse gap-10 items-center mb-40'>
                    <div className="relative h-[40rem]  w-3/5 grayscale hover:grayscale-0 transition duration-300 group">
                        <Image src="/hop.png" layout="fill" objectFit="cover" alt="bay" quality={100} className='' />
                        {/* <div className="h-full w-full absolute z-20 bg-[#1c1c1ca2] bottom-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0"></div>
                        <div className="h-full w-full absolute z-30 bottom-0 gradient opacity-100 transition-opacity duration-300 group-hover:opacity-0 flex flex-col justify-end p-10">
                            <div className='text-2xl mb-10 border rounded-[50%] w-[3rem] h-[3rem] flex justify-center items-center'>2</div>
                            <h1 className='text-4xl italic'>Qavah Group</h1>
                        </div> */}
                    </div>
                    <div className='w-2/5'>
                        <p className='text-xl italic mb-10 font-light text-[#8f8f8f]'>{decription.substring(0, 190)}...</p>
                        <h1 className='text-3xl mb-6'>Learn More about <span className='text-[#676767]'>Qavah Group</span> project</h1>
                        <p className='border-b inline-block pb-2'>More</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;