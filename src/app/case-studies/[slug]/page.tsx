export const dynamic = 'force-dynamic'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { MDXContent, getCaseStudySlugs, readMdx, getPrevNext } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import { Toc } from '@/components/toc'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { BreadcrumbJsonLd } from '@/lib/seo'

export async function generateStaticParams() {
  const slugs = await getCaseStudySlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  try {
    const { content, data } = await readMdx(slug)
    const { prev, next } = await getPrevNext(slug)
    return (
      <main id="content">
        <Section>
          <Container>
            <BreadcrumbJsonLd
              items={[
                { name: 'Home', item: '/' },
                { name: 'Case Studies', item: '/case-studies' },
                { name: data.title ?? slug, item: `/case-studies/${slug}` }
              ]}
            />
            <div className="flex gap-10">
              <article className="prose prose-invert max-w-none flex-1">
                <header className="mb-8">
                  <h1 className="mb-3 text-4xl font-semibold">{data.title}</h1>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
                    {data.date ? (
                      <time dateTime={data.date}>{new Date(data.date).toLocaleDateString()}</time>
                    ) : null}
                    {Array.isArray(data.tags) && data.tags.length ? (
                      <div className="flex flex-wrap gap-2">
                        {data.tags.map((t: string) => (
                          <Badge key={t} variant="outline">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  {data.cover ? (
                    <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
                      <Image
                        src={data.cover}
                        alt={data.title}
                        width={1200}
                        height={630}
                        className="h-auto w-full object-cover"
                        priority
                      />
                    </div>
                  ) : null}
                </header>
                <MDXContent source={content} />
                <nav className="mt-10 grid gap-4 border-t border-white/10 pt-6 md:grid-cols-2">
                  {prev ? (
                    <Link
                      href={`/case-studies/${prev.slug}`}
                      className="block rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/[0.08]"
                    >
                      <div className="text-xs uppercase tracking-wide text-slate-400">Previous</div>
                      <div className="font-medium">{prev.title}</div>
                    </Link>
                  ) : (
                    <div />
                  )}
                  {next ? (
                    <Link
                      href={`/case-studies/${next.slug}`}
                      className="block rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/[0.08] md:ml-auto"
                    >
                      <div className="text-right text-xs uppercase tracking-wide text-slate-400">Next</div>
                      <div className="text-right font-medium">{next.title}</div>
                    </Link>
                  ) : null}
                </nav>
              </article>
              <Toc />
            </div>
          </Container>
        </Section>
      </main>
    )
  } catch (e) {
    notFound()
  }
}
