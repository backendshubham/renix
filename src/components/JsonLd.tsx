'use client'

import { useEffect, useState } from 'react'
import { generateJsonLd } from '@/utils/seo'

export default function JsonLd() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return

    try {
      const organizationSchema = generateJsonLd('Organization')
      const websiteSchema = generateJsonLd('WebSite')

      // Remove existing scripts if any
      const existingOrg = document.getElementById('organization-schema')
      const existingWeb = document.getElementById('website-schema')
      if (existingOrg) existingOrg.remove()
      if (existingWeb) existingWeb.remove()

      const orgScript = document.createElement('script')
      orgScript.type = 'application/ld+json'
      orgScript.id = 'organization-schema'
      orgScript.textContent = JSON.stringify(organizationSchema)
      document.head.appendChild(orgScript)

      const websiteScript = document.createElement('script')
      websiteScript.type = 'application/ld+json'
      websiteScript.id = 'website-schema'
      websiteScript.textContent = JSON.stringify(websiteSchema)
      document.head.appendChild(websiteScript)
    } catch (error) {
      console.error('Error injecting JSON-LD:', error)
    }
  }, [mounted])

  return null
}

