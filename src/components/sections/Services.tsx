import { BarChart3, PieChart, Briefcase, Layers } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  { icon: BarChart3, title: 'Business Analysis', desc: 'Deep analysis of your operations to identify technology opportunities that drive measurable growth.' },
  { icon: PieChart, title: 'Strategic Planning', desc: 'Roadmaps and technology strategies aligned with your long-term business vision and market needs.' },
  { icon: Briefcase, title: 'Business Consulting', desc: 'Expert guidance on digital transformation, process optimization, and technology adoption.' },
  { icon: Layers, title: 'Marketing Strategy', desc: 'Data-driven digital marketing and growth strategies powered by modern technology platforms.' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
              What We Do For You
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900">We can inspire and Offer Different Services</h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-semibold hover:bg-primary-600 transition shadow-lg shadow-primary-500/20"
          >
            See All Services →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-lg transition group">
              <div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-500 group-hover:text-white transition">
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">{s.desc}</p>
              <a href="#" className="text-primary-600 font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition">
                See Details →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
