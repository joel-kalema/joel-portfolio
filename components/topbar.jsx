import React from 'react'

const TopBar = () => {

    return (
        <div className='flex justify-between py-8 px-20 fixed top-0 w-[100%] z-50 mix-blend-difference'>
            <div className='flex gap-12'>
                <p>ABOUT</p>
                <p>PROJECTS</p>
            </div>
            <p>jk</p>
            <div className='flex gap-12'>
                <p>SKILLS</p>
                <p>CONTAC</p>
            </div>
        </div>
    )
}

export default TopBar;