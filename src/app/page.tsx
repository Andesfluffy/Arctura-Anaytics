'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Building2, Layers, ShieldCheck, Sparkles, Workflow } from 'lucide-react'

import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { HoverLift } from '@/components/hover-lift'
import { ServicesGallery } from '@/components/services-gallery'
import { ParticleField } from '@/components/particles'
import { EmailCapture } from '@/components/email-capture'

const heroStats = [
  { value: '30+', label: 'Modern data programmes launched' },
  { value: '12M+', label: 'Residents represented in partner networks' },
  { value: '4.8 / 5', label: 'Average partner satisfaction score' },
]

const heroPillars = [
  {
    title: 'Clarity from complexity',
    description: 'Unify legacy systems, spreadsheets, and civic data streams into a single source of truth.',
  },
  {
    title: 'Intelligence that resonates',
    description: 'Translate analytics into narratives that boards, directors, and frontline teams can trust.',
  },
  {
    title: 'Momentum that lasts',
    description: 'Pair delivery coaches with technologists so programmes keep compounding value after launch.',
  },
]

const marqueeLogos = ['City of Meridian', 'Northwind Utilities', 'Apex Health', 'State of Cascadia', 'Horizon Transit']

const differentiators = [
  {
    title: 'Policy-aware delivery',
    description:
      'We align data foundations with civic mandates, creating roadmaps that pass procurement, compliance, and budget reviews.',
    icon: Building2,
  },
  {
    title: 'Responsible intelligence',
    description:
      'Governance, auditability, and ethical guardrails are built into every dashboard, model, and automated workflow we ship.',
    icon: ShieldCheck,
  },
  {
    title: 'Integrated teams',
    description:
      'Strategists, engineers, and change leaders work as one squad — shortening time-to-insight without sacrificing adoption.',
    icon: Layers,
  },
]

const approachSteps = [
  {
    step: '01',
    title: 'Frame the mission',
    summary: 'Stakeholder workshops and discovery sprints clarify the civic outcomes, data realities, and policy guardrails.',
  },
  {
    step: '02',
    title: 'Design the fabric',
    summary: 'Architect modular pipelines, AI models, and service blueprints that plug into existing procurement and IT ecosystems.',
  },
  {
    step: '03',
    title: 'Activate & scale',
    summary: 'Coach teams through rollouts, embed new rituals, and monitor performance so the work endures after handoff.',
  },
]

const capabilityCards = [
  {
    id: 'A',
    title: 'Insight operating system',
    summary: 'Curated executive and frontline dashboards, decision briefings, and KPI narratives refreshed in real time.',
    detail: 'Launch data stories in weeks with semantic layers, storytelling frameworks, and embedded generative tooling.',
  },
  {
    id: 'B',
    title: 'Modern data platform',
    summary: 'Cloud-native pipelines, lineage monitoring, and privacy-first governance ready for regulated environments.',
    detail: 'Leverage our accelerators for ingestion, quality, and observability to keep trusted data flowing every hour.',
  },
  {
    id: 'C',
    title: 'Service transformation',
    summary: 'Human-centred service design, automation, and AI copilots that improve resident and employee experiences.',
    detail: 'Prototype with residents, codify playbooks, and orchestrate change plans that lift satisfaction metrics.',
  },
]

export const dynamic = 'force-static'

export default function HomePage() {
  return (
    <main id="content" className="bg-black">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/brand/georgie-cobbs-muOHbrFGEQY-unsplash.jpg"
            alt="Team collaborating around a large data wall"
            fill
            priority
            quality={95}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-[#050508]" />
          <div className="absolute inset-0 bg-gradient-to-r from-blac
