import React from 'react'

export default function TechStack() {
    return (
        <div>
            <div className='bg-gray-100 relative backdrop-blur-md border border-white/20 rounded-2xl p-6  h-[900px]'>
                <div className='absolute top-0 bg-g-accent/20 min-h-[400px] w-[500px] blur-[50px] rounded-sm left-1/2 -translate-x-1/2  pointer-events-none -z-10 '>

                </div>
                <div>
                    <p className='text-4xl text-center text-gray-400'>
                        Tech  <span className='text-g-light'>Stack</span>
                    </p>

                    <p className='text-center  my-4 text-black/80'>
                        The stack behind every line I ship.
                        From React to LangChain — every tool chosen for a reason.
                    </p>

                    <div className='bg-g-deep text-white text-sm  py-3 w-[300px] font-mono text-center rounded-sm'>
                        <p> {`> tools.filter(t => t.usedInProduction === true)`}</p>
                        <p> {`// no tutorials. no side projects. just shipped work.`}</p>

                    </div>

                </div>


            </div>
        </div>
    )
}
