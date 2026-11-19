import { useEffect, useRef, useState } from 'react'
import { BriefcaseBusiness, Smile, Users, Award } from 'lucide-react'

const metrics = [
  { value: 250, suffix: '+', label: 'Projects Completed', Icon: BriefcaseBusiness },
  { value: 180, suffix: '+', label: 'Happy Clients', Icon: Smile },
  { value: 25, suffix: '+', label: 'Expert Members', Icon: Users },
  { value: 15, suffix: '+', label: 'Years Experience', Icon: Award },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
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
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / 1800)
        const eased = 1 - Math.pow(1 - progress, 4)
        setCount(Math.round(value * eased))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
      observer.disconnect()
    }, { threshold: .35 })
    observer.observe(node)
    return () => { observer.disconnect(); cancelAnimationFrame(frame) }
  }, [value])
  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats() {
  return <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
        {metrics.map(({ value, suffix, label, Icon }) => <div key={label} className="flex flex-col items-center text-center">
          <div className="stats-orbit relative w-36 h-36 sm:w-40 sm:h-40 rounded-full flex items-center justify-center mb-5">
            <div className="stats-orbit-inner absolute inset-[9px] rounded-full border border-primary-100"/>
            <div className="relative z-10 flex flex-col items-center">
              <Icon size={21} className="text-primary-500 mb-1"/>
              <div className="text-3xl sm:text-4xl font-extrabold text-dark-900 tabular-nums"><Counter value={value} suffix={suffix}/></div>
            </div>
          </div>
          <h3 className="font-semibold text-dark-800">{label}</h3>
        </div>)}
      </div>
    </div>
  </section>
}
