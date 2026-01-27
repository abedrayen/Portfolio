import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you for your message! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactMethods = [
    {
      icon: '✉',
      label: 'Email',
      value: 'rayenabed87@gmail.com',
      link: 'mailto:rayenabed87@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '(+216) 98 147 682',
      link: 'tel:+21698147682',
      description: 'Call or text me'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/rayen-abed-545799252',
      link: 'https://www.linkedin.com/in/rayen-abed-545799252/',
      description: 'Let\'s connect professionally'
    },
    {
      icon: '🔗',
      label: 'GitHub',
      value: 'github.com/Abedrayen',
      link: 'https://github.com/Abedrayen',
      description: 'Check out my code'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-label">Let's Connect</span>
            <h2 className="section-title">
              Ready to <span className="gradient-text">build something</span> together?
            </h2>
            <p className="section-description">
              Whether you have a project in mind, want to collaborate, or just want to chat 
              about technology — I'd love to hear from you.
            </p>
          </motion.div>

          <div className="contact-content">
            <motion.div className="contact-methods" variants={itemVariants}>
              {contactMethods.map((method) => (
                <motion.a
                  key={method.label}
                  href={method.link}
                  className="contact-method"
                  target={method.label === 'Phone' ? undefined : '_blank'}
                  rel={method.label === 'Phone' ? undefined : 'noopener noreferrer'}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-content">
                    <h3 className="method-label">{method.label}</h3>
                    <p className="method-value">{method.value}</p>
                    <p className="method-description">{method.description}</p>
                  </div>
                  <svg
                    className="method-arrow"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6 4L14 12M14 12L6 12M14 12L14 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.a>
              ))}
            </motion.div>

            <motion.form className="contact-form" onSubmit={handleSubmit} variants={itemVariants}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
