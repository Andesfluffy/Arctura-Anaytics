import Image from 'next/image'
import Link from 'next/link'
import { getCaseStudies } from '@/lib/mdx'

export async function SelectedWork() {
  const items = (await getCaseStudies()).slice(0, 3)
  if (!items.length) return null
  return (
    <section className="bg-white py-16">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-2 text-xs font-semibold tracking-[.2em] text-slate-500">SELECTED WORK</div>
          <h2 className="text-3xl font-semibold md:text-4xl">A few projects we’re proud of</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((cs) => (
            <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-shadow hover:shadow-soft-lg">
              <div className="relative h-56 w-full">
                {cs.cover ? (
                  <Image src={cs.cover} alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
                ) : (
                  <div className="h-full w-full bg-slate-200" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <div className="text-sm text-slate-500">{cs.date ? new Date(cs.date).toLocaleDateString() : ''}</div>
                <div className="mt-1 text-lg font-semibold text-slate-900">{cs.title}</div>
                {cs.summary ? <p className="mt-1 text-sm text-slate-600">{cs.summary}</p> : null}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

