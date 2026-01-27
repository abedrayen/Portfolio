import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './Projects.css'

interface Project {
  id: number
  title: string
  category: string
  description: string
  longDescription: string
  technologies: string[]
  challenge: string
  solution: string
  impact: string
  link?: string
  github?: string
}

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'Automatic Voice to American Sign Language Translation',
      category: 'Deep Learning',
      description: 'Real-time translation system converting voice to sign language using deep learning models.',
      longDescription: 'A sophisticated deep learning system that processes audio input and generates corresponding American Sign Language gestures in real-time.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'Deep Learning', 'NLP'],
      challenge: 'Creating an accessible communication tool for the deaf and hard-of-hearing community requires accurate real-time translation from voice to sign language.',
      solution: 'Developed a deep learning pipeline using TensorFlow and Keras that processes audio signals, extracts features, and generates sign language gestures with high accuracy.',
      impact: 'Enables real-time communication accessibility, breaking down barriers for the deaf community. Currently in production at Retalk.',
      link: '#',
      github: 'https://github.com/Abedrayen'
    },
    {
      id: 2,
      title: 'Resume-Job Matching Platform',
      category: 'NLP & Classification',
      description: 'AI-powered platform that matches resumes to job postings using NLP summarization and classification.',
      longDescription: 'An intelligent matching system that uses NLP techniques to analyze resumes and job descriptions, providing accurate matches with feedback classification.',
      technologies: ['Python', 'NLP', 'Scikit-learn', 'BERT', 'Classification'],
      challenge: 'Job seekers struggle to find relevant positions, and employers need efficient ways to identify qualified candidates from large applicant pools.',
      solution: 'Built an NLP-based system using BERT fine-tuning for summarization and classification, enabling intelligent matching with feedback mechanisms.',
      impact: 'Improves job matching accuracy, saving time for both job seekers and employers. Currently deployed at Retalk.',
      link: '#',
      github: 'https://github.com/Abedrayen'
    },
    {
      id: 3,
      title: 'Medical Chatbot with Emotion Detection',
      category: 'AI & Healthcare',
      description: 'Intelligent medical chatbot with emotion detection and geolocation-based recommendations using RAG and Ollama 2.0.',
      longDescription: 'A comprehensive medical assistant chatbot that detects user emotions, provides location-based healthcare recommendations, and retrieves medical information using RAG architecture.',
      technologies: ['Python', 'Ollama 2.0', 'RAG', 'NLP', 'Emotion Detection', 'Geolocation'],
      challenge: 'Patients need accessible medical information and recommendations, but existing systems lack emotional intelligence and contextual awareness.',
      solution: 'Developed a chatbot using Ollama 2.0 with RAG for medical knowledge retrieval, integrated emotion detection, and geolocation services for personalized recommendations.',
      impact: 'Provides accessible medical information with emotional support, helping users make informed healthcare decisions. Built during internship at DIGIX and used in GoMyCode courses.',
      link: '#',
      github: 'https://github.com/Abedrayen'
    },
    {
      id: 4,
      title: 'Neurodevelopmental Disorder Detection App',
      category: 'Machine Learning & Mobile',
      description: 'Mobile application for early detection of neurodevelopmental disorders in children using ML models.',
      longDescription: 'A mobile application that uses machine learning to analyze behavioral patterns and provide early diagnosis of neurodevelopmental disorders in children.',
      technologies: ['Python', 'Machine Learning', 'Mobile Development', 'TensorFlow'],
      challenge: 'Early detection of neurodevelopmental disorders is crucial for effective intervention, but traditional diagnosis methods are time-consuming and require specialized expertise.',
      solution: 'Created a mobile app with ML models that analyze behavioral indicators, providing accessible early screening tools for parents and healthcare providers.',
      impact: 'Enables early intervention by making disorder detection more accessible, potentially improving outcomes for affected children.',
      link: '#',
      github: 'https://github.com/Abedrayen'
    },
    {
      id: 5,
      title: 'Smart Online Working Platform',
      category: 'Full-Stack Development',
      description: 'AI-powered productivity platform with to-do lists, timers, chatbot, and intelligent recommendations.',
      longDescription: 'A comprehensive web platform combining productivity tools with AI capabilities, including task management, time tracking, chatbot assistance, and personalized recommendations.',
      technologies: ['MERN Stack', 'React', 'Node.js', 'MongoDB', 'AI', 'Python'],
      challenge: 'Remote workers need integrated productivity tools that adapt to their workflow and provide intelligent assistance.',
      solution: 'Built a full-stack MERN application with AI-powered features including smart task management, productivity tracking, chatbot assistance, and personalized recommendations.',
      impact: 'Enhances remote work productivity by providing an all-in-one platform with intelligent features. Developed during internship at DunDill.',
      link: '#',
      github: 'https://github.com/Abedrayen'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div className="section-header" variants={containerVariants}>
            <span className="section-label">Case Studies</span>
            <h2 className="section-title">
              Projects that <span className="gradient-text">make an impact</span>
            </h2>
            <p className="section-description">
              Each project represents a unique challenge solved through innovative thinking, 
              technical excellence, and a focus on real-world value.
            </p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${expandedProject === project.id ? 'expanded' : ''}`}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -8 }}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <div className="project-header">
                  <div className="project-number">0{index + 1}</div>
                  <span className="project-category">{project.category}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {expandedProject === project.id && (
                  <motion.div
                    className="project-details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="detail-section">
                      <h4>The Challenge</h4>
                      <p>{project.challenge}</p>
                    </div>
                    <div className="detail-section">
                      <h4>The Solution</h4>
                      <p>{project.solution}</p>
                    </div>
                    <div className="detail-section">
                      <h4>The Impact</h4>
                      <p>{project.impact}</p>
                    </div>
                    <div className="project-links">
                      {project.link && (
                        <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                          View Live
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6 3H3C2.44772 3 2 3.44772 2 4V13C2 13.5523 2.44772 14 3 14H12C12.5523 14 13 13.5523 13 13V10M10 2H14M14 2V6M14 2L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                          View Code
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6 6L10 10M10 6L6 10M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}

                <div className="project-footer">
                  <button className="expand-btn">
                    {expandedProject === project.id ? 'Show Less' : 'Read Case Study'}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{ transform: expandedProject === project.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
