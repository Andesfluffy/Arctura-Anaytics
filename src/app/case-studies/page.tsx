import { Container } from '@/components/container'
import { Section, SectionHeader } from '@/components/section'
import { getCaseStudies } from '@/lib/mdx'
import { CaseStudiesGrid } from '@/components/case-studies-grid'

export default async function CaseStudiesIndex() {
  const items = await getCaseStudies()
  return (
    <main id="content">
      <Section>
        <Container>
          <SectionHeader title="Case Studies" subtitle="Selected work and outcomes." />
          {/* Client-side filterable grid */}
          <CaseStudiesGrid items={items} />
        </Container>
      </Section>
    </main>
  )
}
