import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#0A0806] text-[#F5F0E8] overflow-x-hidden">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
