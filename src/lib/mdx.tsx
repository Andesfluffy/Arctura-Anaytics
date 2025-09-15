import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Callout } from '@/components/callout'

export type CaseStudy = {
  slug: string
  title: string
  summary?: string
  date?: string
  cover?: string
  tags?: string[]
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'case-studies')

export async function getCaseStudySlugs() {
  const files = await fs.readdir(CONTENT_DIR)
  return files.filter((f) => f.endsWith('.mdx')).map((f) => f.replace(/\.mdx$/, ''))
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const slugs = await getCaseStudySlugs()
  const items = await Promise.all(
    slugs.map(async (slug) => {
      const { data } = await readMdx(slug)
      return {
        slug,
        title: data.title ?? slug,
        summary: data.summary,
        date: data.date,
        cover: data.cover,
        tags: Array.isArray(data.tags) ? (data.tags as string[]) : undefined
      }
    })
  )
  // Sort by date desc if dates exist
  items.sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0
    const db = b.date ? new Date(b.date).getTime() : 0
    return db - da
  })
  return items
}

export async function getPrevNext(slug: string) {
  const items = await getCaseStudies()
  const idx = items.findIndex((i) => i.slug === slug)
  if (idx === -1) return { prev: null, next: null }
  const prev = idx > 0 ? items[idx - 1] : null
  const next = idx < items.length - 1 ? items[idx + 1] : null
  return { prev, next }
}

export async function readMdx(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  const raw = await fs.readFile(filePath, 'utf8')
  const { content, data } = matter(raw)
  return { content, data }
}

export async function MDXContent({ source }: { source: string }) {
  // RSC-compatible MDX compiler with our plugins
  // @ts-expect-error async component
  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          // Lazy-load heavy MDX plugins to isolate vendor chunk
          remarkPlugins: [(await import('remark-gfm')).default],
          rehypePlugins: [[(await import('rehype-pretty-code')).default as any, { theme: 'github-dark' }]]
        }
      }}
      components={{ Callout }}
    />
  )
}
