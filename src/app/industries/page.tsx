import { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import AnimatedSection, { AnimatedItem } from '@/components/AnimatedSection'
import { generatePageMetadata } from '@/utils/seo'
import industriesData from '@/data/industries.json'

export const metadata: Metadata = generatePageMetadata(
  'Industries | Solutions for every sector',
  'Renix Solutions delivers tailored solutions for Fintech, Retail, Healthtech, SaaS, and Logistics industries.',
  '/industries'
)

export default function Industries() {
  return (
    <div className="pt-20 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Solutions for every sector"
          description="We've built products across industries, each with unique challenges and requirements."
        />

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((industry) => (
            <AnimatedItem key={industry.id}>
              <Card>
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-heading font-semibold text-ink mb-2">
                  {industry.name}
                </h3>
                <p className="text-muted mb-4">{industry.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-ink">Examples:</p>
                  <ul className="space-y-1">
                    {industry.examples.map((example, index) => (
                      <li key={index} className="text-sm text-muted flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </div>
  )
}

