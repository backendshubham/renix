import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generatePageMetadata } from '@/utils/seo'
import blogData from '@/data/blog.json'
import AnimatedLink from '@/components/AnimatedLink'
import Card from '@/components/Card'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }))
}

async function getPost(slug: string) {
  const post = blogData.find((p) => p.slug === slug)
  if (!post) return null

  const filePath = path.join(process.cwd(), 'src', 'content', 'blog', `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { content } = matter(fileContents)

  return {
    ...post,
    content,
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = blogData.find((p) => p.slug === params.slug)
  if (!post) {
    return generatePageMetadata('Post not found', '', '/blog')
  }

  return generatePageMetadata(post.title, post.excerpt, `/blog/${params.slug}`)
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="pt-20 pb-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
              {post.tags[0]}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink mb-4">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-muted">
            <span>{post.author}</span>
            <span>•</span>
            <span>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        <Card hover={false} className="prose prose-lg max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </Card>

        <div className="mt-8 text-center">
          <AnimatedLink
            href="/blog"
            className="inline-block px-6 py-3 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            ← Back to Blog
          </AnimatedLink>
        </div>
      </div>
    </article>
  )
}

