import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({ project, index }) {
    const { title, description, image, stack, liveUrl, githubUrl } = project
    const imageSrc = typeof image === 'string' ? image : image?.src

    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: 'easeOut',
            }}
            viewport={{ once: true, amount: 0.2 }}
            className='group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-[#f8f8f8] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl'
        >
            <div className='relative h-48 w-full overflow-hidden sm:h-52'>
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt={`${title} project preview`}
                        className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
                    />
                ) : (
                    <div
                        className='flex h-full w-full items-center justify-center bg-gradient-to-br from-g-deep via-g-primary to-g-light transition duration-500 group-hover:scale-105'
                        aria-hidden='true'
                    >
                        <span className='text-5xl font-bold text-white/25 select-none'>
                            {title.charAt(0)}
                        </span>
                    </div>
                )}
                <div className='pointer-events-none absolute inset-0 bg-g-deep/0 transition duration-300 group-hover:bg-g-deep/10' />
            </div>

            <div className='flex flex-1 flex-col p-6 sm:p-7'>
                <h3 className='text-xl font-semibold text-g-deep sm:text-2xl'>{title}</h3>
                <p className='mt-3 flex-1 text-sm leading-relaxed text-gray-600 sm:text-base'>
                    {description}
                </p>

                <div className='mt-5 flex flex-wrap gap-2'>
                    {stack.map((tech) => (
                        <span
                            key={tech}
                            className='rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-medium text-g-deep transition-colors duration-300 group-hover:bg-emerald-100'
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
                    <a
                        href={liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={`View live demo of ${title}`}
                        className='inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-g-primary px-4 py-3 text-sm font-semibold text-black transition hover:bg-g-deep hover:text-white'
                    >
                        Live Demo
                        <FaExternalLinkAlt className='text-xs' aria-hidden='true' />
                    </a>
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label={`View GitHub repository for ${title}`}
                            className='inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-g-primary px-4 py-3 text-sm font-semibold text-g-primary transition hover:bg-g-primary hover:text-black'
                        >
                            GitHub
                            <FaGithub className='text-base' aria-hidden='true' />
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    )
}
