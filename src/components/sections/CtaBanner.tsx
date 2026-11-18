import { Link } from 'react-router-dom'

export default function CtaBanner() {
  return (
    <section className="py-16 bg-primary-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/3" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-white text-center md:text-left">
          <p className="text-primary-100 text-sm font-medium mb-2">
            Call For More Info <a href="tel:+1237878222" className="underline font-semibold">+123 7878 222</a>
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold">Let’s Request a Schedule For Free Consultation</h2>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-700 font-bold hover:bg-primary-50 transition shadow-xl"
        >
          Contact Us →
        </Link>
      </div>
    </section>
  )
}
