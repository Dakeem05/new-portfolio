import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Community from './sections/Community.jsx'
import Projects from './sections/Projects.jsx'
import Stack from './sections/Stack.jsx'
import Experience from './sections/Experience.jsx'
import Education from './sections/Education.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Community />
        <Projects />
        <Stack />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
