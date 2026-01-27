import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const timelineItems = [
    {
      year: '2020',
      title: 'Academic Foundation',
      description: 'Started Integrated Preparatory Cycle at Higher Institute of Applied Sciences and Technology, Sousse.',
      icon: '🎓'
    },
    {
      year: '2022',
      title: 'Engineering Journey',
      description: 'Began Bachelor of Computer Engineering at EPI Sousse, diving deep into software development and AI.',
      icon: '💻'
    },
    {
      year: '2023',
      title: 'AI Instructor & Certifications',
      description: 'Started teaching AI at GoMyCode and earned multiple certifications including HCIA-AI and Oracle Cloud AI.',
      icon: '📚'
    },
    {
      year: '2024',
      title: 'Professional Experience',
      description: 'Software Engineering Intern at DunDill, AI Engineering Intern at DIGIX, building real-world AI solutions.',
      icon: '🚀'
    },
    {
      year: '2025',
      title: 'AI Engineer at Retalk',
      description: 'Working on automatic voice-to-sign language translation and resume-job matching platforms using deep learning and NLP.',
      icon: '🤖'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-label">My Story</span>
            <h2 className="section-title">
              More than just code — <span className="gradient-text">a journey</span>
            </h2>
            <p className="section-description">
              Every line of code tells a story. Mine began with curiosity and evolved into a passion 
              for creating intelligent solutions that make a difference.
            </p>
          </motion.div>

          <div className="about-content">
            <motion.div className="about-narrative" variants={itemVariants}>
              <div className="narrative-block">
                <h3>The Philosophy</h3>
                <p>
                  I believe AI should be accessible and impactful. From medical chatbots with emotion 
                  detection to voice-to-sign language translation, I focus on building solutions that 
                  make a real difference in people's lives.
                </p>
              </div>
              <div className="narrative-block">
                <h3>The Process</h3>
                <p>
                  Combining deep learning expertise with full-stack development, I build end-to-end 
                  solutions. Whether it's fine-tuning BERT models, implementing RAG systems, or 
                  creating MERN stack applications, I approach each project with technical rigor.
                </p>
              </div>
              <div className="narrative-block">
                <h3>The Impact</h3>
                <p>
                  From teaching AI to mentoring students at GoMyCode, to building production systems 
                  at Retalk and DIGIX, I've worked on projects that solve real problems — from 
                  healthcare to accessibility to productivity.
                </p>
              </div>
            </motion.div>

            <motion.div className="timeline" variants={itemVariants}>
              <div className="timeline-line" />
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                >
                  <div className="timeline-marker">
                    <span className="timeline-icon">{item.icon}</span>
                    <div className="timeline-dot" />
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-year">{item.year}</div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
