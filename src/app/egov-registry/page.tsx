import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Section, SectionHeader } from '@/components/section'
import { SectionTitle } from '@/components/ui/section-title'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Glow } from '@/components/glow'
import { KPIStat } from '@/components/ui/kpi-stat'

export const metadata = {
  title: 'eGovRegistry — Digital Public Records for Nigeria',
  description:
    'Digitize, manage, and verify public records across Nigerian ministries with secure portals, QR verification, and APIs.'
}

export default function EgovRegistryPage() {
  return (
    <main id="content">
      {/* Hero */}
      <Section bleed className="bg-midnight">
        <Container className="py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="h1-fluid font-bold text-glacier">eGovRegistry</h1>
              <p className="subhead-fluid mt-4 text-glacier/90">
                Digital public records for Nigeria — verifiable certificates, faster service delivery,
                and trusted data across ministries.
              </p>
              <div className="mt-8 flex gap-3">
                <Glow>
                  <Button asChild variant="gradient" shape="pill">
                    <Link href="/contact">Request a pilot</Link>
                  </Button>
                </Glow>
                <Button asChild variant="outline" shape="pill">
                  <Link href="#modules">Explore modules</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Glow>
                <Image
                  src="https://images.unsplash.com/photo-1563986768623-36f9fce7ed3c?q=80&w=1600&auto=format&fit=crop"
                  alt="Secure records and infrastructure"
                  width={1200}
                  height={800}
                  className="h-auto w-full rounded-2xl object-cover"
                  priority
                />
              </Glow>
            </div>
          </div>
        </Container>
      </Section>

      {/* Vision / Problem */}
      <Section>
        <Container>
          <SectionTitle
            title="Built for integrity, speed, and access"
            subtitle="Replace paper bottlenecks with verifiable, API‑ready records."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Paper to digital',
                desc: 'Scan, OCR, and tag existing books and certificates. Versioned and encrypted storage.',
                img: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1200&auto=format&fit=crop'
              },
              {
                title: 'Tamper‑proof verification',
                desc: 'Unique QR on every record, verification portal, and optional blockchain hashing.',
                img: 'https://images.unsplash.com/photo-1557825835-70d97c4aa2d7?q=80&w=1200&auto=format&fit=crop'
              },
              {
                title: 'Connected by default',
                desc: 'APIs for NIN, BVN, banks, embassies, and courts. Role‑based access with full audit logs.',
                img: 'https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=1200&auto=format&fit=crop'
              }
            ].map((c) => (
              <Card key={c.title} tone="glass" interactive>
                <CardContent className="p-0">
                  <Image
                    src={c.img}
                    alt=""
                    width={1200}
                    height={800}
                    className="h-40 w-full rounded-t-xl object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{c.title}</h3>
                    <p className="mt-2 text-slate-300">{c.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* KPIs */}
      <Section tone="light">
        <Container>
          <SectionTitle title="Measurable outcomes" subtitle="Less fraud. Faster service. Lower cost." />
          <div className="grid gap-4 md:grid-cols-3">
            <KPIStat label="Fraud reduction" value=">70%" delta="QR + audit logs" trend="up" />
            <KPIStat label="Issuance time" value="minutes" delta="from days" trend="up" />
            <KPIStat label="Paper usage" value="−90%" delta="digitized archives" trend="up" />
          </div>
        </Container>
      </Section>

      {/* Modules */}
      <Section id="modules">
        <Container>
          <SectionTitle title="Modular platform" subtitle="Start with one registry; expand department by department." />
          <div className="grid gap-6 md:grid-cols-2">
            {modules.map((m) => (
              <Card key={m.title} tone="glass" interactive>
                <CardContent className="p-6">
                  <div className="mb-2 text-lg font-semibold">{m.title}</div>
                  <ul className="space-y-2 text-slate-300">
                    {m.points.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Architecture */}
      <Section tone="light">
        <Container>
          <SectionTitle title="Architecture" subtitle="Scale with confidence, on cloud or on‑prem." />
          <div className="grid gap-6 md:grid-cols-3">
            {architecture.map((a) => (
              <Card key={a.title}>
                <CardContent className="p-6">
                  <div className="text-lg font-semibold">{a.title}</div>
                  <p className="mt-2 text-slate-300">{a.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Roles */}
      <Section>
        <Container>
          <SectionTitle title="Roles & access" subtitle="Clear permissions for every stakeholder." />
          <div className="grid gap-6 md:grid-cols-2">
            {roles.map((r) => (
              <Card key={r.role} tone="glass">
                <CardContent className="p-6">
                  <div className="text-lg font-semibold">{r.role}</div>
                  <ul className="mt-2 space-y-1 text-slate-300">
                    {r.caps.map((c) => (
                      <li key={c}>• {c}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Monetization */}
      <Section tone="light">
        <Container>
          <SectionTitle title="Commercial model" subtitle="Transparent pricing for governments and verifiers." />
          <div className="grid gap-6 md:grid-cols-4">
            {pricing.map((p) => (
              <Card key={p.title}>
                <CardContent className="p-6">
                  <div className="text-lg font-semibold">{p.title}</div>
                  <p className="mt-2 text-slate-300">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Roadmap */}
      <Section>
        <Container>
          <SectionTitle title="Roadmap" subtitle="From pilot to national scale." />
          <ol className="relative border-l border-white/10 pl-5">
            {roadmap.map((r) => (
              <li key={r.title} className="mb-6">
                <div className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-white" />
                <div className="text-sm text-slate-400">{r.when}</div>
                <div className="font-medium">{r.title}</div>
                <p className="text-slate-300">{r.desc}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <h3 className="text-2xl font-semibold">Bring eGovRegistry to your ministry</h3>
            <p className="mt-2 text-slate-300">Schedule a discovery call and a 2‑week pilot plan.</p>
            <div className="mt-6 inline-flex gap-3">
              <Glow>
                <Button asChild variant="gradient" shape="pill">
                  <Link href="/contact">Request a pilot</Link>
                </Button>
              </Glow>
              <Button asChild variant="outline" shape="pill">
                <Link href="/case-studies">See outcomes</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}

const modules = [
  {
    title: 'Vital Records Registry',
    points: [
      'Application & issuance portal',
      'NPC integration',
      'Digitization of archived books',
      'Online reprint & verification'
    ]
  },
  {
    title: 'Land & Property Registry',
    points: [
      'Geo‑tagged cadastral maps',
      'Upload & search land titles, surveys, C‑of‑O',
      'Duplicate prevention & fraud checks'
    ]
  },
  {
    title: 'Judiciary Archive',
    points: [
      'Scanning & indexing of court cases',
      'Public access to judgments',
      'Case status tracker'
    ]
  },
  {
    title: 'Academic Records System',
    points: [
      'WAEC/NECO/university uploads',
      'Searchable registry for institutions',
      'Employer/embassy verification'
    ]
  },
  {
    title: 'Criminal Records DB',
    points: [
      'Secure police interface',
      'Biometric matching integration',
      'Inter‑agency collaboration'
    ]
  },
  {
    title: 'Revenue Certificates & Licensing',
    points: ['Receipts digitization & tracking', 'QR verification of tax/vehicle/business permits']
  }
]

const architecture = [
  { title: 'Core stack', desc: 'React + Tailwind frontend, Node/Django backend, PostgreSQL; Redis cache.' },
  { title: 'OCR & search', desc: 'Tesseract.js + Vision API for OCR. Fast search with indexes & tags.' },
  { title: 'Security', desc: 'RBAC, 2FA, JWT. Encrypted storage (S3 or on‑prem), versioning, audit trails.' }
]

const roles = [
  {
    role: 'Registrar (LGA/Ministry)',
    caps: ['Upload, edit, approve documents', 'Issue certificates', 'View activity logs']
  },
  { role: 'Auditor', caps: ['View reports', 'Review access logs', 'Flag anomalies'] },
  { role: 'Super Admin', caps: ['Assign roles', 'Configure modules', 'Set retention policies'] },
  { role: 'Citizen', caps: ['Request & verify documents', 'Secure reprints'] },
  { role: 'External Verifier', caps: ['Scan QR', 'API lookups'] }
]

const pricing = [
  { title: 'Government contracts', desc: '₦20M–₦150M per LGA or State Ministry depending on scope.' },
  { title: 'Annual licensing', desc: '₦5M–₦20M per module per agency/year for support and upgrades.' },
  { title: 'API verification', desc: '₦100–₦300 per verification for embassies, schools, employers.' },
  { title: 'Citizen reissue', desc: '₦500–₦2,000 per digital certificate reprint.' }
]

const roadmap = [
  { when: 'Months 1–3', title: 'Phase 1 — MVP', desc: 'Pilot vital records with 1 LGA. Digitize archived books.' },
  {
    when: 'Months 4–6',
    title: 'Phase 2 — Expand modules',
    desc: 'Add Land and Judiciary. Ship multi‑role dashboard & citizen portal.'
  },
  { when: 'Months 6–12', title: 'Phase 3 — Scale', desc: 'Sign 1–2 state ministries, launch verification API and reprints.' }
]

