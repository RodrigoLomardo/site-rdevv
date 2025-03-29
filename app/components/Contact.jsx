import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

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
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}

            id='contact' className='w-full px-[12%] py-10 scroll-mt-20  bg-no-repeat bg-center  bg-[url("/footer-bg-color.png")] bg-[length:90%_auto] dark:bg-none'>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}

                className='text-center mb-2 text-lg'>Conecte-se comigo</motion.h4>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl '>Mande um Oi!</motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}

                className='text-center max-w-2xl mx-auto mt-5 mb-12  '>Caso queira entrar em contato para conversar sobre um projeto, proposta ou apenas para bater um papo, é só mandar uma mensagem!</motion.p>

            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div
                    style={{ gridTemplateColumns: "var(--grid-cols-auto)" }}
                    className='grid  gap-6 mt-10 mb-8'>
                    <motion.input
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        type="text" placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#2a004a] dark:border-white/90' name='name' />
                    <motion.input
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        type="email" placeholder='Enter your Email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-[#2a004a] dark:border-white/90' name='email' />
                </div>
                <motion.textarea 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                
                className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6  dark:bg-[#2a004a] dark:border-white/90' rows={6} placeholder='Enter your message' name='message' required></motion.textarea>

                <motion.button 
                whileHover={{scale: 1.05}}
                transition={{duration: 0.3}}

                className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer dark:bg-transparent dark:border-[0.5px] dark:hover:bg-[#2a004a]' type='submit'>Enviar Agora <Image src={assets.right_arrow_white} alt='' className='w-4 ' />
                </motion.button>

                <p className=''>{result}</p>
            </motion.form>

        </motion.div>
    )
}

export default Contact