import { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import AnimatedSection, { AnimatedItem } from '@/components/AnimatedSection'
import AnimatedLink from '@/components/AnimatedLink'
import ServiceIcon from '@/components/ServiceIcon'
import { generatePageMetadata } from '@/utils/seo'
import servicesData from '@/data/services.json'

export const metadata: Metadata = generatePageMetadata(
  'Services | Full-stack product teams on demand',
  'Renix Solutions offers comprehensive product development services from strategy to deployment.',
  '/services'
)

export default function Services() {
  return (
    <div className="relative pt-20 pb-24 bg-background min-h-screen">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Robust & Tailored Software Solutions"
          subtitle="Our Services"
          description="We provide end-to-end product development services, from initial strategy to deployment and scaling. Our comprehensive approach ensures your software is built right, from day one. From AI/ML to blockchain, we leverage cutting-edge technologies to deliver innovative solutions."
        />

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {servicesData.map((service) => (
            <AnimatedItem key={service.id} className="h-full flex">
              <Card className="h-full flex flex-col">
                <div className="flex-1 flex flex-col">
                  <div className="w-16 h-16 mb-6 text-primary">
                    <ServiceIcon icon={service.icon} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-ink mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted mb-6 leading-relaxed flex-1">{service.description}</p>
                  
                  {/* Technologies */}
                  {service.technologies && (
                    <div className="mb-4">
                      <p className="text-xs md:text-sm font-medium text-ink mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.slice(0, 4).map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {service.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-line text-muted rounded-full text-xs font-medium">
                            +{service.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  <div className="mb-4">
                    <p className="text-xs md:text-sm font-medium text-ink mb-3">Key Features:</p>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="text-xs md:text-sm text-muted flex items-start leading-relaxed">
                          <span className="text-primary mr-2 flex-shrink-0 mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-xs md:text-sm text-muted">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
                <div className="pt-4 border-t border-line mt-auto">
                  <AnimatedLink
                    href={`/services/${service.id}`}
                    className="text-primary hover:text-primary/80 font-medium text-xs md:text-sm transition-colors"
                  >
                    Learn More Details →
                  </AnimatedLink>
                </div>
              </Card>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* RatnaSamhita Featured Section */}
        <AnimatedItem className="mb-12 md:mb-16">
          <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border-2 border-primary/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl md:text-5xl">💎</span>
                  <div>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium mb-2 inline-block">
                      Featured Product
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-ink">
                      RatnaSamhita
                    </h2>
                    <p className="text-sm md:text-base text-primary/80 font-medium">
                      Premium Jewelry Management System
                    </p>
                  </div>
                </div>
                <p className="text-base md:text-lg text-muted mb-6 leading-relaxed">
                  Transform your jewelry business with a complete, cloud-based management solution. 
                  Streamline operations, improve customer experience, and grow your business with 
                  features like QR codes, mobile billing, analytics, and multi-shop support.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-background/50 rounded-lg p-4">
                    <p className="text-xs text-muted uppercase mb-1">Features</p>
                    <p className="text-lg font-heading font-bold text-ink">20+</p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <p className="text-xs text-muted uppercase mb-1">Free Trial</p>
                    <p className="text-lg font-heading font-bold text-ink">7 Days</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <AnimatedLink
                    href="https://opulentjewel.renix.live"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium text-base md:text-lg shadow-soft hover:shadow-hover"
                  >
                    Access RatnaSamhita Panel →
                  </AnimatedLink>
                  <AnimatedLink
                    href="/case-studies/ratnasamhita"
                    className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary/5 transition-all duration-200 font-medium text-base md:text-lg"
                  >
                    View Case Study
                  </AnimatedLink>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center text-center">
                  <div className="text-6xl md:text-8xl mb-4 md:mb-6">💎</div>
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-ink mb-3">
                    Complete Business Management
                  </h3>
                  <ul className="space-y-2 text-sm md:text-base text-muted text-left max-w-xs">
                    <li className="flex items-start">
                      <span className="text-primary mr-2 flex-shrink-0 mt-1">✓</span>
                      <span>Product & Inventory Management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 flex-shrink-0 mt-1">✓</span>
                      <span>QR Code Generation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 flex-shrink-0 mt-1">✓</span>
                      <span>Mobile Billing & Invoicing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 flex-shrink-0 mt-1">✓</span>
                      <span>Real-time Analytics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 flex-shrink-0 mt-1">✓</span>
                      <span>Multi-shop Support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </AnimatedItem>

        {/* Service Benefits Section */}
        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-ink mb-4 md:mb-6">
                Secure Your Software, Safeguard Your Business
              </h2>
              <p className="text-base md:text-lg text-muted mb-6 leading-relaxed">
                Our services are tailored to meet the unique security needs of your software and applications. 
                Contact us for a customized solution that protects your digital assets and builds customer trust.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-lg md:text-xl">🛡️</span>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-heading font-semibold text-ink mb-1">Comprehensive Security</h4>
                    <p className="text-sm md:text-base text-muted leading-relaxed">
                      From code analysis to penetration testing, we ensure your software is protected from vulnerabilities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <span className="text-lg md:text-xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-heading font-semibold text-ink mb-1">Rapid Development</h4>
                    <p className="text-sm md:text-base text-muted leading-relaxed">
                      Ship features faster with our agile methodologies and proven development practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <span className="text-lg md:text-xl">📈</span>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-heading font-semibold text-ink mb-1">Scalable Architecture</h4>
                    <p className="text-sm md:text-base text-muted leading-relaxed">
                      Build for today, scale for tomorrow. Our architecture grows with your business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl md:text-9xl mb-4 md:mb-6">🔒</div>
                  <p className="text-sm md:text-lg text-muted">Secure, scalable, and reliable software solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AnimatedItem className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-card p-6 md:p-8 lg:p-12 shadow-soft text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-4">
            Get a tailored plan in 48 hours
          </h3>
          <p className="text-base md:text-lg text-muted mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            Tell us about your project, and we&apos;ll create a custom proposal tailored to your needs. 
            Our team will analyze your requirements and provide a comprehensive solution that fits your budget and timeline.
          </p>
          <AnimatedLink
            href="/contact"
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium text-base md:text-lg shadow-soft hover:shadow-hover"
          >
            Book a Strategy Call
          </AnimatedLink>
        </AnimatedItem>
      </div>
    </div>
  )
}

