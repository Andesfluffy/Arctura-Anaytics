import { Container } from '@/components/container'
import { Section, SectionHeader } from '@/components/section'
import Link from 'next/link'
import { getRoles } from '@/lib/roles'
import { ApplyForm } from '@/components/apply-form'
import { HoverLift } from '@/components/hover-lift'

export default async function CareersPage() {
  const roles = await getRoles()
  return (
    <main id="content" className="bg-[color:var(--bg)] text-[color:var(--fg)]">
      <Section>
        <Container>
          <SectionHeader
            title="Careers"
            subtitle="Build meaningful data products. Grow with people who care."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {roles.map((r) => (
              <HoverLift key={r.slug}>
                <Link
                  href={`/careers/${r.slug}`}
                  className="surface-card rounded-3xl border border-[color:var(--border)] p-6 transition hover:-translate-y-0.5"
                >
                  <h3 className="text-lg font-semibold text-[color:var(--ink)]">{r.title}</h3>
                  <p className="text-sm text-muted">{r.location} • {r.type}</p>
                  <p className="mt-2 text-muted">{r.summary}</p>
                </Link>
              </HoverLift>
            ))}
          </div>
          <p className="mt-8 text-muted">
            Don’t see a perfect fit?{' '}
            <a className="underline" href="#apply">
              Send us your CV
            </a>
          </p>
        </Container>
      </Section>
      <Section id="apply">
        <Container>
          <SectionHeader title="Simple apply" subtitle="We’ll get back within 3–5 days." />
          <ApplyForm />
        </Container>
      </Section>
    </main>
  )
}
