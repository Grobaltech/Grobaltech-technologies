import { useEffect, useRef, useState } from 'react'

function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    let frame = 0
    let started = false
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return
      started = true
      const start = performance.now()
      const duration = 1500
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration)
        setCount(Math.round(value * (1 - Math.pow(1 - t, 3))))
        if (t < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
      observer.disconnect()
    }, { threshold: 0.5 })
    observer.observe(node)
    return () => { observer.disconnect(); cancelAnimationFrame(frame) }
  }, [value])
  return <span ref={ref}>{count}{suffix}</span>
}
export default function About() {
  return <section id="about" className="py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-100 rounded-full -z-10"/>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl"><img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" alt="Team working" className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"/></div>
          <div className="absolute -bottom-8 -right-4 lg:right-8 bg-primary-500 text-white rounded-2xl p-6 shadow-xl max-w-[200px]"><div className="text-5xl font-bold leading-none"><CountUp value={25} suffix="+"/></div><div className="text-sm font-medium mt-1 opacity-90">Years Of Experience in This Technology Company.</div></div>
        </div>
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-5">Get To Know Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 leading-tight mb-6">Innovative Business Solutions for Technology Companies</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">Grobaltech Technologies delivers cutting-edge IT strategies, digital transformation, and secure technology infrastructure that help organizations scale with confidence.</p>
          <ul className="space-y-3 mb-8">{['100% Better Results','Proven Delivery Timeline Guarantee','Enterprise-Grade Security Reviews','Dedicated Support & Consulting'].map(item=><li key={item} className="flex items-start gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center text-white text-xs">✓</span><span className="text-slate-700 font-medium">{item}</span></li>)}</ul>
          <div className="flex items-center gap-4 pt-4 border-t border-slate-100"><div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden"><img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80" alt="Company leadership" className="w-full h-full object-cover"/></div><div><div className="font-bold text-dark-900">Grobaltech Leadership</div><div className="text-sm text-slate-500">Grobaltech Technologies</div></div></div>
        </div>
      </div>
    </div>
  </section>
}
