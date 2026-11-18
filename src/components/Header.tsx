import { Link, NavLink } from 'react-router-dom'
import { Phone, Menu } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/#services', label: 'Services' },
  { to: '/#about', label: 'About' },
  { to: '/products', label: 'Shop' },
  { to: '/#projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-500/30">
              G
            </div>
            <span className="text-xl font-bold tracking-tight text-dark-900">GROBALTECH</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive && item.to === '/'
                      ? 'text-primary-600 border-b-2 border-primary-500 pb-1'
                      : 'text-slate-700 hover:text-primary-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+1237878222"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-700"
            >
              <span className="w-9 h-9 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </span>
              <span className="hidden xl:inline">+123 7878 222</span>
            </a>
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1 px-5 py-2.5 rounded-full bg-primary-500 text-white text-sm font-semibold hover:bg-primary-600 transition shadow-lg shadow-primary-500/25"
            >
              Get Started →
            </Link>
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-4 border-t border-slate-100">
            <nav className="flex flex-col gap-2 pt-3">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="px-3 py-2 rounded-lg text-slate-700 hover:bg-primary-50 hover:text-primary-600"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
