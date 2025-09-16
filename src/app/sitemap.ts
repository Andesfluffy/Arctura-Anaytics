import { MetadataRoute } from 'next'
import { getCaseStudies } from '@/lib/mdx'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://arctura-analytics.vercel.app'
  const now = new Date()
  const staticPages: MetadataRoute.Sitemap = [
    '',
    '/solutions',
    '/about',
    '/careers',
    '/contact',
    '/case-studies'
  ].map((p) => ({ url: base + p, lastModified: now }))

  const cases = (await getCaseStudies()).map((c) => ({
    url: `${base}/case-studies/${c.slug}`,
    lastModified: now
  }))
  return [...staticPages, ...cases]
}
