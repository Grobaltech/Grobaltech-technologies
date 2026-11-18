const steps = [
  { num: '01', title: 'Discovery & Strategy', desc: 'We analyze your goals, challenges, and existing systems to craft a tailored technology roadmap.' },
  { num: '02', title: 'Design & Development', desc: 'Our team builds secure, scalable solutions with modern architecture and clean, maintainable code.' },
  { num: '03', title: 'Launch & Optimize', desc: 'We deploy, monitor, and continuously improve your systems so they deliver lasting business value.' },
]

export default function Process() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">How To Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">Standard Working Process</h2>
          <p className="text-slate-500">A clear, collaborative approach that keeps projects on track and stakeholders aligned.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="relative text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/30">
                {s.num}
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
