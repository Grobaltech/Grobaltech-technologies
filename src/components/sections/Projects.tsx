const projects = [
  { title: 'Tech Solutions Platform', cat: 'Business Growth', description: 'Digital tools that help businesses streamline operations and reach more customers.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' },
  { title: 'Smart Visions Dashboard', cat: 'Solution', description: 'Clear, actionable insights presented through an intuitive digital dashboard.', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80' },
  { title: 'Digital Business Path', cat: 'Design / Ideas', description: 'A modern digital experience built around people, ideas and growth.', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80' },
  { title: 'Business Growth Model', cat: 'Design / Ideas', description: 'Connected systems designed to make everyday business work smarter.', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80' },
  { title: 'Digital Startup Agency', cat: 'IT Technology', description: 'Technology-led solutions that turn ambitious ideas into working products.', img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80' },
  { title: 'Data Analysis System', cat: 'Finance Strategy', description: 'Organized data and reporting that support confident decisions.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80' },
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
            <a key={p.title} href="#projects" aria-label={`Explore ${p.title}`} className="project-card group relative block rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] aspect-[4/3]">
              <img src={p.img} alt={p.title} className="project-card-image w-full h-full object-cover" />
              <div className="project-card-tint absolute inset-0" />
              <div className="project-card-content absolute inset-0 flex flex-col justify-end p-6 sm:p-7 text-white">
                <span className="project-card-category text-xs font-semibold uppercase tracking-[.18em]">{p.cat}</span>
                <h3 className="project-card-title text-xl sm:text-2xl font-bold mt-2">{p.title}</h3>
                <p className="project-card-description mt-3 max-w-sm text-sm leading-6">{p.description}</p>
                <span className="project-card-arrow mt-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 text-white" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
