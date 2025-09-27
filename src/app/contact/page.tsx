"use client"

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarCheck,
  Clock,
  Handshake,
  Megaphone,
  ShieldCheck,
  Sparkles
} from 'lucide-react'

import { Container } from '@/components/container'
import { Section, SectionHeader } from '@/components/section'
import { Input, Textarea } from '@/components/forms/fields'
import { Button } from '@/components/ui/button'
import { ParticleField } from '@/components/particles'
import { contactSchema, type ContactInput } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const contactStreams = [
  {
    title: 'Mission partnerships',
    description:
      'Executive leaders seeking a fortified data platform, digital service redesign, or emergency stabilisation.',
    icon: Handshake,
    email: 'mission@arctura-analytics.com',
    meta: ['Dedicated partner in 48 hours', 'Strategic briefing deck in 10 days'],
    cta: { label: 'Schedule a briefing', href: 'mailto:mission@arctura-analytics.com' }
  },
  {
    title: 'Media & speaking',
    description:
      'Press, event curators, and policy forums ready to explore resilient civic technology and analytics.',
    icon: Megaphone,
    email: 'press@arctura-analytics.com',
    meta: ['Keynotes, panels, op-eds', 'Rapid insights & research highlights'],
    cta: { label: 'Request commentary', href: 'mailto:press@arctura-analytics.com' }
  },
  {
    title: 'Careers & talent network',
    description:
      'Designers, engineers, strategists, and delivery leaders who want to champion public impact missions.',
    icon: BriefcaseBusiness,
    email: 'talent@arctura-analytics.com',
    meta: ['Hybrid squads across North America', 'Mission-aligned talent community'],
    cta: { label: 'Explore open roles', href: '/careers', internal: true }
  }
]

const responseTimeline = [
  {
    title: 'Submit your mandate',
    description:
      'Share objectives, constraints, and critical deadlines. The more context you provide, the more precise our response.',
    icon: Sparkles
  },
  {
    title: 'Executive clarity within 24 hours',
    description:
      'Our partner team reviews your message, assembles domain specialists, and replies with next-step options.',
    icon: Clock
  },
  {
    title: 'Co-create the path',
    description:
      'In a 45-minute working session we map the engagement spine—governance, delivery cadence, and immediate wins.',
    icon: CalendarCheck
  },
  {
    title: 'Launch with confidence',
    description:
      'A dedicated crew stands up rituals, dashboards, and secure environments so momentum compounds from week one.',
    icon: ShieldCheck
  }
]

const readinessSignals = [
  'Critical initiatives that demand measurable policy outcomes.',
  'Complex data estates that must be governed without slowing delivery.',
  'Cross-functional teams who need alignment, cadence, and modern tooling.',
  'Communities counting on trusted digital services to stay resilient.'
]

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) })
  const [serverError, setServerError] = useState<string>('')

  async function onSubmit(values: ContactInput) {
    setServerError('')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(values)
    })
    if (res.ok) {
      reset()
      setServerError('')
    } else {
      const data = await res.json().catch(() => null)
      setServerError(data?.error || 'Something went wrong. Please try again.')
    }
  }

  return (
    <main id="content" className="bg-[color:var(--bg)] text-[color:var(--fg)]">
      <Section bleed tone="light" className="relative overflow-hidden py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,118,78,0.32),transparent_56%),radial-gradient(circle_at_90%_12%,rgba(174,60,56,0.28),transparent_58%),linear-gradient(160deg,rgba(18,6,8,0.96),rgba(5,2,3,0.88))]"
          aria-hidden
        />
        <ParticleField className="absolute inset-0 opacity-25" aria-hidden />
        <Container className="relative z-[1] grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-muted">
              Start the signal
            </span>
            <h1 className="text-balance text-4xl font-black leading-tight text-[color:var(--ink)] sm:text-5xl lg:text-6xl">
              Let’s ignite momentum for your next mission.
            </h1>
            <p className="max-w-2xl text-lg text-muted">
              Whether you are stabilising critical services, weaving data into decisive policy, or building the next platform for millions—our team assembles fast, listens deeply, and co-creates a path that endures.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="surface-card rounded-3xl border border-[color:var(--border)] p-6 shadow-soft">
                <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-muted">Average response</h2>
                <p className="mt-3 text-2xl font-semibold text-[color:var(--ink)]">&lt; 18 hours</p>
                <p className="mt-2 text-sm text-muted">
                  Every inquiry is triaged by a partner who has led large-scale civic transformations.
                </p>
              </div>
              <div className="surface-card rounded-3xl border border-[color:var(--border)] p-6 shadow-soft">
                <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-muted">Engagement footprint</h2>
                <p className="mt-3 text-2xl font-semibold text-[color:var(--ink)]">30+ municipalities</p>
                <p className="mt-2 text-sm text-muted">
                  From rapid response war rooms to long-horizon modernisation, we cover the spectrum.
                </p>
              </div>
            </div>
          </div>
          <div className="surface-panel h-full rounded-[32px] border border-[color:var(--border)] bg-[linear-gradient(150deg,rgba(20,10,14,0.9),rgba(8,4,6,0.88))] p-8 shadow-[0_46px_140px_rgba(8,3,6,0.5)]">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-muted">
              <ArrowUpRight className="h-4 w-4 text-[color:var(--accent-amber)]" aria-hidden />
              Direct partner access
            </div>
            <p className="mt-5 text-lg font-semibold text-[color:var(--ink)]">
              hello@arctura-analytics.com
            </p>
            <p className="mt-2 text-sm text-muted">
              Prefer a direct channel? Email us and the right team will respond with next steps and a calendar link.
            </p>
            <dl className="mt-6 grid gap-4 text-sm text-muted">
              <div className="flex items-start gap-3">
                <Clock className="mt-[2px] h-4 w-4 text-[color:var(--accent-amber)]" aria-hidden />
                <div>
                  <dt className="font-semibold text-[color:var(--ink)]">Response window</dt>
                  <dd className="mt-1">Monday–Friday, 8:00–20:00 ET</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="mt-[2px] h-4 w-4 text-[color:var(--accent-amber)]" aria-hidden />
                <div>
                  <dt className="font-semibold text-[color:var(--ink)]">Special handling</dt>
                  <dd className="mt-1">Critical incidents receive an executive response within 2 hours.</dd>
                </div>
              </div>
            </dl>
            <Link
              href="/careers"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-muted transition hover:text-[color:var(--ink)]"
            >
              Join the mission
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-soft">
            <SectionHeader
              title="Tell us about your mandate"
              subtitle="We safeguard every detail and only use your information to organise the right response team."
            />
            <form
              onSubmit={handleSubmit(onSubmit)}
              action="/api/contact"
              method="post"
              className="grid gap-6 md:grid-cols-2"
            >
              <label className="grid gap-2">
                <span className="text-sm text-muted-strong">Name</span>
                <Input
                  placeholder="Ada Lovelace"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  {...register('name')}
                />
                {errors.name && <span id="name-error" className="text-sm text-red-400">{errors.name.message}</span>}
              </label>
              <label className="grid gap-2">
                <span className="text-sm text-muted-strong">Email</span>
                <Input
                  type="email"
                  placeholder="you@organization.gov"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  {...register('email')}
                />
                {errors.email && <span id="email-error" className="text-sm text-red-400">{errors.email.message}</span>}
              </label>
              <label className="grid gap-2 md:col-span-2">
                <span className="text-sm text-muted-strong">Organization</span>
                <Input placeholder="City of Aurora" {...register('company')} />
              </label>
              <label className="grid gap-2 md:col-span-2">
                <span className="text-sm text-muted-strong">How can we help?</span>
                <Textarea
                  rows={6}
                  placeholder="Share goals, constraints, timelines, and stakeholders."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  {...register('message')}
                />
                {errors.message && (
                  <span id="message-error" className="text-sm text-red-400">{errors.message.message as string}</span>
                )}
              </label>
              <div className="hidden" aria-hidden>
                <Input tabIndex={-1} autoComplete="off" placeholder="Your website" {...register('website')} />
              </div>
              <div className="md:col-span-2 flex flex-wrap items-center gap-4">
                <Button variant="gradient" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending…' : 'Send message'}
                </Button>
                <div className="text-sm text-muted" role="status" aria-live="polite">
                  {isSubmitSuccessful && <span>Thanks — we’ll be in touch shortly.</span>}
                  {serverError && <span className="text-red-400">{serverError}</span>}
                </div>
              </div>
            </form>
            <p className="mt-6 text-sm text-muted">
              Prefer a different channel? Email <a className="underline-offset-4 hover:underline" href="mailto:hello@arctura-analytics.com">hello@arctura-analytics.com</a> or call our rapid response line at <span className="whitespace-nowrap">+1 (437) 555-0142</span>.
            </p>
          </div>
          <div className="surface-card h-full rounded-[32px] border border-[color:var(--border)] p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-[color:var(--ink)]">Signals we’re built for</h2>
            <ul className="mt-6 space-y-4 text-sm text-muted">
              {readinessSignals.map((signal) => (
                <li key={signal} className="flex items-start gap-3">
                  <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-[color:var(--accent-amber)]" aria-hidden />
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5 text-sm text-muted">
              <p>
                We routinely partner with CIOs, Chiefs of Staff, Commissioners, and transformation task forces. Introductions from existing partners fast-track your request—just mention their name in the message.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <SectionHeader
            title="Choose the path that fits your momentum"
            subtitle="Every inquiry routes to a specialist stream so we can respond with precision and pace."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {contactStreams.map((stream) => (
              <div
                key={stream.title}
                className="surface-card flex h-full flex-col rounded-[28px] border border-[color:var(--border)] p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-[0_36px_120px_rgba(8,3,6,0.45)]"
              >
                <stream.icon className="h-8 w-8 text-[color:var(--accent-amber)]" aria-hidden />
                <h3 className="mt-5 text-lg font-semibold text-[color:var(--ink)]">{stream.title}</h3>
                <p className="mt-3 text-sm text-muted">{stream.description}</p>
                <p className="mt-4 text-sm font-semibold text-[color:var(--ink)]">{stream.email}</p>
                <ul className="mt-4 space-y-2 text-xs uppercase tracking-[0.28em] text-muted">
                  {stream.meta.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--accent-amber)]" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                {stream.cta.internal ? (
                  <Link
                    href={stream.cta.href}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted transition hover:text-[color:var(--ink)]"
                  >
                    {stream.cta.label}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                ) : (
                  <a
                    href={stream.cta.href}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted transition hover:text-[color:var(--ink)]"
                  >
                    {stream.cta.label}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </a>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light" className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,130,88,0.28),transparent_60%),radial-gradient(circle_at_80%_105%,rgba(170,54,52,0.22),transparent_65%)]"
          aria-hidden
        />
        <Container className="relative z-[1] grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
          <div className="surface-panel rounded-[32px] border border-[color:var(--border)] bg-[linear-gradient(150deg,rgba(18,6,8,0.86),rgba(8,4,6,0.92))] p-8 shadow-[0_38px_120px_rgba(8,3,6,0.6)]">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">How we move from spark to launch</h2>
            <p className="mt-4 text-sm text-muted">
              Progress is orchestrated in deliberate stages, tuned to the urgency and stakes of civic missions. Expect rigor, compassion, and momentum at every step.
            </p>
          </div>
          <div className="grid gap-6">
            {responseTimeline.map((item, index) => (
              <div
                key={item.title}
                className="relative rounded-[28px] border border-[color:var(--border)] bg-[color:var(--surface)] p-7 shadow-soft"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)]">
                    <item.icon className="h-6 w-6 text-[color:var(--accent-amber)]" aria-hidden />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-muted">Phase {index + 1}</div>
                    <h3 className="mt-2 text-lg font-semibold text-[color:var(--ink)]">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  )
}
