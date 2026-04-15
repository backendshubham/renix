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
          <div className={`aspect-video rounded-card mb-6 overflow-hidden shadow-premium group relative ${
            project.slug === 'ratnasamhita' || project.slug === 'jashoda-jewels'
              ? 'bg-gradient-to-br from-primary/30 via-accent/15 to-primary/40'
              : 'bg-line'
          }`}>
            {'video' in project && (project as { video?: string }).video ? (
              <video
                src={(project as { video?: string }).video}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
            {'video' in project && (project as { video?: string }).video ? null : (
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {Object.entries(project.metrics).map(([key, value]) => (
            <Card key={key} hover={false} className="border-primary/20 bg-primary/5">
              <p className="text-sm text-primary uppercase mb-2 font-bold tracking-wider">{key.replace(/_/g, ' ')}</p>
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
                className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {project.slug === 'ratnasamhita' ? (
            <>
              <Card hover={false}>
                <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Overview</h3>
                <p className="text-muted leading-relaxed mb-4">
                  RatnaSamhita is a sophisticated B2B & B2C Enterprise Resource Planning (ERP) and Point of Sale (POS) solution 
                  designed to digitize the traditional jewelry industry. Built with a focus on trust, accuracy, and scalability, 
                  the platform manages the entire lifecycle of jewelry operations.
                </p>
              </Card>

              <Card hover={false}>
                <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Key Features</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Multi-Tenant Architecture</h4>
                    <p className="text-muted text-sm">Complete data isolation for hosting independent jewelry shops on a single infrastructure with 100% security.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Advanced Inventory & LotTrack</h4>
                    <p className="text-muted text-sm">Batch-based tracking (Lots) from raw material to finished product with automated stock ledgers.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Girvi (Lending) Module</h4>
                    <p className="text-muted text-sm">Automated loan lifecycle management with valuation, interest calculation, and overdue alerts.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Real-time Metal Rates</h4>
                    <p className="text-muted text-sm">Global synchronization of Gold and Silver prices with historical analytics.</p>
                  </div>
                </div>
              </Card>
            </>
          ) : project.slug === 'jashoda-jewels' ? (
            <>
              <Card hover={false}>
                <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Project Overview</h3>
                <p className="text-muted leading-relaxed">
                  Jashoda is a high-end full-stack e-commerce platform and inventory management system built for a luxury silver jewelry brand. 
                  The goal was to combine a world-class shopping experience with a robust backend capable of handling multi-branch retail operations, 
                  real-time stock tracking, and automated fulfillment.
                </p>
              </Card>

              <Card hover={false}>
                <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Key Features</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Immersive UX/UI</h4>
                    <p className="text-muted text-sm">Leveraged Three.js and GSAP for high-performance animations and 3D product previews, reflecting "Timeless Elegance".</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Enterprise ERP</h4>
                    <p className="text-muted text-sm">Sophisticated module supporting inter-branch stock transfers, batch tracking, and SKU-level ledgers.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Dynamic Ecosystem</h4>
                    <p className="text-muted text-sm">Advanced filtering and a dynamic "You May Also Like" recommendation engine.</p>
                  </div>
                </div>
              </Card>
            </>
          ) : project.slug === 'qr-retail-suite' ? (
            <>
              <Card hover={false}>
                <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Overview</h3>
                <p className="text-muted leading-relaxed">
                  A high-performance retail management ecosystem designed for complex multi-tenant operations. 
                  This platform bridges the gap between traditional retail efficiency and modern digital convenience.
                </p>
              </Card>

              <Card hover={false}>
                <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Innovation Spotlight: QR Retail Suite</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Individual Product QR Codes</h4>
                    <p className="text-muted text-sm">Unique QR codes per product for instant stock audits and rapid identification at POS.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Mobile Scan & Bill</h4>
                    <p className="text-muted text-sm">Self-checkout feature reducing wait times at billing counters by up to 60%.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Unified Shop QR</h4>
                    <p className="text-muted text-sm">Single gateway for customers to access the entire digital catalog instantly.</p>
                  </div>
                </div>
              </Card>
            </>
          ) : project.slug === 'lottrack' ? (
            <>
              <Card hover={false}>
                <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Executive Summary</h3>
                <p className="text-muted leading-relaxed">
                  LotTrack is a high-performance, multi-tenant SaaS platform designed for modern retail and warehouse management. 
                  It bridges the gap between physical inventory and digital sales using unique QR-based tracking.
                </p>
              </Card>

              <Card hover={false}>
                <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Capabilities</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Advanced Batch (Lot) Tracking</h4>
                    <p className="text-muted text-sm">Granular tracking for FIFO/LIFO management, expiry tracking, and historical cost auditing.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Multi-Branch Operations</h4>
                    <p className="text-muted text-sm">Authorized workflow for stock transfers between branches with full financial auditing.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Smart Reporting</h4>
                    <p className="text-muted text-sm">Real-time generation of sales reports, turnover rates, and branch performance metrics.</p>
                  </div>
                </div>
              </Card>
            </>
          ) : project.slug === 'curatedbyaissh' ? (
            <>
              <Card hover={false}>
                <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Project Overview</h3>
                <p className="text-muted leading-relaxed">
                  curatedbyaissh is a state-of-the-art e-commerce platform specializing in curated gift boxes. 
                  It introduces a sophisticated "Build-a-Hamper" engine for bespoke gifting experiences.
                </p>
                <a
                  href="https://curatedbyaissh.renix.live/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-5 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/80 transition-colors"
                >
                  Visit Live Site →
                </a>
              </Card>

              <Card hover={false}>
                <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Key Features</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Dynamic Hamper Builder</h4>
                    <p className="text-muted text-sm">Interactive flow for selecting boxes, fillings, and items into a single cart entity.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Interactive Delivery Mapping</h4>
                    <p className="text-muted text-sm">OpenStreetMap integration for pinpoint accurate delivery location selection.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Intelligent Dashboard</h4>
                    <p className="text-muted text-sm">Real-time visualization of sales statistics and product performance via dynamic charts.</p>
                  </div>
                </div>
              </Card>
            </>
          ) : project.slug === 'dovies-fitness' ? (
            <>
              <Card hover={false}>
                <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Project Overview</h3>
                <p className="text-muted leading-relaxed">
                  Dovies Fitness is a comprehensive fitness platform for adults seeking to improve their health and wellness. 
                  Built with a real-time architecture, it delivers personalised workout collections, an extensive exercise 
                  library, live messaging between trainers and members, and a fully managed subscription experience.
                </p>
                {'link' in project && (
                  <a
                    href={(project as { link?: string }).link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-5 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/80 transition-colors"
                  >
                    Visit Live Site →
                  </a>
                )}
              </Card>

              <Card hover={false}>
                <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Key Features</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Fitness App &amp; Workout Collections</h4>
                    <p className="text-muted text-sm">Curated workout plans including Mix Max Daily Challenge, Shred Cardio, and personalised trainer programs for all fitness levels.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Fitness Tracking</h4>
                    <p className="text-muted text-sm">Detailed progress tracking across exercises, body metrics, and workout history to keep members motivated and on track.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Real-time Messaging System</h4>
                    <p className="text-muted text-sm">Socket.io-powered live chat enabling instant communication between trainers and members for guidance and accountability.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Profile &amp; Subscription Management</h4>
                    <p className="text-muted text-sm">Full profile management with Stripe-integrated subscription billing and AWS-backed secure media storage for workout videos and content.</p>
                  </div>
                </div>
              </Card>
            </>
          ) : project.slug === 'connektus' ? (
            <>
              <Card hover={false}>
                <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Project Overview</h3>
                <p className="text-muted leading-relaxed mb-3">
                  ConnektUs is a professional social media network built for adults who want to grow their career and
                  invest in their personal well-being. The platform uniquely combines professional networking
                  with exclusive partner discounts on wellness, fitness, education, and lifestyle services.
                </p>
                <p className="text-muted leading-relaxed">
                  Members gain access to a supportive community, curated job search resources, networking events,
                  and real-time messaging — all in one mobile-first experience built with React Native.
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.connektus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-orange-500 text-white rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.64.24.99.2l13.7-11.96-2.84-2.84L3.18 23.76zm16.7-13.38L16.2 8.1l-3.07 3.07 3.07 3.07 3.72-2.28c.69-.4.69-1.49-.04-1.88zM3.06.25C2.72.59 2.5 1.1 2.5 1.77v20.45c0 .67.22 1.18.56 1.52L14.1 11.97 3.06.25zM4.17.03L16.2 6.88l-3.07 3.06L4.17.03z"/></svg>
                  Download on Google Play
                </a>
              </Card>

              <Card hover={false}>
                <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Key Features</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Professional Profiles</h4>
                    <p className="text-muted text-sm">Rich career profiles highlighting experience, skills, and achievements to connect with peers, recruiters, and partners in the network.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Job Matching</h4>
                    <p className="text-muted text-sm">Intelligent job matching engine surfacing relevant career opportunities based on member profiles, skills, and preferences.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Exclusive Wellness Discounts</h4>
                    <p className="text-muted text-sm">Curated partner discounts across fitness, mental wellness, education, and lifestyle services — making self-care accessible for every member.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Networking Events &amp; Community</h4>
                    <p className="text-muted text-sm">Event discovery and RSVP features for professional meetups and wellness gatherings, with a community feed to stay connected.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Real-time Messaging System</h4>
                    <p className="text-muted text-sm">Direct and group messaging for seamless communication between professionals, mentors, and community members.</p>
                  </div>
                </div>
              </Card>
            </>
          ) : (
            <>
              <Card hover={false}>
                <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Overview</h3>
                <p className="text-muted leading-relaxed">
                  {project.description}
                </p>
              </Card>

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
            </>
          )}

          <Card hover={false}>
            <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Business Impact</h3>
            <p className="text-muted leading-relaxed">
              {project.slug === 'ratnasamhita' 
                ? 'Reduced manual entry for billing and inventory by 80% through QR automation. Eliminated interest calculation errors in the lending module.'
                : project.slug === 'jashoda-jewels'
                ? 'Achieved sub-second page loads and reduced inventory discrepancies by 40% through automated stock ledgers.'
                : project.slug === 'qr-retail-suite'
                ? 'Wait times reduced by up to 60% through QR self-checkout and 100% accounting accuracy via automated ledgers.'
                : project.slug === 'lottrack'
                ? 'Decreased checkout time by 40% and eliminated stock count errors via digital lot-tracking ledgers.'
                : project.slug === 'curatedbyaissh'
                ? 'Increased AOV through interactive hamper builder and reduced administrative overhead by ~40%.'
                : project.slug === 'dovies-fitness'
                ? 'Empowered thousands of adults to achieve their fitness goals through real-time coaching, structured workout plans, and seamless subscription management powered by Stripe and AWS.'
                : project.slug === 'connektus'
                ? 'Built a thriving professional ecosystem where members save on essential wellness services while advancing their careers — combining the power of LinkedIn-style networking with real-world community benefits.'
                : 'The new platform successfully handles the increased load, with improved performance and reliability. The client has seen significant growth in user engagement and satisfaction.'}
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

