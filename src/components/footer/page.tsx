import React from 'react'

import Link from 'next/link'


const Footer = () => {


    return (
        <footer className='flex flex-col items-center justify-center border-t-[0.5px] border-primary  md:flex-row w-full px-[16px] md:px-[52px] xl:px-[100px] pt-[23.5px] pb-[13.5px] md:pt-[57px] md:pb-[47px] bg-peach/75 text-desc border-t-[1px] border-link'>
            <div className='order-1 w-full'>
                <p className='!font-epilogue !font-[500] text-brown text-[1rem] leading-[25.6px] text-center md:text-left text-nowrap'>
                    {`© 2024 KHURRAM MALIK`}
                </p>
            </div>

            <div className='order-2 w-full mt-[10px] md:mt-0'>
                <nav className="flex items-center justify-center md:justify-end w-full gap-x-[1rem] !font-epilogue !font-[500] text-[1rem] leading-[1.5rem] tracking-[-0.48]">
                        <Link
                            href="/portfolio"
                            className={`no-underline p-[10px] text-brown`}
                        >
                            Portfolio
                        </Link>
                        <Link
                            href="/about"
                            className={`no-underline p-[10px] text-brown`}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className={`no-underline p-[10px] text-brown`}
                        >
                            Contact
                        </Link>
                </nav>
            </div>
        </footer>
    )
}

export default Footer