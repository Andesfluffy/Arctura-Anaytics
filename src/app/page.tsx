import Link from 'next/link'
import { PhotoHero } from '@/components/photo-hero'
import { Section } from '@/components/section'
import { Container } from '@/components/container'
import { Card, CardContent } from '@/components/ui/card'
import { HoverLift } from '@/components/hover-lift'
import { Glow } from '@/components/glow'
import { Button } from '@/components/ui/button'
import { ScanText, GitBranch, BarChart3 } from 'lucide-react'

export const dynamic = 'force-static'

export default async function HomePage() {
  return (
    <main id="content">
      <PhotoHero />

      {/* Capabilities: Digitize, Integrate, Analyze */}
      <Section id="what" tone="light">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="mb-2 text-xs font-semibold tracking-[.2em] text-slate-500">
              WHAT WE DO
            </div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              We build the foundations for trusted data
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <HoverLift>
              <Card tone="glass" interactive>
                <CardContent className="p-6">
                  <div className="mb-3 h-1 w-12 rounded-full gradient" />
                  <h3 className="text-xl font-semibold">Digitize</h3>
                  <p className="mt-3 text-space_cadet-700">
                    Turn paper and siloed files into trustworthy datasets.
                  </p>
                  <ul className="mt-3 space-y-1 text-space_cadet-700">
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
                  <p className="mt-3 text-space_cadet-700">
                    Connect apps and warehouses with reliable pipelines.
                  </p>
                  <ul className="mt-3 space-y-1 text-space_cadet-700">
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
                  <h3 className="text-xl font-semibold">Analyze</h3>
                  <p className="mt-3 text-space_cadet-700">
                    Build a shared language for decisions that stick.
                  </p>
                  <ul className="mt-3 space-y-1 text-space_cadet-700">
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
      <Section tone="light">
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
      <Section tone="light">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="mb-2 text-xs font-semibold tracking-[.2em] text-slate-500">
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
                  <p className="mt-2 text-slate-700">{w.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="light">
        <Container>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-soft">
            <h3 className="text-2xl font-semibold">Let’s build your data advantage</h3>
            <p className="mt-2 text-slate-600">
              Tell us where you’re headed. We’ll help you get there faster.
            </p>
            <div className="mt-6 inline-flex gap-3">
              <Glow>
                <Button asChild variant="coral" shape="pill">
                  <Link href="/contact">Start the conversation</Link>
                </Button>
              </Glow>
              <Button asChild variant="outline" shape="pill">
                <Link href="/about">About us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}
