const team = [
  { name: 'Aleesha Brown', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
  { name: 'Kevin Martin', role: 'Product Manager', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80' },
  { name: 'Sarah Albert', role: 'Financial Consultant', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80' },
  { name: 'David Smith', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80' },
]

export default function Team() {
  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">Expert People</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">Our Dedicated Team Members</h2>
          <p className="text-slate-500">Passionate experts committed to delivering excellence in every technology engagement.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.name} className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] group">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-dark-900">{m.name}</h3>
                <p className="text-sm text-primary-600">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
