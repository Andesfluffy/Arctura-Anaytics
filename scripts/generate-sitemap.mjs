import { promises as fs } from 'node:fs'
import path from 'node:path'

const BASE = process.env.SITE_URL || 'https://www.arctura-analytics.example'

const routes = ['/', '/solutions', '/about', '/careers', '/contact', '/case-studies']

async function getCaseStudies() {
  const dir = path.join(process.cwd(), 'content', 'case-studies')
  const files = await fs.readdir(dir)
  return files.filter((f) => f.endsWith('.mdx')).map((f) => f.replace(/\.mdx$/, ''))
}

function url(loc) {
  return `<url><loc>${BASE}${loc}</loc><changefreq>weekly</changefreq></url>`
}

async function run() {
  const cases = await getCaseStudies()
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map((r) => url(r)),
    ...cases.map((s) => url(`/case-studies/${s}`)),
    '</urlset>'
  ].join('')
  await fs.writeFile(path.join(process.cwd(), 'public', 'sitemap.xml'), body)
  console.log('sitemap.xml generated')
}

run()

