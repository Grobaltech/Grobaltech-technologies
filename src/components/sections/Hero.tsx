import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Play, ChevronLeft, ChevronRight, X } from 'lucide-react'

const slides = [
  { eyebrow: 'Welcome to IT Solutions', title: 'Affordable Big IT &', accent: 'Technology Solutions', text: 'The goal of IT services is to provide efficient and effective technology solutions that help businesses achieve their objectives.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=85' },
  { eyebrow: 'Build • Transform • Grow', title: 'Technology That', accent: 'Moves Business Forward', text: 'We turn ambitious ideas into dependable digital products, modern platforms and smarter ways of working.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=85' },
  { eyebrow: 'Your Digital Partner', title: 'Ideas Into Impact,', accent: 'One Solution at a Time', text: 'From web and app development to business systems and technology consulting, we help you move with confidence.', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=85' },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const [videoOpen, setVideoOpen] = useState(false)
  useEffect(() => {
    const timer = window.setInterval(() => setActive(v => (v + 1) % slides.length), 6500)
    return () => window.clearInterval(timer)
  }, [])
  useEffect(() => {
    if (!videoOpen) return
    const close = (e: KeyboardEvent) => { if (e.key === 'Escape') setVideoOpen(false) }
    document.addEventListener('keydown', close)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', close); document.body.style.overflow = '' }
  }, [videoOpen])
  const slide = slides[active]
  return <>
    <section id="home" className="hero-carousel relative min-h-[85vh] flex items-center overflow-hidden bg-dark-950">
      {slides.map((s, i) => <div key={s.title} aria-hidden={i !== active} className={`hero-slide absolute inset-0 ${i === active ? 'is-active' : ''}`}>
        <img src={s.image} alt="" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/95 via-dark-950/75 to-dark-950/40"/>
      </div>)}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div key={active} className="max-w-3xl hero-copy">
          <span className="hero-reveal hero-delay-1 inline-block px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium mb-6 border border-primary-500/30">{slide.eyebrow}</span>
          <h1 className="hero-reveal hero-delay-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">{slide.title}<br/><span className="text-primary-400">{slide.accent}</span></h1>
          <p className="hero-reveal hero-delay-3 text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">{slide.text}</p>
          <div className="hero-reveal hero-delay-4 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary-500 text-white font-semibold hover:bg-primary-600 transition shadow-xl shadow-primary-500/30">Get Started →</Link>
            <a href="#about" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition border border-white/20 backdrop-blur-sm">Learn More →</a>
            <button onClick={() => setVideoOpen(true)} className="inline-flex items-center gap-3 text-white/90 hover:text-white transition group"><span className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-primary-500 group-hover:border-primary-500 transition"><Play className="w-5 h-5 ml-0.5 fill-current"/></span><span className="font-medium">Watch Video</span></button>
          </div>
        </div>
      </div>
      <div className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((s,i)=><button key={s.title} onClick={()=>setActive(i)} aria-label={`Show slide ${i+1}`} aria-current={i===active} className={`hero-dot ${i===active?'active':''}`}/>)}
      </div>
      <button onClick={()=>setActive(v=>(v+slides.length-1)%slides.length)} aria-label="Previous slide" className="absolute z-20 left-4 lg:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/30 text-white bg-black/20 hover:bg-primary-600 transition flex items-center justify-center"><ChevronLeft/></button>
      <button onClick={()=>setActive(v=>(v+1)%slides.length)} aria-label="Next slide" className="absolute z-20 right-4 lg:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/30 text-white bg-black/20 hover:bg-primary-600 transition flex items-center justify-center"><ChevronRight/></button>
    </section>
    {videoOpen && <div className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Grobaltech video" onMouseDown={e=>{if(e.target===e.currentTarget)setVideoOpen(false)}}>
      <div className="w-full max-w-4xl relative"><button onClick={()=>setVideoOpen(false)} aria-label="Close video" className="absolute -top-12 right-0 text-white p-2 hover:text-primary-300"><X size={28}/></button><div className="aspect-video rounded-2xl bg-slate-900 border border-white/10 flex flex-col items-center justify-center text-center p-8"><span className="w-16 h-16 rounded-full bg-primary-500/20 text-primary-300 flex items-center justify-center mb-5"><Play size={28}/></span><h2 className="text-white text-2xl font-bold mb-2">Grobaltech Technologies</h2><p className="text-slate-300 max-w-md">Our company introduction video will appear here. Add your official video URL to the hero video source when it is ready.</p></div></div>
    </div>}
  </>
}
