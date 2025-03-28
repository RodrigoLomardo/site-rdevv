import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg'>What I Offer</h4>
            <h2 className='text-center text-5xl '>My services</h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12  '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ut, totam alias iure asperiores cum inventore possimus sunt reiciendis, adipisci praesentium fuga voluptates eos ipsum.</p>

            <div
                style={{ gridTemplateColumns: "var(--grid-cols-auto)" }}
                className="grid gap-6 my-10"
            >
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500'>
                        <Image alt='' src={icon} className='w-10 ' />

                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>

                        <p className='text-sm text-gray-600 leading-5'>
                            {description}
                        </p>

                        <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                            Read more <Image alt='' src={assets.right_arrow} className='w-4' />
                        </a>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services