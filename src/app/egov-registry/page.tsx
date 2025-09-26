import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { KPIStat } from '@/components/ui/kpi-stat'
import { SectionTitle } from '@/components/ui/section-title'
import { Glow } from '@/components/glow'

export const metadata = {
  title: 'eGovRegistry — Digital Public Records for Nigeria',
  description:
    'Digitize, manage, and verify public records across Nigerian ministries with secure portals, QR verification, and APIs.'
}

export default function EgovRegistryPage() {
  return (
    <main id="content">
      {/* Hero */}
      <Section
        bleed
        className="relative overflow-hidden bg-[#070507] text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,106,53,0.25),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,195,113,0.2),transparent_40%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#050308]/92 via-[#1b0609]/70 to-[#06050c]/90" />
        <Container className="relative z-[1] py-20 sm:py-24 lg:py-32">
          <div className="max-w-3xl space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-white/80">
              Digital platform initiative
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                eGovRegistry
              </h1>
              <p className="max-w-2xl text-balance text-base text-white/80 sm:text-lg">
                Nigeria’s sovereign registry spine designed for certainty. We choreograph secure data flows, discreet citizen services, and volcanic resilience so public missions stay powered even under pressure.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200/80">{item.kicker}</span>
                  <h2 className="mt-2 text-lg font-semibold text-white">{item.title}</h2>
                  <p className="mt-1 text-xs text-white/70">{item.copy}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Glow>
                <Button
                  asChild
                  variant="gradient"
                  shape="pill"
                  className="bg-gradient-to-r from-[#ff6b35] via-[#ff9245] to-[#ffd166] px-6 py-3 text-xs uppercase tracking-[0.28em] text-slate-950 shadow-[0_20px_60px_rgba(255,107,53,0.35)] hover:from-[#ff783f] hover:via-[#ff9d4c] hover:to-[#ffdc7a]"
                >
                  <Link href="/contact">Request a conversation</Link>
                </Button>
              </Glow>
              <Button
                asChild
                variant="outline"
                shape="pill"
                className="border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 hover:text-white"
              >
                <Link href="#capabilities">Explore the platform</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Promise */}
      <Section>
        <Container className="space-y-12 text-white">
          <SectionTitle
            title="Anchored in trust, continuity, and service"
            subtitle="Every module is shaped to protect public confidence while fuelling decisive action."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {promise.map((item) => (
              <Card key={item.title} tone="glass" interactive className="border-white/20 bg-white/10">
                <CardContent className="flex h-full flex-col gap-3 p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-200/80">{item.kicker}</span>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/75">{item.copy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Outcomes */}
      <Section tone="light" className="bg-[#f8f5f2]">
        <Container className="space-y-10">
          <SectionTitle
            title="Results that leaders measure"
            subtitle="Meaningful improvements for registrars, citizens, and oversight bodies."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item) => (
              <KPIStat key={item.label} label={item.label} value={item.value} delta={item.delta} trend="up" />
            ))}
          </div>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section id="capabilities" className="bg-[#12090c]">
        <Container className="space-y-12 text-white">
          <SectionTitle
            title="Core capabilities"
            subtitle="Composable layers that interlock discreetly to stabilise mission-critical services."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {capabilities.map((capability) => (
              <Card
                key={capability.title}
                tone="glass"
                interactive
                className="border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent"
              >
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{capability.title}</h3>
                    <p className="mt-1 text-sm text-white/75">{capability.description}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-white/70">
                    {capability.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pillars */}
      <Section tone="light" className="bg-[#fdf1e4]">
        <Container className="space-y-12">
          <SectionTitle
            title="Platform pillars"
            subtitle="Disciplines that keep the programme resilient from day one."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="border-transparent bg-white/80 backdrop-blur">
                <CardContent className="flex h-full flex-col gap-3 p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[#9a3412]">{pillar.kicker}</span>
                  <h3 className="text-lg font-semibold text-[#1b0b0a]">{pillar.title}</h3>
                  <p className="text-sm text-[#3d1a16]">{pillar.copy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Engagement */}
      <Section className="bg-[#0a0608]">
        <Container className="space-y-12 text-white">
          <SectionTitle
            title="Engagement approach"
            subtitle="A measured, co-created rollout that respects public mandates and local expertise."
          />
          <ol className="space-y-6 text-white/85">
            {engagement.map((step) => (
              <li key={step.title} className="rounded-2xl border border-white/15 bg-white/10 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-200/80">
                  <span>{step.phase}</span>
                  <span>{step.horizon}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm text-white/75">{step.copy}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-[#1a0706] via-[#220a0d] to-[#10040a]">
        <Container>
          <div className="rounded-[28px] border border-white/10 bg-white/10 p-8 text-center backdrop-blur sm:p-10">
            <h3 className="text-2xl font-semibold text-white">Let’s shape a secure national registry</h3>
            <p className="mt-2 text-sm text-white/80 sm:text-base">
              Share your objectives and constraints. We respond with an executive brief, delivery lanes, and options for a discreet pilot.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Glow>
                <Button
                  asChild
                  variant="gradient"
                  shape="pill"
                  className="bg-gradient-to-r from-[#ff6b35] via-[#ff9245] to-[#ffd166] px-6 py-3 text-xs uppercase tracking-[0.28em] text-slate-950 hover:from-[#ff783f] hover:via-[#ff9d4c] hover:to-[#ffdc7a]"
                >
                  <Link href="/contact">Speak with our team</Link>
                </Button>
              </Glow>
              <Button
                asChild
                variant="outline"
                shape="pill"
                className="border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 hover:text-white"
              >
                <Link href="/case-studies">See our work</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}

const heroHighlights = [
  {
    kicker: 'Stability',
    title: 'Always-on records spine',
    copy: 'Operates across ministries with automated failover and encrypted continuity lanes.'
  },
  {
    kicker: 'Clarity',
    title: 'Trusted verification',
    copy: 'QR-secured attestations and role-aware portals keep third parties confident without oversharing.'
  },
  {
    kicker: 'Momentum',
    title: 'Leadership control rooms',
    copy: 'Executive dashboards and playbooks to guide reforms, risk, and communications in real time.'
  }
]

const promise = [
  {
    kicker: 'Integrity',
    title: 'Confidence in every record',
    copy: 'Digital custody chains, tamper-evident verification, and traceable approvals keep vital information reputable without revealing operational playbooks.'
  },
  {
    kicker: 'Continuity',
    title: 'Resilience for critical services',
    copy: 'Modular deployment supports gradual adoption, ensuring existing processes stay online while modern layers come to life.'
  },
  {
    kicker: 'Experience',
    title: 'User journeys that feel familiar',
    copy: 'Guided workflows respect how registrars and citizens already work, reducing friction and reinforcing trust in government touchpoints.'
  },
  {
    kicker: 'Oversight',
    title: 'Insight for leadership teams',
    copy: 'Executives see live service trends, compliance signals, and programme health without exposing sensitive citizen records.'
  },
  {
    kicker: 'Security',
    title: 'Sovereign-first operations',
    copy: 'Data residency and access controls reflect national mandates, enabling collaboration with full accountability.'
  },
  {
    kicker: 'Partnership',
    title: 'Co-created with local teams',
    copy: 'We bring global delivery methods and adapt them to the realities of Nigerian institutions, leaving teams empowered.'
  }
]

const outcomes = [
  {
    label: 'Issuance efficiency',
    value: 'Service-ready',
    delta: 'Digital-first playbooks'
  },
  {
    label: 'Verification confidence',
    value: 'High assurance',
    delta: 'Secure validation layers'
  },
  {
    label: 'Operational visibility',
    value: 'Executive dashboards',
    delta: 'Live programme insights'
  },
  {
    label: 'Citizen satisfaction',
    value: 'Experience-led',
    delta: 'Inclusive service design'
  }
]

const capabilities = [
  {
    title: 'Registry command centre',
    description: 'Unified oversight for high-stakes registries across ministries, LGAs, and agencies.',
    points: [
      'Role-based consoles with clear guardrails',
      'Digitised archives with controlled exposure',
      'Monitoring signals tailored to executive needs'
    ]
  },
  {
    title: 'Citizen & partner services',
    description: 'Self-service portals and concierge support tuned for citizens, institutions, and vetted verifiers.',
    points: [
      'Guided onboarding and request tracking',
      'Document verification experiences across channels',
      'Support workflows that protect sensitive actions'
    ]
  },
  {
    title: 'Insight-ready data fabric',
    description: 'Quality and lineage guardrails that future-proof analytics, reporting, and policy design.',
    points: [
      'Stewardship playbooks with measurable compliance',
      'Interoperability patterns for national identifiers',
      'Curated datasets for trusted sharing'
    ]
  },
  {
    title: 'Programme enablement',
    description: 'Change management and training paths that make adoption stick across departments.',
    points: [
      'Capability academies for registrars and leadership',
      'Communication kits for public-facing updates',
      'Executive governance cadence and reporting'
    ]
  }
]

const pillars = [
  {
    kicker: 'Design',
    title: 'Human-centred experiences',
    copy: 'We codify inclusive journeys from enrolment to verification, reinforcing trust for every interaction.'
  },
  {
    kicker: 'Technology',
    title: 'Adaptive architecture',
    copy: 'Composable services that operate on cloud or sovereign infrastructure, all wrapped with observability and guardrails.'
  },
  {
    kicker: 'Governance',
    title: 'Measured programme control',
    copy: 'Decision frameworks, risk councils, and escalation paths that keep the initiative accountable and future-proof.'
  }
]

const engagement = [
  {
    phase: 'Orientation',
    horizon: 'Weeks 0–4',
    title: 'Define the mandate',
    copy: 'We capture policy objectives, service backlogs, and critical risks alongside your executive sponsors to align on a shared ambition.'
  },
  {
    phase: 'Co-Design',
    horizon: 'Weeks 5–12',
    title: 'Shape the pilot footprint',
    copy: 'Joint squads design the target journeys, data flows, and security boundaries while safeguarding existing operations.'
  },
  {
    phase: 'Mobilise',
    horizon: 'Quarter 2',
    title: 'Launch and transition',
    copy: 'We orchestrate rollout, train frontline teams, and embed measurement so ministries can expand confidently.'
  }
]

