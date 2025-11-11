import { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import AnimatedSection, { AnimatedItem } from '@/components/AnimatedSection'
import { generatePageMetadata } from '@/utils/seo'
import Link from 'next/link'
import projectsData from '@/data/projects.json'

export const metadata: Metadata = generatePageMetadata(
  'Case Studies | Our work in action',
  'Explore the products we have built for ambitious teams across industries.',
  '/case-studies'
)

export default function CaseStudies() {
  return (
    <div className="pt-20 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our work in action"
          description="Real projects, real results. See how we've helped teams build and scale their products."
        />

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <AnimatedItem key={project.id}>
              <Link href={`/case-studies/${project.slug}`}>
                <Card>
                  <div className="aspect-video bg-line rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-5xl">
                      {project.category === 'Fintech'
                        ? '💳'
                        : project.category === 'Retail'
                        ? '🛍️'
                        : '🏥'}
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-ink mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-line text-muted rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-line">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-xs text-muted uppercase">{key}</p>
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
    </div>
  )
}

