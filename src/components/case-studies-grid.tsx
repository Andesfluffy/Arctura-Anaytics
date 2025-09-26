"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Container } from './container'

const caseStudies = [
  {
    slug: 'enterprise-transformation',
    title: 'Enterprise Data Transformation',
    summary: 'How we revolutionized data operations for a Fortune 500 financial institution',
    cover: '/brand/hero-laptop.jpg',
    tags: ['Data Platform', 'Analytics', 'Cloud']
  },
  {
    slug: 'ai-analytics',
    title: 'AI-Powered Analytics Suite',
    summary: 'Implementing predictive analytics for a global retail chain',
    cover: '/brand/georgie-cobbs-muOHbrFGEQY-unsplash.jpg',
    tags: ['AI/ML', 'Analytics', 'Retail']
  },
  {
    slug: 'cloud-migration',
    title: 'Cloud Migration Success',
    summary: 'Seamless transition to cloud-native data infrastructure',
    cover: '/brand/jeffery-ho-oITfawv6t-8-unsplash.jpg',
    tags: ['Cloud', 'Infrastructure', 'Migration']
  }
]

export function CaseStudiesGrid() {
  const allTags = useMemo(() => {
    const set = new Set<string>()
    caseStudies.forEach((i) => i.tags?.forEach((t) => set.add(t)))
    return Array.from(set).sort()
  }, [])
  const [active, setActive] = useState<string>('')
  const filtered = useMemo(
    () => (active ? caseStudies.filter((i) => i.tags?.includes(active)) : caseStudies),
    [active]
  )

  const r = useReducedMotion()
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="max-w-2xl mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-[#ff4d4d]/20 bg-[#ff4d4d]/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/90 mb-6"
            >
              Case Studies
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Featured Work
            </motion.h2>
            <motion.p
              className="text-[#ffded1] text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Explore how we’ve helped leading organizations transform their data operations and achieve measurable results.
            </motion.p>
          </div>

          {allTags.length ? (
            <motion.div 
              className="flex flex-wrap items-center gap-2 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  active === '' 
                    ? 'border-[#ff4d4d]/40 bg-[#ff4d4d]/10 text-white' 
                    : 'border-white/10 text-white/70 hover:border-[#ff4d4d]/20 hover:bg-[#ff4d4d]/5'
                }`}
                onClick={() => setActive('')}
              >
                All Projects
              </button>
              {allTags.map((t) => (
                <button
                  key={t}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    active === t 
                      ? 'border-[#ff4d4d]/40 bg-[#ff4d4d]/10 text-white' 
                      : 'border-white/10 text-white/70 hover:border-[#ff4d4d]/20 hover:bg-[#ff4d4d]/5'
                  }`}
                  onClick={() => setActive(t)}
                >
                  {t}
                </button>
              ))}
            </motion.div>
          ) : null}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              >
                <Link 
                  href={`/case-studies/${study.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#ff4d4d]/20 to-[#ff6b00]/20 mix-blend-overlay group-hover:opacity-75 transition-opacity duration-300 z-10" />
                    <Image
                      src={study.cover}
                      alt={study.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="inline-flex items-center rounded-full border border-[#ff4d4d]/20 bg-[#ff4d4d]/5 px-3 py-1 text-xs font-medium text-[#ff6b00]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#ff6b00] transition-colors duration-300">
                      {study.title}
                    </h3>
                    <p className="text-[#ffded1] text-sm">
                      {study.summary}
                    </p>
                    <div className="flex items-center pt-2 text-[#ff6b00] text-sm font-medium">
                      Read case study
                      <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <Link 
              href="/case-studies"
              className="inline-flex items-center px-6 py-3 rounded-full border border-[#ff4d4d]/20 bg-[#ff4d4d]/5 text-white font-semibold hover:bg-[#ff4d4d]/10 transition-all duration-300"
            >
              View All Case Studies
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
