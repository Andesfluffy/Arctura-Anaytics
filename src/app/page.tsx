'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Building2, Layers, ShieldCheck, Sparkles, Workflow } from 'lucide-react'

import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { HoverLift } from '@/components/hover-lift'
import { ServicesGallery } from '@/components/services-gallery'
import { ParticleField } from '@/components/particles'
import { EmailCapture } from '@/components/email-capture'

const heroStats = [
  { value: '30+', label: 'Modern data programmes launched' },
  { value: '12M+', label: 'Residents represented in partner networks' },
  { value: '4.8 / 5', label: 'Average partner satisfaction score' },
]

const heroPillars = [
  {
    title: 'Clarity from complexity',
    description: 'Unify legacy systems, spreadsheets, and civic data streams into a single source of truth.',
  },
  {
    title: 'Intelligence that resonates',
    description: 'Translate analytics into narratives that boards, directors, and frontline teams can trust.',
  },
  {
    title: 'Momentum that lasts',
    description: 'Pair delivery coaches with technologists so programmes keep compounding value after launch.',
  },
]

const marqueeLogos = ['City of Meridian', 'Northwind Utilities', 'Apex Health', 'State of Cascadia', 'Horizon Transit']

const differentiators = [
  {
    title: 'Policy-aware delivery',
    description:
      'We align data foundations with civic mandates, creating roadmaps that pass procurement, compliance, and budget reviews.',
    icon: Building2,
  },
  {
    title: 'Responsible intelligence',
    description:
      'Governance, auditability, and ethical guardrails are built into every dashboard, model, and automated workflow we ship.',
    icon: ShieldCheck,
  },
  {
    title: 'Integrated teams',
    description:
      'Strategists, engineers, and change leaders work as one squad — shortening time-to-insight without sacrificing adoption.',
    icon: Layers,
  },
]

const approachSteps = [
  {
    step: '01',
    title: 'Frame the mission',
    summary: 'Stakeholder workshops and discovery sprints clarify the civic outcomes, data realities, and policy guardrails.',
  },
  {
    step: '02',
    title: 'Design the fabric',
    summary: 'Architect modular pipelines, AI models, and service blueprints that plug into existing procurement and IT ecosystems.',
  },
  {
    step: '03',
    title: 'Activate & scale',
    summary: 'Coach teams through rollouts, embed new rituals, and monitor performance so the work endures after handoff.',
  },
]

const capabilityCards = [
  {
    id: 'A',
    title: 'Insight operating system',
    summary: 'Curated executive and frontline dashboards, decision briefings, and KPI narratives refreshed in real time.',
    detail: 'Launch data stories in weeks with semantic layers, storytelling frameworks, and embedded generative tooling.',
  },
  {
    id: 'B',
    title: 'Modern data platform',
    summary: 'Cloud-native pipelines, lineage monitoring, and privacy-first governance ready for regulated environments.',
    detail: 'Leverage our accelerators for ingestion, quality, and observability to keep trusted data flowing every hour.',
  },
  {
    id: 'C',
    title: 'Service transformation',
    summary: 'Human-centred service design, automation, and AI copilots that improve resident and employee experiences.',
    detail: 'Prototype with residents, codify playbooks, and orchestrate change plans that lift satisfaction metrics.',
  },
]

export const dynamic = 'force-static'

export default function HomePage() {
  return (
    <main id="content" className="bg-black">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/brand/georgie-cobbs-muOHbrFGEQY-unsplash.jpg"
            alt="Team collaborating around a large data wall"
            fill
            priority
            quality={95}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-[#050508]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <ParticleField />
        </div>

        <Container className="relative z-10 py-28 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(320px,380px)]">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                <Sparkles className="h-4 w-4 text-orange-300" aria-hidden="true" />
                Civic data programme partner
              </span>
              <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Confident decisions for complex communities.
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                Arctura Analytics helps governments and mission-driven enterprises modernise how they capture, understand, and
                act on critical information. We close the gap between policy ambition and operational reality with responsible
                data practices and teams built to deliver.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-400 via-brand-400 to-orange-500 px-7 py-3 text-sm font-semibold text-[#050508] shadow-[0_18px_40px_rgba(255,120,70,0.35)] transition-transform hover:-translate-y-0.5"
                >
                  Plan a strategy session
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
                >
                  Explore recent outcomes
                </Link>
              </div>

              <dl className="mt-12 grid gap-6 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <dd className="text-3xl font-semibold text-white sm:text-4xl">{stat.value}</dd>
                    <dt className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">{stat.label}</dt>
                  </div>
                ))}
              </dl>

              <ul className="mt-12 grid gap-5 sm:grid-cols-3">
                {heroPillars.map((item) => (
                  <li key={item.title} className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">{item.title}</p>
                    <p className="text-sm text-slate-300">{item.description}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="self-end"
            >
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="relative h-52 overflow-hidden rounded-2xl">
                  <Image
                    src="/brand/christina-wocintechchat-com-UcZcsHSp8o4-unsplash.jpg"
                    alt="Digital services workshop"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 380px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
                    Public sector delivery
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">Featured case</p>
                  <h2 className="text-xl font-semibold text-white">Statewide insights hub in 16 weeks</h2>
                  <p className="text-sm text-slate-300">
                    Partnered with a multi-agency task force to consolidate 42 data sources, deploy explainable AI briefings, and
                    equip leadership with real-time progress scorecards.
                  </p>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-orange-200"
                  >
                    Read the transformation story
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.aside>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                <Sparkles className="h-4 w-4 text-orange-300" aria-hidden="true" />
                Trusted by transformation leaders at
              </div>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-white/70">
                {marqueeLogos.map((logo) => (
                  <span key={logo} className="whitespace-nowrap">
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <Section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-black to-[#050508]" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
              <Sparkles className="h-4 w-4 text-orange-300" aria-hidden="true" />
              Why partners stay with us
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-white lg:text-4xl">Modern delivery without the chaos</h2>
            <p className="mt-4 text-lg text-slate-300">
              We join forces with internal teams to untangle technical debt, steward responsible AI, and ship visible progress
              every quarter.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {differentiators.map(({ icon: Icon, ...item }) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <Icon className="h-10 w-10 rounded-full border border-white/15 bg-black/60 p-2 text-orange-300" aria-hidden="true" />
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#06060c] to-black" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-xl text-center"
          >
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
              Solution suites
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-white lg:text-4xl">From foundational data to intelligent services</h2>
            <p className="mt-4 text-lg text-slate-300">
              Curate a programme that meets your organisation where it is today and scales with tomorrow’s ambitions.
            </p>
          </motion.div>

          <div className="mt-16">
            <ServicesGallery />
          </div>
        </Container>
      </Section>

      <Section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-black to-[#050508]" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
              <Workflow className="h-4 w-4 text-orange-300" aria-hidden="true" />
              Proven journey
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-white lg:text-4xl">A transparent rhythm your teams can trust</h2>
            <p className="mt-4 text-lg text-slate-300">
              Every engagement blends strategic facilitation with technical execution, giving stakeholders clarity on what’s next.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {approachSteps.map((step) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-brand-400 text-sm font-semibold text-[#050508]">
                    {step.step}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-300">{step.summary}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#06060c] to-black" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-xl text-center"
          >
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
              Capability stacks
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-white lg:text-4xl">Assemble the right blend of experts</h2>
            <p className="mt-4 text-lg text-slate-300">
              Whether you need a quick strike team or a multi-year partner, our cross-functional pods stay embedded until the job
              is done.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {capabilityCards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <HoverLift>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.06]">
                    <div className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-orange-300">{card.id}</div>
                    <h3 className="mb-4 text-xl font-semibold text-white">{card.title}</h3>
                    <p className="mb-6 text-sm text-slate-300">{card.summary}</p>
                    <p className="text-sm text-slate-400">{card.detail}</p>
                  </div>
                </HoverLift>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative py-24">
        <div className="absolute inset-0 bg-[#050508]" />
        <Container className="relative z-10">
          <EmailCapture />
        </Container>
      </Section>
    </main>
  )
}
