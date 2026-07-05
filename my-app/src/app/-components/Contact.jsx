'use client'
import { motion } from "framer-motion"
import { useState } from 'react'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [status, setStatus] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setStatus('Thank you! Your message has been prepared. I will follow up shortly.')
        setForm({ name: '', email: '', subject: '', message: '' })
    }
    return (
        <section id='Hireme' className='overflow-visible bg-g-deep/5 px-0 py-14 text-slate-900 sm:py-16 lg:py-20'>
            <div className='mx-auto flex max-w-6xl flex-col px-4 sm:px-6 lg:px-8'>
                <div className='mx-auto max-w-3xl text-center'>
                    <motion.p initial={{ letterSpacing: '50px' }} viewport={{ once: true }} whileInView={{ letterSpacing: '2px' }} exit={{ letterSpacing: '2px' }} className='text-xs uppercase tracking-[0.3em] text-g-primary sm:text-sm'>Contact</motion.p>
                    <h2 className='mt-4 text-2xl font-semibold text-g-deep sm:text-3xl lg:text-4xl'>Let’s build your next project together</h2>
                    <p className='mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base'>Share a few details about your idea and I’ll get back to you with a plan, timeline, and next steps.</p>
                </div>

                <div className='mt-10 grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:gap-8'>
                    <div className='w-full rounded-[28px] border border-white/70 bg-white/90 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-8'>
                        <motion.p initial={{ letterSpacing: '50px' }} whileInView={{ letterSpacing: '2px' }} exit={{ letterSpacing: '2px' }} transition={{ ease: 'linear', duration: 0.4 }} viewport={{ once: true }} className='text-lg font-semibold text-g-deep'>Ready to get started?</motion.p>
                        <p className='mt-4 text-sm leading-7 text-gray-600 sm:text-base'>Tell me about your project, timeline, and the business outcome you want to achieve. I’ll respond with a concise plan and clear next steps.</p>

                        <div className='mt-8 space-y-5'>
                            <div>
                                <p className='font-semibold text-slate-900'>Email</p>
                                <motion.p initial={{ x: -50, opacity: 0.6 }} whileInView={{ x: 0, opacity: 1 }} transition={{ ease: 'easeIn' }} viewport={{ once: true }} className='break-all p-2 text-sm text-gray-600 lowercase'>bilalsheikhsb77@gmail.com</motion.p>
                            </div>
                            <div>
                                <p className='font-semibold text-slate-900'>Availability</p>
                                <p className='text-sm text-gray-600'>Open for new AI and web app projects</p>
                            </div>
                            <div>
                                <p className='font-semibold text-slate-900'>What I need</p>
                                <p className='text-sm text-gray-600'>A short summary of your idea and the value you want it to deliver.</p>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className='w-full rounded-[28px] border border-white/70 bg-white/90 p-5 pt-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-8'>
                        <div className='grid gap-4 sm:grid-cols-2'>
                            <label className='w-full space-y-2 text-sm text-slate-700'>
                                <span>Name</span>
                                <input
                                    type='text'
                                    name='name'
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className='w-full rounded-2xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-g-primary focus:ring-2 focus:ring-g-light/40'
                                />
                            </label>
                            <label className='w-full space-y-2 text-sm text-slate-700'>
                                <span>Email</span>
                                <input
                                    type='email'
                                    name='email'
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className='w-full rounded-2xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-g-primary focus:ring-2 focus:ring-g-light/40'
                                />
                            </label>
                        </div>

                        <label className='mt-4 block space-y-2 text-sm text-slate-700'>
                            <span>Subject</span>
                            <input
                                type='text'
                                name='subject'
                                value={form.subject}
                                onChange={handleChange}
                                required
                                className='w-full rounded-2xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-g-primary focus:ring-2 focus:ring-g-light/40'
                            />
                        </label>

                        <label className='mt-4 block space-y-2 text-sm text-slate-700'>
                            <span>Message</span>
                            <textarea
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                rows='5'
                                required
                                className='min-h-[160px] w-full resize-none rounded-2xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-g-primary focus:ring-2 focus:ring-g-light/40 sm:h-40'
                            />
                        </label>

                        <button
                            type='submit'
                            className='mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-g-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-g-deep'
                        >
                            Send message
                        </button>

                        {status && <p className='mt-4 break-words text-sm text-emerald-700'>{status}</p>}
                    </form>
                </div>
            </div>
        </section>
    )
}
