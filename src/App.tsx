import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import WhatIs from './components/WhatIs'
import Benefits from './components/Benefits'
import Routine from './components/Routine'
import Ingredients from './components/Ingredients'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <WhatIs />
        <Benefits />
        <Routine />
        <Ingredients />
        <Testimonials />
        <CTA />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
