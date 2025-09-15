import Link from 'next/link'

type Service = {
  title: string
  desc: string
  href?: string
}

const SERVICES: Service[] = [
  { title: 'Document digitization', desc: 'OCR, metadata, versioning, and lineage for trust.' },
  { title: 'Pipelines & ELT', desc: 'Batch + CDC with CI/CD and observability.' },
  { title: 'Data modeling', desc: 'Semantic layers, shared KPIs, and definitions.' },
  { title: 'Dashboards that stick', desc: 'Clear, fast, adopted by the people who decide.' },
  { title: 'MLOps + features', desc: 'Feature stores, evaluation, and deployment runbooks.' },
  { title: 'Ops + enablement', desc: 'Playbooks, SLOs, and handover that lasts.' }
]

export function ServicesGallery() {
  return (
    <section className="bg-white py-16">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-2 text-xs font-semibold tracking-[.2em] text-slate-500">SERVICES</div>
          <h2 className="text-3xl font-semibold md:text-4xl">Everything to wrangle data, end‑to‑end</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article key={s.title} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-soft transition-shadow hover:shadow-soft-lg">
              {/* diagonal accent */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 clip-diagonal bg-[linear-gradient(135deg,var(--lion),transparent)] opacity-30 transition-opacity group-hover:opacity-50" />
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              {s.href ? (
                <Link href={s.href} className="mt-4 inline-block text-sm font-medium text-[var(--space-cadet)] underline-offset-4 hover:underline">
                  Learn more
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

