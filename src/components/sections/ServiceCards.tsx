const cards = [
  { num: '01', title: 'Technology Solution', desc: 'Developing a comprehensive IT strategy that aligns with your business goals.' },
  { num: '02', title: 'IT Service', desc: 'Developing a comprehensive IT strategy that aligns with your business goals.' },
  { num: '03', title: 'Web & App Design', desc: 'Developing a comprehensive IT strategy that aligns with your business goals.' },
  { num: '04', title: 'Data Tracking Security', desc: 'Developing a comprehensive IT strategy that aligns with your business goals.' },
]

export default function ServiceCards() {
  return (
    <section className="relative -mt-16 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => (
            <div
              key={c.num}
              className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden group hover:-translate-y-1 transition duration-300"
            >
              <div className="p-6 pb-4">
                <span className="text-4xl font-bold text-slate-200 group-hover:text-primary-200 transition">{c.num}</span>
                <h3 className="text-lg font-bold text-dark-900 mt-2 mb-2">{c.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
              <a
                href="#services"
                className="block bg-dark-900 text-white text-center py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-primary-600 transition"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
