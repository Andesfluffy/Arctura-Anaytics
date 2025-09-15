import { Container } from '@/components/container'
import { Section, SectionHeader } from '@/components/section'

export default function SolutionsPage() {
  return (
    <main id="content">
      <Section>
        <Container>
          <SectionHeader
            title="Solutions"
            subtitle="Accelerators and services that meet you where you are."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <Card
              title="Analytics Strategy"
              points={['Data operating model and governance', 'Platform roadmaps and cost optimization', 'Change management and enablement']}
            />
            <Card
              title="Data Engineering"
              points={["Lakehouse & real-time pipelines", 'dbt, Spark, Airflow, Kafka', 'Quality, observability, CI/CD']}
            />
            <Card
              title="BI Dashboards"
              points={['Power BI, Looker, Tableau', 'Metrics layer & data modeling', 'Embedded analytics']}
            />
            <Card
              title="AI / ML"
              points={["ML platforms & MLOps", 'Forecasting & optimization', 'Pragmatic generative AI']}
            />
          </div>
        </Container>
      </Section>
    </main>
  )
}

function Card({ title, points }: { title: string; points: string[] }) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2 text-slate-300">
        {points.map((p) => (
          <li key={p}>• {p}</li>
        ))}
      </ul>
    </article>
  )
}

