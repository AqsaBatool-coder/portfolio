'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface SocialLinksProps {
    urlTitel?: string;
    url?: string;
    isDownload?: boolean;
    showButton?: boolean;
}


const SocialLinks = ({ urlTitel, url = '', isDownload = false, showButton = true }: SocialLinksProps) => {


    return (
        <div className='flex gap-x-[16px]'>
            {showButton
                && <div className='flex justify-center items-center bg-peach/75 rounded-[25px] w-full max-w-[215px] h-[48px] md:h-[54px] cursor-pointer'>
                    {isDownload
                        ? <a href={url} target='blank' download className='!font-epilogue text-primary text-[14px] leading-[14px] md:text-[18px] md:leading-[18px] font-[700] md:font-[500] text-center uppercase'>
                            {urlTitel}
                        </a>
                        : <Link href={url ? url : ''} className='!font-epilogue text-black text-[14px] leading-[14px] md:text-[18px] md:leading-[18px] font-[700] md:font-[500] text-center uppercase'>
                            {urlTitel}
                        </Link>
                    }
                </div>
            }

            <div className='flex gap-x-[12px] md:gap-x-[16px]'>
                <Link href='https://www.linkedin.com/in/aqsa-batool1147/' className='flex' target='blank'>
                    <Image src={'/icons/linkedin.svg'} priority className='' width={54} height={54} alt='link of linkedin account' />
                </Link>
                <Link href='https://github.com/aqsa-bs' className='flex' target='blank'>
                    <Image src={'/icons/github.svg'} priority className='' width={54} height={54} alt='link of github account' />
                </Link>
            </div>
        </div >
    )
}

export default SocialLinks