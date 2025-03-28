import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "1a536d16-d305-4f85-b85d-e21a1c536d31");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20  bg-no-repeat bg-center  bg-[url("/footer-bg-color.png")] bg-[length:90%_auto]'>
            <h4 className='text-center mb-2 text-lg'>Connect with me</h4>
            <h2 className='text-center text-5xl '>Get in touch</h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12  '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ut, totam alias iure asperiores cum inventore possimus sunt reiciendis, adipisci praesentium fuga voluptates eos ipsum.</p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div
                    style={{ gridTemplateColumns: "var(--grid-cols-auto)" }}
                    className='grid  gap-6 mt-10 mb-8'>
                    <input type="text" placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name'/>
                    <input type="email" placeholder='Enter your Email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email'/>
                </div>
                <textarea className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' rows={6} placeholder='Enter your message' name='message' required></textarea>

                <button className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer' type='submit'>Submit now  <Image src={assets.right_arrow_white} alt='' className='w-4 ' />
                </button>

                <p className=''>{result}</p>
            </form>

        </div>
    )
}

export default Contact