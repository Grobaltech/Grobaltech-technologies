import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden bg-dark-950">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
          alt="Team collaboration"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 via-dark-950/70 to-dark-950/40" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium mb-6 border border-primary-500/30">
            Welcome to IT Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Affordable Big IT &amp;<br />
            <span className="text-primary-400">Technology Solutions</span>
          </h1>
          <p className="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
            The goal of IT services is to provide efficient and effective technology solutions that help businesses achieve their objectives.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary-500 text-white font-semibold hover:bg-primary-600 transition shadow-xl shadow-primary-500/30"
            >
              Get Started →
            </Link>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition border border-white/20 backdrop-blur-sm"
            >
              Learn More →
            </a>
            <button className="inline-flex items-center gap-3 text-white/90 hover:text-white transition group">
              <span className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-primary-500 group-hover:border-primary-500 transition">
                <Play className="w-5 h-5 ml-0.5 fill-current" />
              </span>
              <span className="font-medium">Watch Video</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
