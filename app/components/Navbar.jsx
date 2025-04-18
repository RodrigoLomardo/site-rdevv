import { assets } from '@/assets/assets'
import { hover } from 'motion'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {

    const [isScroll, setIsScroll] = useState(false)

    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt='' className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-[#11001F] dark:shadow-white/20 " : ""}`}>
                <a href="#top">
                    <Image alt='' src={isDarkMode ? assets.logo_dark : assets.logo} className='w-28 cursor-pointer mr-14' />
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${isScroll ? "" : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"}   `}>
                    <li><a className={` transition-colors duration-500 ${isDarkMode ? "hover:text-[#4d3361] " : "hover:text-[#2a004a]"}  `} href="#top">Home</a></li>
                    <li><a className={` transition-colors duration-500 ${isDarkMode ? "hover:text-[#4d3361] " : "hover:text-[#2a004a]"}  `} href="#about">Sobre</a></li>
                    <li><a className={` transition-colors duration-500 ${isDarkMode ? "hover:text-[#4d3361] " : "hover:text-[#2a004a]"}  `} href="#services">Serviços</a></li>
                    <li><a className={` transition-colors duration-500 ${isDarkMode ? "hover:text-[#4d3361] " : "hover:text-[#2a004a]"}  `} href="#work">Trabalhos</a></li>
                    <li><a className={`  transition-colors duration-500 ${isDarkMode ? "hover:text-[#4d3361] " : "hover:text-[#2a004a]"}  `} href="#contact">Fale comigo</a></li>
                </ul>

                <div className='flex items-center gap-4 '>
                    {/* <button className='' onClick={() => setIsDarkMode(prev => !prev)}>


                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6 cursor-pointer ' />


                    </button> */}

                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50 '>Contato
                        <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='arrow_icon' className='w-3' /></a>

                    <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6 ' />
                    </button>
                </div>

                {/* -- -------- mobile menu -------- -- */}

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-[#2a004a] dark:text-white'>

                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>


                    <li><a className='' onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className='' onClick={closeMenu} href="#about">Sobre</a></li>
                    <li><a className='' onClick={closeMenu} href="#services">Serviços</a></li>
                    <li><a className='' onClick={closeMenu} href="#work">Trabalhos</a></li>
                    <li><a className='' onClick={closeMenu} href="#contact">Fale comigo</a></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar