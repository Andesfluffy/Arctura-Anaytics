'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { Button } from '@/components/ui/button'

type Suite = {
  title: string
  description: string
  highlights: string[]
}

type Accelerator = {
  title: string
  stat: string
  description: string
  highlights: string[]
}

type Testimonial = {
  quote: string
  attribution: string
}

const heroMetrics = [
  { value: '6 weeks', label: 'Average programme mobilisation' },
  { value: '40%', label: 'Faster time-to-value' },
  { value: 'ISO-ready', label: 'Governance frameworks' }
]

const suites: Suite[] = [
  {
    title: 'Strategy and transformation',
    description: 'Assessments, operating models, and investment roadmaps that align executives and delivery teams on measurable outcomes.',
    highlights: [
      'Maturity models and capability diagnostics',
      'Enterprise data strategy and portfolio planning',
      'Governance, risk, and compliance frameworks'
    ]
  },
  {
    title: 'Platform engineering',
    description: 'Modern data platform design and build across cloud stacks with automation, quality, and observability integrated.',
    highlights: [
      'Landing zones, ingestion, and transformation factories',
      'Streaming, batch, and API integration patterns',
      'Site reliability engineering and managed operations'
    ]
  },
  {
    title: 'Analytics and AI delivery',
    description: 'User-centric analytics products, decision workflows, and governed AI solutions embedded in business processes.',
    highlights: [
      'Dashboard design systems and semantic layers',
      'Advanced analytics and forecasting solutions',
      'Responsible AI experimentation and deployment'
    ]
  }
]

const accelerators: Accelerator[] = [
  {
    title: 'Data platform blueprint',
    stat: '14 day engagement',
    description: 'Reference architectures, backlog, and investment model tailored to your industry and technology landscape.',
    highlights: ['Cloud architecture templates', 'Governance and security guardrails', 'Delivery roadmap with value milestones']
  },
  {
    title: 'Analytics adoption toolkit',
    stat: 'Ready-to-use assets',
    description: 'Enablement collateral, communications, and metrics to drive sustained adoption of insight products.',
    highlights: ['Executive and frontline playbooks', 'Adoption scorecards and instrumentation', 'Training catalogues and office hours']
  },
  {
    title: 'AI assurance framework',
    stat: '21 day pilot',
    description: 'Structured approach for responsible AI, covering use-case discovery, evaluation, and deployment readiness.',
    highlights: ['Risk and control library', 'Model evaluation harness', 'Operational handover checklist']
  }
]

const testimonials: Testimonial[] = [
  {
    quote: 'Arctura provided the clarity and accountability we needed to mobilise a global data transformation. Every milestone hit on schedule.',
    attribution: 'Chief Data Officer, Global Retail Enterprise'
  },
  {
    quote: 'Their engineers and change leaders work as one team. We modernised our platform and landed new analytics products without disrupting operations.',
    attribution: 'SVP Analytics Engineering, Tier 1 Bank'
  }
]

export default function SolutionsPage() {
  return (
    <main id="content">
      <section className="relative isolate overflow-hidden pb-24 pt-32 sm:pt-36">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-40 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,63,46,0.25),transparent_70%)] blur-[160px]" aria-hidden />
          <div className="absolute right-[-120px] top-12 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,111,60,0.22),transparent_70%)] blur-[160px]" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/80 via-black/25 to-transparent" aria-hidden />
        </div>
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="space-y-10 text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/70">
                Solution suites
              </span>
              <div className="space-y-6">
                <h1 className="text-4xl font-black sm:text-5xl md:text-6xl">
                  Comprehensive coverage for modern data platforms and decision intelligence
                </h1>
                <p className="max-w-2xl text-base text-white/75 sm:text-lg">
                  Select the advisory, engineering, and managed services needed to move from strategy to production. Our practitioners work alongside your teams with methods proven across regulated and high-growth environments.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  variant="gradient"
                  shape="pill"
                  className="h-12 items-center gap-3 rounded-full px-7 text-sm font-semibold uppercase tracking-[0.3em] text-black"
                >
                  <Link href="/contact">Talk to our team</Link>
                </Button>
                <Link
                  href="#accelerators"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:border-white/40 hover:text-white"
                >
                  View accelerators
                  <span className="block h-px w-8 bg-white/40 transition group-hover:w-12 group-hover:bg-white" />
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/12 bg-white/10 px-4 py-5 text-white/75">
                    <div className="text-xl font-semibold text-white">{metric.value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.28em]">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              {suites.map((suite, index) => (
                <motion.article
                  key={suite.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 + 0.2 }}
                  className="group relative overflow-hidden rounded-[30px] border border-white/12 bg-[color:rgba(12,15,23,0.92)] p-7 shadow-[0_38px_110px_rgba(3,4,9,0.6)]"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-white">{suite.title}</h2>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-white/75">{suite.description}</p>
                  <ul className="mt-5 space-y-2 text-sm text-white/65">
                    {suite.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent-amber)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <Section id="accelerators" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-10 h-[420px] w-[80%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,111,60,0.14),transparent_70%)] blur-[160px]" aria-hidden />
        </div>
        <Container className="relative">
          <div className="mx-auto mb-16 max-w-3xl text-center text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/70">
              Delivery accelerators
            </span>
            <h2 className="mt-6 text-3xl font-black sm:text-4xl">Proprietary assets to shorten mobilisation and derisk execution</h2>
            <p className="mt-4 text-base text-white/75 sm:text-lg">
              Our accelerators package architecture templates, automation, and enablement collateral. They integrate with your tool stack and delivery cadence so teams can execute faster with confidence.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {accelerators.map((accelerator, index) => (
              <motion.article
                key={accelerator.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                className="flex h-full flex-col rounded-[28px] border border-white/12 bg-[color:rgba(14,17,26,0.92)] p-8 shadow-[0_34px_110px_rgba(3,4,9,0.55)]"
              >
                <div className="inline-flex w-max items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.3em] text-white/70">
                  {accelerator.stat}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{accelerator.title}</h3>
                <p className="mt-3 text-sm text-white/75">{accelerator.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-white/65">
                  {accelerator.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent-amber)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="gradient"
                  shape="pill"
                  className="mt-auto h-11 rounded-full px-6 text-xsụta font-semibold uppercase tracking-[0.28em] text-black"
                >
                  <Link href="/contact">Request briefing</Link>
                </Button>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-12 h-56 bg-[radial-gradient(70%_160%_at_50%_0%,rgba(255,63,46,0.16),transparent_70%)]" aria-hidden />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/70">
              Client outcomes
            </span>
            <h2 className="mt-6 text-3xl font-black sm:text-4xl">What data and technology leaders say about partnering with Arctura</h2>
            <p className="mt-4 text-base text-white/75 sm:text-lg">
              We integrate with your operating rhythm and stay accountable to business metrics. Our teams thrive in complex, regulated environments and keep initiatives moving.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <motion.blockquote
                key={item.quote}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                className="flex h-full flex-col rounded-[26px] border border-white/12 bg-[color:rgba(11,15,23,0.92)] p-8 text-left text-white shadow-[0_32px_100px_rgba(3,4,9,0.5)]"
              >
                <p className="text-lg font-semibold text-white">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-6 text-sm uppercase tracking-[0.28em] text-white/70">{item.attribution}</footer>
              </motion.blockquote>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-6 h-64 w-[70%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,111,60,0.2),transparent_70%)] blur-[150px]" aria-hidden />
        </div>
        <Container className="relative">
          <div className="rounded-[32px] border border-white/12 bg-[linear-gradient(130deg,rgba(10,12,21,0.92),rgba(255,63,46,0.2))] p-10 text-center text-white shadow-[0_40px_120px_rgba(3,4,9,0.55)]">
            <h2 className="text-3xl font-black sm:text-4xl">Ready to scope your next data programme?</h2>
            <p className="mt-4 text-base text-white/75 sm:text-lg">
              Share your objectives and constraints. We will assemble the right specialists and provide a clear mobilisation plan.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                variant="gradient"
                shape="pill"
                className="h-12 items-center gap-3 rounded-full px-7 text-sm font-semibold uppercase tracking-[0.3em] text-black"
              >
                <Link href="/contact">Start the brief</Link>
              </Button>
              <a
                href="mailto:connect@arcturaanalytics.com"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/50 hover:bg-white/15"
              >
                connect@arcturaanalytics.com
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}
