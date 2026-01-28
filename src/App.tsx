import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import CursorFollower from './components/CursorFollower'
import Welcome from './components/Welcome'
import './App.css'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleWelcomeComplete = () => {
    setShowWelcome(false)
  }

  return (
    <div className="app">
      <AnimatePresence>
        {showWelcome && (
          <Welcome onComplete={handleWelcomeComplete} />
        )}
      </AnimatePresence>
      {!showWelcome && (
        <>
          <CursorFollower mousePosition={mousePosition} />
          <Navigation />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
        </>
      )}
    </div>
  )
}

export default App
