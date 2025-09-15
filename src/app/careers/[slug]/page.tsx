import { Container } from '@/components/container'
import { Section, SectionHeader } from '@/components/section'
import { getRole, getRoles } from '@/lib/roles'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ApplyForm } from '@/components/apply-form'
import { BreadcrumbJsonLd } from '@/lib/seo'

export async function generateStaticParams() {
  const roles = await getRoles()
  return roles.map((r) => ({ slug: r.slug }))
}

export default async function RolePage({ params }: { params: { slug: string } }) {
  const role = await getRole(params.slug)
  if (!role) notFound()
  return (
    <main id="content">
      <Section>
        <Container>
          <BreadcrumbJsonLd
            items={[
              { name: 'Home', item: '/' },
              { name: 'Careers', item: '/careers' },
              { name: role.title, item: `/careers/${role.slug}` }
            ]}
          />
          <SectionHeader title={role.title} subtitle={`${role.location} • ${role.type}`} />
          <div className="prose prose-invert max-w-none">
            <h3>About the role</h3>
            <p>{role.summary}</p>
            {role.responsibilities?.length ? (
              <>
                <h4>Responsibilities</h4>
                <ul>
                  {role.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </>
            ) : null}
            {role.requirements?.length ? (
              <>
                <h4>Requirements</h4>
                <ul>
                  {role.requirements.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </>
            ) : null}
            <p>
              Ready to apply? <Link href="#apply" className="underline">Submit your application</Link>.
            </p>
          </div>
        </Container>
      </Section>
      <Section id="apply">
        <Container>
          <SectionHeader title="Apply now" subtitle="Tell us a bit about you." />
          <ApplyForm />
        </Container>
      </Section>
    </main>
  )
}
