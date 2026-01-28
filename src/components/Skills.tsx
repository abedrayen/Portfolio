import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './Skills.css'

interface Skill {
  name: string
  icon: string
}

// Icon mapping function
const getSkillIcon = (skillName: string): string => {
  const iconMap: { [key: string]: string } = {
    'Python': '🐍',
    'TensorFlow & Keras': '🧠',
    'Scikit-learn': '📊',
    'NLP & Deep Learning': '💬',
    'BERT Fine-tuning': '🤖',
    'RAG & Ollama 2.0': '🔍',
    'MERN Stack': '⚛️',
    'React': '⚛️',
    'Node.js': '🟢',
    'MongoDB': '🍃',
    'WordPress': '📝',
    'Pandas': '🐼',
    'Matplotlib & Seaborn': '📈',
    'AWS': '☁️'
  }
  return iconMap[skillName] || '💻'
}

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const skills: Skill[] = [
    { name: 'Python', icon: getSkillIcon('Python') },
    { name: 'TensorFlow & Keras', icon: getSkillIcon('TensorFlow & Keras') },
    { name: 'Scikit-learn', icon: getSkillIcon('Scikit-learn') },
    { name: 'NLP & Deep Learning', icon: getSkillIcon('NLP & Deep Learning') },
    { name: 'BERT Fine-tuning', icon: getSkillIcon('BERT Fine-tuning') },
    { name: 'RAG & Ollama 2.0', icon: getSkillIcon('RAG & Ollama 2.0') },
    { name: 'MERN Stack', icon: getSkillIcon('MERN Stack') },
    { name: 'React', icon: getSkillIcon('React') },
    { name: 'Node.js', icon: getSkillIcon('Node.js') },
    { name: 'MongoDB', icon: getSkillIcon('MongoDB') },
    { name: 'WordPress', icon: getSkillIcon('WordPress') },
    { name: 'Pandas', icon: getSkillIcon('Pandas') },
    { name: 'Matplotlib & Seaborn', icon: getSkillIcon('Matplotlib & Seaborn') },
    { name: 'AWS', icon: getSkillIcon('AWS') }
  ]

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

          <div className="skills-grid">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="skill-icon-wrapper">
                  <span className="skill-icon">{skill.icon}</span>
                </div>
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
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
