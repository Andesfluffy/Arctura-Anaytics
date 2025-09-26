'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Flame, Mountain, Sparkles } from 'lucide-react'

import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { HoverLift } from '@/components/hover-lift'
import { ParticleField } from '@/components/particles'
import { EmailCapture } from '@/components/email-capture'

const heroStats = [
  { value: '30+', label: 'Civic platforms reignited' },
  { value: '12M+', label: 'Residents served with confidence' },
  { value: '4.8 / 5', label: 'Executive partnership score' }
]

const commitments = [
  {
    title: 'Molten clarity',
    description:
      'We fuse fragmented data into a singular, decision-ready source so leadership can move with conviction.',
    icon: Flame
  },
  {
    title: 'Elemental trust',
    description: 'Governance, security, and ethics are embedded from the first workshop to the last dashboard.',
    icon: Mountain
  },
  {
    title: 'Enduring momentum',
    description: 'Coaching, rituals, and modern delivery keep every initiative glowing long after launch.',
    icon: Sparkles
  }
]

export const dynamic = 'force-static'

export default function HomePage() {
  return (
    <main id="content" className="bg-[#040203] text-white">
      <section className="relative isolate overflow-hidden">
        <Image
          src="/brand/georgie-cobbs-muOHbrFGEQY-unsplash.jpg"
          alt="Team collaborating around a large data wall"
          fill
          priority
          quality={95}
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_10%_-10%,rgba(255,111,60,0.45),transparent_45%),radial-gradient(circle_at_90%_10%,rgba(255,64,64,0.25),transparent_55%),linear-gradient(to_bottom,#040203,rgba(4,2,3,0.92),#06040a)]"
          aria-hidden
        />
        <ParticleField className="absolute inset-0 opacity-35" aria-hidden />
        <Container className="relative z-[1] flex min-h-[90vh] flex-col justify-center gap-12 py-24">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/70">
              Arctura Analytics
            </span>
            <h1 className="text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Ignite conviction with data platforms forged for critical missions.
            </h1>
            <p className="max-w-2xl text-lg text-white/70">
              We transform fragmented civic systems into living, intelligent infrastructures—quietly powerful, fiercely secure, and ready for the next mandate.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff7b39] via-[#ff5a36] to-[#ffb347] px-6 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-black shadow-[0_22px_60px_rgba(255,91,54,0.45)] transition hover:-translate-y-0.5"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:border-white/50 hover:text-white"
              >
                Discover our story
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white/70 backdrop-blur">
                <div className="text-2xl font-semibold text-white">{stat.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.28em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
          <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(70%_120%_at_50%_-10%,rgba(255,84,61,0.35),transparent_70%)]" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-[radial-gradient(60%_120%_at_50%_120%,rgba(255,110,60,0.18),transparent_70%)]" aria-hidden />
        </div>
        <Container className="space-y-12">
          <div className="max-w-2xl space-y-5">
            <h2 className="text-3xl font-black sm:text-4xl">Strategy shaped in the crucible.</h2>
            <p className="text-base text-white/70 sm:text-lg">
              Every programme is engineered to withstand scrutiny, scale gracefully, and elevate the people it serves. We keep the story simple so the impact can be profound.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {commitments.map((item) => (
              <HoverLift key={item.title}>
                <div className="h-full rounded-[28px] border border-white/12 bg-[color:rgba(12,7,14,0.92)] p-7 shadow-[0_40px_120px_rgba(11,4,9,0.65)] transition">
                  <item.icon className="h-8 w-8 text-[#ff8254]" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.description}</p>
                </div>
              </HoverLift>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-15%] top-12 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,122,63,0.22),transparent_68%)] blur-[120px]" aria-hidden />
          <div className="absolute right-[-12%] bottom-8 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,182,122,0.18),transparent_70%)] blur-[120px]" aria-hidden />
        </div>
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/70">
              Begin the ascent
            </span>
            <h2 className="text-3xl font-black sm:text-4xl text-white">Let’s channel your next mandate into momentum.</h2>
            <p className="text-base text-white/70 sm:text-lg">
              Share the challenges in front of you. We respond with a tailored path, clear governance, and the team who will stand with you from spark to sustained impact.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-white/60">
              <span className="rounded-full border border-white/15 px-4 py-2 uppercase tracking-[0.32em]">Discovery in 10 days</span>
              <span className="rounded-full border border-white/15 px-4 py-2 uppercase tracking-[0.32em]">Policy-ready roadmaps</span>
              <span className="rounded-full border border-white/15 px-4 py-2 uppercase tracking-[0.32em]">On-site + remote squads</span>
            </div>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/60 transition hover:text-white"
            >
              Meet the people behind the work
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="rounded-[32px] border border-white/12 bg-[linear-gradient(135deg,rgba(12,7,14,0.95),rgba(255,113,68,0.2))] p-10 shadow-[0_44px_140px_rgba(10,5,11,0.65)]">
            <h3 className="text-2xl font-semibold text-white">Plan a consultation.</h3>
            <p className="mt-4 text-sm text-white/70 sm:text-base">
              Outline your objectives and timeframes—we will align the specialists and spark the engagement.
            </p>
            <EmailCapture className="mt-6" submitLabel="Ignite the conversation" />
          </div>
        </Container>
      </Section>
    </main>
  )
}
