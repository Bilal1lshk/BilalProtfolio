import React from 'react'

const techCategories = [
    {
        title: 'Frontend Technologies',
        description: 'Building modern, responsive interfaces with performance in mind.',
        items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
        accent: 'from-emerald-400 to-teal-500',
    },
    {
        title: 'Backend',
        description: 'Reliable APIs, data handling, and secure server-side architecture.',
        items: ['Express.js', 'Node.js', 'MongoDB', 'REST APIs', 'JWT', 'Docker'],
        accent: 'from-cyan-400 to-sky-500',
    },
    {
        title: 'Tools',
        description: 'The workflow stack that keeps shipping fast and clean.',
        items: ['VS Code', 'Postman', 'Git & GitHub', 'Vercel', 'Netlify'],
        accent: 'from-violet-400 to-fuchsia-500',
    },
    {
        title: 'AI Skills',
        description: 'Exploring intelligent systems and practical AI integrations.',
        items: ['AI Agents', 'LangChain', 'NumPy', 'RAG'],
        accent: 'from-amber-400 to-orange-500',
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

                    <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
                        {techCategories.map((category) => (
                            <div
                                key={category.title}
                                className='group relative overflow-hidden rounded-2xl border border-emerald-100 bg-white/80 p-5 shadow-[0_10px_35px_rgba(16,185,129,0.12)] backdrop-blur transition-transform duration-300 hover:-translate-y-1'
                            >
                                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${category.accent}`} />
                                <h3 className='text-lg font-semibold text-g-deep'>{category.title}</h3>
                                <p className='mt-2 text-sm leading-6 text-gray-600'>{category.description}</p>

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
