import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Room from './components/Room.jsx'
import Service from './components/Service.jsx'
import ContactUs from './components/ContactUs.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Navbar />
      <div className="px-4">
        <Hero />
        <Room />
        <Service />
        <ContactUs />
      </div>
      <Footer />
    </>
  )
}

export default App
