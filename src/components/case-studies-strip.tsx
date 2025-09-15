import Image from 'next/image'
import Link from 'next/link'
import { getCaseStudies } from '@/lib/mdx'

export async function CaseStudiesStrip() {
  const items = await getCaseStudies()
  if (!items?.length) return null
  return (
    <section className="bg-white py-14">
      <div className="container">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="mb-1 text-xs font-semibold tracking-[.2em] text-slate-500">CASE STUDIES</div>
            <h2 className="text-2xl font-semibold md:text-3xl">Results our clients can measure</h2>
          </div>
          <Link href="/case-studies" className="text-sm font-medium text-[var(--space-cadet)] hover:underline">
            View all
          </Link>
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [-ms-overflow-style:none]" style={{ WebkitOverflowScrolling: 'touch' }}>
          {items.slice(0, 6).map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group relative w-80 flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft"
            >
              <div className="relative h-44 w-full">
                {cs.cover ? (
                  <Image src={cs.cover} alt="" fill sizes="320px" className="object-cover" />
                ) : (
                  <div className="h-full w-full bg-slate-200" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="p-4">
                <div className="text-sm text-slate-500">{cs.date ? new Date(cs.date).toLocaleDateString() : ''}</div>
                <div className="mt-1 text-base font-semibold text-slate-900">{cs.title}</div>
                {cs.summary ? <p className="mt-1 text-sm text-slate-600">{cs.summary}</p> : null}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
