'use client'

import { Container } from '@/components/container'
import { Section } from '@/components/section'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

const stats = [
  {
    value: '120+',
    label: 'Modern data products',
    description:
      'Designed, engineered, and launched with measurable adoption across enterprise teams.',
  },
  {
    value: '18',
    label: 'Countries supported',
    description:
      'Follow-the-sun delivery with specialists embedded in financial, public sector, and growth-stage clients.',
  },
  {
    value: '96%',
    label: 'Client retention',
    description:
      'Long-term partnerships built on transparency, accountable delivery, and provable ROI.',
  },
]

const pillars = [
  {
    title: 'Strategic clarity',
    description:
      'We align executives, operators, and engineers around a single view of value. Every engagement begins with a blueprint that ties investment to impact.',
    bullets: [
      'Executive workshops & north-star metrics',
      'Modern data architecture patterns tailored to you',
      'Financial modeling to prove and pace ROI',
    ],
  },
  {
    title: 'Technical rigor',
    description:
      'From ingestion to activation, our engineers build systems that withstand scale, regulation, and real-world chaos.',
    bullets: [
      'Composable platform accelerators',
      'Secure-by-design governance and controls',
      'Production-grade observability & QA',
    ],
  },
  {
    title: 'Human-centered adoption',
    description:
      'Analytics only matters when people use it. We pair enablement and design with automation so teams can act with confidence.',
    bullets: [
      'Change management playbooks',
      'Immersive enablement and training',
      'On-call experts post go-live',
    ],
  },
]

const milestones = [
  {
    year: '2018',
    title: 'Arctura Analytics founded',
    description:
      'Launched by data leaders who had scaled analytics at Fortune 100 enterprises and high-growth startups, united by a belief that execution beats theory.',
  },
  {
    year: '2020',
    title: 'Platform accelerators released',
    description:
      'Introduced our reusable ingestion, modeling, and governance accelerators to cut delivery time by 40% without sacrificing quality.',
  },
  {
    year: '2022',
    title: 'Global guilds established',
    description:
      'Opened delivery hubs in North America, Europe, and APAC to provide local expertise with round-the-clock coverage.',
  },
  {
    year: '2024',
    title: 'AI assurance practice launched',
    description:
      'Expanded into responsible AI, model governance, and MLOps so clients can deploy advanced intelligence with confidence.',
  },
]

const commitments = [
  {
    title: 'Clarity at every checkpoint',
    copy: 'Weekly demos, transparent dashboards, and co-authored backlogs mean you always know what was delivered, what is next, and how it ladders to value.',
  },
  {
    title: 'Co-creation over handoffs',
    copy: 'We embed beside your teams—pairing, upskilling, and documenting every decision—so the capability sticks long after launch.',
  },
  {
    title: 'Sustainable innovation',
    copy: 'Our playbooks favor maintainable automation, design systems, and living documentation so your data stack stays resilient as priorities shift.',
  },
]

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <main id="content">
      <section className="relative isolate min-h-[90vh] w-full overflow-hidden flex items-center">
        <Image
          src="/brand/christina-wocintechchat-com-faEfWCdOKIg-unsplash.jpg"
          alt="Diverse team in a modern workspace"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-95 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#1d2238]/75 to-[#0d0f19]/95" />
        <div className="grain absolute inset-0 opacity-[0.12] mix-blend-overlay" aria-hidden />
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-x-0 top-0 h-[3px] accent-bar"
        />
        <Container className="relative z-10 py-24 md:py-32">
          <div className="max-w-4xl text-white">
            <motion.span
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80"
            >
              About Arctura Analytics
            </motion.span>
            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl"
            >
              We build data programs that turn ambition into durable advantage.
            </motion.h1>
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="mt-6 max-w-3xl text-lg text-white/85 md:text-xl"
            >
              Arctura Analytics pairs strategy, engineering, and enablement to help visionary teams
              move faster with data. We combine boutique craftsmanship with enterprise-scale
              delivery so every initiative is bold, elegant, and measurable.
            </motion.p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md text-white shadow-xl"
              >
                <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="mt-2 text-lg font-semibold text-white/90">{stat.label}</div>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <Section className="relative overflow-hidden bg-[var(--space-cadet)] text-white">
        <div
          className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--lion)]/30 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-[var(--bistre)]/40 blur-3xl"
          aria-hidden
        />
        <Container className="relative">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">Our DNA</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Boutique attention, enterprise discipline, and a bias toward elegant execution.
            </h2>
            <p className="mt-6 text-white/85">
              Every Arctura engagement is led by senior practitioners who have owned outcomes in the
              industries we serve. We bring teams that think end-to-end—from discovery and
              architecture to change management and continuous optimization.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr,1fr] lg:gap-16">
            <div className="space-y-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur"
                >
                  <h3 className="text-2xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm text-white/85 md:text-base">{pillar.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-white/75">
                    {pillar.bullets.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span
                          className="mt-[6px] h-2.5 w-2.5 rounded-full bg-[var(--lion)]"
                          aria-hidden
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-[420px] overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/15 via-white/5 to-transparent shadow-2xl"
            >
              <Image
                src="/brand/christina-wocintechchat-com-UcZcsHSp8o4-unsplash.jpg"
                alt="Friendly, approachable team for partnership and commitment"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section tone="light" className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#f5f3f1]"
          aria-hidden
        />
        <Container className="relative">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-3xl text-[var(--bistre)]"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--space-cadet)]/70">
              Our Journey
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl text-[var(--space-cadet)]">
              A seasoned collective shaped by real transformation programs.
            </h2>
            <p className="mt-6 text-lg text-[var(--bistre)]/85">
              We have led multi-year modernizations, launched new digital businesses, and stood up
              analytics capabilities inside highly regulated organizations. That experience informs
              how we plan, build, and evolve your data estate.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr,1fr] lg:items-start">
            <div className="relative pl-8">
              <span
                className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--space-cadet)] to-[var(--lion)]"
                aria-hidden
              />
              <div className="space-y-10">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl bg-white/80 p-6 shadow-lg ring-1 ring-black/5"
                  >
                    <span
                      className="absolute -left-[30px] top-6 h-3.5 w-3.5 rounded-full border-2 border-white bg-[var(--space-cadet)]"
                      aria-hidden
                    />
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--space-cadet)]/80">
                      {milestone.year}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-[var(--space-cadet)]">
                      {milestone.title}
                    </h3>
                    <p className="mt-3 text-[var(--bistre)]/85">{milestone.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true }}
                className="relative h-72 overflow-hidden rounded-3xl shadow-2xl"
              >
                <Image
                  src="/brand/jeffery-ho-oITfawv6t-8-unsplash.jpg"
                  alt="Group collaboration, teamwork and transformation"
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>
              <div className="grid gap-6 md:grid-cols-2">
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
                  viewport={{ once: true }}
                  className="relative h-56 overflow-hidden rounded-3xl shadow-xl"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                    alt="Leaders reviewing analytical dashboards together"
                    fill
                    sizes="(min-width: 1024px) 260px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </motion.div>
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-56 overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--space-cadet)] to-[var(--bistre)] p-[1px] shadow-xl"
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[calc(theme(borderRadius.3xl)-1px)]">
                    <Image
                      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80"
                      alt="Engineer crafting data pipelines on high-resolution monitors"
                      fill
                      sizes="(min-width: 1024px) 260px, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

  <Section className="relative bg-gradient-to-br from-[var(--space-cadet)] via-[var(--bistre)] to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'160\' height=\'160\' viewBox=\'0 0 160 160\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 160L160 0M-40 120L120 -40M40 200L200 40\' stroke=\'%23ffffff33\' stroke-width=\'1.2\'/%3E%3C/svg%3E')] bg-repeat opacity-60" />
        </div>
        <Container className="relative">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">How we partner</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              An elite team obsessed with outcomes, craft, and trust.
            </h2>
            <p className="mt-6 text-white/85">
              We invest deeply in each relationship, bringing purpose-built squads who stay with you
              from idea to steady state. The result is a partnership that feels seamless—thoughtful
              storytelling, technical excellence, and empathetic change management working in
              concert.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {commitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-xl backdrop-blur"
              >
                <h3 className="text-xl font-semibold text-white">{commitment.title}</h3>
                <p className="mt-3 text-sm text-white/80">{commitment.copy}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 rounded-3xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-lg shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              Ready to architect your next data advantage?
            </h3>
            <p className="mt-3 text-white/80 md:text-lg">
              Let’s design the roadmap, stand up the platform, and empower your teams together.
              Reach out—we would love to co-create what’s next.
            </p>
            <div className="mt-6 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm uppercase tracking-[0.3em] text-white/80">
              connect@arcturaanalytics.com
            </div>
          </motion.div>
        </Container>
      </Section>
    </main>
  )
}
