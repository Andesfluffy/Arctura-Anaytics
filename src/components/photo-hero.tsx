'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function PhotoHero() {
  const r = useReducedMotion()
  return (
    <section className="relative isolate min-h-[84vh] w-full overflow-hidden flex items-center">
      {/* Background photo covers entire hero */}
      <Image
        src="/brand/hero-laptop.jpg"
        alt="Modern laptop and workspace, symbolizing advanced data analytics"
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIGZpbGw9JyNlZWYnLz48L3N2Zz4="
        className="object-cover brightness-95 contrast-110 saturate-120"
      />
      {/* Brand-tinted overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-slate-900/90" />
      {/* Subtle grain for texture */}
      <div className="grain absolute inset-0 opacity-[0.10] mix-blend-overlay" aria-hidden />

      <div className="container relative z-10 flex min-h-[84vh] flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={r ? undefined : { opacity: 0, y: 14 }}
          animate={r ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-4 tracking-tight"
        >
          Unlock the Power of Your Data
        </motion.h1>
        <motion.p
          initial={r ? undefined : { opacity: 0, y: 10 }}
          animate={r ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.05 }}
          className="mt-2 max-w-2xl text-lg md:text-2xl text-white/90 mx-auto drop-shadow-lg font-medium"
        >
          Transform raw information into actionable insights. We deliver robust, scalable analytics
          solutions for organizations that demand clarity, speed, and results.
        </motion.p>
        <motion.div
          initial={r ? undefined : { opacity: 0, y: 8 }}
          animate={r ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button asChild variant="coral" shape="pill" className="shadow-lg text-lg px-8 py-3">
            <Link href="/contact">Get Started</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            shape="pill"
            className="border-white/80 text-white hover:bg-white/10 text-lg px-8 py-3"
          >
            <Link href="#what">See Capabilities</Link>
          </Button>
        </motion.div>
      </div>

      {/* Subtle slanted divider */}
      <svg
        className="absolute -bottom-1 left-0 right-0"
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M0 80L1440 0V80H0Z" fill="white" />
      </svg>
    </section>
  )
}
