'use client'
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

      {/* Simple divider for business flow */}
      <div className="w-full h-4 bg-[var(--raisin-black)]/10" />

      {/* What we do - clean, official section */}
      <Section
        id="what"
        className="bg-white py-20 md:py-32 border-b border-[var(--raisin-black)]/10"
      >
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-2 text-xs font-semibold tracking-[.2em] text-[var(--lion)]">
              WHAT WE DO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--space-cadet)]">
              Enterprise Data, Simplified
            </h2>
            <p className="text-lg md:text-xl text-[var(--bistre)]">
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
              },
              {
                title: 'Integrate',
                desc: 'Connect every source, automate every pipeline. We build reliable, observable data flows for seamless operations.',
                bullets: ['Event/CDC & batch ELT', 'CI/CD deployments', 'Observability & alerts'],
              },
              {
                title: 'Model + Analyze',
                desc: 'Build a shared language for your business. KPIs, dashboards, and forecasts that drive real results.',
                bullets: [
                  'Semantic models & KPIs',
                  'Dashboards people use',
                  'Forecasts & optimization',
                ],
              },
            ].map((card, i) => (
              <div
                key={card.title}
                className="rounded-2xl p-8 shadow-md bg-white border border-[var(--raisin-black)]/10 flex flex-col items-start"
              >
                <h3 className="text-2xl font-bold mb-2 text-[var(--space-cadet)]">{card.title}</h3>
                <p className="mb-4 text-[var(--bistre)]">{card.desc}</p>
                <ul className="space-y-2 text-[var(--lion)] text-base">
                  {card.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How we work */}
      <div className="w-full h-4 bg-[var(--raisin-black)]/10" />

      <Section className="bg-white text-[var(--bistre)] py-20 md:py-32 border-b border-[var(--raisin-black)]/10">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-2 text-xs font-semibold tracking-[.2em] text-[var(--bistre)]">
              HOW WE WORK
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--space-cadet)]">
              Agile, Transparent, Accountable
            </h2>
            <p className="text-lg md:text-xl text-[var(--bistre)]">
              We deliver visible progress every week. No black boxes, just results you can trust.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                title: 'Discover',
                desc: 'Map every source, define the smallest useful slice, and set clear goals.',
              },
              {
                title: 'Model',
                desc: 'Name things clearly. Build tested, documented layers for reliability.',
              },
              {
                title: 'Automate',
                desc: 'Ship pipelines with CI/CD, alerts, and playbooks for peace of mind.',
              },
              {
                title: 'Observe',
                desc: 'Track freshness, quality, and adoption. Improve every week.',
              },
            ].map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl p-6 shadow-md bg-white border border-[var(--raisin-black)]/10 flex flex-col items-start"
              >
                <div className="text-lg font-bold mb-2 text-[var(--space-cadet)]">{step.title}</div>
                <p className="text-[var(--bistre)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <div className="w-full h-4 bg-[var(--raisin-black)]/10" />

      <Section className="bg-white py-20 md:py-32">
        <Container>
          <div className="rounded-2xl border border-[var(--lion)] p-10 md:p-14 text-center shadow-md max-w-2xl mx-auto flex flex-col items-center bg-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-[var(--space-cadet)]">
              Ready to Build Your Data Advantage?
            </h3>
            <p className="mt-2 text-lg md:text-xl font-medium mb-8 text-[var(--bistre)]">
              Partner with Arctura Analytics for seamless integration, advanced analytics, and
              actionable intelligence. Let’s turn your data into your most valuable asset.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-6 w-full justify-center">
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
