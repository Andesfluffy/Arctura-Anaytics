"use client"

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { PhotoHero } from '@/components/photo-hero'
import { Section } from '@/components/section'
import { Container } from '@/components/container'
import { Card } from '@/components/ui/card'
import { HoverLift } from '@/components/hover-lift'
import { Glow } from '@/components/glow'
import { Button } from '@/components/ui/button'

const stats = [
  {
    value: '6 weeks',
    label: 'First release delivered',
    description: 'Operational pipelines, models, and adoption assets live within the first program increment.'
  },
  {
    value: '120+',
    label: 'Data platforms launched',
    description: 'Modern estates accelerated for regulated enterprises and high-growth innovators alike.'
  },
  {
    value: '4.8 / 5',
    label: 'Sponsor satisfaction',
    description: 'Leaders cite clarity, craftsmanship, and measurable outcomes at every checkpoint.'
  }
]

const focusAreas = [
  {
    title: 'Clarity before code',
    description:
      'We align sponsorship, KPIs, and operating guardrails so every sprint is purposeful and funded.',
    bullets: ['Executive co-planning sessions', 'Investment cases anchored in measurable value']
  },
  {
    title: 'Composed for resilience',
    description:
      'Modern data foundations pair modular patterns with thoughtful governance for scale and trust.',
    bullets: ['Cloud-native architecture frameworks', 'Quality, lineage, and access designed-in']
  },
  {
    title: 'Adoption that lasts',
    description:
      'Human-centered experiences and enablement make new capabilities effortless to embrace.',
    bullets: ['Story-led analytics experiences', 'Role-based coaching and playbooks']
  }
]

const capabilities = [
  {
    title: 'Advisory & Leadership',
    summary: 'Fractional CDO partnership to translate ambition into accountable momentum.',
    points: ['Transformation mandate definition', 'Value tracking and governance cadence']
  },
  {
    title: 'Platform Delivery',
    summary: 'Cloud-native pipelines, semantics, and controls delivered with elegant precision.',
    points: ['Modern ingestion and modeling accelerators', 'Privacy-first data governance patterns']
  },
  {
    title: 'AI & Analytics Products',
    summary: 'Decision intelligence experiences designed for confident daily use.',
    points: ['KPI frameworks and storytelling dashboards', 'Responsible AI assistants and automation']
  }
]

const engagements = [
  {
    phase: '01',
    title: 'Frame the mission',
    subtitle: 'Set intent and measures of success.',
    description: 'Immersive working sessions turn strategy into a sequenced, investable roadmap.'
  },
  {
    phase: '02',
    title: 'Shape & ship',
    subtitle: 'Build with pace and polish.',
    description: 'Cross-functional squads deliver production increments with weekly showcases and rigor.'
  },
  {
    phase: '03',
    title: 'Embed & elevate',
    subtitle: 'Enable lasting adoption.',
    description: 'Coaching, playbooks, and operating rhythms transfer capability with confidence.'
  }
]

const assurances = [
  'A single engagement lead orchestrating strategy, delivery, and change.',
  'Security, governance, and measurement specialists embedded from day one.'
]

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <main id="content">
      <PhotoHero />

      <Section className="relative overflow-hidden bg-[#0b1220] text-white">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_65%)]"
          aria-hidden
        />
        <div
          className="absolute -bottom-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--lion)]/20 blur-3xl"
          aria-hidden
        />
        <Container className="relative">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Proven outcomes</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold md:text-4xl">
              Precision programs that deliver executive confidence.
            </h2>
            <p className="mt-5 text-base text-white/75 md:text-lg">
              The teams who call Arctura expect calm stewardship, transparent reporting, and releases that feel refined from day
              one.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/15 bg-white/10 p-6 text-left shadow-lg backdrop-blur"
              >
                <div className="text-3xl font-semibold text-gradient">{stat.value}</div>
                <div className="mt-2 text-base font-medium text-white/90">{stat.label}</div>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8f8fb] to-white" aria-hidden />
        <Container className="relative">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center text-[var(--space-cadet)]"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--space-cadet)]/60">Why Arctura</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold md:text-4xl">
              Disciplined partnership with boutique polish.
            </h2>
            <p className="mt-5 text-base text-[var(--bistre)]/80 md:text-lg">
              We keep the storyline crisp, the delivery accountable, and every touchpoint curated for the leaders we serve.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative rounded-3xl border border-[var(--space-cadet)]/10 bg-white/80 p-7 text-left shadow-lg backdrop-blur"
              >
                <span className="mb-4 block h-0.5 w-12 bg-[var(--lion)]" aria-hidden />
                <h3 className="text-lg font-semibold text-[var(--space-cadet)]">{area.title}</h3>
                <p className="mt-3 text-sm text-[var(--bistre)]/80 md:text-base">{area.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--bistre)]/70">
                  {area.bullets.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-[6px] h-2 w-2 rounded-full bg-[var(--space-cadet)]/60" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden bg-[#090f1d] text-white">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.07),_transparent_70%)]"
          aria-hidden
        />
        <Container className="relative">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Signature capabilities</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold md:text-4xl">
              End-to-end expertise, delivered with restraint.
            </h2>
            <p className="mt-5 text-base text-white/75 md:text-lg">
              Strategy, engineering, and enablement move in concert so your program feels composed and unmistakably premium.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <HoverLift>
                  <Card
                    tone="glass"
                    className="relative h-full overflow-hidden border-white/15 bg-white/10 p-7 text-left shadow-xl backdrop-blur"
                  >
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--lion)]/18 blur-3xl" aria-hidden />
                    <div className="relative space-y-4">
                      <h3 className="text-lg font-semibold text-white">{capability.title}</h3>
                      <p className="text-sm text-white/80 md:text-base">{capability.summary}</p>
                      <ul className="space-y-2 text-sm text-white/75">
                        {capability.points.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <span className="mt-[6px] h-2 w-2 rounded-full bg-[var(--lion)]" aria-hidden />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </HoverLift>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f5f6f9] to-white" aria-hidden />
        <Container className="relative">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center text-[var(--space-cadet)]"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--space-cadet)]/60">How we partner</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold md:text-4xl">
              A composed rhythm from first framing to lasting adoption.
            </h2>
            <p className="mt-5 text-base text-[var(--bistre)]/80 md:text-lg">
              You gain a senior-led squad that embeds with your teams, keeps communication effortless, and leaves a program ready to scale.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.6fr,1fr] lg:items-start">
            <div className="relative pl-10">
              <span
                className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--space-cadet)]/80 via-[var(--space-cadet)]/40 to-[var(--lion)]/40"
                aria-hidden
              />
              <div className="space-y-10">
                {engagements.map((engagement, index) => (
                  <motion.div
                    key={engagement.phase}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl bg-white/90 p-6 shadow-lg ring-1 ring-black/5"
                  >
                    <span
                      className="absolute -left-[34px] top-6 flex h-8 w-8 items-center justify-center rounded-full border border-white bg-[var(--space-cadet)] text-sm font-semibold text-white"
                      aria-hidden
                    >
                      {engagement.phase}
                    </span>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--space-cadet)]/60">
                      {engagement.subtitle}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-[var(--space-cadet)]">{engagement.title}</h3>
                    <p className="mt-3 text-sm text-[var(--bistre)]/80 md:text-base">{engagement.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[var(--space-cadet)]/10 bg-gradient-to-br from-[var(--space-cadet)] via-[var(--bistre)] to-[var(--lion)] p-[1px] shadow-xl"
            >
              <div className="h-full w-full rounded-[calc(theme(borderRadius.3xl)-4px)] bg-white/95 p-8 text-[var(--space-cadet)]">
                <h3 className="text-xl font-semibold text-[var(--space-cadet)]">Leadership you can count on</h3>
                <p className="mt-3 text-sm text-[var(--bistre)]/80 md:text-base">
                  Seasoned practitioners coordinate strategy, delivery, and change so executive sponsors have a single calm point of contact.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--bistre)]/75">
                  {assurances.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[6px] h-2 w-2 rounded-full bg-[var(--space-cadet)]/70" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden bg-[#080d1b] text-white">
        <div className="absolute inset-0" aria-hidden>
          <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--lion)]/20 blur-[120px]" />
          <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-[var(--space-cadet)]/30 blur-3xl" />
        </div>
        <Container className="relative">
          <Glow className="mx-auto max-w-4xl">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-10 text-center backdrop-blur-lg shadow-2xl">
              <motion.h3
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="text-3xl font-semibold md:text-4xl"
              >
                Let’s craft your next data advantage together.
              </motion.h3>
              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true }}
                className="mt-4 text-base text-white/85 md:text-lg"
              >
                We’ll co-design the roadmap, stand up the platform, and guide adoption with composure. Reach out and our leaders
                will personally map the next step.
              </motion.p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Glow className="w-full sm:w-auto">
                  <Button asChild variant="gradient" shape="pill" className="w-full sm:w-auto px-8 py-3 text-lg">
                    <Link href="/contact">Start the Conversation</Link>
                  </Button>
                </Glow>
                <Button
                  asChild
                  variant="outline"
                  shape="pill"
                  className="w-full sm:w-auto border-white/70 px-8 py-3 text-lg text-white hover:bg-white/10"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
              <div className="mt-6 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-2 text-xs uppercase tracking-[0.4em] text-white/70">
                connect@arcturaanalytics.com
              </div>
            </div>
          </Glow>
        </Container>
      </Section>
    </main>
  )
}
