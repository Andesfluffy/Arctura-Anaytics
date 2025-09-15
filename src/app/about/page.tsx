import { Container } from '@/components/container'
import { Section, SectionHeader } from '@/components/section'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main id="content">
      <Section>
        <Container>
          <SectionHeader title="About Arctura" subtitle="Mission, values, timeline, and leadership." />
          <div className="prose prose-invert max-w-none">
            <h3>Mission</h3>
            <p>
              Turn data into decisions. We help organizations build modern data platforms and
              products that compound value over time through clear strategy, pragmatic engineering,
              and tight feedback loops.
            </p>
            <h3>Values</h3>
            <ul>
              <li>
                <strong>Outcomes over outputs:</strong> Focus on measurable impact, not deliverables.
              </li>
              <li>
                <strong>Default to transparency:</strong> Clear intent, open communication, visible work.
              </li>
              <li>
                <strong>Bias for simplicity:</strong> Simple systems survive; complexity is a cost.
              </li>
              <li>
                <strong>Earn trust, keep promises:</strong> Be reliable, respectful, and direct.
              </li>
            </ul>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold">Timeline</h3>
              <ol className="relative border-l border-white/10 pl-5">
                <li className="mb-6">
                  <div className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-white" />
                  <time className="text-sm text-slate-400">2025</time>
                  <div className="font-medium">Launched Arctura</div>
                  <p className="text-slate-300">Founded to deliver pragmatic, high-leverage data work.</p>
                </li>
                <li className="mb-6">
                  <div className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-white" />
                  <time className="text-sm text-slate-400">2024</time>
                  <div className="font-medium">Scaled platform programs</div>
                  <p className="text-slate-300">Led lakehouse, MLOps, and analytics initiatives across sectors.</p>
                </li>
                <li>
                  <div className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-white" />
                  <time className="text-sm text-slate-400">2022</time>
                  <div className="font-medium">Prior experience</div>
                  <p className="text-slate-300">Years shipping data and ML systems at growth companies.</p>
                </li>
              </ol>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Leadership</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Alex Carter', role: 'Founder & Principal', img: 'https://placehold.co/128x128' },
                  { name: 'Riya Patel', role: 'Head of Data Science', img: 'https://placehold.co/128x128' },
                  { name: 'Sam Nguyen', role: 'Data Platform Lead', img: 'https://placehold.co/128x128' },
                  { name: 'Maya Kim', role: 'Analytics Lead', img: 'https://placehold.co/128x128' }
                ].map((p) => (
                  <div key={p.name} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                    <Image
                      src={p.img}
                      alt={p.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium">{p.name}</div>
                      <div className="text-sm text-slate-400">{p.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}
