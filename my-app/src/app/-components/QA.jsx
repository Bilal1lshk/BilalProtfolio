import React from 'react'

const faqs = [
  {
    question: 'I have an idea for a web app — can you build the whole thing, front to back?',
    answer:
      'Yes! As a MEAN stack developer, I handle everything end-to-end — MongoDB for your data, Express & Node.js for the backend logic, and Angular for a smooth, responsive front-end. You bring the idea, I deliver a fully working product.',
  },
  {
    question: 'Can you add AI features to make my app smarter, like a chatbot or recommendations?',
    answer:
      'Absolutely — that’s actually my specialty. I integrate AI capabilities like chatbots, smart search, content generation, and recommendation systems directly into MEAN stack apps using tools like OpenAI, LangChain, and custom ML APIs.',
  },
  {
    question: 'How is your approach different from a regular web developer?',
    answer:
      'Most developers build apps that just store and display data. I build apps that understand and respond — combining solid full-stack architecture with AI-driven features, so your product feels intelligent, not just functional.',
  },
  {
    question: 'Will my app be able to handle real users and scale as my business grows?',
    answer:
      'Definitely. I design with scalability in mind from day one — optimized MongoDB schemas, efficient API structures, and cloud-ready deployment (Docker/AWS), so your app grows smoothly instead of breaking under pressure.',
  },
  {
    question: 'I’m not very technical — can you guide me through the process?',
    answer:
      'Of course! I keep things simple and transparent — no confusing jargon. I’ll walk you through each step, from planning to launch, and make sure the final product actually solves your problem, not just checks technical boxes.',
  },
]

export default function QA() {
  return (
    <section className='bg-g-light/10 text-slate-900'>
      <div className='mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12'>
        <div className='mx-auto max-w-3xl text-center'>
          <p className='text-sm uppercase tracking-[0.35em] text-g-primary'>Q&A</p>
          <h2 className='mt-4 text-3xl font-semibold text-g-deep'>Questions clients ask most often</h2>
          <p className='mt-4 text-gray-600'>Straight answers on full-stack development, AI integration, support, and how I make your app ready for real users.</p>
        </div>

        <div className='mt-12 grid gap-6 md:grid-cols-2'>
          {faqs.map((faq) => (
            <article key={faq.question} className='group overflow-hidden rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1'>
              <div className='mb-4 inline-flex rounded-full bg-g-primary/10 px-3 py-1 text-sm font-semibold text-g-deep'>Q</div>
              <h3 className='text-lg font-semibold text-g-deep'>{faq.question}</h3>
              <p className='mt-3 text-sm leading-7 text-slate-600'>{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
