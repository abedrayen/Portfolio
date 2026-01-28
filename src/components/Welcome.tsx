import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Welcome.css'

const Welcome = ({ onComplete }: { onComplete: () => void }) => {
  const [currentText, setCurrentText] = useState(0)
  const [progress, setProgress] = useState(0)

  const welcomeTexts = [
    'Welcome',
    'Building',
    'Creating',
    'Innovating',
  ]

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    // Text rotation animation
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % welcomeTexts.length)
    }, 800)

    // Complete after 3 seconds
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 3000)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
      clearTimeout(completeTimer)
    }
  }, [onComplete, welcomeTexts.length])

  return (
    <motion.div
      className="welcome-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="welcome-content">
        <motion.div
          className="welcome-logo"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="logo-circle">
            <span className="logo-text">RA</span>
          </div>
        </motion.div>

        <div className="welcome-text-container">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentText}
              className="welcome-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {welcomeTexts[currentText]}
            </motion.h1>
          </AnimatePresence>
          <motion.p
            className="welcome-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Software Engineer & AI Specialist
          </motion.p>
        </div>

        <div className="welcome-progress">
          <motion.div
            className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: 'linear' }}
          />
        </div>

        <motion.div
          className="welcome-particles"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[...Array(20)].map((_, i) => {
            const randomX = typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920
            const randomY = typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080
            return (
              <motion.div
                key={i}
                className="particle"
                initial={{
                  x: randomX,
                  y: randomY,
                  opacity: 0,
                }}
                animate={{
                  y: [null, typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            )
          })}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Welcome
