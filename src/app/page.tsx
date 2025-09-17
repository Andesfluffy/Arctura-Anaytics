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
    label: 'First release in market',
    description: 'Operational pipelines, dashboards, and enablement live within the first program increment.'
  },
  {
    value: '120+',
    label: 'Platforms modernised',
    description: 'Regulated enterprises and high-growth innovators entrust us with mission-critical estates.'
  },
  {
    value: '4.8 / 5',
    label: 'Sponsor confidence rating',
    description: 'Executives cite our composure, craftsmanship, and provable value at every checkpoint.'
  }
]

const focusAreas = [
  {
    title: 'Programme clarity',
    description:
      'Executive vision, financial guardrails, and a single roadmap so stakeholders stay perfectly aligned.',
    bullets: ['Joint planning intensives', 'Board-ready value cases']
  },
  {
    title: 'Architected resilience',
    description:
      'Composable data estates with governance designed-in, ready for scale, regulation, and global demand.',
    bullets: ['Cloud-native reference patterns', 'Lineage, privacy, and access by default']
  },
  {
    title: 'Adoption that endures',
    description:
      'Design systems, coaching, and change orchestration to make advanced analytics effortless to embrace.',
    bullets: ['Story-led product delivery', 'Role-based enablement programmes']
  }
]

const capabilities = [
  {
    title: 'Executive Advisory',
    summary: 'Fractional CDO leadership translating ambition into accountable momentum.',
    points: ['Strategy & mandate definition', 'Investment pacing and governance cadence']
  },
  {
    title: 'Platform Delivery',
    summary: 'Cloud, data, and AI estates crafted with precision and measurable reliability.',
    points: ['Ingestion, modelling & activation accelerators', 'Privacy-first control and assurance patterns']
  },
  {
    title: 'Analytics Experiences',
    summary: 'Decision intelligence products that feel intuitive, branded, and ready for executive rooms.',
    points: ['Narrative dashboards & KPI frameworks', 'Responsible AI copilots and automation']
  }
]

const engagements = [
  {
    phase: '01',
    title: 'Frame the mission',
    subtitle: 'Establish intent and value measures.',
    description: 'Immersive working sessions convert strategy into a sequenced, investable portfolio.'
  },
  {
    phase: '02',
    title: 'Shape & ship',
    subtitle: 'Deliver with pace and polish.',
    description: 'Cross-disciplinary squads release production increments with weekly showcases and rigor.'
  },
  {
    phase: '03',
    title: 'Embed & elevate',
    subtitle: 'Ensure lasting adoption.',
    description: 'Coaching, playbooks, and operating rhythms transfer capability with confidence.'
  }
]

const assurances = [
  'A single engagement lead coordinating strategy, delivery, and change.',
  'Security, governance, and measurement specialists embedded from day one.'
]

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <main id="content">
      <PhotoHero />

      <Section className="relative overflow-hidden bg-[#090f1f] text-white">
        <div className="absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_65%)]" />
          <div className="absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--lion)]/20 blur-[120px]" />
        </div>
        <Container className="relative">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Measured impact</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold md:text-4xl">
              Programmes that stay composed from strategy to scale.
            </h2>
            <p className="mt-5 text-base text-white/80 md:text-lg">
              Every engagement is orchestrated with calm precision—transparent metrics, executive-ready storytelling, and delivery that always feels deliberate.
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
                className="rounded-3xl border border-white/15 bg-white/10 p-6 text-left shadow-xl backdrop-blur"
              >
                <div className="text-3xl font-semibold text-gradient">{stat.value}</div>
                <div className="mt-2 text-base font-medium text-white/90">{stat.label}</div>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="what" tone="light" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f7f8fc] to-white" aria-hidden />
        <Container className="relative">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center text-[var(--space-cadet)]"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--space-cadet)]/60">Why Arctura</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold md:text-4xl">
              Boutique hospitality with institutional discipline.
            </h2>
            <p className="mt-5 text-base text-[var(--bistre)]/85 md:text-lg">
              We design every touchpoint to feel effortless—measured storytelling, intentional governance, and a leadership presence that inspires trust.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr,1fr] lg:items-start">
            <div className="space-y-8">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-3xl border border-[var(--space-cadet)]/10 bg-white/90 p-7 shadow-lg backdrop-blur"
                >
                  <div className="pointer-events-none absolute -top-16 right-0 h-32 w-32 rounded-full bg-[var(--lion)]/15 blur-3xl" aria-hidden />
                  <div className="relative">
                    <span className="mb-4 inline-flex items-center rounded-full border border-[var(--space-cadet)]/15 bg-[var(--space-cadet)]/5 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-[var(--space-cadet)]/70">
                      {area.title}
                    </span>
                    <p className="text-sm text-[var(--bistre)]/80 md:text-base">{area.description}</p>
                    <ul className="mt-5 space-y-2 text-sm text-[var(--bistre)]/70">
                      {area.bullets.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-[6px] h-2 w-2 rounded-full bg-[var(--space-cadet)]/60" aria-hidden />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[var(--space-cadet)]/10 bg-white p-8 shadow-xl"
            >
              <div className="space-y-4 text-left text-[var(--space-cadet)]">
                <h3 className="text-xl font-semibold">Poised partnership from day one</h3>
                <p className="text-sm text-[var(--bistre)]/80 md:text-base">
                  Your sponsors, operators, and technologists get a calm, senior-led team that choreographs the programme with clarity and discretion.
                </p>
                <p className="text-sm text-[var(--bistre)]/80 md:text-base">
                  Weekly stewardship sessions, articulate artefacts, and transparent dashboards ensure the story stays boardroom ready.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden bg-[#0b1220] text-white">
        <div className="absolute inset-0" aria-hidden>
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--lion)]/18 blur-3xl" />
          <div className="absolute -bottom-24 right-12 h-80 w-80 rounded-full bg-[var(--space-cadet)]/25 blur-3xl" />
        </div>
        <Container className="relative">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Signature capabilities</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold md:text-4xl">
              Full-spectrum expertise delivered with restraint.
            </h2>
            <p className="mt-5 text-base text-white/80 md:text-lg">
              Strategy, engineering, and change move as one choreography—every release polished, governed, and ready for executive scrutiny.
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
                    className="relative h-full overflow-hidden border-white/15 bg-white/10 p-7 text-left shadow-2xl backdrop-blur"
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
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f3f4f8] to-white" aria-hidden />
        <Container className="relative">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center text-[var(--space-cadet)]"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--space-cadet)]/60">How engagements flow</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold md:text-4xl">
              A composed rhythm from first framing to lasting adoption.
            </h2>
            <p className="mt-5 text-base text-[var(--bistre)]/85 md:text-lg">
              Senior leads stay at your shoulder, choreographing the cadence, translating insight, and giving sponsors confidence every step.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.6fr,1fr] lg:items-start">
            <div className="relative pl-10">
              <span
                className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--space-cadet)]/70 via-[var(--space-cadet)]/30 to-[var(--lion)]/30"
                aria-hidden
              />
              <div className="space-y-10">
                {engagements.map((engagement, index) => (
                  <motion.div
                    key={engagement.phase}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl bg-white/95 p-6 shadow-lg ring-1 ring-black/5"
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
              className="rounded-3xl border border-[var(--space-cadet)]/10 bg-white p-8 shadow-xl"
            >
              <div className="space-y-4 text-left text-[var(--space-cadet)]">
                <h3 className="text-xl font-semibold">Assurance you can rely on</h3>
                <ul className="space-y-2 text-sm text-[var(--bistre)]/80">
                  {assurances.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[6px] h-2 w-2 rounded-full bg-[var(--space-cadet)]/60" aria-hidden />
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
          <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--lion)]/22 blur-[120px]" />
          <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-[var(--space-cadet)]/30 blur-3xl" />
        </div>
        <Container className="relative">
          <Glow className="mx-auto max-w-4xl">
            <div className="rounded-3xl border border-white/12 bg-white/10 p-10 text-center backdrop-blur-xl shadow-2xl">
              <motion.h3
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="text-3xl font-semibold md:text-4xl"
              >
                Let’s choreograph your next data advantage.
              </motion.h3>
              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true }}
                className="mt-4 text-base text-white/85 md:text-lg"
              >
                We co-design the strategy, engineer the platform, and guide adoption with composure. Reach out and our leaders will personally map the next step.
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
