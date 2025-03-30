import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2 ' />

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6 ' /> rlomardo@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p className=''>Feito utlizando <span className='hover:text-[#929292] duration-500 transition-colors cursor-default'> Next.js</span >, <span className='hover:text-[#f0db4f] duration-500 transition-colors cursor-default'>Javascript</span> e <span className='hover:text-[#35BEF8] duration-500 transition-colors cursor-default'>TailwindCss</span></p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a target='_blank' className={`duration-500 transition-colors ${isDarkMode ? "hover:text-[#4d3361] " : "hover:text-[#2a004a]"}`} href="https://github.com/RodrigoLomardo">Github</a></li>
          <li><a target='_blank' className={`duration-500 transition-colors ${isDarkMode ? "hover:text-[#4d3361] " : "hover:text-[#2a004a]"}`} href="https://linkedin.com/in/rodrigolomardo">LinkedIn</a></li>
          <li><a target='_blank' className={`duration-500 transition-colors ${isDarkMode ? "hover:text-[#4d3361] " : "hover:text-[#2a004a]"}`} href="https://www.instagram.com/r.lomardo/">Instagram</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Footer