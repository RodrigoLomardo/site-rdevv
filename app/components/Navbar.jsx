import { assets } from '@/assets/assets'
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
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt='' className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm  " : ""}`}>
                <a href="#top">
                    <Image src={assets.logo} className='w-28 cursor-pointer mr-14' />
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white/50 shadow-sm"}   `}>
                    <li><a className='' href="#top">Home</a></li>
                    <li><a className='' href="#about">About me</a></li>
                    <li><a className='' href="#services">Services</a></li>
                    <li><a className='' href="#work">My Work</a></li>
                    <li><a className='' href="#contact">Contact me</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        
                        
                        <Image src={assets.moon_icon} alt='' className='w-6 cursor-pointer' />

                        
                    </button>

                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contact <Image src={assets.arrow_icon} alt='arrow_icon' className='w-3' /></a>

                    <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}>
                        <Image src={assets.menu_black} alt='' className='w-6 ' />
                    </button>
                </div>

                {/* -- -------- mobile menu -------- -- */}

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>


                    <li><a className='' onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className='' onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className='' onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className='' onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className='' onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar