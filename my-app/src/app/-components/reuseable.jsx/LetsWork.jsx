import { motion } from 'motion/react'
import React from 'react'
export default function LetsWork() {

    return (
        <div className='bg-g-deep text-white flex w-full h-[800px]  rounded-xl  mb-16'>
            <div className='w-full'>
                <div>
                    <div>Instragram</div>
                    <div>Linkden</div>
                    <div>Github</div>
                </div>
                <div className='h-full min-w-full bg-amber-50'>
                    <div className='flex justify-start w-full'>
                        <motion.img initial={{ height: "100px" }} whileInView={{ height: "360px" }} transition={{ duration: 0.5, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.5}}
                            className=' object-cover' src={"/handtwo.png.webp"} alt="" />

                    </div>
                    <div className='flex justify-end w-full'>
                        <motion.img initial={{ height: "100px"  }} transition={{ duration: 0.5, ease: "easeInOut" }}
                            whileInView={{ height: "360px" }} viewport={{ once: false, amount: 0.5 }} className=' object-cover' src={"/handone.png.webp"} alt="" />

                    </div>
                </div>


            </div>
        </div>
    )
}
