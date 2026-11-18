import { Link } from 'react-router-dom'

const plans = [
  { name: 'Basic Plan', price: 19, popular: false, features: ['5000 User Activities', 'Unlimited Access', 'No Hidden Charge', '03 Time Updates', 'Source Files'] },
  { name: 'Team Plan', price: 49, popular: true, features: ['5000 User Activities', 'Unlimited Access', 'No Hidden Charge', '03 Time Updates', 'Source Files', 'Priority Support'] },
  { name: 'Enterprise Plan', price: 99, popular: false, features: ['Unlimited Activities', 'Unlimited Access', 'No Hidden Charge', 'Unlimited Updates', 'Dedicated Manager'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">Flexible Pricing Plan</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">We’ve offered the best pricing for you</h2>
          <p className="text-slate-500">Transparent packages designed for startups and growing teams. Custom enterprise plans available.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 relative ${
                p.popular
                  ? 'bg-primary-600 shadow-xl shadow-primary-500/30 scale-105'
                  : 'bg-white border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-primary-700 text-xs font-bold rounded-full uppercase tracking-wider">
                  Popular
                </span>
              )}
              <h3 className={`text-lg font-semibold mb-2 ${p.popular ? 'text-primary-100' : 'text-slate-600'}`}>{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className={`text-4xl font-bold ${p.popular ? 'text-white' : 'text-dark-900'}`}>${p.price}</span>
                <span className={p.popular ? 'text-primary-200' : 'text-slate-500'}>/Month</span>
              </div>
              <ul className={`space-y-3 mb-8 text-sm ${p.popular ? 'text-primary-50' : 'text-slate-600'}`}>
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className={p.popular ? '' : 'text-primary-500'}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`block text-center py-3 rounded-full font-semibold transition ${
                  p.popular
                    ? 'bg-white text-primary-700 hover:bg-primary-50'
                    : 'border-2 border-primary-500 text-primary-600 hover:bg-primary-50'
                }`}
              >
                Get The Plan Now
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-500 mt-10 text-sm">
          If you need custom pricing <Link to="/contact" className="text-primary-600 font-semibold underline">Contact Us</Link>
        </p>
      </div>
    </section>
  )
}
