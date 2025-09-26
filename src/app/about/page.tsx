'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/container'
import { Section } from '@/components/section'

const stats = [
  {
    value: '150+',
    label: 'Specialists',
    description:
      'Strategy leaders, data engineers, analysts, and enablement experts delivering end-to-end programmes.',
  },
  {
    value: '22',
    label: 'Markets served',
    description:
      'Follow-the-sun delivery with teams across North America, Europe, Asia Pacific, and the Middle East.',
  },
  {
    value: '96%',
    label: 'Client retention',
    description:
      'Multi-year partnerships anchored on transparency, measurable outcomes, and accountable governance.',
  },
]

const pillars = [
  {
    title: 'Advisory and operating models',
    description:
      'Global experience aligning boards, business units, and technology teams around ambitious, achievable data strategies.',
    bullets: [
      'Diagnostic assessments and maturity benchmarks',
      'Investment cases, success metrics, and programme structures',
      'Governance, risk, and controls tuned to your regulatory landscape',
    ],
  },
  {
    title: 'Engineering and delivery',
    description:
      'Modern cloud platforms, pipelines, and analytics products built with resilience, lineage, and observability from day one.',
    bullets: [
      'Landing zones and ingestion factories across AWS, Azure, and GCP',
      'dbt, Spark, Airflow, and streaming patterns with automated quality gates',
      'Site reliability and platform operations coverage 24/7',
    ],
  },
  {
    title: 'Adoption and managed care',
    description:
      'Embedding insights into business processes through enablement, communications, and lifecycle partnerships.',
    bullets: [
      'Design systems and analytics experience standards',
      'Change management, training, and communications playbooks',
      'Managed services, optimisation, and continuous improvement cycles',
    ],
  },
]

const milestones = [
  {
    year: '2017',
    title: 'Arctura Analytics incorporated',
    description:
      'Founded by practitioners who previously scaled data and analytics inside Fortune 100 and high-growth technology firms.',
  },
  {
    year: '2019',
    title: 'Cloud delivery accelerators launched',
    description:
      'Released reusable ingestion, transformation, and governance frameworks to shorten value realisation without sacrificing control.',
  },
  {
    year: '2021',
    title: 'Global delivery hubs established',
    description:
      'Opened centres in London, Toronto, Singapore, and Austin to support regional expertise with round-the-clock execution.',
  },
  {
    year: '2023',
    title: 'Responsible AI practice introduced',
    description:
      'Brought together data science, risk, and architecture leaders to design measurable, production-ready AI programmes.',
  },
]

const commitments = [
  {
    title: 'Transparent delivery',
    copy: 'Weekly cadences, shared scorecards, and co-authored roadmaps ensure you always see progress, dependencies, and risks.',
  },
  {
    title: 'Security and trust by design',
    copy: 'From architecture patterns to change management, we embed governance, privacy, and compliance throughout every project.',
  },
  {
    title: 'Capability that lasts',
    copy: 'Documentation, training, and embedded teams leave your organisation self-sufficient and ready for the next initiative.',
  },
]

const teamScenes = [
  {
    image: '/brand/christina-wocintechchat-com-UcZcsHSp8o4-unsplash.jpg',
    label: 'Delivery leadership',
    caption:
      'Programme directors, architects, and analysts planning cross-discipline releases with client PMOs.',
  },
  {
    image: '/brand/christina-wocintechchat-com-faEfWCdOKIg-unsplash.jpg',
    label: 'Enablement sessions',
    caption:
      'Designers and adoption leads co-creating analytics journeys and communications with business stakeholders.',
  },
]

export default function AboutPage() {
  const reduceMotion = useReducedMotion()

  return (
    <main id="content">
      <section className="relative isolate overflow-hidden pb-24 pt-32 sm:pt-36">
        <Image
          src="/brand/hero-laptop.jpg"
          alt="Data and analytics professionals collaborating"
          fill
          priority
          className="object-cover brightness-[0.65] contrast-[1.15]"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(120%_90%_at_20%_15%,rgba(255,63,46,0.25),transparent_55%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(110%_80%_at_80%_20%,rgba(255,111,60,0.2),transparent_60%)]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#040507]/78 backdrop-blur-[2px]" aria-hidden />
        <Container className="relative">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center"
          >
            <div className="space-y-10 text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/70">
                Our mission
              </span>
              <div className="space-y-6">
                <h1 className="text-4xl font-black sm:text-5xl md:text-6xl">
                  Delivering data platforms and insights programmes leaders can trust
                </h1>
                <p className="max-w-2xl text-base text-white/75 sm:text-lg">
                  Arctura Analytics partners with enterprises to plan, build, and operate modern
                  data capabilities. We combine advisory, engineering, and enablement so that
                  strategy connects seamlessly to delivery and adoption.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                {stats.map((stat, index) => (
                  <motion.article
                    key={stat.label}
                    initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
                    animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 + 0.1 }}
                    className="rounded-2xl border border-white/12 bg-white/10 px-5 py-6 shadow-[0_32px_90px_rgba(3,4,9,0.55)] backdrop-blur"
                  >
                    <div className="text-2xl font-semibold text-white">{stat.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.28em] text-white/60">
                      {stat.label}
                    </div>
                    <p className="mt-3 text-sm text-white/70">{stat.description}</p>
                  </motion.article>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              {teamScenes.map((scene, index) => (
                <motion.article
                  key={scene.label}
                  initial={reduceMotion ? undefined : { opacity: 0, y: 26 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.12 + 0.2 }}
                  className="group relative overflow-hidden rounded-[30px] border border-white/12 bg-[color:rgba(12,15,23,0.92)] p-1 shadow-[0_42px_120px_rgba(3,4,9,0.65)]"
                >
                  <div className="relative h-60 w-full overflow-hidden rounded-[26px]">
                    <Image
                      src={scene.image}
                      alt={scene.label}
                      fill
                      sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent"
                      aria-hidden
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-x-6 bottom-6 flex flex-col gap-2 text-white">
                    <span className="inline-flex w-max items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.3em] text-white/70">
                      {scene.label}
                    </span>
                    <p className="text-sm text-white/75">{scene.caption}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <Section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute left-1/2 top-16 h-[420px] w-[85%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,63,46,0.14),transparent_70%)] blur-[160px]"
            aria-hidden
          />
        </div>
        <Container className="relative">
          <div className="mx-auto mb-16 max-w-3xl text-center text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/70">
              How we operate
            </span>
            <h2 className="mt-6 text-3xl font-black sm:text-4xl md:text-5xl">
              Integrated capability across advisory, delivery, and change
            </h2>
            <p className="mt-4 text-base text-white/75 sm:text-lg">
              We align strategy, execution, and adoption for the organisations we serve. Every
              engagement is staffed with practitioners who care about measurable impact and
              sustainable platforms.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                className="relative flex h-full flex-col rounded-[28px] border border-white/12 bg-[color:rgba(14,17,26,0.92)] p-8 shadow-[0_36px_110px_rgba(3,4,9,0.55)]"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/10 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-4 text-sm text-white/75">{pillar.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-white/65">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent-amber)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute left-[12%] top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,63,46,0.2),transparent_70%)] blur-[140px]"
            aria-hidden
          />
          <div
            className="absolute right-[10%] bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,111,60,0.18),transparent_75%)] blur-[160px]"
            aria-hidden
          />
        </div>
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/70">
                Milestones
              </span>
              <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl">
                Proven growth through continuous investment in capability
              </h2>
              <p className="mt-4 max-w-xl text-base text-white/75 sm:text-lg">
                Our journey has been guided by the needs of data leaders. Each milestone reflects a
                new layer of accelerators, governance, and talent developed with clients.
              </p>
              <div className="mt-12 space-y-10 border-l border-white/12 pl-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={reduceMotion ? undefined : { opacity: 0, x: -18 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
                    className="relative"
                  >
                    <span className="absolute -left-[41px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white/45 bg-[var(--accent-amber)]" />
                    <div className="text-xs uppercase tracking-[0.28em] text-white/60">
                      {milestone.year}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-white">{milestone.title}</h3>
                    <p className="mt-3 text-sm text-white/70">{milestone.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              <motion.div
                initial={reduceMotion ? undefined : { opacity: 0, y: 26 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
                className="relative overflow-hidden rounded-[30px] border border-white/12 bg-[color:rgba(12,15,23,0.92)] p-1 shadow-[0_40px_120px_rgba(3,4,9,0.6)]"
              >
                <div className="relative h-64 overflow-hidden rounded-[26px]">
                  <Image
                    src="/brand/jeffery-ho-oITfawv6t-8-unsplash.jpg"
                    alt="Engineering and delivery teams collaborating"
                    fill
                    sizes="(min-width: 1024px) 420px, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="pointer-events-none absolute inset-x-6 bottom-6 text-white">
                  <p className="text-sm text-white/75">
                    Integrated squads bring architecture, engineering, analytics, and change to
                    every programme, ensuring momentum from discovery through hypercare.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={reduceMotion ? undefined : { opacity: 0, y: 26 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: 0.18 }}
                className="rounded-[30px] border border-white/12 bg-[linear-gradient(140deg,rgba(255,63,46,0.18),rgba(12,14,22,0.92))] p-8 shadow-[0_36px_110px_rgba(3,4,9,0.55)]"
              >
                <h3 className="text-lg font-semibold text-white">Service principles</h3>
                <p className="mt-3 text-sm text-white/75">
                  Every engagement follows a disciplined cadence built on discovery, design,
                  delivery, and steady-state enablement. Clients stay informed and in control at
                  each stage.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent-amber)]" />
                    Weekly steering and delivery forums
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent-amber)]" />
                    Co-authored playbacks and documentation
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent-amber)]" />
                    Focus on measurable business outcomes
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-x-0 top-[18%] h-48 bg-[radial-gradient(70%_150%_at_50%_0%,rgba(255,111,60,0.16),transparent_70%)]"
            aria-hidden
          />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-5xl text-center text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/70">
              Partnership commitments
            </span>
            <h2 className="mt-6 text-3xl font-black sm:text-4xl">
              What to expect when we deliver together
            </h2>
            <p className="mt-4 text-base text-white/75 sm:text-lg">
              Complex programmes demand clarity, accountability, and care. Our teams operate as an
              extension of yours, bringing proven methods and open communication.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {commitments.map((commitment, index) => (
              <motion.article
                key={commitment.title}
                initial={reduceMotion ? undefined : { opacity: 0, y: 26 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                className="rounded-[28px] border border-white/12 bg-[color:rgba(13,16,24,0.9)] p-8 shadow-[0_30px_90px_rgba(3,4,9,0.5)] backdrop-blur"
              >
                <h3 className="text-xl font-semibold text-white">{commitment.title}</h3>
                <p className="mt-3 text-sm text-white/75">{commitment.copy}</p>
              </motion.article>
            ))}
          </div>
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 32 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
            className="mt-16 flex flex-col items-center rounded-[32px] border border-white/12 bg-[linear-gradient(130deg,rgba(10,12,21,0.92),rgba(255,63,46,0.2))] p-10 text-center shadow-[0_40px_120px_rgba(3,4,9,0.55)]"
          >
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              Ready to discuss your next data initiative?
            </h3>
            <p className="mt-4 max-w-2xl text-sm text-white/75 sm:text-base">
              Share your objectives and constraints. We will assemble the right advisory and
              delivery squad to move quickly while protecting quality and governance.
            </p>
            <a
              href="mailto:connect@arcturaanalytics.com"
              className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-white/80 transition hover:border-white/50 hover:bg-white/15"
            >
              connect@arcturaanalytics.com
            </a>
          </motion.div>
        </Container>
      </Section>
    </main>
  )
}
