'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { HoverLift } from '@/components/hover-lift'
import { ServicesGallery } from '@/components/services-gallery'
import { ParticleField } from '@/components/particles'
import { AnimatedStats } from '@/components/animated-stats'
import { FloatingImages } from '@/components/floating-images'
import { IconGrid } from '@/components/icon-grid'
import { TrustedBy } from '@/components/trusted-by'
import { CaseStudiesGrid } from '@/components/case-studies-grid'
import { EmailCapture } from '@/components/email-capture'

const stats = [
  { value: '15B+', label: 'Data Points Processed' },
  { value: '99.9%', label: 'Platform Uptime' },
  { value: '250+', label: 'Enterprise Clients' },
]

const capabilityCards = [
  {
    id: '01',
    title: 'Data Intelligence Platform',
    summary:
      'Enterprise-grade analytics platform that transforms your raw data into actionable insights through advanced AI and machine learning.',
    detail:
      'Real-time analytics, predictive modeling, and automated reporting systems that drive business decisions.',
  },
  {
    id: '02',
    title: 'Cloud Solutions',
    summary:
      'Scalable cloud infrastructure that ensures high availability, security, and performance for your mission-critical applications.',
    detail:
      'State-of-the-art data centers with enterprise-grade security and compliance standards.',
  },
  {
    id: '03',
    title: 'Digital Transformation',
    summary:
      'End-to-end digital transformation services that modernize your operations and create seamless digital experiences.',
    detail:
      'Custom software solutions, workflow automation, and system integration for maximum efficiency.',
  },
]

export const dynamic = 'force-static'

export default function HomePage() {
  return (
    <main className="bg-black">
      {/* Professional Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Professional Hero Background */}
        <div className="absolute inset-0">
          <Image
            src="/brand/georgie-cobbs-muOHbrFGEQY-unsplash.jpg"
            alt="Enterprise Analytics"
            fill
            className="object-cover"
            priority
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        {/* Elegant Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        <Container className="relative pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
                <span className="inline-flex px-4 py-2 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-white/90 tracking-wide backdrop-blur-sm">
                  Enterprise Analytics Platform
                </span>
                <h1 className="text-5xl lg:text-8xl font-semibold text-white tracking-tight leading-[1.1]">
                  Transform Data Into{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#ff6b00] to-[#ff4d4d]">
                    Business Impact
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Harness the power of advanced analytics and AI to unlock insights from your data. 
                  Our enterprise platform turns complex data into clear, actionable strategies that 
                  drive growth and innovation.
                </p>              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-wrap gap-4 justify-center pt-4"
              >
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-[#ff4d4d] to-[#ff6b00] text-white font-medium rounded-lg inline-flex items-center gap-2 hover:opacity-90 transition-all duration-300"
                >
                  Get Started Free
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </motion.div>

              {/* Key Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-16"
              >
                {stats.map((stat, index) => (
                  <div key={stat.label} className="space-y-2">
                    <div className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                      {stat.value}
                    </div>
                    <div className="text-sm lg:text-base text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Services Gallery */}
      <Section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl mx-auto text-center mb-16"
          >
            <span className="inline-flex px-4 py-2 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-white/90 tracking-wide mb-6">
              Our Solutions
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
              Enterprise-Grade{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#ff6b00] to-[#ff4d4d]">
                Analytics Platform
              </span>
            </h2>
            <p className="text-slate-300 text-lg">
              Powerful analytics tools and AI-driven insights that help businesses make smarter decisions
              and stay ahead of the competition.
            </p>
          </motion.div>
          <ServicesGallery />
        </Container>
      </Section>

      {/* Capabilities Cards */}
      <Section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[#080808]" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl mx-auto text-center mb-16"
          >
            <span className="inline-flex px-4 py-2 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-white/90 tracking-wide mb-6">
              Our Approach
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
              End-to-End{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#ff6b00] to-[#ff4d4d]">
                Capabilities
              </span>
            </h2>
            <p className="text-slate-300 text-lg">
              We bring together strategy, technology, and expertise to deliver complete analytics
              solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilityCards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <HoverLift>
                  <div className="h-full p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-colors duration-300">
                    <div className="text-lg font-medium text-[#ff4d4d] mb-4">{card.id}</div>
                    <h3 className="text-xl font-semibold text-white mb-4">{card.title}</h3>
                    <p className="text-slate-300 mb-6">{card.summary}</p>
                    <p className="text-sm text-slate-400">{card.detail}</p>
                  </div>
                </HoverLift>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 relative">
        <div className="absolute inset-0 bg-[#080808]" />
        <Container className="relative z-10">
          <EmailCapture />
        </Container>
      </Section>
    </main>
  )
}
