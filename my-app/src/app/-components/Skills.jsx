import React from 'react'
import { motion } from 'framer-motion'

const expertiseContent = [
    {
        title: "AI SaaS Builds",
        width: "w-full md:w-1/2",
        description: "Designing and shipping subscription-ready SaaS platforms powered by AI — smart dashboards, usage-based billing, user auth, and AI features baked in from day one. From idea to a live product clients actually pay for.",
        skills: ['OpenAI API', 'Stripe', 'Next.js', 'MongoDB', 'JWT Auth'],
        number: "01",
    },
    {
        title: "AI Agents",
        width: "w-full md:w-1/3",
        description: "Building goal-driven AI agents that think, plan, and act — web scrapers, research assistants, automated workflows, and multi-step task runners using LangChain Agents, OpenAI Functions & tool-use APIs.",
        skills: ['LangChain', 'OpenAI Functions', 'Python', 'Tool Use', 'AutoGPT'],
        number: "02",
    },
    {
        title: "Full Stack Web Apps",
        width: "w-full md:w-1/2",
        description: "End-to-end product development with MongoDB, Express, React & Node.js — clean architecture, REST APIs, JWT auth, cloud deployment, and scalable codebases built for real users and real traffic.",
        skills: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
        number: "03",
    },
    {
        title: "RAG & Chat Systems",
        width: "w-full md:w-1/3",
        description: "Building Retrieval-Augmented Generation pipelines that let AI answer questions from your own data — documents, PDFs, databases, and knowledge bases — with accurate, source-grounded responses.",
        skills: ['LangChain', 'Pinecone', 'OpenAI', 'Vector DBs', 'PDF Parsing'],
        number: "04",
    },
]

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
    }),
}

export default function Expertise() {
    return (
        <section id="Experise" className='w-full px-6 py-20 sm:px-8 lg:px-12'>

            {/* Heading */}
            <div className='flex flex-col items-center gap-4 text-center mb-14'>
                <div className='bg-g-deep py-1.5 px-4 rounded-2xl'>
                    <p className='text-g-accent text-sm font-semibold tracking-widest uppercase'>Expertise</p>
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-g-accent'>
                    Technical depth, <span className='text-gray-500'>business focus.</span>
                </h1>
                <p className='text-sm text-gray-600 max-w-xl leading-relaxed'>
                    I bridge the gap between engineering and operations, delivering robust AI solutions
                    without the need to coordinate multiple contractors.
                </p>
            </div>

            <div className='flex flex-col justify-center md:flex-row flex-wrap gap-4 w-full'>
                {expertiseContent.map((data, i) => (
                    <motion.div

                        key={data.title}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className={`bg-g-deep/80 rounded-3xl p-7 flex flex-col justify-between  ${data?.width} min-h-[340px] border border-white/5 hover:border-g-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20`}
                    >
                        <div>
                            <div className='flex items-start justify-between mb-4'>
                                <span className='text-4xl font-bold text-white/10 select-none leading-none'>
                                    {data.number}
                                </span>
                            </div>
                            <h2 className='text-xl font-bold text-green-200 mb-3'>{data.title}</h2>
                            <p className='text-sm text-white/80 leading-relaxed'>{data.description}</p>
                        </div>

                        <div className='flex flex-wrap gap-2 mt-6'>
                            {data.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className='text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-g-primary border border-g-primary/20'
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    )
}