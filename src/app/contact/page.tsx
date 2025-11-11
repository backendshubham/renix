import { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import ContactForm from '@/components/ContactForm'
import { generatePageMetadata } from '@/utils/seo'

export const metadata: Metadata = generatePageMetadata(
  'Contact | Get in touch',
  'Reach out to Renix Solutions to discuss your project. Call us at +91 91311 53321 or send us a message.',
  '/contact'
)

export default function Contact() {
  return (
    <div className="relative pt-20 pb-24 bg-background min-h-screen">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Fortify Your Software, Secure Your Future"
          subtitle="Get in Touch"
          description="Have a project in mind? Let's discuss how we can help bring your vision to life. Our team of experts is ready to provide a customized solution that protects your digital assets and builds customer trust."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-card p-8 shadow-soft">
            <h3 className="text-xl font-heading font-semibold text-ink mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted mb-1">Phone</p>
                <a
                  href="tel:+919131153321"
                  className="text-lg text-ink hover:text-primary transition-colors"
                >
                  +91 91311 53321
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-muted mb-1">Email</p>
                <a
                  href="mailto:renixsolutions@gmail.com"
                  className="text-lg text-ink hover:text-primary transition-colors"
                >
                  renixsolutions@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-muted mb-1">Location</p>
                <p className="text-lg text-ink">India</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-card p-8 shadow-soft">
            <h3 className="text-xl font-heading font-semibold text-ink mb-4">Why work with us?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-muted">Fast response time (within 24 hours)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-muted">Tailored proposals for your needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-muted">Transparent pricing and timelines</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-muted">Long-term partnership approach</span>
              </li>
            </ul>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  )
}

