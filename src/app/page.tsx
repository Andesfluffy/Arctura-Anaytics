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
import { TrustedBy } from '@/components/trusted-by'

const stats = [
  {
    value: '6 weeks',
    label: 'Average time to first release',
    description:
      'Production-ready pipelines, models, and adoption assets shipping in the first program increment.'
  },
  {
    value: '120+',
    label: 'Analytics platforms launched',
    description:
      'Regulated enterprises and growth-stage innovators trusting Arctura to modernize their data estate.'
  },
  {
    value: '4.8 / 5',
    label: 'Sponsor satisfaction score',
    description:
      'Executives cite accountable delivery, transparent communication, and measurable ROI reporting.'
  },
  {
    value: '40%',
    label: 'Reduction in delivery risk',
    description:
      'Reusable accelerators, QA, and controls that keep complex programs on schedule and audit-ready.'
  }
]

const focusAreas = [
  {
    title: 'Vision to value',
    description:
      'Translate transformation mandates into funded roadmaps with measurable KPIs and accountable workstreams.',
    bullets: [
      'North-star metrics and investment modeling',
      'Stakeholder alignment workshops and design sprints',
      'Portfolio governance and executive-ready reporting'
    ]
  },
  {
    title: 'Modern engineered foundations',
    description:
      'Architect modular, cloud-native data estates designed for resilience, regulation, and scale.',
    bullets: [
      'Composable ingestion, quality, and master data patterns',
      'Secure-by-design governance and access controls',
      'End-to-end observability, lineage, and reliability instrumentation'
    ]
  },
  {
    title: 'Adoption that endures',
    description:
      'Pair storytelling and enablement with automation so teams embrace new ways of working.',
    bullets: [
      'Experience design for analytics products and AI assistants',
      'Embedded change leadership with role-based playbooks',
      'Post go-live coaching with success metrics and feedback loops'
    ]
  }
]

const capabilities = [
  {
    title: 'Strategic Data & AI Advisory',
    summary: 'C-suite partnership to chart the course and prove value.',
    points: [
      'Enterprise data and AI vision linked to financial and mission outcomes',
      'Operating model, funding strategy, and roadmap governance',
      'Risk, trust, and regulatory frameworks for responsible innovation'
    ]
  },
  {
    title: 'Composable Data Platforms',
    summary: 'Architectures that connect every source and scale with confidence.',
    points: [
      'Cloud modernization, ingestion, and automation accelerators',
      'Metadata-rich modeling with lineage, quality, and policy enforcement',
      'Integrated DevOps, FinOps, and reliability engineering practices'
    ]
  },
  {
    title: 'Decision Intelligence Products',
    summary: 'Analytics experiences executives and operators rely on daily.',
    points: [
      'Semantic layers, KPI frameworks, and guided dashboards',
      'Applied AI and ML solutions with continuous evaluation',
      'Narrative insights, alerts, and collaboration workflows'
    ]
  },
  {
    title: 'Operations & Enablement',
    summary: 'Ensure adoption lasts long after the launch celebration.',
    points: [
      'Training academies, communities of practice, and change programs',
      'Runbooks, SLOs, and controls for ongoing governance',
      'Embedded experts and managed services for steady-state excellence'
    ]
  }
]

const engagements = [
  {
    phase: '01',
    title: 'Frame & align the mandate',
    subtitle: 'Set the ambition, guardrails, and measures of success.',
    description:
      'Executive interviews, value modeling, and readiness assessments ensure every leader is rowing in the same direction.'
  },
  {
    phase: '02',
    title: 'Design the operating system',
    subtitle: 'Blueprint how data, technology, and teams work together.',
    description:
      'Joint architecture, backlog definition, and experience design sessions create a plan that is both visionary and executable.'
  },
  {
    phase: '03',
    title: 'Build, iterate, and prove',
    subtitle: 'Deliver production value in confident, observable increments.',
    description:
      'Cross-functional pods ship working software weekly with transparency, quality gates, and adoption playbooks baked in.'
  },
  {
    phase: '04',
    title: 'Scale and sustain',
    subtitle: 'Institutionalize new capabilities and accelerate momentum.',
    description:
      'Enablement, change leadership, and operating rhythms transition ownership while keeping experts close for continuous gains.'
  }
]

const assurances = [
  'Dedicated engagement lead coordinating strategy, delivery, and change.',
  'Security, compliance, and risk specialists embedded from day one.',
  'Executive-ready reporting, value tracking, and communication cadences.'
]

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <main id="content">
      <PhotoHero />

      <TrustedBy />

      <Section className="relative overflow-hidden bg-[var(--space-cadet)] text-white">
        <div className="absolute -top-24 left-16 h-64 w-64 rounded-full bg-[var(--lion)]/25 blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-[var(--bistre)]/30 blur-3xl" aria-hidden />
        <Container className="relative">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">Proven outcomes</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Elite data programs delivered with accountability and craft.
            </h2>
            <p className="mt-6 text-white/85">
              Arctura Analytics is the partner executives call when the stakes are high. Our specialists blend strategic clarity
              with world-class engineering so every investment produces tangible impact.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur"
              >
                <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="mt-2 text-lg font-semibold text-white/90">{stat.label}</div>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#f5f4f2]" aria-hidden />
        <Container className="relative">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-3xl text-[var(--space-cadet)]"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--space-cadet)]/70">Why Arctura</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              We architect the operating system for data-driven organizations.
            </h2>
            <p className="mt-6 text-lg text-[var(--bistre)]/90">
              From first conversation to scaled adoption, we pair seasoned strategists, architects, and change leaders with your
              teams. The result is transformation that feels orchestrated, transparent, and built to last.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-[var(--space-cadet)]/10 bg-white/90 p-8 shadow-xl"
              >
                <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-to-br from-[var(--lion)]/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
                <h3 className="text-xl font-semibold text-[var(--space-cadet)]">{area.title}</h3>
                <p className="mt-3 text-sm text-[var(--bistre)]/85 md:text-base">{area.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--bistre)]/80">
                  {area.bullets.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-[var(--space-cadet)]/70" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden bg-gradient-to-br from-[#0a1124] via-[#111a36] to-[#080b16] text-white">
        <div className="absolute inset-0 opacity-10" aria-hidden>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'160\' height=\'160\' viewBox=\'0 0 160 160\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 160L160 0M-40 120L120 -40M40 200L200 40\' stroke=\'%23ffffff26\' stroke-width=\'1.2\'/%3E%3C/svg%3E')] bg-repeat" />
        </div>
        <Container className="relative">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">Signature capabilities</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Full-spectrum expertise for every stage of your data and AI journey.
            </h2>
            <p className="mt-6 text-white/85">
              Our integrated teams combine strategy, engineering, analytics, and enablement so you can move with the confidence of
              a modern data leader.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <HoverLift>
                  <Card tone="glass" className="h-full overflow-hidden border-white/15 bg-white/10 p-8 text-left shadow-2xl">
                    <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-[var(--lion)]/20 blur-3xl" aria-hidden />
                    <div className="relative">
                      <h3 className="text-2xl font-semibold text-white">{capability.title}</h3>
                      <p className="mt-3 text-sm text-white/80 md:text-base">{capability.summary}</p>
                      <ul className="mt-5 space-y-2 text-sm text-white/75">
                        {capability.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-[var(--lion)]" aria-hidden />
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
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f7f7f9] to-white" aria-hidden />
        <Container className="relative">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-3xl text-[var(--space-cadet)]"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--space-cadet)]/70">How we partner</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              An engagement rhythm designed for trust, speed, and enduring adoption.
            </h2>
            <p className="mt-6 text-lg text-[var(--bistre)]/90">
              You gain a dedicated squad that embeds with your teams, reports transparently, and keeps business value at the center
              of every decision.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.7fr,1fr] lg:items-start">
            <div className="relative pl-10">
              <span className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--space-cadet)] to-[var(--lion)]" aria-hidden />
              <div className="space-y-10">
                {engagements.map((engagement, index) => (
                  <motion.div
                    key={engagement.phase}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl bg-white/90 p-6 shadow-lg ring-1 ring-black/5"
                  >
                    <span className="absolute -left-[34px] top-6 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[var(--space-cadet)] text-sm font-semibold text-white" aria-hidden>
                      {engagement.phase}
                    </span>
                    <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--space-cadet)]/70">
                      {engagement.subtitle}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-[var(--space-cadet)]">{engagement.title}</h3>
                    <p className="mt-3 text-sm text-[var(--bistre)]/85 md:text-base">{engagement.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[var(--space-cadet)]/10 bg-gradient-to-br from-[var(--space-cadet)] via-[var(--bistre)] to-[var(--lion)] p-[1px] shadow-2xl"
            >
              <div className="h-full w-full rounded-[calc(theme(borderRadius.3xl)-4px)] bg-white/90 p-8 text-[var(--space-cadet)]">
                <h3 className="text-2xl font-semibold text-[var(--space-cadet)]">Leadership you can count on</h3>
                <p className="mt-3 text-sm text-[var(--bistre)]/85 md:text-base">
                  Every Arctura engagement is led by senior practitioners who have shipped large-scale analytics programs in the
                  industries we serve.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--bistre)]/80">
                  {assurances.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-[var(--space-cadet)]/80" aria-hidden />
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
                Ready to architect your next data advantage?
              </motion.h3>
              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true }}
                className="mt-4 text-base text-white/85 md:text-lg"
              >
                Let’s design the roadmap, stand up the platform, and empower your teams together. Reach out—our leaders would love
                to co-create what’s next.
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
