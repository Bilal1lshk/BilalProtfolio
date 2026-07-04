import React from 'react'

const techCategories = [
    {
        title: 'Frontend Technologies',
        description: 'Building modern, responsive interfaces with performance in mind.',
        items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    },
    {
        title: 'Backend',
        description: 'Reliable APIs, data handling, and secure server-side architecture.',
        items: ['Express.js', 'Node.js', 'MongoDB', 'REST APIs', 'JWT', 'Docker'],
    },
    {
        title: 'Tools',
        description: 'The workflow stack that keeps shipping fast and clean.',
        items: ['VS Code', 'Postman', 'Git & GitHub', 'Vercel', 'Netlify'],
    },
    {
        title: 'AI Skills',
        description: 'Exploring intelligent systems and practical AI integrations.',
        items: ['AI Agents', 'LangChain', 'NumPy', 'RAG'],
    },
]

export default function TechStack() {
    return (
        <div>
            <div className='relative overflow-hidden rounded-[28px] border border-white/50 bg-gradient-to-br from-gray-50 via-white to-emerald-50 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-md'>
                <div className='pointer-events-none absolute left-1/2 top-0 -z-10 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-g-accent/20 blur-[70px]' />

                <div className='mx-auto max-w-5xl'>
                    <div className='text-center'>
                        <p className='text-4xl text-gray-400'>
                            Tech <span className='text-g-light'>Stack</span>
                        </p>

                        <p className='mx-auto my-4 max-w-2xl text-black/80'>
                            The stack behind every line I ship. From React to LangChain, every tool is chosen for real-world impact.
                        </p>

                        <div className='mx-auto mb-8 inline-block rounded-xl border border-emerald-200/70 bg-g-deep px-5 py-3 text-center font-mono text-sm text-white shadow-lg'>
                            <p>{`> tools.filter(t => t.usedInProduction === true)`}</p>
                            <p>{`// no tutorials. no side projects. just shipped work.`}</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-9'>
                        {techCategories.map((category, index) => (

                            <div
                                key={category.title}
                                className={`group relative flex flex-col z-99 ${index === 1 || index === 3 ? "self-end" : ""}   rounded-2xl border border-emerald-100 bg-g-primary p-5 w-[50%] h-auto transition-transform duration-300 hover:-translate-y-1`}
                            >
                                <div className={`${index >= 0 && index<=2 ? "absolute -bottom-50 z-5 left-[50%] h-[200px] w-1 bg-g-light" : ""}`}></div>
                                <div className={`${index === 0 || index === 3 ? "" : "absolute top-40 z-5 -left-[50%] h-[4px] w-[260px] w-1 bg-g-light"}`}></div>

                                <h3 className=' font-semibold bg-g-deep  flex justify-center text-2xl p-2 rounded-xl text-white'>{category.title}</h3>
                                <p className='mt-2 text-sm leading-6 text-gray-200'>{category.description}</p>

                                <div className='mt-4 flex flex-wrap gap-2'>
                                    {category.items.map((item) => (
                                        <span
                                            key={item}
                                            className='rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-sm font-medium text-g-deep transition-colors duration-300 group-hover:bg-emerald-100'
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
