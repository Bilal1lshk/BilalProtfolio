import React from 'react'

export default function Aboutme() {
    return (
        <div>

            <div className='h-full w-full mt-1 flex justify-center relative'>
                <img src="/Bilalmainimg.png
            " className='h-[700px] w-[900px] object-cover overflow-hidden' alt="" />
                <button>

                </button>
                <h3 className='absolute top-1 text-xl text-g-primary '>
                    Bilal | AI & MENN Stack Developer
                    Where Intelligence Meets Fullstack.
                </h3>
                <div className='bg-g-deep text-gray-100  h-14 absolute top-70 left-5'>
                    <h3 className='uppercase p-2.5'>
                        MEEN Stack custom development
                    </h3>
                </div>
                <div className='bg-g-deep text-gray-100   w-[460px] absolute top-[400px] left-[740px]'>
                    <h3 className='uppercase p-1.5'>
                        Making apps smarter with OpenAI, LangChain & custom-trained models.
                    </h3>
                </div>
            </div>

        </div>
    )
}
