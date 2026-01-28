import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { IconCloud } from './IconCloud'
import './Skills.css'

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const iconData = [
    { slug: 'python', color: '3776AB' },
    { slug: 'tensorflow', color: 'FF6F00' },
    { slug: 'pytorch', color: 'EE4C2C' },
    { slug: 'react', color: '61DAFB' },
    { slug: 'nodedotjs', color: '339933' },
    { slug: 'mongodb', color: '47A248' },
    { slug: 'amazonwebservices', color: 'FF9900' },
    { slug: 'javascript', color: 'F7DF1E' },
    { slug: 'typescript', color: '3178C6' },
    { slug: 'html5', color: 'E34F26' },
    { slug: 'css3', color: '1572B6' },
    { slug: 'express', color: '000000' },
    { slug: 'docker', color: '2496ED' },
    { slug: 'git', color: 'F05032' },
    { slug: 'github', color: '181717' },
    { slug: 'pandas', color: '150458' },
    { slug: 'scikitlearn', color: 'F7931E' },
    { slug: 'wordpress', color: '21759B' },
    { slug: 'postgresql', color: '336791' },
    { slug: 'nginx', color: '009639' },
  ]

  const images = iconData.map(
    ({ slug, color }) => `https://cdn.simpleicons.org/${slug}/${color}`
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  }

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-label">Expertise</span>
            <h2 className="section-title">
              Skills proven through <span className="gradient-text">real projects</span>
            </h2>
            <p className="section-description">
              Technologies and tools I've mastered through building production applications.
            </p>
          </motion.div>

          <div className="skills-content-wrapper">
            <motion.div 
              className="skills-cloud-wrapper"
              variants={itemVariants}
            >
              <div className="relative flex size-full items-center justify-center overflow-hidden" style={{ height: '500px', width: '100%' }}>
                <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <IconCloud images={images} />
                </Canvas>
              </div>
            </motion.div>

            <motion.div 
              className="skills-description"
              variants={itemVariants}
            >
              <h3 className="skills-description-title">
                <span className="title-word-1">Beyond</span>
                <span className="title-word-2">the</span>
                <span className="title-word-3">Tools</span>
              </h3>
              <p className="skills-description-text">
                <span className="drop-cap">T</span>echnology is transient; principles are permanent. 
                These tools represent years of deliberate practice—understanding trade-offs, recognizing 
                patterns, and knowing when to apply the right solution. True expertise lies in seeing 
                beyond code, architecting solutions that are maintainable, scalable, and aligned with 
                business value. Every icon here tells a story of production systems and hard decisions 
                under constraints.
              </p>
            </motion.div>
          </div>

          <motion.div className="skills-footer" variants={itemVariants}>
            <div className="footer-stat">
              <div className="stat-value">10+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="footer-stat">
              <div className="stat-value">4</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div className="footer-stat">
              <div className="stat-value">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
