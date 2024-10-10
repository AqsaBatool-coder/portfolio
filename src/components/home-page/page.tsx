import React from 'react'
import HeroSection from './hero-section/page'

const HomePage = () => {


    return (
        <React.Fragment>
            <HeroSection />
            <div className='flex justify-end w-full mt-[100px] md:mt-[160px] xl:mt-[220px]'>
                <div className='flex justify-end bg-line-break h-[1px] w-[70%] rounded-[2px]' />
            </div>
        </React.Fragment>
    )
}

export default HomePage
