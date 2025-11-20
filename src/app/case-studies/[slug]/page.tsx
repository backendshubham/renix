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
          <div className={`aspect-video rounded-card mb-6 flex items-center justify-center ${
            project.slug === 'opulentjewel'
              ? 'bg-gradient-to-br from-primary/30 via-accent/15 to-primary/40 shadow-soft'
              : 'bg-line'
          }`}>
            <span className="text-8xl">
              {project.slug === 'opulentjewel'
                ? '💎'
                : project.category === 'Fintech'
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
          {project.slug === 'opulentjewel' ? (
            <>
              <Card hover={false}>
                <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Overview</h3>
                <p className="text-muted leading-relaxed mb-4">
                  OpulentJewel is a comprehensive cloud-based management platform designed specifically for jewelry retailers. 
                  It transforms traditional jewelry business operations by digitizing inventory management, billing, customer 
                  engagement, and analytics into one unified system.
                </p>
                <p className="text-muted leading-relaxed">
                  The platform helps jewelry retailers streamline operations, improve customer experience, and grow their 
                  business with modern digital tools.
                </p>
              </Card>

              <Card hover={false}>
                <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Key Features</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Complete Business Management</h4>
                    <p className="text-muted text-sm">Manage products, inventory, and stock in one place. Generate professional bills with automatic GST calculations. Track sales, revenue, and performance with real-time analytics.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Enhanced Customer Experience</h4>
                    <p className="text-muted text-sm">QR code generation for instant product access. Mobile-friendly interface for on-the-go billing. Digital product catalogs accessible via QR scan. Professional invoice generation.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Operational Efficiency</h4>
                    <p className="text-muted text-sm">Bulk product upload via CSV/Excel. Staff management with role-based permissions. Subscription management with flexible plans. Secure cloud storage for images and data.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Advanced Capabilities</h4>
                    <p className="text-muted text-sm">Real-time analytics dashboard with charts and insights. Payment integration with Razorpay. Multi-tenant architecture for data isolation. Enterprise-grade security with CSRF protection and JWT authentication.</p>
                  </div>
                </div>
              </Card>

              <Card hover={false}>
                <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Impact</h3>
                <p className="text-muted leading-relaxed mb-4">
                  OpulentJewel enables jewelry retailers to digitize their operations completely, from inventory management 
                  to customer engagement. The platform supports multi-shop businesses, provides real-time insights, and 
                  offers a seamless mobile experience for both staff and customers.
                </p>
                <p className="text-muted leading-relaxed">
                  With features like QR codes, mobile billing, and comprehensive analytics, retailers can improve operational 
                  efficiency, enhance customer experience, and make data-driven decisions to grow their business.
                </p>
              </Card>

              <Card hover={false}>
                <div className="text-center">
                  <AnimatedLink
                    href="https://opulentjewel.renix.live"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 font-medium transition-colors"
                  >
                    Visit OpulentJewel →
                  </AnimatedLink>
                </div>
              </Card>
            </>
          ) : (
            <>
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
            </>
          )}
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

