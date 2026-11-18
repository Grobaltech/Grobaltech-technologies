import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark-950 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold">
                G
              </div>
              <span className="text-lg font-bold text-white">GROBALTECH</span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Innovative IT & technology solutions that help businesses scale securely and efficiently.
            </p>
            <div className="flex gap-3">
              {['f', '𝕏', 'in'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition text-sm"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/#services" className="hover:text-primary-400 transition">Technology Solution</Link></li>
              <li><Link to="/#services" className="hover:text-primary-400 transition">IT Service</Link></li>
              <li><Link to="/#services" className="hover:text-primary-400 transition">Web & App Design</Link></li>
              <li><Link to="/products" className="hover:text-primary-400 transition">Shop / Products</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/#about" className="hover:text-primary-400 transition">About Us</Link></li>
              <li><Link to="/#projects" className="hover:text-primary-400 transition">Projects</Link></li>
              <li><Link to="/products" className="hover:text-primary-400 transition">Products</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>60 Golden Street, New York</li>
              <li><a href="mailto:info@grobaltech.com" className="hover:text-primary-400 transition">info@grobaltech.com</a></li>
              <li><a href="tel:+1237878222" className="hover:text-primary-400 transition">+123 7878 222</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2026 Grobaltech Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
