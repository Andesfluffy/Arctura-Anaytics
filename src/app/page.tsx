'use client'

import Link from 'next/link'
import Image from 'next/image'
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
  { value: '4.8 / 5', label: 'Average partner satisfaction score' }
]

const heroPillars = [
  {
    title: 'Clarity from complexity',
    description: 'Unify legacy systems, spreadsheets, and civic data streams into a single source of truth.'
  },
  {
    title: 'Intelligence that resonates',
    description: 'Translate analytics into narratives that boards, directors, and frontline teams can trust.'
  },
  {
    title: 'Momentum that lasts',
    description: 'Pair delivery coaches with technologists so programmes keep compounding value after launch.'
  }
]

const marqueeLogos = ['City of Meridian', 'Northwind Utilities', 'Apex Health', 'State of Cascadia', 'Horizon Transit']

const differentiators = [
  {
    title: 'Policy-aware delivery',
    description:
      'We align data foundations with civic mandates, creating roadmaps that pass procurement, compliance, and budget reviews.',
    icon: Building2
  },
  {
    title: 'Responsible intelligence',
    description:
      'Governance, auditability, and ethical guardrails are built into every dashboard, model, and automated workflow we ship.',
    icon: ShieldCheck
  },
  {
    title: 'Integrated teams',
    description:
      'Strategists, engineers, and change leaders work as one squad — shortening time-to-insight without sacrificing adoption.',
    icon: Layers
  }
]

const approachSteps = [
  {
    step: '01',
    title: 'Frame the mission',
    summary: 'Stakeholder workshops and discovery sprints clarify the civic outcomes, data realities, and policy guardrails.'
  },
  {
    step: '02',
    title: 'Design the fabric',
    summary: 'Architect modular pipelines, AI models, and service blueprints that plug into existing procurement and IT ecosystems.'
  },
  {
    step: '03',
    title: 'Activate & scale',
    summary: 'Coach teams through rollouts, embed new rituals, and monitor performance so the work endures after handoff.'
  }
]

const capabilityCards = [
  {
    id: 'A',
    title: 'Insight operating system',
    summary: 'Curated executive and frontline dashboards, decision briefings, and KPI narratives refreshed in real time.',
    detail: 'Launch data stories in weeks with semantic layers, storytelling frameworks, and embedded generative tooling.'
  },
  {
    id: 'B',
    title: 'Modern data platform',
    summary: 'Cloud-native pipelines, lineage monitoring, and privacy-first governance ready for regulated environments.',
    detail: 'Leverage our accelerators for ingestion, quality, and observability to keep trusted data flowing every hour.'
  },
  {
    id: 'C',
    title: 'Service transformation',
    summary: 'Human-centred service design, automation, and AI copilots that improve resident and employee experiences.',
    detail: 'Prototype with residents, codify playbooks, and orchestrate change plans that lift satisfaction metrics.'
  }
]

export const dynamic = 'force-static'

export default function HomePage() {
  return (
    <main id="content" className="bg-black text-white">
      <section className="relative isolate overflow-hidden">
        <Image
          src="/brand/georgie-cobbs-muOHbrFGEQY-unsplash.jpg"
          alt="Team collaborating around a large data wall"
          fill
          priority
          quality={95}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-[#050508]" aria-hidden />
        <ParticleField className="absolute inset-0 opacity-40" aria-hidden />
        <Container className="relative z-[1] flex min-h-[90vh] flex-col justify-center gap-12 py-24">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/70">
              Arctura Analytics
            </span>
            <h1 className="text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Building trusted data platforms and civic experiences for the organisations that serve all of us.
            </h1>
            <p className="max-w-2xl text-lg text-white/75">
              We partner with governments, infrastructure leaders, and regulated enterprises to stitch together registries, digital services, and intelligence workflows that earn public confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 via-brand-400 to-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-black shadow-[0_18px_48px_rgba(255,110,64,0.35)] transition hover:-translate-y-0.5"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:border-white/40 hover:text-white"
              >
                About Arctura
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/12 bg-white/10 p-5 text-white/75">
                <div className="text-2xl font-semibold text-white">{stat.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.28em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(75%_140%_at_50%_0%,rgba(255,111,60,0.18),transparent_70%)]" aria-hidden />
        </div>
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-black sm:text-4xl">Turning critical infrastructure into human experiences.</h2>
            <p className="text-base text-white/75 sm:text-lg">
              From population registries to rail logistics, we help organisations see, govern, and activate their data. Our teams bring the discipline of public-sector delivery and the pace of high-growth product organisations.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {heroPillars.map((pillar) => (
                <div key={pillar.title} className="rounded-2xl border border-white/12 bg-white/10 p-4">
                  <h3 className="text-sm font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-xs text-white/70">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/12 bg-white/5 p-6">
              <p className="text-sm text-white/70">
                “Arctura are the only partners who understood the policy stakes and the integration sprawl. They stabilised our registry modernisation and gave residents digital access within months.”
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.32em] text-white/50">
                Permanent Secretary, National Planning Commission
              </p>
            </div>
            <div className="rounded-[28px] border border-white/12 bg-white/5 p-6">
              <p className="text-sm text-white/70">
                “Their delivery rhythm kept civil servants, vendors, and the executive team aligned. We now have live dashboards that show adoption, risk, and service-levels for every programme.”
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.32em] text-white/50">
                Director of Digital Services, Global Mobility Network
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-16">
        <Container className="space-y-6 text-center text-white/70">
          <span className="text-xs font-semibold uppercase tracking-[0.34em] text-white/50">Trusted by</span>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm uppercase tracking-[0.32em] text-white/60">
            {marqueeLogos.map((logo) => (
              <span key={logo} className="rounded-full border border-white/12 px-4 py-2 text-white/70">
                {logo}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-12%] top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,110,64,0.16),transparent_70%)] blur-[120px]" aria-hidden />
          <div className="absolute right-[-12%] bottom-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,210,160,0.16),transparent_70%)] blur-[120px]" aria-hidden />
        </div>
        <Container className="space-y-10">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/70">
              Why organisations choose us
            </span>
            <h2 className="text-3xl font-black sm:text-4xl text-white">
              Delivery disciplines shaped by real-world oversight.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {differentiators.map((item) => (
              <HoverLift key={item.title}>
                <div className="h-full rounded-[28px] border border-white/12 bg-[color:rgba(12,15,23,0.92)] p-7 shadow-[0_32px_110px_rgba(4,6,15,0.55)]">
                  <item.icon className="h-8 w-8 text-orange-300" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.description}</p>
                </div>
              </HoverLift>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light" className="bg-white py-24 text-[#0d1b2a]">
        <Container className="space-y-10">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d7e2f0] bg-[#eef3fb] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-[#3b4b65]">
              Delivery method
            </span>
            <h2 className="text-3xl font-black sm:text-4xl text-[#0f1d31]">
              A playbook refined across sectors and continents.
            </h2>
            <p className="text-base text-[#42526b] sm:text-lg">
              We bring the same disciplined cadence whether we are modernising a national registry, revamping a port authority’s data platform, or launching analytics inside a regulated enterprise.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {approachSteps.map((step) => (
              <div key={step.step} className="rounded-[24px] border border-[#d7e2f0] bg-white p-6 shadow-[0_24px_80px_rgba(15,29,49,0.08)]">
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#647491]">{step.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-[#0f1d31]">{step.title}</h3>
                <p className="mt-3 text-sm text-[#42526b]">{step.summary}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden py-24">
        <Container className="space-y-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/70">
                Capability catalogue
            </span>
              <h2 className="text-3xl font-black sm:text-4xl text-white">Accelerators that move ideas into reality.</h2>
              <p className="text-base text-white/75 sm:text-lg">
                Each capability stack is supported by reusable assets, automation, and training modules so your teams inherit more than code.
              </p>
            </div>
            <Link
              href="/about#service-fabric"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:border-white/40 hover:text-white"
            >
              Explore our approach
              <Sparkles className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {capabilityCards.map((capability) => (
              <div key={capability.id} className="rounded-[28px] border border-white/12 bg-[color:rgba(12,15,23,0.92)] p-8 shadow-[0_30px_90px_rgba(4,6,15,0.5)]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/10 text-sm font-semibold uppercase tracking-[0.32em] text-white/70">
                  {capability.id}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{capability.title}</h3>
                <p className="mt-3 text-sm text-white/75">{capability.summary}</p>
                <p className="mt-4 text-xs text-white/60">{capability.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light" className="bg-white py-24 text-[#0d1b2a]">
        <Container className="space-y-10">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d7e2f0] bg-[#eef3fb] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-[#3b4b65]">
              Programmes in market
            </span>
            <h2 className="text-3xl font-black sm:text-4xl text-[#0f1d31]">
              From national registries to enterprise analytics.
            </h2>
            <p className="text-base text-[#42526b] sm:text-lg">
              Browse our current focus areas and discover how each combines technology, governance, and service design.
            </p>
          </div>
          <ServicesGallery />
        </Container>
      </Section>

      <Section className="relative overflow-hidden py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/70">
              Partner rituals
            </span>
            <h2 className="text-3xl font-black sm:text-4xl text-white">
              Transparent rhythms that keep everyone aligned.
            </h2>
            <p className="text-base text-white/75 sm:text-lg">
              Weekly steering, risk registers, and open comms channels ensure executives and delivery teams work from the same playbook.
            </p>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Workflow className="mt-1 h-4 w-4 text-orange-300" aria-hidden />
                Delivery scorecards and dependency mapping shared every Friday.
              </li>
              <li className="flex items-start gap-2">
                <Layers className="mt-1 h-4 w-4 text-orange-300" aria-hidden />
                Integrated squads spanning architecture, analytics, change, and communications.
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 text-orange-300" aria-hidden />
                Executive briefings with narrative dashboards and adoption analytics.
              </li>
            </ul>
          </div>
          <div className="rounded-[32px] border border-white/12 bg-[linear-gradient(120deg,rgba(12,15,23,0.95),rgba(255,111,60,0.18))] p-10 shadow-[0_40px_120px_rgba(4,6,15,0.55)]">
            <h3 className="text-2xl font-semibold text-white">
              Bring your next initiative into the Arctura network.
            </h3>
            <p className="mt-4 text-sm text-white/75 sm:text-base">
              Tell us about your mandate. We will respond with the engagement options, success measures, and specialists ready to get started.
            </p>
            <EmailCapture className="mt-6" submitLabel="Plan a consultation" />
          </div>
        </Container>
      </Section>
    </main>
  )
}
