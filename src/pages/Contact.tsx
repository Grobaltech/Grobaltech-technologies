import { useState } from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: send to Supabase (contacts / leads table) or external CRM
    setSubmitted(true)
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">Contact</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">Get in Touch</h1>
          <p className="text-slate-500">We’d love to hear about your project. Fill out the form and we’ll respond within one business day.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-dark-900">Address</h3>
                <p className="text-slate-500 text-sm">60 Golden Street, New York, NY</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-dark-900">Email</h3>
                <a href="mailto:info@grobaltech.com" className="text-primary-600 text-sm">info@grobaltech.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-dark-900">Phone</h3>
                <a href="tel:+1237878222" className="text-primary-600 text-sm">+123 7878 222</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-primary-50 border border-primary-200 rounded-2xl p-10 text-center">
                <h3 className="text-xl font-bold text-primary-800 mb-2">Thank you!</h3>
                <p className="text-primary-700">Your message has been received. We’ll get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-primary-600 font-medium underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                    <input required name="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                    <input required type="email" name="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition" placeholder="john@company.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Subject</label>
                  <input name="subject" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition" placeholder="Project inquiry" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                  <textarea required name="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition resize-none" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="w-full py-3.5 rounded-xl bg-primary-500 text-white font-semibold hover:bg-primary-600 transition shadow-lg shadow-primary-500/25">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
