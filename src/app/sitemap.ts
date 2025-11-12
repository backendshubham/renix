import type { MetadataRoute } from 'next'
import blogData from '@/data/blog.json'
import projectsData from '@/data/projects.json'
import servicesData from '@/data/services.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://renix.live'

  const routes = [
    '',
    '/services',
    '/industries',
    '/case-studies',
    '/about',
    '/careers',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const services = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogPosts = blogData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const caseStudies = projectsData.map((project) => ({
    url: `${baseUrl}/case-studies/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...services, ...blogPosts, ...caseStudies]
}

