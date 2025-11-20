import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Card from '@/components/Card'
import SectionHeader from '@/components/SectionHeader'
import TestimonialSlider from '@/components/TestimonialSlider'
import AnimatedSection, { AnimatedItem } from '@/components/AnimatedSection'
import AnimatedLink from '@/components/AnimatedLink'
import CompanyLogosSlider from '@/components/CompanyLogosSlider'
import { generatePageMetadata } from '@/utils/seo'
import Link from 'next/link'
import projectsData from '@/data/projects.json'

export const metadata: Metadata = generatePageMetadata(
  'Renix Solutions | Build. Scale. Renix.',
  'Renix Solutions helps startups and enterprises design, build, and scale digital products with clean UX and resilient tech.',
  '/'
)

const valueCards = [
  {
    title: 'Engineering Quality',
    description: 'Type-safe, test-covered, cloud-native. We write code that scales, performs, and stands the test of time. Every line is reviewed, every feature is tested, and every deployment is monitored.',
    icon: '⚡',
    details: 'Comprehensive code reviews, automated testing, and continuous monitoring ensure your product is built to last.',
  },
  {
    title: 'Design Systems',
    description: 'Reusable components. Pixel-true execution. We create design systems that enable rapid development while maintaining visual consistency across your entire product.',
    icon: '🎨',
    details: 'From component libraries to style guides, we build design systems that accelerate development and ensure brand consistency.',
  },
  {
    title: 'Speed to Value',
    description: 'MVPs in weeks, not quarters. We help you validate ideas quickly and iterate based on real user feedback, getting your product to market faster.',
    icon: '🚀',
    details: 'Agile methodologies, rapid prototyping, and iterative development help you ship features that matter, when they matter.',
  },
  {
    title: 'Long-term Partner',
    description: 'From discovery to scale, we stay. We don\'t just build and leave—we partner with you through growth, scaling, and evolution of your product.',
    icon: '🤝',
    details: 'Ongoing support, maintenance, and optimization ensure your product continues to perform as your business grows.',
  },
]

export default function Home() {
  return (
    <div className="relative">
      <Hero />

      {/* Value Cards Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Robust & Tailored Software Security Solutions"
            subtitle=""
            description=""
            className="mb-12"
          />
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Security Audits',
                description: 'Comprehensive security audits: code analysis, penetration testing, secure code review.',
                icon: '🛡️',
              },
              {
                title: 'Security Training',
                description: 'Empower your team with practical security training programs focused on secure coding practices.',
                icon: '📚',
              },
              {
                title: 'Security Consulting',
                description: 'Leverage our expertise through tailored security consulting services for secure SDLC implementation.',
                icon: '💼',
              },
            ].map((card, index) => (
              <AnimatedItem key={index}>
                <Card className="p-6 md:p-8 border border-border rounded-xl h-full flex flex-col">
                  <div className="text-4xl md:text-5xl mb-6 md:mb-8 lg:mb-12">{card.icon}</div>
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-ink mb-3 md:mb-4">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted mb-4 md:mb-6 leading-relaxed flex-grow">{card.description}</p>
                  <a
                    href="/services"
                    className="flex items-center gap-1 transition duration-300 text-secondary hover:opacity-80 text-sm md:text-base mt-auto"
                  >
                    Learn More{' '}
                    <span className="sr-only">Details</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12l14 0" />
                      <path d="M13 18l6 -6" />
                      <path d="M13 6l6 6" />
                    </svg>
                  </a>
                </Card>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Company Logos Slider */}
      <CompanyLogosSlider />

      {/* Secure Your Software Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="justify-center mb-10 row xl:mb-14">
            <div className="lg:col-8">
              <SectionHeader
                title="Secure Your Software, Safeguard Your Business"
                subtitle=""
                description="Our services are tailored to meet the unique security needs of your software and applications. Contact us for a customized solution."
                className="text-center"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse gap-10 md:flex-row justify-center lg:justify-between md:items-stretch">
            <div className="w-full md:w-1/2">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-ink mb-2">Risk Mitigation</h4>
                    <p className="text-muted leading-relaxed">
                      Proactively identify vulnerabilities and safeguard your software from potential data breaches and cyber threats. Our comprehensive security audits ensure your applications are protected.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-ink mb-2">Customer Trust</h4>
                    <p className="text-muted leading-relaxed">
                      Build a strong reputation for security and reliability, fostering customer trust in your software solutions. Gain up to 90% customer confidence with our security-first approach.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-ink mb-2">Compliance Assurance</h4>
                    <p className="text-muted leading-relaxed">
                      Stay compliant with industry regulations and standards, avoiding costly fines and legal penalties. We maintain 100% compliance assurance to protect your customers from security threats.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <AnimatedLink
                  href="/contact"
                  className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium text-lg shadow-soft hover:shadow-hover"
                >
                  Get Started Now
                </AnimatedLink>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🚀</div>
                  <p className="text-muted text-lg">Visual representation of secure, scalable software architecture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RatnaSamhita Featured Hint */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedItem>
            <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-2 border-primary/20">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary/30 via-accent/15 to-primary/40 rounded-2xl flex items-center justify-center shadow-soft">
                    <span className="text-5xl md:text-6xl">💎</span>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                      Featured Product
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-2">
                    RatnaSamhita
                  </h3>
                  <p className="text-base md:text-lg text-muted mb-4 leading-relaxed">
                    Premium Jewelry Management System - Transform your jewelry business with complete cloud-based management solution.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <AnimatedLink
                      href="https://ratnasamhita.renix.live"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium text-sm md:text-base shadow-soft hover:shadow-hover"
                    >
                      Access Panel →
                    </AnimatedLink>
                    <AnimatedLink
                      href="/case-studies/ratnasamhita"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary/5 transition-all duration-200 font-medium text-sm md:text-base"
                    >
                      Learn More
                    </AnimatedLink>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedItem>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Work in Action"
            subtitle="Featured Projects"
            description="Real projects, real results. See how we've helped teams build and scale their products with clean architecture and exceptional user experiences."
            className="mb-12 md:mb-16"
          />
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projectsData.slice(0, 3).map((project) => (
              <AnimatedItem key={project.id}>
                <Link href={`/case-studies/${project.slug}`}>
                  <Card>
                    <div className={`aspect-video rounded-lg mb-6 flex items-center justify-center ${
                      project.slug === 'ratnasamhita'
                        ? 'bg-gradient-to-br from-primary/30 via-accent/15 to-primary/40 shadow-soft'
                        : 'bg-gradient-to-br from-primary/10 to-accent/10'
                    }`}>
                      <span className="text-6xl">
                        {project.slug === 'ratnasamhita'
                          ? '💎'
                          : project.category === 'Fintech'
                          ? '💳'
                          : project.category === 'Retail'
                          ? '🛍️'
                          : '🏥'}
                      </span>
                    </div>
                    <div className="mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-heading font-semibold text-ink mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-line text-muted rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-line">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        {Object.entries(project.metrics).slice(0, 3).map(([key, value]) => (
                          <div key={key}>
                            <p className="text-xs text-muted uppercase mb-1">{key}</p>
                            <p className="text-sm font-semibold text-ink">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 lg:py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-12 md:pb-16 lg:pb-20">
            <div className="flex flex-col gap-8 md:gap-10 justify-center">
              <div>
                <SectionHeader
                  title="Trusted by Industry Leaders"
                  subtitle=""
                  description="See what our clients have to say about our software security solutions. We prioritize integrity and collaboration to safeguard your digital assets."
                  className="text-white mb-8 md:mb-12"
                />
              </div>
              <TestimonialSlider />
              <div className="inline-block text-center mt-8 md:mt-12">
                <AnimatedLink
                  href="/reviews"
                  className="btn btn-outline-secondary"
                >
                  Read All Reviews
                </AnimatedLink>
              </div>
            </div>
          </div>
          <div className="pt-12 md:pt-16 lg:pt-20 border-t border-border/20">
            <div className="items-center justify-center row md:justify-between gy-5 gx-4 xl:gx-5">
              <div className="col-12 md:col-5 order-2 md:order-1">
                <div className="flex flex-col gap-6">
                  <h2 className="text-white text-3xl md:text-4xl font-heading font-bold">
                    Trusted Partners in Fortifying <strong>Software Protecting Businesses</strong>
                  </h2>
                  <p className="text-light/80">
                    Sentinel Security is a leading provider of comprehensive software security solutions.
                  </p>
                  <p className="text-light/80">
                    With a team of seasoned security experts and developers, we offer a range of services including security assessments, secure software development training.
                  </p>
                  <div className="inline-block">
                    <AnimatedLink
                      href="/about"
                      className="btn btn-outline-secondary"
                    >
                      Learn More
                    </AnimatedLink>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6 order-1 md:order-2">
                <div className="p-8 border bg-tertiary/20 border-border/20 rounded-xl md:px-24 md:py-14">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-9xl mb-4">🌐</div>
                      <p className="text-muted text-lg">Secure, scalable, and reliable software solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 text-white bg-primary rounded-xl">
          <h2 className="pb-4 md:pb-6 text-center text-white text-2xl md:text-3xl lg:text-4xl font-heading font-bold">
            Fortify Your Software, Secure Your Future
          </h2>
          <p className="text-balance pb-6 md:pb-8 text-center text-light/80 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            With a team of seasoned security experts and developers, we offer a range of services including security assessments.
          </p>
          <div className="w-fit mx-auto block">
            <AnimatedLink
              href="/contact"
              className="z-10 btn btn-secondary"
            >
              Get Started Now
            </AnimatedLink>
          </div>
        </div>
      </section>
    </div>
  )
}

