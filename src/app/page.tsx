'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BarChart3, CheckCircle2, ShieldCheck, Sparkles, Workflow } from 'lucide-react'

import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { HoverLift } from '@/components/hover-lift'
import { ServicesGallery } from '@/components/services-gallery'
import { ParticleField } from '@/components/particles'
import { EmailCapture } from '@/components/email-capture'

const stats = [
  { value: '45%', label: 'Faster reporting cycles' },
  { value: '12M+', label: 'Residents served by our clients' },
  { value: '30+', label: 'Jurisdictions modernized' },
]

const heroHighlights = [
  {
    title: 'Connected infrastructure',
    description: 'Consolidate disjointed systems into a governed data mesh with live interoperability.',
  },
  {
    title: 'Decision-ready intelligence',
    description: 'Deliver contextual insights with explainable AI dashboards tailored to each stakeholder.',
  },
  {
    title: 'Operational confidence',
    description: 'Embed audit trails, zero-trust access, and automated alerts to safeguard every action.',
  },
]

const differentiators = [
  {
    title: 'Strategy through activation',
    description: 'We translate policy ambitions into measurable digital roadmaps backed by executive alignment.',
    icon: Workflow,
  },
  {
    title: 'AI you can trust',
    description: 'Human-in-the-loop models, governance frameworks, and explainability built for public accountability.',
    icon: ShieldCheck,
  },
  {
    title: 'Continuous intelligence',
    description: 'Streaming analytics surfaces anomalies and highlights success metrics in real time.',
    icon: BarChart3,
  },
]

const approachSteps = [
  {
    step: '01',
    title: 'Discover & align',
    summary: 'Stakeholder interviews and data quality assessments ensure every objective ladders to resident impact.',
  },
  {
    step: '02',
    title: 'Design the fabric',
    summary: 'We architect a modular data platform with security baselines, automation hooks, and governance rituals.',
  },
  {
    step: '03',
    title: 'Activate & improve',
    summary: 'Hands-on change management, enablement, and iteration cycles keep teams shipping value every quarter.',
  },
]

const partnerLogos = [
  'City of Meridian',
  'Northwind Utilities',
  'Apex Health',
  'State of Cascadia',
  'Horizon Transit',
]

const capabilityCards = [
  {
    id: '01',
    title: 'Insight operating system',
    summary: 'Unified analytics workspace with governed semantic layers, scenario planning, and KPI storytelling.',
    detail: 'Deploy tailored executive scorecards, mission dashboards, and mobile briefings in weeks, not months.',
  },
  {
    id: '02',
    title: 'Modern data platform',
    summary: 'Cloud-native pipelines, streaming ingestion, and automated quality guardrails built for scale.',
    detail: 'Leverage lakehouse architectures, metadata automation, and observability to keep trusted data flowing.',
  },
  {
    id: '03',
    title: 'Experience transformation',
    summary: 'Service design, workflow automation, and AI copilots that elevate frontline and resident experiences.',
    detail: 'Co-create digital services, embed assistive interfaces, and orchestrate adoption for lasting change.',
  },
]

export const dynamic = 'force-static'

export default function HomePage() {
  return (
    <main id="content" className="bg-black">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/brand/georgie-cobbs-muOHbrFGEQY-unsplash.jpg"
            alt="Enterprise analytics dashboard"
            fill
            className="object-cover"
            priority
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <ParticleField />
        </div>

        <Container className="relative z-10 pt-32 pb-24">
          <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.38em] text-white/70 backdrop-blur">
                Data orchestration for civic leaders
              </span>

              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Lead with evidence.
                <span className="block bg-gradient-to-r from-white via-[#ffb347] to-[#ff4d4d] bg-clip-text text-transparent">
                  Deliver confident outcomes.
                </span>
              </h1>

              <p className="mx-auto max-w-3xl text-base text-slate-300 sm:text-lg">
                Arctura modernizes how governments and complex enterprises harness data. We weave disparate systems into a trusted
                fabric, surface the intelligence leaders need, and activate teams with the playbooks to sustain progress.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff6b00] via-[#ff9553] to-[#ff4d4d] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(255,118,72,0.35)] transition-transform hover:-translate-y-0.5"
              >
                Plan a working session
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                Review recent outcomes
              </Link>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-12 grid w-full gap-4 text-left sm:grid-cols-2 lg:grid-cols-3"
            >
              {heroHighlights.map((item) => (
                <li key={item.title} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#ff8c3f]" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-white/80">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-300">{item.description}</p>
                  </div>
                </li>
              ))}
            </motion.ul>

            <motion.dl
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 grid w-full gap-6 sm:grid-cols-3"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur">
                  <dd className="text-4xl font-semibold text-white sm:text-5xl">{stat.value}</dd>
                  <dt className="mt-2 text-sm uppercase tracking-wide text-slate-300">{stat.label}</dt>
                </div>
              ))}
            </motion.dl>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-12 w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.42em] text-white/60">
                  <Sparkles className="h-4 w-4 text-[#ff8c3f]" aria-hidden="true" />
                  Trusted by data leaders at
                </div>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-white/70">
                  {partnerLogos.map((partner) => (
                    <span key={partner} className="whitespace-nowrap">
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Differentiators */}
      <Section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#07080c] to-black" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.3em] text-white/70">
              <Sparkles className="h-4 w-4 text-[#ff8c3f]" aria-hidden="true" />
              Why teams choose Arctura
            </span>
            <h2 className="mb-6 text-3xl font-semibold text-white lg:text-4xl">
              Build momentum with a partner who balances vision and delivery
            </h2>
            <p className="text-lg text-slate-300">
              From executive workshops to rollout playbooks, we co-create the structures that let your organisation ship reliable insights without losing pace.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {differentiators.map(({ icon: Icon, ...item }) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-full"
              >
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <Icon className="h-10 w-10 rounded-full border border-white/20 bg-black/60 p-2 text-[#ff8c3f]" aria-hidden="true" />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services Gallery */}
      <Section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-16 max-w-xl text-center"
          >
            <span className="mb-6 inline-flex rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.3em] text-white/70">
              Solution suites
            </span>
            <h2 className="mb-6 text-3xl font-semibold text-white lg:text-4xl">
              Modern programmes that deliver measurable impact from day one
            </h2>
            <p className="text-lg text-slate-300">
              Pair our analysts, engineers, and designers to launch cross-functional initiatives that reshape operations while building a resilient data foundation.
            </p>
          </motion.div>
          <ServicesGallery />
        </Container>
      </Section>

      {/* Approach Timeline */}
      <Section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05060a] via-black to-[#05060a]" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="mb-6 inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.3em] text-white/70">
              <Workflow className="h-4 w-4 text-[#ff8c3f]" aria-hidden="true" />
              Proven path to value
            </span>
            <h2 className="mb-6 text-3xl font-semibold text-white lg:text-4xl">From discovery to scale in three focused motions</h2>
            <p className="text-lg text-slate-300">
              Every engagement follows a transparent rhythm that keeps executives aligned and delivery teams confident about what comes next.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {approachSteps.map((step) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-full"
              >
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ff6b00] to-[#ff9553] text-base font-semibold text-black">
                    {step.step}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-300">{step.summary}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Capabilities Cards */}
      <Section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[#080808]" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-16 max-w-xl text-center"
          >
            <span className="mb-6 inline-flex rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.3em] text-white/70">
              Capability stacks
            </span>
            <h2 className="mb-6 text-3xl font-semibold text-white lg:text-4xl">
              End-to-end teams that keep progress compounding
            </h2>
            <p className="text-lg text-slate-300">
              Mix and match platform experts, change strategists, and design partners to support every chapter of your analytics programme.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {capabilityCards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <HoverLift>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.04]">
                    <div className="mb-4 text-lg font-medium text-[#ff4d4d]">{card.id}</div>
                    <h3 className="mb-4 text-xl font-semibold text-white">{card.title}</h3>
                    <p className="mb-6 text-slate-300">{card.summary}</p>
                    <p className="text-sm text-slate-400">{card.detail}</p>
                  </div>
                </HoverLift>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="relative py-24">
        <div className="absolute inset-0 bg-[#080808]" />
        <Container className="relative z-10">
          <EmailCapture />
        </Container>
      </Section>
    </main>
  )
}
