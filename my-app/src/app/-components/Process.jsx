import React from 'react'

const phases = [
  {
    id: '01',
    title: 'Discover & Strategize',
    description: 'We jump on a call, learn your processes, and define success so you leave with a clear AI strategy and a fixed proposal.',
    items: ['30–45 min strategy call', 'Written scope + proposal', 'No-pressure decision'],
  },
  {
    id: '02',
    title: 'Design & Architect',
    description: 'I map out the system architecture, agent flows, and data models so you see the plan before any code is written.',
    items: ['Agent flow diagram', 'Milestone schedule', 'Architecture review'],
  },
  {
    id: '03',
    title: 'Build & Iterate',
    description: 'I ship in tight, reviewable iterations with weekly demos, daily async updates, and early access to test AI agents.',
    items: ['Clean, modular code', 'Prompt & agent evals', 'Async-first updates'],
  },
  {
    id: '04',
    title: 'Deploy & Optimize',
    description: 'Production deploy, latency tuning, and handover docs. Then I stay for a support window so your AI systems perform in the real world.',
    items: ['Production deploy', 'Handover docs + Loom', '30-day support'],
  },
]

export default function Process() {
  return (
    <section id='Process' className='relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto mb-10 max-w-3xl text-center'>
        <p className='text-sm uppercase tracking-[0.3em] text-emerald-600'>Process</p>
        <h2 className='mt-4 text-4xl font-semibold text-gray-900'>How I deliver AI product work</h2>
        <p className='mt-4 text-gray-600'>A connected delivery flow from discovery to production, with every phase linked for visibility and accountability.</p>
      </div>

      <div className='relative flex flex-col gap-10'>
        <div className='pointer-events-none absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-emerald-200/50' />

        {phases.map((phase, index) => (
          <div key={phase.id} className='relative z-10 flex items-start gap-6 sm:gap-8'>
            <div className='flex flex-col items-center'>
              <div className='flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white shadow-lg'>
                {phase.id}
              </div>
              {index < phases.length - 1 && <div className='mt-3 h-full w-px bg-emerald-200' />}
            </div>

            <div className='group relative w-full overflow-hidden rounded-[28px] border border-white/60 bg-white/80 p-7 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1'>
              <div className='absolute right-0 top-0 h-full w-16 bg-gradient-to-b from-emerald-50 to-transparent opacity-80' />
              <div className='relative'>
                <p className='text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700'>{phase.title}</p>
                <p className='mt-3 text-base leading-7 text-slate-700'>{phase.description}</p>

                <ul className='mt-5 space-y-3'>
                  {phase.items.map((item) => (
                    <li key={item} className='flex items-start gap-3 text-sm text-slate-600'>
                      <span className='mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500' />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
