
"use client"
import { Container } from '@/components/container'
import { Section, SectionHeader } from '@/components/section'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main id="content">
      <section className="relative isolate min-h-[80vh] w-full overflow-hidden flex items-center justify-center">
        {/* Dark creative background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--bistre)] via-[var(--space-cadet)] to-black opacity-95" />
        {/* Subtle animated grain overlay for edge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="grain absolute inset-0 mix-blend-overlay"
          aria-hidden
        />
        {/* Animated accent border */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          className="absolute top-0 left-0 h-2 accent-bar"
        />
        <Container className="relative z-10 py-20 md:py-32">
          <SectionHeader
            title="About Arctura"
            subtitle="Bold vision. Relentless execution. Data solutions with an edge."
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="prose prose-invert max-w-3xl mx-auto text-white/90 animate-fade-in"
          >
            <h3 className="text-3xl font-bold mb-4 text-gradient">Our Purpose</h3>
            <p className="text-lg mb-6">
              Arctura Analytics is where data meets ambition. We empower organizations to turn raw information into competitive advantage—through clarity, precision, and creative engineering. Our mission: make data your sharpest tool for growth, innovation, and impact.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3 text-gradient">What Sets Us Apart</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>End-to-End Expertise:</strong> Strategy, engineering, analytics, enablement—delivered as one seamless experience.</li>
              <li><strong>Industry-Grade Engineering:</strong> Platforms built for scale, security, and reliability. No shortcuts.</li>
              <li><strong>Business-First Approach:</strong> Your goals drive every solution. We measure success by your outcomes.</li>
              <li><strong>Transparent Partnership:</strong> Open communication, visible progress, and accountability at every step.</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-8 mb-3 text-gradient">How We Deliver</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Discovery & Design:</strong> We map your data landscape, define clear objectives, and architect solutions that fit your business.</li>
              <li><strong>Agile Implementation:</strong> Rapid, iterative delivery with weekly demos, feedback loops, and full transparency.</li>
              <li><strong>Enablement & Adoption:</strong> We empower your teams with training, documentation, and support for long-term success.</li>
              <li><strong>Continuous Improvement:</strong> Ongoing optimization, monitoring, and innovation to keep you ahead of the curve.</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-8 mb-3 text-gradient">Our Promise</h3>
            <p className="text-lg mb-6">
              We deliver solutions that are technically excellent and deeply aligned with your business. With Arctura, you gain a partner who is invested in your success, responsive to your needs, and relentless in pursuit of quality.
            </p>
          </motion.div>
        </Container>
      </section>
    </main>
  )
}
