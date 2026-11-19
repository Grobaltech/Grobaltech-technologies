const steps = [
  { num: '01', title: 'Discovery & Strategy', desc: 'We understand your goals, challenges, audience, and existing systems before defining the right technology roadmap.' },
  { num: '02', title: 'Planning & Design', desc: 'We shape the user experience, technical architecture, and delivery plan around your business needs.' },
  { num: '03', title: 'Development & Testing', desc: 'Our team builds your solution, tests every key interaction, and refines it for performance and reliability.' },
  { num: '04', title: 'Launch & Support', desc: 'We launch, monitor, and continuously improve your solution as your organisation grows.' },
]

export default function Process() {
  return (
    <section className="py-24 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">How To Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">Standard Working Process</h2>
          <p className="text-slate-500">A clear, collaborative four-step approach that takes every project from the first conversation to long-term success.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-7">
          {steps.map((s) => (
            <article key={s.num} className="relative text-center process-step">
              <div className="process-orbit relative w-36 h-36 mx-auto mb-7 rounded-full flex items-center justify-center">
                <div className="process-orbit-arc process-orbit-arc-top absolute inset-0 rounded-full" aria-hidden="true"/>
                <div className="process-orbit-arc process-orbit-arc-bottom absolute inset-0 rounded-full" aria-hidden="true"/>
                <div className="process-orbit-core relative z-10 w-24 h-24 rounded-full bg-primary-500 text-white text-2xl font-bold flex items-center justify-center shadow-lg shadow-primary-500/30">
                  {s.num}
                </div>
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
