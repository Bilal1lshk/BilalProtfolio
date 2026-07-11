import { motion } from 'motion/react'
import React, { useEffect, useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function LetsWork() {
    const [ismobile, setidmobile] = useState(false)
    useEffect(() => {
        const checkscreen = () => {
            const sheckscreen = setidmobile(window.innerWidth > 640)
        }
        checkscreen();

        window.addEventListener("resize", checkscreen)

        return (() => window.removeEventListener("resize", checkscreen))

    }, [])
    const contaainer = {
        hidden: { height: "100px" },
        visible: {
            height: ismobile ? "260px" : "160px",
            transition: {
                duration: 0.5, ease: "easeInOut"
            }
        },
    }

    const letterContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    }

    const letterItem = {
        hidden: { y: 60, opacity: 0 },
        visible: {
            y: 0,
            opacity: 0.6,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    }
    return (
        <div className=' text-black flex w-full h-[900px]  rounded-xl  mb-16'>
            <div className='w-full'>
                <div className='flex flex-col md:flex-row flex-wrap justify-between mb-10 p-4'>
                    <div className='flex flex-col justify-center items-center gap-2'><h3>Instragram</h3> <FaInstagram className='text-2xl' /></div>
                    <div className='flex flex-col justify-center items-center gap-2'><h3>Linkden</h3> <FaLinkedin className='text-2xl' /></div>
                    <div className='flex flex-col justify-center items-center gap-2'><h3>Github</h3> <FaGithub className='text-2xl' /></div>
                </div>
                <div className='h-full min-w-full '>
                    <div className='flex justify-start w-full'>
                        <motion.img variants={contaainer}
                            initial="hidden"
                            whileInView="visible"
                            className=' object-cover' src={"/handtwo.png.webp"} alt="" />

                    </div>
                    <div><motion.h5 initial={{ y: 90, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className=' text-center text-3xl mt-3 '>LETS WORK TOGRTHER</motion.h5></div>
                    <div className='flex justify-end w-full'>
                        <motion.img variants={contaainer}
                            initial="hidden"
                            whileInView="visible"
                            className=' object-cover' src={"/handone.png.webp"} alt="" />

                    </div>
                    <motion.div
                        variants={letterContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex flex-row flex-wrap mt-5'
                    >
                        <motion.h1 variants={letterItem} className='mt-5    text-[65px] md:text-[200px] inset-0 opacity-[0.6]'>B</motion.h1>
                        <motion.h1 variants={letterItem} className='mt-5  text-[65px] md:text-[200px] inset-0 opacity-[0.6]'>i</motion.h1>
                        <motion.h1 variants={letterItem} className='mt-5  text-[65px] md:text-[200px] inset-0 opacity-[0.6]'>l</motion.h1>
                        <motion.h1 variants={letterItem} className='mt-5  text-[65px] md:text-[200px] inset-0 opacity-[0.6]'>a</motion.h1>
                        <motion.h1 variants={letterItem} className='mt-5  text-[65px] md:text-[200px] inset-0 opacity-[0.6]'>l</motion.h1>
                    </motion.div>

                </div>


            </div>
        </div>
    )
}
