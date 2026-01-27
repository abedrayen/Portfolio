import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Hero.css'

const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section id="home" className="hero" ref={containerRef}>
      <motion.div
        className="hero-background"
        style={{ y, opacity }}
      >
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
      </motion.div>

      <div className="container">
        <motion.div
          ref={ref}
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-text">Yaser Arafet City, Sahloul Sousse</span>
            <span className="badge-dot"></span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="greeting">Hi, I'm</span>
            <span className="name gradient-text">Rayen Abed</span>
            <span className="role">Software Engineer, AI specialist</span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Building intelligent solutions with AI and Python. Specializing in Machine Learning, NLP, 
            Deep Learning, and Full-Stack Development. Currently working on voice-to-sign language 
            translation and AI-powered platforms.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(99, 102, 241, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Work</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Let's Connect</span>
            </motion.a>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Certifications</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="code-window">
            <div className="code-header">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="code-title">main.py</div>
            </div>
            <div className="code-content">
              <pre>
                <code>
{`# AI Engineer | Software Developer
import tensorflow as tf
from transformers import pipeline

def build_intelligent_solutions():
    """Voice-to-sign language & NLP systems"""
    nlp_model = fine_tune_bert()
    translation = voice_to_sign_language()
    chatbot = medical_rag_system()
    return deploy_production(nlp_model, 
                            translation, 
                            chatbot)

if __name__ == "__main__":
    solutions = build_intelligent_solutions()
    print("🚀 Production Ready!")`}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero
