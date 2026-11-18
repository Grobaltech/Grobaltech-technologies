const items = [
  { quote: 'Grobaltech transformed our legacy systems into a modern, scalable platform. Their team is responsive, skilled, and truly partners with us.', name: 'Mr. Robey Alexa', role: 'CEO, Apex Agency', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80' },
  { quote: 'From strategy to delivery, every milestone was clear. The security and performance of our new infrastructure exceeded expectations.', name: 'Robert Fox', role: 'CTO, Horizon Labs', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' },
  { quote: 'Professional, transparent, and results-driven. Grobaltech helped us launch our digital product on time and within budget.', name: 'Kevin Martin', role: 'Founder, Nova Digital', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80' },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-300 text-sm font-semibold mb-4">Our Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Customers Say About Our Services</h2>
          <p className="text-slate-400">Trusted by growing companies and established enterprises alike.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="bg-dark-800/50 border border-slate-700/50 rounded-2xl p-8">
              <div className="text-primary-400 text-4xl mb-4">“</div>
              <p className="text-slate-300 leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-600 overflow-hidden">
                  <img src={t.img} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
