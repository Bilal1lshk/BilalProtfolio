import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './reuseable.jsx/ProjectCard'

const projects = [
    {
        title: 'Job Portal ',
        description:
            'A full-stack job portal that connects job seekers with employers through a modern, responsive platform. Users can create accounts, browse job listings, apply for positions, and manage their applications, while recruiters can post jobs, review applicants, and manage hiring workflows through a dedicated dashboard.',
        image: '/jobportalss.png',
        stack: ['React', 'Nodejs', 'Express', 'MongoDB'],
        liveUrl: 'https://job-portal-frontend-phi-six.vercel.app/',
        githubUrl: 'https://github.com/Bilal1lshk/job_portal_Frontend',
    },
    {
        title: 'E-Commerce Store',
        description:
            'A full-stack MERN e-commerce application that provides a smooth and secure online shopping experience. Customers can browse products, search and filter items, manage their cart, and place orders, while administrators can manage products, categories, inventory, and customer orders through a dedicated admin panel.',
        image: '/ecommersss.png',
        stack: ['React', 'Nodejs', 'Express', 'MongoDB'],
        liveUrl: 'https://ecom-frontend-dsbo.vercel.app/',
        githubUrl: 'https://github.com/Bilal1lshk/Ecom-Frontend',
    },

]

export default function Projects() {
    return (
        <section id='Projects' className='w-full px-6 py-20 sm:px-8 lg:px-12'>
            <div className='mx-auto max-w-6xl'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.2 }}
                    className='mx-auto max-w-3xl text-center'
                >
                    <p className='text-sm uppercase tracking-[0.3em] text-g-primary'>Projects</p>
                    <h2 className='mt-4 text-2xl font-bold sm:text-3xl lg:text-4xl'>
                        Work I&apos;ve shipped
                    </h2>
                    <p className='mx-auto mt-4 max-w-2xl text-gray-600'>
                        A selection of AI-powered products and full-stack builds — from concept to
                        production-ready deployment.
                    </p>
                </motion.div>
                <div className='mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8'>
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
