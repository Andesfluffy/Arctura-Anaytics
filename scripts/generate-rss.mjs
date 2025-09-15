import { promises as fs } from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const BASE = process.env.SITE_URL || 'https://www.arctura-analytics.example'

async function getItems() {
  const dir = path.join(process.cwd(), 'content', 'case-studies')
  const files = await fs.readdir(dir)
  const mdx = files.filter((f) => f.endsWith('.mdx'))
  const items = await Promise.all(
    mdx.map(async (file) => {
      const raw = await fs.readFile(path.join(dir, file), 'utf8')
      const { data } = matter(raw)
      const slug = file.replace(/\.mdx$/, '')
      return {
        title: data.title || slug,
        date: new Date(data.date || Date.now()).toUTCString(),
        url: `${BASE}/case-studies/${slug}`
      }
    })
  )
  return items
}

async function run() {
  const items = await getItems()
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Arctura Analytics – Case Studies</title>
    <link>${BASE}</link>
    <description>Selected work and outcomes</description>
    ${items
      .map(
        (i) => `
    <item>
      <title>${i.title}</title>
      <link>${i.url}</link>
      <pubDate>${i.date}</pubDate>
      <guid>${i.url}</guid>
    </item>`
      )
      .join('')}
  </channel>
</rss>`
  await fs.writeFile(path.join(process.cwd(), 'public', 'rss.xml'), rss)
  console.log('rss.xml generated')
}

run()

