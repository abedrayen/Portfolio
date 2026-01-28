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
  video?: string
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
      video: '/demos/speech2sign.mp4',
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
    },
    {
      id: 6,
      title: 'Quant — AI-Powered Document Intelligence Platform',
      category: 'Document Intelligence & NLP',
      description: 'Enterprise-grade platform for AI-powered document classification, data extraction, and audit-ready traceability.',
      longDescription:
        'Quant automates the full lifecycle of financial and administrative documents—from secure ingestion and preprocessing to AI-driven classification, structured data extraction, and audit-ready tracking. Powered by LayoutLMv3, it understands both visual layout and semantic content, enabling highly accurate processing across heterogeneous formats such as scans, PDFs, and images.',
      technologies: ['Python', 'PyTorch', 'LayoutLMv3', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
      challenge:
        'Large enterprises process huge volumes of financial and administrative documents manually, making it difficult to ensure speed, accuracy, and full traceability while meeting strict compliance requirements.',
      solution:
        'Designed and implemented a LayoutLMv3-based document intelligence pipeline that handles secure ingestion, preprocessing, classification, and structured data extraction, with full customer-centric tracking and detailed processing histories.',
      impact:
        'Significantly reduced manual document handling time and error rates while providing end-to-end visibility and auditability, making back-office operations faster, more reliable, and compliant.',
      video: '/demos/quant_all.mp4',
      github: 'https://github.com/Abedrayen'
    },
    {
      id: 7,
      title: 'ShiftMe — Field Service & Operations Management Platform',
      category: 'Field Service & Operations',
      description: 'Multi-tenant platform orchestrating people, missions, and data across the full field service lifecycle.',
      longDescription:
        'ShiftMe is an end-to-end field service and operations management platform that centralizes mission planning, execution, and reporting in a single operational hub. Each user role—administrators, planners, field users, and clients—gets a tailored experience for configuring workflows, scheduling missions, executing visits via mobile, and tracking interventions and billing in real time.',
      technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'React Native'],
      challenge:
        'Service organizations often rely on fragmented tools and manual coordination, leading to poor visibility, inefficient scheduling, and limited transparency for both internal teams and clients.',
      solution:
        'Built a multi-tenant, role-based platform that unifies mission planning and supervision, real-time field execution via a mobile app, and a dedicated client portal for tracking interventions, documents, and billing.',
      impact:
        'Reduced operational friction and improved service quality by providing real-time visibility, streamlined communication, and centralized operational data, enabling organizations to scale their field operations with confidence.',
      video: '/demos/shiftme_all.mp4',
      github: 'https://github.com/Abedrayen'
    },
    {
      id: 8,
      title: 'TailoredFinance',
      category: 'Desktop & Financial Advisory',
      description: 'Desktop dashboard for wealth and financial consultants to manage clients, track business metrics, and run advisory workflow.',
      longDescription:
        'TailoredFinance is a desktop dashboard for wealth and financial consultants. It gives advisors a single place to manage clients, track key business metrics, and run their advisory workflow. It includes CRM-like capabilities: client database, consultant management, and case/engagement tracking ("affaires") linked to clients. The app connects to the BackEnd_Tailored NestJS API to centralize full client files (patrimoine, revenus, fiscalité, objectifs, profilage de risque, capacité d\'épargne, IFI, etc.), visualize portfolio and business KPIs (clients, earnings, signed contracts, projects) via charts and tables, and manage the product universe (immobilier, private equity, forêts, etc.). Built with Electron and Next.js, it delivers a native desktop experience while staying tightly integrated with the backend\'s financial data and advisory logic.',
      technologies: ['Electron', 'Next.js', 'NestJS', 'TypeScript', 'CRM', 'Financial Data'],
      challenge:
        'Wealth and financial advisors need a single place to manage clients, track business metrics, and run their advisory workflow, with full client files and portfolio visibility.',
      solution:
        'Built an Electron + Next.js desktop app connected to a NestJS API, providing CRM-like client and case management, centralized client files (patrimoine, fiscalité, profilage, etc.), and KPI visualization via charts and tables.',
      impact:
        'Gives advisors one dashboard to manage clients and engagements, visualize portfolio and business KPIs, and run their workflow with full integration to backend financial data and advisory logic.',
      video: '/demos/tailord%20fianance.mp4',
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
                    {project.video && (
                      <div className="project-video">
                        <video className="project-video-player" controls playsInline>
                          <source src={project.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}
                    <div className="project-links">
                      {project.link && !project.video && (
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
