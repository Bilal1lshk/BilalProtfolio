"use client";

import React, { useState } from 'react'

export default function Loader() {
    let [value, setvalue] = useState(10)
    console.log(value)
    for (value; value = 100; value++) {

        setvalue((prev) => prev + 20)
    }
    return (
        <div className='min-h-screen
    w-full bg-g-light fixed '>
            <div className='flex flex-col items-center h-screen   w-full'>
                <div className=' h-[400px] flex justify-center items-center text-6xl w-full '>

                    <h1 className='text-g-deep mt-[140px]'>Protfolio</h1>
                </div>
                <div className='w-[200px] h-[7px] relative bg-gray-400 mb-10 -mt-10'>
                    <div className='w-[20%] h-[7px] absolute top-0 bg-amber-50 '>

                    </div>
                </div>
                <p className='text-white text-xl w-full flex justify-center '>BILAL AI Full Stack Developer</p>

            </div>


        </div>
    )
}
