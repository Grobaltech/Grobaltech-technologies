import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function ContactCta() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-14 text-white">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-300 text-sm font-semibold mb-5">
                We Are Here
              </span>
              <h2 className="text-3xl font-bold mb-4">Tell us about your business — we are ready to solve.</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Share your challenges and goals. Our team will respond within one business day with a clear next step.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-300">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <span>60 Golden Street, New York, NY</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-300">
                    <Mail className="w-4 h-4" />
                  </span>
                  <a href="mailto:info@grobaltech.com" className="hover:text-primary-300 transition">info@grobaltech.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-300">
                    <Phone className="w-4 h-4" />
                  </span>
                  <a href="tel:+1237878222" className="hover:text-primary-300 transition">+123 7878 222</a>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 lg:p-14 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-dark-900 mb-2">Ready to start?</h3>
              <p className="text-slate-500 mb-6">Go to the full contact page or send us a quick message.</p>
              <Link
                to="/contact"
                className="inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-xl bg-primary-500 text-white font-semibold hover:bg-primary-600 transition shadow-lg shadow-primary-500/25"
              >
                Open Contact Form →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
