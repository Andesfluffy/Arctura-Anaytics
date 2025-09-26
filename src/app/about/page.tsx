'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { Button } from '@/components/ui/button'

const heroMetrics = [
  {
    value: '120M+',
    label: 'Citizen records harmonised',
    copy: 'Registries for residents, businesses, and land brought into a single sovereign fabric.'
  },
  {
    value: '6 weeks',
    label: 'Average mobilisation',
    copy: 'From charter to production pilots with co-created policy, service, and engineering playbooks.'
  },
  {
    value: '24/7',
    label: 'Assurance coverage',
    copy: 'Operations centres spanning Lagos, London, and Toronto for uninterrupted continuity.'
  }
]

const serviceTracks = [
  {
    kicker: 'Registry spine',
    title: 'Sovereign identity and records',
    description:
      'We modernise population, business, and land registries so verification is instant and auditable for ministries and citizens alike.',
    highlights: [
      'National encryption, lineage, and dispute workflows',
      'API gateways for banks, justice, and social services',
      'Offline-first enrolment for rural communities'
    ]
  },
  {
    kicker: 'Digital platform',
    title: 'Civic service fabric',
    description:
      'Human-centred portals, payments, and case management built on composable services that respect local policy and procurement realities.',
    highlights: [
      'Pattern libraries for permits, licenses, and relief',
      'Intake to fulfilment orchestrated across agencies',
      'Performance telemetry that boards and residents trust'
    ]
  },
  {
    kicker: 'Public intelligence',
    title: 'Insights that sustain confidence',
    description:
      'We surface mission metrics, fraud analytics, and adoption dashboards so leaders can prove value and course-correct in days, not quarters.',
    highlights: [
      'Executive command centres with situation rooms',
      'Explainable AI scorecards and policy simulations',
      'Continuous feedback rituals with the public'
    ]
  }
]

const programmeLayers = [
  {
    id: 'registry',
    title: 'Registry backbone',
    copy:
      'A lattice of secure registries that unifies identity, assets, and entitlements. We marry document digitisation with biometric capture, consent logging, and tamper-evident ledgers so every record can be trusted in court or across borders.'
  },
  {
    id: 'service-fabric',
    title: 'Service delivery fabric',
    copy:
      'Composable micro frontends, workflow engines, and communications pipes stitched into one operator console. Residents glide from online to in-person support, while ministries gain real-time visibility into queues, payments, and resolution pacing.'
  },
  {
    id: 'trust-labs',
    title: 'Trust & verification labs',
    copy:
      'Joint lab environments where we run red-team drills, simulate outage scenarios, and audit algorithmic decisions. Every release leaves with compliance artefacts, multilingual playbooks, and continuity rehearsals for frontline teams.'
  }
]

const operatingPrinciples = [
  {
    title: 'Public-first rituals',
    detail:
      'Neighbourhood clinics, youth councils, and commerce forums feed insight into every sprint, ensuring products reflect lived realities and not just policy text.'
  },
  {
    title: 'Policy-aware engineering',
    detail:
      'Architectures are co-signed by legal, procurement, and cyber teams. We document decision logs so oversight bodies can trace every change.'
  },
  {
    title: 'Measured adoption',
    detail:
      'Success is defined by citizens served, hours returned to civil servants, and the integrity of the data flowing through the platform.'
  }
]

const timeline = [
  {
    year: '2017',
    title: 'Arctura founded',
    description:
      'Delivery leads from African, European, and North American governments formed Arctura to industrialise civic digital programmes.'
  },
  {
    year: '2019',
    title: 'Registry accelerators launched',
    description:
      'Introduced ingestion pipelines, deduplication heuristics, and QR verification stacks tailored to ministries of interior and trade.'
  },
  {
    year: '2021',
    title: 'Digital platform studio',
    description:
      'Opened service design labs in Abuja and London to co-create permitting, licensing, and benefits experiences with the public.'
  },
  {
    year: '2023',
    title: 'Trust labs network',
    description:
      'Established joint verification centres with partners in Lagos, Toronto, and Dubai to stress-test AI, biometrics, and continuity drills.'
  }
]

const teamScenes = [
  {
    image: '/brand/christina-wocintechchat-com-UcZcsHSp8o4-unsplash.jpg',
    label: 'Public experience studio',
    caption:
      'Service designers and civic researchers co-creating language, visuals, and accessibility journeys with residents and field officers.'
  },
  {
    image: '/brand/jeffery-ho-oITfawv6t-8-unsplash.jpg',
    label: 'Platform engineering guild',
    caption:
      'Cloud, security, and data engineers choreographing registry pipelines, resilience tests, and rollout dashboards in tandem.'
  },
  {
    image: '/brand/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg',
    label: 'Partner enablement',
    caption:
      'Change coaches and programme directors preparing ministries for launch day with training arcs and executive storytelling.'
  }
]

export default function AboutPage() {
  const reduceMotion = useReducedMotion()

  return (
    <main id="content" className="bg-black text-white">
      <section className="relative isolate overflow-hidden">
        <Image
          src="/brand/georgie-cobbs-muOHbrFGEQY-unsplash.jpg"
          alt="Arctura team collaborating on digital public infrastructure"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-[#080509]" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-[#1f0d0b]/60 to-black/50" aria-hidden />
        <Container className="relative z-[1] space-y-12 py-28 sm:py-32">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 32 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/70">
              About Arctura
            </span>
            <h1 className="text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              We choreograph national registries and digital platforms so the public experiences confident, human government.
            </h1>
            <p className="max-w-2xl text-balance text-base text-white/75 sm:text-lg">
              From the eGovRegistry backbone in Nigeria to modular civic platforms across emerging cities, Arctura blends policy, engineering, and service design into one disciplined squad. We help ministries deliver certainty to citizens, businesses, and partners at scale.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-3">
            {heroMetrics.map((metric, index) => (
              <motion.article
                key={metric.label}
                initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 + 0.2 }}
                className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"
              >
                <div className="text-2xl font-semibold text-white sm:text-3xl">{metric.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60">{metric.label}</div>
                <p className="mt-3 text-sm text-white/70">{metric.copy}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <Section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(75%_120%_at_50%_0%,rgba(255,111,60,0.18),transparent_70%)]" aria-hidden />
        </div>
        <Container className="space-y-12">
          <div className="max-w-3xl space-y-5 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/70">
              What we deliver
            </span>
            <h2 className="text-3xl font-black sm:text-4xl">
              Programmes that connect ministries, markets, and everyday people.
            </h2>
            <p className="text-base text-white/75 sm:text-lg">
              Our cross-functional squads translate policy mandates into real products. Each track merges lessons from the digital platform and registry initiatives into one coherent journey.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {serviceTracks.map((track, index) => (
              <motion.article
                key={track.title}
                initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.08 }}
                className="flex h-full flex-col gap-4 rounded-[28px] border border-white/12 bg-[color:rgba(12,15,23,0.92)] p-8 shadow-[0_32px_120px_rgba(4,6,15,0.55)]"
              >
                <span className="inline-flex w-max items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.32em] text-white/70">
                  {track.kicker}
                </span>
                <h3 className="text-xl font-semibold text-white">{track.title}</h3>
                <p className="text-sm text-white/75">{track.description}</p>
                <ul className="space-y-2 text-sm text-white/70">
                  {track.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent-amber)]" aria-hidden />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light" className="relative overflow-hidden py-24 text-[#1b0b0a]">
        <div className="absolute inset-0 -z-10 bg-[#fdf1e4]" aria-hidden />
        <Container className="space-y-12">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ffb26b]/50 bg-[#ffb26b]/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-[#7a2f16]">
              Programme layers
            </span>
            <h2 className="text-3xl font-black sm:text-4xl text-[#220d0c]">
              One backbone, three pillars of delivery.
            </h2>
            <p className="text-base text-[#4c1f18] sm:text-lg">
              Each layer is anchored in the commitments we made across the eGovRegistry and digital platform programmes. Together they guarantee continuity, accountability, and care for the public.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {programmeLayers.map((layer, index) => (
              <motion.article
                id={layer.id}
                key={layer.id}
                initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.06 }}
                className="flex h-full flex-col gap-4 rounded-[24px] border border-[#ffb26b]/40 bg-white/80 p-6 shadow-[0_24px_80px_rgba(125,63,34,0.18)] backdrop-blur"
              >
                <h3 className="text-lg font-semibold text-[#2b0f0d]">{layer.title}</h3>
                <p className="text-sm text-[#4f1f1a]">{layer.copy}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-20%] top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,110,64,0.18),transparent_70%)] blur-[120px]" aria-hidden />
          <div className="absolute right-[-10%] bottom-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,210,160,0.16),transparent_70%)] blur-[120px]" aria-hidden />
        </div>
        <Container className="space-y-12">
          <div className="max-w-3xl space-y-5 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/70">
              How we operate
            </span>
            <h2 className="text-3xl font-black sm:text-4xl">
              Guardrails that keep programmes human, secure, and measurable.
            </h2>
            <p className="text-base text-white/75 sm:text-lg">
              Beyond software delivery, we nurture the operating culture needed for change to stick. These principles guide every stand-up, every deployment, and every town-hall we facilitate.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {operatingPrinciples.map((principle, index) => (
              <motion.article
                key={principle.title}
                initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.08 }}
                className="flex h-full flex-col gap-4 rounded-[28px] border border-white/12 bg-[color:rgba(12,15,23,0.92)] p-8 shadow-[0_36px_110px_rgba(4,6,15,0.5)]"
              >
                <h3 className="text-xl font-semibold text-white">{principle.title}</h3>
                <p className="text-sm text-white/75">{principle.detail}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light" className="bg-white py-24 text-[#0d1b2a]">
        <Container className="space-y-12">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#cdd7e4] bg-[#e9eef6] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-[#3c526c]">
              Our journey
            </span>
            <h2 className="text-3xl font-black sm:text-4xl text-[#0f1d31]">
              Years of public digital work in one timeline.
            </h2>
            <p className="text-base text-[#445369] sm:text-lg">
              Every milestone is tied to a partnership where citizens felt the difference. We keep those lessons alive across new mandates.
            </p>
          </div>
          <ol className="grid gap-6 md:grid-cols-2">
            {timeline.map((item, index) => (
              <motion.li
                key={item.year}
                initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
                className="flex h-full flex-col gap-3 rounded-[24px] border border-[#d8e2ef] bg-white p-6 shadow-[0_24px_80px_rgba(15,29,49,0.08)]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#60728e]">{item.year}</span>
                <h3 className="text-lg font-semibold text-[#0f1d31]">{item.title}</h3>
                <p className="text-sm text-[#445369]">{item.description}</p>
              </motion.li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-[20%] h-48 bg-[radial-gradient(65%_140%_at_50%_0%,rgba(255,111,60,0.16),transparent_70%)]" aria-hidden />
        </div>
        <Container className="space-y-12 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/70">
              Inside Arctura
            </span>
            <h2 className="mt-6 text-3xl font-black sm:text-4xl">
              Multidisciplinary teams that stay in the arena with you.
            </h2>
            <p className="mt-4 text-base text-white/75 sm:text-lg">
              The same people who design resident journeys also review policy drafts, rehearse continuity drills, and brief cabinet members. We remain embedded until your teams can run independently.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {teamScenes.map((scene, index) => (
              <motion.figure
                key={scene.label}
                initial={reduceMotion ? undefined : { opacity: 0, y: 30 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.08 }}
                className="flex h-full flex-col overflow-hidden rounded-[28px] border border-white/12 bg-white/5"
              >
                <div className="relative h-60">
                  <Image
                    src={scene.image}
                    alt={scene.label}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent" aria-hidden />
                  <figcaption className="absolute bottom-4 left-4 text-sm font-semibold uppercase tracking-[0.32em] text-white/80">
                    {scene.label}
                  </figcaption>
                </div>
                <p className="p-6 text-sm text-white/75">{scene.caption}</p>
              </motion.figure>
            ))}
          </div>
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 36 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mx-auto flex max-w-3xl flex-col items-center rounded-[32px] border border-white/12 bg-[linear-gradient(120deg,rgba(12,15,23,0.95),rgba(255,111,60,0.2))] p-10 text-center shadow-[0_40px_120px_rgba(4,6,15,0.55)]"
          >
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              Ready to design the next chapter of your public digital infrastructure?
            </h3>
            <p className="mt-4 text-sm text-white/75 sm:text-base">
              Share your mission and constraints. We will assemble an Arctura squad that blends registry, platform, and change expertise tailored to your mandate.
            </p>
            <Button
              asChild
              variant="gradient"
              shape="pill"
              className="mt-6 h-12 items-center gap-3 rounded-full px-7 text-sm font-semibold uppercase tracking-[0.3em] text-black"
            >
              <a href="/contact">Start a conversation</a>
            </Button>
          </motion.div>
        </Container>
      </Section>
    </main>
  )
}
