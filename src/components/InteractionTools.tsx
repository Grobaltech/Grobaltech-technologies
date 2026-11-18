import { useEffect, useState, type CSSProperties } from 'react'
import { ArrowUp, Search, Settings2, X } from 'lucide-react'

export default function InteractionTools() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [primary, setPrimary] = useState('#8b5cf6')
  const [secondary, setSecondary] = useState('#0f172a')
  const [layout, setLayout] = useState<'wide' | 'boxed'>('wide')
  const [pattern, setPattern] = useState<'none' | 'dots' | 'grid'>('none')

  useEffect(() => {
    const finish = () => window.setTimeout(() => setLoading(false), 1100)
    if (document.readyState === 'complete') finish()
    else {
      window.addEventListener('load', finish, { once: true })
      const fallback = window.setTimeout(finish, 3500)
      return () => { window.removeEventListener('load', finish); window.clearTimeout(fallback) }
    }
  }, [])

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty('--brand-primary', primary)
    document.documentElement.style.setProperty('--brand-secondary', secondary)
    document.documentElement.dataset.layout = layout
    document.documentElement.dataset.pattern = pattern
  }, [primary, secondary, layout, pattern])

  useEffect(() => {
    const openSearch = () => setSearchOpen(true)
    window.addEventListener('grobaltech:open-search', openSearch)
    return () => window.removeEventListener('grobaltech:open-search', openSearch)
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setSearchOpen(false); setSettingsOpen(false) }
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setSearchOpen(true) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return <>
    {loading && <div className="site-preloader" aria-label="Loading Grobaltech">
      <div className="preloader-mark">G</div><span className="preloader-name">GROBALTECH</span>
      <span className="preloader-track"><span /></span><span className="preloader-caption">Preparing your experience</span>
    </div>}
    <div className="fixed bottom-6 right-6 z-[70] flex flex-col gap-3 items-center">
      <button onClick={() => setSettingsOpen(true)} aria-label="Open appearance settings" className="w-11 h-11 rounded-full bg-slate-900 text-white shadow-xl flex items-center justify-center hover:bg-primary-600 transition"><Settings2 size={19}/></button>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top" className={`scroll-progress ${progress > 3 ? 'is-visible' : ''}`} style={{ '--scroll-progress': `${progress}%` } as CSSProperties}><ArrowUp size={19}/></button>
    </div>
    {settingsOpen && <div className="fixed inset-0 z-[90] bg-slate-950/40 backdrop-blur-sm flex justify-end" onMouseDown={(e) => { if (e.target === e.currentTarget) setSettingsOpen(false) }}>
      <aside className="w-full max-w-sm bg-white h-full p-7 shadow-2xl overflow-y-auto animate-panel-in">
        <div className="flex justify-between items-center mb-8"><div><p className="text-xs uppercase tracking-widest text-primary-600 font-bold">Personalize</p><h2 className="text-2xl font-bold text-slate-900">Theme settings</h2></div><button onClick={() => setSettingsOpen(false)} aria-label="Close settings" className="p-2 rounded-full hover:bg-slate-100"><X/></button></div>
        <label className="block text-sm font-semibold mb-2">Primary colour</label><input aria-label="Primary colour" type="color" value={primary} onChange={e => setPrimary(e.target.value)} className="w-full h-12 mb-6 cursor-pointer"/>
        <label className="block text-sm font-semibold mb-2">Secondary colour</label><input aria-label="Secondary colour" type="color" value={secondary} onChange={e => setSecondary(e.target.value)} className="w-full h-12 mb-6 cursor-pointer"/>
        <label className="block text-sm font-semibold mb-2">Page width</label><div className="grid grid-cols-2 gap-2 mb-6"><button onClick={() => setLayout('wide')} className={`p-3 rounded-xl border ${layout === 'wide' ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-slate-200'}`}>Wide</button><button onClick={() => setLayout('boxed')} className={`p-3 rounded-xl border ${layout === 'boxed' ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-slate-200'}`}>Boxed</button></div>
        <label className="block text-sm font-semibold mb-2">Background pattern</label><div className="grid grid-cols-3 gap-2 mb-8">{(['none','dots','grid'] as const).map(v => <button key={v} onClick={() => setPattern(v)} className={`p-3 rounded-xl border capitalize ${pattern === v ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-slate-200'}`}>{v}</button>)}</div>
        <button onClick={() => {setPrimary('#8b5cf6');setSecondary('#0f172a');setLayout('wide');setPattern('none')}} className="w-full py-3 rounded-full border border-slate-300 font-semibold hover:bg-slate-50">Reset appearance</button>
        <p className="text-xs text-slate-400 mt-4">Changes preview instantly and apply to this browsing session.</p>
      </aside>
    </div>}
    {searchOpen && <div
      className="fixed inset-0 z-[95] min-h-[100dvh] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-5 sm:p-10 animate-search-screen"
      role="dialog"
      aria-modal="true"
      aria-label="Site search"
      onMouseDown={e => { if (e.target === e.currentTarget) setSearchOpen(false) }}
    >
      <button
        type="button"
        onClick={() => setSearchOpen(false)}
        aria-label="Close search"
        title="Close search"
        className="absolute top-5 right-5 sm:top-8 sm:right-8 w-12 h-12 rounded-full border border-white/25 text-white flex items-center justify-center hover:bg-white hover:text-slate-950 hover:rotate-90 transition-all duration-300"
      ><X size={25}/></button>
      <form
        className="w-full max-w-4xl flex flex-col items-center gap-7 sm:gap-10 animate-search-content"
        onSubmit={e => { e.preventDefault(); const q = new FormData(e.currentTarget).get('q')?.toString().trim(); if (q) window.location.href = '/products?search=' + encodeURIComponent(q) }}
      >
        <div className="text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[.35em] text-primary-300 font-bold mb-4">Explore Grobaltech</p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">What are you looking for?</h2>
        </div>
        <div className="w-full flex items-center gap-3 sm:gap-5 border-b-2 border-white/35 focus-within:border-primary-400 pb-4 sm:pb-5 transition-colors">
          <Search className="text-primary-300 shrink-0" size={28}/>
          <input autoFocus name="q" placeholder="Type your search here..." className="min-w-0 flex-1 bg-transparent outline-none text-white placeholder:text-slate-400 text-xl sm:text-3xl py-2" aria-label="Search products"/>
          <button type="submit" aria-label="Submit search" className="shrink-0 rounded-full bg-primary-600 hover:bg-primary-500 text-white px-5 sm:px-8 py-3 font-semibold transition-colors">Search</button>
        </div>
        <p className="text-slate-400 text-sm">Press Esc to close</p>
      </form>
    </div>}
    <button onClick={() => setSearchOpen(true)} aria-label="Open search" title="Search (Ctrl+K)" className="sr-only">Search</button>
  </>
}
