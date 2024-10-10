"use client";
import { useState, useEffect, } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import Link from "next/link"

const Header = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [prevScrollpos, setPrevScrollpos] = useState(0)
    const [scrollTimeout, setScrollTimeout] = useState<number | null>(null)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const handleLinkClick = () => {
        setIsMenuOpen(false)
    }
    const handleScroll = () => {
        const currentScrollPos = window.scrollY
        const navbar = document.getElementById("navbar")

        if (navbar) {
            if (currentScrollPos > prevScrollpos && currentScrollPos > 50) {
                navbar.style.top = window.screen?.width < 768 ? "-76px" : "-96px"
            } else {
                navbar.style.top = window.screen?.width < 768 ? "-76px" : "-96px"
            }
        }

        setPrevScrollpos(currentScrollPos)

        if (scrollTimeout) {
            clearTimeout(scrollTimeout)
        }

        setScrollTimeout(
            setTimeout(() => {
                const navbar = document.getElementById("navbar")
                if (navbar) {
                    navbar.style.transition = "all 0.3s ease-in-out"
                    navbar.style.top = "0"
                }
            }, 100) as unknown as number
        )
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("scroll", handleScroll)

            if (scrollTimeout) {
                clearTimeout(scrollTimeout)
            }
        }
    }, [prevScrollpos, scrollTimeout])


    return (
        <header id="navbar" className={`flex bg-peach/75 justify-between items-center w-full h-[76px] md:h-[96px] px-[16px] md:px-[52px] xl:px-[100px] border-b-[0.5px] border-primary fixed z-[10]`}>
            <div className="flex items-center" data-aos="fade-down">
                <Link href="/">
                    <h1 className="!font-impact mr-2 text-brown  text-[1.25rem] leading-[1.25rem] md:text-[2rem] md:leading-[3rem] font-[700] text-nowrap tracking-[1.5px] uppercase">Aqsa Batool</h1>
                </Link>
            </div>
            {isMobile
                ? <>
                    <Image
                        src="/icons/menu-bar.svg" alt="Menu Logo" width={50} height={32}
                        className="cursor-pointer transform transition-transform duration-500 ease-out"
                        onClick={toggleMenu} priority
                    />
                    <div className={`fixed top-0 left-0 w-full h-full z-[999] flex flex-col justify-center items-center transform transition-transform duration-500 bg-black ease-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                        <X onClick={toggleMenu} size={40} className="absolute top-6 right-3 !font-[100] text-peach cursor-pointer" />
                        <Link
                            onClick={handleLinkClick}
                            href="/portfolio"
                            className={`!font-epilogue no-underline font-[500] text-[2.25rem] mt-20 text-peach`}
                        >
                            Portfolio
                        </Link>
                        <Link
                            onClick={handleLinkClick}
                            href="/about"
                            className={`!font-epilogue no-underline font-[500] text-[2.25rem] mt-20 text-peach`}
                        >
                            About
                        </Link>
                        <Link
                            onClick={handleLinkClick}
                            href="/contact"
                            className={`!font-epilogue no-underline font-[500] text-[2.25rem] mt-20 text-peach`}
                        >
                            Contact
                        </Link>
                    </div>
                </>
                : <div className="hidden sm:block" data-aos="fade-down">
                    <nav className="flex items-center md:gap-[1rem] xl:gap-[1.5rem] !font-epilogue text-[1.16rem] leading-[1.5rem] tracking-[-0.48px] !font-[600]">
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
            }
        </header>
    )
}

export default Header
