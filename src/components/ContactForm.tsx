'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { fadeInUp } from '@/utils/animations'
import Toast from './Toast'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error'; isVisible: boolean }>({
    message: '',
    type: 'success',
    isVisible: false,
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setToast({ message: '', type: 'success', isVisible: false })

    try {
      // Email.js configuration
      const serviceId = 'service_usoglbp'
      const templateId = 'template_86vm0ze'
      const publicKey = 'JBqVi1DGxIZwitgL2'

      // Initialize Email.js
      emailjs.init(publicKey)

      // Send email
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        budget: formData.budget || 'Not specified',
        message: formData.message,
        to_name: 'Renix Solutions',
        reply_to: formData.email,
      })

      setIsSubmitting(false)
      setIsSuccess(true)

      // Show success toast
      setToast({
        message: 'Message sent successfully! We\'ll get back to you within 24 hours.',
        type: 'success',
        isVisible: true,
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: '',
      })

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (err: any) {
      console.error('Email sending error:', err)
      setIsSubmitting(false)
      
      // More detailed error message
      let errorMessage = 'Failed to send message. Please try again or contact us directly.'
      
      if (err?.status === 412) {
        errorMessage = 'Email service configuration error. Please contact us directly at renixsolutions@gmail.com'
      } else if (err?.text?.includes('insufficient authentication scopes')) {
        errorMessage = 'Gmail service needs to be reconnected with proper permissions. Please contact us directly at renixsolutions@gmail.com'
      } else if (err?.text) {
        errorMessage = `Failed to send: ${err.text}. Please contact us directly.`
      }
      
      setError(errorMessage)
      
      // Show error toast
      setToast({
        message: errorMessage,
        type: 'error',
        isVisible: true,
      })
      
      // Clear error after 5 seconds
      setTimeout(() => setError(null), 5000)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast({ ...toast, isVisible: false })}
        duration={5000}
      />
      
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-card p-8 md:p-12 shadow-soft text-center"
        >
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-heading font-bold text-ink mb-2">
            Thank you for reaching out!
          </h3>
          <p className="text-muted">
            We&apos;ll get back to you within 24 hours. In the meantime, feel free to call us at{' '}
            <a href="tel:+919131153321" className="text-primary hover:underline">
              +91 91311 53321
            </a>
          </p>
        </motion.div>
      ) : (
        <motion.form
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white rounded-card p-8 md:p-12 shadow-soft"
        >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-ink mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-ink mb-2">
            Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          >
            <option value="">Select budget range</option>
            <option value="under-50k">Under $50K</option>
            <option value="50k-100k">$50K - $100K</option>
            <option value="100k-250k">$100K - $250K</option>
            <option value="250k-plus">$250K+</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
        />
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
        >
          {error}
        </motion.div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium text-lg shadow-soft hover:shadow-hover transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </motion.form>
      )}
    </>
  )
}

