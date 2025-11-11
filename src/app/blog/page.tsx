import { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import AnimatedSection, { AnimatedItem } from '@/components/AnimatedSection'
import { generatePageMetadata } from '@/utils/seo'
import Link from 'next/link'
import blogData from '@/data/blog.json'

export const metadata: Metadata = generatePageMetadata(
  'Blog | Insights and thoughts',
  'Read our latest thoughts on design, engineering, and product development.',
  '/blog'
)

export default function Blog() {
  return (
    <div className="pt-20 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Insights and thoughts"
          description="Our latest articles on design, engineering, and product development."
        />

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((post) => (
            <AnimatedItem key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <Card>
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {post.tags[0]}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-ink mb-2">
                    {post.title}
                  </h3>
                  <p className="text-muted mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted pt-4 border-t border-line">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="mt-2 text-sm text-muted">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
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

