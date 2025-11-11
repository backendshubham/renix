import { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import AnimatedSection, { AnimatedItem } from '@/components/AnimatedSection'
import AnimatedLink from '@/components/AnimatedLink'
import { generatePageMetadata } from '@/utils/seo'
import Link from 'next/link'
import careersData from '@/data/careers.json'

export const metadata: Metadata = generatePageMetadata(
  'Careers | Ship work you are proud of',
  'Join Renix Solutions and work on exciting projects with a team that values quality and craft.',
  '/careers'
)

export default function Careers() {
  return (
    <div className="pt-20 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Ship work you're proud of"
          description="Join a team that values quality, craft, and continuous learning."
        />

        <AnimatedSection className="space-y-6 mb-12">
          {careersData.map((role) => (
            <AnimatedItem key={role.id}>
              <Card>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-heading font-semibold text-ink">
                        {role.title}
                      </h3>
                      <div className="flex flex-col items-end text-sm text-muted">
                        <span>{role.location}</span>
                        <span>{role.type}</span>
                      </div>
                    </div>
                    <p className="text-muted mb-4">{role.description}</p>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-ink mb-2">Requirements:</p>
                      <ul className="space-y-1">
                        {role.requirements.map((req, index) => (
                          <li key={index} className="text-sm text-muted flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {role.niceToHave && role.niceToHave.length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-ink mb-2">Nice to have:</p>
                        <ul className="space-y-1">
                          {role.niceToHave.map((item, index) => (
                            <li key={index} className="text-sm text-muted flex items-start">
                              <span className="text-accent mr-2">+</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-line">
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium"
                  >
                    Apply Now
                  </Link>
                </div>
              </Card>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        <AnimatedItem className="bg-white rounded-card p-8 md:p-12 shadow-soft text-center">
          <h3 className="text-2xl font-heading font-bold text-ink mb-4">
            Don&apos;t see a role that fits?
          </h3>
          <p className="text-muted mb-6 max-w-2xl mx-auto">
            We&apos;re always looking for talented people. Send us your resume and we&apos;ll keep you in
            mind for future opportunities.
          </p>
          <AnimatedLink
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium text-lg shadow-soft hover:shadow-hover"
          >
            Get in Touch
          </AnimatedLink>
        </AnimatedItem>
      </div>
    </div>
  )
}

