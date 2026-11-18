const projects = [
  { title: 'Tech Solutions Platform', cat: 'Business Growth', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' },
  { title: 'Smart Visions Dashboard', cat: 'Solution', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80' },
  { title: 'Digital Business Path', cat: 'Design / Ideas', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80' },
  { title: 'Business Growth Model', cat: 'Design / Ideas', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80' },
  { title: 'Digital Startup Agency', cat: 'IT Technology', img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80' },
  { title: 'Data Analysis System', cat: 'Finance Strategy', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            Complete Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">Our recently completed projects list</h2>
          <p className="text-slate-500">Real results from real clients. Explore how Grobaltech Technologies has helped organizations transform with technology.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href="#" className="group relative rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] aspect-[4/3]">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-xs font-medium text-primary-300 uppercase tracking-wider">{p.cat}</span>
                <h3 className="text-xl font-bold mt-1">{p.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
