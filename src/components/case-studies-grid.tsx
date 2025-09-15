"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import type { CaseStudy } from '@/lib/mdx'
import { Badge } from './ui/badge'
import { motion, useReducedMotion } from 'framer-motion'

export function CaseStudiesGrid({ items }: { items: CaseStudy[] }) {
  const allTags = useMemo(() => {
    const set = new Set<string>()
    items.forEach((i) => i.tags?.forEach((t) => set.add(t)))
    return Array.from(set).sort()
  }, [items])
  const [active, setActive] = useState<string>('')
  const filtered = useMemo(
    () => (active ? items.filter((i) => i.tags?.includes(active)) : items),
    [items, active]
  )

  const r = useReducedMotion()
  return (
    <div className="space-y-6">
      {allTags.length ? (
        <div className="flex flex-wrap items-center gap-2">
          <button
            className={`rounded-full border px-3 py-1 text-sm ${
              active === '' ? 'border-white/40 bg-white/10' : 'border-white/20 hover:bg-white/5'
            }`}
            onClick={() => setActive('')}
          >
            All
          </button>
          {allTags.map((t) => (
            <button
              key={t}
              className={`rounded-full border px-3 py-1 text-sm ${
                active === t ? 'border-white/40 bg-white/10' : 'border-white/20 hover:bg-white/5'
              }`}
              onClick={() => setActive(t)}
            >
              {t}
            </button>
          ))}
        </div>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((i) => (
          <motion.div
            key={i.slug}
            whileHover={r ? undefined : { y: -4 }}
            whileFocusWithin={r ? undefined : { y: -4 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <Link
              href={`/case-studies/${i.slug}`}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.08]"
            >
              {i.cover ? (
                <div className="relative aspect-[16/9] w-full">
                  <Image src={i.cover} alt="" fill className="object-cover transition-transform group-hover:scale-[1.02]" />
                </div>
              ) : null}
              <div className="p-6">
                <h3 className="text-lg font-semibold">{i.title}</h3>
                {i.summary ? <p className="text-slate-400">{i.summary}</p> : null}
                {i.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {i.tags.map((t) => (
                      <Badge key={t} variant="outline">
                        {t}
                      </Badge>
                    ))}
                  </div>
                ) : null}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
