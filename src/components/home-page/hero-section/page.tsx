import React from 'react'
import Image from 'next/image'
import SocialLinks from '@/components/ui/social-links/page'


const HeroSection = () => {

    return (
        <main className="flex w-[100vw] items-center justify=evenly !h-full min-h-[calc(100vh-76px)] md:min-h-[calc(100vh-96px)] flex-col lg:flex-row mt-[96px]">
            <div className='flex flex-col items-start justify-start w-full !h-fit px-[16px] md:px-[52px] xl:pl-[100px] py-[30px] md:pt-[110px] xl:pt-[120px]'>
                <h1 data-aos="fade-down" className='!font-epilogue text-brown [font-size:_clamp(4rem,3rem+1vw,90px)] leading-[4rem] md:leading-[3rem+1vw] xl:leading-[81px] font-[400] text-left lg:text-nowrap uppercase'>
                    Hi I am,<br />
                    Aqsa Batool.
                </h1>
                <div className='mt-[12px] md:mt-[20px]'>
                    <p data-aos="fade-right" data-aos-duration="2000" className='!font-epilogue text-desc text-[15px] leading-[24px] md:text-[18px] leading-[27px] font-[400] text-left'>
                        I'm Cute and I like cute things 🩷
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-duration="1500" className='mt-[32px] md:mt-[94px]'>
                    <SocialLinks urlTitel="Contact Me" url='/contact' />
                </div>
            </div>

            <div className='flex justify-end md:justify-between w-full !h-full'>
                <Image data-aos="fade-up" data-aos-duration="900" src={'images/home-hs.svg'} priority className='lg:hidden pt-[60px] md:pt-[75px] lg:pt-0 w-auto md:min-w-[500px] md:max-w-[700px] md:pl-[80px] .md:max-w-[550px]lg:max-w-auto min-h-[399px] .sm:min-h-[450px] .md:h-aut object-cover.md: object-contain' width={12} height={34} alt='' />
                <Image src={'/images/home-hs.svg'} priority className='hidden lg:flex absolute max-w-[70vw] w-auto bottom-0 right-0 object-contain' width={12} height={34} alt='' />
            </div>
        </main>
    )
}

export default HeroSection
