import Link from 'next/link'
import Image from 'next/image'
import { getCaseStudies } from '@/lib/mdx'

export default async function CaseStudyHighlights() {
  const items = (await getCaseStudies()).slice(0, 2)
  if (!items.length) return null
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((i) => (
        <Link
          key={i.slug}
          href={`/case-studies/${i.slug}`}
          className="group overflow-hidden rounded-xl border border-white/10 bg-white/5"
        >
          {i.cover ? (
            <div className="relative aspect-[16/9] w-full">
              <Image src={i.cover} alt="" fill className="object-cover transition-transform group-hover:scale-[1.02]" />
            </div>
          ) : null}
          <div className="p-6">
            <h3 className="text-lg font-semibold">{i.title}</h3>
            {i.summary ? <p className="text-slate-300">{i.summary}</p> : null}
          </div>
        </Link>
      ))}
    </div>
  )
}

