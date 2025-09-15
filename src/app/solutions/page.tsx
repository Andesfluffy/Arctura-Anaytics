"use client"
import { Container } from '@/components/container'
import { Button } from '@/components/ui/button'
import { Section, SectionHeader } from '@/components/section'
import { motion } from 'framer-motion'

export default function SolutionsPage() {
  return (
    <main id="content">
      <Section className="bg-gradient-to-br from-[var(--space-cadet)] via-[var(--lion)] to-[var(--bistre)] py-16 md:py-24 text-white">
        <Container>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">Industry-Leading Data Solutions</h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-6">Unlock the full potential of your data with Arctura Analytics. Our accelerators and expert services empower you to move faster, make smarter decisions, and stay ahead of the competition.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
              <Testimonial
                quote="Arctura transformed our analytics. We now make decisions in hours, not weeks."
                author="Chief Data Officer, Fortune 500 Retailer"
              />
              <Testimonial
                quote="Their engineering team is world-class. Our pipelines are robust and scalable."
                author="VP of Engineering, Fintech Unicorn"
              />
            </div>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: 'Analytics Strategy',
                points: [
                  'Data operating model & governance',
                  'Platform roadmaps & cost optimization',
                  'Change management & enablement',
                ],
                color: 'from-[var(--lion)] to-[var(--space-cadet)]',
              },
              {
                title: 'Data Engineering',
                points: [
                  'Lakehouse & real-time pipelines',
                  'dbt, Spark, Airflow, Kafka',
                  'Quality, observability, CI/CD',
                ],
                color: 'from-[var(--space-cadet)] to-[var(--bistre)]',
              },
              {
                title: 'BI Dashboards',
                points: [
                  'Power BI, Looker, Tableau',
                  'Metrics layer & data modeling',
                  'Embedded analytics',
                ],
                color: 'from-[var(--bistre)] to-[var(--lion)]',
              },
              {
                title: 'AI / ML',
                points: [
                  'ML platforms & MLOps',
                  'Forecasting & optimization',
                  'Pragmatic generative AI',
                ],
                color: 'from-[var(--lion)] to-[var(--space-cadet)]',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-8 shadow-xl bg-gradient-to-br ${card.color} text-white flex flex-col items-start animate-fade-in`}
              >
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <ul className="space-y-2 text-white/90 text-base mb-4">
                  {card.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
                <Button asChild variant="gradient" shape="pill" className="mt-auto">
                  <a href="/contact">Get Started</a>
                </Button>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  )
}


function Testimonial({ quote, author }: { quote: string; author: string }) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="rounded-xl bg-white/10 p-6 text-left shadow-lg max-w-md"
    >
      <p className="text-lg font-semibold text-white mb-2">“{quote}”</p>
      <footer className="text-sm text-white/70">{author}</footer>
    </motion.blockquote>
  )
}

