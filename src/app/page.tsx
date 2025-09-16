"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PhotoHero } from '@/components/photo-hero'
import { Section } from '@/components/section'
import { Container } from '@/components/container'
import { Card, CardContent } from '@/components/ui/card'
import { HoverLift } from '@/components/hover-lift'
import { Glow } from '@/components/glow'
import { Button } from '@/components/ui/button'
import { StatsStrip } from '@/components/stats-strip'
import { ServicesGallery } from '@/components/services-gallery'

export const dynamic = 'force-static'

export default function HomePage() {
  return (
    <main id="content">
      <PhotoHero />

      {/* Animated transition divider */}
      <div className="w-full h-8 bg-gradient-to-r from-[var(--bistre)] via-[var(--lion)] to-[var(--space-cadet)] shimmer" />

      {/* What we do - animated cards */}
      <Section id="what" className="bg-[var(--space-cadet)] text-white py-16 md:py-24">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="mb-2 text-xs font-semibold tracking-[.2em] text-white/70 animate-fade-in">
              WHAT WE DO
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in">
              Enterprise Data, Simplified
            </h2>
            <p className="text-lg md:text-xl text-white/80 animate-fade-in">
              We turn complexity into clarity. Our solutions digitize, integrate, and model your
              data for confident decision-making.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Digitize',
                desc: 'Transform paper, PDFs, and legacy files into secure, searchable datasets. Every record, every detail, always accessible.',
                bullets: [
                  'OCR + metadata tagging',
                  'Versioning & audit trails',
                  'Quality checks & lineage',
                ],
                color: 'from-[var(--lion)] to-[var(--bistre)]',
              },
              {
                title: 'Integrate',
                desc: 'Connect every source, automate every pipeline. We build reliable, observable data flows for seamless operations.',
                bullets: ['Event/CDC & batch ELT', 'CI/CD deployments', 'Observability & alerts'],
                color: 'from-[var(--space-cadet)] to-[var(--lion)]',
              },
              {
                title: 'Model + Analyze',
                desc: 'Build a shared language for your business. KPIs, dashboards, and forecasts that drive real results.',
                bullets: [
                  'Semantic models & KPIs',
                  'Dashboards people use',
                  'Forecasts & optimization',
                ],
                color: 'from-[var(--bistre)] to-[var(--space-cadet)]',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-8 shadow-xl bg-gradient-to-br ${card.color} text-white flex flex-col items-start animate-fade-in`}
              >
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="mb-4 text-white/90">{card.desc}</p>
                <ul className="space-y-2 text-white/80 text-base">
                  {card.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How we work */}
      <Section className="bg-white text-[var(--bistre)] py-16 md:py-24">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="mb-2 text-xs font-semibold tracking-[.2em] text-slate-500 animate-fade-in">
              HOW WE WORK
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in">
              Agile, Transparent, Accountable
            </h2>
            <p className="text-lg md:text-xl text-slate-600 animate-fade-in">
              We deliver visible progress every week. No black boxes, just results you can trust.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                title: 'Discover',
                desc: 'Map every source, define the smallest useful slice, and set clear goals.',
                color: 'from-[var(--lion)] to-[var(--bistre)]',
              },
              {
                title: 'Model',
                desc: 'Name things clearly. Build tested, documented layers for reliability.',
                color: 'from-[var(--space-cadet)] to-[var(--lion)]',
              },
              {
                title: 'Automate',
                desc: 'Ship pipelines with CI/CD, alerts, and playbooks for peace of mind.',
                color: 'from-[var(--bistre)] to-[var(--space-cadet)]',
              },
              {
                title: 'Observe',
                desc: 'Track freshness, quality, and adoption. Improve every week.',
                color: 'from-[var(--lion)] to-[var(--space-cadet)]',
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 shadow-lg bg-gradient-to-br ${step.color} text-white flex flex-col items-start animate-fade-in`}
              >
                <div className="text-lg font-semibold mb-2">{step.title}</div>
                <p className="text-white/90">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>


      {/* CTA */}
      <Section className="bg-gradient-to-r from-[var(--space-cadet)] via-[var(--bistre)] to-[var(--lion)] py-12 md:py-20">
        <Container>
          <div className="rounded-2xl border-2 border-[var(--lion)] bg-white/90 p-8 md:p-12 text-center shadow-2xl max-w-2xl mx-auto flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-[var(--space-cadet)] mb-4 tracking-tight">
              Ready to Build Your Data Advantage?
            </h3>
            <p className="mt-2 text-lg md:text-xl text-[var(--bistre)] font-medium mb-6">
              Partner with Arctura Analytics for seamless integration, advanced analytics, and
              actionable intelligence. Let’s turn your data into your most valuable asset.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Glow>
                <Button
                  asChild
                  variant="gradient"
                  shape="pill"
                  className="w-full sm:w-auto text-lg px-8 py-3"
                >
                  <Link href="/contact">Start the Conversation</Link>
                </Button>
              </Glow>
              <Button
                asChild
                variant="outline"
                shape="pill"
                className="w-full sm:w-auto text-lg px-8 py-3 border-[var(--space-cadet)] text-[var(--space-cadet)] hover:bg-[var(--space-cadet)] hover:text-white"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}
