'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { HoverLift } from '@/components/hover-lift'
import { ServicesGallery } from '@/components/services-gallery'
import { ParticleField } from '@/components/particles'
import { EmailCapture } from '@/components/email-capture'

const stats = [
  { value: '15B+', label: 'Data Points Processed' },
  { value: '99.9%', label: 'Platform Uptime' },
  { value: '250+', label: 'Enterprise Clients' },
]

const heroHighlights = [
  {
    title: 'Unified data fabric',
    description: 'Connect siloed systems with governed, real-time pipelines.',
  },
  {
    title: 'Predictive intelligence',
    description: 'Surface forward-looking signals powered by trusted AI models.',
  },
  {
    title: 'Enterprise-grade security',
    description: 'Operate with compliance-ready controls and automated auditing.',
  },
]

const capabilityCards = [
  {
    id: '01',
    title: 'Data Intelligence Platform',
    summary:
      'Enterprise-grade analytics platform that transforms your raw data into actionable insights through advanced AI and machine learning.',
    detail:
      'Real-time analytics, predictive modeling, and automated reporting systems that drive business decisions.',
  },
  {
    id: '02',
    title: 'Cloud Solutions',
    summary:
      'Scalable cloud infrastructure that ensures high availability, security, and performance for your mission-critical applications.',
    detail:
      'State-of-the-art data centers with enterprise-grade security and compliance standards.',
  },
  {
    id: '03',
    title: 'Digital Transformation',
    summary:
      'End-to-end digital transformation services that modernize your operations and create seamless digital experiences.',
    detail:
      'Custom software solutions, workflow automation, and system integration for maximum efficiency.',
  },
]

export const dynamic = 'force-static'

export default function HomePage() {
  return (
    <main className="bg-black">
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

        <Container className="relative z-10 pt-28 pb-20">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 backdrop-blur">
                Enterprise Analytics Platform
              </span>

              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Turn Complex Data Into
                <span className="block bg-gradient-to-r from-white via-[#ff6b00] to-[#ff4d4d] bg-clip-text text-transparent">
                  Measurable Outcomes
                </span>
              </h1>

              <p className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg">
                Activate a unified analytics ecosystem that aligns leadership, operations, and citizens around reliable insight.
                Arctura streamlines your pipelines, enriches your data quality, and delivers intelligence the moment it matters.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff4d4d] to-[#ff6b00] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(255,77,77,0.35)] transition-transform hover:-translate-y-0.5"
              >
                Schedule a Strategy Call
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white/80 transition-colors hover:text-white hover:border-white/40"
              >
                Explore Case Studies
              </Link>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-10 grid w-full gap-4 text-left sm:grid-cols-2 lg:grid-cols-3"
            >
              {heroHighlights.map((item) => (
                <li key={item.title} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#ff6b00]" aria-hidden="true" />
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
              className="mt-14 grid w-full gap-6 sm:grid-cols-3"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <dd className="text-4xl font-semibold text-white sm:text-5xl">{stat.value}</dd>
                  <dt className="mt-2 text-sm uppercase tracking-wide text-slate-300">{stat.label}</dt>
                </div>
              ))}
            </motion.dl>
          </div>
        </Container>
      </section>

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
              Our Solutions
            </span>
            <h2 className="mb-6 text-3xl font-semibold text-white lg:text-4xl">
              Enterprise-Grade{' '}
              <span className="bg-gradient-to-r from-white via-[#ff6b00] to-[#ff4d4d] bg-clip-text text-transparent">
                Analytics Platform
              </span>
            </h2>
            <p className="text-lg text-slate-300">
              Powerful analytics tools and AI-driven insights that help businesses make smarter decisions and stay ahead of the
              competition.
            </p>
          </motion.div>
          <ServicesGallery />
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
              Our Approach
            </span>
            <h2 className="mb-6 text-3xl font-semibold text-white lg:text-4xl">
              End-to-End{' '}
              <span className="bg-gradient-to-r from-white via-[#ff6b00] to-[#ff4d4d] bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>
            <p className="text-lg text-slate-300">
              We bring together strategy, technology, and expertise to deliver complete analytics solutions.
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
