'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { PhotoHero } from '@/components/photo-hero'
import { Section } from '@/components/section'
import { Container } from '@/components/container'
import { HoverLift } from '@/components/hover-lift'
import { ServicesGallery } from '@/components/services-gallery'

const capabilityCards = [
  {
    id: '01',
    title: 'Architecture and roadmaps',
    summary: 'Target-state designs, investment cases, and operating models that align leadership and delivery.',
    detail: 'Blueprints, governance frameworks, and sequencing plans built for enterprise adoption.'
  },
  {
    id: '02',
    title: 'Build, migrate, optimise',
    summary: 'Cloud data platforms, pipelines, and models engineered with resilience, lineage, and observability.',
    detail: 'Automation accelerators, SRE playbooks, and platform stewardship to keep trust high.'
  },
  {
    id: '03',
    title: 'Adoption and enablement',
    summary: 'Analytics products, change management, and training programmes that embed insights into daily decisions.',
    detail: 'Design systems, communications, and capability lifts that ensure teams stay confident.'
  }
]

const differentiators = [
  {
    metric: '140+',
    label: 'Enterprise data initiatives delivered',
    copy: 'Cross-functional squads covering strategy, engineering, design, and operations.'
  },
  {
    metric: '12',
    label: 'Industry playbooks',
    copy: 'Regulated, financial, public sector, and high-growth SaaS accelerators ready for execution.'
  }
]

export const dynamic = 'force-static'

export default function HomePage() {
  return (
    <main id="content">
      <PhotoHero />
      <Section id="what" className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-64 w-[80%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,63,46,0.16),transparent_70%)] blur-[150px]" aria-hidden />
        </div>
        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="max-w-xl space-y-8 text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/70">
                What we deliver
              </span>
              <h2 className="text-3xl font-black sm:text-4xl md:text-5xl">
                Enterprise-ready data programmes from first principles to full adoption
              </h2>
              <p className="text-base text-white/75 sm:text-lg">
                We help leadership teams design confident strategies, modernise data platforms, and embed analytics into mission-critical decisions. Every engagement is measured, governed, and delivered with experienced practitioners on the ground.
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                {differentiators.map((item) => (
                  <div key={item.metric} className="rounded-2xl border border-white/12 bg-white/10 px-5 py-6">
                    <h3 className="text-2xl font-semibold text-white">{item.metric}</h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.28em] text-white/60">{item.label}</p>
                    <p className="mt-3 text-sm text-white/70">{item.copy}</p>
                  </div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
                className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.34em] text-white/60"
              >
                <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent-amber)]" />
                Programme governance built on ISO and SOC-ready practices
              </motion.div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {capabilityCards.map((capability, i) => (
                <HoverLift key={capability.id}>
                  <motion.article
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.08 }}
                    className="relative flex h-full flex-col rounded-[26px] border border-white/12 bg-[color:rgba(13,16,24,0.92)] p-8 shadow-[0_36px_110px_rgba(3,4,9,0.6)]"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/12 text-xs font-semibold uppercase tracking-[0.3em] text-white/65">
                      {capability.id}
                    </span>
                    <h3 className="mt-6 text-xl font-semibold text-white">{capability.title}</h3>
                    <p className="mt-3 text-sm text-white/75">{capability.summary}</p>
                    <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/55">{capability.detail}</p>
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[var(--accent-amber)] via-[var(--accent-crimson)] to-[var(--accent-ember)]" aria-hidden />
                  </motion.article>
                </HoverLift>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <ServicesGallery />
    </main>
  )
}
