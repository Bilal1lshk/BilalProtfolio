import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaCode, FaBrain, FaRocket, FaRobot, FaDatabase } from 'react-icons/fa'

const services = [
    {
        title: 'Custom Portfolio Websites',
        description:
            'Modern, fast, and visually striking websites designed to showcase your brand and work with confidence.',
        icon: <FaCode />,
        link: '#Hireme',
    },
    {
        title: 'AI-Powered Web Apps',
        description:
            'Smart experiences using OpenAI, LangChain, and custom automation to make your product more useful and engaging.',
        icon: <FaBrain />,
        link: '#Hireme',
    },
    {
        title: 'Full-Stack Product Builds',
        description:
            'End-to-end development for scalable apps, dashboards, and digital products with polished user experiences.',
        icon: <FaRocket />,
        link: '#Hireme',
    }, {
        title: 'AI Agents &  Automation',
        description:
            'Custom AI agents that automate repetitive tasks, handle workflows, and improve productivity across your business.',
        icon: <FaRobot />,
        link: '#Hireme',
    },
    {
        title: 'RAG Systems & AI Search',
        description:
            'Build intelligent knowledge systems using RAG to provide accurate answers from your documents and business data.',
        icon: <FaDatabase />,
        link: '#Hireme',
    },
]

export default function Services() {
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'], // tracks full scroll through container
    })

    // Tune "-60%" based on number of cards — more cards = larger negative value
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-28%'])

    return (
        <section id="Services" className='w-full overflow-x-hidden bg-g-light text-black'>

            {/* Heading — outside sticky zone so it scrolls away naturally */}
            <div className='px-6 pt-20 sm:px-8 lg:px-12 bg-g-light'>
                <div className='mx-auto max-w-6xl bg-g-light'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.2 }}
                        className='text-center bg-g-light'
                    >
                        <p className='mb-3 text-xl font-semibold uppercase tracking-[0.3em] text-g-primary'>
                            Services
                        </p>
                        <h2 className='text-2xl font-bold sm:text-3xl lg:text-4xl'>
                            What I can build for you
                        </h2>
                        <p className='mx-auto mt-4 max-w-2xl text-lg text-gray-600'>
                            I create polished digital experiences that blend clean design, modern
                            development, and intelligent features.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Tall wrapper — useScroll tracks this to drive horizontal motion */}
            <div ref={containerRef} className='relative  md:h-[120vh] h-[130vh] overflow-hidden'>

                {/* Sticky viewport — pins in place while user scrolls through tall wrapper */}
                <div className='sticky top-50 flex h-screen items-center overflow-x-hidden overflow-y-hidden'>

                    {/* This is the element that actually moves horizontally */}
                    <motion.div
                        style={{ x }}
                        className='mt-10 flex h-full gap-4 px-4 py-4 sm:gap-6 sm:px-6 md:gap-8 md:px-12'
                    >
                        {services.map((service, index) => (
                            <motion.article
                                key={service.title}
                                initial={{ opacity: 0,}}
                                whileInView={{ opacity: 1,}}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    ease: 'easeOut',
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                                className='m-2 h-[510px] md:h-[440px] w-[85vw] max-w-[320px] shrink-0 rounded-3xl border border-gray-200 bg-[#f8f8f8] p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:w-[320px] sm:max-w-[320px] sm:p-8 md:m-5 md:w-[360px] md:max-w-[360px] lg:w-[420px] lg:max-w-[420px]'
                            >
                                {/* Icon */}
                                <div className='mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-g-deep text-2xl text-white'>
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className='text-2xl font-semibold text-g-deep'>
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className='mt-3 text-gray-600'>{service.description}</p>

                                {/* CTA */}
                                <a
                                    href={service.link}
                                    className='mt-6 pb-1 inline-flex items-center text-sm font-semibold text-g-primary transition hover:text-g-deep'
                                >
                                    Let&apos;s talk →
                                </a>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}