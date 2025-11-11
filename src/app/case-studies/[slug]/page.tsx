import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generatePageMetadata } from '@/utils/seo'
import projectsData from '@/data/projects.json'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import AnimatedLink from '@/components/AnimatedLink'

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug)
  if (!project) {
    return generatePageMetadata('Project not found', '', '/case-studies')
  }

  return generatePageMetadata(
    `${project.title} | Case Study`,
    project.description,
    `/case-studies/${params.slug}`
  )
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="pt-20 pb-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={project.title}
          subtitle={project.category}
          description={project.description}
        />

        <div className="mb-8">
          <div className="aspect-video bg-line rounded-card mb-6 flex items-center justify-center">
            <span className="text-8xl">
              {project.category === 'Fintech'
                ? '💳'
                : project.category === 'Retail'
                ? '🛍️'
                : '🏥'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {Object.entries(project.metrics).map(([key, value]) => (
            <Card key={key} hover={false}>
              <p className="text-sm text-muted uppercase mb-2">{key}</p>
              <p className="text-2xl font-heading font-bold text-ink">{value}</p>
            </Card>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Card hover={false}>
            <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Problem</h3>
            <p className="text-muted leading-relaxed">
              The client needed a scalable solution to handle growing user demand while maintaining
              high performance and reliability. Legacy systems were struggling to keep up with
              increasing load and complexity.
            </p>
          </Card>

          <Card hover={false}>
            <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Approach</h3>
            <p className="text-muted leading-relaxed">
              We designed and built a modern, cloud-native architecture using best practices and
              proven technologies. The solution was built with scalability, maintainability, and
              performance in mind from day one.
            </p>
          </Card>

          <Card hover={false}>
            <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Impact</h3>
            <p className="text-muted leading-relaxed">
              The new platform successfully handles the increased load, with improved performance
              and reliability. The client has seen significant growth in user engagement and
              satisfaction.
            </p>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <AnimatedLink
            href="/case-studies"
            className="inline-block px-6 py-3 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            ← Back to Case Studies
          </AnimatedLink>
        </div>
      </div>
    </div>
  )
}

