import Link from 'next/link'

type Service = {
  title: string
  desc: string
  href?: string
}

const SERVICES: Service[] = [
  { title: 'Data operating models', desc: 'Assessment, strategy, and governance frameworks that align boards, business units, and technology.' },
  { title: 'Cloud platform engineering', desc: 'Landing zones, ingestion, transformation, and quality pipelines delivered with automation and resilience.' },
  { title: 'Analytics product delivery', desc: 'Design, build, and adoption of dashboards, applications, and decision workflows.' },
  { title: 'Data governance & risk', desc: 'Policy, lineage, access management, and controls across regulated and high-growth environments.' },
  { title: 'AI and automation', desc: 'Responsible AI use cases, evaluation harnesses, and operational runbooks for production scale.' },
  { title: 'Managed services', desc: '24/7 support, platform optimisation, and enablement to keep teams confident and outcomes reliable.' }
]

export function ServicesGallery() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 opacity-80">
        <div className="absolute -top-24 left-1/2 h-72 w-[70%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(215,38,56,0.28),transparent_70%)] blur-[180px]" aria-hidden />
      </div>
      <div className="container relative">
        <div className="mx-auto mb-14 max-w-3xl text-center text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/70">
            Service catalogue
          </span>
          <h2 className="mt-5 text-3xl font-black sm:text-4xl">
            End-to-end coverage for data platform, analytics, and AI programmes
          </h2>
          <p className="mt-4 text-base text-white/75 sm:text-lg">
            Blend only the services you need. Our teams plug into your delivery model and bring accelerators, playbooks, and specialists ready to execute.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <article
              key={service.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/12 bg-[color:rgba(14,17,26,0.92)] p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/10 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm text-white/75">{service.desc}</p>
              {service.href ? (
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/65 transition group-hover:text-white"
                >
                  Learn more
                  <span className="block h-px w-8 bg-white/40 transition-all group-hover:w-10 group-hover:bg-white" />
                </Link>
              ) : null}
              <span
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-[var(--accent-amber)] via-white/40 to-[var(--accent-ember)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
