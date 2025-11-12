import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generatePageMetadata } from '@/utils/seo'
import servicesData from '@/data/services.json'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import AnimatedLink from '@/components/AnimatedLink'
import ServiceIcon from '@/components/ServiceIcon'
import AnimatedSection, { AnimatedItem } from '@/components/AnimatedSection'

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const service = servicesData.find((s) => s.id === params.slug)
  if (!service) {
    return generatePageMetadata('Service not found', '', '/services')
  }

  return generatePageMetadata(
    `${service.title} | Services`,
    service.description,
    `/services/${params.slug}`
  )
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.id === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="relative pt-20 pb-24 bg-background min-h-screen">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <AnimatedItem className="flex items-center space-x-4 mb-6">
            <AnimatedLink
              href="/services"
              className="text-muted hover:text-primary transition-colors text-sm md:text-base"
            >
              ← Back to Services
            </AnimatedLink>
          </AnimatedItem>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 mb-8">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/10 rounded-2xl flex items-center justify-center text-4xl md:text-5xl">
              <ServiceIcon icon={service.icon} />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink mb-4">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed max-w-3xl">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        {service.technologies && service.technologies.length > 0 && (
          <AnimatedItem className="mb-12 md:mb-16">
            <Card>
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-ink mb-6">
                Technologies We Use
              </h2>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm md:text-base font-medium hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </AnimatedItem>
        )}

        {/* Features Section */}
        {service.features && service.features.length > 0 && (
          <AnimatedItem className="mb-12 md:mb-16">
            <Card>
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-ink mb-6">
                Key Features & Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-light rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-primary text-xl flex-shrink-0 mt-1">✓</span>
                    <p className="text-base md:text-lg text-ink leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedItem>
        )}

        {/* Process Section */}
        <AnimatedSection className="mb-12 md:mb-16">
          <SectionHeader
            title="Our Process"
            subtitle="How We Deliver"
            description="We follow a proven methodology to ensure your project is delivered on time and exceeds expectations."
            className="mb-8"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We understand your requirements, goals, and constraints through detailed discussions.',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'We create a comprehensive plan with timelines, milestones, and deliverables.',
              },
              {
                step: '03',
                title: 'Development',
                description: 'We build your solution using best practices and modern technologies.',
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'We deploy, test, and optimize your solution for production readiness.',
              },
            ].map((item, index) => (
              <AnimatedItem key={index} className="h-full flex">
                <Card className="h-full flex flex-col">
                  <div className="text-4xl font-heading font-bold text-primary mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-ink mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed flex-1">{item.description}</p>
                </Card>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>

        {/* Benefits Section */}
        <AnimatedItem className="mb-12 md:mb-16">
          <Card>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-ink mb-6">
              Why Choose Us for {service.title}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: '🎯',
                  title: 'Expert Team',
                  description: 'Our team has years of experience in delivering high-quality solutions.',
                },
                {
                  icon: '⚡',
                  title: 'Fast Delivery',
                  description: 'We follow agile methodologies to deliver results quickly.',
                },
                {
                  icon: '🔒',
                  title: 'Secure & Reliable',
                  description: 'We prioritize security and reliability in everything we build.',
                },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-heading font-semibold text-ink mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </AnimatedItem>

        {/* CTA Section */}
        <AnimatedItem className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-card p-8 md:p-12 shadow-soft text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-base md:text-lg text-muted mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss how our {service.title} services can help transform your business. 
            Get a free consultation and custom proposal tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedLink
              href="/contact"
              className="inline-block px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium text-base md:text-lg shadow-soft hover:shadow-hover"
            >
              Get Started
            </AnimatedLink>
            <AnimatedLink
              href="/services"
              className="inline-block px-6 md:px-8 py-3 md:py-4 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary/5 transition-all duration-200 font-medium text-base md:text-lg"
            >
              View All Services
            </AnimatedLink>
          </div>
        </AnimatedItem>
      </div>
    </div>
  )
}

