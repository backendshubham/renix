import { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import AnimatedSection, { AnimatedItem } from '@/components/AnimatedSection'
import { generatePageMetadata } from '@/utils/seo'

export const metadata: Metadata = generatePageMetadata(
  'About | Our story and principles',
  'Learn about Renix Solutions, founded by Yash Jain, and our commitment to building exceptional digital products.',
  '/about'
)

const timeline = [
  {
    year: '2023',
    title: 'Founded',
    description: 'Renix Solutions was founded by Yash Jain with a vision to build exceptional digital products.',
  },
  {
    year: '2023',
    title: 'Early Clients',
    description: 'Started working with forward-thinking startups and enterprises across India.',
  },
  {
    year: '2024',
    title: 'Scale-up',
    description: 'Expanded team and capabilities to serve more clients and deliver larger projects.',
  },
]

const principles = [
  {
    title: 'Clarity',
    description: 'We communicate clearly, set expectations, and deliver on promises.',
    icon: '💡',
  },
  {
    title: 'Reliability',
    description: 'We build systems that work, scale, and stand the test of time.',
    icon: '🛡️',
  },
  {
    title: 'Craft',
    description: 'We care about the details, from code quality to user experience.',
    icon: '✨',
  },
]

export default function About() {
  return (
    <div className="relative pt-20 pb-24 bg-background min-h-screen">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Trusted Partners in Building Software That Scales"
          subtitle="About Renix Solutions"
          description="Sentinel Security is a leading provider of comprehensive software security solutions. With a team of seasoned security experts and developers, we offer a range of services including security assessments, secure software development training, and continuous optimization."
        />

        {/* Founder Bio */}
        <AnimatedItem className="bg-white rounded-card p-8 md:p-12 shadow-soft mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-5xl">
              👤
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-heading font-bold text-ink mb-3">
                Yash Jain
              </h3>
              <p className="text-xl text-muted mb-4 font-medium">Founder & CEO, Renix Solutions</p>
              <p className="text-muted leading-relaxed mb-4 text-lg">
                Yash founded Renix Solutions with a vision to bridge the gap between design and
                engineering. With years of experience building products for startups and enterprises,
                he leads a team that&apos;s passionate about creating digital experiences that matter.
              </p>
              <p className="text-muted leading-relaxed text-lg">
                Under his leadership, Renix Solutions has grown from a small team to a trusted partner 
                for companies across industries, delivering software solutions that scale and protect 
                businesses from security threats.
              </p>
            </div>
          </div>
        </AnimatedItem>

        {/* Timeline */}
        <SectionHeader
          title="Our Journey"
          subtitle="Company Timeline"
          description="From humble beginnings to trusted partner—see how we've grown and evolved."
          className="mb-12"
        />
        <AnimatedSection className="space-y-8 mb-16">
          {timeline.map((item, index) => (
            <AnimatedItem key={index} className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-20 text-right">
                <span className="text-primary font-heading font-bold text-2xl">{item.year}</span>
              </div>
              <div className="flex-1 bg-white rounded-card p-8 shadow-soft">
                <h4 className="text-2xl font-heading font-semibold text-ink mb-3">
                  {item.title}
                </h4>
                <p className="text-muted leading-relaxed text-lg">{item.description}</p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* Principles */}
        <SectionHeader
          title="Our Core Principles"
          subtitle="What Drives Us"
          description="The values that guide everything we do. These principles shape our approach to building software and working with clients."
          className="mb-12"
        />
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <AnimatedItem key={index}>
              <Card>
                <div className="text-5xl mb-6">{principle.icon}</div>
                <h3 className="text-2xl font-heading font-semibold text-ink mb-4">
                  {principle.title}
                </h3>
                <p className="text-muted leading-relaxed text-lg">{principle.description}</p>
              </Card>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* Mission Statement */}
        <AnimatedItem className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-card p-8 md:p-12 shadow-soft mt-16 text-center">
          <h3 className="text-3xl font-heading font-bold text-ink mb-6">
            Our Mission
          </h3>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed mb-6">
            To empower businesses with secure, scalable, and reliable software solutions that protect 
            their digital assets and build customer trust. We believe in building software that not only 
            meets today&apos;s needs but scales for tomorrow&apos;s challenges.
          </p>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            Through continuous innovation, best practices, and a commitment to excellence, we help 
            companies navigate the complex world of software development with confidence and clarity.
          </p>
        </AnimatedItem>
      </div>
    </div>
  )
}

