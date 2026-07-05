import React from 'react'
import { FaArrowDown } from "react-icons/fa";
import { easeOut, motion } from "framer-motion"
export default function Aboutme() {
    return (
        <div>

            <div className='h-full w-full mt-1 flex justify-center relative'>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1, duration: 1, ease: "easeOut" }} src="/Bilalmainimg.png
            " className='h-[700px] w-[900px] object-cover overflow-hidden mt-14 lg:mt-2' alt="" />
                <motion.button initial={{ opacity: 0.6, rotate: 0 }} whileInView={{ opacity: 1, rotate: 45 }} transition={{ delay: 1, duration: 1, ease: "easeOut" }} className='absolute bg-black  rounded-xl p-1 top-70 text-4xl text-amber-50 left-[980px]'>
                    <FaArrowDown />

                </motion.button>
                <motion.h3 initial={{ opacity: 0.6, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }} className='absolute top-1 p-1 text-lg md:text-xl text-g-primary '>
                    Bilal | AI & MENN Stack Developer
                    Where Intelligence Meets Fullstack.
                </motion.h3>
                <motion.div initial={{ opacity: 0.6, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className='bg-g-deep/80 text-gray-100  h-14 absolute top-70 left-5'>
                    <h3 className='uppercase p-2.5'>
                        MEEN Stack custom development
                    </h3>
                </motion.div>
                <motion.div initial={{ opacity: 0.6, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className='bg-g-deep text-gray-100   w-[460px] absolute top-[600px]  lg:top-[400px] md:left-[740px]'>
                    <h3 className='uppercase p-1.5'>
                        Making apps smarter with OpenAI, LangChain & custom-trained models.
                    </h3>
                </motion.div>
                <div className='absolute top-96 left-0 md:left-12 text-black '>
                    <div>
                        <h5 className='text-gray-500'>Current status</h5>
                        <div className='border-2 border-black h-[30px] w-[50px]  rounded-2xl flex justify-center items-center'>
                            <motion.div initial={{ opacity: 0.6, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} transition={{
                                duration: 2, ease: "easeOut", repeat: Infinity,
                            }} className='bg-black rounded-3xl w-[50px] h-[30px] origin-center'>

                            </motion.div>
                        </div>
                    </div>
                    <p className='text-gray-500'>avalaible for work</p>
                </div>
            </div>

        </div>
    )
}
