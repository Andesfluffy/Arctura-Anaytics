import Link from 'next/link'
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

export default async function HomePage() {
  return (
    <main id="content">
      <PhotoHero />

      {/* What we do */}
      <StatsStrip />
      <Section id="what" className="bg-[var(--space-cadet)] text-white">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="mb-2 text-xs font-semibold tracking-[.2em] text-white/70">
              WHAT WE DO
            </div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              We wrangle data into clean, connected datasets
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <HoverLift>
              <Card tone="glass" interactive>
                <CardContent className="p-6">
                  <div className="mb-3 h-1 w-12 rounded-full gradient" />
                  <h3 className="text-xl font-semibold">Digitize</h3>
                  <p className="mt-3 text-white/80">
                    Turn paper and siloed files into trustworthy datasets.
                  </p>
                  <ul className="mt-3 space-y-1 text-white/80">
                    <li>- OCR + metadata tagging</li>
                    <li>- Versioning and audit trails</li>
                    <li>- Quality checks and lineage</li>
                  </ul>
                </CardContent>
              </Card>
            </HoverLift>
            <HoverLift>
              <Card tone="glass" interactive>
                <CardContent className="p-6">
                  <div className="mb-3 h-1 w-12 rounded-full gradient" />
                  <h3 className="text-xl font-semibold">Integrate</h3>
                  <p className="mt-3 text-white/80">
                    Connect apps and warehouses with reliable pipelines.
                  </p>
                  <ul className="mt-3 space-y-1 text-white/80">
                    <li>- Event/CDC and batch ELT</li>
                    <li>- Tested CI/CD deployments</li>
                    <li>- Observability and alerts</li>
                  </ul>
                </CardContent>
              </Card>
            </HoverLift>
            <HoverLift>
              <Card tone="glass" interactive>
                <CardContent className="p-6">
                  <div className="mb-3 h-1 w-12 rounded-full gradient" />
                  <h3 className="text-xl font-semibold">Model + Analyze</h3>
                  <p className="mt-3 text-white/80">
                    Build a shared language for decisions that stick.
                  </p>
                  <ul className="mt-3 space-y-1 text-white/80">
                    <li>- Semantic models and KPIs</li>
                    <li>- Dashboards people actually use</li>
                    <li>- Forecasts and optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </HoverLift>
          </div>
        </Container>
      </Section>

      {/* How we work */}
      <Section className="bg-white text-[var(--bistre)]">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="mb-2 text-xs font-semibold tracking-[.2em] text-slate-500">
              HOW WE WORK
            </div>
            <h2 className="text-3xl font-semibold md:text-4xl">Short cycles. Strong ownership.</h2>
            <p className="mt-3 text-slate-600">Visible progress every week. No black boxes.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                title: 'Discover',
                desc: 'Map sources and decisions. Define the smallest useful slice.',
              },
              { title: 'Model', desc: 'Name things clearly. Build tested, documented layers.' },
              { title: 'Automate', desc: 'Ship pipelines with CI/CD, alerts, and playbooks.' },
              { title: 'Observe', desc: 'Track freshness, quality, and adoption. Improve weekly.' },
            ].map((s) => (
              <Card key={s.title}>
                <CardContent className="p-6">
                  <div className="text-lg font-semibold">{s.title}</div>
                  <p className="mt-2 text-slate-600">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why choose us */}
      <Section className="bg-[var(--bistre)] text-white">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="mb-2 text-xs font-semibold tracking-[.2em] text-white/70">
              WHY CHOOSE US
            </div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Pragmatic, dependable, outcome‑driven
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Senior attention',
                desc: 'Work directly with senior engineers and designers.',
              },
              { title: 'Simple architectures', desc: 'We remove moving parts, not add them.' },
              { title: 'Measure what matters', desc: 'KPIs tie to decisions, not dashboards.' },
            ].map((w) => (
              <Card key={w.title}>
                <CardContent className="p-6">
                  <div className="text-lg font-semibold">{w.title}</div>
                  <p className="mt-2 text-white/80">{w.desc}</p>
                </CardContent>
              </Card>
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
