import type { MetadataRoute } from 'next'
import blogData from '@/data/blog.json'
import projectsData from '@/data/projects.json'
import servicesData from '@/data/services.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://renix.live'
  const now = new Date()
  
  // Set a recent date for static pages (2 weeks ago when site was launched)
  const siteLaunchDate = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)

  // Main static routes with optimized priorities
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: siteLaunchDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: siteLaunchDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: siteLaunchDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: siteLaunchDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: siteLaunchDate,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: siteLaunchDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: siteLaunchDate,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]

  // Service pages - high priority as they're key landing pages
  const services = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: siteLaunchDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog posts - use actual post dates, higher priority for recent posts
  const blogPosts = blogData.map((post) => {
    const postDate = new Date(post.date)
    const daysSincePost = (now.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24)
    // Higher priority for recent posts (within 30 days)
    const priority = daysSincePost < 30 ? 0.7 : 0.6
    
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: postDate,
      changeFrequency: 'monthly' as const,
      priority,
    }
  })

  // Case studies - important showcase pages
  const caseStudies = projectsData.map((project) => ({
    url: `${baseUrl}/case-studies/${project.slug}`,
    lastModified: siteLaunchDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Combine all routes and sort by priority (highest first)
  const allRoutes = [...routes, ...services, ...blogPosts, ...caseStudies]
  
  return allRoutes.sort((a, b) => (b.priority || 0) - (a.priority || 0))
}

