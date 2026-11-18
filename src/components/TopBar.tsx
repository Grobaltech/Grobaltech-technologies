import { MapPin, Mail, Clock } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="bg-slate-50 border-b border-slate-100 text-sm py-2.5 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-6 text-slate-600">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-primary-500" />
            60 Golden Street, New York
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-primary-500" />
            info@grobaltech.com
          </span>
        </div>
        <div className="flex items-center gap-4 text-slate-600">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-primary-500" />
            Mon-Sat: 9:00am To 7:00pm
          </span>
          <div className="flex gap-2">
            {['f', '𝕏', 'in'].map((s) => (
              <a
                key={s}
                href="#"
                className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-primary-500 hover:text-white hover:border-primary-500 transition text-xs font-bold"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
