import { Container } from '@/components/container'
import { Section, SectionHeader } from '@/components/section'
import Link from 'next/link'
import { getRoles } from '@/lib/roles'
import { ApplyForm } from '@/components/apply-form'
import { HoverLift } from '@/components/hover-lift'

export default async function CareersPage() {
  const roles = await getRoles()
  return (
    <main id="content">
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
                  className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08]"
                >
                  <h3 className="text-lg font-semibold">{r.title}</h3>
                  <p className="text-sm text-slate-400">{r.location} • {r.type}</p>
                  <p className="mt-2 text-slate-300">{r.summary}</p>
                </Link>
              </HoverLift>
            ))}
          </div>
          <p className="mt-8 text-slate-300">
            Don’t see a perfect fit? <a className="underline" href="#apply">Send us your CV</a>
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
