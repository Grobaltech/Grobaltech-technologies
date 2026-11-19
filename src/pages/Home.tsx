import Hero from '../components/sections/Hero'
import ServiceCards from '../components/sections/ServiceCards'
import About from '../components/sections/About'
import Stats from '../components/sections/Stats'
import Services from '../components/sections/Services'
import Projects from '../components/sections/Projects'
import CtaBanner from '../components/sections/CtaBanner'
import Team from '../components/sections/Team'
import Process from '../components/sections/Process'
import Testimonials from '../components/sections/Testimonials'
import Pricing from '../components/sections/Pricing'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import ContactCta from '../components/sections/ContactCta'

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <About />
      <Stats />
      <Services />
      <Projects />
      <CtaBanner />
      <Team />
      <Process />
      <Testimonials />
      <FeaturedProducts />
      <Pricing />
      <ContactCta />
    </>
  )
}
