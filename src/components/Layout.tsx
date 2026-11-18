import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import TopBar from './TopBar'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
